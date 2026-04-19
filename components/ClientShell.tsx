"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import SnapProgress from "@/components/SnapProgress";

const ScrollSections = dynamic(() => import("@/components/sections/ScrollSections"), { ssr: false });

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let fired = false;

    const trigger = () => {
      if (fired) return;
      fired = true;
      // Drop snap immediately (synchronous DOM write) so the gesture that
      // triggered this isn't blocked by scroll-snap snapping back to the
      // hero before sections exist. Snap is restored after sections mount.
      if (containerRef.current) {
        containerRef.current.style.scrollSnapType = "none";
      }
      setMounted(true);
    };

    const scrollEl = containerRef.current;
    scrollEl?.addEventListener("wheel", trigger, { once: true, passive: true });
    scrollEl?.addEventListener("touchstart", trigger, { once: true, passive: true });
    document.addEventListener("keydown", trigger, { once: true, passive: true });
    document.addEventListener("pointerdown", trigger, { once: true, passive: true });

    // Fallback for Lighthouse / bots that never interact — fires after TTI
    // window so the ScrollSections chunk doesn't count toward TBT.
    const fallbackId = setTimeout(trigger, 4000);

    return () => {
      scrollEl?.removeEventListener("wheel", trigger);
      scrollEl?.removeEventListener("touchstart", trigger);
      document.removeEventListener("keydown", trigger);
      document.removeEventListener("pointerdown", trigger);
      clearTimeout(fallbackId);
    };
  }, []);

  // Re-enable snap after ScrollSections has had time to mount and render.
  useEffect(() => {
    if (!mounted) return;
    const id = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.style.scrollSnapType = "y mandatory";
      }
    }, 400);
    return () => clearTimeout(id);
  }, [mounted]);

  return (
    <main style={{ background: "transparent", position: "relative", color: "#1A1A1A" }}>
      <SnapProgress />
      <div
        ref={containerRef}
        data-scroll-container
        className="scroll-container"
        style={{
          position: "relative",
          zIndex: 1,
          height: "100dvh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          overscrollBehavior: "none",
        }}
      >
        {children}
        {mounted && <ScrollSections />}
      </div>
    </main>
  );
}
