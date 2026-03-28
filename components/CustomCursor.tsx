"use client";

/**
 * Custom gold crosshair cursor — desktop only.
 * Performance-optimised: zero React state updates during mouse movement.
 * All position/scale changes go directly to the DOM via ref + requestAnimationFrame.
 * No React re-renders while moving — only on mount/unmount.
 */
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const elRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const pending = useRef({ x: -100, y: -100 });
  const isActive = useRef(false);
  const isVisible = useRef(false);

  useEffect(() => {
    const cursor = elRef.current;
    if (!cursor) return;

    /* Flush pending position to DOM — called once per animation frame */
    const flush = () => {
      cursor.style.left = `${pending.current.x}px`;
      cursor.style.top = `${pending.current.y}px`;
      rafRef.current = null;
    };

    const onMove = (e: MouseEvent) => {
      pending.current = { x: e.clientX, y: e.clientY };
      /* Show on first real movement */
      if (!isVisible.current) {
        isVisible.current = true;
        cursor.style.opacity = "1";
      }
      /* Schedule one flush per frame — skip if one is already queued */
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(flush);
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element;
      const active = !!target.closest(
        'a, button, [role="button"], input, textarea, select, label, [tabindex]'
      );
      if (active !== isActive.current) {
        isActive.current = active;
        cursor.style.transform = `translate(-50%, -50%) scale(${active ? 1.65 : 1})`;
      }
    };

    const onLeave = () => {
      isVisible.current = false;
      cursor.style.opacity = "0";
    };

    /* passive: true lets the browser skip calling preventDefault checks → faster scroll */
    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={elRef}
      aria-hidden
      style={{
        position: "fixed",
        left: "-100px",
        top: "-100px",
        transform: "translate(-50%, -50%) scale(1)",
        pointerEvents: "none",
        zIndex: 99999,
        opacity: 0,
        transition: "transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease",
        willChange: "transform",
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ display: "block" }}>
        <circle cx="12" cy="12" r="2.5" stroke="#B8960F" strokeWidth="1.5" />
        <line x1="12" y1="1.5"  x2="12" y2="7.5"  stroke="#B8960F" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="16.5" x2="12" y2="22.5" stroke="#B8960F" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="1.5" y1="12"  x2="7.5" y2="12"  stroke="#B8960F" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16.5" y1="12" x2="22.5" y2="12" stroke="#B8960F" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}
