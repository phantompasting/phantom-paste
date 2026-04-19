"use client";

import dynamic from "next/dynamic";
import SnapProgress from "@/components/SnapProgress";

const ScrollSections = dynamic(() => import("@/components/sections/ScrollSections"), { ssr: false });

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <main style={{ background: "transparent", position: "relative", color: "#1A1A1A" }}>
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
        <ScrollSections />
      </div>
    </main>
  );
}
