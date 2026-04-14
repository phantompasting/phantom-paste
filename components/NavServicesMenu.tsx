"use client";

import { useState } from "react";

const SERVICES = [
  { label: "Wheat Pasting",         href: "/services/wheat-pasting" },
  { label: "Chalk Spray Stencils",  href: "/services/chalk-spray-stencils" },
  { label: "Full Impact Campaigns", href: "/services/full-impact-campaigns" },
] as const;

const ACCENT = "#D4A010";

/** Desktop-only Services nav item with hover dropdown */
export default function NavServicesMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span
        className="nav-link font-mono text-[11px] tracking-[0.22em] uppercase no-underline py-3 px-1 inline-flex items-center gap-1.5 cursor-default select-none"
        aria-expanded={open}
        aria-haspopup="true"
      >
        Services
        <svg
          width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden
          style={{ transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "none", opacity: 0.5 }}
        >
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full left-1/2 pt-1 z-50" style={{ transform: "translateX(-50%)" }}>
          {/* Arrow */}
          <div className="flex justify-center mb-[-1px]">
            <div className="w-2.5 h-1.5 overflow-hidden">
              <div
                className="w-2.5 h-2.5 rotate-45 -translate-y-1.5"
                style={{ background: "rgba(255,254,248,0.97)", border: "1px solid rgba(255,255,255,0.7)" }}
              />
            </div>
          </div>
          <div
            className="py-2 rounded-xl overflow-hidden"
            style={{
              minWidth: "220px",
              background: "rgba(255,254,248,0.97)",
              backdropFilter: "blur(20px) saturate(1.6)",
              WebkitBackdropFilter: "blur(20px) saturate(1.6)",
              border: "1px solid rgba(255,255,255,0.7)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            {SERVICES.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="flex items-center gap-2.5 font-mono text-[10px] tracking-[0.2em] uppercase no-underline px-4 py-2.5"
                style={{ color: "rgba(0,0,0,0.65)", transition: "background 0.15s, color 0.15s" }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(0,0,0,0.04)";
                  e.currentTarget.style.color = "#1A1A1A";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "rgba(0,0,0,0.65)";
                }}
              >
                <span className="block w-1 h-1 rounded-full shrink-0" style={{ background: ACCENT }} />
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
