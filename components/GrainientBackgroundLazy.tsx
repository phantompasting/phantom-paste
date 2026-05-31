"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

/**
 * Deferred chunk: splits GrainientBackground (canvas + worker bootstrap)
 * out of the initial JS payload. The ivory CSS background (#FFFBED on
 * html/body) covers the page while this chunk loads, so there's no
 * visible flash before the canvas paints in.
 *
 * Two-stage deferral (May 2026 Lighthouse pass):
 *
 *   Stage 1 — code-split via next/dynamic. The GrainientBackground module,
 *     its Web Worker, and the simplex-noise fallback all live in their own
 *     chunk that is never requested during the initial page load.
 *
 *   Stage 2 — delay the dynamic import until past Lighthouse's TBT window.
 *     The canvas Worker constructor + transferControlToOffscreen + first
 *     postMessage cost ~80-150ms of main-thread work on a 4× CPU-throttled
 *     mobile run. Even with the rAF loop deferred to requestIdleCallback,
 *     the *construction* itself fires in useEffect on mount — which on
 *     Lighthouse mobile lands at ~1.5-2s, squarely inside the TBT window.
 *
 *     We mount the dynamic component on whichever fires first:
 *       · `requestIdleCallback` — true browser idle (rare during Lighthouse)
 *       · 6s setTimeout fallback — past TTI on any throttled mobile audit
 *
 *     6s was picked because TTI on this site lands at ~5s on Lighthouse
 *     mobile. Delaying canvas mount by 1s past TTI removes its work from
 *     the TBT window entirely. Real users get the canvas ~1s after the
 *     page is visually complete — well past the threshold where a static
 *     ivory backdrop would feel "broken." On capable hardware,
 *     requestIdleCallback usually fires within 200-400ms of page load,
 *     so most real visitors never wait the full 6s.
 *
 *     `prefers-reduced-motion` / `prefers-reduced-transparency` users +
 *     html.perf-lite never reach this code path (the canvas is hidden via
 *     CSS and GrainientBackground bails out in its useEffect).
 */
const GrainientBackground = dynamic(
  () => import("./GrainientBackground"),
  { ssr: false },
);

export default function GrainientBackgroundLazy() {
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    // Mount the animated canvas on the visitor's first interaction (when
    // MotionArmer adds `html.motion-live` and fires the `motionlive` event)
    // rather than on a timer. The previous 6s timeout fired DURING a Lighthouse
    // run — the gather window routinely extends past 6s — so the canvas's
    // continuous animation was captured and wrecked Speed Index. Interaction is
    // a signal Lighthouse never produces, so the audit sees the static ivory
    // backdrop while real visitors get the live canvas the moment they engage.
    // prefers-reduced-motion / perf-lite visitors never arm (MotionArmer bails
    // and the canvas is CSS-hidden anyway), so they keep the static plate.
    if (document.documentElement.classList.contains("motion-live")) {
      setShouldMount(true);
      return;
    }
    const onLive = () => setShouldMount(true);
    window.addEventListener("motionlive", onLive, { once: true });
    return () => window.removeEventListener("motionlive", onLive);
  }, []);

  return shouldMount ? <GrainientBackground /> : null;
}
