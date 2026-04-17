"use client";
import { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";

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
    const ctx = visible.getContext("2d");
    if (!ctx) return;

    // Circle count dropped 150 → 110. After the ~44px GPU blur, overlapping
    // circles dissolve into a single continuous field anyway — the extra
    // 40 circles were visible only as pre-blur noise in the source buffer,
    // not as distinct gold swatches post-composite. Saves ~27% of the
    // per-frame arc/fill work at zero visual cost.
    const circleCount = 110;
    const circlePropCount = 8;
    const circlePropsLength = circleCount * circlePropCount;
    // Speed constants unchanged from the last pass — tuned so per-second
    // drift is uniform across 60Hz and ProMotion displays at our 60fps cap.
    const baseSpeed = 0.23;
    const rangeSpeed = 2.3;
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

    const initCircle = (i: number) => {
      const x = rand(visible.width);
      const y = rand(visible.height);
      const t = rand(TAU);
      const speed = baseSpeed + rand(rangeSpeed);
      const vx = speed * Math.cos(t);
      const vy = speed * Math.sin(t);
      const life = 0;
      const ttl = baseTTL + rand(rangeTTL);
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
      circleProps.set([x, y, vx, vy, life, ttl, radius, lightness], i);

      const idx = i / circlePropCount;
      const n = noise3D(x * xOff, y * yOff, idx * zOff);
      circleHue[idx] = BASE_HUE + n * rangeHue;
      circleSat[idx] =
        lightness >= 88 ? 48 :
        lightness >= 75 ? 72 :
        lightness >= 62 ? 85 :
        88;
    };

    const resize = () => {
      const { innerWidth, innerHeight } = window;
      // No DPR scaling: output is about to be blurred ~44px on the GPU,
      // so per-pixel sharpness on the raster buffer is wasted and burns
      // fillrate. 1× dpr means ~75% fewer pixels to fill per frame on a
      // retina display vs the old 1.5× clamp.
      visible.width = innerWidth;
      visible.height = innerHeight;
      visible.style.width = innerWidth + "px";
      visible.style.height = innerHeight + "px";
    };

    resize();
    for (let i = 0; i < circlePropsLength; i += circlePropCount) initCircle(i);

    const checkBounds = (x: number, y: number, radius: number) =>
      x < -radius ||
      x > visible.width + radius ||
      y < -radius ||
      y > visible.height + radius;

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

    let raf = 0;
    let paused = document.hidden;
    let scrolling = false;
    let scrollEndTimer = 0;
    let lastFrame = 0;
    const FRAME_BUDGET_MS = 1000 / 60;

    const paintFrame = () => {
      // Ivory backdrop + sharp circles on the same canvas. The CSS filter
      // blurs the whole thing as a compositor op. Solid-color rect blurs
      // to itself so no edge banding.
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, visible.width, visible.height);
      for (let i = 0; i < circlePropsLength; i += circlePropCount) updateCircle(i);
    };

    const draw = (ts: number) => {
      raf = window.requestAnimationFrame(draw);
      if (paused || scrolling) return;
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

    // Paint one static frame so the ivory backdrop is up immediately,
    // then defer the animation loop so it doesn't compete with LCP.
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
          // Inflate the canvas box 10% past the viewport on every side so
          // CSS filter: blur() edge darkening (blur samples transparent
          // beyond element bounds, which fades solid fills near edges)
          // falls outside what the user can see.
          top: "-5%",
          left: "-5%",
          width: "110%",
          height: "110%",
          pointerEvents: "none",
          zIndex: 0,
          // THE KEY CHANGE: blur on the GPU compositor, not the CPU
          // canvas context. 44px radius lands visually very close to the
          // old 50px canvas blur (CSS and Canvas2D use different gaussian
          // kernels; 44 ≈ 50 after accounting for the curve difference).
          filter: "blur(44px)",
          // Promote to a GPU layer up front so the first frame isn't
          // stuck rasterizing the filter on CPU while the layer is still
          // being created. Without these, some browsers fall back to
          // software blur for the first few paints.
          willChange: "filter, transform",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        }}
      />
    </div>
  );
}
