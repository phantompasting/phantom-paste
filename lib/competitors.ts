/**
 * Centralized competitor data for the /compare pages — single source of truth.
 *
 * EDITORIAL RULES (read before editing):
 *   1. Every competitor fact must be verifiable on the competitor's own public
 *      site. Do NOT invent clients, pricing, or features. Last verified May 2026
 *      from each company's marketing site (see `sourceUrl`). Re-verify quarterly.
 *   2. Be fair. These are established, legitimate companies — acknowledge their
 *      real strengths (longevity, marquee clients, international reach). Honest
 *      comparisons rank better and convert evaluators who will fact-check.
 *   3. Position Phantom on genuine differentiators, not by knocking competitors.
 */

export interface ComparisonRow {
  /** What we're comparing (e.g. "Founded", "Documentation"). */
  dimension: string;
  phantom: string;
  competitor: string;
}

export interface CompetitorComparison {
  /** URL slug under /compare/phantom-pasting-vs-<slug> */
  slug: string;
  competitorName: string;
  competitorUrl: string;
  /** When the competitor facts were last verified from their site. */
  verified: string;
  sourceUrl: string;

  metaTitle: string; // ≤ ~52 chars so "+ | Phantom Pasting" stays < 60
  metaDescription: string; // 140–155 chars
  /** H1-adjacent positioning line, 2–3 sentences. */
  tldr: string;

  /** At-a-glance table rows. */
  table: ReadonlyArray<ComparisonRow>;

  /** Category deep-dives — each a fair paragraph on where each side leads. */
  categories: ReadonlyArray<{ title: string; body: string }>;

  phantomBestFor: ReadonlyArray<string>;
  competitorBestFor: ReadonlyArray<string>;

  faqs: ReadonlyArray<{ q: string; a: string }>;
}

/** Shared, factual Phantom Pasting reference used across all comparison pages. */
export const PHANTOM_FACTS = {
  founded: "2014",
  campaigns: "500+",
  documentation: "100% photo-documented — every poster timestamped + GPS-logged",
  formats: "Wheat pasting, chalk spray stencils, snipe posters, full-impact combos",
  coverage: "50+ US cities",
  pricingEntry: "From $3,500 (single-neighborhood test), itemized quote in 24 hrs",
  clients: "FashionPass, FIFA World Cup activation, Incrediwear",
} as const;

export const COMPETITORS: ReadonlyArray<CompetitorComparison> = [
  /* ───────────────────────────── ALT TERRAIN ───────────────────────────── */
  {
    slug: "alt-terrain",
    competitorName: "ALT TERRAIN",
    competitorUrl: "https://altterrain.com",
    verified: "2026-05",
    sourceUrl:
      "https://altterrain.com/wild-postings-poster-outdoor-advertising-company-new-york-los-angeles-chicago/",
    metaTitle: "Phantom Pasting vs ALT TERRAIN",
    metaDescription:
      "ALT TERRAIN vs Phantom Pasting compared: track record, documentation, formats, coverage, and pricing — an honest look at which wheat pasting partner fits.",
    tldr: "ALT TERRAIN is a 20-year, global wild-posting agency with a blue-chip client roster and international reach. Phantom Pasting is a US-focused street-marketing operator built around documentation rigor, multi-format street work (paste + chalk stencils + snipes), and transparent, published pricing. If you need an established agency for a worldwide rollout, ALT TERRAIN is a strong fit; if you want a documentation-first US campaign with an accessible entry point, Phantom is built for it.",
    table: [
      { dimension: "Founded", phantom: "2014 · 500+ campaigns", competitor: "2003 · 350+ brands" },
      { dimension: "Coverage", phantom: "50+ US cities", competitor: "50+ US cities + Canada & Europe" },
      { dimension: "Formats", phantom: "Wheat paste, chalk spray stencils, snipes, combos", competitor: "Wheatpaste wild posting (permitted + guerrilla)" },
      { dimension: "Documentation", phantom: "100% photo proof, timestamped + GPS-logged, report in 48 hrs", competitor: "Proof-of-performance reporting + social capture" },
      { dimension: "Pricing", phantom: "Published per-city tiers, from $3,500; quote in 24 hrs", competitor: "≈ $10,000–$30,000 per week (market-dependent)" },
      { dimension: "Notable clients", phantom: "FashionPass, FIFA World Cup, Incrediwear", competitor: "Google, Coinbase, GitHub, Starbucks, Reddit" },
    ],
    categories: [
      {
        title: "Track record & scale",
        body: "ALT TERRAIN has been running wild-posting campaigns since 2003 — over two decades — for 350+ brands including Google, Coinbase, and Starbucks, and operates internationally across Canada and Europe. That depth is real and worth weighing if your brand wants the longest possible track record or a single partner for worldwide activations. Phantom Pasting launched in 2014 and has run 500+ campaigns concentrated in the US street-marketing market. We're the younger, more specialized operator; ALT TERRAIN is the broader, longer-established agency.",
      },
      {
        title: "Documentation & proof",
        body: "Both companies document campaigns — ALT TERRAIN provides proof-of-performance reporting and social-content capture. Phantom's difference is that documentation is the core product promise, not an add-on: every single poster is photographed, timestamped, and GPS-logged, and a branded report lands within 48 hours of install. For brands that need defensible proof every placement ran (agencies reporting to clients, brands tracking spend by location), that granularity is the reason most of our clients choose us.",
      },
      {
        title: "Formats & creative range",
        body: "ALT TERRAIN focuses on wheatpaste wild posting in both permitted and guerrilla placements. Phantom runs wheat pasting plus chalk spray stencils, snipe posters, and full-impact combinations — so a single campaign can layer wall posters, ground-level stencils, and pole snipes for saturation in a neighborhood. If your campaign is poster-only, both deliver; if you want multi-format street saturation, that range is a Phantom strength.",
      },
      {
        title: "Pricing & accessibility",
        body: "ALT TERRAIN's published guidance runs roughly $10,000–$30,000 per week depending on market and scale — a fit for funded, multi-week brand pushes. Phantom publishes per-city pricing tiers openly on every location page and starts at $3,500 for a single-neighborhood test, with an itemized quote returned in 24 hours. Lower floor and transparent numbers make Phantom easier to test before committing budget; ALT TERRAIN's model suits larger, agency-managed buys.",
      },
    ],
    phantomBestFor: [
      "US brands that want documentation-first proof of every placement",
      "Multi-format street campaigns (paste + chalk stencils + snipes)",
      "Teams that want transparent, per-city pricing and a fast quote",
      "Fashion, music, and DTC brands testing street before scaling",
    ],
    competitorBestFor: [
      "Global brands needing international (EU/Canada) rollouts",
      "Buyers who prioritize a 20-year agency track record",
      "Large, multi-week brand campaigns with agency oversight",
    ],
    faqs: [
      {
        q: "Is Phantom Pasting an alternative to ALT TERRAIN?",
        a: "Yes — both run wheat paste / wild posting campaigns across major US cities. ALT TERRAIN is the longer-established, internationally-operating agency (since 2003). Phantom Pasting is a US-focused operator (since 2014, 500+ campaigns) built around 100% timestamped, GPS-logged documentation, multi-format street work, and transparent per-city pricing from $3,500.",
      },
      {
        q: "How does pricing compare?",
        a: "ALT TERRAIN's published guidance is roughly $10,000–$30,000 per week. Phantom Pasting publishes per-city tiers openly and starts at $3,500 for a single-neighborhood test, with an itemized quote in 24 hours — a lower entry point for brands testing street campaigns before scaling.",
      },
      {
        q: "Does Phantom Pasting run international campaigns?",
        a: "Phantom Pasting focuses on the US — 50+ cities. ALT TERRAIN operates internationally across Canada and Europe, so for worldwide rollouts they're the better fit. For US street campaigns, Phantom offers deep market coverage with documentation on every placement.",
      },
      {
        q: "What can Phantom Pasting do that's different?",
        a: "Three things stand out: documentation as the core promise (every poster timestamped + GPS-logged, report in 48 hrs), multi-format street work (wheat paste plus chalk spray stencils and snipes in one campaign), and transparent published pricing with a 24-hour quote.",
      },
    ],
  },

  /* ─────────────────────────── WHEATPASTE POSTERS ──────────────────────── */
  {
    slug: "wheatpaste-posters",
    competitorName: "Wheatpaste Posters",
    competitorUrl: "https://wheatpasteposters.com",
    verified: "2026-05",
    sourceUrl: "https://wheatpasteposters.com/services/wheatpasting/los-angeles/",
    metaTitle: "Phantom Pasting vs Wheatpaste Posters",
    metaDescription:
      "Wheatpaste Posters vs Phantom Pasting compared: printing, formats, documentation, coverage, and pricing — an honest look at which fits your campaign.",
    tldr: "Wheatpaste Posters is an LA-rooted, since-2002 shop offering end-to-end OOH — same-day printing, wheat pasting, plus billboards, mobile, and media buying — for a roster including Coca-Cola, Nike, and the NBA. Phantom Pasting is a documentation-first street-marketing operator: wheat paste plus chalk stencils and snipes, every placement timestamped + GPS-logged, with transparent per-city pricing. Choose Wheatpaste Posters if you want broad OOH and fast printing under one roof; choose Phantom for documentation-rigorous street campaigns.",
    table: [
      { dimension: "Founded", phantom: "2014 · 500+ campaigns", competitor: "2002 · LA-rooted" },
      { dimension: "Coverage", phantom: "50+ US cities", competitor: "US + international (EU)" },
      { dimension: "Core focus", phantom: "Street formats — paste, chalk stencils, snipes", competitor: "Print + broad OOH (8-sheets, billboards, mobile, media buying)" },
      { dimension: "Printing", phantom: "Print-ready or in-house; rush 48 hr", competitor: "Same-day / next-day printing, 100lb stock" },
      { dimension: "Documentation", phantom: "100% photo proof, timestamped + GPS-logged, report in 48 hrs", competitor: "Tracking + documentation included" },
      { dimension: "Pricing", phantom: "Published per-city tiers, from $3,500; quote in 24 hrs", competitor: "From ≈ $4,000, scaling beyond $10,000" },
    ],
    categories: [
      {
        title: "Scope: street depth vs OOH breadth",
        body: "Wheatpaste Posters offers a wide OOH menu — wheat pasting alongside 8-sheets, billboards, digital billboards, mobile billboards, and media buying — so a brand can run multiple outdoor formats through one vendor. Phantom Pasting goes the other direction: depth in street formats specifically, layering wheat paste, chalk spray stencils, and snipes for neighborhood saturation. If you want a one-stop OOH shop, Wheatpaste Posters is broader; if street is the strategy, Phantom is more specialized.",
      },
      {
        title: "Printing & turnaround",
        body: "Printing is a genuine Wheatpaste Posters strength — same-day and next-day printing on heavy 100lb stock, with rush windows Monday–Friday. If a last-minute drop needs posters printed today, that's their lane. Phantom prints in-house or from your print-ready files with 48-hour rush available; our emphasis is on the install and the proof rather than print speed.",
      },
      {
        title: "Documentation & proof",
        body: "Both include documentation. Phantom's distinction is rigor and structure: 100% of placements photographed, timestamped, and GPS-logged, delivered as a branded report within 48 hours. For agencies who report to clients or brands tracking spend location-by-location, that level of proof is the differentiator.",
      },
      {
        title: "Pricing & track record",
        body: "Wheatpaste Posters has been operating since 2002 with a marquee client list (Coca-Cola, Nike, NBA, Netflix) and quotes campaigns from roughly $4,000 scaling beyond $10,000. Phantom launched in 2014, has run 500+ campaigns, and publishes per-city tiers from $3,500 with a 24-hour itemized quote. Their longevity and logo roster are real; Phantom competes on documentation, multi-format street work, and pricing transparency.",
      },
    ],
    phantomBestFor: [
      "Brands where street saturation (paste + chalk + snipes) is the strategy",
      "Agencies that need defensible, location-by-location proof of install",
      "Buyers who want transparent per-city pricing up front",
      "US campaigns prioritizing documentation over print-shop breadth",
    ],
    competitorBestFor: [
      "Brands wanting many OOH formats (billboards, mobile, media buying) in one place",
      "Last-minute drops needing same-day poster printing",
      "Buyers who prioritize a since-2002 track record and blue-chip roster",
    ],
    faqs: [
      {
        q: "Is Phantom Pasting an alternative to Wheatpaste Posters?",
        a: "Yes. Both run wheat paste poster campaigns across US cities. Wheatpaste Posters (since 2002) is a broad OOH and printing shop with same-day printing and a large client roster. Phantom Pasting (since 2014, 500+ campaigns) specializes in documentation-first street campaigns — paste plus chalk stencils and snipes, every placement timestamped + GPS-logged — with transparent per-city pricing.",
      },
      {
        q: "Which is better for same-day printing?",
        a: "Wheatpaste Posters — same-day and next-day printing on 100lb stock is one of their core strengths. Phantom prints in-house or from print-ready files with 48-hour rush; our emphasis is on installation and documented proof rather than print speed.",
      },
      {
        q: "How does pricing compare?",
        a: "Wheatpaste Posters quotes from roughly $4,000, scaling beyond $10,000. Phantom Pasting publishes per-city tiers openly and starts at $3,500 for a single-neighborhood test, with an itemized quote in 24 hours.",
      },
      {
        q: "What's Phantom Pasting's main differentiator?",
        a: "Documentation as the core promise — 100% of placements photographed, timestamped, and GPS-logged, delivered as a branded report within 48 hours — combined with multi-format street work (paste, chalk spray stencils, snipes) and transparent published pricing.",
      },
    ],
  },
];

export function getComparison(slug: string): CompetitorComparison | undefined {
  return COMPETITORS.find((c) => c.slug === slug);
}
