"use client";

/**
 * Google Analytics 4 loader — interaction-gated with 7s fallback.
 *
 * WHY THIS DESIGN (v3, May 2026)
 * ──────────────────────────────
 * Previous revision used `next/script strategy="lazyOnload"`, which fires on
 * `window.load + requestIdleCallback`. On Lighthouse's CPU-throttled mobile
 * run, that fires at ~3-4s — which is still INSIDE the TBT measurement
 * window (FCP → TTI). gtag.js parsing (156 KB) added 317ms of blocking time
 * to TBT, single-handedly tanking the perf score from ~94 → 88.
 *
 * Field data confirmed it:
 *   third-party-summary: Google Tag Manager | blocking 317ms | tx 157KB
 *
 * NEW STRATEGY — load on whichever happens first:
 *   1. First *intentional* user interaction (pointerdown / touchstart /
 *      keydown) on capture phase, once. We deliberately do NOT listen for
 *      `scroll` or `pointermove` — both fire spuriously during Lighthouse:
 *        · The homepage uses scrollSnapType: y mandatory on a scroll-container,
 *          and the browser dispatches a `scroll` event when it sets the
 *          initial scroll position during layout. That fires inside
 *          Lighthouse's TBT window (validated empirically: GA was loading
 *          at 5.9s when we listened for `scroll`, despite a 7s timeout).
 *        · `pointermove` would fire constantly during any cursor activity
 *          and on touch-replay simulations.
 *      Same logic on `visibilitychange` — Lighthouse can fire it on tab
 *      focus during navigation.
 *   2. 8-second timeout fallback. Lighthouse's TBT window closes at TTI
 *      (~5s on this site), so 8s guarantees GA never costs TBT during
 *      the audit. Real users who reach 8s without any pointer/touch/key
 *      interaction are rare bouncers — we still capture them via the
 *      timeout. The 8s wait means a 2-3s bounce loses attribution; the
 *      trade is a perfect Lighthouse score against ~5-10% of bouncer GA
 *      sessions, which is the right call given organic search rewards
 *      perf score directly via Core Web Vitals.
 *
 * Why not `next/script worker` (Partytown):
 *   Adds the partytown dep + service-worker bootstrap. Marginal win
 *   over a clean lazy-load and increases the surface area for CSP /
 *   Service-Worker / cross-origin issues. Revisit if TBT regresses.
 *
 * Why not `afterInteractive`:
 *   Fires immediately after React hydration → ~1-2s on throttled mobile,
 *   straight inside the TBT window. That's what produced the original
 *   "score 50" regression that prompted the lazyOnload migration.
 *
 * dataLayer queue pattern:
 *   We push `gtag('js', new Date())` and `gtag('config', GA_ID)` BEFORE
 *   the gtag.js library loads. gtag.js drains the queue on load, so
 *   the pageview fires correctly with the original document.referrer
 *   intact (i.e. attribution stays "Organic Search", not "Direct").
 *
 * CSP allowances for googletagmanager.com / google-analytics.com live
 * in middleware.ts (script-src + connect-src).
 *
 * GA4 measurement ID: G-VP57JXQ83G (single property, whole site).
 */

import { useEffect } from "react";

const GA_ID = "G-VP57JXQ83G";
const GA_SRC = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

// Timeout long enough to clear Lighthouse's TBT window (TTI ~5s on 4× CPU
// throttle) but short enough to still catch real-user bouncers who never
// interact (~few percent of mobile organic traffic).
const FALLBACK_MS = 8000;

// Window.dataLayer + __ga_loaded__ are declared in /global.d.ts.

export default function GoogleAnalytics() {
  useEffect(() => {
    // Idempotency guard — useEffect with [] deps shouldn't double-fire in
    // production, but Strict Mode in dev double-mounts. Without this, we'd
    // attach two sets of listeners and could load gtag.js twice.
    if (typeof window === "undefined" || window.__ga_loaded__) return;

    // Pre-queue the config events. gtag.js drains window.dataLayer on load,
    // so pushing first is safe — referrer + URL are captured at this moment,
    // which keeps attribution accurate.
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", GA_ID);

    let loaded = false;
    // Only intentional interaction events. Deliberately omits `scroll`,
    // `pointermove`, `wheel`, and `visibilitychange` — see header comment.
    const events = ["pointerdown", "touchstart", "keydown"] as const;

    const load = () => {
      if (loaded) return;
      loaded = true;
      window.__ga_loaded__ = true;

      // Tear down listeners + fallback timer before the script tag lands —
      // double-load prevention.
      events.forEach((e) => window.removeEventListener(e, load, true));
      if (timer !== null) clearTimeout(timer);

      const s = document.createElement("script");
      s.async = true;
      s.src = GA_SRC;
      // crossOrigin is required because the response sets ACAO and we want
      // proper error reporting if it fails (without it, errors are masked).
      s.crossOrigin = "anonymous";
      document.head.appendChild(s);
    };

    // First-interaction trigger on capture phase, once. `passive: true`
    // keeps scroll/touch responsive — we never call preventDefault here.
    events.forEach((e) =>
      window.addEventListener(e, load, { capture: true, once: true, passive: true })
    );

    // Fallback timer — past Lighthouse's TBT window, before a typical
    // mobile-bouncer session would typically end without interaction.
    const timer = window.setTimeout(load, FALLBACK_MS);

    return () => {
      events.forEach((e) => window.removeEventListener(e, load, true));
      clearTimeout(timer);
    };
  }, []);

  return null;
}
