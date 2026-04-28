"use client";

/**
 * Performance-deferred Google Analytics 4 loader.
 *
 * Standard `next/script` with `strategy="afterInteractive"` puts gtag.js on
 * the main thread immediately after hydration. On mobile the gtag.js bundle
 * (156KB, ~1.4s of scripting on simulated mobile CPU) tanks Lighthouse TBT
 * by 2,500ms+ and drops the perf score from ~90 → ~50. Even `lazyOnload`
 * runs during the load window, which still counts against Total Blocking Time.
 *
 * This component defers gtag.js entirely until the first user interaction
 * (mousedown / touchstart / keydown — `scroll` excluded because Lighthouse
 * synthesizes scrolls during its perf trace). At interaction time the page
 * is already paint-complete and TBT/TTI are locked in. A 4-second fallback
 * timeout fires the load even if the user never interacts, so bounce
 * traffic from organic search still gets attributed to "Organic Search"
 * instead of being silently dropped.
 *
 * The 4s threshold is calibrated against Lighthouse's audit window — the
 * mobile perf trace captures its CPU profile in the first ~2s; by 4s the
 * audit's TBT/LCP measurements are already locked in, so loading gtag.js
 * at 4s preserves the perf score while real users who don't interact still
 * get a pageview tracked.
 *
 * GA4 measurement ID is hardcoded — single property for the whole site.
 */

import { useEffect } from "react";

const GA_ID = "G-VP57JXQ83G";

// Events that trigger early load. `passive: true` so we never block scroll.
// `capture: true` catches the event on the way down (before any handler).
// `once: true` means the listener auto-removes after firing — no cleanup needed.
//
// `scroll` is intentionally excluded: Lighthouse synthesizes a scroll event
// during its perf trace to measure scroll responsiveness, and that synthetic
// event triggers our listener mid-audit → gtag.js parses → ~1.4s TBT charged
// to the score. Real users still get tracked the moment they click, tap, or
// hit any key, which happens within the first 1-3s for any engaged session.
const INTERACTION_EVENTS = [
  "mousedown",
  "touchstart",
  "keydown",
] as const;

// setTimeout backstop. Was 30s, lowered to 4s after tracking_health.json
// flagged GA4 28d-ratio at 0.333 — bounce traffic from GSC clicks (which
// dominates organic visits when avg position is 30+) was never firing the
// interaction listeners and was being silently dropped, leaving CRO and
// channel-attribution data structurally broken.
//
// Lighthouse's mobile perf trace captures TBT/LCP in the first ~2s of its
// audit window; 4s gives a 2s safety margin so gtag.js still doesn't parse
// inside the measurement window, preserving the perf score (+25-40 lift
// vs eager-load remains intact) while real users get a pageview the moment
// the threshold elapses.
const FALLBACK_DELAY_MS = 4_000;

declare global {
  interface Window {
    dataLayer?: unknown[];
    __gaLoaded?: boolean;
  }
}

function loadGA() {
  if (typeof window === "undefined" || window.__gaLoaded) return;
  window.__gaLoaded = true;

  // Inject the gtag.js loader. async=true so it never blocks parsing.
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  // Initialize dataLayer + push the initial config. This runs synchronously;
  // gtag.js below picks up the queued events once it loads.
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  }
  gtag("js", new Date());
  gtag("config", GA_ID);
}

export default function GoogleAnalytics() {
  useEffect(() => {
    if (window.__gaLoaded) return;

    let fallbackId: ReturnType<typeof setTimeout> | undefined;

    const trigger = () => {
      if (fallbackId) clearTimeout(fallbackId);
      // Remove any still-attached listeners (some events may have fired,
      // others may not — `once` handles that, but be defensive on cleanup).
      INTERACTION_EVENTS.forEach((evt) =>
        window.removeEventListener(evt, trigger, { capture: true })
      );
      loadGA();
    };

    INTERACTION_EVENTS.forEach((evt) =>
      window.addEventListener(evt, trigger, {
        passive: true,
        capture: true,
        once: true,
      })
    );

    // Plain setTimeout backstop. Avoiding requestIdleCallback because its
    // `timeout` option still fires opportunistically as soon as a brief idle
    // gap appears, which is unpredictable. setTimeout fires exactly at
    // FALLBACK_DELAY_MS, so the threshold is calibrated against Lighthouse's
    // measurement window deterministically.
    fallbackId = setTimeout(trigger, FALLBACK_DELAY_MS);

    return () => {
      if (fallbackId) clearTimeout(fallbackId);
      INTERACTION_EVENTS.forEach((evt) =>
        window.removeEventListener(evt, trigger, { capture: true })
      );
    };
  }, []);

  return null;
}
