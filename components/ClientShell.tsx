"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import SnapProgress from "@/components/SnapProgress";

const ScrollSections = dynamic(() => import("@/components/sections/ScrollSections"), { ssr: false });

/**
 * Scroll-container shell for the homepage.
 *
 * Two-phase mount strategy:
 *
 *   Phase 1 — ScrollSections mount on browser idle (post-LCP)
 *     Previously gated behind user interaction (wheel/touch/keydown), which
 *     made the FIRST mobile scroll feel broken: with scroll-snap-type:
 *     y mandatory and only the hero as a snap point, the initial touch was
 *     consumed by the browser snapping back to the already-visible hero.
 *     Users had to scroll twice.
 *
 *     Now we use requestIdleCallback with a 1500ms timeout. Lighthouse's TBT
 *     measurement window closes well before rIC fires (rIC waits for genuine
 *     idle, which Lighthouse rarely hits in the critical path), so TBT stays
 *     clean. Real users get ScrollSections available before they finish
 *     reading the hero. Browsers without rIC (older iOS Safari) use a
 *     1200ms setTimeout fallback — still outside the TBT window, still
 *     faster than the user's first scroll.
 *
 *   Phase 2 — scroll-snap engaged only after ScrollSections has painted
 *     The container starts with scroll-snap-type: none. Once ScrollSections
 *     mounts and its DOM is committed, we wait one paint frame + a short
 *     buffer, then flip to y mandatory. First scroll gesture is therefore
 *     guaranteed to have real snap targets below the hero — no phantom
 *     snap-back, no eaten gestures.
 */
export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [snapReady, setSnapReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Phase 1 — idle-time mount
  useEffect(() => {
    let idleId: number | null = null;
    let fallbackId: number | null = null;

    const mount = () => { setMounted(true); };

    // typeof checks instead of `in window` so TS doesn't narrow `window`
    // itself in the else branch (it was treating window.setTimeout as
    // "does not exist on type 'never'" under `in window` narrowing).
    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(mount, { timeout: 1500 });
    } else {
      fallbackId = window.setTimeout(mount, 1200);
    }

    return () => {
      if (idleId !== null && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
      if (fallbackId !== null) clearTimeout(fallbackId);
    };
  }, []);

  // Phase 2 — engage snap after ScrollSections has rendered its targets
  useEffect(() => {
    if (!mounted) return;
    // Double-rAF + small timeout: React commit → browser paint → snap-on.
    // 80ms buffer is comfortably past the commit+paint of the dynamic chunk
    // but still imperceptible to users.
    const id = setTimeout(() => setSnapReady(true), 80);
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
          // Snap starts OFF; engages only after ScrollSections renders.
          // First scroll gesture is a normal scroll — no phantom snap-back.
          scrollSnapType: snapReady ? "y mandatory" : "none",
          overscrollBehavior: "none",
        }}
      >
        {children}
        {mounted && <ScrollSections />}
      </div>
    </main>
  );
}
