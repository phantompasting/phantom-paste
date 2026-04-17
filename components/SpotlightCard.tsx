"use client";
import { useCallback, useEffect, useRef } from "react";

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(184,150,15,0.2)",
}: {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // rAF-batch pointer events. Cache the latest coords; flush once per frame.
  // Avoids forcing a style recalculation on every mousemove (60–120+/s).
  const latest = useRef({ x: 0, y: 0 });
  const rafPending = useRef(false);
  const rafId = useRef(0);

  const flush = useCallback(() => {
    rafPending.current = false;
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--mouse-x", `${latest.current.x}px`);
    el.style.setProperty("--mouse-y", `${latest.current.y}px`);
  }, []);

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      latest.current.x = e.clientX - rect.left;
      latest.current.y = e.clientY - rect.top;
      if (!rafPending.current) {
        rafPending.current = true;
        rafId.current = requestAnimationFrame(flush);
      }
    },
    [flush]
  );

  useEffect(() => () => cancelAnimationFrame(rafId.current), []);

  return (
    <div
      ref={ref}
      className={`spotlight-card ${className}`}
      style={{ "--spotlight-color": spotlightColor } as React.CSSProperties}
      onMouseMove={onMove}
    >
      {children}
    </div>
  );
}
