import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import ShinyGoldText from "@/components/ShinyGoldText";
import Breadcrumb from "@/components/Breadcrumb";
import SiteFooter from "@/components/SiteFooter";
import TrustBar from "@/components/TrustBar";
import CoverageMap from "@/components/CoverageMap";
import { BUSINESS } from "@/lib/business";
import { COVERAGE, COVERAGE_STATS } from "@/lib/coverageDirectory";
import { collectionPageSchema, faqPageSchema, jsonLd } from "@/lib/schema";
import { KW_LOCATIONS_HUB } from "@/lib/keywordSets";

const PAGE_URL = `${BUSINESS.url}/locations`;
const PAGE_TITLE = "Guerrilla Marketing Locations";
const PAGE_DESC =
  "Wheat pasting, street postering & street media campaigns in NYC, LA, Miami, Chicago, Atlanta, and 50+ US cities. Multi-city OOH rollouts nationwide.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [...KW_LOCATIONS_HUB],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Guerrilla Marketing Locations | Phantom Pasting",
    description: PAGE_DESC,
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: `${BUSINESS.url}${BUSINESS.ogImageDefault}`,
        width: BUSINESS.ogImageWidth,
        height: BUSINESS.ogImageHeight,
        alt: "Phantom Pasting guerrilla marketing across US cities",
      },
    ],
  },
};

const ACCENT = "#D4A010";

// State/city directory now lives in lib/coverageDirectory.ts (all 50 states
// + DC) — shared with the CoverageMap component so the map, the index below,
// and the schema markup can never drift apart.

const FAQS = [
  {
    q: "Do you really cover all 50 states?",
    a: "Yes. Every state on the map is bookable — flagship markets (LA, NYC, Miami, Chicago, Atlanta, and 25+ more) run on standing local crews, and every other metro rolls out on a per-campaign basis with the same photo-documentation standard. If your exact city isn't listed under its state, contact us — we've almost certainly worked there.",
  },
  {
    q: "Can I run a multi-city or statewide campaign on one brief?",
    a: "Yes. Statewide rollouts are a specialty — single brief, single price sheet, coordinated crews. Common configurations: California (LA + SF), Texas (Houston + Dallas + Austin), Florida (Miami + Tampa + Orlando), Pacific Northwest (Seattle + Portland), and full state takeovers in GA + IL + FL + CA + TX.",
  },
  {
    q: "How quickly can a campaign launch?",
    a: "Single-city standard: 7-10 business days from approved brief. Rush windows (4-5 days) are possible in flagship markets. Statewide multi-city rollouts: 12-15 days to coordinate crews. Festival-week deployments (SXSW, Art Basel, CMA Fest, CES, etc) book 6-8 weeks ahead.",
  },
  {
    q: "How do you pick walls and neighborhoods in each market?",
    a: "Local crews in each market maintain databases of permitted private walls — owners we've worked with for years, neighborhood corridors with proven foot traffic, and venue-adjacent surfaces for event-window saturation. We map your target audience to the corridors that index highest, then pull from the wall database.",
  },
];

export default function LocationsHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            collectionPageSchema({
              name: "Guerrilla Marketing Locations — Phantom Pasting",
              description: PAGE_DESC,
              url: PAGE_URL,
              items: COVERAGE.flatMap((s) => [
                ...(s.slug
                  ? [{ name: `Wheat Pasting Across ${s.name}`, url: `${BUSINESS.url}/locations/${s.slug}` }]
                  : []),
                ...s.cities
                  .filter((c) => c.slug)
                  .map((c) => ({
                    name: `Guerrilla Marketing in ${c.name}, ${s.abbr}`,
                    url: `${BUSINESS.url}/locations/${c.slug}`,
                  })),
              ]),
            })
          ),
        }}
      />
      {/* Org + WebSite schema injected globally via app/layout.tsx (see lib/schema.ts orgSchema). */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqPageSchema(FAQS)) }}
      />
      <div style={{ background: "transparent", minHeight: "100dvh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Locations", href: "/locations" }]} />
        <TrustBar />

        {/* ── Hero + interactive coverage map (one unit) ───────────────
            The map IS the hero: landing on /locations puts the US map above
            the fold immediately. Compact h1 + one-line kicker paragraph,
            then CoverageMap. Click any state → its metro list + statewide-
            rollout CTA in the side panel. Data + stats come from
            lib/coverageDirectory.ts, the same source as the typographic
            index below, so the two can't drift. Small NE states get a chip
            strip under the map. */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pt-5 md:pt-6 pb-14 md:pb-20">
          <div className="max-w-[1280px] mx-auto">
            <span
              className="inline-flex items-center gap-2 font-mono uppercase mb-3"
              style={{ fontSize: "9px", letterSpacing: "0.3em", color: "rgba(0,0,0,0.55)" }}
            >
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Coverage · {COVERAGE_STATS.cities}+ Metros · 50 States + DC
            </span>
            <h1
              className="font-black uppercase m-0 leading-[0.92]"
              style={{ fontSize: "clamp(30px, 4vw, 52px)", letterSpacing: "-0.04em" }}
            >
              EVERY STATE. <ShinyGoldText>EVERY MAJOR CITY.</ShinyGoldText>
            </h1>
            <p
              className="font-light leading-relaxed mt-3 mb-6 md:mb-8 max-w-[720px]"
              style={{ fontSize: "clamp(14px, 1.3vw, 16px)", color: "rgba(0,0,0,0.6)" }}
            >
              Wheat pasting, street postering & street media in all 50 states + DC. Tap any state to see the cities we cover, or scroll the full index below.
            </p>
            <CoverageMap />
          </div>
        </section>

        {/* ── States & Cities Directory — "Typographic Index" treatment ──
            No cards. Editorial restraint: massive Barlow Black state names
            paired with gold abbrs, hairline vertical column dividers, DM
            Mono city links with leader-line dots between the city name and
            the gold arrow. A floating "50+ CITIES" pull-quote in gold
            shimmer sits in the right margin at desktop widths. All scoped
            CSS in the <style> block below. */}
        <style dangerouslySetInnerHTML={{ __html: `
          .location-index-wrap { position: relative; }

          /* Top rule + responsive grid with hairline dividers. */
          .location-index {
            border-top: 2px solid #1A1A1A;
            padding-top: 28px;
            display: grid;
            grid-template-columns: 1fr;
            row-gap: 36px;
          }
          @media (min-width: 640px) {
            .location-index { grid-template-columns: 1fr 1fr; column-gap: 0; }
            .location-index > .state:nth-child(2n) { border-left: 1px solid rgba(0,0,0,0.10); padding-left: 28px; }
          }
          @media (min-width: 1024px) {
            .location-index { grid-template-columns: 1fr 1fr 1fr; }
            .location-index > .state { border-left: 1px solid rgba(0,0,0,0.10); padding-left: 28px; }
            .location-index > .state:nth-child(3n+1) { border-left: 0; padding-left: 0; }
            .location-index > .state:nth-child(2n) { border-left: 1px solid rgba(0,0,0,0.10); padding-left: 28px; }
          }

          .location-index .state { padding-bottom: 8px; }
          .location-index .state-header {
            display: flex; align-items: baseline; gap: 12px;
            margin-bottom: 14px; text-decoration: none;
          }
          .location-index .state-name {
            font-family: var(--font-barlow), "Barlow Condensed", sans-serif;
            font-weight: 900; text-transform: uppercase; letter-spacing: -0.025em; line-height: 1;
            font-size: clamp(34px, 3.8vw, 46px);
            color: #1A1A1A;
            transition: color 0.15s;
          }
          .location-index a.state-header:hover .state-name { color: #D4A010; }
          .location-index .state-abbr {
            font-family: var(--font-barlow), "Barlow Condensed", sans-serif;
            font-weight: 900;
            color: #D4A010; font-size: clamp(26px, 3vw, 36px); letter-spacing: -0.02em;
          }
          .location-index .state-rule {
            height: 1px; background: rgba(0,0,0,0.10); margin: 0 0 14px 0;
          }

          .location-index .cities {
            list-style: none; margin: 0; padding: 0;
            display: flex; flex-direction: column; gap: 6px;
          }
          .location-index .cities li a {
            display: flex; align-items: baseline; gap: 8px;
            text-decoration: none;
          }
          .location-index .city-name {
            font-family: var(--font-mono), "DM Mono", monospace;
            text-transform: uppercase; font-size: 11px; letter-spacing: 0.18em;
            color: rgba(0,0,0,0.72);
            transition: color 0.15s;
          }
          .location-index .cities li a:hover .city-name { color: #D4A010; }
          .location-index .cities li a:hover .city-arrow { color: #D4A010; opacity: 1; }
          .location-index .city-arrow {
            font-family: var(--font-mono), "DM Mono", monospace;
            font-size: 10px; color: #D4A010; opacity: 0.6;
            transition: color 0.15s, opacity 0.15s;
          }
          .location-index .city-plain { color: rgba(0,0,0,0.48); }
          .location-index .cities-empty {
            font-family: var(--font-mono), "DM Mono", monospace;
            text-transform: uppercase; font-size: 10px; letter-spacing: 0.18em;
            color: rgba(0,0,0,0.42);
          }
        ` }} />
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-14 md:pb-20">
          <div className="max-w-[1280px] mx-auto location-index-wrap">
            <div className="location-index">
              {COVERAGE.map((state) => {
                const header = (
                  <>
                    <span className="state-name">{state.name}</span>
                    <span className="state-abbr">·{state.abbr}</span>
                  </>
                );
                return (
                  <div key={state.abbr} className="state">
                    {state.slug ? (
                      <Link href={`/locations/${state.slug}`} className="state-header">
                        {header}
                      </Link>
                    ) : (
                      <span className="state-header">{header}</span>
                    )}
                    <div className="state-rule" aria-hidden />
                    <ul className="cities">
                      {state.cities.map((c) =>
                        c.slug ? (
                          <li key={c.name}>
                            <Link href={`/locations/${c.slug}`}>
                              <span className="city-name">{c.name}</span>
                              <span className="city-arrow" aria-hidden>→</span>
                            </Link>
                          </li>
                        ) : (
                          <li key={c.name}>
                            <span className="city-name city-plain">{c.name}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                );
              })}
            </div>
            {/* Catch-all: exact metro not listed → contact. */}
            <div
              className="mt-10 md:mt-14 pt-7 md:pt-9 border-t"
              style={{ borderColor: "rgba(0,0,0,0.08)" }}
            >
              <p
                className="font-light leading-relaxed m-0 max-w-[1000px]"
                style={{ fontSize: "14px", color: "rgba(0,0,0,0.62)" }}
              >
                Your exact metro not listed under its state?{" "}
                <Link href="/contact" className="font-bold no-underline" style={{ color: ACCENT }}>
                  Ask for a quote
                </Link>{" "}
                — secondary markets roll out on a per-campaign basis nationwide.
              </p>
            </div>
          </div>
        </section>

        {/* ── Trust strip (3 inline points, no cards) ────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-14 md:pb-16">
          <div
            className="max-w-[1100px] mx-auto rounded-2xl px-7 py-7 md:px-10 md:py-8 grid grid-cols-1 sm:grid-cols-3 gap-7 sm:gap-10"
            style={{
              background: "rgba(255,255,255,0.42)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.7)",
            }}
          >
            {[
              {
                stat: "100%",
                label: "Photo-documented",
                body: "Every install timestamped + geo-tagged. Branded report within 48 hours.",
              },
              {
                stat: "Multi-City",
                label: "One brief",
                body: "Statewide or coast-to-coast rollouts on a single price sheet. No subcontractors.",
              },
              {
                stat: "10+ yrs",
                label: "On the streets",
                body: "Founded 2014. 500+ campaigns. Local crews in every flagship market.",
              },
            ].map(({ stat, label, body }) => (
              <div key={label}>
                <div
                  className="font-black uppercase leading-none mb-1"
                  style={{ fontSize: "clamp(20px, 2.4vw, 28px)", letterSpacing: "-0.025em", color: ACCENT }}
                >
                  {stat}
                </div>
                <div
                  className="font-mono uppercase mb-2"
                  style={{ fontSize: "9px", letterSpacing: "0.28em", color: "rgba(0,0,0,0.55)" }}
                >
                  {label}
                </div>
                <p className="font-light m-0 leading-relaxed" style={{ fontSize: "13px", color: "rgba(0,0,0,0.65)" }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ (4 Qs, accordion — no card grid) ────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-16 md:pb-20">
          <div className="max-w-[820px] mx-auto">
            <h2
              className="font-black uppercase m-0 mb-8 leading-[0.92]"
              style={{ fontSize: "clamp(26px, 3.5vw, 38px)", letterSpacing: "-0.035em" }}
            >
              LOCATION QUESTIONS<span style={{ color: ACCENT }}>.</span>
            </h2>
            <div className="flex flex-col gap-3">
              {FAQS.map(({ q, a }) => (
                <details
                  key={q}
                  className="rounded-2xl group"
                  style={{
                    background: "rgba(255,255,255,0.40)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.7)",
                  }}
                >
                  <summary
                    className="cursor-pointer font-black uppercase list-none flex items-center justify-between gap-4"
                    style={{
                      fontSize: "14px",
                      letterSpacing: "-0.01em",
                      padding: "1.05rem 1.4rem",
                      color: "#1A1A1A",
                    }}
                  >
                    <span>{q}</span>
                    <span aria-hidden className="font-mono" style={{ color: ACCENT, fontSize: "18px", flexShrink: 0 }}>+</span>
                  </summary>
                  <div
                    className="font-light leading-relaxed"
                    style={{ fontSize: "14px", color: "rgba(0,0,0,0.7)", padding: "0 1.4rem 1.15rem" }}
                  >
                    {a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Compact CTA ─────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20 md:pb-24">
          <div
            className="max-w-[900px] mx-auto rounded-3xl text-center"
            style={{
              background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)",
              color: "#FFF",
              padding: "clamp(2rem, 4vw, 3rem) clamp(1.5rem, 4vw, 3rem)",
              boxShadow: "0 18px 48px rgba(0,0,0,0.20)",
            }}
          >
            <div
              className="font-mono uppercase mb-3"
              style={{ fontSize: "10px", letterSpacing: "0.3em", color: ACCENT }}
            >
              Planning a Campaign?
            </div>
            <h2
              className="font-black uppercase m-0 mb-5 leading-[0.95]"
              style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}
            >
              Get a Quote in <span style={{ color: ACCENT }}>24 Hours.</span>
            </h2>
            <p
              className="font-light leading-relaxed mb-7 mx-auto"
              style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", maxWidth: "520px" }}
            >
              Tell us your city or your statewide rollout plan — we&apos;ll respond with a custom strategy and quote.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-bold uppercase no-underline rounded-full"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  padding: "14px 28px",
                  background: "#FFF",
                  color: "#1A1A1A",
                }}
              >
                Get a Quote <span style={{ color: ACCENT }}>→</span>
              </Link>
              <a
                href={BUSINESS.telHref}
                aria-label={`Call Phantom Pasting at ${BUSINESS.telephoneDisplay}`}
                className="inline-flex items-center gap-2 font-bold uppercase no-underline rounded-full"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  padding: "14px 24px",
                  background: "transparent",
                  color: "#FFF",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
              >
                {BUSINESS.telephoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
