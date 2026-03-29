"use client";

import { useRef, useCallback } from "react";
import ClickSpark from "@/components/ClickSpark";

const EXPO = "cubic-bezier(0.16, 1, 0.3, 1)";

function useMagnet(strength = 0.35) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia("(hover: none)").matches) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * strength;
    const y = (e.clientY - (top + height / 2)) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  }, [strength]);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  }, []);

  return { ref, onMove, onLeave };
}

export function MagneticPrimaryCTA() {
  const { ref, onMove, onLeave } = useMagnet(0.3);

  return (
    <ClickSpark sparkColor="#D4A010" sparkRadius={28} sparkCount={10}>
      <a
        ref={ref}
        href="#contact"
        className="hero-cta-primary relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-8 py-4 rounded-full overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)",
          color: "#FFF",
          boxShadow: "0 4px 28px rgba(0,0,0,0.42), 0 1px 0 rgba(255,255,255,0.08) inset, 0 -1px 0 rgba(0,0,0,0.35) inset",
          transition: `transform 0.5s ${EXPO}, box-shadow 0.3s ${EXPO}`,
        }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {/* Top-edge gold gloss */}
        <span className="absolute inset-0 pointer-events-none rounded-full" style={{
          background: "linear-gradient(180deg, rgba(196,162,18,0.28) 0%, transparent 48%)",
        }} />
        Launch Campaign
        <span className="cta-arrow" style={{ color: "#D4A010" }}>→</span>
      </a>
    </ClickSpark>
  );
}

export function MagneticSecondaryCTA() {
  const { ref, onMove, onLeave } = useMagnet(0.25);

  return (
    <a
      ref={ref}
      href="#work"
      className="hero-cta-secondary inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.18em] uppercase no-underline px-6 py-4 rounded-full"
      style={{
        color: "rgba(0,0,0,0.72)",
        background: "rgba(255,255,255,0.9)",
        border: "1px solid rgba(0,0,0,0.14)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)",
        transition: `transform 0.5s ${EXPO}, background 0.25s ease, color 0.25s ease`,
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      View Work
      <span className="cta-arrow">→</span>
    </a>
  );
}
