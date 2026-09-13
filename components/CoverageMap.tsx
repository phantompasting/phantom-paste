"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { US_MAP_VIEWBOX, US_STATE_PATHS, US_CITY_DOTS } from "@/lib/usMapPaths";
import {
  COVERAGE,
  COVERAGE_STATS,
  getCoverageState,
  type CoverageState,
} from "@/lib/coverageDirectory";

const ACCENT = "#D4A010";

/**
 * Small north-east states + DC are near-impossible to tap on the map, so
 * they get a dedicated chip strip below it. Order follows the coastline.
 */
const SMALL_STATE_CHIPS = ["NH", "VT", "MA", "CT", "RI", "NJ", "DE", "MD", "DC"];

/**
 * Interactive nationwide coverage map for /locations. Click (or keyboard-
 * activate) any state to load its metro list in the side panel; states with
 * dedicated landing pages render slightly darker and link out from the
 * panel. Pure client-side selection — no data fetching, all content is
 * server-rendered into the initial HTML via the default selection.
 */
export default function CoverageMap() {
  const [selectedAbbr, setSelectedAbbr] = useState("CA");
  const [hoverName, setHoverName] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  const selected: CoverageState = getCoverageState(selectedAbbr) ?? COVERAGE[0]!;

  // "Find your state or city" — matches state names/abbrs and city names;
  // choosing a result selects that state on the map.
  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    const out: Array<{ label: string; abbr: string }> = [];
    for (const s of COVERAGE) {
      if (s.name.toLowerCase().includes(q) || s.abbr.toLowerCase() === q) {
        out.push({ label: s.name, abbr: s.abbr });
      }
      for (const c of s.cities) {
        if (c.name.toLowerCase().includes(q)) {
          out.push({ label: `${c.name} — ${s.name}`, abbr: s.abbr });
        }
      }
    }
    return out.slice(0, 8);
  }, [query]);

  const pickMatch = (abbr: string) => {
    setSelectedAbbr(abbr);
    setQuery("");
    searchRef.current?.blur();
  };

  return (
    <div className="coverage-map">
      <style dangerouslySetInnerHTML={{ __html: `
        .coverage-map .cm-grid {
          display: grid; grid-template-columns: 1fr; gap: 28px;
        }
        @media (min-width: 900px) {
          .coverage-map .cm-grid { grid-template-columns: 1.55fr 1fr; gap: 44px; align-items: start; }
        }

        /* ── Map panel ─────────────────────────────────────────────── */
        .coverage-map .cm-panel {
          position: relative;
          border: 1px solid rgba(0,0,0,0.14);
          background: rgba(255,255,255,0.30);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          padding: clamp(14px, 2.5vw, 30px);
        }
        .coverage-map .cm-legend {
          position: absolute; top: 14px; left: 14px; z-index: 2;
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.85);
          border: 1px solid rgba(0,0,0,0.10);
          padding: 7px 12px;
          font-family: var(--font-mono), "DM Mono", monospace;
          text-transform: uppercase; font-size: 9px; letter-spacing: 0.28em;
          color: rgba(0,0,0,0.65); white-space: nowrap;
        }
        .coverage-map .cm-legend .dot {
          width: 6px; height: 6px; border-radius: 9999px; background: ${ACCENT};
          flex-shrink: 0;
        }
        .coverage-map svg { display: block; width: 100%; height: auto; }
        .coverage-map svg path {
          fill: rgba(26,26,26,0.055);
          stroke: rgba(255,255,255,0.95); stroke-width: 1;
          cursor: pointer;
          transition: fill 0.15s;
          outline: none;
        }
        .coverage-map svg path.has-page { fill: rgba(26,26,26,0.13); }
        .coverage-map svg path:hover,
        .coverage-map svg path:focus-visible { fill: rgba(212,160,16,0.45); }
        .coverage-map svg path.selected,
        .coverage-map svg path.selected:hover { fill: ${ACCENT}; }

        /* ── City dots ─────────────────────────────────────────────── */
        .coverage-map .cm-dots circle {
          fill: ${ACCENT}; stroke: #FFFDF5; stroke-width: 1;
          pointer-events: none;
          transition: r 0.2s;
        }
        .coverage-map .cm-dots circle.dot-active {
          stroke: #1A1A1A; stroke-width: 1.5;
        }

        /* ── Search ────────────────────────────────────────────────── */
        .coverage-map .cm-search { position: relative; margin-top: 14px; }
        .coverage-map .cm-search input {
          width: 100%; box-sizing: border-box;
          font-family: var(--font-mono), "DM Mono", monospace;
          text-transform: uppercase; font-size: 11px; letter-spacing: 0.18em;
          color: #1A1A1A;
          background: rgba(255,255,255,0.55);
          border: 1px solid rgba(0,0,0,0.18);
          padding: 13px 16px;
          outline: none;
        }
        .coverage-map .cm-search input::placeholder { color: rgba(0,0,0,0.45); text-transform: uppercase; }
        .coverage-map .cm-search input:focus { border-color: ${ACCENT}; }
        .coverage-map .cm-search-results {
          list-style: none; margin: 0; padding: 4px 0;
          position: absolute; left: 0; right: 0; top: 100%; z-index: 5;
          background: #FFFDF5;
          border: 1px solid rgba(0,0,0,0.18); border-top: 0;
          box-shadow: 0 14px 30px rgba(0,0,0,0.12);
          max-height: 280px; overflow-y: auto;
        }
        .coverage-map .cm-search-results button {
          display: flex; align-items: baseline; justify-content: space-between; gap: 10px;
          width: 100%; text-align: left; cursor: pointer;
          background: transparent; border: 0;
          font-family: var(--font-mono), "DM Mono", monospace;
          text-transform: uppercase; font-size: 11px; letter-spacing: 0.16em;
          color: rgba(0,0,0,0.72);
          padding: 9px 16px;
        }
        .coverage-map .cm-search-results button:hover { color: ${ACCENT}; background: rgba(212,160,16,0.08); }
        .coverage-map .cm-search-results .arrow { color: ${ACCENT}; font-size: 10px; }

        /* ── Small-state chip strip ────────────────────────────────── */
        .coverage-map .cm-chips {
          display: flex; flex-wrap: wrap; gap: 6px;
          margin-top: 14px;
        }
        .coverage-map .cm-chips button {
          font-family: var(--font-mono), "DM Mono", monospace;
          font-size: 10px; letter-spacing: 0.14em;
          padding: 6px 10px;
          background: transparent;
          border: 1px solid rgba(0,0,0,0.18);
          color: rgba(0,0,0,0.6);
          cursor: pointer;
          transition: all 0.15s;
        }
        .coverage-map .cm-chips button:hover { border-color: ${ACCENT}; color: ${ACCENT}; }
        .coverage-map .cm-chips button.selected {
          background: ${ACCENT}; border-color: ${ACCENT}; color: #1A1A1A; font-weight: 700;
        }

        /* ── Selected-state panel ──────────────────────────────────── */
        .coverage-map .cm-state-kicker {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: var(--font-mono), "DM Mono", monospace;
          text-transform: uppercase; font-size: 9px; letter-spacing: 0.3em;
          color: rgba(0,0,0,0.55); margin-bottom: 12px;
        }
        .coverage-map .cm-state-name {
          font-family: var(--font-barlow), "Barlow Condensed", sans-serif;
          font-weight: 900; text-transform: uppercase;
          letter-spacing: -0.03em; line-height: 0.95;
          font-size: clamp(40px, 4.5vw, 58px);
          color: #1A1A1A; margin: 0;
        }
        .coverage-map .cm-state-name .abbr { color: ${ACCENT}; }
        .coverage-map .cm-rule { height: 2px; background: #1A1A1A; margin: 18px 0 16px; }
        .coverage-map .cm-cities {
          list-style: none; margin: 0; padding: 0;
          display: flex; flex-direction: column; gap: 8px;
        }
        .coverage-map .cm-cities .city,
        .coverage-map .cm-cities a {
          display: flex; align-items: baseline; gap: 8px;
          font-family: var(--font-mono), "DM Mono", monospace;
          text-transform: uppercase; font-size: 11px; letter-spacing: 0.18em;
          color: rgba(0,0,0,0.72); text-decoration: none;
        }
        .coverage-map .cm-cities a { transition: color 0.15s; }
        .coverage-map .cm-cities a:hover { color: ${ACCENT}; }
        .coverage-map .cm-cities .arrow { color: ${ACCENT}; font-size: 10px; }
        .coverage-map .cm-ctas { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 22px; }
        .coverage-map .cm-cta {
          display: inline-flex; align-items: center; gap: 8px;
          font-weight: 700; text-transform: uppercase; text-decoration: none;
          font-size: 10px; letter-spacing: 0.22em;
          padding: 12px 20px; border-radius: 9999px;
          transition: opacity 0.15s;
        }
        .coverage-map .cm-cta:hover { opacity: 0.85; }
        .coverage-map .cm-cta.primary { background: #1A1A1A; color: #FFF; }
        .coverage-map .cm-cta.secondary {
          background: transparent; color: #1A1A1A;
          border: 1px solid rgba(0,0,0,0.25);
        }

        /* ── Stats row ─────────────────────────────────────────────── */
        .coverage-map .cm-stats {
          display: grid; grid-template-columns: repeat(3, auto);
          justify-content: start; column-gap: clamp(28px, 4vw, 56px);
          margin-top: 30px; padding-top: 22px;
          border-top: 1px solid rgba(0,0,0,0.10);
        }
        .coverage-map .cm-stat-label {
          font-family: var(--font-mono), "DM Mono", monospace;
          text-transform: uppercase; font-size: 9px; letter-spacing: 0.26em;
          color: rgba(0,0,0,0.55); margin-bottom: 4px;
        }
        .coverage-map .cm-stat-value {
          font-family: var(--font-barlow), "Barlow Condensed", sans-serif;
          font-weight: 900; line-height: 1; letter-spacing: -0.03em;
          font-size: clamp(34px, 4vw, 52px); color: #1A1A1A;
        }
      ` }} />

      <div className="cm-grid">
        {/* ── Map ── */}
        <div>
          <div className="cm-panel">
            <span className="cm-legend">
              <span className="dot" aria-hidden />
              {hoverName
                ? hoverName
                : `${COVERAGE_STATS.cities}+ metros · ${COVERAGE_STATS.states} states`}
            </span>
            <svg
              viewBox={US_MAP_VIEWBOX}
              role="group"
              aria-label="US coverage map — select a state to see the metros we cover"
            >
              {COVERAGE.map((state) => {
                const key = state.abbr.toLowerCase();
                const d = US_STATE_PATHS[key];
                if (!d) return null;
                const isSelected = state.abbr === selected.abbr;
                return (
                  <path
                    key={state.abbr}
                    d={d}
                    className={[
                      state.slug ? "has-page" : "",
                      isSelected ? "selected" : "",
                    ].join(" ").trim() || undefined}
                    role="button"
                    tabIndex={0}
                    aria-label={`${state.name} — view covered cities`}
                    aria-pressed={isSelected}
                    onClick={() => setSelectedAbbr(state.abbr)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedAbbr(state.abbr);
                      }
                    }}
                    onMouseEnter={() => setHoverName(state.name)}
                    onMouseLeave={() => setHoverName(null)}
                  >
                    <title>{state.name}</title>
                  </path>
                );
              })}
              {/* City dots — pre-projected AlbersUSA coords, one per metro.
                  pointer-events:none so state click/hover passes through. */}
              <g className="cm-dots" aria-hidden>
                {US_CITY_DOTS.map((d) => (
                  <circle
                    key={`${d.s}-${d.n}`}
                    cx={d.x}
                    cy={d.y}
                    r={d.s === selected.abbr ? 5 : 3.25}
                    className={d.s === selected.abbr ? "dot-active" : undefined}
                  />
                ))}
              </g>
            </svg>
          </div>
          <div className="cm-search" role="search">
            <input
              ref={searchRef}
              type="text"
              placeholder="Find your state or city"
              aria-label="Find your state or city"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && matches.length > 0) {
                  e.preventDefault();
                  pickMatch(matches[0]!.abbr);
                }
                if (e.key === "Escape") setQuery("");
              }}
            />
            {matches.length > 0 && (
              <ul className="cm-search-results">
                {matches.map((m) => (
                  <li key={m.label}>
                    <button type="button" onClick={() => pickMatch(m.abbr)}>
                      {m.label} <span className="arrow" aria-hidden>→</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="cm-chips" aria-label="Small-state shortcuts">
            {SMALL_STATE_CHIPS.map((abbr) => (
              <button
                key={abbr}
                type="button"
                className={abbr === selected.abbr ? "selected" : undefined}
                onClick={() => setSelectedAbbr(abbr)}
              >
                {abbr}
              </button>
            ))}
          </div>
        </div>

        {/* ── Selected state ── */}
        <div aria-live="polite">
          <span className="cm-state-kicker">
            <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
            Selected Market
          </span>
          <h2 className="cm-state-name">
            {selected.name} <span className="abbr">·{selected.abbr}</span>
          </h2>
          <div className="cm-rule" aria-hidden />
          <ul className="cm-cities">
            {selected.cities.map((c) =>
              c.slug ? (
                <li key={c.name}>
                  <Link href={`/locations/${c.slug}`}>
                    {c.name} <span className="arrow" aria-hidden>→</span>
                  </Link>
                </li>
              ) : (
                <li key={c.name} className="city">{c.name}</li>
              )
            )}
          </ul>
          <div className="cm-ctas">
            {selected.slug ? (
              <Link href={`/locations/${selected.slug}`} className="cm-cta primary">
                Statewide Rollouts <span style={{ color: ACCENT }}>→</span>
              </Link>
            ) : (
              <Link href="/contact" className="cm-cta primary">
                Book {selected.name} <span style={{ color: ACCENT }}>→</span>
              </Link>
            )}
            <Link href="/contact" className="cm-cta secondary">
              Get a Quote
            </Link>
          </div>

          <div className="cm-stats">
            {[
              { label: "States Covered", value: String(COVERAGE_STATS.states) },
              { label: "Metros Covered", value: `${COVERAGE_STATS.cities}+` },
              {
                label: "Dedicated Pages",
                value: String(COVERAGE_STATS.statePages + COVERAGE_STATS.cityPages),
              },
            ].map(({ label, value }) => (
              <div key={label}>
                <div className="cm-stat-label">{label}</div>
                <div className="cm-stat-value">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
