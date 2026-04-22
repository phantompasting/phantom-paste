"use client";
import { useEffect, useRef } from "react";

/**
 * Wire up the worker path: transfer the canvas to the Web Worker and
 * forward viewport + lifecycle events. Returns a cleanup function that
 * terminates the worker (killing its rAF loop) and detaches listeners.
 */
function setupWorker(visible: HTMLCanvasElement): () => void {
  const offscreen = visible.transferControlToOffscreen();
  const worker = new Worker(
    new URL("./grainient.worker.ts", import.meta.url),
    { type: "module" },
  );
  // Desktop: DPR=1 keeps backing buffer small vs device DPR (the 8px CSS
  // blur erases sub-pixel detail anyway, so DPR=2 has no visible benefit).
  // Mobile: DPR=0.75 drops the backing buffer by another 44% on top of that
  // — the mobile blur is even stronger (see .grainient-canvas media query
  // in globals.css) so the resolution drop is invisible after composite.
  const isMobile = window.innerWidth <= 767;
  const dpr = isMobile ? 0.75 : 1;

  // Fewer circles on mobile — the field still reads as a soft gold cloud
  // after the blur, and draw-op count scales linearly with circleCount.
  //   Full desktop: 45
  //   Full mobile:  28
  // (Lite mode never reaches this code path — it's short-circuited at the
  // top of the useEffect because the static webp fallback kicks in via
  // globals.css. See GrainientBackground component below.)
  const circleCount = isMobile ? 28 : 45;

  worker.postMessage(
    {
      type: "init",
      canvas: offscreen,
      width: window.innerWidth,
      height: window.innerHeight,
      dpr,
      circleCount,
      isMobile,
    },
    [offscreen],
  );

  const onResize = () =>
    worker.postMessage({ type: "resize", width: window.innerWidth, height: window.innerHeight });
  const onVisibility = () =>
    worker.postMessage({ type: "visibility", hidden: document.hidden });

  window.addEventListener("resize", onResize);
  document.addEventListener("visibilitychange", onVisibility);

  // Defer the rAF start past LCP so the worker doesn't fight for
  // CPU during the initial render.
  let idleHandle: number | null = null;
  let startTimer: number | null = null;
  const start = () => worker.postMessage({ type: "start" });
  const w = window as Window & typeof globalThis;
  if (typeof w.requestIdleCallback === "function") {
    idleHandle = w.requestIdleCallback(start, { timeout: 1500 });
  } else {
    startTimer = window.setTimeout(start, 400);
  }

  return () => {
    window.removeEventListener("resize", onResize);
    document.removeEventListener("visibilitychange", onVisibility);
    if (idleHandle !== null && typeof w.cancelIdleCallback === "function") {
      w.cancelIdleCallback(idleHandle);
    }
    if (startTimer !== null) window.clearTimeout(startTimer);
    worker.terminate();
  };
}

/**
 * "Shift" ambient canvas background — GPU-blurred revision.
 *
 * Adapted from crnacura/AmbientCanvasBackgrounds (MIT). The reference demo
 * uses a two-canvas pipeline where canvas B composites canvas A with
 * `ctx.filter = "blur(50px)"`. That approach is correct conceptually but
 * crashes into a browser reality: Canvas2D filter blur is CPU-rasterized
 * in every major engine (Chrome/Safari/Firefox). A 50px gaussian on a
 * viewport-sized buffer is 15–40ms of main-thread work per frame, which
 * blows the 16.67ms budget — stuttering the field AND starving neighbors
 * like the marquee ticker of their compositor commit.
 *
 * This revision:
 *   • Draws sharp circles directly onto the visible canvas.
 *   • Applies `filter: blur(...)` via CSS to the <canvas> element.
 *   • That filter runs on the GPU compositor thread, essentially for
 *     free — it's the same pipeline that does `backdrop-filter: blur`
 *     and accelerated scrolling.
 *
 * Net: main-thread per-frame cost drops from "blur + fills + drawImage"
 * (~10–30ms) to "fills only" (~1–3ms). The ticker no longer hitches
 * because its compositor layer gets committed on time.
 *
 * Brand tuning retained unchanged from the previous revision:
 *   - BASE_HUE 45 (center of brand gold #D4A010 ≈ hsl(45, 86%, 45%))
 *   - rangeHue 8 (tight cluster of gold tones, not "some yellow")
 *   - ivory backdrop #FFFBED, light-background-tuned L/S ladder
 */
/**
 * Per-canvas worker registry. `transferControlToOffscreen` is one-shot, so
 * once a canvas is transferred we must never retry on that same DOM node.
 * React Strict Mode in dev mounts → unmounts → remounts the effect against
 * the *same* canvas element on purpose (to surface cleanup bugs). Without
 * a registry + deferred teardown, the cleanup terminates the worker and
 * the remount either (a) throws `InvalidStateError` on the second transfer,
 * or (b) short-circuits and leaves the backdrop flat.
 *
 * Strategy:
 *   • Keep the worker cleanup function in a WeakMap keyed by canvas.
 *   • On unmount, schedule cleanup via setTimeout(0) instead of running it.
 *   • If the effect re-runs before that fires (Strict Mode remount), cancel
 *     the pending teardown and reuse the live worker — no re-transfer.
 *
 * In production Strict Mode doesn't double-mount, so the scheduled teardown
 * always runs immediately; the deferred wrapping adds one microtask, which
 * is free.
 */
interface CanvasWorkerEntry {
  cleanup: () => void;
  pendingTeardown: number | null;
}
const canvasWorkers = new WeakMap<HTMLCanvasElement, CanvasWorkerEntry>();

export default function GrainientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const visible = canvasRef.current;
    if (!visible) return;

    // ── Perf-lite bail-out ──────────────────────────────────────────────
    // PerfGate (components/PerfGate.tsx) sets `html.perf-lite` at first
    // paint on hardware that genuinely can't afford the full canvas cost
    // (Intel iGPU Macs, OS reduced-motion, data saver, weak Android).
    //
    // On these devices we abandon the live canvas entirely — even a
    // heavily throttled version (DPR 0.5, 28 circles, 30fps, scroll-pause)
    // still contends with the GPU compositor thread for every texture
    // commit, which shows up as scroll jank. A static background has
    // exactly zero per-frame cost.
    //
    // The visual fallback is a pre-rendered screenshot of the live canvas
    // (`public/perf-lite-bg.webp`, 12KB) wired up via globals.css:
    //   html.perf-lite body { background: url("/perf-lite-bg.webp") ... }
    //   html.perf-lite .grainient-canvas { display: none !important; }
    // So we bail early — never construct the worker, never transfer the
    // canvas, leave the DOM node in place so the `display: none` takes
    // effect without a hydration mismatch.
    if (
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("perf-lite")
    ) {
      return;
    }

    // ── Worker path: transfer the canvas to a Web Worker so the render
    // loop runs on a dedicated thread, never contending with React,
    // GSAP, the ticker, or scroll handlers. Available in all Chromium,
    // Firefox 105+, Safari 16.4+ (~98% global coverage in 2026).
    // See components/grainient.worker.ts.
    //
    // Wrapped in try/catch because module-worker construction can throw
    // in the wild: strict CSP configurations that forget `worker-src`,
    // older Safari betas with buggy `type: "module"` support, extensions
    // that block workers, etc. An uncaught throw here would propagate to
    // React's error boundary and render the unstyled Next error page —
    // falling back to the main-thread implementation is strictly better
    // than a broken page.
    if (typeof visible.transferControlToOffscreen === "function") {
      // Strict Mode remount: if a teardown was scheduled for this canvas,
      // cancel it — the worker is still alive and we should keep it.
      const existing = canvasWorkers.get(visible);
      if (existing) {
        if (existing.pendingTeardown !== null) {
          window.clearTimeout(existing.pendingTeardown);
          existing.pendingTeardown = null;
        }
        // Return a deferred teardown so the next unmount is also cancellable.
        return () => {
          const entry = canvasWorkers.get(visible);
          if (!entry) return;
          entry.pendingTeardown = window.setTimeout(() => {
            entry.cleanup();
            canvasWorkers.delete(visible);
          }, 0);
        };
      }

      // Fresh canvas — set up worker for real.
      try {
        const cleanup = setupWorker(visible);
        const entry: CanvasWorkerEntry = { cleanup, pendingTeardown: null };
        canvasWorkers.set(visible, entry);
        return () => {
          entry.pendingTeardown = window.setTimeout(() => {
            entry.cleanup();
            canvasWorkers.delete(visible);
          }, 0);
        };
      } catch (err) {
        // Transfer can be one-shot — if it already succeeded but worker
        // setup failed afterward, the canvas is now detached and the
        // main-thread path won't be able to acquire a 2D context. In
        // that case we leave the backdrop blank (ivory from CSS) rather
        // than crashing. Log in case anyone's watching.
        console.warn("[GrainientBackground] worker setup failed, falling back:", err);
      }
    }

    // ── Fallback (Safari < 16.4 and anything exotic): lazy-load simplex-noise
    // only when actually needed. The worker path above handles ~98% of browsers,
    // so keeping this import dynamic removes simplex-noise from the critical
    // bundle entirely — zero cost on the main thread for the vast majority of users.
    let cancelled = false;
    let fallbackCleanup: (() => void) | undefined;

    void import("simplex-noise").then(({ createNoise3D }) => {
      if (cancelled) return;

      const ctx = visible.getContext("2d");
      if (!ctx) return;

      const circleCount = 60;
      const circlePropCount = 8;
      const circlePropsLength = circleCount * circlePropCount;
      const baseSpeed = 0.15;
      const rangeSpeed = 1.5;
      const baseTTL = 150;
      const rangeTTL = 200;
      const baseRadius = 100;
      const rangeRadius = 200;
      const rangeHue = 8;
      const xOff = 0.0015;
      const yOff = 0.0015;
      const zOff = 0.0015;
      const backgroundColor = "#FFFBED";

      const TAU = Math.PI * 2;
      const rand = (n: number) => n * Math.random();
      const fadeInOut = (t: number, m: number) => {
        const hm = 0.5 * m;
        return Math.abs(((t + hm) % m) - hm) / hm;
      };

      const noise3D = createNoise3D();
      const BASE_HUE = 45;

      const circleProps = new Float32Array(circlePropsLength);
      const circleHue = new Float32Array(circleCount);
      const circleSat = new Float32Array(circleCount);

      // Float32Array layout (8 slots per circle):
      //   [0] x           position
      //   [1] y           position
      //   [2] speed       scalar magnitude (heading comes from flow field)
      //   [3] noiseSeed   per-circle z-offset into the noise field so each
      //                   circle samples a unique flow — without this, every
      //                   circle at the same (x,y,time) would head the same
      //                   direction and they'd all bunch up
      //   [4] life        age, in 60fps-equivalent frames (incremented by dt)
      //   [5] ttl         lifespan in the same units
      //   [6] radius      drawn circle radius (pre-blur)
      //   [7] lightness   HSL L channel
      const initCircle = (i: number, stagger = false) => {
        const x = rand(cssW);
        const y = rand(cssH);
        const speed = baseSpeed + rand(rangeSpeed);
        const noiseSeed = rand(1000);
        const ttl = baseTTL + rand(rangeTTL);
        // Stagger births across time so the field evolves steadily instead
        // of all circles spawning/dying together in visible waves.
        const life = stagger ? rand(ttl) : 0;
        const radius = baseRadius + rand(rangeRadius);
        const r = Math.random();
        const lightness =
          r < 0.18 ? 91 :
          r < 0.46 ? 82 :
          r < 0.73 ? 70 :
          r < 0.93 ? 58 :
          48;
        circleProps.set([x, y, speed, noiseSeed, life, ttl, radius, lightness], i);

        const idx = i / circlePropCount;
        const n = noise3D(x * xOff, y * yOff, idx * zOff);
        circleHue[idx] = BASE_HUE + n * rangeHue;
        circleSat[idx] =
          lightness >= 88 ? 48 :
          lightness >= 75 ? 72 :
          lightness >= 62 ? 85 :
          88;
      };

      const INFLATION = 1.4;
      const dpr = 1;
      let cssW = 0;
      let cssH = 0;

      const resize = () => {
        const { innerWidth, innerHeight } = window;
        cssW = innerWidth * INFLATION;
        cssH = innerHeight * INFLATION;
        visible.width = Math.round(cssW * dpr);
        visible.height = Math.round(cssH * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      };

      resize();
      for (let i = 0; i < circlePropsLength; i += circlePropCount) initCircle(i, true);

      const checkBounds = (x: number, y: number, radius: number) =>
        x < -radius ||
        x > cssW + radius ||
        y < -radius ||
        y > cssH + radius;

      const drawCircle = (
        x: number, y: number, life: number, ttl: number,
        radius: number, lightness: number, hue: number, sat: number
      ) => {
        ctx.fillStyle = `hsla(${hue},${sat}%,${lightness}%,${fadeInOut(life, ttl)})`;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, TAU);
        ctx.fill();
      };

      const updateCircle = (i: number, dt: number) => {
        const idx = i / circlePropCount;
        const x = circleProps[i] as number;
        const y = circleProps[i + 1] as number;
        const speed = circleProps[i + 2] as number;
        const noiseSeed = circleProps[i + 3] as number;
        const life = circleProps[i + 4] as number;
        const ttl = circleProps[i + 5] as number;
        const radius = circleProps[i + 6] as number;
        const lightness = circleProps[i + 7] as number;
        const hue = circleHue[idx] as number;
        const sat = circleSat[idx] as number;
        drawCircle(x, y, life, ttl, radius, lightness, hue, sat);
        // Flow-field steering: simplex noise maps position → heading angle so
        // each circle traces a smooth organic curved path rather than drifting
        // in a straight line.
        const n = noise3D(x * xOff, y * yOff, noiseSeed + life * 0.003);
        const angle = n * Math.PI;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed;
        circleProps[i] = x + vx * dt;
        circleProps[i + 1] = y + vy * dt;
        circleProps[i + 4] = life + dt;
        if (checkBounds(x, y, radius) || life + dt > ttl) initCircle(i);
      };

      let raf = 0;
      let paused = document.hidden;
      let scrolling = false;
      let scrollEndTimer = 0;
      let lastFrame = 0;

      const paintFrame = (dt: number) => {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, cssW, cssH);
        for (let i = 0; i < circlePropsLength; i += circlePropCount) updateCircle(i, dt);
      };

      const draw = (ts: number) => {
        raf = window.requestAnimationFrame(draw);
        if (paused || scrolling) return;
        const dt = lastFrame === 0 ? 1 : Math.min((ts - lastFrame) / (1000 / 60), 3);
        lastFrame = ts;
        paintFrame(dt);
      };

      const onVisibility = () => { paused = document.hidden; };
      const onScroll = () => {
        scrolling = true;
        if (scrollEndTimer) window.clearTimeout(scrollEndTimer);
        scrollEndTimer = window.setTimeout(() => { scrolling = false; }, 140);
      };

      window.addEventListener("resize", resize);
      document.addEventListener("visibilitychange", onVisibility);
      window.addEventListener("scroll", onScroll, { passive: true, capture: true });

      paintFrame(1);
      let idleHandle = 0;
      let startTimer = 0;
      const start = () => { lastFrame = 0; raf = window.requestAnimationFrame(draw); };
      const w = window as Window & typeof globalThis;
      if (typeof w.requestIdleCallback === "function") {
        idleHandle = w.requestIdleCallback(start, { timeout: 1500 });
      } else {
        startTimer = w.setTimeout(start, 400);
      }

      fallbackCleanup = () => {
        window.removeEventListener("resize", resize);
        document.removeEventListener("visibilitychange", onVisibility);
        window.removeEventListener("scroll", onScroll, { capture: true });
        if (scrollEndTimer) window.clearTimeout(scrollEndTimer);
        if (idleHandle && typeof w.cancelIdleCallback === "function") {
          w.cancelIdleCallback(idleHandle);
        }
        if (startTimer) window.clearTimeout(startTimer);
        window.cancelAnimationFrame(raf);
      };
    });

    return () => {
      cancelled = true;
      fallbackCleanup?.();
    };
  }, []);

  return (
    <div
      className="content--canvas"
      aria-hidden
      style={{
        // Fixed wrapper pinned to the layout viewport. `inset: 0` sizes
        // against the containing block for a `position: fixed` element
        // (the layout viewport) — unlike `height: 100vh` which, on iOS
        // Safari, resolves against the LARGE viewport and flickers when
        // the URL bar hides/shows. This single change removes the
        // mobile-only scroll flash that was caused by the canvas being
        // resized + re-rasterized mid-scroll on every URL bar toggle.
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <canvas
        ref={canvasRef}
        className="grainient-canvas"
      />
    </div>
  );
}
