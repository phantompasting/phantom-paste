import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import ShinyGoldText from "@/components/ShinyGoldText";
import Breadcrumb from "@/components/Breadcrumb";
import SiteFooter from "@/components/SiteFooter";
import TrustBar from "@/components/TrustBar";
import { BUSINESS } from "@/lib/business";
import { articleSchema, localBusinessSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";

const PAGE_URL = `${BUSINESS.url}/work/incrediwear-street-campaign`;
const PAGE_OG = `${BUSINESS.url}/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp`;
const PAGE_TITLE = "Incrediwear Guerrilla Marketing Campaign";
const PAGE_DESC =
  "Incrediwear guerrilla marketing campaign in Los Angeles and New York. Pole wraps, sticker campaigns, and nighttime urban advertising. Photo documented.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "Incrediwear guerrilla marketing",
    "pole wrap advertising",
    "sticker campaign urban",
    "street advertising night",
    "guerrilla marketing campaign",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Incrediwear Guerrilla Marketing | Phantom Pasting",
    description: "Incrediwear street campaign — pole wraps, stickers, and nighttime urban advertising.",
    url: PAGE_URL,
    type: "article",
    images: [{ url: PAGE_OG, width: 1200, height: 630, alt: "Incrediwear pole wrap guerrilla advertising at night" }],
  },
};

const ACCENT = "#D4A010";

const IMAGES = [
  { src: "/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp", alt: "Incrediwear pole wrap guerrilla advertising at night" },
  { src: "/gallery/street-pole-sticker-campaign-urban-advertising.webp", alt: "Street pole sticker campaign urban advertising" },
  { src: "/gallery/sticker-campaign-street-intersection-urban.webp", alt: "Sticker campaign at street intersection" },
];

export default function IncrediwearCaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            articleSchema({
              headline: "Incrediwear Guerrilla Marketing Street Campaign",
              description: "Multi-format guerrilla marketing campaign for Incrediwear featuring pole wraps and urban sticker campaigns.",
              url: PAGE_URL,
              image: PAGE_OG,
              datePublished: "2026-03-05",
              dateModified: "2026-04-16",
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
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Work", href: "/work" },
              { name: "Incrediwear Street Campaign", href: "/work/incrediwear-street-campaign" },
            ])
          ),
        }}
      />

      <div style={{ background: "transparent", minHeight: "100dvh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Work", href: "/work" },
            { name: "Incrediwear Street Campaign" },
          ]}
        />
        <TrustBar />

        {/* ── Hero (wide, centered, sleek) ──────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="relative max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24 text-center">
            <div className="inline-flex items-center gap-4 mb-8">
              <span style={{ width: 40, height: 1, background: "rgba(0,0,0,0.14)" }} />
              <Link href="/work" className="font-mono text-[10px] tracking-[0.3em] uppercase no-underline"
                style={{ color: "rgba(0,0,0,0.55)" }}>← Back to Work</Link>
              <span style={{ width: 8, height: 1, background: "rgba(0,0,0,0.14)" }} />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: ACCENT }}>
                Case 03 / Wellness
              </span>
              <span style={{ width: 40, height: 1, background: "rgba(0,0,0,0.14)" }} />
            </div>
            <h1 className="font-black uppercase m-0 leading-[0.88] mx-auto"
              style={{ fontSize: "clamp(44px, 7vw, 120px)", letterSpacing: "-0.045em", maxWidth: "1280px" }}>
              INCREDIWEAR <ShinyGoldText>STREET CAMPAIGN.</ShinyGoldText>
            </h1>
            <p className="font-light leading-relaxed mt-8 mb-10 mx-auto"
              style={{ fontSize: "clamp(17px, 1.5vw, 20px)", color: "rgba(0,0,0,0.55)", maxWidth: "680px" }}>
              Multi-format guerrilla marketing campaign for Incrediwear — pole wraps,
              sticker saturation, and nighttime urban advertising. Street-level brand
              presence that catches eyes day and night.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact"
                className="hero-cta-primary relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-8 py-4 rounded-full overflow-hidden"
                style={{ background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)", color: "#FFF",
                  boxShadow: "0 4px 28px rgba(0,0,0,0.42), 0 1px 0 rgba(255,255,255,0.08) inset" }}>
                <span className="absolute inset-0 pointer-events-none rounded-full"
                  style={{ background: "linear-gradient(180deg, rgba(196,162,18,0.28) 0%, transparent 48%)" }} />
                Get a Quote <span className="cta-arrow" style={{ color: ACCENT }}>→</span>
              </Link>
              <a href={BUSINESS.telHref}
                aria-label={`Call Phantom Pasting at ${BUSINESS.telephoneDisplay}`}
                className="hero-cta-secondary inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.18em] uppercase no-underline px-6 py-4 rounded-full"
                style={{ color: "rgba(0,0,0,0.82)", background: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(0,0,0,0.14)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ color: ACCENT }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call Now
              </a>
              <Link href="/services/full-impact-campaigns"
                className="hero-cta-secondary inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.18em] uppercase no-underline px-6 py-4 rounded-full"
                style={{ color: "rgba(0,0,0,0.82)", background: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(0,0,0,0.14)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)" }}>
                Full Impact →
              </Link>
            </div>
            <div className="mt-14 pt-8 mx-auto"
              style={{ borderTop: "1px solid rgba(0,0,0,0.08)", maxWidth: "1040px" }}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                {[
                  { stat: "Incrediwear", label: "Client" },
                  { stat: "LA / NY", label: "Cities" },
                  { stat: "Multi-Format", label: "Execution" },
                  { stat: "2026", label: "Year" },
                ].map(({ stat, label }) => (
                  <div key={label}>
                    <div className="font-black uppercase leading-none"
                      style={{ fontSize: "clamp(17px, 1.9vw, 24px)", letterSpacing: "-0.03em", color: ACCENT }}>
                      {stat}
                    </div>
                    <div className="font-mono text-[9px] tracking-[0.3em] uppercase mt-2" style={{ color: "rgba(0,0,0,0.55)" }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Gallery ───────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-16 md:pb-24">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {IMAGES.map((img, i) => (
                <div key={img.src}
                  className={`relative rounded-2xl overflow-hidden ${i === 0 ? "md:col-span-2" : ""}`}
                  style={{ aspectRatio: i === 0 ? "16/9" : "4/3" }}>
                  <Image src={img.src} alt={img.alt} fill className="object-cover"
                    sizes={i === 0 ? "(max-width: 768px) 100vw, 1200px" : "(max-width: 768px) 100vw, 600px"}
                    quality={i === 0 ? 78 : 70}
                    priority={i === 0} loading={i === 0 ? "eager" : "lazy"} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Details ───────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-4 flex items-center gap-2"
                style={{ color: "rgba(0,0,0,0.55)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                The Brief
              </span>
              <h2 className="font-black uppercase m-0 mb-5 leading-[0.9]"
                style={{ fontSize: "clamp(24px, 3vw, 38px)", letterSpacing: "-0.03em" }}>
                RECOVERY BRAND,<br /><span style={{ color: ACCENT }}>STREET PRESENCE.</span>
              </h2>
              <p className="font-light leading-relaxed" style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px" }}>
                Incrediwear needed grassroots visibility for their performance recovery products.
                The ask: put the brand in front of active, health-conscious audiences at street level —
                near gyms, parks, and fitness-focused neighborhoods — using formats that feel native
                to the urban environment. Paid social was getting them reach but not repetition; the
                brand kept disappearing from their audience&apos;s field of view between sessions. Physical
                street formats solve that problem — they sit on the route an athlete already runs.
              </p>
            </div>
            <div>
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-4 flex items-center gap-2"
                style={{ color: "rgba(0,0,0,0.55)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                The Execution
              </span>
              <h2 className="font-black uppercase m-0 mb-5 leading-[0.9]"
                style={{ fontSize: "clamp(24px, 3vw, 38px)", letterSpacing: "-0.03em" }}>
                POLES, STICKERS,<br /><span style={{ color: ACCENT }}>INTERSECTIONS.</span>
              </h2>
              <p className="font-light leading-relaxed" style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px" }}>
                We deployed pole wraps with illuminated nighttime impact, sticker saturation
                at key urban intersections, and targeted placements near fitness centers and
                active lifestyle hubs. Multi-format execution that kept the brand visible
                around the clock — day and night. Pole wraps caught commuters; sticker walls
                compounded in the neighborhoods with highest run-club and CrossFit density;
                nighttime formats extended visibility into after-work gym traffic. Every asset
                was GPS-logged and photo-documented under controlled lighting.
              </p>
            </div>
          </div>
        </section>

        {/* ── Campaign Impact ───────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-16 md:pb-24">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase inline-flex items-center gap-2"
                style={{ color: "rgba(0,0,0,0.55)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                Campaign Impact
              </span>
              <h2 className="font-black uppercase m-0 mt-3 leading-[0.9]"
                style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.035em" }}>
                BUILT FOR <span style={{ color: ACCENT }}>REPETITION.</span>
              </h2>
              <p className="font-light leading-relaxed mx-auto mt-5"
                style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px", maxWidth: "680px" }}>
                Wellness brands live and die on frequency. Our team has run multi-format
                street poster campaigns for eight performance and recovery brands since 2020 — so the
                Incrediwear plan was built on a proven stack: pole wraps for commuter
                repetition, sticker clusters for neighborhood saturation, nighttime formats
                for after-gym visibility.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { n: "2", l: "Cities Deployed" },
                { n: "3", l: "Format Types Stacked" },
                { n: "100%", l: "Photo Documented" },
                { n: "24/7", l: "Day + Night Visibility" },
              ].map(({ n, l }) => (
                <div key={l} className="rounded-2xl p-6 md:p-7 text-center"
                  style={{ background: "rgba(255,255,255,0.5)", backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.7)",
                    boxShadow: "0 2px 14px rgba(0,0,0,0.04)" }}>
                  <div className="font-black leading-none"
                    style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.04em", color: ACCENT }}>
                    {n}
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mt-3"
                    style={{ color: "rgba(0,0,0,0.58)" }}>
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Formats ───────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-16 md:pb-24">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-10 md:mb-14">
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase flex items-center gap-2"
                style={{ color: "rgba(0,0,0,0.55)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                The Stack
              </span>
              <h2 className="font-black uppercase m-0 mt-3 leading-[0.9]"
                style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.035em" }}>
                THREE FORMATS,<br /><span style={{ color: ACCENT }}>ONE COMPOUND EFFECT.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "POLE WRAPS",
                  tag: "Commuter Repetition",
                  body: "Light-pole wraps at key intersections along high-frequency running, cycling, and commuter routes. Positioned at eye level for pedestrians and cyclists, they delivered the repetition layer — the same audience seeing Incrediwear daily on the same route.",
                },
                {
                  name: "STICKER CLUSTERS",
                  tag: "Neighborhood Saturation",
                  body: "High-density sticker placements in gym-adjacent corridors — around CrossFit boxes, run clubs, and physical therapy offices. Low-profile but compounding: saturation creates the feeling that the brand is already part of the neighborhood culture.",
                },
                {
                  name: "NIGHTTIME FORMATS",
                  tag: "After-Gym Visibility",
                  body: "Reflective-finish and backlit-placement installs designed for dusk-to-dawn visibility. Incrediwear&apos;s audience trains early and late — the campaign needed to exist in both daylight and low-light conditions without losing presence.",
                },
              ].map(({ name, tag, body }) => (
                <div key={name} className="rounded-2xl p-7"
                  style={{ background: "rgba(255,255,255,0.5)", backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.7)",
                    boxShadow: "0 2px 14px rgba(0,0,0,0.04)" }}>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2"
                    style={{ color: "rgba(0,0,0,0.55)" }}>{tag}</div>
                  <h3 className="font-black uppercase m-0 mb-4 leading-none"
                    style={{ fontSize: "clamp(22px, 2.2vw, 28px)", letterSpacing: "-0.03em", color: ACCENT }}>
                    {name}
                  </h3>
                  <p className="font-light m-0 leading-relaxed"
                    style={{ fontSize: "14px", color: "rgba(0,0,0,0.58)" }}
                    dangerouslySetInnerHTML={{ __html: body }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Street Posters Work for Wellness Brands ───────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-16 md:pb-24">
          <div className="max-w-[1000px] mx-auto">
            <div className="mb-10 md:mb-12 text-center">
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase inline-flex items-center gap-2"
                style={{ color: "rgba(0,0,0,0.55)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                Why It Works
              </span>
              <h2 className="font-black uppercase m-0 mt-3 leading-[0.9]"
                style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.035em" }}>
                AUDIENCES <span style={{ color: ACCENT }}>ON THE MOVE.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  h: "Route-Based Frequency",
                  b: "Athletes and wellness buyers are route-based consumers. They run the same loop, cycle the same corridor, walk to the same gym. Physical street formats hit them on repeat, week after week, in exactly the headspace Incrediwear wants to own — recovery and performance.",
                },
                {
                  h: "Format Stacking Compounds",
                  b: "One format is an ad. Three formats stacked in the same neighborhood become a takeover. Pole + sticker + nighttime install signals commitment — the brand didn&apos;t just buy media, it showed up. That signal converts trial with wellness buyers.",
                },
                {
                  h: "Credibility in the Active Scene",
                  b: "Wellness credibility is hard to buy digitally and easy to lose. Showing up physically in the neighborhoods where trainers, physios, and serious athletes already operate signals the brand is in the ecosystem — not being advertised at it.",
                },
                {
                  h: "Always-On Without Always-Paying",
                  b: "Pole wraps and stickers keep working while paid social is paused. A campaign that goes up in February is still being seen in April. That duration is what turns brand recall into brand familiarity in categories where purchase cycles are long.",
                },
              ].map(({ h, b }) => (
                <div key={h}>
                  <h3 className="font-black uppercase m-0 mb-3 leading-tight"
                    style={{ fontSize: "clamp(16px, 1.6vw, 20px)", letterSpacing: "-0.02em", color: "#1A1A1A" }}>
                    {h}
                  </h3>
                  <p className="font-light m-0 leading-relaxed"
                    style={{ fontSize: "14.5px", color: "rgba(0,0,0,0.58)" }}>
                    {b}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ───────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-16 md:pb-24">
          <div className="max-w-[1000px] mx-auto">
            <div className="mb-10 md:mb-12">
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase flex items-center gap-2"
                style={{ color: "rgba(0,0,0,0.55)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                Our Process
              </span>
              <h2 className="font-black uppercase m-0 mt-3 leading-[0.9]"
                style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.035em" }}>
                HOW WE BUILT<br /><span style={{ color: ACCENT }}>THIS CAMPAIGN.</span>
              </h2>
            </div>
            <ol className="list-none p-0 m-0 grid grid-cols-1 gap-4">
              {[
                { n: "01", h: "Audience Route Mapping", b: "We built the placement plan against actual running apps, cycling data, and gym location density — not guesswork. Our scouts mapped the routes Incrediwear&apos;s target buyers already use, then picked the highest-frequency intersections along them." },
                { n: "02", h: "Format Allocation", b: "Pole wraps got the highest-frequency repeat corridors, sticker clusters got neighborhood density, nighttime formats got the gym-adjacent and bar-district intersections. Every format was assigned to the environment it performs best in." },
                { n: "03", h: "Permitted Substrate Audit", b: "Pole wraps require municipal or property permits; we ran the substrate audit for every candidate pole before printing. Zero Incrediwear assets came down from permit issues — a stat we can&apos;t always say for vendors using random poles." },
                { n: "04", h: "Overnight Install Windows", b: "2-person crews, 10pm-4am shifts. Pole wraps and nighttime formats installed during low-traffic hours; sticker clusters during daylight for precision placement. All installs completed within a 10-day window so the campaign went live coherently." },
                { n: "05", h: "Day + Night Documentation", b: "Every asset was photographed during daylight and rephotographed at night for the full 24-hour picture. Documentation included GPS pins, install timestamps, and crew sign-off for every single unit — delivered to Incrediwear as a shareable map." },
              ].map(({ n, h, b }) => (
                <li key={n} className="rounded-2xl p-6 md:p-7 flex gap-5 md:gap-7"
                  style={{ background: "rgba(255,255,255,0.45)", backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.7)" }}>
                  <div className="font-black leading-none shrink-0"
                    style={{ fontSize: "clamp(28px, 3vw, 38px)", letterSpacing: "-0.04em", color: ACCENT }}>
                    {n}
                  </div>
                  <div>
                    <h3 className="font-black uppercase m-0 mb-2 leading-tight"
                      style={{ fontSize: "clamp(17px, 1.6vw, 20px)", letterSpacing: "-0.02em", color: "#1A1A1A" }}>
                      {h}
                    </h3>
                    <p className="font-light m-0 leading-relaxed"
                      style={{ fontSize: "14px", color: "rgba(0,0,0,0.58)" }}>
                      {b}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Deliverables & Trust ──────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-16 md:pb-24">
          <div className="max-w-[1100px] mx-auto">
            <div className="mb-10 md:mb-12">
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase flex items-center gap-2"
                style={{ color: "rgba(0,0,0,0.55)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                What Incrediwear Received
              </span>
              <h2 className="font-black uppercase m-0 mt-3 leading-[0.9]"
                style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.035em" }}>
                DELIVERABLES<br /><span style={{ color: ACCENT }}>AND ACCOUNTABILITY.</span>
              </h2>
              <p className="font-light leading-relaxed mt-5"
                style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px", maxWidth: "680px" }}>
                We&apos;ve been running multi-format street campaigns for wellness and performance
                brands since 2020. The documentation package we built for Incrediwear is the
                same standard we apply across every campaign — because the biggest complaint
                clients bring us from previous vendors is always the same: they paid for units
                they never saw.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {[
                { h: "Per-Unit GPS Log", b: "Every pole wrap, sticker cluster, and nighttime asset GPS-pinned with install timestamp. Incrediwear got a shareable map they could share internally with retail, sales, and regional teams." },
                { h: "Day + Night Photo Pairs", b: "Every asset shot during daylight and at night. Gives the brand the full 24-hour picture and usable content for social, retail decks, and wholesale materials." },
                { h: "Substrate Permit References", b: "Pole wraps live on permitted substrates only. We share permit or municipal authorization references with clients on request — standard on every SOW." },
                { h: "Replacement Guarantee", b: "Any Incrediwear asset removed early due to weather, tear-down, or damage was replaced at no charge. Standard across our wellness campaigns — wellness brands are in the category for years, so we build for the long window." },
                { h: "Multi-Format Print Specs", b: "Pole wrap vinyl spec, sticker paper-weight and adhesive spec, nighttime finish type (reflective vs. matte) — all documented and shared. Brands that need to re-run should get the same output every time." },
                { h: "Campaign Recap + Asset Library", b: "Final deliverable includes the install map, photo library in raw and social formats, a recap deck, and a short-form recap reel Incrediwear used for internal stakeholder updates." },
              ].map(({ h, b }) => (
                <div key={h} className="rounded-2xl p-6 md:p-7"
                  style={{ background: "rgba(255,255,255,0.5)", backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.7)" }}>
                  <h3 className="font-black uppercase m-0 mb-2 leading-tight"
                    style={{ fontSize: "clamp(17px, 1.6vw, 20px)", letterSpacing: "-0.02em", color: "#1A1A1A" }}>
                    {h}
                  </h3>
                  <p className="font-light m-0 leading-relaxed"
                    style={{ fontSize: "14px", color: "rgba(0,0,0,0.58)" }}>
                    {b}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-16 md:pb-24">
          <div className="max-w-[900px] mx-auto">
            <div className="mb-10 md:mb-12 text-center">
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase inline-flex items-center gap-2"
                style={{ color: "rgba(0,0,0,0.55)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                FAQ
              </span>
              <h2 className="font-black uppercase m-0 mt-3 leading-[0.9]"
                style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.035em" }}>
                COMMON <ShinyGoldText>QUESTIONS.</ShinyGoldText>
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { q: "How long do pole wraps and nighttime formats stay up?", a: "Pole wraps typically run 30-90 days depending on municipal conditions and weather. Sticker clusters can last 60-120 days in low-wash environments. Nighttime formats follow the same timelines; degradation is weather-driven, not format-driven." },
                { q: "Do you handle permits for pole-based formats?", a: "Yes. Pole wraps require municipal permits or private-property authorization in most US cities. We run the substrate audit and permit layer before printing — any asset we install is on a sanctioned substrate, and we share the references with clients." },
                { q: "What neighborhoods work best for wellness brand campaigns?", a: "For LA: Santa Monica, Venice, West Hollywood, Silver Lake, Echo Park. For NY: Williamsburg, the LES, Chelsea, Tribeca, and the Upper West Side gym corridor. We match the neighborhood to the brand&apos;s buyer — athletic recovery reads differently from beauty or supplements." },
                { q: "Can I run a campaign in more than one city simultaneously?", a: "Yes. Incrediwear&apos;s campaign ran LA and NY in parallel, with separate crews and unified documentation. We operate in LA, NY, Atlanta, Chicago, Miami, and San Francisco, and regularly handle multi-city rollouts with synchronized go-live dates." },
                { q: "How do you prove the campaign actually ran?", a: "Every asset is GPS-logged and photo-documented during daylight and at night. Clients receive a shareable map, an install log, and a full photo library — within 10 days of final install. That&apos;s how we prove what you paid for is actually up." },
              ].map(({ q, a }) => (
                <details key={q} className="rounded-2xl p-5 md:p-6"
                  style={{ background: "rgba(255,255,255,0.55)", backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.7)" }}>
                  <summary className="font-black uppercase cursor-pointer list-none flex items-center justify-between gap-5"
                    style={{ fontSize: "clamp(16px, 1.5vw, 18px)", letterSpacing: "-0.015em", color: "#1A1A1A" }}>
                    <span dangerouslySetInnerHTML={{ __html: q }} />
                    <span className="shrink-0" style={{ color: ACCENT, fontSize: "22px", lineHeight: 1 }}>+</span>
                  </summary>
                  <p className="font-light m-0 mt-4 leading-relaxed"
                    style={{ fontSize: "14px", color: "rgba(0,0,0,0.6)" }}
                    dangerouslySetInnerHTML={{ __html: a }} />
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Service Backlink ──────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-16 md:pb-20">
          <div className="max-w-[900px] mx-auto rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
            style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.6)" }}>
            <div>
              <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.55)" }}>
                Format Used in This Campaign
              </div>
              <div className="font-black uppercase leading-tight mb-1"
                style={{ fontSize: "clamp(16px, 1.8vw, 22px)", letterSpacing: "-0.02em", color: "#1A1A1A" }}>
                Full Impact Campaign
              </div>
              <p className="font-light m-0" style={{ fontSize: "13px", color: "rgba(0,0,0,0.5)" }}>
                Multi-format street saturation — pole wraps, sticker campaigns, and urban activations combined into one unified push.
              </p>
            </div>
            <Link href="/services/full-impact-campaigns"
              className="shrink-0 no-underline font-bold text-[11px] tracking-[0.2em] uppercase px-6 py-3 rounded-full whitespace-nowrap"
              style={{ background: `linear-gradient(135deg, #D4A010 0%, #F5CA20 100%)`, color: "#FFF",
                boxShadow: "0 4px 20px rgba(212,160,16,0.45)" }}>
              Learn About Full Impact →
            </Link>
          </div>
        </section>

        {/* ── More Work + CTA ───────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]"
              style={{ fontSize: "clamp(20px, 2.5vw, 32px)", letterSpacing: "-0.025em" }}>
              MORE WORK<span style={{ color: ACCENT }}>.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
              <Link href="/work/fashionpass-los-angeles" className="no-underline rounded-2xl p-7 flex items-center justify-between"
                style={{ background: "rgba(248,247,244,0.9)", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.55)" }}>Case Study</div>
                  <div className="font-black uppercase leading-tight"
                    style={{ fontSize: "clamp(17px, 1.8vw, 22px)", letterSpacing: "-0.02em", color: "#1A1A1A" }}>
                    FASHIONPASS<br />LOS ANGELES
                  </div>
                </div>
                <span style={{ color: ACCENT, fontSize: "24px" }}>→</span>
              </Link>
              <Link href="/work/fifa-world-cup-atlanta" className="no-underline rounded-2xl p-7 flex items-center justify-between"
                style={{ background: "rgba(248,247,244,0.9)", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.55)" }}>Case Study</div>
                  <div className="font-black uppercase leading-tight"
                    style={{ fontSize: "clamp(17px, 1.8vw, 22px)", letterSpacing: "-0.02em", color: "#1A1A1A" }}>
                    FIFA WORLD CUP<br />ATLANTA
                  </div>
                </div>
                <span style={{ color: ACCENT, fontSize: "24px" }}>→</span>
              </Link>
            </div>

            <div className="text-center">
              <h2 className="font-black uppercase m-0 mb-5 leading-[0.9]"
                style={{ fontSize: "clamp(32px, 5vw, 64px)", letterSpacing: "-0.04em" }}>
                WANT RESULTS<br /><ShinyGoldText>LIKE THIS?</ShinyGoldText>
              </h2>
              <Link href="/contact"
                className="service-cta relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-10 py-5 rounded-full overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #F5CA20 100%)`, color: "#FFF",
                  boxShadow: `0 6px 32px rgba(212,160,16,0.55), 0 1px 0 rgba(255,255,255,0.25) inset` }}>
                <span className="absolute inset-0 pointer-events-none rounded-full"
                  style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 55%)" }} />
                Get a Quote <span className="cta-arrow">→</span>
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
