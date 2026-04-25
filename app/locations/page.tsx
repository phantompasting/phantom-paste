import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import ShinyGoldText from "@/components/ShinyGoldText";
import Breadcrumb from "@/components/Breadcrumb";
import SiteFooter from "@/components/SiteFooter";
import TrustBar from "@/components/TrustBar";
import { BUSINESS } from "@/lib/business";
import { collectionPageSchema, faqPageSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";

const PAGE_URL = `${BUSINESS.url}/locations`;
const PAGE_TITLE = "Guerrilla Marketing Locations";
const PAGE_DESC =
  "Wheat pasting and poster campaigns in New York, Los Angeles, Miami, Chicago, Atlanta, and 50+ other US cities. Get a custom quote for your city.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Guerrilla Marketing Locations | Phantom Pasting",
    description: PAGE_DESC,
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: `${BUSINESS.url}${BUSINESS.ogImageDefault}`,
        width: BUSINESS.ogImageWidth,
        height: BUSINESS.ogImageHeight,
        alt: "Phantom Pasting guerrilla marketing across US cities",
      },
    ],
  },
};

const ACCENT = "#D4A010";

// Statewide coverage pages — capture state-level search intent that the
// city pages can't address (e.g. "wheat pasting georgia" / "illinois").
// Rendered as a separate section below the city grid so the city cards
// remain the primary visual hierarchy.
const STATES = [
  {
    name: "Georgia",
    state: "GA",
    slug: "georgia",
    tagline: "Statewide rollouts across 6 GA markets",
    cities: ["Atlanta", "Savannah", "Athens", "Augusta", "Macon", "Columbus"],
    desc: "Atlanta drives the volume, but Savannah, Athens, Augusta, Macon, and Columbus each carry walkable corridors competitors ignore. Statewide rollouts in a single brief.",
  },
  {
    name: "Illinois",
    state: "IL",
    slug: "illinois",
    tagline: "Chicago plus 5 secondary IL markets",
    cities: ["Chicago", "Naperville", "Champaign-Urbana", "Rockford", "Peoria", "Springfield"],
    desc: "Most agencies treat Illinois as Chicago-only. We run Chicago plus the under-served secondary markets where wall-space competition is dramatically lower.",
  },
];

const CITIES = [
  {
    name: "New York",
    state: "NY",
    slug: "new-york",
    tagline: "The highest-density street market in the US",
    neighborhoods: ["SoHo", "Williamsburg", "Lower East Side", "Bushwick"],
    desc: "New York is the gold standard for guerrilla marketing. Every cultural moment that matters breaks here first — and wheat pasting is how you claim your spot on the wall.",
  },
  {
    name: "Los Angeles",
    state: "CA",
    slug: "los-angeles",
    tagline: "Where street culture and fashion collide",
    neighborhoods: ["Melrose", "Silver Lake", "DTLA", "Echo Park"],
    desc: "LA runs on visual culture. From Melrose to Silver Lake, the city's creative class is constantly looking at walls — and sharing what they see. This is where brands become icons.",
  },
  {
    name: "Miami",
    state: "FL",
    slug: "miami",
    tagline: "Year-round events, year-round foot traffic",
    neighborhoods: ["Wynwood", "Miami Beach", "Little Havana", "Brickell"],
    desc: "Miami's Wynwood district is the street art capital of the South. With year-round events, festivals, and one of the most photographed neighborhoods in the world, Miami is a perpetual launch pad.",
  },
  {
    name: "Chicago",
    state: "IL",
    slug: "chicago",
    tagline: "Midwest's most walkable city for street marketing",
    neighborhoods: ["Wicker Park", "River North", "Logan Square", "Pilsen"],
    desc: "Chicago's dense neighborhoods and massive foot traffic make it one of the best-value street marketing cities in the country. Wicker Park and Pilsen are where culture moves first.",
  },
  {
    name: "Atlanta",
    state: "GA",
    slug: "atlanta",
    tagline: "The creative capital of the South",
    neighborhoods: ["Little Five Points", "Midtown", "Old Fourth Ward", "Buckhead"],
    desc: "Atlanta is the hub of Southern music, film, and culture — and it's growing fast. Every major tour, album drop, and sports event passes through ATL, making it a must for street campaigns.",
  },
];

const FAQS = [
  {
    q: "Do you run campaigns outside of the 5 listed cities?",
    a: "Yes — the 5 city pages are our flagship markets, but we operate in 50+ US cities. If your target city isn't listed, contact us and we'll build a custom quote. We've run campaigns from Austin to Seattle to Nashville.",
  },
  {
    q: "How do you know the best walls and spots in each city?",
    a: "We've been running campaigns since 2014. Our local crews in each market know which walls get the most foot traffic, which neighborhoods index highest for your target audience, and which locations have the best longevity for posted materials.",
  },
  {
    q: "Can I target multiple cities in one campaign?",
    a: "Absolutely. Multi-city campaigns are one of our specialties — coordinated installs across multiple markets on the same weekend, with a single unified campaign report delivered after. This is what a Full Impact Campaign is built for.",
  },
  {
    q: "How far in advance do I need to book?",
    a: "We recommend 2–3 weeks minimum for a single city, 3–4 weeks for multi-city. Rush timelines are possible — contact us and we'll tell you what's feasible in your market.",
  },
];

const GLASS = {
  background: "rgba(255,255,255,0.35)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.6)",
} as const;

export default function LocationsHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            collectionPageSchema({
              name: "Guerrilla Marketing Locations — Phantom Pasting",
              description: PAGE_DESC,
              url: PAGE_URL,
              items: [
                ...CITIES.map((c) => ({
                  name: `Guerrilla Marketing in ${c.name}, ${c.state}`,
                  url: `${BUSINESS.url}/locations/${c.slug}`,
                })),
                ...STATES.map((s) => ({
                  name: `Wheat Pasting Across ${s.name}`,
                  url: `${BUSINESS.url}/locations/${s.slug}`,
                })),
              ],
            })
          ),
        }}
      />
      {/* localBusinessSchema is emitted globally via app/layout.tsx. */}
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
              { name: "Locations", href: "/locations" },
            ])
          ),
        }}
      />

      <div style={{ background: "transparent", minHeight: "100dvh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Locations" },
          ]}
        />
        <TrustBar />

        {/* ── Hero (split-screen) ───────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] lg:min-h-[660px] items-center">
              <div className="relative z-10 flex flex-col justify-center py-16 md:py-20 lg:py-24 lg:pr-16">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase mb-6"
                  style={{ color: "rgba(0,0,0,0.55)" }}>
                  <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                  US Markets
                </span>
                <h1 className="font-black uppercase m-0 leading-[0.88]"
                  style={{ fontSize: "clamp(48px, 7vw, 100px)", letterSpacing: "-0.04em" }}>
                  WE HIT EVERY<br /><ShinyGoldText>MAJOR MARKET.</ShinyGoldText>
                </h1>
                <p className="font-light leading-relaxed mt-8 mb-10"
                  style={{ fontSize: "clamp(17px, 1.6vw, 19px)", color: "rgba(0,0,0,0.5)", maxWidth: "480px" }}>
                  Phantom Pasting runs wheat pasting and poster campaigns across 50+ US cities.
                  Five flagship markets, unlimited reach. Name your city — we can hit it.
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
                    { stat: "5", label: "Flagship Cities" },
                    { stat: "50+", label: "Total Markets" },
                    { stat: "100%", label: "Documented" },
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

              <div className="relative hidden lg:block h-[660px] overflow-hidden">
                <span aria-hidden className="absolute right-0 top-1/2 font-black uppercase pointer-events-none select-none"
                  style={{ fontSize: "clamp(80px, 12vw, 180px)", letterSpacing: "-0.06em",
                    color: "rgba(212,160,16,0.05)", lineHeight: 1,
                    writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}>
                  CITIES
                </span>
                <div className="absolute top-10 right-0 rounded-2xl overflow-hidden"
                  style={{ width: "82%", height: "80%", transform: "rotate(1.8deg)",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.20), 0 4px 14px rgba(0,0,0,0.10)" }}>
                  <Image src="/gallery/fifa-world-cup-atlanta-wall-installation.webp"
                    alt="Multi-city wheat paste campaign" fill style={{ objectFit: "cover" }}
                    sizes="(max-width: 1024px) 0vw, 40vw" loading="lazy" />
                </div>
                <div className="absolute bottom-10 left-2 rounded-xl overflow-hidden"
                  style={{ width: "50%", height: "48%", transform: "rotate(-2.2deg)",
                    boxShadow: "0 16px 48px rgba(0,0,0,0.26), 0 3px 10px rgba(0,0,0,0.12)" }}>
                  <Image src="/gallery/fashionpass-wheat-paste-street-postering-wall-los-angeles.webp"
                    alt="FashionPass wheat paste poster campaign wall in LA" fill style={{ objectFit: "cover" }}
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
                    50+
                  </div>
                  <div className="font-mono text-[8px] tracking-[0.3em] uppercase mt-1"
                    style={{ color: "rgba(0,0,0,0.55)" }}>
                    US Cities
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── City Cards ────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CITIES.map(({ name, state, slug, tagline, neighborhoods, desc }) => (
              <Link
                key={slug}
                href={`/locations/${slug}`}
                className="no-underline group rounded-3xl p-7 flex flex-col justify-between gap-6 transition-all duration-200"
                style={{ ...GLASS, minHeight: "280px" }}
              >
                <div>
                  <div className="font-mono text-[9px] tracking-[0.35em] uppercase mb-3"
                    style={{ color: "rgba(0,0,0,0.55)" }}>
                    {state} · {tagline}
                  </div>
                  <h2 className="font-black uppercase m-0 mb-4 leading-[0.9]"
                    style={{ fontSize: "clamp(28px, 3vw, 40px)", letterSpacing: "-0.035em", color: "#1A1A1A" }}>
                    {name}<span style={{ color: ACCENT }}>.</span>
                  </h2>
                  <p className="font-light leading-relaxed m-0"
                    style={{ fontSize: "14px", color: "rgba(0,0,0,0.55)" }}>
                    {desc}
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {neighborhoods.map((n) => (
                      <span key={n}
                        className="font-mono text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(0,0,0,0.05)", color: "rgba(0,0,0,0.58)" }}>
                        {n}
                      </span>
                    ))}
                  </div>
                  <span className="font-bold text-[11px] tracking-[0.2em] uppercase inline-flex items-center gap-1.5"
                    style={{ color: ACCENT }}>
                    View {name} <span className="cta-arrow">→</span>
                  </span>
                </div>
              </Link>
            ))}

            {/* +50 Cities card */}
            <Link
              href="/contact"
              className="no-underline rounded-3xl p-7 flex flex-col justify-center items-center text-center gap-4"
              style={{ border: `1.5px dashed rgba(212,160,16,0.4)`, background: "rgba(212,160,16,0.04)", minHeight: "280px" }}
            >
              <div className="font-black uppercase leading-[0.9]"
                style={{ fontSize: "clamp(36px, 4vw, 52px)", letterSpacing: "-0.04em", color: ACCENT }}>
                50+<br />MORE
              </div>
              <p className="font-light m-0"
                style={{ fontSize: "13px", color: "rgba(0,0,0,0.58)", maxWidth: "200px" }}>
                Austin, Nashville, Seattle, Denver, Portland, and beyond.
              </p>
              <span className="font-bold text-[11px] tracking-[0.2em] uppercase"
                style={{ color: ACCENT }}>
                Get a Custom Quote →
              </span>
            </Link>
          </div>
        </section>

        {/* ── Statewide Coverage ────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.3em] uppercase mb-5"
              style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Statewide Coverage
            </span>
            <h2 className="font-black uppercase m-0 mb-3 leading-[0.9]"
              style={{ fontSize: "clamp(28px, 3.8vw, 50px)", letterSpacing: "-0.035em" }}>
              ROLL THE WHOLE STATE<span style={{ color: ACCENT }}>.</span>
            </h2>
            <p className="font-light leading-relaxed mb-10 max-w-[640px]"
              style={{ fontSize: "15px", color: "rgba(0,0,0,0.55)" }}>
              When the brief is bigger than a single metro — fashion-week tour, statewide product launch,
              college-market saturation — these state pages anchor the multi-city rollout under one quote.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {STATES.map(({ name, state, slug, tagline, cities, desc }) => (
                <Link
                  key={slug}
                  href={`/locations/${slug}`}
                  className="no-underline group rounded-3xl p-7 flex flex-col justify-between gap-6 transition-all duration-200"
                  style={{ ...GLASS, minHeight: "260px" }}
                >
                  <div>
                    <div className="font-mono text-[9px] tracking-[0.35em] uppercase mb-3"
                      style={{ color: "rgba(0,0,0,0.55)" }}>
                      {state} · {tagline}
                    </div>
                    <h3 className="font-black uppercase m-0 mb-4 leading-[0.9]"
                      style={{ fontSize: "clamp(28px, 3vw, 40px)", letterSpacing: "-0.035em", color: "#1A1A1A" }}>
                      {name}<span style={{ color: ACCENT }}>.</span>
                    </h3>
                    <p className="font-light leading-relaxed m-0"
                      style={{ fontSize: "14px", color: "rgba(0,0,0,0.55)" }}>
                      {desc}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cities.map((c) => (
                        <span key={c}
                          className="font-mono text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full"
                          style={{ background: "rgba(0,0,0,0.05)", color: "rgba(0,0,0,0.58)" }}>
                          {c}
                        </span>
                      ))}
                    </div>
                    <span className="font-bold text-[11px] tracking-[0.2em] uppercase inline-flex items-center gap-1.5"
                      style={{ color: ACCENT }}>
                      View {name} <span className="cta-arrow">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── How We Choose Locations ───────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[800px]">
            <span className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.3em] uppercase mb-6"
              style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              How We Work
            </span>
            <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]"
              style={{ fontSize: "clamp(30px, 4vw, 56px)", letterSpacing: "-0.04em" }}>
              HOW WE CHOOSE THE <ShinyGoldText>RIGHT SPOTS.</ShinyGoldText>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
              {[
                { num: "01", title: "Foot Traffic First", body: "We map your target neighborhood against foot traffic data — pedestrian count, transit proximity, event density." },
                { num: "02", title: "Audience Alignment", body: "Every neighborhood has a demographic fingerprint. We match your brand to the streets where your actual audience walks." },
                { num: "03", title: "Wall Quality", body: "Not every wall is created equal. We know which surfaces hold paste, which get the most eyes, and which last longest." },
              ].map(({ num, title, body }) => (
                <div key={num} className="rounded-2xl p-6" style={{ ...GLASS }}>
                  <div className="font-black mb-3" style={{ fontSize: "24px", color: ACCENT, letterSpacing: "-0.03em" }}>{num}</div>
                  <div className="font-black uppercase mb-2 leading-tight"
                    style={{ fontSize: "13px", letterSpacing: "-0.01em", color: "#1A1A1A" }}>
                    {title}
                  </div>
                  <p className="font-light leading-relaxed m-0"
                    style={{ fontSize: "13px", color: "rgba(0,0,0,0.55)" }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
            <p className="font-light leading-relaxed"
              style={{ fontSize: "15px", color: "rgba(0,0,0,0.55)" }}>
              Every campaign starts with a location strategy — not just a list of walls. We build a
              deployment map based on your brand, your target audience, and your city, then execute and
              photograph every placement. Want to see what a{" "}
              <Link href="/services/wheat-pasting" className="no-underline font-medium"
                style={{ color: ACCENT }}>
                wheat pasting campaign
              </Link>
              {" "}looks like from start to finish? Or check our{" "}
              <Link href="/services/full-impact-campaigns" className="no-underline font-medium"
                style={{ color: ACCENT }}>
                Full Impact service
              </Link>
              {" "}for multi-format city saturation.
            </p>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[800px]">
            <span className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.3em] uppercase mb-6"
              style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              FAQ
            </span>
            <h2 className="font-black uppercase m-0 mb-10 leading-[0.9]"
              style={{ fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-0.035em" }}>
              LOCATION QUESTIONS<span style={{ color: ACCENT }}>.</span>
            </h2>
            <div className="flex flex-col gap-px" style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.06)" }}>
              {FAQS.map(({ q, a }) => (
                <div key={q} className="p-6 md:p-8"
                  style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}>
                  <h3 className="font-black uppercase m-0 mb-3 leading-tight"
                    style={{ fontSize: "clamp(15px, 1.6vw, 18px)", letterSpacing: "-0.01em", color: "#1A1A1A" }}>
                    {q}
                  </h3>
                  <p className="font-light leading-relaxed m-0"
                    style={{ fontSize: "14px", color: "rgba(0,0,0,0.55)" }}>
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32 text-center">
          <div className="max-w-[600px] mx-auto">
            <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]"
              style={{ fontSize: "clamp(36px, 5vw, 70px)", letterSpacing: "-0.04em" }}>
              YOUR CITY,<br /><ShinyGoldText>YOUR WALLS.</ShinyGoldText>
            </h2>
            <p className="font-light leading-relaxed mb-10"
              style={{ color: "rgba(0,0,0,0.5)", fontSize: "15px" }}>
              Tell us your market and your timeline. We&apos;ll respond within 24 hours
              with a custom location strategy and quote.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact"
                className="service-cta relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-10 py-5 rounded-full overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #F5CA20 100%)`, color: "#FFF",
                  boxShadow: `0 6px 32px rgba(212,160,16,0.55), 0 1px 0 rgba(255,255,255,0.25) inset` }}>
                <span className="absolute inset-0 pointer-events-none rounded-full"
                  style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 55%)" }} />
                Get a Quote <span className="cta-arrow">→</span>
              </Link>
              <Link href="/services"
                className="inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.18em] uppercase no-underline px-8 py-5 rounded-full"
                style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(0,0,0,0.12)",
                  color: "rgba(0,0,0,0.72)", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
                View Services <span className="cta-arrow">→</span>
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
