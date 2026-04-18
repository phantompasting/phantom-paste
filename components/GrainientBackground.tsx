"use client";
import { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";

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
  // DPR pinned to 1, NOT clamped to device DPR. The canvas is CSS-blurred
  // at 8px by the compositor — that filter erases any sub-pixel detail
  // a DPR=2 backing store would provide. So DPR=1 is visually identical
  // after composite, but the backing buffer is 4× smaller (2× each axis),
  // the per-frame texture upload is 4× cheaper, and the GPU blur pass
  // processes 4× fewer pixels. This is the single biggest compositor win
  // on Intel iGPU hardware where blur throughput is the bottleneck.
  const dpr = 1;

  worker.postMessage(
    {
      type: "init",
      canvas: offscreen,
      width: window.innerWidth,
      height: window.innerHeight,
      dpr,
    },
    [offscreen],
  );

  const onResize = () =>
    worker.postMessage({ type: "resize", width: window.innerWidth, height: window.innerHeight });
  const onVisibility = () =>
    worker.postMessage({ type: "visibility", hidden: document.hidden });

  // NOTE: No scroll-pause in the worker path. The scroll-pause existed
  // when the canvas loop ran on the main thread (to avoid competing with
  // the scroll compositor commit). In the worker path the canvas runs on
  // a dedicated thread that physically cannot block scroll — pausing it
  // on scroll only produces a visible freeze without any perf benefit.

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
export default function GrainientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const visible = canvasRef.current;
    if (!visible) return;

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
      try {
        return setupWorker(visible);
      } catch (err) {
        // Transfer can be one-shot — if it already succeeded but worker
        // setup failed afterward, the canvas is now detached and the
        // main-thread path won't be able to acquire a 2D context. In
        // that case we leave the backdrop blank (ivory from CSS) rather
        // than crashing. Log in case anyone's watching.
        console.warn("[GrainientBackground] worker setup failed, falling back:", err);
      }
    }

    // ── Fallback (Safari < 16.4 and anything exotic): the existing
    // main-thread implementation. Functionally identical, but runs on
    // the same thread as React — fine on fast machines, can stutter
    // on weak CPUs when the main thread is under load.
    const ctx = visible.getContext("2d");
    if (!ctx) return;

    // Circle count 110 → 80. The buffer-resolution refactor raised the
    // backing pixel count ~7.8× (0.59 MP → 4.6 MP) to eliminate GPU
    // upscaling, which is the right trade for smoothness but costs
    // fillrate. Dropping 30 circles offsets most of the new cost
    // (~27% less arc/fill work) while leaving plenty of circles for
    // a continuous field — post-blur, 80 overlap as much as 110 did.
    // Intel-integrated-GPU MacBooks are the canary here; anything
    // this runs smoothly on will fly on M-series, high-end PCs, and
    // modern phones.
    const circleCount = 60;
    const circlePropCount = 8;
    const circlePropsLength = circleCount * circlePropCount;
    // Speed dropped ~35% from the prior pass (0.23/2.3 → 0.15/1.5) to
    // reduce per-frame displacement below the perceptual-stutter threshold.
    // Semantically these are "pixels per 60fps-equivalent frame" — the
    // paint loop scales them by a per-frame `dt` so apparent drift is
    // frame-rate independent. On a ProMotion 120Hz display we render
    // twice as many frames, each at half the per-frame step, for the
    // same visual speed but visibly smoother motion.
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
      // Coordinates in CSS pixels within the inflated canvas — valid
      // range is [0, cssW] × [0, cssH]. Callers of resize() must run
      // before the first initCircle so cssW/cssH are set.
      const x = rand(cssW);
      const y = rand(cssH);
      const speed = baseSpeed + rand(rangeSpeed);
      const noiseSeed = rand(1000);
      const ttl = baseTTL + rand(rangeTTL);
      // Lifecycle staggering: on the VERY first init pass (stagger=true)
      // we seed each circle at a random point in its lifecycle instead of
      // all at life=0. Without this, all 110 circles spawn together, fade
      // in together ~ttl/2 frames later, and die together ~ttl frames
      // after that — producing a visible "respawn wave" every ~5 seconds.
      // Staggered init distributes births and deaths uniformly across
      // time so the field's evolution is steady forever.
      const life = stagger ? rand(ttl) : 0;
      const radius = baseRadius + rand(rangeRadius);
      // Five-stop lightness ladder unchanged — cream highlight down to
      // brand-gold's true L=48%.
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

    // The canvas is sized 140% of the viewport via CSS (positioned at
    // -20%/-20% inside a 100vw×100vh fixed wrapper), so circles drawn
    // in its edge bands are off-screen and the blur edge-falloff never
    // reaches the viewport. Backing buffer is sized to match display
    // pixels × DPR × the 1.4 inflation factor — no GPU upscale, no
    // sub-pixel interpolation, no "frame-by-frame" chunkiness.
    const INFLATION = 1.4;
    // DPR pinned to 1 (not clamped to device DPR). An 8px CSS blur on
    // the canvas erases any sub-pixel detail a higher DPR buffer would
    // provide, so DPR=1 is visually identical post-composite. Dropping
    // from DPR=2 to DPR=1 shrinks the backing buffer 4× (each axis
    // halved), quartering texture-upload + blur-filter cost per frame.
    // This matters most on the main-thread fallback path (Safari < 16.4)
    // where the CPU is already doing the arc/fill work.
    const dpr = 1;
    // CSS-pixel dimensions of the inflated canvas, used by the drawing
    // code (init, bounds, clear). The backing buffer is dpr× larger;
    // the ctx.setTransform(dpr,dpr) call in resize() remaps drawing
    // coordinates so we never have to think about buffer pixels.
    let cssW = 0;
    let cssH = 0;

    const resize = () => {
      const { innerWidth, innerHeight } = window;
      cssW = innerWidth * INFLATION;
      cssH = innerHeight * INFLATION;
      visible.width = Math.round(cssW * dpr);
      visible.height = Math.round(cssH * dpr);
      // CSS sizing is driven by the parent wrapper's -20% / 140% layout,
      // so we don't need to set width/height styles here.
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    for (let i = 0; i < circlePropsLength; i += circlePropCount) initCircle(i, true);

    const checkBounds = (x: number, y: number, radius: number) =>
      x < -radius ||
      x > cssW + radius ||
      y < -radius ||
      y > cssH + radius;

    // Single-canvas draw — no offscreen, no drawImage, no filter inside
    // canvas context. Circles render sharp; CSS blurs the final element.
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
      // Flow-field steering: simplex noise at (circle's current position,
      // its unique z-seed, slow time drift) yields a value in (-1..1) which
      // maps to a heading angle. Result: each circle traces a smooth
      // curved path that slowly re-curves over its lifetime — organic,
      // "smoke-like" motion instead of straight-line drift. The life*0.003
      // drift coefficient is slow enough that paths read as gentle arcs
      // rather than frantic spirals.
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
    // Previously capped at 60fps even on ProMotion displays. Removing
    // the cap lets 120Hz screens run at native refresh — per-frame
    // displacement halves automatically via the dt scaling, so motion
    // appears just as fast but each visual step is ~0.8px rather than
    // ~1.65px. Sub-perceptual step = essentially stutter-proof.

    const paintFrame = (dt: number) => {
      // Ivory backdrop + sharp circles on the same canvas. The CSS filter
      // blurs the whole thing as a compositor op. Solid-color rect blurs
      // to itself so no edge banding. fillRect coords are in CSS pixels
      // because ctx.setTransform(dpr,dpr) is still active from resize().
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, cssW, cssH);
      for (let i = 0; i < circlePropsLength; i += circlePropCount) updateCircle(i, dt);
    };

    const draw = (ts: number) => {
      raf = window.requestAnimationFrame(draw);
      if (paused || scrolling) return;
      // dt in "60fps-frame-equivalent" units: 1.0 at 60Hz, ~0.5 at 120Hz.
      // Capped at 3 so a briefly-backgrounded tab doesn't teleport every
      // circle a huge distance on resume.
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

    // Paint one static frame so the ivory backdrop is up immediately,
    // then defer the animation loop so it doesn't compete with LCP.
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

    return () => {
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
  }, []);

  return (
    <div
      className="content--canvas"
      aria-hidden
      style={{
        // Fixed wrapper pinned exactly to the viewport. The canvas inside
        // fills this wrapper at 100% then scales up on the GPU — no
        // percentage/scrollbar math, no containing-block surprises.
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          // Native 140% sizing — NO transform scale. The canvas element
          // is larger than the wrapper and positioned at -20%/-20% so
          // its overflow is clipped by the wrapper's overflow:hidden.
          // This keeps the backing buffer at display-resolution: the
          // GPU never upscales, so per-frame motion renders at true
          // pixel fidelity. (The prior `transform: scale(1.4)` version
          // was upscaling a 1× buffer to ~2.8× display size, producing
          // a visible "frame-by-frame" stepping artifact at low blur.)
          position: "absolute",
          top: "-20%",
          left: "-20%",
          width: "140%",
          height: "140%",
          // GPU compositor blur — runs on the compositor thread, not
          // main. translateZ(0) promotes the canvas to its own GPU layer
          // so blur runs on the compositor pipeline, not software.
          // Blur radius 12px → 8px: gaussian-filter cost scales roughly
          // as radius², so 8² / 12² ≈ 44% of the original filter work
          // per composite pass. Paired with DPR=1, the blur processes
          // ~9× fewer pixels through a ~56% cheaper kernel — compositor
          // cost on Intel iGPU drops from "noticeable stutter" to near-zero.
          // The field still reads as a soft gold cloud; 8px is past the
          // threshold where individual circles become visible.
          filter: "blur(8px)",
          transform: "translateZ(0)",
          willChange: "filter, transform",
          backfaceVisibility: "hidden",
        }}
      />
    </div>
  );
}
