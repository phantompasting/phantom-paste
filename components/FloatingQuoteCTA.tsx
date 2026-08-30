"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const EXPO = "cubic-bezier(0.16, 1, 0.3, 1)";

/**
 * Desktop-only floating "Get a Quote" pill, fixed to the top-right corner.
 * Fades in once the visitor scrolls past the top of the page (where the
 * in-nav CTA lives) so the button never leaves the corner — and fades back
 * out at the top so it never doubles up with the nav's own button.
 *
 * The homepage scrolls an inner [data-scroll-container] (snap deck);
 * every other page scrolls the window — we listen to whichever exists.
 * Mobile is untouched: both navs are fixed/sticky there already.
 */
export default function FloatingQuoteCTA() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // The homepage snap deck ([data-scroll-container]) mounts on first
    // interaction — after this effect runs — so the container is re-queried
    // per read, and the listener sits on document in CAPTURE phase (element
    // scroll events don't bubble, but capture sees them all).
    const read = () => {
      const container = document.querySelector("[data-scroll-container]");
      return Math.max(
        container ? (container as HTMLElement).scrollTop : 0,
        window.scrollY
      );
    };

    // Direct setState per event — one boolean compare; React bails when the
    // value is unchanged, so no rAF throttle needed (and rAF stalls in
    // hidden/background tabs anyway).
    const onScroll = () => setShow(read() > 300);

    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true, capture: true });
    return () => document.removeEventListener("scroll", onScroll, { capture: true });
  }, [pathname]);

  // The contact page IS the quote form — a floating CTA there is noise.
  if (pathname === "/contact") return null;

  return (
    <a
      href="/contact"
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      className="hidden md:inline-flex fixed items-center gap-2 font-bold text-[10px] tracking-[0.2em] uppercase no-underline px-5 py-2.5 rounded-full overflow-hidden"
      style={{
        top: "18px",
        right: "clamp(16px, 4vw, 64px)",
        zIndex: 60,
        background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)",
        color: "#FFF",
        boxShadow: "0 2px 16px rgba(0,0,0,0.35), 0 1px 0 rgba(255,255,255,0.08) inset",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(-10px)",
        pointerEvents: show ? "auto" : "none",
        transition: `opacity 0.3s ${EXPO}, transform 0.3s ${EXPO}`,
      }}
    >
      <span
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(196,162,18,0.22) 0%, transparent 48%)" }}
      />
      Get a Quote
      <span aria-hidden style={{ color: "#D4A010" }}>→</span>
    </a>
  );
}
