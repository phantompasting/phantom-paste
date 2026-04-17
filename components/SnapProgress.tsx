"use client";

import { useEffect, useState, useRef } from "react";

const SECTIONS = [
  { key: "hero",     label: "Hero" },
  { key: "stats",    label: "Stats" },
  { key: "step-1",   label: "Brief Us" },
  { key: "step-2",   label: "We Plan" },
  { key: "step-3",   label: "We Deploy" },
  { key: "step-4",   label: "You See It" },
  { key: "services", label: "Wheat Pasting" },
  { key: "service-2",label: "Stencils" },
  { key: "service-3",label: "Full Impact" },
  { key: "why",      label: "Why Guerrilla" },
  { key: "work",     label: "Gallery" },
  { key: "contact",  label: "Contact" },
  { key: "faq",      label: "FAQ" },
];

export default function SnapProgress() {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = document.querySelector("[data-scroll-container]") as HTMLElement;
    if (!container) return;
    containerRef.current = container;

    // rAF-throttle + change-only gate. The scroll event fires at display rate
    // (60–120Hz), but `idx` only changes once per full section (every 100dvh).
    // We (1) coalesce N scroll events per frame into one read and (2) only
    // call setState when the computed index actually changed. Previously the
    // handler called setActive on every scroll event — React bails on equal
    // state, but the callback itself still ran per event.
    let last = -1;
    let pending = false;
    const flush = () => {
      pending = false;
      const { scrollTop, clientHeight } = container;
      const idx = Math.min(Math.round(scrollTop / clientHeight), SECTIONS.length - 1);
      if (idx !== last) {
        last = idx;
        setActive(idx);
      }
    };
    const onScroll = () => {
      if (!pending) {
        pending = true;
        requestAnimationFrame(flush);
      }
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (idx: number) => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollTo({ top: idx * container.clientHeight, behavior: "smooth" });
  };

  return (
    <div
      className="snap-progress hidden md:flex"
      style={{
        position: "fixed",
        right: "20px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 50,
        flexDirection: "column",
        alignItems: "center",
        // gap 0: the 24px buttons are touching, giving 24px center-to-center
        // spacing which satisfies WCAG AA Target Size (Minimum) — the safe
        // clickable diameter between neighbors is exactly 24px. Visual
        // rhythm is preserved because the visible dot inside each button
        // is still tiny (4px inactive / 6×20 active) and centered.
        gap: 0,
        pointerEvents: "none",
      }}
    >
      {SECTIONS.map((s, i) => (
        // Button is a 24×24 transparent hit area (WCAG AA requires ≥24px
        // touch targets); the visible dot/pill is a child that stays
        // visually tiny while the actual click region is full-size.
        <button
          key={s.key}
          title={s.label}
          onClick={() => scrollTo(i)}
          style={{
            pointerEvents: "all",
            width: "24px",
            height: "24px",
            padding: 0,
            border: "none",
            background: "transparent",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label={`Go to ${s.label}`}
        >
          <span
            aria-hidden
            style={{
              display: "block",
              width: i === active ? "6px" : "4px",
              height: i === active ? "20px" : "4px",
              borderRadius: "3px",
              background: i === active
                ? "#D4A010"
                : "rgba(0,0,0,0.18)",
              transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow: i === active ? "0 0 8px rgba(184,150,15,0.6)" : "none",
            }}
          />
        </button>
      ))}
    </div>
  );
}
