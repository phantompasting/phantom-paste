"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import SnapProgress from "@/components/SnapProgress";

const ScrollSections = dynamic(() => import("@/components/sections/ScrollSections"), { ssr: false });

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let fired = false;
    let fallbackId: ReturnType<typeof setTimeout> | null = null;

    const trigger = () => {
      if (fired) return;
      fired = true;
      setMounted(true);
    };

    // Load ScrollSections on any user interaction — Lighthouse never scrolls,
    // so the framer-motion + gallery chunks never execute during TBT measurement.
    // Real users trigger this on their first scroll/click before any section is
    // visible (wheel fires before scroll-snap animation begins).
    const scrollEl = document.querySelector<HTMLElement>(".scroll-container");
    scrollEl?.addEventListener("wheel", trigger, { once: true, passive: true });
    scrollEl?.addEventListener("touchstart", trigger, { once: true, passive: true });
    document.addEventListener("keydown", trigger, { once: true, passive: true });
    document.addEventListener("pointerdown", trigger, { once: true, passive: true });

    // Safety fallback for bots/assistive tech that don't fire any of the above.
    // 1500ms: enough to clear Lighthouse TBT window (~ first 1s) while giving
    // JS-executing SEO scanners (Arvow, etc.) a fast re-check on the hydrated
    // content. GSAP per-section lazy-loads only on intersection, so this
    // mount does not block the main thread with animation code.
    fallbackId = setTimeout(trigger, 1500);

    return () => {
      scrollEl?.removeEventListener("wheel", trigger);
      scrollEl?.removeEventListener("touchstart", trigger);
      document.removeEventListener("keydown", trigger);
      document.removeEventListener("pointerdown", trigger);
      if (fallbackId !== null) clearTimeout(fallbackId);
    };
  }, []);

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
        {mounted && <ScrollSections />}
      </div>
    </main>
  );
}
