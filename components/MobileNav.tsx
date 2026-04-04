"use client";

import { useState, useEffect, useRef } from "react";

const ACCENT = "#D4A010";

const TOP_LINKS = [
  { label: "Services", href: "/services/wheat-pasting" },
  { label: "Gallery",  href: "/gallery" },
  { label: "About",    href: "/about" },
] as const;

const CITIES = [
  { label: "New York",    href: "/locations/new-york" },
  { label: "Los Angeles", href: "/locations/los-angeles" },
  { label: "Chicago",     href: "/locations/chicago" },
  { label: "Atlanta",     href: "/locations/atlanta" },
  { label: "Miami",       href: "/locations/miami" },
] as const;

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setCitiesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  function close() {
    setOpen(false);
    setCitiesOpen(false);
  }

  return (
    <div ref={ref} className="md:hidden relative">
      {/* Hamburger / X */}
      <button
        onClick={() => { setOpen(o => !o); setCitiesOpen(false); }}
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
            backdropFilter: "blur(20px) saturate(1.6)",
            WebkitBackdropFilter: "blur(20px) saturate(1.6)",
            border: "1px solid rgba(255,255,255,0.7)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          <ul className="list-none m-0 p-0 flex flex-col">
            {/* Regular links */}
            {TOP_LINKS.map(({ label, href }) => (
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

            {/* Cities accordion */}
            <li>
              <button
                onClick={() => setCitiesOpen(o => !o)}
                className="w-full flex items-center justify-between font-mono text-[11px] tracking-[0.22em] uppercase py-2.5 px-4 rounded-xl cursor-pointer"
                style={{ background: "none", border: "none", fontFamily: "inherit", color: "rgba(0,0,0,0.65)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,0,0,0.04)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <span>Cities</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden
                  style={{ transition: "transform 0.2s", transform: citiesOpen ? "rotate(180deg)" : "none", opacity: 0.45 }}>
                  <path d="M2.5 4.5L6 7.5L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* City sub-links */}
              {citiesOpen && (
                <ul className="list-none m-0 pl-4 pr-2 pb-1 flex flex-col gap-0.5">
                  {CITIES.map(({ label, href }) => (
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
          </ul>

          {/* Get a Quote CTA */}
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
          </div>
        </div>
      )}
    </div>
  );
}
