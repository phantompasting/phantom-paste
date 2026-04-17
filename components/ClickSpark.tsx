"use client";
// Adapted from ReactBits ClickSpark — https://reactbits.dev/animations/click-spark
// NB: previous version ran a perpetual rAF loop that cleared and repainted
// the canvas every frame even when no sparks were active. Two instances mount
// on the homepage (primary + secondary CTA), so that's two always-on rAF
// loops burning main-thread time for no visible output. Now the loop only
// runs while sparks are live and stops itself once the set is empty.
import { useRef, useEffect, useCallback } from "react";

export default function ClickSpark({
  children,
  sparkColor = "#D4A010",
  sparkSize = 8,
  sparkRadius = 22,
  sparkCount = 8,
  duration = 450,
}: {
  children: React.ReactNode;
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<{ x: number; y: number; angle: number; startTime: number }[]>([]);
  const rafRef = useRef<number>(0);
  const runningRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const resize = () => {
      const { width, height } = parent.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };
    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    resize();
    return () => ro.disconnect();
  }, []);

  // Build `draw` once as a callback so we can spin it up from handleClick and
  // let it self-terminate when the spark pool is empty.
  const draw = useCallback((ts: number) => {
    const canvas = canvasRef.current;
    if (!canvas) { runningRef.current = false; return; }
    const ctx = canvas.getContext("2d");
    if (!ctx) { runningRef.current = false; return; }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sparksRef.current = sparksRef.current.filter((s) => {
      const t = ts - s.startTime;
      if (t >= duration) return false;
      const p = t / duration;
      const ease = p * (2 - p);
      const dist = ease * sparkRadius;
      const len = sparkSize * (1 - ease);
      const x1 = s.x + dist * Math.cos(s.angle);
      const y1 = s.y + dist * Math.sin(s.angle);
      const x2 = s.x + (dist + len) * Math.cos(s.angle);
      const y2 = s.y + (dist + len) * Math.sin(s.angle);
      ctx.strokeStyle = sparkColor;
      ctx.lineWidth = 1.5;
      ctx.globalAlpha = 1 - p;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.globalAlpha = 1;
      return true;
    });

    if (sparksRef.current.length > 0) {
      rafRef.current = requestAnimationFrame(draw);
    } else {
      // One final clear to wipe any trailing pixels, then idle.
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      runningRef.current = false;
    }
  }, [sparkColor, sparkSize, sparkRadius, duration]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleClick = useCallback((e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const now = performance.now();
    const newSparks = Array.from({ length: sparkCount }, (_, i) => ({
      x, y,
      angle: (2 * Math.PI * i) / sparkCount,
      startTime: now,
    }));
    sparksRef.current.push(...newSparks);
    if (!runningRef.current) {
      runningRef.current = true;
      rafRef.current = requestAnimationFrame(draw);
    }
  }, [sparkCount, draw]);

  return (
    <span style={{ position: "relative", display: "inline-flex" }} onClick={handleClick}>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: -20,
          width: "calc(100% + 40px)",
          height: "calc(100% + 40px)",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />
      {children}
    </span>
  );
}
