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

    const onScroll = () => {
      const { scrollTop, clientHeight } = container;
      const idx = Math.round(scrollTop / clientHeight);
      setActive(Math.min(idx, SECTIONS.length - 1));
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
        gap: "8px",
        pointerEvents: "none",
      }}
    >
      {SECTIONS.map((s, i) => (
        <button
          key={s.key}
          title={s.label}
          onClick={() => scrollTo(i)}
          style={{
            pointerEvents: "all",
            width: i === active ? "6px" : "4px",
            height: i === active ? "20px" : "4px",
            borderRadius: "3px",
            border: "none",
            padding: 0,
            cursor: "pointer",
            background: i === active
              ? "#D4A010"
              : "rgba(0,0,0,0.18)",
            transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
            boxShadow: i === active ? "0 0 8px rgba(184,150,15,0.6)" : "none",
          }}
          aria-label={`Go to ${s.label}`}
        />
      ))}
    </div>
  );
}
