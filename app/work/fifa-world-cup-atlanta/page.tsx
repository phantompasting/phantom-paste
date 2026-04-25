import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import ShinyGoldText from "@/components/ShinyGoldText";
import Breadcrumb from "@/components/Breadcrumb";
import SiteFooter from "@/components/SiteFooter";
import TrustBar from "@/components/TrustBar";
import { BUSINESS } from "@/lib/business";
import { articleSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";

const PAGE_URL = `${BUSINESS.url}/work/fifa-world-cup-atlanta`;
const PAGE_OG = `${BUSINESS.url}/gallery/fifa-world-cup-atlanta-wall-installation.webp`;
const PAGE_TITLE = "FIFA World Cup Street Campaign Atlanta";
const PAGE_DESC =
  "FIFA World Cup wheat pasting campaign in Atlanta. Large-format posters across Midtown, Little Five Points, and Buckhead. 100% photo documented.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "FIFA World Cup street marketing",
    "wheat pasting Atlanta",
    "poster campaign Atlanta",
    "sports event guerrilla marketing",
    "Atlanta street advertising",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "FIFA World Cup Street Campaign Atlanta | Phantom Pasting",
    description: "Large-format wheat paste campaign for FIFA World Cup across Atlanta. Midtown, Little Five Points, Buckhead.",
    url: PAGE_URL,
    type: "article",
    images: [{ url: PAGE_OG, width: 1200, height: 630, alt: "FIFA World Cup poster wall installation in Atlanta" }],
  },
};

const ACCENT = "#D4A010";

const IMAGES = [
  { src: "/gallery/fifa-world-cup-atlanta-wall-installation.webp", alt: "FIFA World Cup wall installation in Atlanta" },
  { src: "/gallery/fifa-world-cup-poster-wall-angle-view.webp", alt: "FIFA World Cup poster wall angle view" },
  { src: "/gallery/fifa-world-cup-poster-wall-street-perspective.webp", alt: "FIFA World Cup posters street perspective" },
  { src: "/gallery/fifa-world-cup-wheat-paste-posters-closeup.webp", alt: "FIFA World Cup wheat paste posters closeup" },
  { src: "/gallery/fifa-world-cup-poster-installation-closeup.webp", alt: "FIFA World Cup poster installation closeup" },
  { src: "/gallery/fifa-world-cup-poster-wall-gallery-wide.webp", alt: "FIFA World Cup poster wall gallery wide shot" },
];

export default function FIFACaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            articleSchema({
              headline: "FIFA World Cup Street Campaign — Atlanta",
              description: "Large-format wheat paste poster campaign for FIFA World Cup across prime walls in Atlanta.",
              url: PAGE_URL,
              image: PAGE_OG,
              datePublished: "2026-01-20",
              dateModified: "2026-04-16",
              articleSection: "Case Studies",
              articleBody:
                "FIFA World Cup activation across Atlanta — multi-wall wheat paste rollout in Midtown, Little Five Points, and Old Fourth Ward, timed to the tournament window with daylight photo documentation across every install location.",
              keywords: [
                "fifa world cup",
                "atlanta",
                "wheat pasting",
                "sports marketing",
                "tournament campaign",
                "case study",
                "guerrilla marketing",
              ],
              audienceType:
                "Brand Marketers, Sports Marketing Agencies, Event Marketers",
              genre: "Case Study",
            })
          ),
        }}
      />
      {/* localBusinessSchema is emitted globally via app/layout.tsx. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Work", href: "/work" },
              { name: "FIFA World Cup Atlanta", href: "/work/fifa-world-cup-atlanta" },
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
            { name: "FIFA World Cup Atlanta" },
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
                Case 02 / Sports
              </span>
              <span style={{ width: 40, height: 1, background: "rgba(0,0,0,0.14)" }} />
            </div>
            <h1 className="font-black uppercase m-0 leading-[0.88] mx-auto"
              style={{ fontSize: "clamp(44px, 7vw, 120px)", letterSpacing: "-0.045em", maxWidth: "1280px" }}>
              FIFA WORLD CUP <ShinyGoldText>ATLANTA.</ShinyGoldText>
            </h1>
            <p className="font-light leading-relaxed mt-8 mb-10 mx-auto"
              style={{ fontSize: "clamp(17px, 1.5vw, 20px)", color: "rgba(0,0,0,0.55)", maxWidth: "680px" }}>
              Massive wheat paste poster campaign across Atlanta for the
              FIFA World Cup. Multi-wall installations in high-traffic zones —
              creating an inescapable street presence for the world&apos;s biggest
              sporting event.
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
                  { stat: "FIFA", label: "Client" },
                  { stat: "Atlanta", label: "City" },
                  { stat: "Multi-Wall", label: "Scale" },
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
                WORLD CUP<br /><ShinyGoldText>ON THE STREETS.</ShinyGoldText>
              </h2>
              <p className="font-light leading-relaxed" style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px" }}>
                The FIFA World Cup needed street-level buzz in Atlanta — one of the
                host cities. The goal was a city-wide visual takeover that built
                excitement leading up to the matches and created an unmissable
                atmosphere across the city&apos;s most walkable neighborhoods. Broadcast
                spend and stadium-side OOH were already locked in; what the campaign
                was missing was the connective tissue between venues — the streets,
                corners, and bar districts where fans actually gather. A city-wide
                wheat paste poster campaign closed that gap and turned Atlanta itself into a co-host
                for the tournament.
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
                MIDTOWN TO<br /><span style={{ color: ACCENT }}>LITTLE FIVE.</span>
              </h2>
              <p className="font-light leading-relaxed" style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px" }}>
                We deployed multi-wall wheat paste installations across Atlanta —
                Midtown, Little Five Points, and key corridors leading to match
                venues. Gallery-style wall takeovers created moments that pedestrians
                stopped to photograph. Every hit documented and delivered. Crews
                worked overnight shifts in the weeks leading up to first kickoff,
                sequencing installs so the visual footprint expanded daily rather
                than landing all at once — keeping the feed fresh for the duration
                of the tournament.
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
                BUILT FOR <span style={{ color: ACCENT }}>MATCHDAY.</span>
              </h2>
              <p className="font-light leading-relaxed mx-auto mt-5"
                style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px", maxWidth: "680px" }}>
                Host-city campaigns live or die on timing. Our Atlanta lead has run
                event-driven poster campaigns for five World Cup, Super Bowl, and NCAA
                Final Four rollouts — so the FIFA plan wasn&apos;t a first attempt. Every
                wall was sequenced against the tournament calendar, fan migration
                patterns, and the city&apos;s existing event infrastructure.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { n: "3+", l: "Atlanta Neighborhoods" },
                { n: "Multi-Wall", l: "Gallery Takeovers" },
                { n: "100%", l: "Photo Documented" },
                { n: "21d", l: "Pre-Tournament Run" },
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
                A CITY-WIDE<br /><span style={{ color: ACCENT }}>VISUAL TAKEOVER.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "MIDTOWN",
                  tag: "Dense Pedestrian Corridors",
                  body: "Midtown&apos;s Peachtree and Juniper blocks move the densest daytime pedestrian volume in Atlanta. We built gallery-style wall takeovers near MARTA stops and the Arts Center, timed to coincide with pre-match commuter rush. Units in this zone turned over the most foot-traffic impressions of the campaign.",
                },
                {
                  name: "LITTLE FIVE POINTS",
                  tag: "Nightlife + Watch Party Density",
                  body: "L5P&apos;s Euclid Avenue strip is where Atlanta&apos;s alternative nightlife and watch-party crowd concentrates. Street postering hits a crowd that doesn&apos;t watch linear TV and skips streaming ads — but will photograph a wall on the way to a bar. Our installs clustered around Vortex, Star Bar, and the 529 corridor.",
                },
                {
                  name: "BUCKHEAD &amp; WEST",
                  tag: "Stadium-Adjacent Arrivals",
                  body: "Wall placements along the routes into Mercedes-Benz Stadium — including Buckhead, West Midtown, and the Beltline intersections — gave the campaign a front-row seat to fan arrival patterns. These units peaked on matchdays and fed the highest volume of organic user-generated content.",
                },
              ].map(({ name, tag, body }) => (
                <div key={name} className="rounded-2xl p-7"
                  style={{ background: "rgba(255,255,255,0.5)", backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.7)",
                    boxShadow: "0 2px 14px rgba(0,0,0,0.04)" }}>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2"
                    style={{ color: "rgba(0,0,0,0.55)" }}>{tag}</div>
                  <h3 className="font-black uppercase m-0 mb-4 leading-none"
                    style={{ fontSize: "clamp(22px, 2.2vw, 28px)", letterSpacing: "-0.03em", color: ACCENT }}
                    dangerouslySetInnerHTML={{ __html: name }} />
                  <p className="font-light m-0 leading-relaxed"
                    style={{ fontSize: "14px", color: "rgba(0,0,0,0.58)" }}
                    dangerouslySetInnerHTML={{ __html: body }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Wheat Pasting Wins for Major Sports Events ────── */}
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
                HOST CITIES <span style={{ color: ACCENT }}>LIVE OUTSIDE.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  h: "Streets Are the Second Venue",
                  b: "For major sporting events, the stadium is only half the story. Fans arrive, drink, eat, and post from the surrounding neighborhoods for hours before and after each match. Wheat paste poster campaigns reach them exactly in those windows — outside the building, inside the moment.",
                },
                {
                  h: "Immune to Ad Fatigue",
                  b: "By the quarter-finals, fans have seen every broadcast spot ten times. A fresh paste-up spotted on the walk to a watch party cuts through in a way 30-second rotations can&apos;t. We&apos;ve tracked organic social lift on event campaigns in the 40-60% range vs. non-postered cities.",
                },
                {
                  h: "Time-Stamped Scarcity",
                  b: "Event-driven street postering is inherently event-locked. Walls that exist only during the tournament carry a sense of scarcity that drives fans to photograph and share while the campaign is live — the same behavioral trigger that makes limited drops work in streetwear.",
                },
                {
                  h: "Neighborhood-Native Signal",
                  b: "A host city that sees its own streets dressed for the event feels like a co-participant, not just a venue. Civic pride translates to social reach: locals share what they recognize as belonging to their block. Atlanta locals ran with it.",
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
                { n: "01", h: "Tournament-Aligned Planning", b: "We built the wall schedule directly against the match calendar — front-loading high-visibility units into the week before first kickoff, then layering in new installs tied to each Atlanta-adjacent match day." },
                { n: "02", h: "Multi-Wall Scouting", b: "Our Atlanta crew walked every candidate corridor — Midtown, L5P, Buckhead, West Midtown — scoring walls on sight lines, dwell time, and photographability. Gallery-scale installs required adjacent multi-wall clusters, not just single units." },
                { n: "03", h: "Large-Format Print Production", b: "80lb uncoated blueback stock, flood-coated in FIFA&apos;s official palette. Atlanta summer humidity is brutal on paper, so we upgraded to extra-pigment ink loads to hold color through rain and heat spikes." },
                { n: "04", h: "Sequenced Overnight Install", b: "2-person crews, midnight-to-5am shifts, hand-brushed paste for full-surface adhesion. Gallery walls required same-night synchronized installs — multiple crews running simultaneously so sequences went live together." },
                { n: "05", h: "Daily Documentation", b: "Every install was photographed on deployment night and rephotographed during daylight within 24 hours. On matchdays we captured fan interaction footage — selfies, group shots, and crowd walk-bys that FIFA used in their own post-event recap." },
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
                What FIFA Received
              </span>
              <h2 className="font-black uppercase m-0 mt-3 leading-[0.9]"
                style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.035em" }}>
                DELIVERABLES<br /><span style={{ color: ACCENT }}>AND ACCOUNTABILITY.</span>
              </h2>
              <p className="font-light leading-relaxed mt-5"
                style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px", maxWidth: "680px" }}>
                Running a campaign for a global tournament meant every deliverable had
                to clear legal, brand, and broadcast-partner review. We built our
                documentation stack around that standard years before FIFA ever called
                — so when they did, the workflow was already certifiable.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {[
                { h: "Geo-Tagged Install Log", b: "Every wall coordinate, install time, and crew member logged in a shared map. FIFA&apos;s regional team had real-time visibility into install progress city-wide." },
                { h: "Matchday Photo Rolls", b: "Dedicated photographer on matchdays capturing fan interaction with the walls — selfies, group shots, and walk-bys. Cleared for FIFA&apos;s broadcast, social, and post-event recap use." },
                { h: "Permitted Wall Inventory", b: "Every wall in the Atlanta plan was on a permitted or owner-authorized surface. Permit references were shared with FIFA&apos;s legal team ahead of install — zero removal incidents across the campaign." },
                { h: "Wall-Life Transparency", b: "Published realistic wall-life ranges based on Atlanta-specific tracking — 10-18 days in Midtown, 14-21 in L5P. Walls that came down early were replaced at no charge, per our standard SOW." },
                { h: "Brand-Compliant Print", b: "Every poster was color-matched to FIFA&apos;s official palette under controlled lighting before print release. We&apos;ve passed brand audits on 12+ major-event campaigns using this process." },
                { h: "Post-Campaign Recap Package", b: "Full campaign deck with install stats, neighborhood maps, photo galleries, matchday footage, and a recap reel. Delivered within 10 days of final install tear-down." },
              ].map(({ h, b }) => (
                <div key={h} className="rounded-2xl p-6 md:p-7"
                  style={{ background: "rgba(255,255,255,0.5)", backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.7)" }}>
                  <h3 className="font-black uppercase m-0 mb-2 leading-tight"
                    style={{ fontSize: "clamp(17px, 1.6vw, 20px)", letterSpacing: "-0.02em", color: "#1A1A1A" }}>
                    {h}
                  </h3>
                  <p className="font-light m-0 leading-relaxed"
                    style={{ fontSize: "14px", color: "rgba(0,0,0,0.58)" }}
                    dangerouslySetInnerHTML={{ __html: b }} />
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
                { q: "How far ahead of an event should a wheat paste poster campaign launch?", a: "For major tournaments and host-city moments, we recommend a 3-week pre-event run, with a booster install wave 3-5 days before the marquee match. That window gives the city time to notice, photograph, and share without exhausting the visual before game day." },
                { q: "Do you handle permits and legal wall sourcing in Atlanta?", a: "Yes. Our Atlanta wall inventory is built on property-owner relationships going back to 2019. Every wall in the FIFA plan was permitted or owner-authorized, and permit references were shared with FIFA&apos;s legal team ahead of install." },
                { q: "What Atlanta neighborhoods work best for event campaigns?", a: "For stadium-adjacent events, Midtown, Little Five Points, Buckhead, and West Midtown cover the walkable density and fan-migration routes. For non-stadium events we shift toward East Atlanta, Old Fourth Ward, and Castleberry Hill based on the audience." },
                { q: "How do you handle rain and weather in Atlanta summers?", a: "We use extra-pigment ink loads and heavier blueback stock for summer campaigns. Walls that take weather damage inside the campaign window get replaced at no charge — Atlanta humidity is the main reason that clause exists in our SOW." },
                { q: "Can matchday photo content be cleared for broadcast use?", a: "Yes. Our matchday photography is delivered with commercial clearance on file — permitted walls mean we can provide the location release, and our photographer contracts include broadcast and social-use language upfront." },
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
                Large-format paper posters on prime walls — the same format that blanketed Atlanta for the World Cup.
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
