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
  localBusinessSchema,
  breadcrumbSchema,
  jsonLd,
} from "@/lib/schema";

const PAGE_URL = `${BUSINESS.url}/services/full-impact-campaigns`;
const PAGE_OG = `${BUSINESS.url}/gallery/fifa-world-cup-poster-wall-gallery-wide.webp`;
const PAGE_TITLE = "Full Impact Guerrilla Campaigns";
const PAGE_DESC =
  "Multi-format guerrilla marketing: wheat pasting, wild posting, and chalk stencils combined for total street saturation across 50+ US cities.";
const DATE_PUBLISHED = "2024-03-05";
const DATE_MODIFIED = "2026-04-01";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "guerrilla marketing campaign",
    "full street marketing campaign",
    "wheat pasting and wild posting",
    "end-to-end guerrilla marketing",
    "street advertising campaign",
    "multi-format street campaign",
    "city takeover marketing",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Full Impact Guerrilla Campaigns | Phantom Pasting",
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
        alt: "Full impact guerrilla marketing campaign — FIFA World Cup wall installation",
      },
    ],
  },
};

const PHASES = [
  {
    num: "01",
    title: "STRATEGY",
    desc: "We map your campaign objectives to a street strategy — which neighborhoods, which formats, which moments. City-specific planning grounded in local crew knowledge.",
    bullets: ["Neighborhood targeting", "Format + density allocation"],
  },
  {
    num: "02",
    title: "PRODUCTION",
    desc: "Large-format wheat paste posters printed and precision-cut chalk stencil templates produced in parallel. Ready to hit the streets on your timeline.",
    bullets: ["24×36 to 48×72 posters", "Laser-cut stencils + color art"],
  },
  {
    num: "03",
    title: "EXECUTION",
    desc: "Crews in every city deploy simultaneously — walls pasted, sidewalks stenciled, key intersections activated. High density in targeted zones for maximum visual saturation.",
    bullets: ["Simultaneous multi-city install", "Night-hour paste, day-hour chalk"],
  },
  {
    num: "04",
    title: "DOCUMENTATION",
    desc: "Every hit photographed, timestamped, and geo-tagged. Campaign reports delivered with social-ready imagery. 100% transparency on what ran where.",
    bullets: ["Geo-tagged photo per placement", "Branded report within 48 hrs"],
  },
];

const INCLUDED = [
  'Wheat paste posters (24"×36" to 48"×72")',
  "Chalk spray stencil activations",
  "Multi-city simultaneous deployment",
  "Neighborhood & wall scouting",
  "Timestamped photo documentation",
  "Campaign report + social-ready assets",
];

const FAQS = [
  {
    q: "What is a full impact guerrilla campaign?",
    a: "A full impact guerrilla campaign is a coordinated multi-format street marketing activation that combines wheat pasting, wild posting, and chalk spray stencils into one deployment. Instead of one channel, every format is stacked in targeted neighborhoods for total visual saturation — wall-level and street-level messaging running at the same time.",
  },
  {
    q: "How much does a full impact campaign cost?",
    a: "Full impact campaigns are custom-priced based on city count, placement volume, formats used, and timeline. Single-city launches typically start in the mid four figures; national multi-city takeovers scale into five and six figures depending on density. Call (917) 400-4594 for a tailored quote.",
  },
  {
    q: "How long does a full impact campaign take from brief to install?",
    a: "Standard lead time is 2–4 weeks from approved brief to first install. Strategy and scouting take 3–5 business days, production runs 5–10 business days, and install is typically a 1–5 day window depending on city count and volume.",
  },
  {
    q: "Which formats are included in a full impact campaign?",
    a: "Full impact campaigns include large-format wheat paste posters, chalk spray stencil activations, and wild posting on street-level walls and poles. We also add pole wraps, sticker passes, and sidewalk decals when the market and objective justify it.",
  },
  {
    q: "Can I get exclusive neighborhood or wall placements?",
    a: "Yes. For flagship launches we offer category exclusivity in targeted neighborhoods — meaning your brand is the only client running that format in those zones for the life of the campaign. Exclusivity carries a premium and must be locked at booking.",
  },
  {
    q: "What documentation do I receive after install?",
    a: "Every placement is photographed, timestamped, and geo-tagged. You receive a branded campaign report within 48 hours of install completion, including a social-ready image set, a map of all locations, and running totals by format and city.",
  },
] as const;

const ACCENT = "#D4A010";

export default function FullImpactCampaignsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            serviceSchema({
              name: "Full Impact Guerrilla Campaigns",
              alternateName: "Multi-Format Street Campaigns",
              description:
                "End-to-end guerrilla marketing combining wheat pasting, wild posting, and chalk spray stencils for total street saturation. Available in 50+ US cities.",
              url: PAGE_URL,
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
              headline: "Full Impact Guerrilla Campaigns",
              description: PAGE_DESC,
              url: PAGE_URL,
              image: PAGE_OG,
              datePublished: DATE_PUBLISHED,
              dateModified: DATE_MODIFIED,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(localBusinessSchema()) }}
      />
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
              { name: "Full Impact Campaigns", href: "/services/full-impact-campaigns" },
            ])
          ),
        }}
      />

      <div style={{ background: "transparent", minHeight: "100vh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Full Impact Campaigns" },
          ]}
        />
        <TrustBar />

        {/* ── Hero (split-screen) ───────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] lg:min-h-[660px] items-center">

              {/* LEFT — text + stats */}
              <div className="relative z-10 flex flex-col justify-center py-16 md:py-20 lg:py-24 lg:pr-16">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase mb-6"
                  style={{ color: "rgba(0,0,0,0.55)" }}>
                  <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                  Full Impact Campaigns
                </span>
                <h1 className="font-black uppercase m-0 leading-[0.88]"
                  style={{ fontSize: "clamp(48px, 7vw, 100px)", letterSpacing: "-0.04em" }}>
                  FULL IMPACT<br /><ShinyGoldText>GUERRILLA CAMPAIGNS.</ShinyGoldText>
                </h1>
                <p className="font-light leading-relaxed mt-8 mb-10"
                  style={{ fontSize: "clamp(15px, 1.4vw, 17px)", color: "rgba(0,0,0,0.5)", maxWidth: "500px" }}>
                  When you need to own a city, Full Impact combines wheat pasting, chalk stencils,
                  and strategic multi-format deployment for total street presence. One team. One plan.
                  Every corner.
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
                    { stat: "10+",  label: "Years Experience" },
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
                  IMPACT
                </span>

                <div className="absolute top-10 right-0 rounded-2xl overflow-hidden"
                  style={{ width: "82%", height: "62%",
                    transform: "rotate(1.2deg)",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.20), 0 4px 14px rgba(0,0,0,0.10)" }}>
                  <Image
                    src="/gallery/sticker-campaign-street-intersection-urban.webp"
                    alt="Full impact multi-format street campaign"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="40vw"
                    priority
                  />
                </div>

                <div className="absolute bottom-10 left-2 rounded-xl overflow-hidden"
                  style={{ width: "50%", height: "44%",
                    transform: "rotate(-2.2deg)",
                    boxShadow: "0 16px 48px rgba(0,0,0,0.26), 0 3px 10px rgba(0,0,0,0.12)" }}>
                  <Image
                    src="/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp"
                    alt="Guerrilla advertising pole wrap at night"
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
                    style={{ fontSize: "20px", letterSpacing: "-0.04em", color: ACCENT }}>3-Format</div>
                  <div className="font-mono text-[8px] tracking-[0.3em] uppercase mt-1"
                    style={{ color: "rgba(0,0,0,0.55)" }}>Street Blitz</div>
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
              <time dateTime={DATE_MODIFIED}>Last updated April 2026</time>
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
              WHAT IS A FULL IMPACT<br /><span style={{ color: ACCENT }}>CAMPAIGN?</span>
            </h2>
            <p className="font-light leading-relaxed m-0 mb-4" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "760px" }}>
              A full impact guerrilla campaign is an end-to-end street marketing activation that combines multiple formats — wheat pasting, chalk spray stencils, and wild posting — into a single coordinated deployment. Instead of picking one format, every available medium is stacked for total visual saturation across targeted neighborhoods in your market.
            </p>
            <p className="font-light leading-relaxed m-0 mb-4" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "760px" }}>
              The value is density. When a consumer walks a five-block corridor and passes your brand on a wall, then on the sidewalk, then on a utility pole — each impression reinforces the last. Recall climbs and the neighborhood starts to feel owned. That compound effect is what standalone wheat pasting or a single chalk activation cannot produce on its own.
            </p>
            <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "760px" }}>
              Full impact is the format of choice for product launches, album drops, film releases, festival marketing, and citywide rebrands — anywhere the goal is not just to be seen but to own the conversation in a neighborhood for the life of the campaign.
            </p>
          </div>
        </section>

        {/* ── What's Included ───────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
            <div>
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
                style={{ color: "rgba(0,0,0,0.55)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                What&apos;s Included
              </span>
              <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]"
                style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}>
                EVERY FORMAT.<br /><span style={{ color: ACCENT }}>ONE CAMPAIGN.</span>
              </h2>
              <p className="font-light leading-relaxed mb-8"
                style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "480px" }}>
                Full Impact campaigns are built for brands that want to dominate a market —
                not just touch it. We stack formats strategically so your messaging hits at
                eye level, wall level, and everywhere in between.
              </p>
              <Link href="/contact"
                className="service-cta relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-8 py-4 rounded-full overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #F5CA20 100%)`, color: "#FFF",
                  boxShadow: `0 4px 24px rgba(212,160,16,0.5), 0 1px 0 rgba(255,255,255,0.25) inset` }}>
                <span className="absolute inset-0 pointer-events-none rounded-full"
                  style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 55%)" }} />
                Get Custom Pricing <span className="cta-arrow">→</span>
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              {INCLUDED.map((item) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl px-5 py-4"
                  style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.6)" }}>
                  <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white font-bold text-[10px]"
                    style={{ background: ACCENT }}>✓</span>
                  <span className="font-light" style={{ fontSize: "14px", color: "rgba(0,0,0,0.7)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Four Phases ───────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
              style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              The Process
            </span>
            <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]"
              style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}>
              FOUR PHASES<span style={{ color: ACCENT }}>.</span>
            </h2>
            <p className="font-light mb-10 m-0" style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px", maxWidth: "640px" }}>
              From brief to photo-documented install in 2–4 weeks. Every phase runs in parallel where possible — production starts the day strategy is approved.
            </p>
            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px list-none m-0 p-0"
              style={{ background: "rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.06)", borderRadius: "20px", overflow: "hidden" }}>
              {PHASES.map((phase) => (
                <li key={phase.num} className="p-8 flex flex-col"
                  style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}>
                  <div className="font-mono text-[10px] tracking-[0.35em] uppercase mb-5" style={{ color: ACCENT }}>{phase.num}</div>
                  <h3 className="font-black uppercase m-0 mb-3 leading-[0.88]"
                    style={{ fontSize: "clamp(16px, 1.6vw, 22px)", letterSpacing: "-0.02em" }}>
                    {phase.title}<span style={{ color: ACCENT }}>.</span>
                  </h3>
                  <p className="font-light leading-relaxed mb-4" style={{ color: "rgba(0,0,0,0.55)", fontSize: "13px" }}>{phase.desc}</p>
                  <ul className="list-none m-0 p-0 flex flex-col gap-2 mt-auto">
                    {phase.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 font-mono text-[9px] tracking-[0.08em] uppercase" style={{ color: "rgba(0,0,0,0.55)" }}>
                        <span className="shrink-0 mt-1 w-1 h-1 rounded-full" style={{ background: ACCENT }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Case Example ───────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16 items-center">
            <div>
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2" style={{ color: "rgba(0,0,0,0.55)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                Case Example
              </span>
              <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]"
                style={{ fontSize: "clamp(32px, 4.5vw, 54px)", letterSpacing: "-0.035em" }}>
                FIFA WORLD CUP<br /><span style={{ color: ACCENT }}>ATLANTA TAKEOVER.</span>
              </h2>
              <p className="font-light leading-relaxed m-0 mb-4" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "520px" }}>
                The FIFA World Cup activation in Atlanta is a textbook full impact deployment. Objective: saturate the neighborhoods surrounding the match venue with tournament branding in the week leading up to the first kickoff. Formats stacked: large-format wheat paste wall blocks, sidewalk chalk stencil activations at pedestrian approach routes, and wild posting on construction plywood along two key corridors.
              </p>
              <p className="font-light leading-relaxed m-0 mb-6" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "520px" }}>
                Crews deployed over three nights; documentation was delivered inside 48 hours. Every placement was geo-tagged, photographed in-daylight for social reuse, and mapped. By match week the corridors felt owned — which is the entire point of full impact.
              </p>
              <Link href="/work/fifa-world-cup-atlanta"
                className="inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-6 py-3 rounded-full"
                style={{ color: "#1A1A1A", background: "rgba(255,255,255,0.9)", border: "1px solid rgba(0,0,0,0.14)" }}>
                See Full Case Study <span className="cta-arrow">→</span>
              </Link>
            </div>
            <div className="relative h-[340px] md:h-[440px] rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.18), 0 4px 14px rgba(0,0,0,0.08)" }}>
              <Image
                src="/gallery/fifa-world-cup-poster-wall-gallery-wide.webp"
                alt="FIFA World Cup full impact wheat paste poster wall in Atlanta"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 44vw"
              />
            </div>
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
              WHO IS FULL IMPACT<span style={{ color: ACCENT }}> FOR?</span>
            </h2>
            <div className="flex flex-wrap gap-3">
              {["Product Launches", "City Takeovers", "Film & TV Releases", "Festival Marketing", "Brand Rebrands", "Multi-City Rollouts", "Album Drops", "Sports Activations"].map((item) => (
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
                <strong style={{ color: ACCENT }}>TL;DR</strong> — Full impact = wheat pasting + chalk stencils + wild posting in one coordinated campaign. Total street presence across 50+ US cities. 100% photo-documented. Call <a href={BUSINESS.telHref} style={{ color: ACCENT }}>{BUSINESS.telephoneDisplay}</a> to plan a takeover.
              </p>
            </div>
          </div>
        </section>

        {/* ── Individual Services ───────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]"
              style={{ fontSize: "clamp(20px, 2.5vw, 32px)", letterSpacing: "-0.025em" }}>
              INDIVIDUAL SERVICES<span style={{ color: ACCENT }}>.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/services/wheat-pasting" className="no-underline rounded-2xl p-7 flex items-center justify-between"
                style={{ background: "rgba(248,247,244,0.9)", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.55)" }}>Service</div>
                  <div className="font-black uppercase leading-tight"
                    style={{ fontSize: "clamp(17px, 1.8vw, 22px)", letterSpacing: "-0.02em", color: "#1A1A1A" }}>
                    WHEAT<br />PASTING
                  </div>
                </div>
                <span style={{ color: ACCENT, fontSize: "24px" }}>→</span>
              </Link>
              <Link href="/services/chalk-spray-stencils" className="no-underline rounded-2xl p-7 flex items-center justify-between"
                style={{ background: "rgba(248,247,244,0.9)", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.55)" }}>Service</div>
                  <div className="font-black uppercase leading-tight"
                    style={{ fontSize: "clamp(17px, 1.8vw, 22px)", letterSpacing: "-0.02em", color: "#1A1A1A" }}>
                    CHALK SPRAY<br />STENCILS
                  </div>
                </div>
                <span style={{ color: ACCENT, fontSize: "24px" }}>→</span>
              </Link>
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
              FULL IMPACT<span style={{ color: ACCENT }}> FAQ.</span>
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
              LET&apos;S PLAN<br /><ShinyGoldText>YOUR TAKEOVER.</ShinyGoldText>
            </h2>
            <p className="font-light leading-relaxed mb-8 mx-auto"
              style={{ color: "rgba(0,0,0,0.5)", fontSize: "15px", maxWidth: "460px" }}>
              Tell us your city, your launch date, and your ambition.
              We&apos;ll respond within 24 hours with a full campaign strategy.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact"
                className="service-cta relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-10 py-5 rounded-full overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #F5CA20 100%)`, color: "#FFF",
                  boxShadow: `0 6px 32px rgba(212,160,16,0.55), 0 1px 0 rgba(255,255,255,0.25) inset` }}>
                <span className="absolute inset-0 pointer-events-none rounded-full"
                  style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 55%)" }} />
                Launch My Campaign <span className="cta-arrow">→</span>
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
