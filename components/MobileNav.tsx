"use client";

import { useState, useEffect, useRef } from "react";
import { BUSINESS } from "@/lib/business";

const ACCENT = "#D4A010";

// ── Mobile menu order ────────────────────────────────────────────────────────
// Requested order: Services · Gallery · Locations · Blog · About · (Get a Quote)
// Services is the only accordion; everything else is a flat link.
//
// Locations was previously a nested accordion (8 quick-access cities + "All
// Locations" link). Removed because:
//   1. Nested accordions cost users 3-4 taps to reach the full markets list,
//      hiding the nationwide footprint behind a tap-to-expand interaction.
//   2. The /locations hub now has the comprehensive 13-state + 17-city grid
//      with FAQs + explainer — that IS the canonical "see everything" page,
//      so the mobile nav should route users straight there.
//   3. Mega-footer (every page) already lists every state + city as crawlable
//      anchors, so users who scroll get the full inventory anyway.
const LINKS_AFTER_SERVICES = [
  { label: "Gallery",   href: "/gallery" },
  { label: "Locations", href: "/locations" },
  { label: "Blog",      href: "/blog" },
  { label: "About",     href: "/about" },
] as const;

const SERVICES = [
  { label: "Wheat Pasting",         href: "/services/wheat-pasting" },
  { label: "Chalk Spray Stencils",  href: "/services/chalk-spray-stencils" },
  { label: "Full Impact Campaigns", href: "/services/full-impact-campaigns" },
] as const;

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  function close() {
    setOpen(false);
    setServicesOpen(false);
  }

  return (
    <div ref={ref} className="md:hidden relative">
      {/* Hamburger / X */}
      <button
        onClick={() => { setOpen(o => !o); setServicesOpen(false); }}
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex flex-col items-center justify-center w-10 h-10 gap-[5px] cursor-pointer"
        style={{ background: "none", border: "none", padding: 0 }}
      >
        <span className="block w-5 h-[1.5px] transition-all duration-300 origin-center"
          style={{ background: "#1A1A1A", transform: open ? "translateY(6.5px) rotate(45deg)" : "none" }} />
        <span className="block w-5 h-[1.5px] transition-all duration-200"
          style={{ background: "#1A1A1A", opacity: open ? 0 : 1 }} />
        <span className="block w-5 h-[1.5px] transition-all duration-300 origin-center"
          style={{ background: "#1A1A1A", transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none" }} />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute top-full right-0 mt-2 py-3 px-2 rounded-2xl min-w-[200px]"
          style={{
            background: "rgba(255,254,248,0.97)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.7)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          <ul className="list-none m-0 p-0 flex flex-col">
            {/* Services accordion */}
            <li>
              <button
                onClick={() => setServicesOpen(o => !o)}
                className="w-full flex items-center justify-between font-mono text-[11px] tracking-[0.22em] uppercase py-2.5 px-4 rounded-xl cursor-pointer"
                style={{ background: "none", border: "none", color: "rgba(0,0,0,0.65)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,0,0,0.04)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <span>Services</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden
                  style={{ transition: "transform 0.2s", transform: servicesOpen ? "rotate(180deg)" : "none", opacity: 0.45 }}>
                  <path d="M2.5 4.5L6 7.5L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {servicesOpen && (
                <ul className="list-none m-0 pl-4 pr-2 pb-1 flex flex-col gap-0.5">
                  {SERVICES.map(({ label, href }) => (
                    <li key={href}>
                      <a
                        href={href}
                        onClick={close}
                        className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase no-underline py-2 px-3 rounded-lg"
                        style={{ color: "rgba(0,0,0,0.55)" }}
                        onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,0,0,0.04)")}
                        onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                      >
                        <span className="block w-1 h-1 rounded-full shrink-0" style={{ background: ACCENT }} />
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Gallery + Locations + Blog + About (flat links).
                Locations is a direct anchor → /locations, NOT an accordion.
                See LINKS_AFTER_SERVICES docstring for the rationale. */}
            {LINKS_AFTER_SERVICES.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={close}
                  className="block font-mono text-[11px] tracking-[0.22em] uppercase no-underline py-2.5 px-4 rounded-xl"
                  style={{ color: "rgba(0,0,0,0.65)" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,0,0,0.04)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Get a Quote CTA + compact click-to-call below
              (smaller type + tighter tracking so the full number fits without
              wrapping on narrow dropdowns). */}
          <div className="mx-2 mt-2 pt-2" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
            <a
              href="/contact"
              onClick={close}
              className="flex items-center justify-center font-bold text-[10px] tracking-[0.2em] uppercase no-underline px-4 py-2.5 rounded-full"
              style={{
                background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)",
                color: "#FFF",
                boxShadow: "0 2px 12px rgba(0,0,0,0.30)",
              }}
            >
              Get a Quote
            </a>
            <a
              href={BUSINESS.telHref}
              onClick={close}
              aria-label={`Call Phantom Pasting at ${BUSINESS.telephoneDisplay}`}
              className="flex items-center justify-center gap-1.5 font-mono uppercase no-underline mt-2 py-1.5"
              style={{
                fontSize: "9.5px",
                letterSpacing: "0.14em",
                color: "rgba(0,0,0,0.72)",
                whiteSpace: "nowrap",
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ color: ACCENT, flexShrink: 0 }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>Call {BUSINESS.telephoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
