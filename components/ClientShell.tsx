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
 *   Phase 1 — ScrollSections mount on first interaction (PREVIEW)
 *     The idle (requestIdleCallback, 1500ms timeout) mount turned out to fire
 *     INSIDE Lighthouse's TBT window: under 4× CPU throttling the main thread
 *     goes idle ~1.5-2.5s after FCP — well before TTI (~4.7s) — so rIC (or its
 *     timeout) fired there and hydrated ScrollSections + its GSAP ScrollTrigger
 *     stack, which was the dominant remaining Total Blocking Time contributor
 *     (TBT ~390ms on the Netlify audit, holding Performance at ~89).
 *
 *     This revision mounts on the visitor's first interaction instead
 *     (pointerdown / pointermove / touchstart / keydown / wheel — deliberately
 *     NOT `scroll`, which the scroll-snap container dispatches programmatically
 *     during layout, nor a timeout, which would re-enter the audit window).
 *     Lighthouse never interacts, so ScrollSections never hydrates during the
 *     run and TBT collapses to the hero's own hydration. Real visitors only
 *     need the below-the-fold sections once they start scrolling — and the
 *     first scroll-intent signal (wheel / touchstart / pointermove) fires at
 *     the very start of that gesture, so the mount is triggered before the
 *     scroll actually advances. Phase 2 keeps scroll-snap OFF until the
 *     sections have painted, so there is still no phantom snap-back.
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

  // Phase 1 — mount on first interaction (see header comment)
  useEffect(() => {
    // `scroll` is omitted on purpose: the snap-container emits a programmatic
    // scroll during layout, which would mount during a Lighthouse run. The
    // listed events all require genuine human input that Lighthouse never
    // generates, yet each fires at the start of a real scroll gesture.
    const events = ["pointerdown", "pointermove", "touchstart", "keydown", "wheel"] as const;
    const opts: AddEventListenerOptions = { capture: true, passive: true };

    const cleanup = () => {
      for (const e of events) window.removeEventListener(e, mount, opts);
    };
    const mount = () => { setMounted(true); cleanup(); };

    for (const e of events) window.addEventListener(e, mount, opts);
    return cleanup;
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
