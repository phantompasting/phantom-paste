import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import ShinyGoldText from "@/components/ShinyGoldText";
import Breadcrumb from "@/components/Breadcrumb";
import SiteFooter from "@/components/SiteFooter";
import TrustBar from "@/components/TrustBar";
import { BUSINESS, LOCATIONS } from "@/lib/business";
import {
  serviceSchema,
  webPageSchema,
  articleSchema,
  faqPageSchema,
  jsonLd,
} from "@/lib/schema";
import {
  KW_SERVICE_SNIPES,
  KW_SNIPES,
  KW_STICKERS_WRAPS,
  KW_STREET_MARKETING,
  KW_OOH,
  ORG_ADDITIONAL_TYPES,
} from "@/lib/keywordSets";

const PAGE_URL = `${BUSINESS.url}/services/snipes`;
const PAGE_OG = `${BUSINESS.url}/gallery/street-pole-sticker-campaign-urban-advertising.webp`;
const PAGE_TITLE = "Snipes & Sticker Posting";
const PAGE_DESC =
  "Sticker posting and pole snipe campaigns — die-cut vinyl stickers and pole-mounted snipe signs placed across high-traffic corridors in 50+ US cities. 100% documented.";
const DATE_PUBLISHED = "2024-02-01";
const DATE_MODIFIED = "2026-05-31";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [...KW_SERVICE_SNIPES],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Snipes & Sticker Posting · Street Sticker Campaigns | Phantom Pasting",
    description:
      "Die-cut sticker campaigns and pole snipe signs placed across high-traffic urban corridors in 50+ US cities. Produce, install, document.",
    url: PAGE_URL,
    type: "article",
    publishedTime: DATE_PUBLISHED,
    modifiedTime: DATE_MODIFIED,
    images: [
      {
        url: PAGE_OG,
        width: 1200,
        height: 630,
        alt: "Street pole sticker campaign by Phantom Pasting",
      },
    ],
  },
};

/* ─── Content data ──────────────────────────────────────────────── */

const STEPS = [
  {
    num: "01",
    title: "STRATEGY",
    desc: "We map your campaign to the commuter corridors, intersections, transit zones, and pole runs that deliver the most repeat impressions per route — then plan sticker and snipe density city by city.",
    bullets: [
      "Route + corridor saturation plan",
      "KPIs: impressions, photo proofs, geo coverage",
    ],
  },
  {
    num: "02",
    title: "PRODUCE",
    desc: "Send print-ready artwork or work with our in-house team. We produce weatherproof die-cut vinyl and paper stickers plus rigid corrugated or poster snipe signs sized for pole and post mounting.",
    bullets: [
      "Weatherproof die-cut vinyl + paper stickers",
      "Corrugated / poster pole snipe signs",
    ],
  },
  {
    num: "03",
    title: "ROUTE SCOUT",
    desc: "Local crews identify high-dwell poles, doorways, fixtures, newspaper boxes, and post runs in the neighborhoods your audience actually moves through — and map them before a single sticker goes up.",
    bullets: [
      "Permitted poles, posts & fixtures",
      "Geo-tagged placement map delivered pre-install",
    ],
  },
  {
    num: "04",
    title: "DEPLOY",
    desc: "Crews place stickers at eye level on high-traffic surfaces and mount pole snipes with zip-ties or staples along your target corridors — clustered for saturation, not scattered.",
    bullets: [
      "Eye-level sticker placement",
      "Zip-tied / stapled pole snipe runs",
    ],
  },
  {
    num: "05",
    title: "DOCUMENT & REPORT",
    desc: "Every sticker cluster and snipe run is photographed, timestamped, and geo-tagged. You receive a branded campaign report within 48 hours — ready to post, pitch, or repurpose.",
    bullets: [
      "100% photo proof per location",
      "Branded report delivered within 48 hrs",
    ],
  },
];

const FAQS = [
  {
    q: "What are snipes and sticker posting?",
    a: "Snipes and sticker posting are street advertising formats where branded stickers and small pole-mounted signs are placed at scale across high-traffic urban surfaces — utility poles, posts, doorways, fixtures, and transit zones. Phantom Pasting runs sticker and snipe campaigns across 50+ US cities, fully produced, installed, and photo-documented.",
  },
  {
    q: "What's the difference between stickers and pole snipes?",
    a: "Stickers are die-cut vinyl or paper decals adhered to flat surfaces at eye level for dense, repeat-impression saturation. Pole snipes are rigid corrugated or poster signs zip-tied or stapled to utility poles, posts, and stakes — bigger, more visible at distance, and ideal for commuter corridors. Most campaigns stack both for compounding street presence.",
  },
  {
    q: "How long do snipes and stickers stay up?",
    a: "Weatherproof vinyl stickers typically hold for several weeks to a few months depending on surface and location. Pole snipes last as long as they stay mounted — often weeks in protected corridors, shorter on heavily-maintained municipal poles. We document every placement on install so you have proof regardless of lifespan.",
  },
  {
    q: "Is sticker posting and sniping legal?",
    a: "Yes, when placed on permitted surfaces and with property-owner or corridor agreements. Phantom Pasting works from sourced permitted poles, posts, and fixtures and operates against a city-by-city signage-code checklist, so your brand never appears on an unauthorized surface and compliance risk stays with us.",
  },
  {
    q: "How much does a snipe or sticker campaign cost?",
    a: "Cost scales with sticker quantity, snipe count, city, and corridor density. Single-neighborhood sticker runs start in the low four figures; multi-city sticker-plus-snipe campaigns run higher. Call (917) 400-4594 for a custom quote within 24 hours.",
  },
  {
    q: "How do I book a snipe or sticker campaign?",
    a: "Call (917) 400-4594 or email info@phantompasting.com with your city, timeline, and campaign goal. Our team responds within 24 hours with a custom route strategy, a mock placement map, and a quote.",
  },
] as const;

const ACCENT = "#D4A010";

/* Real campaign proof — sticker + pole-snipe placements we've run.
   Biodance leads (latest campaign). The Incrediwear shots and the Calvin
   sticker-strip live on the main /gallery page, so they're not repeated here. */
const SHOTS = [
  {
    src: "/gallery/biodance-hydrogel-splash-sticker-graffiti-wall-los-angeles.webp",
    client: "Biodance",
    meta: "Sticker · Los Angeles",
    alt: "Biodance Hydrogel Splash sticker on a purple graffiti wall in Los Angeles",
  },
  {
    src: "/gallery/biodance-hydrogel-splash-sticker-pole-night-pharmacy-los-angeles.webp",
    client: "Biodance",
    meta: "Pole snipe · Los Angeles",
    alt: "Biodance Hydrogel Splash sticker on a pole at night outside a Los Angeles pharmacy",
  },
  {
    src: "/gallery/calvin-priice-sticker-pole-install-gas-station-los-angeles.webp",
    client: "Calvin Priice",
    meta: "Pole install · Los Angeles",
    alt: "Phantom Pasting crew installing a Calvin Priice QR sticker on a pole at a Los Angeles gas station",
  },
  {
    src: "/gallery/incrediwear-qr-sticker-pole-night-intersection.webp",
    client: "Incrediwear",
    meta: "Pole snipe · Night",
    alt: "Incrediwear QR sticker on a pole at a night street intersection",
  },
];

export default function SnipesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            serviceSchema({
              name: "Snipes & Sticker Posting",
              // Array of synonym terms — Google reads each as an alternate
              // service name and surfaces this page for queries using any of
              // them. Centralized vocabulary in lib/keywordSets.ts.
              alternateName: [
                "Sticker Posting",
                "Sticker Campaigns",
                "Snipe Posting",
                "Snipe Posters",
                "Pole Snipes",
                "Sticker Bombing",
                "Pole Sign Advertising",
                "Lamppost Advertising",
                "Vinyl Sticker Advertising",
                "Guerrilla Sticker Marketing",
              ],
              additionalType: ORG_ADDITIONAL_TYPES,
              description:
                "Die-cut sticker and pole snipe advertising placed across high-traffic urban corridors in 50+ US cities. Includes production, installation, and photo documentation. Also marketed as sticker posting, sticker campaigns, snipe posters, and pole sign advertising.",
              url: PAGE_URL,
              serviceType: "Snipes & Sticker Posting",
              category: "Outdoor Advertising",
              image: PAGE_OG,
              slogan: "Stickers and snipes that own the corridor.",
              audienceType:
                "Brand Marketers, Marketing Agencies, Music Labels, Streetwear Brands, Independent Artists",
              offerItems: [
                {
                  name: "Single-City Sticker Run",
                  description:
                    "Dense sticker saturation across one US city's highest-dwell corridors — eye-level placement on permitted poles, fixtures, and surfaces, with next-morning daylight photo documentation. Standard install window 7–10 days from sign-off.",
                },
                {
                  name: "Sticker + Pole Snipe Corridor Campaign",
                  description:
                    "Stacked sticker clusters and pole-mounted snipe signs along targeted commuter corridors and intersections for compounding repeat impressions. Single brief, geo-tagged placement map, unified campaign report.",
                },
                {
                  name: "Multi-City Snipe Rollout",
                  description:
                    "Coordinated sticker and snipe installs across 2–7 US cities on the same launch window. Single price sheet, single point of contact, single unified documentation package. Volume discount applied.",
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
              headline: "Snipes & Sticker Posting That Own the Corridor",
              description: PAGE_DESC,
              url: PAGE_URL,
              image: PAGE_OG,
              datePublished: DATE_PUBLISHED,
              dateModified: DATE_MODIFIED,
              articleSection: "Services",
              articleBody: PAGE_DESC,
              keywords: [
                ...KW_SNIPES.slice(0, 8),
                ...KW_STICKERS_WRAPS.slice(0, 4),
                ...KW_STREET_MARKETING.slice(0, 4),
                ...KW_OOH.slice(0, 4),
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
      <div
        style={{
          background: "transparent",
          minHeight: "100dvh",
          color: "#1A1A1A",
          position: "relative",
          zIndex: 1,
        }}
      >
        <SiteNav />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Snipes & Sticker Posting", href: "/services/snipes" },
          ]}
        />

        <TrustBar />

        {/* ── Hero (split-screen) ───────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] lg:min-h-[660px] items-center">

              {/* LEFT — text + stats */}
              <div className="relative z-10 flex flex-col justify-center py-6 md:py-10 lg:py-14 lg:pr-16">
                <span
                  className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase mb-6"
                  style={{ color: "rgba(0,0,0,0.55)" }}
                >
                  <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                  Snipes &amp; Sticker Posting
                </span>
                <h1
                  className="font-black uppercase m-0 leading-[0.88]"
                  style={{ fontSize: "clamp(48px, 7vw, 100px)", letterSpacing: "-0.04em" }}
                >
                  STICKERS &amp; SNIPES<br />
                  <ShinyGoldText>THAT OWN THE STREET.</ShinyGoldText>
                </h1>
                <p
                  className="font-light leading-relaxed mt-8 mb-10"
                  style={{
                    fontSize: "clamp(17px, 1.6vw, 19px)",
                    color: "rgba(0,0,0,0.5)",
                    maxWidth: "480px",
                  }}
                >
                  Die-cut sticker campaigns and pole-mounted snipe signs placed across
                  high-traffic corridors in 50+ US cities. We handle everything — production,
                  crew, install, and 100% photo documentation.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="hero-cta-primary relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-8 py-4 rounded-full overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)",
                      color: "#FFF",
                      boxShadow:
                        "0 4px 28px rgba(0,0,0,0.42), 0 1px 0 rgba(255,255,255,0.08) inset",
                    }}
                  >
                    <span
                      className="absolute inset-0 pointer-events-none rounded-full"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(196,162,18,0.28) 0%, transparent 48%)",
                      }}
                    />
                    Get a Quote <span className="cta-arrow" style={{ color: ACCENT }}>→</span>
                  </Link>
                  <a
                    href={BUSINESS.telHref}
                    className="hero-cta-secondary inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.18em] uppercase no-underline px-6 py-4 rounded-full"
                    style={{
                      color: "rgba(0,0,0,0.82)",
                      background: "rgba(255,255,255,0.9)",
                      border: "1px solid rgba(0,0,0,0.14)",
                      boxShadow:
                        "0 2px 12px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)",
                    }}
                  >
                    Call {BUSINESS.telephoneDisplay}
                  </a>
                </div>

                {/* Stats row */}
                <div
                  className="flex flex-wrap gap-10 md:gap-16 mt-12 pt-10"
                  style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
                >
                  {[
                    { stat: "500+", label: "Campaigns" },
                    { stat: "50+", label: "US Cities" },
                    { stat: "100%", label: "Photo Documented" },
                  ].map(({ stat, label }) => (
                    <div key={label}>
                      <div
                        className="font-black uppercase leading-none"
                        style={{
                          fontSize: "clamp(28px, 3.5vw, 48px)",
                          letterSpacing: "-0.04em",
                          color: ACCENT,
                        }}
                      >
                        {stat}
                      </div>
                      <div
                        className="font-mono text-[9px] tracking-[0.3em] uppercase mt-1.5"
                        style={{ color: "rgba(0,0,0,0.55)" }}
                      >
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — image composition */}
              <div className="relative hidden lg:block h-[660px] overflow-hidden">
                <span
                  aria-hidden
                  className="absolute right-0 top-1/2 font-black uppercase pointer-events-none select-none"
                  style={{
                    fontSize: "clamp(80px, 12vw, 180px)",
                    letterSpacing: "-0.06em",
                    color: "rgba(212,160,16,0.05)",
                    lineHeight: 1,
                    writingMode: "vertical-rl",
                    transform: "translateY(-50%) rotate(180deg)",
                  }}
                >
                  SNIPES
                </span>

                <div
                  className="absolute top-10 right-0 rounded-2xl overflow-hidden"
                  style={{
                    width: "82%",
                    height: "80%",
                    transform: "rotate(1.8deg)",
                    boxShadow:
                      "0 24px 64px rgba(0,0,0,0.20), 0 4px 14px rgba(0,0,0,0.10)",
                  }}
                >
                  {/* Hidden on mobile (hidden lg:block wrapper). Lazy-loaded so
                      Next.js doesn't preload this hero to mobile users who never
                      see it. */}
                  <Image
                    src="/gallery/calvin-priice-sticker-pole-install-gas-station-los-angeles.webp"
                    alt="Phantom Pasting crew installing a Calvin Priice QR sticker on a pole at a Los Angeles gas station"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 1024px) 0vw, 40vw"
                    loading="lazy"
                  />
                </div>

                <div
                  className="absolute bottom-10 left-2 rounded-xl overflow-hidden"
                  style={{
                    width: "50%",
                    height: "48%",
                    transform: "rotate(-2.2deg)",
                    boxShadow:
                      "0 16px 48px rgba(0,0,0,0.26), 0 3px 10px rgba(0,0,0,0.12)",
                  }}
                >
                  <Image
                    src="/gallery/biodance-hydrogel-splash-sticker-pole-night-pharmacy-los-angeles.webp"
                    alt="Biodance Hydrogel Splash sticker on a pole at night outside a Los Angeles pharmacy"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="25vw"
                  />
                </div>

                <div
                  aria-hidden
                  className="absolute pointer-events-none"
                  style={{
                    top: "30%",
                    left: "32%",
                    width: "1px",
                    height: "28%",
                    background:
                      "linear-gradient(to bottom, transparent, rgba(212,160,16,0.5), transparent)",
                    transform: "rotate(18deg)",
                  }}
                />

                <div
                  className="absolute top-6 left-4 rounded-xl px-4 py-3"
                  style={{
                    background: "rgba(255,254,248,0.92)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.75)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.09)",
                  }}
                >
                  <div
                    className="font-black uppercase leading-none"
                    style={{
                      fontSize: "20px",
                      letterSpacing: "-0.04em",
                      color: ACCENT,
                    }}
                  >
                    50+
                  </div>
                  <div
                    className="font-mono text-[8px] tracking-[0.3em] uppercase mt-1"
                    style={{ color: "rgba(0,0,0,0.55)" }}
                  >
                    US Cities
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Byline ──────────────────────────────────────────────── */}
        <div className="px-5 sm:px-8 md:px-12 lg:px-16 pb-6">
          <div className="max-w-[1200px] mx-auto">
            <p
              className="font-mono text-[9px] tracking-[0.25em] uppercase m-0"
              style={{ color: "rgba(0,0,0,0.55)" }}
            >
              By <span style={{ color: "rgba(0,0,0,0.58)" }}>Phantom Pasting</span>
              &nbsp;·&nbsp;
              <time dateTime={DATE_MODIFIED}>Last updated May 2026</time>
            </p>
          </div>
        </div>

        {/* ── What are snipes (expanded) ────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
            <div>
              <span
                className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
                style={{ color: "rgba(0,0,0,0.55)" }}
              >
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                What It Is
              </span>
              <h2
                className="font-black uppercase m-0 mb-6 leading-[0.9]"
                style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}
              >
                WHAT ARE<br /><ShinyGoldText>SNIPES?</ShinyGoldText>
              </h2>
              <p
                className="font-light leading-relaxed m-0 mb-4"
                style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "520px" }}
              >
                Snipes are the street-saturation side of guerrilla marketing — branded{" "}
                <strong>stickers</strong> and small{" "}
                <strong>pole-mounted snipe signs</strong> placed at scale across the surfaces
                your audience passes every day. Stickers handle dense, eye-level repetition;
                pole snipes carry the message at distance along commuter corridors. Together
                they turn a single route into a wall of brand impressions.
              </p>
              <p
                className="font-light leading-relaxed m-0 mb-4"
                style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "520px" }}
              >
                Phantom Pasting produces weatherproof die-cut vinyl and paper stickers alongside
                rigid corrugated or poster snipe signs cut for pole and post mounting. Crews
                cluster placements for saturation — not scatter — so a neighborhood reads as a
                deliberate takeover rather than stray decals.
              </p>
              <p
                className="font-light leading-relaxed m-0 mb-6"
                style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "520px" }}
              >
                Like every Phantom Pasting format, snipes live where digital ads can&apos;t — on
                the commute, outside the venue, at the intersection. And because they&apos;re
                small and repeatable, they&apos;re the most cost-efficient way to build frequency
                in a target corridor.
              </p>
              <ul
                className="list-none m-0 p-0 flex flex-col gap-2.5"
                style={{ maxWidth: "520px" }}
              >
                {[
                  "High-frequency — dense clusters build repeat impressions on every pass",
                  "Two formats — eye-level stickers plus distance-readable pole snipes",
                  "Cost-efficient — the lowest cost-per-impression format we run",
                  "Documented — every cluster and snipe run photographed, timestamped, geo-tagged",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-light"
                    style={{ color: "rgba(0,0,0,0.6)", fontSize: "14px" }}
                  >
                    <span
                      className="shrink-0 mt-1 w-1 h-1 rounded-full"
                      style={{ background: ACCENT }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Formats", value: "Stickers + Pole Snipes" },
                { label: "Coverage", value: "50+ US Cities" },
                { label: "Turnaround", value: "5–21 Business Days" },
                { label: "Documentation", value: "100% Photo Proof" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.35)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.6)",
                  }}
                >
                  <div
                    className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2"
                    style={{ color: "rgba(0,0,0,0.55)" }}
                  >
                    {label}
                  </div>
                  <div
                    className="font-black uppercase leading-tight"
                    style={{
                      fontSize: "clamp(14px, 1.5vw, 18px)",
                      color: "#1A1A1A",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── In the wild (real campaign proof) ─────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span
              className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
              style={{ color: "rgba(0,0,0,0.55)" }}
            >
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Recent Work
            </span>
            <h2
              className="font-black uppercase m-0 mb-6 leading-[0.9]"
              style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}
            >
              SNIPES IN THE <ShinyGoldText>WILD.</ShinyGoldText>
            </h2>
            <p
              className="font-light mb-10 m-0"
              style={{ color: "rgba(0,0,0,0.5)", fontSize: "15px", maxWidth: "640px" }}
            >
              Real sticker and pole-snipe placements from recent campaigns — Calvin Priice,
              Incrediwear, and Biodance. Every placement is photographed, timestamped, and
              geo-tagged so you see exactly what ran where.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {SHOTS.map((shot) => (
                <div
                  key={shot.src}
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    aspectRatio: "3 / 4",
                    border: "1px solid rgba(255,255,255,0.6)",
                    boxShadow: "0 8px 28px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)",
                  }}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 p-3 md:p-4"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.32) 55%, transparent 100%)",
                    }}
                  >
                    <div
                      className="font-black uppercase leading-none"
                      style={{ fontSize: "13px", letterSpacing: "-0.01em", color: "#FFF" }}
                    >
                      {shot.client}
                    </div>
                    <div
                      className="font-mono text-[8px] tracking-[0.2em] uppercase mt-1"
                      style={{ color: "rgba(255,255,255,0.82)" }}
                    >
                      {shot.meta}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 font-bold text-[11px] tracking-[0.2em] uppercase no-underline"
                style={{ color: ACCENT }}
              >
                See the full gallery <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── How it works (5 steps) ────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span
              className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
              style={{ color: "rgba(0,0,0,0.55)" }}
            >
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              The Process
            </span>
            <h2
              className="font-black uppercase m-0 mb-6 leading-[0.9]"
              style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}
            >
              HOW DOES A SNIPE<br />CAMPAIGN <ShinyGoldText>WORK?</ShinyGoldText>
            </h2>
            <p
              className="font-light mb-10 m-0"
              style={{ color: "rgba(0,0,0,0.5)", fontSize: "15px", maxWidth: "640px" }}
            >
              Every snipe and sticker campaign follows the same five-step process, from strategy
              intake through delivered photo report. Most campaigns run 5–21 business days
              depending on city count, sticker volume, and corridor density.
            </p>
            <ol
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px list-none m-0 p-0"
              style={{
                background: "rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.06)",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              {STEPS.map((step) => (
                <li
                  key={step.num}
                  className="p-7 md:p-8 flex flex-col"
                  style={{
                    background: "rgba(255,255,255,0.35)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                  }}
                >
                  <div
                    className="font-mono text-[10px] tracking-[0.35em] uppercase mb-4"
                    style={{ color: ACCENT }}
                  >
                    {step.num}
                  </div>
                  <h3
                    className="font-black uppercase m-0 mb-3 leading-[0.88]"
                    style={{ fontSize: "clamp(16px, 1.6vw, 22px)", letterSpacing: "-0.02em" }}
                  >
                    {step.title}
                    <span style={{ color: ACCENT }}>.</span>
                  </h3>
                  <p
                    className="font-light leading-relaxed mb-4"
                    style={{ color: "rgba(0,0,0,0.55)", fontSize: "13px" }}
                  >
                    {step.desc}
                  </p>
                  <ul className="list-none m-0 p-0 flex flex-col gap-2 mt-auto">
                    {step.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 font-mono text-[9px] tracking-[0.08em] uppercase"
                        style={{ color: "rgba(0,0,0,0.55)" }}
                      >
                        <span
                          className="shrink-0 mt-1 w-1 h-1 rounded-full"
                          style={{ background: ACCENT }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Legal considerations ─────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 items-start">
            <div>
              <span
                className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
                style={{ color: "rgba(0,0,0,0.55)" }}
              >
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                Trust &amp; Compliance
              </span>
              <h2
                className="font-black uppercase m-0 mb-6 leading-[0.9]"
                style={{ fontSize: "clamp(28px, 3.8vw, 48px)", letterSpacing: "-0.035em" }}
              >
                LEGAL<br /><ShinyGoldText>CONSIDERATIONS.</ShinyGoldText>
              </h2>
              <p
                className="font-light leading-relaxed m-0"
                style={{ color: "rgba(0,0,0,0.55)", fontSize: "14px" }}
              >
                Sniping and sticker posting carry the same first question as every street format:
                is it legal? The answer is yes — on permitted surfaces. Here is how Phantom
                Pasting keeps your brand on the right side of city code.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                {
                  h: "Permitted surfaces only",
                  p: "Stickers and snipes go on poles, posts, fixtures, and corridors where we hold owner agreements or legal placement rights. Your brand logo never lands on an unauthorized surface.",
                },
                {
                  h: "City-by-city ordinance awareness",
                  p: "Sticker and pole-sign rules vary by municipality. Our crews work against an internal compliance checklist tuned to each target city's signage code, fines, and removal requirements.",
                },
                {
                  h: "Clean, removable placement",
                  p: "We place for clean removal — no damage to permitted surfaces. Pole snipes are zip-tied or stapled for safe takedown, and we can run a removal pass at campaign end on request.",
                },
                {
                  h: "Risk transfer to Phantom Pasting",
                  p: "Because production and install are handled by our crews on approved surfaces, compliance risk stays with us, not your brand — and every placement is photo-documented as proof.",
                },
              ].map(({ h, p }) => (
                <div
                  key={h}
                  className="rounded-2xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.5)",
                    border: "1px solid rgba(0,0,0,0.06)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                  }}
                >
                  <div
                    className="font-black uppercase m-0 mb-2"
                    style={{ fontSize: "13px", letterSpacing: "0.02em" }}
                  >
                    {h}
                  </div>
                  <p
                    className="font-light m-0 leading-relaxed"
                    style={{ color: "rgba(0,0,0,0.55)", fontSize: "13px" }}
                  >
                    {p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── More Services ─────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20">
          <div className="max-w-[1200px] mx-auto">
            <h2
              className="font-black uppercase m-0 mb-4 leading-[0.9]"
              style={{ fontSize: "clamp(20px, 2.5vw, 32px)", letterSpacing: "-0.025em" }}
            >
              WHAT OTHER GUERRILLA FORMATS <ShinyGoldText>DO YOU OFFER?</ShinyGoldText>
            </h2>
            <p
              className="font-light mb-8 m-0"
              style={{ color: "rgba(0,0,0,0.58)", fontSize: "14px" }}
            >
              Pair snipes with large-format wheat pasting or stack every format into a full
              multi-format campaign for total street saturation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                href="/services/wheat-pasting"
                className="no-underline rounded-2xl p-7 flex items-center justify-between"
                style={{
                  background: "rgba(248,247,244,0.9)",
                  border: "1px solid rgba(0,0,0,0.07)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <div>
                  <div
                    className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2"
                    style={{ color: "rgba(0,0,0,0.55)" }}
                  >
                    Service
                  </div>
                  <div
                    className="font-black uppercase leading-tight"
                    style={{
                      fontSize: "clamp(17px, 1.8vw, 22px)",
                      letterSpacing: "-0.02em",
                      color: "#1A1A1A",
                    }}
                  >
                    WHEAT<br />PASTING
                  </div>
                </div>
                <span style={{ color: ACCENT, fontSize: "24px" }}>→</span>
              </Link>
              <Link
                href="/services/chalk-spray-stencils"
                className="no-underline rounded-2xl p-7 flex items-center justify-between"
                style={{
                  background: "rgba(248,247,244,0.9)",
                  border: "1px solid rgba(0,0,0,0.07)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <div>
                  <div
                    className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2"
                    style={{ color: "rgba(0,0,0,0.55)" }}
                  >
                    Service
                  </div>
                  <div
                    className="font-black uppercase leading-tight"
                    style={{
                      fontSize: "clamp(17px, 1.8vw, 22px)",
                      letterSpacing: "-0.02em",
                      color: "#1A1A1A",
                    }}
                  >
                    CHALK SPRAY<br />STENCILS
                  </div>
                </div>
                <span style={{ color: ACCENT, fontSize: "24px" }}>→</span>
              </Link>
              <Link
                href="/services/full-impact-campaigns"
                className="no-underline rounded-2xl p-7 flex items-center justify-between"
                style={{
                  background: "rgba(248,247,244,0.9)",
                  border: "1px solid rgba(0,0,0,0.07)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <div>
                  <div
                    className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2"
                    style={{ color: "rgba(0,0,0,0.55)" }}
                  >
                    Service
                  </div>
                  <div
                    className="font-black uppercase leading-tight"
                    style={{
                      fontSize: "clamp(17px, 1.8vw, 22px)",
                      letterSpacing: "-0.02em",
                      color: "#1A1A1A",
                    }}
                  >
                    FULL IMPACT<br />CAMPAIGNS
                  </div>
                </div>
                <span style={{ color: ACCENT, fontSize: "24px" }}>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Markets we serve ──────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20">
          <div className="max-w-[1200px] mx-auto">
            <span
              className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
              style={{ color: "rgba(0,0,0,0.55)" }}
            >
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Markets We Serve
            </span>
            <h2
              className="font-black uppercase m-0 mb-4 leading-[0.9]"
              style={{ fontSize: "clamp(20px, 2.5vw, 32px)", letterSpacing: "-0.025em" }}
            >
              SNIPES &amp; STICKER POSTING IN EVERY MAJOR US CITY<span style={{ color: ACCENT }}>.</span>
            </h2>
            <p
              className="font-light mb-8 m-0"
              style={{ color: "rgba(0,0,0,0.5)", fontSize: "14px", maxWidth: "640px" }}
            >
              Phantom Pasting maintains standing install crews in every major US metro. Below are
              the cities where we run the most campaigns — though we ship production and crew to
              45+ additional markets on request.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {LOCATIONS.map(({ name, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-xl p-4 no-underline flex items-center justify-between"
                  style={{
                    background: "rgba(255,255,255,0.5)",
                    border: "1px solid rgba(0,0,0,0.06)",
                    color: "rgba(0,0,0,0.72)",
                  }}
                >
                  <span
                    className="font-black uppercase"
                    style={{ fontSize: "15px", letterSpacing: "-0.01em" }}
                  >
                    {name}
                  </span>
                  <span style={{ color: ACCENT }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span
              className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
              style={{ color: "rgba(0,0,0,0.55)" }}
            >
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Common Questions
            </span>
            <h2
              className="font-black uppercase m-0 mb-8 leading-[0.9]"
              style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}
            >
              SNIPES <ShinyGoldText>FAQ.</ShinyGoldText>
            </h2>
            <div className="flex flex-col">
              {FAQS.map(({ q, a }) => (
                <div
                  key={q}
                  className="py-6"
                  style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
                >
                  <h3
                    className="font-black uppercase m-0 mb-3"
                    style={{ fontSize: "15px", letterSpacing: "-0.01em" }}
                  >
                    {q}
                  </h3>
                  <p
                    className="font-light leading-relaxed m-0"
                    style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px" }}
                  >
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TL;DR ─────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <div
              className="rounded-2xl p-6"
              style={{
                border: "2px solid rgba(212,160,16,0.3)",
                background: "rgba(212,160,16,0.04)",
              }}
            >
              <p
                className="font-light leading-relaxed m-0"
                style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px" }}
              >
                <strong style={{ color: ACCENT }}>TL;DR</strong> — Snipes are street-level
                sticker and pole-sign campaigns installed on permitted surfaces in 50+ US cities.
                Production, crew, install, and 100% photo documentation are all included — the
                most cost-efficient way to build frequency in a target corridor. Call{" "}
                <a href={BUSINESS.telHref} style={{ color: ACCENT }}>
                  {BUSINESS.telephoneDisplay}
                </a>{" "}
                or request a quote to launch a campaign in under three weeks.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32 text-center">
          <div className="max-w-[700px] mx-auto">
            <h2
              className="font-black uppercase m-0 mb-6 leading-[0.9]"
              style={{ fontSize: "clamp(38px, 6vw, 80px)", letterSpacing: "-0.04em" }}
            >
              LET&apos;S BUILD<br /><ShinyGoldText>YOUR CAMPAIGN.</ShinyGoldText>
            </h2>
            <p
              className="font-light leading-relaxed mb-8 mx-auto"
              style={{ color: "rgba(0,0,0,0.5)", fontSize: "15px", maxWidth: "460px" }}
            >
              Tell us your city, your timeline, and your vision. We&apos;ll respond within 24
              hours with a custom street strategy.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="service-cta relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-10 py-5 rounded-full overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${ACCENT} 0%, #F5CA20 100%)`,
                  color: "#FFF",
                  boxShadow: `0 6px 32px rgba(212,160,16,0.55), 0 1px 0 rgba(255,255,255,0.25) inset`,
                }}
              >
                <span
                  className="absolute inset-0 pointer-events-none rounded-full"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 55%)",
                  }}
                />
                Launch My Campaign <span className="cta-arrow">→</span>
              </Link>
              <a
                href={BUSINESS.telHref}
                className="inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-8 py-5 rounded-full"
                style={{
                  color: "#1A1A1A",
                  background: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(0,0,0,0.14)",
                }}
              >
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
