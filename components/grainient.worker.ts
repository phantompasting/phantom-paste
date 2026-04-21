/// <reference lib="webworker" />
/**
 * Ambient "gold cloud" canvas renderer, running in a Web Worker.
 *
 * Why a worker: on older CPUs (Intel Macs, mid-tier laptops) the main
 * thread is already busy with React hydration, GSAP tweens, and the
 * homepage ticker. When a main-thread rAF loop has to share time with
 * those, canvas frames skip — producing perceived "choppy" motion even
 * though the canvas draw cost itself is small. Moving the loop into a
 * worker gives it a dedicated JS thread: main-thread contention can no
 * longer starve it, and the worker can never be blocked by React or
 * scroll handlers.
 *
 * Communication protocol (main → worker):
 *   - init       : transfer the OffscreenCanvas + initial dimensions + dpr
 *   - resize     : viewport changed
 *   - visibility : tab became hidden / visible → pause / resume
 *   - scroll     : user is actively scrolling → pause briefly
 *   - start      : begin the rAF loop (deferred past LCP)
 *
 * Worker uses its own `requestAnimationFrame` on the worker global scope
 * (available in Chrome 69+, Firefox 104+, Safari 16.4+). Simplex-noise
 * runs unchanged in a worker context — no DOM dependencies.
 */
import { createNoise3D } from "simplex-noise";

// ───── Tuning constants (match the main-thread implementation) ─────
// circleCount is mutable — the main thread passes a smaller value on
// mobile (see setupWorker in GrainientBackground.tsx). Float32Array
// buffers are allocated/reallocated on init when the count is known.
let circleCount = 60;
const circlePropCount = 8;
let circlePropsLength = circleCount * circlePropCount;
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
const BASE_HUE = 45;
const INFLATION = 1.4;
const TAU = Math.PI * 2;

// ───── Helpers ─────
const rand = (n: number) => n * Math.random();
const fadeInOut = (t: number, m: number) => {
  const hm = 0.5 * m;
  return Math.abs(((t + hm) % m) - hm) / hm;
};

// ───── Worker state ─────
let canvas: OffscreenCanvas | null = null;
let ctx: OffscreenCanvasRenderingContext2D | null = null;
let dpr = 1;
let cssW = 0;
let cssH = 0;
let raf = 0;
let paused = false;
let lastFrame = 0;
let started = false;
// Mobile softens the L/S ladder so the darkest tier (L=48, S=88%) never
// saturates into "supper yellow" on small devices where the backdrop
// occupies a larger share of the visible area.
let isMobile = false;

const noise3D = createNoise3D();
let circleProps = new Float32Array(circlePropsLength);
let circleHue = new Float32Array(circleCount);
let circleSat = new Float32Array(circleCount);

// ───── Simulation ─────
function initCircle(i: number, stagger = false) {
  const x = rand(cssW);
  const y = rand(cssH);
  const speed = baseSpeed + rand(rangeSpeed);
  const noiseSeed = rand(1000);
  const ttl = baseTTL + rand(rangeTTL);
  const life = stagger ? rand(ttl) : 0;
  const radius = baseRadius + rand(rangeRadius);
  const r = Math.random();
  // Mobile ladder lifts the darkest tiers (L 48→53, L 58→62) and slightly
  // caps saturation — roughly 10% less "dark yellow" at the intense end
  // (halfway between no-change and the stronger 15% pass that was too
  // desaturated). Pale highs stay identical so the overall cloud still
  // reads as gold, just a shade gentler.
  const lightness = isMobile
    ? (r < 0.18 ? 91 :
       r < 0.46 ? 82 :
       r < 0.73 ? 71 :
       r < 0.93 ? 62 :
       53)
    : (r < 0.18 ? 91 :
       r < 0.46 ? 82 :
       r < 0.73 ? 70 :
       r < 0.93 ? 58 :
       48);
  circleProps.set([x, y, speed, noiseSeed, life, ttl, radius, lightness], i);
  const idx = i / circlePropCount;
  const n = noise3D(x * xOff, y * yOff, idx * zOff);
  circleHue[idx] = BASE_HUE + n * rangeHue;
  circleSat[idx] = isMobile
    ? (lightness >= 88 ? 45 :
       lightness >= 75 ? 68 :
       lightness >= 62 ? 80 :
       82)
    : (lightness >= 88 ? 48 :
       lightness >= 75 ? 72 :
       lightness >= 62 ? 85 :
       88);
}

function doResize(w: number, h: number) {
  if (!canvas || !ctx) return;
  cssW = w * INFLATION;
  cssH = h * INFLATION;
  canvas.width = Math.round(cssW * dpr);
  canvas.height = Math.round(cssH * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function checkBounds(x: number, y: number, radius: number) {
  return x < -radius || x > cssW + radius || y < -radius || y > cssH + radius;
}

function drawCircle(
  x: number, y: number, life: number, ttl: number,
  radius: number, lightness: number, hue: number, sat: number,
) {
  if (!ctx) return;
  ctx.fillStyle = `hsla(${hue},${sat}%,${lightness}%,${fadeInOut(life, ttl)})`;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, TAU);
  ctx.fill();
}

function updateCircle(i: number, dt: number) {
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
  const n = noise3D(x * xOff, y * yOff, noiseSeed + life * 0.003);
  const angle = n * Math.PI;
  const vx = Math.cos(angle) * speed;
  const vy = Math.sin(angle) * speed;
  circleProps[i] = x + vx * dt;
  circleProps[i + 1] = y + vy * dt;
  circleProps[i + 4] = life + dt;
  if (checkBounds(x, y, radius) || life + dt > ttl) initCircle(i);
}

function paintFrame(dt: number) {
  if (!ctx) return;
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, cssW, cssH);
  for (let i = 0; i < circlePropsLength; i += circlePropCount) updateCircle(i, dt);
}

// Target ~30fps for the ambient cloud. The visual motion is glacial enough
// that 30fps and 60fps are indistinguishable to the eye, but 30fps halves the
// compositor-commit rate on the main GPU: every worker paint forces the
// browser compositor to re-sample our canvas texture AND re-run the CSS
// gaussian blur filter. On Intel iGPUs that blur pass is 3–6ms, so halving
// commit rate is worth ~1.5–3ms of reclaimed frame budget for the REST of
// the page (scroll, ticker, CTAs) to render smoothly.
const MIN_FRAME_GAP_MS = 33;

function draw(ts: number) {
  raf = (self as DedicatedWorkerGlobalScope).requestAnimationFrame(draw);
  if (paused) return;
  // Skip this rAF tick if we painted less than MIN_FRAME_GAP_MS ago. We
  // keep the rAF loop itself running (rather than using setTimeout) so
  // frames stay aligned to the display's vsync — a setTimeout-based
  // cadence would emit frames at times the compositor isn't ready for
  // them, wasting the texture upload.
  if (lastFrame !== 0 && ts - lastFrame < MIN_FRAME_GAP_MS) return;
  // dt is still in "60fps-frame-equivalent" units (1.0 at 60Hz). At our
  // 30fps cadence dt ≈ 2.0 per paint, which the existing delta-time
  // scaling already handles — motion speed stays identical to before.
  const dt = lastFrame === 0 ? 1 : Math.min((ts - lastFrame) / (1000 / 60), 3);
  lastFrame = ts;
  paintFrame(dt);
}

// ───── Message handler ─────
type InitMsg = { type: "init"; canvas: OffscreenCanvas; width: number; height: number; dpr: number; circleCount?: number; isMobile?: boolean };
type ResizeMsg = { type: "resize"; width: number; height: number };
type VisibilityMsg = { type: "visibility"; hidden: boolean };
type StartMsg = { type: "start" };
// Scroll messages are intentionally NOT handled here. The scroll-pause
// existed for the main-thread path where the canvas loop competed with
// the scroll compositor. On the worker thread the loop is isolated —
// it cannot block scroll — so pausing it on scroll only produces a
// visible freeze with no performance benefit.
type Msg = InitMsg | ResizeMsg | VisibilityMsg | StartMsg;

self.onmessage = (e: MessageEvent<Msg>) => {
  const msg = e.data;
  if (msg.type === "init") {
    canvas = msg.canvas;
    ctx = canvas.getContext("2d");
    if (!ctx) return;
    dpr = msg.dpr;
    if (typeof msg.isMobile === "boolean") isMobile = msg.isMobile;
    // If main thread passed a smaller circleCount (mobile), re-allocate the
    // typed-array buffers to match. Happens once at init; no per-frame cost.
    if (typeof msg.circleCount === "number" && msg.circleCount !== circleCount) {
      circleCount = msg.circleCount;
      circlePropsLength = circleCount * circlePropCount;
      circleProps = new Float32Array(circlePropsLength);
      circleHue = new Float32Array(circleCount);
      circleSat = new Float32Array(circleCount);
    }
    doResize(msg.width, msg.height);
    for (let i = 0; i < circlePropsLength; i += circlePropCount) initCircle(i, true);
    // One-shot paint so the backdrop is up immediately even before the
    // main thread calls `start`.
    paintFrame(1);
  } else if (msg.type === "resize") {
    doResize(msg.width, msg.height);
  } else if (msg.type === "visibility") {
    paused = msg.hidden;
  } else if (msg.type === "start") {
    if (started) return;
    started = true;
    lastFrame = 0;
    raf = (self as DedicatedWorkerGlobalScope).requestAnimationFrame(draw);
  }
};

// Prevent module-treating errors when imported as a worker
export {};
