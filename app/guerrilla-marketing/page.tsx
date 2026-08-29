import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import ShinyGoldText from "@/components/ShinyGoldText";
import Breadcrumb from "@/components/Breadcrumb";
import SiteFooter from "@/components/SiteFooter";
import TrustBar from "@/components/TrustBar";
import { BUSINESS } from "@/lib/business";
import {
  serviceSchema,
  webPageSchema,
  articleSchema,
  faqPageSchema,
  jsonLd,
} from "@/lib/schema";
import {
  KW_STREET_MARKETING,
  KW_CRAFT,
  KW_STREET_POSTERS,
  KW_OOH,
  KW_VERTICALS,
  KW_NATIONWIDE,
  KW_PARENT_CATEGORIES,
  ORG_ADDITIONAL_TYPES,
} from "@/lib/keywordSets";

/**
 * /guerrilla-marketing — the "guerrilla marketing agency" head-term page.
 *
 * Born from the 8/28 AEO test: ChatGPT and Grok recommend Phantom for
 * "wheat pasting LA" but every bot returned competitors (AGM, GoGORILLA,
 * Sidewalk Tattoos) for "guerrilla marketing agency" queries — the one named
 * service family with zero Phantom presence. This page targets that phrase
 * space head-on, structured around what AI answer engines actually quoted in
 * the test: a plain-language definition, transparent pricing bands (mirroring
 * /pricing), an explicit specialization statement, and the geo-tagged
 * documentation wedge every bot latched onto.
 */

const PAGE_URL = `${BUSINESS.url}/guerrilla-marketing`;
const PAGE_OG = `${BUSINESS.url}/gallery/fifa-world-cup-street-gallery-pedestrian-viewing.webp`;
const PAGE_TITLE = "Guerrilla Marketing Agency";
const PAGE_DESC =
  "Phantom Pasting is a guerrilla marketing agency for street-level campaigns — wheat pasting, chalk stencils, stickers, flyering. In-house print + install, geo-tagged photo proof, 50+ US cities.";
const DATE_PUBLISHED = "2026-08-29";
const DATE_MODIFIED = "2026-08-29";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [...KW_STREET_MARKETING, ...KW_PARENT_CATEGORIES.slice(0, 6)],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Guerrilla Marketing Agency | Phantom Pasting",
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
        alt: "Guerrilla marketing campaign — pedestrians viewing a wheat paste poster street gallery",
      },
    ],
  },
};

const FORMATS = [
  {
    name: "Wheat Pasting",
    href: "/services/wheat-pasting",
    desc: "Large-format paste posters on owner-authorized walls — the backbone format of guerrilla marketing. 24×36 grids to 48×72 statement pieces.",
  },
  {
    name: "Chalk Spray Stencils",
    href: "/services/chalk-spray-stencils",
    desc: "Removable chalk brand marks on sidewalks and plazas. Legal, precise, and placed exactly on your audience's walking route.",
  },
  {
    name: "Snipes & Stickers",
    href: "/services/snipes",
    desc: "Die-cut sticker passes and pole snipes across high-traffic corridors — the frequency layer that makes a campaign feel everywhere.",
  },
  {
    name: "Street Flyering",
    href: "/services/street-flyering",
    desc: "Windshield flyers and hand-to-hand handbilling around venues, lots, and events. The fastest local push in the toolkit.",
  },
  {
    name: "Full Impact Campaigns",
    href: "/services/full-impact-campaigns",
    desc: "Every format stacked in one coordinated takeover — wall level, street level, and pole level running simultaneously.",
  },
  {
    name: "Art Murals",
    href: "/services/art-murals",
    desc: "Hand-painted murals by vetted artists for brands that want permanence — managed end to end from commission to unveiling.",
  },
];

const PROOF_POINTS = [
  {
    title: "GEO-TAGGED PROOF",
    desc: "Every placement photographed, timestamped, and GPS-logged. You get a mapped report of exactly what ran where — no trust-us metrics.",
  },
  {
    title: "IN-HOUSE PRINT + INSTALL",
    desc: "One vendor from artwork to wall. We print on paste-ready stock and install with our own crews, so nothing is lost between a printer and a street team.",
  },
  {
    title: "OWNER-AUTHORIZED WALLS",
    desc: "Established wall relationships in every market we run — placements that stay up, not gambles that get buffed by morning.",
  },
  {
    title: "STREET-CULTURE FLUENCY",
    desc: "Campaigns for music, fashion, film, and lifestyle brands that need to look native to the street — not like an ad that wandered off a billboard.",
  },
];

const FAQS = [
  {
    q: "What is a guerrilla marketing agency?",
    a: "A guerrilla marketing agency plans and executes unconventional, street-level advertising campaigns — wheat paste posters, sidewalk stencils, sticker snipes, and flyering — instead of traditional media buys. A full-service agency like Phantom Pasting handles strategy, printing, crew installation, and photo documentation in one engagement, so a brand ships artwork and receives a documented street campaign.",
  },
  {
    q: "How much does a guerrilla marketing campaign cost?",
    a: "A single-city guerrilla marketing campaign typically runs $3,500–$6,500 for a one-neighborhood test (80–120 posters) and $5,500–$13,500 for a standard multi-neighborhood rollout of 150–250 posters. Multi-format campaigns combining paste, stickers, and chalk stencils run $8,500–$22,000 per city, and national 5–7 city rollouts scale to $45K–$90K. See our pricing page for the full tier breakdown.",
  },
  {
    q: "Is guerrilla marketing legal?",
    a: "It depends on the format and placement. Chalk spray stencils use removable chalk and are legal on most sidewalks. Wheat pasting on owner-authorized walls — how Phantom Pasting operates — is done with the property owner's permission. Unauthorized posting on public infrastructure is citable in most US cities, which is why established wall relationships and format choice matter when hiring an agency.",
  },
  {
    q: "What formats does a guerrilla marketing campaign include?",
    a: "The core street formats are wheat paste posters (24×36 to 48×72), chalk spray sidewalk stencils, die-cut stickers and pole snipes, and street flyering. Campaigns can run one format or stack several — a full-impact deployment puts your brand at wall level, sidewalk level, and pole level in the same corridors simultaneously.",
  },
  {
    q: "How do I choose a guerrilla marketing company?",
    a: "Ask three questions: Do they print and install in-house or broker it out? Do they provide per-placement photo proof with GPS data, or a handful of hero shots? And are their walls owner-authorized, or is your budget gambling on placements that get removed in a day? Any agency that hesitates on documentation is asking you to buy on trust.",
  },
  {
    q: "Which cities do you run guerrilla marketing campaigns in?",
    a: "Phantom Pasting runs campaigns in 50+ US cities, with deep coverage in Los Angeles, New York, Nashville, Atlanta, Austin, Seattle, Chicago, and Miami. Multi-city rollouts install simultaneously on a single timeline with one unified photo report.",
  },
  {
    q: "What's the difference between guerrilla marketing and wild posting?",
    a: "Wild posting (also called wheat pasting or flyposting) is one format within guerrilla marketing — repeated paste posters on street-level walls. Guerrilla marketing is the umbrella: it covers wild posting plus stencils, stickers, flyering, and any unconventional street-level activation designed to reach people outside traditional ad space.",
  },
] as const;

const ACCENT = "#D4A010";

export default function GuerrillaMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            serviceSchema({
              name: "Guerrilla Marketing Agency Services",
              alternateName: [
                "Guerrilla Marketing Agency",
                "Guerrilla Marketing Company",
                "Guerrilla Advertising Agency",
                "Street Marketing Agency",
                "Alternative Advertising Agency",
                "Grassroots Marketing Campaigns",
                "Brand Activation Agency",
                "Street-Level Advertising Company",
                "Unconventional Marketing Agency",
              ],
              additionalType: ORG_ADDITIONAL_TYPES,
              description:
                "Full-service guerrilla marketing: wheat pasting, chalk spray stencils, sticker snipes, street flyering, and multi-format street takeovers. In-house printing and installation with geo-tagged photo documentation in 50+ US cities.",
              url: PAGE_URL,
              serviceType: "Guerrilla Marketing",
              category: "Outdoor Advertising",
              image: PAGE_OG,
              slogan: "Street-level campaigns with receipts.",
              audienceType:
                "Brand Marketers, Marketing Agencies, Music Labels, Fashion Brands, Film Studios, Startups",
              offerItems: [
                {
                  name: "Single-Format Street Campaign",
                  description:
                    "Wheat pasting, chalk stencils, stickers, or flyering in one city — printed, installed, and photo-documented from $3,500.",
                },
                {
                  name: "Multi-Format City Takeover",
                  description:
                    "Paste, stencils, and stickers stacked across targeted neighborhoods for total street saturation — $8,500–$22,000 per city.",
                },
                {
                  name: "National Guerrilla Rollout",
                  description:
                    "Simultaneous multi-format installs across 5–7 US cities on one timeline with a unified geo-tagged photo report.",
                },
              ],
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            webPageSchema({
              name: PAGE_TITLE,
              description: PAGE_DESC,
              url: PAGE_URL,
              datePublished: DATE_PUBLISHED,
              dateModified: DATE_MODIFIED,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            articleSchema({
              headline: "Guerrilla Marketing Agency",
              description: PAGE_DESC,
              url: PAGE_URL,
              image: PAGE_OG,
              datePublished: DATE_PUBLISHED,
              dateModified: DATE_MODIFIED,
              articleSection: "Services",
              articleBody: PAGE_DESC,
              keywords: [
                ...KW_STREET_MARKETING,
                ...KW_CRAFT.slice(0, 3),
                ...KW_STREET_POSTERS.slice(0, 3),
                ...KW_OOH.slice(0, 3),
                ...KW_VERTICALS.slice(0, 4),
                ...KW_NATIONWIDE.slice(0, 3),
              ],
              audienceType: "Brand Marketers, Marketing Agencies",
              genre: "Service Page",
            })
          ),
        }}
      />
      {/* Org + WebSite schema injected globally via app/layout.tsx (see lib/schema.ts orgSchema). */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(faqPageSchema(FAQS.map(({ q, a }) => ({ q, a })))),
        }}
      />
      <div style={{ background: "transparent", minHeight: "100dvh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Guerrilla Marketing", href: "/guerrilla-marketing" },
          ]}
        />
        <TrustBar />

        {/* ── Hero (split-screen) ───────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] lg:min-h-[660px] items-center">

              {/* LEFT — text + stats */}
              <div className="relative z-10 flex flex-col justify-center py-6 md:py-10 lg:py-14 lg:pr-16">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase mb-6"
                  style={{ color: "rgba(0,0,0,0.55)" }}>
                  <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                  Street-Level. Documented. Nationwide.
                </span>
                <h1 className="font-black uppercase m-0 leading-[0.88]"
                  style={{ fontSize: "clamp(44px, 6.5vw, 92px)", letterSpacing: "-0.04em" }}>
                  GUERRILLA MARKETING<br /><ShinyGoldText>AGENCY.</ShinyGoldText>
                </h1>
                <p className="font-light leading-relaxed mt-8 mb-10"
                  style={{ fontSize: "clamp(17px, 1.6vw, 19px)", color: "rgba(0,0,0,0.5)", maxWidth: "520px" }}>
                  Phantom Pasting plans, prints, and installs street-level campaigns —
                  wheat paste walls, sidewalk stencils, sticker snipes, and flyering —
                  then hands you geo-tagged photo proof of every placement.
                  Built for brands that need to look native to the street.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact"
                    className="hero-cta-primary relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-8 py-4 rounded-full overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)", color: "#FFF",
                      boxShadow: "0 4px 28px rgba(0,0,0,0.42), 0 1px 0 rgba(255,255,255,0.08) inset" }}>
                    <span className="absolute inset-0 pointer-events-none rounded-full"
                      style={{ background: "linear-gradient(180deg, rgba(196,162,18,0.28) 0%, transparent 48%)" }} />
                    Plan My Campaign <span className="cta-arrow" style={{ color: ACCENT }}>→</span>
                  </Link>
                  <a href={BUSINESS.telHref}
                    className="hero-cta-secondary inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.18em] uppercase no-underline px-6 py-4 rounded-full"
                    style={{ color: "rgba(0,0,0,0.82)", background: "rgba(255,255,255,0.9)",
                      border: "1px solid rgba(0,0,0,0.14)", boxShadow: "0 2px 12px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)" }}>
                    Call {BUSINESS.telephoneDisplay}
                  </a>
                </div>

                {/* Stats row */}
                <div className="flex flex-wrap gap-10 md:gap-16 mt-12 pt-10"
                  style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                  {[
                    { stat: "500+", label: "Campaigns" },
                    { stat: "50+",  label: "US Cities" },
                    { stat: "100%", label: "Photo-Documented" },
                  ].map(({ stat, label }) => (
                    <div key={label}>
                      <div className="font-black uppercase leading-none"
                        style={{ fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-0.04em", color: ACCENT }}>
                        {stat}
                      </div>
                      <div className="font-mono text-[9px] tracking-[0.3em] uppercase mt-1.5" style={{ color: "rgba(0,0,0,0.55)" }}>
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — image composition (desktop only) */}
              <div className="relative hidden lg:block h-[660px] overflow-hidden">
                <span aria-hidden className="absolute right-0 top-1/2 font-black uppercase pointer-events-none select-none"
                  style={{ fontSize: "clamp(80px, 12vw, 180px)", letterSpacing: "-0.06em",
                    color: "rgba(212,160,16,0.05)", lineHeight: 1,
                    writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}>
                  GUERRILLA
                </span>

                {/* One image per core guerrilla format: paste, stencil, sticker, flyer. */}
                <div className="absolute top-[6%] right-0 rounded-2xl overflow-hidden"
                  style={{ width: "64%", height: "48%",
                    transform: "rotate(1.5deg)",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.20), 0 4px 14px rgba(0,0,0,0.10)" }}>
                  <Image
                    src="/gallery/zach-john-king-im-what-you-get-wheat-paste-street-corner-pedestrians-nashville.webp"
                    alt="Pedestrians passing a Zach John King wheat paste poster campaign in downtown Nashville — guerrilla marketing at street level"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 1024px) 0vw, 32vw"
                    loading="lazy"
                  />
                </div>

                <div className="absolute top-[9%] left-0 rounded-xl overflow-hidden"
                  style={{ width: "40%", height: "38%",
                    transform: "rotate(-2deg)",
                    boxShadow: "0 16px 48px rgba(0,0,0,0.26), 0 3px 10px rgba(0,0,0,0.12)" }}>
                  <Image
                    src="/gallery/biodance-glow-on-the-go-chalk-stencil-sidewalk-los-angeles.webp"
                    alt="Biodance chalk spray sidewalk stencil in Los Angeles — a guerrilla marketing format"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="22vw"
                    loading="lazy"
                  />
                </div>

                <div className="absolute bottom-[8%] left-0 rounded-xl overflow-hidden"
                  style={{ width: "46%", height: "40%",
                    transform: "rotate(-2.5deg)",
                    boxShadow: "0 16px 48px rgba(0,0,0,0.26), 0 3px 10px rgba(0,0,0,0.12)" }}>
                  <Image
                    src="/gallery/street-flyering-windshield-flyer-parked-cars-los-angeles.webp"
                    alt="Street flyering — windshield flyers across parked cars in Los Angeles"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="25vw"
                  />
                </div>

                <div className="absolute bottom-[5%] right-[2%] rounded-xl overflow-hidden"
                  style={{ width: "40%", height: "50%",
                    transform: "rotate(2.5deg)",
                    boxShadow: "0 16px 48px rgba(0,0,0,0.26), 0 3px 10px rgba(0,0,0,0.12)" }}>
                  <Image
                    src="/gallery/biodance-hydrogel-splash-sticker-wall-los-angeles.webp"
                    alt="Biodance die-cut sticker on a Los Angeles street wall — guerrilla sticker marketing"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="25vw"
                  />
                </div>

                <div aria-hidden className="absolute pointer-events-none"
                  style={{ top: "30%", left: "32%", width: "1px", height: "28%",
                    background: "linear-gradient(to bottom, transparent, rgba(212,160,16,0.5), transparent)",
                    transform: "rotate(18deg)" }} />

                <div className="absolute top-6 left-4 rounded-xl px-4 py-3"
                  style={{ background: "rgba(255,254,248,0.92)", backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.75)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.09)" }}>
                  <div className="font-black uppercase leading-none"
                    style={{ fontSize: "20px", letterSpacing: "-0.04em", color: ACCENT }}>6 Formats</div>
                  <div className="font-mono text-[8px] tracking-[0.3em] uppercase mt-1"
                    style={{ color: "rgba(0,0,0,0.55)" }}>One Agency</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Byline ────────────────────────────────────────────── */}
        <div className="px-5 sm:px-8 md:px-12 lg:px-16 pb-6">
          <div className="max-w-[1200px] mx-auto">
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase m-0" style={{ color: "rgba(0,0,0,0.55)" }}>
              By <span style={{ color: "rgba(0,0,0,0.58)" }}>Phantom Pasting</span>
              &nbsp;·&nbsp;
              <time dateTime={DATE_MODIFIED}>Last updated August 2026</time>
            </p>
          </div>
        </div>

        {/* ── Definition ────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
              style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Definition
            </span>
            <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]"
              style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}>
              WHAT DOES A GUERRILLA<br /><ShinyGoldText>MARKETING AGENCY DO?</ShinyGoldText>
            </h2>
            <p className="font-light leading-relaxed m-0 mb-4" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "760px" }}>
              A guerrilla marketing agency puts brands in front of people in the physical world — on the walls, sidewalks, and poles of the neighborhoods where their audience actually walks — instead of buying traditional ad space. The formats are unconventional by design: wheat paste poster walls, chalk-sprayed sidewalk stencils, die-cut sticker runs, windshield flyers. The effect is a campaign that feels discovered rather than served.
            </p>
            <p className="font-light leading-relaxed m-0 mb-4" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "760px" }}>
              A full-service agency owns the whole chain: strategy and neighborhood targeting, print production on the right stock, installation by crews who know every wall in their market, and documentation that proves what ran. That last step is where agencies separate — anyone can promise 200 placements; the question is whether you get a geo-tagged photo of each one.
            </p>
            <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "760px" }}>
              Phantom Pasting has run 500+ street campaigns for music labels, fashion brands, film releases, and startups across 50+ US cities. Every campaign ships with per-placement photo proof — timestamped, GPS-logged, and mapped.
            </p>
          </div>
        </section>

        {/* ── Why Phantom (proof points) ────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
              style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Why Phantom
            </span>
            <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]"
              style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}>
              STREET CAMPAIGNS<br /><ShinyGoldText>WITH RECEIPTS.</ShinyGoldText>
            </h2>
            <p className="font-light mb-10 m-0" style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px", maxWidth: "640px" }}>
              Guerrilla marketing has a trust problem: work happens overnight, on streets you don&apos;t walk, in cities you may never visit. Our answer is documentation-first delivery.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px"
              style={{ background: "rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.06)", borderRadius: "20px", overflow: "hidden" }}>
              {PROOF_POINTS.map((p) => (
                <div key={p.title} className="p-8 flex flex-col"
                  style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}>
                  <h3 className="font-black uppercase m-0 mb-3 leading-[0.88]"
                    style={{ fontSize: "clamp(15px, 1.5vw, 20px)", letterSpacing: "-0.02em" }}>
                    {p.title}<span style={{ color: ACCENT }}>.</span>
                  </h3>
                  <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.55)", fontSize: "13px" }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Formats ───────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
              style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              The Toolkit
            </span>
            <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]"
              style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}>
              SIX GUERRILLA <ShinyGoldText>FORMATS.</ShinyGoldText>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {FORMATS.map((f) => (
                <Link key={f.href} href={f.href} className="no-underline rounded-2xl p-7 flex flex-col"
                  style={{ background: "rgba(248,247,244,0.9)", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                  <div className="font-black uppercase leading-tight mb-3"
                    style={{ fontSize: "clamp(17px, 1.8vw, 22px)", letterSpacing: "-0.02em", color: "#1A1A1A" }}>
                    {f.name}<span style={{ color: ACCENT }}>.</span>
                  </div>
                  <p className="font-light leading-relaxed m-0 mb-4" style={{ color: "rgba(0,0,0,0.55)", fontSize: "13px" }}>{f.desc}</p>
                  <span className="mt-auto font-bold text-[10px] tracking-[0.22em] uppercase" style={{ color: ACCENT }}>
                    Explore →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing ───────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
              style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Transparent Pricing
            </span>
            <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]"
              style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}>
              WHAT GUERRILLA MARKETING<br /><ShinyGoldText>ACTUALLY COSTS.</ShinyGoldText>
            </h2>
            <p className="font-light leading-relaxed m-0 mb-8" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "760px" }}>
              Street campaigns are priced per city on placement volume and format mix — all-in, including print, install, and photo documentation. Anchored to $33–$55 per poster installed:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { tier: "Neighborhood Test", range: "$3,500–$6,500", detail: "1 neighborhood · 80–120 posters · single overnight install" },
                { tier: "Standard City Campaign", range: "$5,500–$13,500", detail: "4 neighborhoods · 150–250 posters · full photo report" },
                { tier: "Multi-Format Takeover", range: "$8,500–$22,000", detail: "Paste + stickers + stencils stacked in one city" },
                { tier: "National Rollout", range: "$45K–$90K", detail: "5–7 cities · 1,000+ posters · one unified timeline" },
              ].map((t) => (
                <div key={t.tier} className="rounded-2xl p-6"
                  style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.6)" }}>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.55)" }}>{t.tier}</div>
                  <div className="font-black uppercase leading-none mb-3"
                    style={{ fontSize: "clamp(18px, 2vw, 26px)", letterSpacing: "-0.03em", color: ACCENT }}>
                    {t.range}
                  </div>
                  <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.55)", fontSize: "12px" }}>{t.detail}</p>
                </div>
              ))}
            </div>
            <Link href="/pricing"
              className="inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-6 py-3 rounded-full"
              style={{ color: "#1A1A1A", background: "rgba(255,255,255,0.9)", border: "1px solid rgba(0,0,0,0.14)" }}>
              Full Pricing Breakdown <span className="cta-arrow">→</span>
            </Link>
          </div>
        </section>

        {/* ── Who Is This For ────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
              style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Ideal For
            </span>
            <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]"
              style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}>
              BUILT FOR BRANDS THAT LIVE <ShinyGoldText>ON THE STREET.</ShinyGoldText>
            </h2>
            <div className="flex flex-wrap gap-3">
              {["Album & Single Drops", "Fashion & Streetwear", "Film & TV Releases", "Product Launches", "Festivals & Events", "Restaurants & Retail", "Startups & Apps", "Gyms & Fitness", "Nonprofits & Causes"].map((item) => (
                <span key={item} className="font-black uppercase text-[12px] tracking-[0.04em] px-5 py-3 rounded-full"
                  style={{ background: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.6)", color: "rgba(0,0,0,0.65)" }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── TL;DR ────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <div className="rounded-2xl p-6" style={{ border: "2px solid rgba(212,160,16,0.3)", background: "rgba(212,160,16,0.04)" }}>
              <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px" }}>
                <strong style={{ color: ACCENT }}>TL;DR</strong> — Phantom Pasting is a guerrilla marketing agency: wheat pasting, chalk stencils, stickers, and flyering with in-house print + install across 50+ US cities. Single-city campaigns from $3,500, every placement geo-tagged and photo-documented. Call <a href={BUSINESS.telHref} style={{ color: ACCENT }}>{BUSINESS.telephoneDisplay}</a> to plan yours.
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
              style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Common Questions
            </span>
            <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]"
              style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}>
              GUERRILLA MARKETING <ShinyGoldText>FAQ.</ShinyGoldText>
            </h2>
            <div className="flex flex-col">
              {FAQS.map(({ q, a }) => (
                <div key={q} className="py-6" style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                  <h3 className="font-black uppercase m-0 mb-3" style={{ fontSize: "15px", letterSpacing: "-0.01em" }}>{q}</h3>
                  <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px" }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32 text-center">
          <div className="max-w-[700px] mx-auto">
            <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]"
              style={{ fontSize: "clamp(38px, 6vw, 80px)", letterSpacing: "-0.04em" }}>
              TAKE IT TO<br /><ShinyGoldText>THE STREET.</ShinyGoldText>
            </h2>
            <p className="font-light leading-relaxed mb-8 mx-auto"
              style={{ color: "rgba(0,0,0,0.5)", fontSize: "15px", maxWidth: "460px" }}>
              Tell us your city, your launch date, and your audience.
              We&apos;ll respond within 24 hours with a format mix and a number.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact"
                className="service-cta relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-10 py-5 rounded-full overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #F5CA20 100%)`, color: "#FFF",
                  boxShadow: `0 6px 32px rgba(212,160,16,0.55), 0 1px 0 rgba(255,255,255,0.25) inset` }}>
                <span className="absolute inset-0 pointer-events-none rounded-full"
                  style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 55%)" }} />
                Start My Campaign <span className="cta-arrow">→</span>
              </Link>
              <a href={BUSINESS.telHref}
                className="inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-8 py-5 rounded-full"
                style={{ color: "#1A1A1A", background: "rgba(255,255,255,0.9)", border: "1px solid rgba(0,0,0,0.14)" }}>
                Call {BUSINESS.telephoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
