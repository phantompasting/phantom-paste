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
  collectionPageSchema,
  faqPageSchema,
  localBusinessSchema,
  breadcrumbSchema,
  jsonLd,
} from "@/lib/schema";

const PAGE_URL = `${BUSINESS.url}/services`;
const PAGE_TITLE = "Guerrilla Marketing Services";
const PAGE_DESC =
  "Wheat pasting, chalk spray stencils, and full-impact guerrilla marketing across 50+ US cities. 500+ campaigns, 100% photo-documented. Get a quote.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Guerrilla Marketing Services | Phantom Pasting",
    description: PAGE_DESC,
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: `${BUSINESS.url}${BUSINESS.ogImageDefault}`,
        width: BUSINESS.ogImageWidth,
        height: BUSINESS.ogImageHeight,
        alt: "Phantom Pasting guerrilla marketing services",
      },
    ],
  },
};

const ACCENT = "#D4A010";

const SERVICES = [
  {
    label: "Wheat Pasting",
    desc: "Large-format wheat paste posters on prime urban walls. 24\"×36\" to 48\"×72\". 100% photo documented.",
    href: "/services/wheat-pasting",
  },
  {
    label: "Chalk Spray Stencils",
    desc: "Precision chalk spray stencil activations at sidewalk level. Temporary, bold, and impossible to miss.",
    href: "/services/chalk-spray-stencils",
  },
  {
    label: "Full Impact Campaigns",
    desc: "End-to-end campaigns combining wheat pasting, street postering, and chalk stencils for total street saturation.",
    href: "/services/full-impact-campaigns",
  },
];

const TABLE_ROWS = [
  { feature: "Placement",      wheat: "Walls & surfaces",     chalk: "Sidewalks & plazas",  full: "Both" },
  { feature: "Size Range",     wheat: '24"×36" to 48"×72"',  chalk: '6"×12" to 48"×48"',  full: "All sizes" },
  { feature: "Lifespan",       wheat: "Weeks to months",      chalk: "Days to weeks",        full: "Mixed" },
  { feature: "Best For",       wheat: "Brand awareness",      chalk: "Event activations",    full: "Market domination" },
  { feature: "Documentation",  wheat: "100% photo proof",     chalk: "100% photo proof",     full: "100% photo proof" },
];

const PROCESS_STEPS = [
  { num: "01", title: "Brief Us",    desc: "Tell us your brand, city, goals, and timeline." },
  { num: "02", title: "We Plan",     desc: "Wall scouting, stencil cutting, print production." },
  { num: "03", title: "We Deploy",   desc: "Crews hit the streets in your target market." },
  { num: "04", title: "You See It",  desc: "Full photo documentation delivered." },
];

const INDUSTRIES = [
  "Music & Events",
  "Fashion & Streetwear",
  "Film & TV",
  "Food & Beverage",
  "Tech & Apps",
  "Sports & Fitness",
];

const DECISION_GUIDE = [
  {
    title: "Launching a product or album",
    recommendation: "Wheat Pasting",
    reason: "Large-format posters build weeks of awareness in high-traffic corridors. Ideal for drops that need run-up buzz.",
  },
  {
    title: "Hosting an event or venue activation",
    recommendation: "Chalk Spray Stencils",
    reason: "Temporary sidewalk stencils create a fresh-install moment exactly when the audience arrives — then fade cleanly.",
  },
  {
    title: "Running a citywide rollout or takeover",
    recommendation: "Full Impact Campaign",
    reason: "Stacking wheat paste + chalk + street postering in targeted zones creates compound impressions that own the neighborhood.",
  },
  {
    title: "Testing a new market",
    recommendation: "Start with Wheat Pasting",
    reason: "A targeted wall run in two or three neighborhoods is the lowest-risk entry, with photo documentation you can reuse in paid social.",
  },
];

const FAQS = [
  {
    q: "What kinds of guerrilla marketing services does Phantom Pasting offer?",
    a: "Phantom Pasting offers three core guerrilla marketing formats: wheat pasting (large-format posters on urban walls), chalk spray stencils (temporary water-based sidewalk and plaza activations), and full impact campaigns (multi-format deployments combining every format for total market saturation). All three include strategy, production, install, and 100% photo documentation.",
  },
  {
    q: "Which format is right for my campaign?",
    a: "Wheat pasting is best for awareness, launches, and longer-run campaigns (weeks to months). Chalk stencils are best for event activations, venue entrances, and short-run cultural moments (days to weeks). Full impact is best when the goal is to dominate a neighborhood or market across multiple formats at once.",
  },
  {
    q: "How much do guerrilla marketing campaigns cost?",
    a: "Pricing is quoted per campaign and depends on city, placement volume, format, and timeline. Single-city wheat paste runs and chalk activations start in the low to mid four figures; national full impact campaigns scale into five and six figures depending on density. Call (917) 400-4594 for a tailored quote.",
  },
  {
    q: "How quickly can a campaign go live?",
    a: "Standard lead time is 2–3 weeks from approved brief to first install — that covers strategy, wall scouting or stencil cutting, print production, and scheduling. Rush timelines under 2 weeks are possible for single-city campaigns depending on capacity.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            collectionPageSchema({
              name: PAGE_TITLE,
              description: PAGE_DESC,
              url: PAGE_URL,
              items: SERVICES.map(({ label, href }) => ({
                name: label,
                url: `${BUSINESS.url}${href}`,
              })),
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
        dangerouslySetInnerHTML={{ __html: jsonLd(faqPageSchema(FAQS)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
            ])
          ),
        }}
      />

      <div style={{ background: "transparent", minHeight: "100dvh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Services" },
          ]}
        />
        <TrustBar />

        {/* ── Hero (split-screen) ───────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] lg:min-h-[660px] items-center">

              {/* LEFT */}
              <div className="relative z-10 flex flex-col justify-center py-16 md:py-20 lg:py-24 lg:pr-16">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase mb-6"
                  style={{ color: "rgba(0,0,0,0.55)" }}>
                  <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                  What We Do
                </span>
                <h1 className="font-black uppercase m-0 leading-[0.88]"
                  style={{ fontSize: "clamp(48px, 7vw, 100px)", letterSpacing: "-0.04em" }}>
                  GUERRILLA<br />MARKETING<br /><ShinyGoldText>SERVICES.</ShinyGoldText>
                </h1>
                <p className="font-light leading-relaxed mt-8 mb-10"
                  style={{ fontSize: "clamp(17px, 1.6vw, 19px)", color: "rgba(0,0,0,0.5)", maxWidth: "480px" }}>
                  Three formats. 50+ US cities. 500+ campaigns delivered. Every placement photo-documented and mapped. Pick the format that matches your launch, or stack every format for a full city takeover.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact"
                    className="hero-cta-primary relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-8 py-4 rounded-full overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)", color: "#FFF",
                      boxShadow: "0 4px 28px rgba(0,0,0,0.42), 0 1px 0 rgba(255,255,255,0.08) inset" }}>
                    <span className="absolute inset-0 pointer-events-none rounded-full"
                      style={{ background: "linear-gradient(180deg, rgba(196,162,18,0.28) 0%, transparent 48%)" }} />
                    Get a Quote <span className="cta-arrow" style={{ color: ACCENT }}>→</span>
                  </Link>
                  <a href={BUSINESS.telHref}
                    className="hero-cta-secondary inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.18em] uppercase no-underline px-6 py-4 rounded-full"
                    style={{ color: "rgba(0,0,0,0.82)", background: "rgba(255,255,255,0.9)",
                      border: "1px solid rgba(0,0,0,0.14)",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)" }}>
                    Call {BUSINESS.telephoneDisplay}
                  </a>
                </div>

                <div className="flex flex-wrap gap-10 md:gap-16 mt-12 pt-10"
                  style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                  {[
                    { stat: "3", label: "Formats" },
                    { stat: "500+", label: "Campaigns" },
                    { stat: "50+", label: "Cities" },
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

              {/* RIGHT */}
              <div className="relative hidden lg:block h-[660px] overflow-hidden">
                <span aria-hidden className="absolute right-0 top-1/2 font-black uppercase pointer-events-none select-none"
                  style={{ fontSize: "clamp(80px, 12vw, 180px)", letterSpacing: "-0.06em",
                    color: "rgba(212,160,16,0.05)", lineHeight: 1,
                    writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}>
                  SERVICES
                </span>
                <div className="absolute top-10 right-0 rounded-2xl overflow-hidden"
                  style={{ width: "82%", height: "80%", transform: "rotate(1.8deg)",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.20), 0 4px 14px rgba(0,0,0,0.10)" }}>
                  <Image src="/gallery/fashionpass-wheat-paste-campaign-poster-wall.webp"
                    alt="Wheat paste poster wall campaign" fill style={{ objectFit: "cover" }}
                    sizes="40vw" priority />
                </div>
                <div className="absolute bottom-10 left-2 rounded-xl overflow-hidden"
                  style={{ width: "50%", height: "48%", transform: "rotate(-2.2deg)",
                    boxShadow: "0 16px 48px rgba(0,0,0,0.26), 0 3px 10px rgba(0,0,0,0.12)" }}>
                  <Image src="/gallery/chalk-spray-stencil-sidewalk-guerrilla-marketing.webp"
                    alt="Chalk spray stencil sidewalk activation" fill style={{ objectFit: "cover" }}
                    sizes="25vw" />
                </div>
                <div aria-hidden className="absolute pointer-events-none"
                  style={{ top: "30%", left: "32%", width: "1px", height: "28%",
                    background: "linear-gradient(to bottom, transparent, rgba(212,160,16,0.5), transparent)",
                    transform: "rotate(18deg)" }} />
                <div className="absolute top-6 left-4 rounded-xl px-4 py-3"
                  style={{ background: "rgba(255,254,248,0.92)", backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.75)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.09)" }}>
                  <div className="font-black uppercase leading-none"
                    style={{ fontSize: "20px", letterSpacing: "-0.04em", color: ACCENT }}>
                    3
                  </div>
                  <div className="font-mono text-[8px] tracking-[0.3em] uppercase mt-1"
                    style={{ color: "rgba(0,0,0,0.55)" }}>
                    Formats
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Service Cards ─────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map(({ label, desc, href }) => (
              <Link key={href} href={href} className="no-underline group rounded-3xl p-8 flex flex-col justify-between"
                style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.6)",
                  minHeight: "260px" }}>
                <div>
                  <h2 className="font-black uppercase m-0 mb-4 leading-[0.9]"
                    style={{ fontSize: "clamp(22px, 2.2vw, 30px)", letterSpacing: "-0.03em" }}>
                    {label}<span style={{ color: ACCENT }}>.</span>
                  </h2>
                  <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.55)", fontSize: "14px" }}>
                    {desc}
                  </p>
                </div>
                <span className="mt-6 font-bold text-[11px] tracking-[0.2em] uppercase" style={{ color: ACCENT }}>
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── What is Guerrilla Marketing? ──────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase mb-5 flex items-center gap-2"
              style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Definition
            </span>
            <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]"
              style={{ fontSize: "clamp(28px, 4vw, 56px)", letterSpacing: "-0.035em" }}>
              WHAT IS GUERRILLA <ShinyGoldText>MARKETING?</ShinyGoldText>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              <div className="flex flex-col gap-4">
                <p className="font-light leading-relaxed m-0"
                  style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px" }}>
                  Guerrilla marketing is unconventional, street-level advertising that uses physical media — wheat paste posters, chalk spray stencils, stickers, and street postering — to reach audiences where they actually live, commute, and gather. Unlike digital ads that can be skipped, blocked, or muted, guerrilla campaigns exist in the real world and demand attention through physical presence.
                </p>
                <p className="font-light leading-relaxed m-0"
                  style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px" }}>
                  The category originated as a tactic for challenger brands competing against far-larger ad budgets, but it is now used by global brands — record labels, fashion houses, streaming platforms, and major sports properties — as a cultural-credibility layer alongside traditional paid media.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-light leading-relaxed m-0"
                  style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px" }}>
                  Phantom Pasting specializes in three core guerrilla formats — wheat pasting, chalk spray stencils, and full impact campaigns — each designed for a different kind of street-level impact. Every campaign is photo-documented and geo-tagged so you can see exactly what ran where.
                </p>
                <p className="font-light leading-relaxed m-0"
                  style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px" }}>
                  The best guerrilla campaigns do not replace digital — they amplify it. A wheat paste wall becomes a photograph on a creative director&apos;s camera roll, which becomes a piece of owned social content, which compounds the reach of the install itself.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Format Comparison Table ───────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase mb-5 flex items-center gap-2"
              style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Compare Formats
            </span>
            <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]"
              style={{ fontSize: "clamp(24px, 3.5vw, 48px)", letterSpacing: "-0.035em" }}>
              WHICH FORMAT IS RIGHT FOR <ShinyGoldText>YOUR CAMPAIGN?</ShinyGoldText>
            </h2>
            <p className="font-light leading-relaxed mb-10 m-0"
              style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px", maxWidth: "720px" }}>
              Each format solves a different creative problem. Wheat paste is loud, physical, and lasts for weeks. Chalk stencils are temporary, event-ready, and nearly frictionless to permit. Full impact stacks both. Here&apos;s how they compare side-by-side.
            </p>

            <div className="rounded-3xl overflow-hidden"
              style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.6)" }}>
              <div className="grid grid-cols-4 px-6 py-4 border-b" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
                <div className="font-mono text-[9px] tracking-[0.3em] uppercase" style={{ color: "rgba(0,0,0,0.55)" }}>
                  Feature
                </div>
                {["Wheat Pasting", "Chalk Stencils", "Full Impact"].map((col) => (
                  <div key={col} className="font-black uppercase text-[11px] tracking-[0.05em]"
                    style={{ color: "#1A1A1A" }}>
                    {col}
                  </div>
                ))}
              </div>

              {TABLE_ROWS.map(({ feature, wheat, chalk, full }, i) => (
                <div key={feature}
                  className="grid grid-cols-4 px-6 py-5 border-b last:border-b-0"
                  style={{
                    borderColor: "rgba(0,0,0,0.05)",
                    background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.25)",
                  }}>
                  <div className="font-mono text-[10px] tracking-[0.15em] uppercase"
                    style={{ color: "rgba(0,0,0,0.55)" }}>
                    {feature}
                  </div>
                  <div className="font-light" style={{ color: "rgba(0,0,0,0.6)", fontSize: "13px" }}>{wheat}</div>
                  <div className="font-light" style={{ color: "rgba(0,0,0,0.6)", fontSize: "13px" }}>{chalk}</div>
                  <div className="font-light" style={{ color: "rgba(0,0,0,0.6)", fontSize: "13px" }}>{full}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Decision Guide ───────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase mb-5 flex items-center gap-2"
              style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Choose a Format
            </span>
            <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]"
              style={{ fontSize: "clamp(24px, 3.5vw, 48px)", letterSpacing: "-0.035em" }}>
              HOW TO CHOOSE A <ShinyGoldText>FORMAT.</ShinyGoldText>
            </h2>
            <p className="font-light leading-relaxed mb-10 m-0"
              style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px", maxWidth: "720px" }}>
              Start with the goal, not the medium. Below are the four most common campaign scenarios we hear and the format we recommend for each — feel free to use it as a shortcut on your brief.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DECISION_GUIDE.map(({ title, recommendation, reason }) => (
                <div key={title} className="rounded-2xl p-6"
                  style={{ background: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.6)",
                    backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.55)" }}>
                    If you are
                  </div>
                  <div className="font-black uppercase mb-3" style={{ fontSize: "15px", letterSpacing: "-0.01em" }}>
                    {title}
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: ACCENT }}>
                    We recommend → {recommendation}
                  </div>
                  <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.55)", fontSize: "13px" }}>
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How Does a Campaign Work? ─────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase mb-5 flex items-center gap-2"
              style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              The Process
            </span>
            <h2 className="font-black uppercase m-0 mb-10 leading-[0.9]"
              style={{ fontSize: "clamp(24px, 3.5vw, 48px)", letterSpacing: "-0.035em" }}>
              HOW DOES A CAMPAIGN <ShinyGoldText>WORK?</ShinyGoldText>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PROCESS_STEPS.map(({ num, title, desc }) => (
                <div key={num} className="rounded-3xl p-8"
                  style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.6)" }}>
                  <div className="font-black mb-4 leading-none"
                    style={{ fontSize: "clamp(36px, 5vw, 56px)", letterSpacing: "-0.05em", color: ACCENT,
                      opacity: 0.25 }}>
                    {num}
                  </div>
                  <h3 className="font-black uppercase m-0 mb-3 leading-none"
                    style={{ fontSize: "clamp(18px, 2vw, 24px)", letterSpacing: "-0.02em" }}>
                    {title}
                  </h3>
                  <p className="font-light leading-relaxed m-0"
                    style={{ color: "rgba(0,0,0,0.55)", fontSize: "14px" }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who Uses Guerrilla Marketing? ─────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase mb-5 flex items-center gap-2"
              style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Industries
            </span>
            <h2 className="font-black uppercase m-0 mb-10 leading-[0.9]"
              style={{ fontSize: "clamp(24px, 3.5vw, 48px)", letterSpacing: "-0.035em" }}>
              WHO USES GUERRILLA <ShinyGoldText>MARKETING?</ShinyGoldText>
            </h2>

            <div className="flex flex-wrap gap-3">
              {INDUSTRIES.map((name) => (
                <div key={name}
                  className="rounded-full px-5 py-3 font-mono text-[10px] tracking-[0.15em] uppercase"
                  style={{ background: "rgba(255,255,255,0.45)", backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.6)",
                    color: "rgba(0,0,0,0.65)" }}>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase mb-5 flex items-center gap-2"
              style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Common Questions
            </span>
            <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]"
              style={{ fontSize: "clamp(28px, 4vw, 56px)", letterSpacing: "-0.035em" }}>
              SERVICES <ShinyGoldText>FAQ.</ShinyGoldText>
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

        {/* ── TL;DR Callout ─────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <aside className="rounded-3xl px-8 py-8 md:px-12 md:py-10"
              style={{ border: `1.5px solid ${ACCENT}`, background: "rgba(212,160,16,0.04)",
                backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}>
              <p className="font-black uppercase m-0 leading-snug"
                style={{ fontSize: "clamp(16px, 2vw, 22px)", letterSpacing: "-0.02em", color: "#1A1A1A" }}>
                <span style={{ color: ACCENT }}>TL;DR</span> — Three guerrilla formats. 50+ US cities. 500+ campaigns. 100% photo documented. Custom quotes within 24 hours — call <a href={BUSINESS.telHref} style={{ color: ACCENT }}>{BUSINESS.telephoneDisplay}</a>.
              </p>
            </aside>
          </div>
        </section>

        {/* ── Markets We Serve ──────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase mb-5 flex items-center gap-2"
              style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Markets We Serve
            </span>
            <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]"
              style={{ fontSize: "clamp(24px, 3.5vw, 48px)", letterSpacing: "-0.035em" }}>
              GUERRILLA MARKETING IN EVERY <ShinyGoldText>US CITY.</ShinyGoldText>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {LOCATIONS.map(({ name, href }) => (
                <Link key={href} href={href}
                  className="rounded-xl p-4 no-underline flex items-center justify-between"
                  style={{ background: "rgba(255,255,255,0.5)", border: "1px solid rgba(0,0,0,0.06)",
                    color: "rgba(0,0,0,0.72)" }}>
                  <span className="font-black uppercase" style={{ fontSize: "15px", letterSpacing: "-0.01em" }}>{name}</span>
                  <span style={{ color: ACCENT }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
