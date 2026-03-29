"use client";
import { useRef } from "react";

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

  return (
    <div
      ref={ref}
      className={`spotlight-card ${className}`}
      style={{ "--spotlight-color": spotlightColor } as React.CSSProperties}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        ref.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        ref.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      }}
    >
      {children}
    </div>
  );
}
