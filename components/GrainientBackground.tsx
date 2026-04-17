"use client";
import { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";

/**
 * "Shift" ambient canvas background.
 *
 * Faithful port of the shift technique from crnacura/AmbientCanvasBackgrounds
 * (https://github.com/crnacura/AmbientCanvasBackgrounds, MIT).
 *
 * Rendering pipeline — two canvases, A and B:
 *   1. Canvas A: hard-edged filled circles, colored via
 *      hsla(baseHue + simplexNoise*rangeHue, s, l, fadeInOut-alpha).
 *   2. Canvas B: filled with the solid backgroundColor each frame, then
 *      draws canvas A into itself with ctx.filter = 'blur(50px)'. The blur
 *      is what turns the discrete circles into a continuous shifting field.
 *   3. Only canvas B is in the DOM.
 *
 * `baseHue` increments every frame, so the whole field slowly drifts through
 * the warm brand spectrum. simplex-noise gives each circle its own hue
 * offset, so you see swatches of variation rather than a monotone wash.
 *
 * Brand tuning (the only values that deviate from the reference):
 *   - baseHue starts at 38 (gold) instead of 220 (blue)
 *   - rangeHue 80 so it sweeps through amber → tangerine → peach
 *   - backgroundColor is warm ivory rather than near-black
 *   - saturation/lightness tuned for light-background legibility
 *
 * Performance safeguards layered on top of the reference:
 *   - DPR clamped to 1.5× (blur is fillrate-bound)
 *   - Animation loop paused on visibilitychange and during scroll
 *   - First animation frame deferred via requestIdleCallback so LCP and
 *     hydration run uncontested
 */
export default function GrainientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const visible = canvasRef.current;
    if (!visible) return;
    const ctxB = visible.getContext("2d");
    if (!ctxB) return;

    // Off-screen canvas A — never attached to the DOM.
    const offscreen = document.createElement("canvas");
    const ctxA = offscreen.getContext("2d");
    if (!ctxA) return;

    // Reference values from the shift demo, restored so the look matches
    // the repo's output. Prior rev downscaled the offscreen buffer and
    // dropped circle count — that broke the "shift" continuous-tone look.
    const circleCount = 150;
    const circlePropCount = 8;
    const circlePropsLength = circleCount * circlePropCount;
    // 2× the 15%-bumped value because the paint cap dropped from 120fps to
    // 60fps (see FRAME_BUDGET_MS below) and circle movement is per-paint,
    // not per-second. Doubling the constants restores the ProMotion-era
    // visual speed at the new cap, and gives 60Hz displays the same speed
    // ProMotion used to show — nets out as a uniform, fluid drift on every
    // refresh rate rather than "twice as fast on Macs as on everything else."
    const baseSpeed = 0.23;
    const rangeSpeed = 2.3;
    const baseTTL = 150;
    const rangeTTL = 200;
    const baseRadius = 100;
    const rangeRadius = 200;
    // Tight hue cluster around the brand gold — intentionally small so every
    // circle reads as "that gold" with micro-variation, not as "some yellow."
    const rangeHue = 8;
    const xOff = 0.0015;
    const yOff = 0.0015;
    const zOff = 0.0015;
    // Warm ivory backdrop — a hair of yellow in it so the field doesn't look
    // like it's floating on stark white. Matches the cream highlights.
    const backgroundColor = "#FFFBED";

    const TAU = Math.PI * 2;
    const rand = (n: number) => n * Math.random();
    const fadeInOut = (t: number, m: number) => {
      const hm = 0.5 * m;
      return Math.abs(((t + hm) % m) - hm) / hm;
    };

    const noise3D = createNoise3D();
    // Centered exactly on brand gold (#D4A010 ≈ hsl(45, 86%, 45%)). Every
    // circle's hue is sampled from simplex noise around this anchor, bounded
    // by rangeHue — so the field is a tight cluster of brand-accurate golds.
    const BASE_HUE = 45;

    const circleProps = new Float32Array(circlePropsLength);
    // Parallel arrays for per-circle hue + saturation, computed once at
    // init and reused every frame. Previously these were recomputed per
    // frame inside drawCircle — that meant 150 × simplex-noise3D + 150 ×
    // branching saturation lookups every single paint, just to produce
    // values that never changed during a circle's lifetime. Cache-then-read
    // eliminates ~4500 ops per frame at zero visual cost.
    const circleHue = new Float32Array(circleCount);
    const circleSat = new Float32Array(circleCount);

    const initCircle = (i: number) => {
      const x = rand(offscreen.width);
      const y = rand(offscreen.height);
      const t = rand(TAU);
      const speed = baseSpeed + rand(rangeSpeed);
      const vx = speed * Math.cos(t);
      const vy = speed * Math.sin(t);
      const life = 0;
      const ttl = baseTTL + rand(rangeTTL);
      const radius = baseRadius + rand(rangeRadius);
      // Five-stop lightness ladder, all within the gold family. The top stop
      // renders as yellowish cream (not white) thanks to the saturation curve
      // below. The bottom stop sits on brand gold's actual lightness (#D4A010
      // is ~45% L) for genuine brand anchoring.
      //   ~18% → 91% (cream highlight)
      //   ~28% → 82% (light butter)
      //   ~27% → 70% (bright brand gold)
      //   ~20% → 58% (mid brand gold)
      //   ~ 7% → 48% (deep brand — true #D4A010 tone)
      const r = Math.random();
      const lightness =
        r < 0.18 ? 91 :
        r < 0.46 ? 82 :
        r < 0.73 ? 70 :
        r < 0.93 ? 58 :
        48;
      circleProps.set([x, y, vx, vy, life, ttl, radius, lightness], i);

      // Hue: one simplex sample at init, anchored to this circle's spawn
      // position. Stays constant for the circle's lifetime, so the field
      // still reads as "a cluster of distinct gold swatches."
      const idx = i / circlePropCount;
      const n = noise3D(x * xOff, y * yOff, idx * zOff);
      circleHue[idx] = BASE_HUE + n * rangeHue;
      // Saturation curve — tuned so each lightness stop reads correctly:
      //   ≥ 88 → 48%  cream highlight (keeps a yellow cast, not white)
      //   ≥ 75 → 72%  light butter (soft but warm)
      //   ≥ 62 → 85%  brand-accurate saturated gold
      //   < 62 → 88%  deep brand tone (matches #D4A010's 86%)
      circleSat[idx] =
        lightness >= 88 ? 48 :
        lightness >= 75 ? 72 :
        lightness >= 62 ? 85 :
        88;
    };

    const dpr = () => Math.min(window.devicePixelRatio || 1, 1.5);

    const resize = () => {
      const { innerWidth, innerHeight } = window;
      const d = dpr();
      // Offscreen canvas matches viewport pixel size so the 50px blur has
      // the same visual footprint as the reference demo. Visible canvas
      // takes DPR scaling for sharpness; offscreen doesn't need it because
      // it's being blurred anyway.
      offscreen.width = innerWidth;
      offscreen.height = innerHeight;
      visible.width = innerWidth * d;
      visible.height = innerHeight * d;
      visible.style.width = innerWidth + "px";
      visible.style.height = innerHeight + "px";
      ctxB.setTransform(d, 0, 0, d, 0, 0);
    };

    resize();
    for (let i = 0; i < circlePropsLength; i += circlePropCount) initCircle(i);

    const checkBounds = (x: number, y: number, radius: number) =>
      x < -radius ||
      x > offscreen.width + radius ||
      y < -radius ||
      y > offscreen.height + radius;

    // Solid filled circle on canvas A. Hue + saturation come from the
    // per-circle parallel arrays (computed once at init), so this is pure
    // string-format + arc+fill — no noise call, no branching.
    const drawCircle = (
      x: number,
      y: number,
      life: number,
      ttl: number,
      radius: number,
      lightness: number,
      hue: number,
      sat: number
    ) => {
      ctxA.fillStyle = `hsla(${hue},${sat}%,${lightness}%,${fadeInOut(life, ttl)})`;
      ctxA.beginPath();
      ctxA.arc(x, y, radius, 0, TAU);
      ctxA.fill();
    };

    const updateCircle = (i: number) => {
      const idx = i / circlePropCount;
      const x = circleProps[i] as number;
      const y = circleProps[i + 1] as number;
      const vx = circleProps[i + 2] as number;
      const vy = circleProps[i + 3] as number;
      let life = circleProps[i + 4] as number;
      const ttl = circleProps[i + 5] as number;
      const radius = circleProps[i + 6] as number;
      const lightness = circleProps[i + 7] as number;
      const hue = circleHue[idx] as number;
      const sat = circleSat[idx] as number;
      drawCircle(x, y, life, ttl, radius, lightness, hue, sat);
      life++;
      circleProps[i] = x + vx;
      circleProps[i + 1] = y + vy;
      circleProps[i + 4] = life;
      if (checkBounds(x, y, radius) || life > ttl) initCircle(i);
    };

    const updateCircles = () => {
      for (let i = 0; i < circlePropsLength; i += circlePropCount) updateCircle(i);
    };

    // Composite step: blur canvas A onto canvas B at full reference radius.
    // This IS the shift effect — without the 50px blur the circles read as
    // circles instead of a continuous shifting field.
    const render = () => {
      ctxB.save();
      ctxB.filter = "blur(50px)";
      ctxB.drawImage(offscreen, 0, 0, offscreen.width, offscreen.height);
      ctxB.restore();
    };

    let raf = 0;
    let paused = document.hidden;
    let scrolling = false;
    let scrollEndTimer = 0;
    let lastFrame = 0;

    // 60fps ceiling. Previously 120fps on ProMotion displays — but the
    // blur(50px) pipeline is the most expensive main-thread work on the
    // page, and doubling its paint rate was occasionally stealing budget
    // from the marquee ticker's compositor coordination, showing up as
    // stutter there. The shift field's per-circle velocity is slow enough
    // that 60fps is visually indistinguishable from 120fps — the frames
    // you'd skip by halving the cap are ones where circles moved <1px.
    const FRAME_BUDGET_MS = 1000 / 60;

    const paintFrame = () => {
      ctxA.clearRect(0, 0, offscreen.width, offscreen.height);
      ctxB.fillStyle = backgroundColor;
      ctxB.fillRect(0, 0, offscreen.width, offscreen.height);
      updateCircles();
      render();
    };

    const draw = (ts: number) => {
      raf = window.requestAnimationFrame(draw);
      if (paused || scrolling) return;
      // Skip this vsync if we've drawn within the last 60fps budget. The
      // -1ms fuzz guards against the browser firing rAF a hair early and
      // us skipping a frame we should have painted.
      if (ts - lastFrame < FRAME_BUDGET_MS - 1) return;
      lastFrame = ts;
      paintFrame();
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

    // Paint one static frame so the cream backdrop is up immediately, then
    // defer the animation loop so it doesn't compete with LCP.
    paintFrame();
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
    <div className="content--canvas" aria-hidden>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </div>
  );
}
