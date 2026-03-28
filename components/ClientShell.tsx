"use client";

import dynamic from "next/dynamic";
import Background3D from "@/components/Background3D";

/* Framer Motion + scroll sections load after hero is interactive */
const ScrollSections = dynamic(
  () => import("@/components/sections/ScrollSections"),
  { ssr: false, loading: () => null }
);

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <main style={{ background: "#F2F0EC", position: "relative", color: "#1A1A1A" }}>
      <Background3D />
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
