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
  KW_SERVICE_STREET_FLYERING,
  KW_FLYERING,
  KW_STREET_MARKETING,
  KW_OOH,
  ORG_ADDITIONAL_TYPES,
} from "@/lib/keywordSets";

const PAGE_URL = `${BUSINESS.url}/services/street-flyering`;
const PAGE_OG = `${BUSINESS.url}/gallery/street-flyering-windshield-flyer-closeup-los-angeles.webp`;
const PAGE_TITLE = "Street Flyering & Windshield Flyers";
const PAGE_DESC =
  "Street flyering — windshield flyers on parked cars and hand-to-hand handbilling across high-traffic lots, venues, and corridors in 50+ US cities. 100% documented.";
const DATE_PUBLISHED = "2024-03-01";
const DATE_MODIFIED = "2026-06-01";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [...KW_SERVICE_STREET_FLYERING],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Street Flyering · Windshield Flyers & Handbilling | Phantom Pasting",
    description:
      "Windshield flyers on parked cars and hand-to-hand handbilling across high-traffic lots, venues, and corridors in 50+ US cities. Print, distribute, document.",
    url: PAGE_URL,
    type: "article",
    publishedTime: DATE_PUBLISHED,
    modifiedTime: DATE_MODIFIED,
    images: [
      {
        url: PAGE_OG,
        width: 1200,
        height: 630,
        alt: "Phantom Pasting windshield flyer on a parked car in Los Angeles",
      },
    ],
  },
};

/* ─── Content data ──────────────────────────────────────────────── */

const STEPS = [
  {
    num: "01",
    title: "STRATEGY",
    desc: "We map your campaign to the parking lots, venues, transit hubs, and foot-traffic corridors where your audience parks and walks — then set flyer counts, routes, and timing per city.",
    bullets: [
      "Lot, venue & corridor targeting",
      "KPIs: flyers placed, photo proofs, geo coverage",
    ],
  },
  {
    num: "02",
    title: "DESIGN & PRINT",
    desc: "Send print-ready artwork or work with our in-house team. We print durable flyers sized for both windshield placement and hand-to-hand distribution, with weather-resistant stock options.",
    bullets: [
      "Hand-out + windshield-ready sizing",
      "Weather-resistant stock available",
    ],
  },
  {
    num: "03",
    title: "ROUTE & ZONE PLAN",
    desc: "Local crews scope the highest-yield lots, event perimeters, and pedestrian corridors in your target neighborhoods, then map a distribution route before the team hits the street.",
    bullets: [
      "Permitted lots, venues & corridors",
      "Geo-tagged route map delivered pre-run",
    ],
  },
  {
    num: "04",
    title: "DISTRIBUTE",
    desc: "Street teams place flyers securely under windshield wipers on parked cars and hand them directly to pedestrians at high-dwell spots — clustered for saturation across your target zone.",
    bullets: [
      "Windshield placement under wipers",
      "Hand-to-hand handbilling on foot",
    ],
  },
  {
    num: "05",
    title: "DOCUMENT & REPORT",
    desc: "Every distribution run is photographed, timestamped, and geo-tagged. You receive a branded campaign report within 48 hours — ready to post, pitch, or repurpose.",
    bullets: [
      "100% photo proof per zone",
      "Branded report delivered within 48 hrs",
    ],
  },
];

const FAQS = [
  {
    q: "What is street flyering?",
    a: "Street flyering is a distribution-based advertising format where printed flyers are placed on parked-car windshields and handed directly to people across high-traffic lots, venues, and corridors. Phantom Pasting runs windshield flyer and hand-to-hand handbilling campaigns in 50+ US cities — print, distribute, and photo-documented.",
  },
  {
    q: "What's the difference between handbilling and windshield flyers?",
    a: "Handbilling is hand-to-hand distribution — a street team hands flyers directly to pedestrians at high-dwell spots. Windshield flyers are placed under the wipers of parked cars in lots and along streets. Most campaigns combine both: windshield placement for parked density, handbilling for direct foot-traffic reach.",
  },
  {
    q: "Is putting flyers on car windshields legal?",
    a: "It depends on the city and the property. Many jurisdictions allow windshield flyers on public streets but restrict private lots without owner permission, and some have anti-litter ordinances. Phantom Pasting works from permitted lots and public corridors, follows each city's distribution rules, and keeps your brand compliant — so the risk stays with us.",
  },
  {
    q: "How many flyers does a campaign cover, and what does it cost?",
    a: "Campaigns scale from a few hundred to several thousand flyers depending on city, zone density, and whether you run windshield-only, hand-to-hand, or both. Single-neighborhood runs start in the low four figures. Call (917) 400-4594 for a custom quote within 24 hours.",
  },
  {
    q: "How quickly can a flyering campaign go live?",
    a: "Standard lead time is about 1–2 weeks from approved artwork to first distribution run — covering strategy, print, route planning, and scheduling. Rush single-city runs are possible in under a week depending on capacity.",
  },
  {
    q: "How do I book a street flyering campaign?",
    a: "Call (917) 400-4594 or email info@phantompasting.com with your city, timeline, and goal. Our team responds within 24 hours with a custom distribution strategy, a mock route map, and a quote.",
  },
] as const;

const ACCENT = "#D4A010";

/* Real campaign proof — windshield + hand-to-hand flyering we've run. */
const SHOTS = [
  {
    src: "/gallery/street-flyering-windshield-flyer-closeup-los-angeles.webp",
    client: "Phantom Pasting",
    meta: "Windshield flyer · Los Angeles",
    alt: "Phantom Pasting flyer placed under a windshield wiper on a parked car in Los Angeles",
  },
  {
    src: "/gallery/street-flyering-windshield-flyer-parked-cars-los-angeles.webp",
    client: "Phantom Pasting",
    meta: "Street run · Los Angeles",
    alt: "Phantom Pasting windshield flyers on a row of parked cars along a Los Angeles street",
  },
  {
    src: "/gallery/street-flyering-windshield-flyer-tan-car-los-angeles.webp",
    client: "Phantom Pasting",
    meta: "Windshield flyer · Los Angeles",
    alt: "Phantom Pasting flyer under the wiper of a parked car in a Los Angeles lot",
  },
  {
    src: "/gallery/street-flyering-windshield-flyer-parking-lot-sunset-los-angeles.webp",
    client: "Phantom Pasting",
    meta: "Parking lot · Los Angeles",
    alt: "Phantom Pasting windshield flyer on a car in a Los Angeles parking lot at sunset",
  },
];

export default function StreetFlyeringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            serviceSchema({
              name: "Street Flyering",
              alternateName: [
                "Flyer Distribution",
                "Windshield Flyers",
                "Windshield Advertising",
                "Handbilling",
                "Hand-to-Hand Flyering",
                "Leafleting",
                "Flyer Drops",
                "Car Flyer Advertising",
                "Flyering Services",
                "Guerrilla Flyer Marketing",
              ],
              additionalType: ORG_ADDITIONAL_TYPES,
              description:
                "Street flyering — windshield flyers on parked cars and hand-to-hand handbilling — across high-traffic lots, venues, and corridors in 50+ US cities. Includes print, distribution, and photo documentation. Also marketed as flyer distribution, windshield advertising, and handbilling.",
              url: PAGE_URL,
              serviceType: "Street Flyering",
              category: "Advertising Distribution",
              image: PAGE_OG,
              slogan: "Flyers in every hand and on every windshield.",
              audienceType:
                "Brand Marketers, Marketing Agencies, Event Promoters, Local Businesses, Independent Artists",
              offerItems: [
                {
                  name: "Single-City Windshield Flyer Run",
                  description:
                    "Windshield flyer saturation across one US city's highest-yield lots and street corridors, placed under wipers with next-day daylight photo documentation. Standard run window 5–10 days from sign-off.",
                },
                {
                  name: "Windshield + Hand-to-Hand Campaign",
                  description:
                    "Combined windshield placement and hand-to-hand handbilling along targeted venues, events, and pedestrian corridors. Single brief, geo-tagged route map, unified campaign report.",
                },
                {
                  name: "Multi-City Flyer Distribution",
                  description:
                    "Coordinated flyering runs across 2–7 US cities on the same launch window. Single price sheet, single point of contact, single documentation package. Volume discount applied.",
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
              headline: "Street Flyering That Reaches Every Windshield",
              description: PAGE_DESC,
              url: PAGE_URL,
              image: PAGE_OG,
              datePublished: DATE_PUBLISHED,
              dateModified: DATE_MODIFIED,
              articleSection: "Services",
              articleBody: PAGE_DESC,
              keywords: [
                ...KW_FLYERING.slice(0, 10),
                ...KW_STREET_MARKETING.slice(0, 4),
                ...KW_OOH.slice(0, 4),
              ],
              audienceType: "Brand Marketers, Marketing Agencies, Event Promoters",
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
            { name: "Street Flyering", href: "/services/street-flyering" },
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
                  Street Flyering
                </span>
                <h1
                  className="font-black uppercase m-0 leading-[0.88]"
                  style={{ fontSize: "clamp(48px, 7vw, 100px)", letterSpacing: "-0.04em" }}
                >
                  FLYERS ON EVERY<br />
                  <ShinyGoldText>WINDSHIELD.</ShinyGoldText>
                </h1>
                <p
                  className="font-light leading-relaxed mt-8 mb-10"
                  style={{
                    fontSize: "clamp(17px, 1.6vw, 19px)",
                    color: "rgba(0,0,0,0.5)",
                    maxWidth: "480px",
                  }}
                >
                  Windshield flyers on parked cars and hand-to-hand handbilling across
                  high-traffic lots, venues, and corridors in 50+ US cities. We handle
                  everything — print, street team, distribution, and 100% photo documentation.
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
                  FLYERS
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
                      Next.js doesn't preload this hero to mobile users who never see it. */}
                  <Image
                    src="/gallery/street-flyering-windshield-flyer-closeup-los-angeles.webp"
                    alt="Phantom Pasting flyer placed under a windshield wiper on a parked car in Los Angeles"
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
                    src="/gallery/street-flyering-windshield-flyer-parked-cars-los-angeles.webp"
                    alt="Phantom Pasting windshield flyers on parked cars along a Los Angeles street"
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
                    style={{ fontSize: "20px", letterSpacing: "-0.04em", color: ACCENT }}
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
              <time dateTime={DATE_MODIFIED}>Last updated June 2026</time>
            </p>
          </div>
        </div>

        {/* ── What is street flyering (expanded) ─────────────────── */}
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
                WHAT IS<br /><ShinyGoldText>STREET FLYERING?</ShinyGoldText>
              </h2>
              <p
                className="font-light leading-relaxed m-0 mb-4"
                style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "520px" }}
              >
                Street flyering is direct, distribution-based advertising — printed flyers placed
                under the wipers of <strong>parked cars</strong> and handed{" "}
                <strong>hand-to-hand</strong> to pedestrians across the lots, venues, and
                corridors your audience moves through every day. It puts your message physically
                in someone&apos;s hand or on their windshield, where it can&apos;t be scrolled past.
              </p>
              <p
                className="font-light leading-relaxed m-0 mb-4"
                style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "520px" }}
              >
                Phantom Pasting runs both halves of the format: windshield distribution for parked
                density across shopping centers, event lots, and street parking, and handbilling
                for direct reach at high-foot-traffic spots. Crews work clustered routes for
                saturation — so a neighborhood feels covered, not sprinkled.
              </p>
              <p
                className="font-light leading-relaxed m-0 mb-6"
                style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "520px" }}
              >
                It&apos;s one of the fastest, most cost-efficient ways to drive a local push —
                ideal for events, grand openings, promotions, and product launches that need
                volume on a short timeline.
              </p>
              <ul
                className="list-none m-0 p-0 flex flex-col gap-2.5"
                style={{ maxWidth: "520px" }}
              >
                {[
                  "Direct — your flyer lands in a hand or on a windshield, not a feed",
                  "Two methods — windshield placement plus hand-to-hand handbilling",
                  "Fast & local — high volume on a short timeline for events and launches",
                  "Documented — every run photographed, timestamped, and geo-tagged",
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
                { label: "Methods", value: "Windshield + Hand-to-Hand" },
                { label: "Coverage", value: "50+ US Cities" },
                { label: "Turnaround", value: "5–14 Business Days" },
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
              FLYERS IN THE <ShinyGoldText>WILD.</ShinyGoldText>
            </h2>
            <p
              className="font-light mb-10 m-0"
              style={{ color: "rgba(0,0,0,0.5)", fontSize: "15px", maxWidth: "640px" }}
            >
              Real windshield and hand-to-hand flyering runs across Los Angeles. Every
              distribution run is photographed, timestamped, and geo-tagged so you see exactly
              what ran where.
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
              HOW DOES A FLYERING<br />CAMPAIGN <ShinyGoldText>WORK?</ShinyGoldText>
            </h2>
            <p
              className="font-light mb-10 m-0"
              style={{ color: "rgba(0,0,0,0.5)", fontSize: "15px", maxWidth: "640px" }}
            >
              Every street flyering campaign follows the same five-step process, from strategy
              intake through delivered photo report. Most campaigns run 5–14 business days
              depending on city count, flyer volume, and zone density.
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
                Flyering rules vary widely by city and by property. Here is how Phantom Pasting
                keeps your brand compliant so the distribution stays clean and the risk stays
                with us.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                {
                  h: "Permitted lots & public corridors",
                  p: "We distribute from lots where we hold owner permission and along public streets where windshield flyers and handbilling are allowed — never on restricted private property.",
                },
                {
                  h: "City-by-city ordinance awareness",
                  p: "Distribution and anti-litter rules differ in every municipality. Our crews work against an internal compliance checklist tuned to each target city's flyer and handbill ordinances.",
                },
                {
                  h: "Secure, clean placement",
                  p: "Flyers are tucked securely under wipers so they don't blow loose and become litter, and hand-to-hand distribution puts flyers directly with interested pedestrians.",
                },
                {
                  h: "Risk transfer to Phantom Pasting",
                  p: "Because print and distribution are handled by our crews on approved zones, compliance risk stays with us, not your brand — and every run is photo-documented as proof.",
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
              Pair street flyering with snipes and wheat pasting, or stack every format into a
              full multi-format campaign for total street saturation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { href: "/services/snipes", label: "SNIPES &<br />STICKERS" },
                { href: "/services/wheat-pasting", label: "WHEAT<br />PASTING" },
                { href: "/services/full-impact-campaigns", label: "FULL IMPACT<br />CAMPAIGNS" },
              ].map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
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
                      dangerouslySetInnerHTML={{ __html: s.label }}
                    />
                  </div>
                  <span style={{ color: ACCENT, fontSize: "24px" }}>→</span>
                </Link>
              ))}
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
              STREET FLYERING IN EVERY MAJOR US CITY<span style={{ color: ACCENT }}>.</span>
            </h2>
            <p
              className="font-light mb-8 m-0"
              style={{ color: "rgba(0,0,0,0.5)", fontSize: "14px", maxWidth: "640px" }}
            >
              Phantom Pasting maintains standing street teams in every major US metro. Below are
              the cities where we run the most campaigns — though we ship print and crew to 45+
              additional markets on request.
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
              STREET FLYERING <ShinyGoldText>FAQ.</ShinyGoldText>
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
                <strong style={{ color: ACCENT }}>TL;DR</strong> — Street flyering is direct
                distribution advertising: windshield flyers on parked cars plus hand-to-hand
                handbilling, across 50+ US cities. Print, street team, distribution, and 100%
                photo documentation are all included — the fastest way to drive a high-volume
                local push. Call{" "}
                <a href={BUSINESS.telHref} style={{ color: ACCENT }}>
                  {BUSINESS.telephoneDisplay}
                </a>{" "}
                or request a quote to launch a campaign in under two weeks.
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
