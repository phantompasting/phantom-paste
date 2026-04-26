import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import ShinyGoldText from "@/components/ShinyGoldText";
import Breadcrumb from "@/components/Breadcrumb";
import SiteFooter from "@/components/SiteFooter";
import TrustBar from "@/components/TrustBar";
import { BUSINESS } from "@/lib/business";
import { collectionPageSchema, faqPageSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";
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

// ── State-grouped directory (single source of truth on this page) ────────
//
// Each state is a column with the state name (links to state page) followed
// by every city we cover under it. Cities with `slug` render as Links to the
// dedicated city page; cities without render as plain text.
//
// The page used to have separate "Statewide Coverage" + "City Cards" + "How
// We Choose Locations" sections — that totaled ~5000px on mobile. This single
// directory replaces all of them. Mega-footer (every page) duplicates the
// content for users who scroll, so visitors landing here get the full
// inventory in one screen.
interface DirCity {
  name: string;
  slug?: string;
}
interface DirState {
  name: string;
  abbr: string;
  slug: string;
  cities: DirCity[];
}

const DIRECTORY: DirState[] = [
  {
    name: "California", abbr: "CA", slug: "california",
    cities: [
      { name: "Los Angeles", slug: "los-angeles" },
      { name: "San Francisco", slug: "san-francisco" },
      { name: "San Diego" },
      { name: "Sacramento" },
      { name: "Oakland" },
      { name: "San Jose" },
    ],
  },
  {
    name: "New York", abbr: "NY", slug: "new-york-state",
    cities: [
      { name: "New York City", slug: "new-york" },
      { name: "Buffalo" },
      { name: "Rochester" },
      { name: "Yonkers" },
      { name: "Syracuse" },
      { name: "Albany" },
    ],
  },
  {
    name: "Texas", abbr: "TX", slug: "texas",
    cities: [
      { name: "Houston", slug: "houston" },
      { name: "Dallas", slug: "dallas" },
      { name: "Austin", slug: "austin" },
      { name: "San Antonio" },
      { name: "Fort Worth" },
      { name: "El Paso" },
    ],
  },
  {
    name: "Florida", abbr: "FL", slug: "florida",
    cities: [
      { name: "Miami", slug: "miami" },
      { name: "Tampa" },
      { name: "Orlando" },
      { name: "Jacksonville" },
      { name: "Ft. Lauderdale" },
      { name: "St. Petersburg" },
    ],
  },
  {
    name: "Georgia", abbr: "GA", slug: "georgia",
    cities: [
      { name: "Atlanta", slug: "atlanta" },
      { name: "Savannah" },
      { name: "Athens" },
      { name: "Augusta" },
      { name: "Macon" },
      { name: "Columbus" },
    ],
  },
  {
    name: "Illinois", abbr: "IL", slug: "illinois",
    cities: [
      { name: "Chicago", slug: "chicago" },
      { name: "Naperville" },
      { name: "Champaign-Urbana" },
      { name: "Rockford" },
      { name: "Peoria" },
      { name: "Springfield" },
    ],
  },
  {
    name: "Arizona", abbr: "AZ", slug: "arizona",
    cities: [
      { name: "Phoenix", slug: "phoenix" },
      { name: "Tucson" },
      { name: "Mesa" },
      { name: "Scottsdale" },
      { name: "Tempe" },
      { name: "Flagstaff" },
    ],
  },
  {
    name: "Washington", abbr: "WA", slug: "washington",
    cities: [
      { name: "Seattle", slug: "seattle" },
      { name: "Spokane" },
      { name: "Tacoma" },
      { name: "Vancouver WA" },
      { name: "Bellevue" },
      { name: "Olympia" },
    ],
  },
  {
    name: "Oregon", abbr: "OR", slug: "oregon",
    cities: [
      { name: "Portland", slug: "portland" },
      { name: "Eugene" },
      { name: "Salem" },
      { name: "Bend" },
      { name: "Beaverton" },
      { name: "Hillsboro" },
    ],
  },
  {
    name: "Colorado", abbr: "CO", slug: "colorado",
    cities: [
      { name: "Denver", slug: "denver" },
      { name: "Colorado Springs" },
      { name: "Aurora" },
      { name: "Boulder" },
      { name: "Fort Collins" },
      { name: "Greeley" },
    ],
  },
  {
    name: "Nevada", abbr: "NV", slug: "nevada",
    cities: [
      { name: "Las Vegas", slug: "las-vegas" },
      { name: "Henderson" },
      { name: "Reno" },
      { name: "North Las Vegas" },
      { name: "Carson City" },
      { name: "Sparks" },
    ],
  },
  {
    name: "Massachusetts", abbr: "MA", slug: "massachusetts",
    cities: [
      { name: "Boston", slug: "boston" },
      { name: "Cambridge" },
      { name: "Worcester" },
      { name: "Springfield MA" },
      { name: "Lowell" },
      { name: "New Bedford" },
    ],
  },
  {
    name: "Pennsylvania", abbr: "PA", slug: "pennsylvania",
    cities: [
      { name: "Philadelphia" },
      { name: "Pittsburgh" },
      { name: "Allentown" },
      { name: "Erie" },
      { name: "Reading" },
      { name: "Lancaster" },
    ],
  },
  {
    name: "Tennessee", abbr: "TN", slug: "nashville", // Nashville city page acts as TN landing
    cities: [
      { name: "Nashville", slug: "nashville" },
      { name: "Memphis" },
      { name: "Knoxville" },
      { name: "Chattanooga" },
    ],
  },
  {
    name: "DC", abbr: "DC", slug: "washington-dc",
    cities: [
      { name: "Washington DC", slug: "washington-dc" },
    ],
  },
];

// Markets we serve on a per-campaign basis but don't yet have dedicated pages
// for. Listed as a single comma-separated tail strip — gives crawlers + users
// confidence the nationwide claim isn't 30 markets, it's 50+.
const ADDITIONAL_MARKETS = [
  "Detroit", "Minneapolis", "Kansas City", "St. Louis", "Cleveland",
  "Cincinnati", "Charlotte", "Raleigh", "Salt Lake City", "Albuquerque",
  "Indianapolis", "Columbus OH", "Milwaukee", "Memphis", "New Orleans",
  "Birmingham", "Jacksonville", "Hartford", "Providence", "Burlington",
];

const FAQS = [
  {
    q: "Do you cover cities outside the listed states?",
    a: "Yes. The 14 state directories above cover our highest-volume markets, but we run campaigns in 50+ US cities total. Detroit, Minneapolis, Charlotte, Raleigh, Kansas City, Cleveland, Salt Lake City, and 30+ other secondary markets are all rollable on a per-campaign basis. If your target city isn't listed, contact us — we've almost certainly worked there.",
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
              items: DIRECTORY.flatMap((s) => [
                { name: `Wheat Pasting Across ${s.name}`, url: `${BUSINESS.url}/locations/${s.slug}` },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Locations", href: "/locations" },
            ])
          ),
        }}
      />

      <div style={{ background: "transparent", minHeight: "100dvh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Locations" }]} />
        <TrustBar />

        {/* ── Compact hero (text-only, no images) ──────────────────────
            Was: split-screen hero with two photos + stats row + 3 CTAs.
            Now: single column, sub-1-screen on mobile, ~25vh on desktop.
            Drops 800-1000px of hero chrome. */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pt-8 pb-12 md:pb-16">
          <div className="max-w-[1100px] mx-auto">
            <span
              className="inline-flex items-center gap-2 font-mono uppercase mb-5"
              style={{ fontSize: "9px", letterSpacing: "0.3em", color: "rgba(0,0,0,0.55)" }}
            >
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              50+ US Markets
            </span>
            <h1
              className="font-black uppercase m-0 leading-[0.92]"
              style={{ fontSize: "clamp(36px, 5.5vw, 68px)", letterSpacing: "-0.04em" }}
            >
              FIND YOUR MARKET<br />
              <ShinyGoldText>WE OPERATE THERE.</ShinyGoldText>
            </h1>
            <p
              className="font-light leading-relaxed mt-5 max-w-[640px]"
              style={{ fontSize: "clamp(15px, 1.4vw, 17px)", color: "rgba(0,0,0,0.6)" }}
            >
              Wheat pasting, street postering & street media campaigns across 14 state regions and 17 dedicated city markets — plus 30+ additional metros on a per-campaign basis. Tap a state to see statewide rollout details, or jump straight to a city.
            </p>
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
          .location-index .state-header:hover .state-name { color: #D4A010; }
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
          .location-index .cities-empty {
            font-family: var(--font-mono), "DM Mono", monospace;
            text-transform: uppercase; font-size: 10px; letter-spacing: 0.18em;
            color: rgba(0,0,0,0.42);
          }
        ` }} />
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-14 md:pb-20">
          <div className="max-w-[1280px] mx-auto location-index-wrap">
            <div className="location-index">
              {DIRECTORY.map((state) => {
                const linkedCities = state.cities.filter((c) => c.slug);
                return (
                  <div key={state.abbr} className="state">
                    <Link href={`/locations/${state.slug}`} className="state-header">
                      <span className="state-name">{state.name}</span>
                      <span className="state-abbr">·{state.abbr}</span>
                    </Link>
                    <div className="state-rule" aria-hidden />
                    <ul className="cities">
                      {linkedCities.length > 0 ? (
                        linkedCities.map((c) => (
                          <li key={c.name}>
                            <Link href={`/locations/${c.slug}`}>
                              <span className="city-name">{c.name}</span>
                              <span className="city-arrow" aria-hidden>→</span>
                            </Link>
                          </li>
                        ))
                      ) : (
                        <li className="cities-empty">— Statewide rollouts only —</li>
                      )}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Additional markets — single dense paragraph, not a grid.
                Reinforces "50+ US cities" claim without taking 1000px of
                additional vertical real estate. */}
            <div
              className="mt-10 md:mt-14 pt-7 md:pt-9 border-t"
              style={{ borderColor: "rgba(0,0,0,0.08)" }}
            >
              <span
                className="inline-flex items-center gap-2 font-mono uppercase mb-3"
                style={{ fontSize: "9px", letterSpacing: "0.3em", color: "rgba(0,0,0,0.55)" }}
              >
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                Plus per-campaign coverage
              </span>
              <p
                className="font-light leading-relaxed m-0 max-w-[1000px]"
                style={{ fontSize: "14px", color: "rgba(0,0,0,0.62)" }}
              >
                {ADDITIONAL_MARKETS.join(" · ")} — and 20+ other secondary metros nationwide.
                Don&apos;t see your city?{" "}
                <Link href="/contact" className="font-bold no-underline" style={{ color: ACCENT }}>
                  Ask for a quote
                </Link>
                .
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
