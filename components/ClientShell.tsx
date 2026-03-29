"use client";

import { useState, useEffect } from "react";
import SnapProgress from "@/components/SnapProgress";
import GrainientBackground from "@/components/GrainientBackground";
import ScrollSections from "@/components/sections/ScrollSections";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
