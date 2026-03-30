"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import SnapProgress from "@/components/SnapProgress";
import GrainientBackground from "@/components/GrainientBackground";

const ScrollSections = dynamic(() => import("@/components/sections/ScrollSections"), { ssr: false });

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Defer below-fold sections until browser is idle so LCP is captured first
    if ("requestIdleCallback" in window) {
      const id = (window as Window & typeof globalThis).requestIdleCallback(
        () => setMounted(true),
        { timeout: 2000 }
      );
      return () => (window as Window & typeof globalThis).cancelIdleCallback(id);
    }
    const t = setTimeout(() => setMounted(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <main style={{ background: "#FFFEF8", position: "relative", color: "#1A1A1A" }}>
      <GrainientBackground />
      <SnapProgress />
      <div
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
