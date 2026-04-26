"use client";

/**
 * Locations menu — states-first hierarchy.
 *
 * Replaces the prior NavCitiesMenu (5-city flat dropdown). Each state has a
 * full landing page at /locations/<state-slug>; each Tier-1/Tier-2 city has
 * its own page at /locations/<city-slug>. The mega-menu groups them so a
 * user picking from the nav sees the full nationwide footprint at once.
 *
 * Cities listed under each state link only when a dedicated city page exists.
 * Cities without pages render as plain text (mentioned for context, not
 * promised as standalone landing pages).
 */

import { useState } from "react";

const ACCENT = "#D4A010";

interface CityLink { label: string; href?: string }
interface StateGroup { name: string; href: string; cities: CityLink[] }

const STATES: StateGroup[] = [
  {
    name: "California",
    href: "/locations/california",
    cities: [
      { label: "Los Angeles", href: "/locations/los-angeles" },
      { label: "San Francisco", href: "/locations/san-francisco" },
      { label: "San Diego" },
    ],
  },
  {
    name: "New York",
    href: "/locations/new-york-state",
    cities: [
      { label: "New York City", href: "/locations/new-york" },
      { label: "Buffalo" },
      { label: "Rochester" },
    ],
  },
  {
    name: "Texas",
    href: "/locations/texas",
    cities: [
      { label: "Houston", href: "/locations/houston" },
      { label: "Dallas", href: "/locations/dallas" },
      { label: "Austin", href: "/locations/austin" },
    ],
  },
  {
    name: "Florida",
    href: "/locations/florida",
    cities: [
      { label: "Miami", href: "/locations/miami" },
      { label: "Tampa" },
      { label: "Orlando" },
    ],
  },
  {
    name: "Georgia",
    href: "/locations/georgia",
    cities: [
      { label: "Atlanta", href: "/locations/atlanta" },
      { label: "Savannah" },
      { label: "Athens" },
    ],
  },
  {
    name: "Illinois",
    href: "/locations/illinois",
    cities: [
      { label: "Chicago", href: "/locations/chicago" },
      { label: "Naperville" },
      { label: "Champaign-Urbana" },
    ],
  },
  {
    name: "Arizona",
    href: "/locations/arizona",
    cities: [
      { label: "Phoenix", href: "/locations/phoenix" },
      { label: "Tucson" },
      { label: "Tempe" },
    ],
  },
  {
    name: "Washington",
    href: "/locations/washington",
    cities: [
      { label: "Seattle", href: "/locations/seattle" },
      { label: "Spokane" },
      { label: "Tacoma" },
    ],
  },
  {
    name: "Oregon",
    href: "/locations/oregon",
    cities: [
      { label: "Portland", href: "/locations/portland" },
      { label: "Eugene" },
      { label: "Bend" },
    ],
  },
  {
    name: "Colorado",
    href: "/locations/colorado",
    cities: [
      { label: "Denver", href: "/locations/denver" },
      { label: "Colorado Springs" },
      { label: "Boulder" },
    ],
  },
  {
    name: "Nevada",
    href: "/locations/nevada",
    cities: [
      { label: "Las Vegas", href: "/locations/las-vegas" },
      { label: "Henderson" },
      { label: "Reno" },
    ],
  },
  {
    name: "Massachusetts",
    href: "/locations/massachusetts",
    cities: [
      { label: "Boston", href: "/locations/boston" },
      { label: "Cambridge" },
      { label: "Worcester" },
    ],
  },
  {
    name: "Pennsylvania",
    href: "/locations/pennsylvania",
    cities: [
      { label: "Philadelphia" },
      { label: "Pittsburgh" },
      { label: "Allentown" },
    ],
  },
  {
    name: "Tennessee",
    href: "/locations/nashville",
    cities: [
      { label: "Nashville", href: "/locations/nashville" },
      { label: "Memphis" },
      { label: "Knoxville" },
    ],
  },
  {
    name: "DC",
    href: "/locations/washington-dc",
    cities: [
      { label: "Washington DC", href: "/locations/washington-dc" },
    ],
  },
];

/** Desktop-only Locations nav item with hover mega-menu */
export default function NavLocationsMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span
        // `<span>` has no implicit role, so aria-expanded/aria-haspopup
        // are invalid on it (Lighthouse AA failure). role="button" gives
        // it the button role that allows those aria attributes.
        role="button"
        tabIndex={0}
        className="nav-link font-mono text-[11px] tracking-[0.22em] uppercase no-underline py-3 px-1 inline-flex items-center gap-1.5 cursor-default select-none"
        aria-expanded={open}
        aria-haspopup="true"
      >
        Locations
        <svg
          width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden
          style={{ transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "none", opacity: 0.5 }}
        >
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>

      {/* Mega-menu dropdown — 3 columns of states */}
      {open && (
        <div className="absolute top-full left-1/2 pt-1 z-50" style={{ transform: "translateX(-50%)" }}>
          {/* Arrow */}
          <div className="flex justify-center mb-[-1px]">
            <div className="w-2.5 h-1.5 overflow-hidden">
              <div className="w-2.5 h-2.5 rotate-45 -translate-y-1.5"
                style={{ background: "rgba(255,254,248,0.97)", border: "1px solid rgba(255,255,255,0.7)" }} />
            </div>
          </div>
          <div
            className="rounded-xl overflow-hidden"
            style={{
              minWidth: "720px",
              maxWidth: "880px",
              background: "rgba(255,254,248,0.97)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.7)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            {/* Header — All Locations link */}
            <a
              href="/locations"
              className="flex items-center justify-between gap-2.5 font-mono text-[11px] tracking-[0.22em] uppercase no-underline px-5 py-3 border-b"
              style={{ color: ACCENT, borderColor: "rgba(0,0,0,0.06)", transition: "background 0.15s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(0,0,0,0.04)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
            >
              <span>All Locations</span>
              <span aria-hidden style={{ fontSize: "12px" }}>→</span>
            </a>

            {/* States grid — 3 columns */}
            <div
              className="grid grid-cols-3 gap-x-4 gap-y-3 px-5 py-4"
            >
              {STATES.map((state) => (
                <div key={state.name}>
                  <a
                    href={state.href}
                    className="block font-mono text-[10px] tracking-[0.24em] uppercase no-underline mb-1.5"
                    style={{ color: "#1A1A1A", fontWeight: 700, transition: "color 0.15s" }}
                    onMouseEnter={e => { e.currentTarget.style.color = ACCENT; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "#1A1A1A"; }}
                  >
                    {state.name}
                  </a>
                  {/* Show only cities with their own page. Unlinked cities are
                      hidden from the nav until their pages ship in a future
                      update — each state's full editorial city list lives on
                      its dedicated state page. */}
                  <ul className="list-none m-0 p-0 flex flex-col gap-0.5">
                    {state.cities
                      .filter((c) => c.href)
                      .map((c) => (
                        <li key={c.label} className="m-0 p-0">
                          <a
                            href={c.href!}
                            className="block font-mono text-[10px] tracking-[0.18em] no-underline"
                            style={{ color: "rgba(0,0,0,0.55)", transition: "color 0.15s" }}
                            onMouseEnter={e => { e.currentTarget.style.color = ACCENT; }}
                            onMouseLeave={e => { e.currentTarget.style.color = "rgba(0,0,0,0.55)"; }}
                          >
                            {c.label}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
