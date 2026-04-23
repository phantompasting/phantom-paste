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

const PAGE_URL = `${BUSINESS.url}/services/chalk-spray-stencils`;
const PAGE_OG = `${BUSINESS.url}/gallery/black-pearl-la-chalk-spray-stencil-sidewalk.webp`;
const PAGE_TITLE = "Chalk Spray Stencil Advertising";
const PAGE_DESC =
  "Chalk spray stencil advertising on sidewalks, plazas, and venue entrances. Water-based, photo-documented. Campaigns across 50+ US cities.";
const DATE_PUBLISHED = "2024-02-10";
const DATE_MODIFIED = "2026-04-01";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "chalk spray stencil marketing",
    "chalk stencil advertising",
    "sidewalk chalk advertising",
    "guerrilla marketing stencils",
    "street level marketing",
    "chalk spray marketing",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Chalk Spray Stencil Advertising | Phantom Pasting",
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
        alt: "Chalk spray stencil sidewalk advertising by Phantom Pasting",
      },
    ],
  },
};

const STEPS = [
  {
    num: "01",
    title: "CUSTOM CUT",
    desc: "We precision-cut your artwork into reusable stencil templates — logos, URLs, custom art, or text. Sizes from compact 6×12 to large 48×48 floor installations.",
    bullets: ["Laser-cut mylar stencils", "Multi-color layered passes available"],
  },
  {
    num: "02",
    title: "LOCATION TARGET",
    desc: "High-foot-traffic sidewalks, intersections, event queues, and venue entrances. We place where your audience actually walks — not just where ads are allowed.",
    bullets: ["Pedestrian + queue corridors", "Venue entrance activations"],
  },
  {
    num: "03",
    title: "SPRAY & INSTALL",
    desc: "Water-based chalk spray is applied in crisp, bold passes against the stencil template. Installation is fast — most sites take 3–10 minutes each.",
    bullets: ["Water-based, non-damaging chalk", "3–10 minutes per placement"],
  },
  {
    num: "04",
    title: "DOCUMENT & REPORT",
    desc: "Every installation is photographed, timestamped, and geo-tagged. Branded campaign reports are delivered within 48 hours — ready to repost or pitch.",
    bullets: ["100% photo proof per location", "Branded report within 48 hrs"],
  },
];

const FAQS = [
  {
    q: "What is chalk spray stencil advertising?",
    a: "Chalk spray stencil advertising is a temporary, street-level marketing technique where water-based chalk spray paint is applied through precision-cut stencil templates onto sidewalks, plazas, and paved surfaces. It creates high-visibility brand impressions at foot level and naturally fades within days.",
  },
  {
    q: "How long do chalk stencils last?",
    a: "Chalk spray stencil installations typically last 3–10 days depending on weather, surface type, and foot traffic. Indoor venues and covered areas last significantly longer. Rain and sidewalk washing accelerate fade.",
  },
  {
    q: "Is chalk spray stencil advertising legal?",
    a: "Chalk stencils use water-based, non-permanent chalk that washes away naturally. Unlike paint, chalk does not damage surfaces, making it a widely accepted form of street-level marketing. We still source permission for private surfaces and stay off protected public art.",
  },
  {
    q: "How much does a chalk stencil campaign cost?",
    a: "Campaign cost depends on number of placements, city, and stencil complexity. Small activations at a single venue start in the low four figures; multi-city event campaigns scale from there. Call (917) 400-4594 for a custom quote.",
  },
  {
    q: "How do I book a chalk stencil campaign?",
    a: "Call (917) 400-4594 or email info@phantompasting.com with your event, city, and target dates. We respond within 24 hours with a custom placement plan and quote.",
  },
] as const;

const ACCENT = "#D4A010";

export default function ChalkSprayStencilsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            serviceSchema({
              name: "Chalk Spray Stencils",
              alternateName: "Chalk Stencil Advertising",
              description:
                "Precision chalk spray stencil activations at sidewalk level. Water-based, temporary, and 100% photo documented. Available in 50+ US cities.",
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
              headline: "Chalk Stencils at Street Level",
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
              { name: "Chalk Spray Stencils", href: "/services/chalk-spray-stencils" },
            ])
          ),
        }}
      />

      <div style={{ background: "transparent", minHeight: "100dvh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Chalk Spray Stencils" },
          ]}
        />
        <TrustBar />

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] lg:min-h-[660px] items-center">
              <div className="relative z-10 flex flex-col justify-center py-16 md:py-20 lg:py-24 lg:pr-16">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: "rgba(0,0,0,0.55)" }}>
                  <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                  Chalk Spray Stencils
                </span>
                <h1 className="font-black uppercase m-0 leading-[0.88]" style={{ fontSize: "clamp(48px, 7vw, 100px)", letterSpacing: "-0.04em" }}>
                  CHALK STENCILS<br /><ShinyGoldText>AT STREET LEVEL.</ShinyGoldText>
                </h1>
                <p className="font-light leading-relaxed mt-8 mb-10" style={{ fontSize: "clamp(17px, 1.6vw, 19px)", color: "rgba(0,0,0,0.5)", maxWidth: "480px" }}>
                  Precision chalk spray stencil activations at the sidewalk level. Temporary. Legal. Impossible to miss. Perfect for brand moments that need to stop people mid-step.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="hero-cta-primary relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-8 py-4 rounded-full overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)", color: "#FFF", boxShadow: "0 4px 28px rgba(0,0,0,0.42), 0 1px 0 rgba(255,255,255,0.08) inset" }}>
                    <span className="absolute inset-0 pointer-events-none rounded-full" style={{ background: "linear-gradient(180deg, rgba(196,162,18,0.28) 0%, transparent 48%)" }} />
                    Get a Quote <span className="cta-arrow" style={{ color: ACCENT }}>→</span>
                  </Link>
                  <a href={BUSINESS.telHref} className="hero-cta-secondary inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.18em] uppercase no-underline px-6 py-4 rounded-full"
                    style={{ color: "rgba(0,0,0,0.82)", background: "rgba(255,255,255,0.9)", border: "1px solid rgba(0,0,0,0.14)", boxShadow: "0 2px 12px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)" }}>
                    Call {BUSINESS.telephoneDisplay}
                  </a>
                </div>
                <div className="flex flex-wrap gap-10 md:gap-16 mt-12 pt-10" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                  {[
                    { stat: "Street", label: "Level Placement" },
                    { stat: "Custom", label: "Stencil Cuts" },
                    { stat: "100%", label: "Documented" },
                  ].map(({ stat, label }) => (
                    <div key={label}>
                      <div className="font-black uppercase leading-none" style={{ fontSize: "clamp(22px, 3vw, 40px)", letterSpacing: "-0.04em", color: ACCENT }}>{stat}</div>
                      <div className="font-mono text-[9px] tracking-[0.3em] uppercase mt-1.5" style={{ color: "rgba(0,0,0,0.55)" }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative hidden lg:block h-[660px] overflow-hidden">
                <span aria-hidden className="absolute right-0 top-1/2 font-black uppercase pointer-events-none select-none"
                  style={{ fontSize: "clamp(80px, 12vw, 180px)", letterSpacing: "-0.06em", color: "rgba(212,160,16,0.05)", lineHeight: 1, writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}>
                  CHALK
                </span>
                <div className="absolute top-10 right-0 rounded-2xl overflow-hidden" style={{ width: "82%", height: "62%", transform: "rotate(1.8deg)", boxShadow: "0 24px 64px rgba(0,0,0,0.20), 0 4px 14px rgba(0,0,0,0.10)" }}>
                  <Image src="/gallery/black-pearl-la-chalk-spray-stencil-sidewalk.webp" alt="Chalk spray stencil guerrilla marketing" fill style={{ objectFit: "cover" }} sizes="(max-width: 1024px) 0vw, 40vw" loading="lazy" />
                </div>
                <div className="absolute bottom-10 left-2 rounded-xl overflow-hidden" style={{ width: "50%", height: "44%", transform: "rotate(-2.2deg)", boxShadow: "0 16px 48px rgba(0,0,0,0.26), 0 3px 10px rgba(0,0,0,0.12)" }}>
                  <Image src="/gallery/black-pearl-la-stencil-template-grass.webp" alt="Chalk stencil street activation" fill style={{ objectFit: "cover" }} sizes="(max-width: 1024px) 0vw, 25vw" loading="lazy" />
                </div>
                <div aria-hidden className="absolute pointer-events-none" style={{ top: "30%", left: "32%", width: "1px", height: "28%", background: "linear-gradient(to bottom, transparent, rgba(212,160,16,0.5), transparent)", transform: "rotate(18deg)" }} />
                <div className="absolute top-6 left-4 rounded-xl px-4 py-3" style={{ background: "rgba(255,254,248,0.92)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.75)", boxShadow: "0 4px 20px rgba(0,0,0,0.09)" }}>
                  <div className="font-black uppercase leading-none" style={{ fontSize: "20px", letterSpacing: "-0.04em", color: ACCENT }}>100%</div>
                  <div className="font-mono text-[8px] tracking-[0.3em] uppercase mt-1" style={{ color: "rgba(0,0,0,0.55)" }}>Legal</div>
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

        {/* ── What is Chalk Spray Stencil Advertising ──────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2" style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Definition
            </span>
            <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]" style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}>
              WHAT IS CHALK SPRAY STENCIL<br /><ShinyGoldText>ADVERTISING?</ShinyGoldText>
            </h2>
            <p className="font-light leading-relaxed m-0 mb-4" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "760px" }}>
              Chalk spray stencil advertising is a temporary, street-level marketing technique where water-based chalk spray paint is applied through precision-cut stencil templates onto sidewalks, plazas, and paved surfaces. It creates high-visibility brand impressions at foot level — exactly where people walk, queue, and gather.
            </p>
            <p className="font-light leading-relaxed m-0 mb-4" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "760px" }}>
              Unlike permanent paint or vinyl, chalk spray is water-based and non-damaging. It washes away naturally within days to weeks, which is the format&apos;s core strength: ephemeral by design. That gives it a cultural legitimacy wheat paste and stickers cannot match, and makes it the format of choice for venue-entrance activations, event queue takeovers, and sidewalk campaigns where property-owner permissions are harder to source.
            </p>
            <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "760px" }}>
              Stencils range from 6×12 inch logo repeats all the way up to 48×48 inch floor takeovers. Multi-layer registration lets us produce full-color artwork — logos, URLs, headlines, or intricate custom art — with crisp, unmistakable edges.
            </p>
          </div>
        </section>

        {/* ── Spec grid (condensed — prose moved into definition above) ─ */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2" style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              At A Glance
            </span>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { label: "Stencil Sizes", value: '6"×12" to 48"×48"' },
                { label: "Material", value: "Water-Based Chalk" },
                { label: "Lifespan", value: "Days to Weeks" },
                { label: "Documentation", value: "100% Photo Proof" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.6)" }}>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.55)" }}>{label}</div>
                  <div className="font-black uppercase leading-tight" style={{ fontSize: "clamp(14px, 1.5vw, 18px)", color: "#1A1A1A", letterSpacing: "-0.02em" }}>{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works (4 steps) ───────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2" style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              The Process
            </span>
            <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]" style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}>
              HOW CHALK STENCIL CAMPAIGNS <ShinyGoldText>WORK.</ShinyGoldText>
            </h2>
            <p className="font-light mb-10 m-0" style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px", maxWidth: "640px" }}>
              Four steps, from custom cut to photo-documented install. Most chalk campaigns run 3–10 business days end-to-end.
            </p>
            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px list-none m-0 p-0" style={{ background: "rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.06)", borderRadius: "20px", overflow: "hidden" }}>
              {STEPS.map((step) => (
                <li key={step.num} className="p-8 flex flex-col" style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}>
                  <div className="font-mono text-[10px] tracking-[0.35em] uppercase mb-5" style={{ color: ACCENT }}>{step.num}</div>
                  <h3 className="font-black uppercase m-0 mb-3 leading-[0.88]" style={{ fontSize: "clamp(16px, 1.6vw, 22px)", letterSpacing: "-0.02em" }}>
                    {step.title}<span style={{ color: ACCENT }}>.</span>
                  </h3>
                  <p className="font-light leading-relaxed mb-4" style={{ color: "rgba(0,0,0,0.55)", fontSize: "13px" }}>{step.desc}</p>
                  <ul className="list-none m-0 p-0 flex flex-col gap-2 mt-auto">
                    {step.bullets.map((b) => (
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

        {/* ── Legal & Biodegradable ────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 items-start">
            <div>
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2" style={{ color: "rgba(0,0,0,0.55)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                Compliance
              </span>
              <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]" style={{ fontSize: "clamp(28px, 3.8vw, 48px)", letterSpacing: "-0.035em" }}>
                LEGAL &amp;<br /><ShinyGoldText>BIODEGRADABLE.</ShinyGoldText>
              </h2>
              <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.55)", fontSize: "14px" }}>
                Chalk stencils occupy a unique position in street marketing: the material itself is non-damaging and temporary, which dramatically lowers permit friction compared to paste or paint.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { h: "Water-based chalk, no solvents", p: "Our spray is a chalk-and-water formulation with zero solvents. It washes off with rain or a sidewalk hose — no residue, no staining, no damage to concrete or stone." },
                { h: "Low permit friction", p: "Because chalk is temporary and non-permanent, most municipalities treat sidewalk chalk as protected speech or low-priority enforcement. We still coordinate with venues and property owners for indoor and private surfaces." },
                { h: "Venue & event friendly", p: "Most venues approve chalk stencils readily when we propose them — the fade-out is a feature for their operations team, not a problem to clean up." },
              ].map(({ h, p }) => (
                <div key={h} className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.5)", border: "1px solid rgba(0,0,0,0.06)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}>
                  <div className="font-black uppercase m-0 mb-2" style={{ fontSize: "13px", letterSpacing: "0.02em" }}>{h}</div>
                  <p className="font-light m-0 leading-relaxed" style={{ color: "rgba(0,0,0,0.55)", fontSize: "13px" }}>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TL;DR ────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <div className="rounded-2xl p-6" style={{ border: "2px solid rgba(212,160,16,0.3)", background: "rgba(212,160,16,0.04)" }}>
              <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px" }}>
                <strong style={{ color: ACCENT }}>TL;DR</strong> — Chalk spray stencils are temporary, water-based, street-level activations. Perfect for events, launches, and venue entrances. Non-damaging, low permit friction, 100% photo documented. Call <a href={BUSINESS.telHref} style={{ color: ACCENT }}>{BUSINESS.telephoneDisplay}</a> to book.
              </p>
            </div>
          </div>
        </section>

        {/* ── More Services ────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]" style={{ fontSize: "clamp(20px, 2.5vw, 32px)", letterSpacing: "-0.025em" }}>
              MORE SERVICES<span style={{ color: ACCENT }}>.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/services/wheat-pasting" className="no-underline rounded-2xl p-7 flex items-center justify-between" style={{ background: "rgba(248,247,244,0.9)", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.55)" }}>Service</div>
                  <div className="font-black uppercase leading-tight" style={{ fontSize: "clamp(17px, 1.8vw, 22px)", letterSpacing: "-0.02em", color: "#1A1A1A" }}>WHEAT<br />PASTING</div>
                </div>
                <span style={{ color: ACCENT, fontSize: "24px" }}>→</span>
              </Link>
              <Link href="/services/full-impact-campaigns" className="no-underline rounded-2xl p-7 flex items-center justify-between" style={{ background: "rgba(248,247,244,0.9)", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.55)" }}>Service</div>
                  <div className="font-black uppercase leading-tight" style={{ fontSize: "clamp(17px, 1.8vw, 22px)", letterSpacing: "-0.02em", color: "#1A1A1A" }}>FULL IMPACT<br />CAMPAIGNS</div>
                </div>
                <span style={{ color: ACCENT, fontSize: "24px" }}>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2" style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Common Questions
            </span>
            <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]" style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}>
              CHALK STENCIL <ShinyGoldText>FAQ.</ShinyGoldText>
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

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32 text-center">
          <div className="max-w-[700px] mx-auto">
            <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]" style={{ fontSize: "clamp(38px, 6vw, 80px)", letterSpacing: "-0.04em" }}>
              LET&apos;S BUILD<br /><ShinyGoldText>YOUR CAMPAIGN.</ShinyGoldText>
            </h2>
            <p className="font-light leading-relaxed mb-8 mx-auto" style={{ color: "rgba(0,0,0,0.5)", fontSize: "15px", maxWidth: "460px" }}>
              Tell us your event, your city, and your timeline. We&apos;ll respond within 24 hours with a custom chalk stencil plan.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="service-cta relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-10 py-5 rounded-full overflow-hidden" style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #F5CA20 100%)`, color: "#FFF", boxShadow: `0 6px 32px rgba(212,160,16,0.55), 0 1px 0 rgba(255,255,255,0.25) inset` }}>
                <span className="absolute inset-0 pointer-events-none rounded-full" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 55%)" }} />
                Launch My Campaign <span className="cta-arrow">→</span>
              </Link>
              <a href={BUSINESS.telHref} className="inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-8 py-5 rounded-full" style={{ color: "#1A1A1A", background: "rgba(255,255,255,0.9)", border: "1px solid rgba(0,0,0,0.14)" }}>
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
