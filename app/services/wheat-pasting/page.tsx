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
  breadcrumbSchema,
  jsonLd,
} from "@/lib/schema";

const PAGE_URL = `${BUSINESS.url}/services/wheat-pasting`;
const PAGE_OG = `${BUSINESS.url}/gallery/fashionpass-wheat-paste-campaign-poster-wall.webp`;
const PAGE_TITLE = "Wheat Pasting Services";
const PAGE_DESC =
  "Large-format wheat paste poster advertising on prime urban walls across 50+ US cities. We handle print, install, and 100% photo documentation. Get a quote.";
const DATE_PUBLISHED = "2024-01-15";
const DATE_MODIFIED = "2026-04-01";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "wheat pasting service",
    "wheat paste advertising",
    "wheat paste posters",
    "street postering",
    "large format street advertising",
    "guerrilla marketing posters",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Wheat Pasting Services | Large Format Street Posters | Phantom Pasting",
    description:
      "Large-format wheat paste poster advertising on prime urban walls across 50+ US cities. Print, install, document.",
    url: PAGE_URL,
    type: "article",
    publishedTime: DATE_PUBLISHED,
    modifiedTime: DATE_MODIFIED,
    images: [
      {
        url: PAGE_OG,
        width: 1200,
        height: 630,
        alt: "Wheat paste poster wall campaign by Phantom Pasting",
      },
    ],
  },
};

/* ─── Content data ──────────────────────────────────────────────── */

const STEPS = [
  {
    num: "01",
    title: "STRATEGY",
    desc: "We map your campaign goals to the cities, neighborhoods, and surface types that will earn the most photos, foot traffic, and word-of-mouth lift.",
    bullets: [
      "Audience + city fit workshop",
      "KPIs: impressions, photo proofs, geo coverage",
    ],
  },
  {
    num: "02",
    title: "DESIGN & PRINT",
    desc: "Send print-ready artwork or work with our in-house team. We print on 28# bond or 80# coated stock in sizes from 24×36 up to 48×72 jumbo wall takeovers.",
    bullets: [
      "28# bond or 80# coated stock",
      "Sizes 24×36 → 48×72 (rush 48 hr available)",
    ],
  },
  {
    num: "03",
    title: "LOCATION SCOUT",
    desc: "Local crews identify permitted walls, construction hoardings, and high-dwell corridors in the neighborhoods your audience actually moves through.",
    bullets: [
      "Permitted walls + construction plywood",
      "Geo-tagged placement map delivered pre-install",
    ],
  },
  {
    num: "04",
    title: "OVERNIGHT INSTALL",
    desc: "Crews paste overnight when sidewalks are empty and lighting is cinematic — each poster hung flat, brushed smooth, and sealed against weather.",
    bullets: [
      "Overnight crews in every target market",
      "Edge-sealed paste for weeks of durability",
    ],
  },
  {
    num: "05",
    title: "DOCUMENT & REPORT",
    desc: "Every poster is photographed, timestamped, and geo-tagged. You receive a branded campaign report within 48 hours — ready to post, pitch, or repurpose.",
    bullets: [
      "100% photo proof per location",
      "Branded report delivered within 48 hrs",
    ],
  },
];

const FAQS = [
  {
    q: "What is wheat pasting?",
    a: "Wheat pasting is a street advertising format where large printed posters are adhered to urban walls, plywood, and hoardings using a wheat-starch paste. Phantom Pasting produces wheat paste campaigns across 50+ US cities — print, install, and photo-documented.",
  },
  {
    q: "How long do wheat paste posters last?",
    a: "Wheat paste posters typically last 2–8 weeks depending on weather, surface type, and location. Covered walls and protected corridors can hold posters significantly longer; exposed walls in heavy-rain markets trend shorter.",
  },
  {
    q: "Is wheat pasting legal?",
    a: "Yes, when installed on permitted walls and with property-owner agreements. Phantom Pasting only installs on sourced permitted surfaces — construction hoardings, owner-approved walls, and legal poster campaign corridors — so every campaign is covered and photo-documented.",
  },
  {
    q: "How much does a wheat pasting campaign cost?",
    a: "Campaign cost scales with poster count, city, and print specs. Small neighborhood activations start in the low four figures; multi-city launches with 48×72 jumbos run higher. Call (917) 400-4594 for a custom quote within 24 hours.",
  },
  {
    q: "What cities do you cover?",
    a: "We run wheat paste campaigns in 50+ US cities including New York, Los Angeles, Miami, Chicago, Atlanta, Austin, Nashville, Seattle, Portland, Boston, Philadelphia, San Francisco, Denver, and more. If your city is not listed we can usually source a crew within a week.",
  },
  {
    q: "How do I book a wheat pasting campaign?",
    a: "Call (917) 400-4594 or email info@phantompasting.com with your city, timeline, and campaign goal. Our team responds within 24 hours with a custom strategy, mock placement map, and quote.",
  },
] as const;

const ACCENT = "#D4A010";

export default function WheatPastingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            serviceSchema({
              name: "Wheat Pasting",
              alternateName: "Street Postering",
              description:
                "Large-format wheat paste poster advertising installed on prime urban walls across 50+ US cities. Includes print, installation, and photo documentation.",
              url: PAGE_URL,
              serviceType: "Wheat Pasting",
              category: "Outdoor Advertising",
              image: PAGE_OG,
              slogan: "Posters that own walls.",
              audienceType:
                "Brand Marketers, Marketing Agencies, Music Labels, Streetwear Brands, Independent Artists",
              offerItems: [
                {
                  name: "Single-City Wheat Pasting Test",
                  description:
                    "12–15 walls, 80–250 posters, one US city, 4–8 unique designs, full next-morning daylight photo documentation. Standard install window 7–10 days from sign-off.",
                },
                {
                  name: "Multi-City Wheat Pasting Rollout",
                  description:
                    "Coordinated installs across 2–7 US cities on the same launch weekend. Single brief, single price sheet, single unified campaign report. Volume discount applied.",
                },
                {
                  name: "Tour-Window Recurring Wheat Pasting",
                  description:
                    "Weekly or bi-weekly rolling refreshes for album campaigns, festival lineups, and product-drop sequences. Maintains continuous wall presence over 4–12 week tours.",
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
              headline: "Wheat Pasting That Owns Walls",
              description: PAGE_DESC,
              url: PAGE_URL,
              image: PAGE_OG,
              datePublished: DATE_PUBLISHED,
              dateModified: DATE_MODIFIED,
              articleSection: "Services",
              articleBody: PAGE_DESC,
              keywords: [
                "wheat pasting",
                "wheat paste posters",
                "street postering",
                "poster campaigns",
                "guerrilla marketing",
                "outdoor advertising",
                "OOH",
              ],
              audienceType: "Brand Marketers, Marketing Agencies",
              genre: "Service Page",
            })
          ),
        }}
      />
      {/* localBusinessSchema is emitted globally via app/layout.tsx. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(faqPageSchema(FAQS.map(({ q, a }) => ({ q, a })))),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: "Wheat Pasting", href: "/services/wheat-pasting" },
            ])
          ),
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
            { name: "Wheat Pasting" },
          ]}
        />

        <TrustBar />

        {/* ── Hero (split-screen) ───────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] lg:min-h-[660px] items-center">

              {/* LEFT — text + stats */}
              <div className="relative z-10 flex flex-col justify-center py-16 md:py-20 lg:py-24 lg:pr-16">
                <span
                  className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase mb-6"
                  style={{ color: "rgba(0,0,0,0.55)" }}
                >
                  <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                  Wheat Pasting
                </span>
                <h1
                  className="font-black uppercase m-0 leading-[0.88]"
                  style={{ fontSize: "clamp(48px, 7vw, 100px)", letterSpacing: "-0.04em" }}
                >
                  WHEAT PASTING<br />
                  <ShinyGoldText>THAT OWNS WALLS.</ShinyGoldText>
                </h1>
                <p
                  className="font-light leading-relaxed mt-8 mb-10"
                  style={{
                    fontSize: "clamp(17px, 1.6vw, 19px)",
                    color: "rgba(0,0,0,0.5)",
                    maxWidth: "480px",
                  }}
                >
                  Large-format wheat paste posters on prime urban walls across 50+ US cities.
                  We handle everything — print, crew, installation, and 100% photo documentation.
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
                  WHEAT
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
                  {/* Hidden on mobile (hidden lg:block wrapper). Removed priority
                      so Next.js doesn't preload this ~300KB hero to mobile users
                      who never see it. */}
                  <Image
                    src="/gallery/dont-fall-off-wheat-paste-street-view-la.webp"
                    alt="Wheat paste poster wall campaign"
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
                    src="/gallery/fifa-world-cup-poster-wall-street-perspective.webp"
                    alt="Street wheat paste poster installation"
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
              <time dateTime={DATE_MODIFIED}>Last updated April 2026</time>
            </p>
          </div>
        </div>

        {/* ── What is wheat pasting (expanded) ──────────────────── */}
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
                WHAT IS<br /><ShinyGoldText>WHEAT PASTING?</ShinyGoldText>
              </h2>
              <p
                className="font-light leading-relaxed m-0 mb-4"
                style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "520px" }}
              >
                <Link
                  href="/blog/what-is-wheat-pasting"
                  style={{ color: ACCENT, textDecoration: "underline", textDecorationThickness: "1px" }}
                >
                  Wheat pasting
                </Link>{" "}
                is the original street advertising format — large printed posters adhered directly
                to urban walls, construction plywood, and hoardings using a simple paste of wheat
                flour, water, and PVA. The technique dates back to mid-20th-century political
                postering and became the visual language of punk flyers, indie film promo, and
                street art culture before brands adopted it for launches and tours.
              </p>
              <p
                className="font-light leading-relaxed m-0 mb-4"
                style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "520px" }}
              >
                A typical Phantom Pasting campaign runs at 24×36 inches for standard neighborhood
                coverage and scales up to 48×72 jumbo wall takeovers when a brand wants a single
                surface to dominate an entire block. Posters are brushed smooth, edge-sealed, and
                stay up between two and eight weeks depending on weather, wall composition, and
                city — longer on covered surfaces, shorter in heavy-rain markets.
              </p>
              <p
                className="font-light leading-relaxed m-0 mb-6"
                style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "520px" }}
              >
                Unlike a banner ad, a wheat-paste poster can&apos;t be scrolled past. It lives in
                your audience&apos;s neighborhood — on their commute, their lunch spot, their
                Saturday walk — earning organic photo shares that paid social simply cannot buy.
              </p>
              <ul
                className="list-none m-0 p-0 flex flex-col gap-2.5"
                style={{ maxWidth: "520px" }}
              >
                {[
                  "Unskippable — physical presence that can't be muted, blocked, or scrolled past",
                  "Hyper-local — placed in the exact neighborhoods your audience lives and moves through",
                  "Social-ready — in-the-wild shots generate organic sharing at no extra cost",
                  "Documented — every single install photographed, timestamped, and geo-tagged",
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
                { label: "Poster Size", value: '24"×36" to 48"×72"' },
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
              HOW DOES WHEAT<br />PASTING <ShinyGoldText>WORK?</ShinyGoldText>
            </h2>
            <p
              className="font-light mb-10 m-0"
              style={{ color: "rgba(0,0,0,0.5)", fontSize: "15px", maxWidth: "640px" }}
            >
              Every wheat pasting campaign follows the same five-step process, from strategy
              intake through delivered photo report. Most campaigns run 5–21 business days
              depending on city count, poster volume, and print specs.
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
                Trust & Compliance
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
                Every brand that books wheat pasting asks the same question first: is it legal?
                The short answer is yes — when done on permitted surfaces. Here is how Phantom
                Pasting handles compliance so your brand is never the one answering to city code.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                {
                  h: "Permitted walls only",
                  p: "We maintain an active roster of property-owner agreements in every city we operate. Posters only go on walls, plywood, and hoardings where we have written permission or legal poster campaign rights.",
                },
                {
                  h: "Construction hoardings",
                  p: "Temporary plywood around construction projects is often the single most-used legal canvas. We source these weekly and pay property fees when required.",
                },
                {
                  h: "City-by-city ordinance awareness",
                  p: "Postering rules vary by municipality. Our install crews operate against an internal compliance checklist tuned to each target city's signage code, fines, and removal requirements.",
                },
                {
                  h: "Risk transfer to Phantom Pasting",
                  p: "Because install is handled by our licensed crews on approved surfaces, your brand logo never appears on an unauthorized wall. Compliance risk stays with us, not you.",
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
              Combine wheat pasting with chalk stencils or book a full multi-format campaign for
              total street saturation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              WHEAT PASTING IN EVERY MAJOR US CITY<span style={{ color: ACCENT }}>.</span>
            </h2>
            <p
              className="font-light mb-8 m-0"
              style={{ color: "rgba(0,0,0,0.5)", fontSize: "14px", maxWidth: "640px" }}
            >
              Phantom Pasting maintains standing install crews in every major US metro. Below are
              the five cities where we run the most campaigns — though we ship print and crew to
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
              WHEAT PASTING <ShinyGoldText>FAQ.</ShinyGoldText>
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
                <strong style={{ color: ACCENT }}>TL;DR</strong> — Wheat pasting is large-format,
                street-level poster advertising installed on permitted walls in 50+ US cities.
                Print, crew, install, and 100% photo documentation are all included. Runs 2–8
                weeks on wall. Call{" "}
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
