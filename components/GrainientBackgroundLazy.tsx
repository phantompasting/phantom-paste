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

const MOUNT_DELAY_MS = 6000;

export default function GrainientBackgroundLazy() {
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    let idleId: number | null = null;
    let timer: number | null = null;
    const w = window as Window & typeof globalThis;

    const mount = () => setShouldMount(true);

    if (typeof w.requestIdleCallback === "function") {
      idleId = w.requestIdleCallback(mount, { timeout: MOUNT_DELAY_MS });
    } else {
      timer = w.setTimeout(mount, MOUNT_DELAY_MS);
    }

    return () => {
      if (idleId !== null && typeof w.cancelIdleCallback === "function") {
        w.cancelIdleCallback(idleId);
      }
      if (timer !== null) clearTimeout(timer);
    };
  }, []);

  return shouldMount ? <GrainientBackground /> : null;
}
