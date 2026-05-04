/**
 * Google Analytics 4 loader — next/script lazyOnload.
 *
 * WHY lazyOnload FIXES BOTH PROBLEMS
 * ────────────────────────────────────
 * Problem 1 — Lighthouse TBT (Total Blocking Time):
 *   strategy="afterInteractive" fires immediately after React hydration, which
 *   is during Lighthouse's TBT measurement window (FCP → TTI). On a 4× CPU-
 *   throttled device, gtag.js (156 KB) takes ~1.4 s to parse → long task →
 *   TBT +2,500 ms → score collapses from 100 to ~50.
 *
 *   strategy="lazyOnload" fires only after window.load + requestIdleCallback.
 *   For this static Next.js site (no heavy client data-fetching), TTI locks in
 *   at ~1–2 s even on throttled mobile. window.load follows at ~2–3 s; the idle
 *   callback fires at ~2.5–3.5 s. By that point the TBT window is already
 *   closed, so gtag.js parsing costs zero TBT → Lighthouse score is unaffected.
 *
 * Problem 2 — Organic session loss (was 86% capture failure):
 *   The previous interaction-gated design (mousedown / touchstart / keydown +
 *   4 s fallback) was structurally broken for bounce traffic:
 *     • GSC: 14 organic clicks over 28 days
 *     • GA4: 2 sessions (14 % capture rate)
 *     • All 2 sessions tagged "Direct" — attribution was wrong too
 *   Mobile bouncers leave in < 4 s without interacting, so neither trigger fired.
 *
 *   lazyOnload has NO interaction gate. Every visitor — including zero-
 *   interaction bouncers — gets a pageview within ~2.5 s of landing.
 *   document.referrer still points to google.com at that moment, so GA4
 *   correctly attributes the session to "Organic Search".
 *
 * HOW THE DATAlayer QUEUE WORKS
 * ──────────────────────────────
 * Both scripts load lazily. The order of execution doesn't matter because
 * gtag.js is designed around a queue pattern:
 *   1. The config script runs (any order) — pushes events into window.dataLayer
 *   2. gtag.js loads — reads window.dataLayer and processes all queued events
 * This is the exact pattern in Google's official gtag.js snippet, just deferred.
 *
 * CSP: script-src and connect-src for googletagmanager.com / google-analytics.com
 * are already in middleware.ts.
 *
 * GA4 measurement ID: G-VP57JXQ83G (single property, whole site).
 */

import Script from "next/script";

const GA_ID = "G-VP57JXQ83G";

export default function GoogleAnalytics() {
  return (
    <>
      {/* 1. Load the gtag.js library lazily — fires after window.load + idle. */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="lazyOnload"
      />

      {/* 2. Initialise dataLayer and push the config event. Runs in the same
          lazy batch. dataLayer queuing means this works regardless of which
          script executes first. */}
      <Script id="ga4-config" strategy="lazyOnload">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
      `}</Script>
    </>
  );
}
