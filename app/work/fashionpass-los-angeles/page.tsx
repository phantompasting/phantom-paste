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

const PAGE_URL = `${BUSINESS.url}/work/fashionpass-los-angeles`;
const PAGE_OG = `${BUSINESS.url}/gallery/fashionpass-wheat-paste-wild-posting-wall-los-angeles.webp`;
const PAGE_TITLE = "FashionPass Wild Posting Campaign LA";
const PAGE_DESC =
  "FashionPass wheat paste and wild posting campaign across Los Angeles. Large-format posters in Melrose, Silver Lake, and DTLA. Photo documented.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "FashionPass wild posting",
    "wheat pasting Los Angeles",
    "wild posting LA",
    "fashion brand street marketing",
    "Los Angeles guerrilla marketing",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "FashionPass Wild Posting Campaign LA | Phantom Pasting",
    description: "Large-format wheat paste campaign for FashionPass across Los Angeles. Melrose, Silver Lake, DTLA.",
    url: PAGE_URL,
    type: "article",
    images: [{ url: PAGE_OG, width: 1200, height: 630, alt: "FashionPass wild posting campaign wall in Los Angeles" }],
  },
};

const ACCENT = "#D4A010";

const IMAGES = [
  { src: "/gallery/fashionpass-wheat-paste-wild-posting-wall-los-angeles.webp", alt: "FashionPass wild posting wall in Los Angeles" },
  { src: "/gallery/fashionpass-wheat-paste-street-art-wall-la.webp", alt: "FashionPass wheat paste street art wall LA" },
  { src: "/gallery/fashionpass-wheat-paste-campaign-poster-wall.webp", alt: "FashionPass wheat paste campaign poster wall" },
];

export default function FashionPassCaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            articleSchema({
              headline: "FashionPass Wild Posting Campaign — Los Angeles",
              description: "Large-format wheat paste campaign for FashionPass across prime walls in Los Angeles.",
              url: PAGE_URL,
              image: PAGE_OG,
              datePublished: "2026-02-10",
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
              { name: "FashionPass Los Angeles", href: "/work/fashionpass-los-angeles" },
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
            { name: "FashionPass Los Angeles" },
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
                Case 01 / Fashion
              </span>
              <span style={{ width: 40, height: 1, background: "rgba(0,0,0,0.14)" }} />
            </div>
            <h1 className="font-black uppercase m-0 leading-[0.88] mx-auto"
              style={{ fontSize: "clamp(44px, 7vw, 120px)", letterSpacing: "-0.045em", maxWidth: "1280px" }}>
              FASHIONPASS <ShinyGoldText>LOS ANGELES.</ShinyGoldText>
            </h1>
            <p className="font-light leading-relaxed mt-8 mb-10 mx-auto"
              style={{ fontSize: "clamp(17px, 1.5vw, 20px)", color: "rgba(0,0,0,0.55)", maxWidth: "680px" }}>
              Large-format wheat paste campaign across prime walls in Melrose,
              Silver Lake, and Downtown LA. Bold, colorful posters designed to
              stop traffic and drive brand awareness for FashionPass.
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
              <Link href="/services/wheat-pasting"
                className="hero-cta-secondary inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.18em] uppercase no-underline px-6 py-4 rounded-full"
                style={{ color: "rgba(0,0,0,0.82)", background: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(0,0,0,0.14)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)" }}>
                Wheat Pasting →
              </Link>
            </div>
            <div className="mt-14 pt-8 mx-auto"
              style={{ borderTop: "1px solid rgba(0,0,0,0.08)", maxWidth: "1040px" }}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                {[
                  { stat: "FashionPass", label: "Client" },
                  { stat: "Los Angeles", label: "City" },
                  { stat: "Wheat Paste", label: "Format" },
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
                FASHION AT<br /><span style={{ color: ACCENT }}>STREET LEVEL.</span>
              </h2>
              <p className="font-light leading-relaxed" style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px" }}>
                FashionPass needed to break through the digital noise and put their brand
                directly in front of LA&apos;s most fashion-forward neighborhoods. The goal:
                large-format visual impact that gets photographed and shared — turning city walls
                into organic social content. The brand had already saturated paid social and
                influencer channels; what they hadn&apos;t done was show up in the physical streets
                their customers actually occupy. We pitched wild posting as a flanking move — a way
                to plant a flag in Melrose, Silver Lake, and DTLA and let the city do the talking.
                The creative needed to feel less like an ad and more like a piece of the street.
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
                MELROSE TO<br /><span style={{ color: ACCENT }}>DOWNTOWN.</span>
              </h2>
              <p className="font-light leading-relaxed" style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px" }}>
                We deployed large-format wheat paste posters across prime walls in Melrose,
                Silver Lake, and DTLA — neighborhoods where FashionPass&apos;s audience actually
                lives and moves. Every installation was photographed and delivered as part of
                a full campaign report. Our crew ran overnight installs between midnight and
                5am, hand-pasting every wall for full-surface adhesion. Wall selection was
                driven by sight lines and photographability, not just impressions — we wanted
                every unit to work as content, not just media. The finished walls were captured
                in both documentary install shots and daylight hero frames, cleared for
                FashionPass to reuse across decks, social, and press.
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
                BUILT FOR <span style={{ color: ACCENT }}>THE FEED.</span>
              </h2>
              <p className="font-light leading-relaxed mx-auto mt-5"
                style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px", maxWidth: "680px" }}>
                FashionPass&apos;s audience lives on Instagram and TikTok. We engineered every
                wall for the scroll — bold color blocking, oversized type, and placements that
                photograph beautifully at golden hour. Our lead scout has mapped LA&apos;s fashion
                corridors for six years, so placement wasn&apos;t guesswork: every wall was chosen
                against sight lines, pedestrian patterns, and sun direction we&apos;ve proven out
                across dozens of prior campaigns for fashion, beauty, and lifestyle brands in
                the same neighborhoods.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { n: "3", l: "Prime LA Neighborhoods" },
                { n: "100%", l: "Photo Documented" },
                { n: "14d", l: "Typical Wall Life" },
                { n: "24/7", l: "Always-On Exposure" },
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

        {/* ── Neighborhoods ─────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-16 md:pb-24">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-10 md:mb-14">
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase flex items-center gap-2"
                style={{ color: "rgba(0,0,0,0.55)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                The Walls
              </span>
              <h2 className="font-black uppercase m-0 mt-3 leading-[0.9]"
                style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.035em" }}>
                THREE NEIGHBORHOODS,<br /><span style={{ color: ACCENT }}>ONE CITY MOMENT.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "MELROSE",
                  tag: "Fashion-Forward Foot Traffic",
                  body: "Melrose Avenue is where LA&apos;s fashion audience walks, shoots, and posts. Our FashionPass walls between Fairfax and La Brea hit a daily stream of shoppers, influencers, and photographers — the exact audience profile FashionPass needed to reach. High-vis walls near Glossier, Reformation, and the Melrose Trading Post captured organic tags every weekend.",
                },
                {
                  name: "SILVER LAKE",
                  tag: "Creative Class Density",
                  body: "Silver Lake&apos;s Sunset Junction is one of LA&apos;s densest creative corridors — stylists, photographers, editorial talent. We installed large-format paste-ups along Sunset Boulevard near the reservoir, where commuter traffic and sidewalk activity overlap. The creative-industry skew meant posts got shared inside the fashion bubble, not just outside it.",
                },
                {
                  name: "DOWNTOWN LA",
                  tag: "Scale + Editorial Backdrops",
                  body: "DTLA&apos;s Arts District and Fashion District gave us scale — taller walls, wider paste-ups, and the textured warehouse-brick backdrop that reads as editorial content. These installations became backdrop content for FashionPass&apos;s own photoshoots, extending the campaign&apos;s life well past the paper.",
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

        {/* ── Why Wild Posting for Fashion ──────────────────────── */}
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
                FASHION LIVES <span style={{ color: ACCENT }}>ON WALLS.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  h: "Scroll-Stopping Scale",
                  b: "A 10-foot paste-up hits different than a 10-inch phone screen. Large-format wheat paste gives fashion imagery the physical presence luxury and lifestyle brands used to own on billboards — at a fraction of the cost and with far more shareability.",
                },
                {
                  h: "Organic Social Amplification",
                  b: "Digital ads are taxed by platforms, ad blockers, and banner blindness. Wild posting campaigns get tagged, geotagged, and reposted by the exact creators brands pay to reach. FashionPass walls generated earned content from stylists and photographers who were never on the media plan.",
                },
                {
                  h: "Cultural Credibility",
                  b: "Wheat pasting carries the signal of street culture, indie fashion drops, and editorial campaigns. Meeting an audience on a wall — not in their feed — signals that a brand is part of the scene, not interrupting it.",
                },
                {
                  h: "Compounding Reach",
                  b: "A paste-up works 24/7 for its lifetime on the wall — typically 10-21 days depending on weather and placement. That&apos;s hundreds of thousands of impressions per unit, with photo content feeding into the brand&apos;s own channels long after the campaign wraps.",
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
                { n: "01", h: "Wall Scouting", b: "We walked every target corridor in Melrose, Silver Lake, and DTLA — scoring each wall on foot traffic, sight lines, photographability, and longevity. Only the top 20% of scouted walls made the final plan." },
                { n: "02", h: "Creative Review", b: "FashionPass&apos;s creative was reviewed at print scale, with color proofs and paper weight chosen to hold up in LA sun and coastal humidity. Final files were locked with 1/4-inch bleed and pasted-format crop marks." },
                { n: "03", h: "Permitted Printing", b: "Posters were printed on uncoated 80lb blueback — the industry standard for wheat paste — on machines capable of the saturated color FashionPass&apos;s art direction required." },
                { n: "04", h: "Overnight Install", b: "Installs ran between midnight and 5am with 2-person crews. Every wall was hand-brushed with wheat paste adhesive for full-surface adhesion — no tape, no staples, no corners lifting after 48 hours." },
                { n: "05", h: "Photo Documentation", b: "Every installation was photographed on deployment night and in daylight within 48 hours — giving FashionPass hero imagery for decks, social, and case-study use." },
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
                What FashionPass Received
              </span>
              <h2 className="font-black uppercase m-0 mt-3 leading-[0.9]"
                style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.035em" }}>
                DELIVERABLES<br /><span style={{ color: ACCENT }}>AND ACCOUNTABILITY.</span>
              </h2>
              <p className="font-light leading-relaxed mt-5"
                style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px", maxWidth: "680px" }}>
                We&apos;ve been running wild posting campaigns for brands since 2018, and the
                biggest complaint we hear from clients about previous vendors is the same
                every time: they paid for walls they never saw. Our standard deliverable
                package solves that. Every FashionPass wall in this campaign was GPS-logged,
                photographed on install night, and re-shot in daylight within 48 hours. No
                invoice leaves our office without the documentation attached.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {[
                { h: "Geo-Tagged Install Log", b: "Every wall coordinate, install time, and crew member logged. Clients get a shareable map with pins for every unit — the same map we use internally to audit crew performance." },
                { h: "High-Res Photo Package", b: "Two shoots per wall: a timestamped install-night documentation shot and a golden-hour hero frame. Delivered in raw and social-ready formats, cleared for commercial reuse." },
                { h: "Permitted Wall Inventory", b: "Our LA wall inventory is built on 6+ years of property-owner relationships. Every wall in the FashionPass plan was permitted or owner-authorized. We share permit references with clients on request." },
                { h: "Wall-Life Transparency", b: "We publish realistic wall-life ranges (10-21 days in LA) based on our actual tracking data — not inflated numbers. If a wall comes down early, we replace it at no charge. That policy is on every SOW we sign." },
                { h: "Material & Print Specs", b: "80lb uncoated blueback poster stock, industry-standard for wheat paste longevity. Water-activated paste, brushed full-surface — no staples, no tape, no shortcuts. Full spec sheet provided with every campaign." },
                { h: "Client-Ready Case Assets", b: "At wrap, clients receive a campaign deck with install stats, photo galleries, neighborhood breakdowns, and a short-form recap reel. FashionPass used the assets from this campaign across their own press and investor materials." },
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
                { q: "How long do wheat paste posters stay up in Los Angeles?", a: "LA&apos;s dry climate is generous — most paste-ups hold for 14-21 days before sun-fade or tear-down. Coastal neighborhoods like Venice see shorter life from humidity; inland walls like DTLA often run longer." },
                { q: "What makes wild posting a fit for fashion brands specifically?", a: "Fashion buyers are visual-first and neighborhood-loyal. Wild posting lets a brand show up physically in the streets where its buyers already shop, eat, and shoot content — earning credibility no feed ad can buy." },
                { q: "Do you handle permits and legal wall sourcing?", a: "Yes. Every FashionPass installation in this campaign was on a permitted or property-owner-authorized wall. We maintain an active inventory of approved wall partners across LA, NY, Atlanta, Chicago, and Miami." },
                { q: "What neighborhoods in LA do you recommend for fashion campaigns?", a: "Melrose, Silver Lake, Abbot Kinney, Echo Park, and the Arts District in DTLA are our top-five for fashion. We match the neighborhood to the brand&apos;s target buyer — streetwear looks different from luxury resale, and we build plans accordingly." },
                { q: "Can I get photo documentation for my brand&apos;s decks?", a: "Every campaign includes nighttime install documentation plus daylight hero shots within 48 hours. Files are delivered in high-res raw and web-ready formats, cleared for commercial use in pitch decks and social content." },
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
                Wheat Pasting
              </div>
              <p className="font-light m-0" style={{ fontSize: "13px", color: "rgba(0,0,0,0.5)" }}>
                Large-format paper posters on prime urban walls — the same format that powered this FashionPass campaign.
              </p>
            </div>
            <Link href="/services/wheat-pasting"
              className="shrink-0 no-underline font-bold text-[11px] tracking-[0.2em] uppercase px-6 py-3 rounded-full whitespace-nowrap"
              style={{ background: `linear-gradient(135deg, #D4A010 0%, #F5CA20 100%)`, color: "#FFF",
                boxShadow: "0 4px 20px rgba(212,160,16,0.45)" }}>
              Learn About Wheat Pasting →
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
              <Link href="/work/incrediwear-street-campaign" className="no-underline rounded-2xl p-7 flex items-center justify-between"
                style={{ background: "rgba(248,247,244,0.9)", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.55)" }}>Case Study</div>
                  <div className="font-black uppercase leading-tight"
                    style={{ fontSize: "clamp(17px, 1.8vw, 22px)", letterSpacing: "-0.02em", color: "#1A1A1A" }}>
                    INCREDIWEAR<br />STREET CAMPAIGN
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
