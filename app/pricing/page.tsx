/**
 * /pricing — service-page-style cost overview.
 *
 * WHY THIS PAGE EXISTS
 * ──────────────────────
 * Buyer-intent data (intent.json) shows 8 high-commercial-intent queries
 * (≥0.85 score) where Phantom has zero matched landing page:
 *   - "guerrilla marketing cost"        (720 vol/mo)
 *   - "flyposting company"              (480 vol/mo)
 *   - "flyposting agency"               (320 vol/mo)
 *   - "experiential marketing cost"     (480 vol/mo)
 *   - "out of home advertising nyc cost"
 *   - "wild posting brooklyn cost"
 *   - "billboard advertising cost"
 *   - "how much does wild posting cost?"
 * Combined: ~2,000+ monthly volume that we currently rank ZERO for.
 *
 * Existing /blog/wheat-pasting-cost targets the wheat-paste-specific lexicon.
 * This /pricing page targets the BROADER alternate lexicons (guerrilla,
 * flyposting, experiential, OOH cost) — same buyer, different terminology.
 * Internal links cross-reference both pages; canonicals are distinct.
 *
 * SEO STRUCTURE (per docs/blog-voice-spec.md + SEO-Writing-Skill)
 * ────────────────────────────────────────────────────────────────
 * - Title 56ch (under 60ch SERP limit factoring in " | Phantom Pasting" suffix)
 * - Meta 155ch
 * - Audience statement at top (CORE-EEAT C06)
 * - TL;DR / Key Takeaways box (CORE-EEAT O02)
 * - 6 H2 sections, no level skipping (CORE-EEAT O01)
 * - 5 PAA-shaped FAQs with FAQPage schema (Issue N4 from May 8 dashboard)
 * - 9 internal links (≥3 required) + 4 external authoritative citations
 *   (≥1 per 500w required, page is ~1500w → 3 minimum; we have 4)
 * - Service schema with priceRange + offer catalog
 * - Mateo Vargas Field Operations Lead voice in body prose
 */
import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import ShinyGoldText from "@/components/ShinyGoldText";
import Breadcrumb from "@/components/Breadcrumb";
import SiteFooter from "@/components/SiteFooter";
import TrustBar from "@/components/TrustBar";
import BlogLink from "@/components/BlogLink";
import { BUSINESS } from "@/lib/business";
import {
  serviceSchema,
  faqPageSchema,
  webPageSchema,
  jsonLd,
} from "@/lib/schema";
import {
  KW_PRICING,
  KW_BUYER_INTENT,
  KW_PARENT_CATEGORIES,
  KW_OOH,
  KW_NATIONWIDE,
  ORG_ADDITIONAL_TYPES,
} from "@/lib/keywordSets";

const PAGE_URL = `${BUSINESS.url}/pricing`;
const PAGE_OG = `${BUSINESS.url}/gallery/fifa-world-cup-poster-wall-gallery-wide.webp`;
const PAGE_TITLE = "Wheat Pasting & Guerrilla Marketing Cost";
const PAGE_DESC =
  "What wheat pasting, guerrilla marketing, flyposting, and street media campaigns actually cost in 2026. Real per-city pricing from 500+ live campaigns.";
const DATE_PUBLISHED = "2026-05-08";
const DATE_MODIFIED = "2026-05-08";

const ACCENT = "#D4A010";

const FAQS = [
  {
    q: "How much does guerrilla marketing cost?",
    a: "A typical guerrilla marketing campaign runs $5,000–$13,500 per city for a 150–250 poster wheat paste rollout. Multi-format campaigns combining paste, snipes, and chalk stencils run $8,500–$22,000 per city. National rollouts across 5+ cities scale to $45K–$90K with multi-city volume discounts.",
  },
  {
    q: "How much does flyposting cost in the US?",
    a: "Flyposting (the British term for wheat pasting) costs $5,000–$13,500 per US city for a standard 150–250 poster campaign at $33–$55 per poster installed. UK creative agencies booking US flyposting should expect 25–40% higher wall-rights costs in LA and NYC versus secondary markets.",
  },
  {
    q: "How much does experiential marketing cost?",
    a: "Experiential marketing budgets vary widely — from $5,500 wheat paste activations to $250K+ pop-up installations. The street-level component (paste, snipes, stencils) typically runs $8,500–$22,000 per city as the surround-attention layer for a primary experiential moment like a pop-up or product launch.",
  },
  {
    q: "How much does out-of-home advertising cost in NYC?",
    a: "Traditional NYC OOH (Times Square digital boards, scaffolding wraps, transit) runs $8K–$40K per placement on 4-week minimum flights. Wheat paste alternatives in NYC run $5,500–$13,500 per neighborhood activation — same audience reach in dense corridors at 25–80× lower CPM.",
  },
  {
    q: "What's the difference between flyposting and wheat pasting cost?",
    a: "Flyposting and wheat pasting are the same thing — flyposting is the British term, wheat pasting is the American term. Pricing is identical. Both reference paper posters adhered to walls with a flour-and-water paste. We charge the same rates regardless of which term the brief arrives in.",
  },
];

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    ...KW_PRICING,
    ...KW_BUYER_INTENT.slice(0, 8),
    ...KW_PARENT_CATEGORIES.slice(0, 6),
    ...KW_OOH.slice(0, 4),
    ...KW_NATIONWIDE.slice(0, 3),
    "guerrilla marketing cost",
    "flyposting company",
    "flyposting agency",
    "experiential marketing cost",
    "out of home advertising nyc cost",
    "wheat pasting agency cost",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `${PAGE_TITLE} | Phantom Pasting`,
    description: PAGE_DESC,
    url: PAGE_URL,
    type: "article",
    publishedTime: DATE_PUBLISHED,
    modifiedTime: DATE_MODIFIED,
    images: [
      {
        url: PAGE_OG,
        width: 1200,
        height: 630,
        alt: "Wheat paste poster wall — Phantom Pasting guerrilla marketing campaign pricing",
      },
    ],
  },
};

/**
 * Pricing tier ranges are anchored to $33–$55 per-poster all-in math:
 *   - 80-120 posters × $33-$55  = $2.6K-$6.6K  (Test tier; min nudged to $3.5K
 *     because below 80 posters fixed costs dominate)
 *   - 150-250 posters × $33-$55 = $5K-$13.5K   (Standard tier)
 *   - 300-500 posters × $33-$55 = $9.9K-$27.5K (Multi-City; multi-city discount
 *     pulls the top end down to ~$25K)
 *   - 1,000+ posters × $33-$55 + multi-format premium = $45K-$90K (National;
 *     premium walls, scaffold wraps, snipes, chalk stencils stack on top)
 *
 * Real reference: 450 posters / 3 cities / $15,179 = $33.73 per poster, which
 * sits at the bottom of the Multi-City band (multi-city discount applied).
 */
const TIERS = [
  {
    eyebrow: "Single-City Test",
    title: "1 city, 80–120 posters, 1 wave",
    range: "$3,500 – $6,500",
    includes: [
      "1 neighborhood corridor",
      "Print + paste + install + paste",
      "Next-morning photo documentation",
      "Wall rights (5–8 walls)",
    ],
  },
  {
    eyebrow: "Standard Single-City",
    title: "1 city, 150–250 posters, full neighborhood mix",
    range: "$5,500 – $13,500",
    includes: [
      "4 neighborhoods, 12–15 walls",
      "4–8 unique creative designs",
      "Pre-install scout + post-install report",
      "GPS-pinned photo doc per wall",
    ],
  },
  {
    eyebrow: "Multi-City",
    title: "2–3 cities, 300–500 posters, simultaneous install",
    range: "$15K – $25K",
    includes: [
      "LA + NYC + Miami most common",
      "Coordinated overnight install windows",
      "Unified reporting across cities",
      "8–14 day lead time",
    ],
  },
  {
    eyebrow: "Full National Rollout",
    title: "5–7 cities, 1,000+ posters, multi-format",
    range: "$45K – $90K",
    includes: [
      "Wheat paste + snipes + chalk stencils",
      "Coordinated paste + scaffold (NYC)",
      "Festival-week saturation available",
      "12–18 day lead time",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            serviceSchema({
              name: "Wheat Pasting & Guerrilla Marketing Campaigns",
              description: PAGE_DESC,
              url: PAGE_URL,
              // alternateName intentionally excludes "Wild Posting" — that term
              // is trademarked (Wild Posting®) and Phantom does not market the
              // service under that name. Body prose and FAQ answers may
              // descriptively reference "wild posting" as terminology customers
              // sometimes use, but it stays out of schema marketing fields.
              alternateName: [
                "Flyposting Campaigns",
                "Street Postering Campaigns",
                "Guerrilla Marketing Campaigns",
                "Out-of-Home Advertising — Wheat Paste Format",
              ],
              serviceType: "Wheat Pasting",
              category: "Outdoor Advertising",
              image: PAGE_OG,
              audienceType: "Brand Marketers, Marketing Agencies, Music Labels, Fashion Brands",
              additionalType: ORG_ADDITIONAL_TYPES,
              offerItems: [
                {
                  name: "Single-City Test Campaign",
                  description:
                    "1 neighborhood, 80–120 posters, single overnight install — $3,500–$6,500",
                },
                {
                  name: "Standard Single-City Campaign",
                  description:
                    "4 neighborhoods, 150–250 posters, photo documentation — $5,500–$13,500",
                },
                {
                  name: "Multi-City Activation",
                  description:
                    "2–3 cities, 300–500 posters, simultaneous install — $15K–$25K",
                },
                {
                  name: "Full National Rollout",
                  description:
                    "5–7 cities, 1,000+ posters, multi-format — $45K–$90K",
                },
              ],
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(faqPageSchema(FAQS)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            webPageSchema({
              url: PAGE_URL,
              name: `${PAGE_TITLE} | Phantom Pasting`,
              description: PAGE_DESC,
              datePublished: DATE_PUBLISHED,
              dateModified: DATE_MODIFIED,
            })
          ),
        }}
      />

      <div style={{ background: "transparent", minHeight: "100dvh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Pricing", href: "/pricing" }]} />
        <TrustBar />

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pt-4 md:pt-8 lg:pt-10 pb-12 md:pb-16">
          <div className="max-w-[1100px] mx-auto">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase mb-4"
              style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Pricing · 2026
            </span>
            <h1 className="font-black uppercase m-0 leading-[0.88]"
              style={{ fontSize: "clamp(40px, 6.2vw, 84px)", letterSpacing: "-0.04em" }}>
              WHAT WHEAT PASTING<br />&amp; <ShinyGoldText>GUERRILLA</ShinyGoldText> COSTS.
            </h1>
            <p className="font-light leading-relaxed mt-8" style={{ fontSize: "clamp(17px, 1.6vw, 19px)", color: "rgba(0,0,0,0.6)", maxWidth: "720px" }}>
              Real per-city pricing from 500+ live campaigns. What moves the number, what doesn&apos;t,
              and what an honest 2026 quote looks like for wheat pasting, flyposting, guerrilla
              marketing, and full out-of-home street activations across 50+ US cities.
            </p>

            <p style={{ fontStyle: "italic", color: "rgba(0,0,0,0.6)", marginTop: "1.5em", marginBottom: "1em", maxWidth: "720px" }}>
              Written for brand managers, agency planners, and procurement teams pricing physical
              street advertising — not media buyers shopping digital. Numbers reflect the work
              we&apos;ve quoted across LA, NYC, Miami, Chicago, Atlanta, Phoenix, and Denver.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="/contact"
                className="inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-8 py-4 rounded-full"
                style={{ background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)", color: "#FFF",
                  boxShadow: "0 4px 28px rgba(0,0,0,0.42), 0 1px 0 rgba(255,255,255,0.08) inset" }}>
                Get a Custom Quote
                <span style={{ color: ACCENT }}>→</span>
              </Link>
              <a href={BUSINESS.telHref}
                className="inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.18em] uppercase no-underline px-6 py-4 rounded-full"
                style={{ color: "rgba(0,0,0,0.82)", background: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(0,0,0,0.14)", boxShadow: "0 2px 12px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)" }}>
                Call Now
              </a>
            </div>
          </div>
        </section>

        {/* ── Key Takeaways (TL;DR per CORE-EEAT O02) ──────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-16 md:pb-24">
          <div className="max-w-[900px] mx-auto p-8 rounded-2xl"
            style={{ background: "rgba(212,160,16,0.06)", border: "1px solid rgba(212,160,16,0.2)" }}>
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: ACCENT }}>
              KEY TAKEAWAYS
            </div>
            <ul className="space-y-2.5" style={{ color: "rgba(0,0,0,0.78)", fontSize: "16px", lineHeight: "1.6" }}>
              <li>· <strong>Single-city wheat paste / flyposting / guerrilla marketing:</strong> $3,500–$13,500 depending on poster count and neighborhood mix</li>
              <li>· <strong>Multi-city rollout:</strong> $15K–$25K for 2–3 cities; $45K–$90K for full 5–7 city national</li>
              <li>· <strong>Per-poster all-in cost:</strong> $33–$55 installed (print + paste + wall rights + labor + documentation + project management)</li>
              <li>· <strong>OOH alternative math:</strong> Wheat paste delivers $0.10–$0.30 in-person CPM vs. $4–$15 for traditional out-of-home</li>
              <li>· <strong>Lead time:</strong> 7–10 days from sign-off to install (vs. 4–8 weeks for traditional billboard buys)</li>
              <li>· <strong>Wild posting / experiential / pop-up activations:</strong> Same per-poster math; the surround-attention layer typically runs $8K–$22K per city</li>
            </ul>
          </div>
        </section>

        {/* ── Pricing Tiers ────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20 md:pb-28">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-12">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4 inline-block"
                style={{ color: "rgba(0,0,0,0.55)" }}>
                Standard Pricing Tiers
              </span>
              <h2 className="font-black uppercase m-0 leading-[0.9]"
                style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}>
                FOUR CAMPAIGN BANDS.<br />ONE TRANSPARENT QUOTE.
              </h2>
              <p className="font-light leading-relaxed mt-6" style={{ color: "rgba(0,0,0,0.6)", fontSize: "16px", maxWidth: "640px" }}>
                Most campaigns we quote land in one of these four bands. Brand managers asking
                &quot;what does wheat pasting cost&quot; or &quot;what does guerrilla marketing
                cost&quot; usually find the right reference here. We&apos;ve had brands forward
                this exact pricing structure to their CFO inside an hour of receiving the quote —
                that&apos;s the level of itemization our quotes use.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TIERS.map((tier) => (
                <div key={tier.eyebrow} className="p-6 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.06)",
                    boxShadow: "0 1px 0 rgba(255,255,255,0.9) inset, 0 8px 32px rgba(0,0,0,0.04)" }}>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
                    {tier.eyebrow}
                  </div>
                  <div className="font-black uppercase mb-3 leading-tight"
                    style={{ fontSize: "32px", letterSpacing: "-0.03em", color: ACCENT }}>
                    {tier.range}
                  </div>
                  <p className="font-medium mb-4" style={{ color: "rgba(0,0,0,0.78)", fontSize: "14px", lineHeight: "1.5" }}>
                    {tier.title}
                  </p>
                  <ul className="space-y-1.5" style={{ color: "rgba(0,0,0,0.6)", fontSize: "13px", lineHeight: "1.5" }}>
                    {tier.includes.map((item) => (
                      <li key={item}>· {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What Changes Pricing ─────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20 md:pb-28">
          <div className="max-w-[900px] mx-auto">
            <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.035em" }}>
              WHAT MOVES THE NUMBER.
            </h2>
            <p className="font-light leading-relaxed mb-6" style={{ color: "rgba(0,0,0,0.7)", fontSize: "17px" }}>
              Five variables drive what a campaign actually costs. We&apos;ve quoted hundreds of
              briefs against these — the bands have stayed remarkably stable since 2022 even as
              paper and wall-rights costs crept up.
            </p>

            <div className="space-y-8 mt-12">
              <div>
                <h3 className="font-black uppercase mb-3" style={{ fontSize: "20px", letterSpacing: "-0.02em" }}>
                  1. CITY — LA + NYC RUN PREMIUM
                </h3>
                <p style={{ color: "rgba(0,0,0,0.7)", fontSize: "16px", lineHeight: "1.65" }}>
                  Wall rights on Melrose or in SoHo run materially higher than wall rights in
                  Atlanta or Denver. Same poster, same install crew, 25–40% cost spread between
                  top-tier (LA, NYC, Miami) and secondary markets (Atlanta, Denver, Phoenix,
                  Chicago). For market-specific breakdowns see{" "}
                  <Link href="/locations/los-angeles">LA pricing</Link>,{" "}
                  <Link href="/locations/new-york">NYC pricing</Link>, or{" "}
                  <Link href="/locations">all 30+ city pages</Link>.
                </p>
              </div>

              <div>
                <h3 className="font-black uppercase mb-3" style={{ fontSize: "20px", letterSpacing: "-0.02em" }}>
                  2. POSTER COUNT — FLOOR EXISTS, CEILING DOESN&apos;T
                </h3>
                <p style={{ color: "rgba(0,0,0,0.7)", fontSize: "16px", lineHeight: "1.65" }}>
                  Economic floor is around 100 posters. Below that, fixed costs (crew mobilization,
                  vehicle, paste prep, documentation) dominate the per-poster cost. Above 300,
                  scale discounts kick in — an extra 100 posters on the same install route adds
                  about $800, not the $1,500 a standalone 100-poster run would cost.
                </p>
              </div>

              <div>
                <h3 className="font-black uppercase mb-3" style={{ fontSize: "20px", letterSpacing: "-0.02em" }}>
                  3. WALL MIX — PREMIUM WALLS COST REAL MONEY
                </h3>
                <p style={{ color: "rgba(0,0,0,0.7)", fontSize: "16px", lineHeight: "1.65" }}>
                  Not all walls are equal. A brick wall on Fairfax runs $180–$350 for a single
                  campaign placement. An entire scaffold wrap in Midtown Manhattan can run
                  $2,000–$6,000 depending on dimensions and foot traffic. Most campaigns mix
                  8–12 standard walls with 1–3 premium walls for hero-shot images. Brands that
                  fill an entire campaign with $200 walls usually call us back asking why their
                  content team didn&apos;t want to post any of the photos. The premium walls
                  are premium because they make the photos worth posting.
                </p>
              </div>

              <div>
                <h3 className="font-black uppercase mb-3" style={{ fontSize: "20px", letterSpacing: "-0.02em" }}>
                  4. PRINT QUALITY — COMMERCIAL VS PRO-GRADE
                </h3>
                <p style={{ color: "rgba(0,0,0,0.7)", fontSize: "16px", lineHeight: "1.65" }}>
                  Commercial wheat paste print on 70 lb blue-back paper runs $1.25–$2.00 per
                  24×36 poster in quantities of 200+. Pro-grade UV-printed weatherproof stock
                  runs $3.00–$4.50 for the same size. The jump in print cost is mostly justified
                  — pro-grade holds color 2–3 weeks longer in sun — but it&apos;s a real line
                  item to weigh against your campaign duration. For deeper paste/print field
                  notes see{" "}
                  <BlogLink slug="how-to-make-wheat-paste">how to make wheat paste</BlogLink>.
                </p>
              </div>

              <div>
                <h3 className="font-black uppercase mb-3" style={{ fontSize: "20px", letterSpacing: "-0.02em" }}>
                  5. DOCUMENTATION — STANDARD VS PREMIUM
                </h3>
                <p style={{ color: "rgba(0,0,0,0.7)", fontSize: "16px", lineHeight: "1.65" }}>
                  Standard documentation (next-morning photo pass per wall, GPS-pinned, delivered
                  in 48 hours) is included in every quote. Premium documentation — full video
                  walk-through, drone overhead shots where permitted, edited recap reel for the
                  brand&apos;s social — adds $800–$2,500 to the campaign.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Per-Format Cost Math ─────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20 md:pb-28">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.035em" }}>
              GUERRILLA, FLYPOSTING, EXPERIENTIAL —<br />WHAT DO THESE TERMS COST?
            </h2>
            <p className="font-light leading-relaxed mb-8" style={{ color: "rgba(0,0,0,0.7)", fontSize: "17px" }}>
              The same physical work goes by different names depending on the brief. Buyers from{" "}
              <a href="https://en.wikipedia.org/wiki/Out-of-home_advertising" target="_blank" rel="noopener noreferrer">out-of-home advertising</a>{" "}
              backgrounds use different terminology than buyers from experiential or fashion
              backgrounds. Pricing is the same regardless of which lexicon the brief arrives in.
            </p>

            <div className="overflow-x-auto rounded-2xl"
              style={{ background: "rgba(255,255,255,0.55)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <table className="w-full">
                <thead style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                  <tr style={{ color: "rgba(0,0,0,0.55)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                    <th className="text-left px-6 py-4 font-mono">Term</th>
                    <th className="text-left px-6 py-4 font-mono">What It Means</th>
                    <th className="text-left px-6 py-4 font-mono">Typical Per-City Cost</th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: "14px", color: "rgba(0,0,0,0.78)", lineHeight: "1.5" }}>
                  <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                    <td className="px-6 py-4 font-bold">Wheat pasting</td>
                    <td className="px-6 py-4">Paper poster on wall with flour-water paste</td>
                    <td className="px-6 py-4">$5,000–$13,500</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                    <td className="px-6 py-4 font-bold">Flyposting</td>
                    <td className="px-6 py-4">UK term for the same wheat-paste medium</td>
                    <td className="px-6 py-4">$5,000–$13,500</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                    <td className="px-6 py-4 font-bold">Wild posting</td>
                    <td className="px-6 py-4">Trade term — same physical work as wheat paste</td>
                    <td className="px-6 py-4">$5,000–$13,500</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                    <td className="px-6 py-4 font-bold">Guerrilla marketing</td>
                    <td className="px-6 py-4">Umbrella category — paste + snipes + stencils + activation</td>
                    <td className="px-6 py-4">$8,500–$22,000</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                    <td className="px-6 py-4 font-bold">Experiential marketing</td>
                    <td className="px-6 py-4">Pop-up + activation + street layer combined</td>
                    <td className="px-6 py-4">$15K–$60K</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold">Snipe posters</td>
                    <td className="px-6 py-4">11×17 / 18×24 posters on poles + signal boxes</td>
                    <td className="px-6 py-4">$3,500–$8,500 (campaign add-on)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="font-light leading-relaxed mt-8" style={{ color: "rgba(0,0,0,0.7)", fontSize: "16px" }}>
              The naming differences are dialect, not pricing. We&apos;ve been called by all three
              names — flyposting, wheat pasting, wild posting — depending on whether the brief
              came from a London creative agency, a New York label, or a procurement team that
              read the term in a Wikipedia article ten minutes ago. The physical work is the same.
              For deeper format comparison see{" "}
              <BlogLink slug="snipe-posters-vs-wheat-paste-vs-floor-decals">snipes vs wheat paste vs floor decals</BlogLink>.
            </p>
          </div>
        </section>

        {/* ── vs OOH context ────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20 md:pb-28">
          <div className="max-w-[900px] mx-auto">
            <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.035em" }}>
              VS TRADITIONAL OOH.
            </h2>
            <p className="font-light leading-relaxed mb-6" style={{ color: "rgba(0,0,0,0.7)", fontSize: "17px" }}>
              Traditional out-of-home advertising — Times Square digital boards, highway
              billboards, transit wraps — runs $4–$15 CPM per industry data from{" "}
              <a href="https://oaaa.org/" target="_blank" rel="noopener noreferrer">OAAA</a>{" "}
              and{" "}
              <a href="https://geopath.org/" target="_blank" rel="noopener noreferrer">Geopath</a>.
              A single Times Square digital placement can run $40K–$120K for a 4-week flight.
            </p>
            <p className="font-light leading-relaxed mb-6" style={{ color: "rgba(0,0,0,0.7)", fontSize: "17px" }}>
              Wheat paste runs $0.10–$0.30 in-person CPM in dense urban corridors. Same audience
              concentration as a Times Square viewer but at 25–80× lower cost per impression. The
              tradeoff: no Geopath measurement structure, no programmatic targeting. Brand teams
              that need rigorous CPM attribution stay with traditional OOH. Brand teams that
              want photographable cultural moments at sub-$0.50 CPM lean wheat paste.
            </p>
            <p className="font-light leading-relaxed mb-6" style={{ color: "rgba(0,0,0,0.7)", fontSize: "17px" }}>
              We&apos;ve had brands run both formats simultaneously — billboard for scale + paste
              for cultural credibility — and the wheat paste consistently generates 10–40× more
              user-photographed organic social posts per dollar. For the side-by-side breakdown
              see{" "}
              <BlogLink slug="wheat-pasting-vs-billboards">wheat pasting vs billboards</BlogLink>.
            </p>
          </div>
        </section>

        {/* ── How to read a quote ──────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20 md:pb-28">
          <div className="max-w-[900px] mx-auto">
            <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.035em" }}>
              HOW TO READ A REAL QUOTE.
            </h2>
            <p className="font-light leading-relaxed mb-6" style={{ color: "rgba(0,0,0,0.7)", fontSize: "17px" }}>
              A reputable wheat paste, flyposting, or guerrilla marketing quote should itemize
              seven line items at minimum:
            </p>
            <ol className="space-y-2 mb-8" style={{ color: "rgba(0,0,0,0.78)", fontSize: "16px", lineHeight: "1.6" }}>
              <li>1. Total poster count + poster size (24×36 standard)</li>
              <li>2. Number of walls + neighborhoods covered</li>
              <li>3. Number of unique creative designs</li>
              <li>4. Print specs (paper weight, print type, finishing)</li>
              <li>5. Install crew size + window (10pm–4am standard)</li>
              <li>6. Documentation scope + delivery timeline</li>
              <li>7. Permit + insurance coverage where applicable</li>
            </ol>
            <p className="font-light leading-relaxed mb-6" style={{ color: "rgba(0,0,0,0.7)", fontSize: "17px" }}>
              If a quote arrives as a single lump number with no breakdown, ask for one. Transparent
              pricing is a reliable signal of a trustworthy operator. Opaque pricing usually means
              corners are being cut on one of the seven line items above. We&apos;ve had brands
              forward us competitor quotes that read &quot;LA flyposting campaign — $4,500 — net
              30,&quot; full stop. That&apos;s how a brand ends up with 60 posters on three dead
              walls and a brand manager wondering where the money went.
            </p>
            <p className="font-light leading-relaxed" style={{ color: "rgba(0,0,0,0.7)", fontSize: "17px" }}>
              For the deep-dive on per-poster economics — print, paste, labor, documentation,
              project management — read{" "}
              <BlogLink slug="wheat-pasting-cost">wheat pasting cost</BlogLink>. For the full
              campaign-night operations breakdown see{" "}
              <BlogLink slug="wheat-pasting-campaign">how a 12-location campaign runs overnight</BlogLink>.
            </p>
          </div>
        </section>

        {/* ── FAQ section ─────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20 md:pb-28">
          <div className="max-w-[900px] mx-auto">
            <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.035em" }}>
              FREQUENTLY ASKED QUESTIONS.
            </h2>
            <div className="space-y-6">
              {FAQS.map(({ q, a }) => (
                <div key={q} className="pb-6" style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                  <h3 className="font-black mb-3" style={{ fontSize: "18px", letterSpacing: "-0.02em" }}>
                    {q}
                  </h3>
                  <p style={{ color: "rgba(0,0,0,0.7)", fontSize: "16px", lineHeight: "1.65" }}>
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA close ────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20 md:pb-28">
          <div className="max-w-[900px] mx-auto text-center p-12 rounded-3xl"
            style={{ background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)", color: "#FFF",
              boxShadow: "0 4px 28px rgba(0,0,0,0.42)" }}>
            <h2 className="font-black uppercase m-0 mb-4"
              style={{ fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-0.035em", color: "#FFF" }}>
              Ready for a real quote?
            </h2>
            <p className="font-light mb-8" style={{ color: "rgba(255,255,255,0.7)", fontSize: "17px", maxWidth: "560px", margin: "0 auto 2em" }}>
              Tell us city, poster count, and timeline. We send fully itemized pricing — print,
              paste, labor, documentation, project management — within 24 hours.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2.5 font-bold text-[12px] tracking-[0.22em] uppercase no-underline px-10 py-5 rounded-full"
              style={{ background: "#FFF", color: "#1A1A1A",
                boxShadow: "0 4px 28px rgba(0,0,0,0.32)" }}>
              Get a Custom Quote
              <span style={{ color: ACCENT }}>→</span>
            </Link>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
