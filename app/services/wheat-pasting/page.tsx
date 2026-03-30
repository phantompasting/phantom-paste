import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import ShinyGoldText from "@/components/ShinyGoldText";

export const metadata: Metadata = {
  title: "Wheat Pasting Services | Large Format Street Posters | Phantom Pasting",
  description:
    "Large-format wheat paste poster advertising on prime urban walls across 50+ US cities. We handle print, install, and 100% photo documentation. Get a quote.",
  keywords: [
    "wheat pasting service",
    "wheat paste advertising",
    "wheat paste posters",
    "wild posting",
    "large format street advertising",
    "guerrilla marketing posters",
  ],
  alternates: { canonical: "https://phantompasting.com/services/wheat-pasting" },
  openGraph: {
    title: "Wheat Pasting Services | Large Format Street Posters | Phantom Pasting",
    description:
      "Large-format wheat paste poster advertising on prime urban walls across 50+ US cities. Print, install, document.",
    url: "https://phantompasting.com/services/wheat-pasting",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Wheat Pasting",
  alternateName: "Wild Posting",
  description:
    "Large-format wheat paste poster advertising installed on prime urban walls across 50+ US cities. Includes print, installation, and photo documentation.",
  url: "https://phantompasting.com/services/wheat-pasting",
  provider: {
    "@type": "Organization",
    name: "Phantom Pasting",
    url: "https://phantompasting.com",
  },
  areaServed: "United States",
  offers: {
    "@type": "Offer",
    description: "Custom wheat pasting campaigns — print, install, and photo documentation included.",
    url: "https://phantompasting.com/contact",
  },
};

const STEPS = [
  {
    num: "01",
    title: "DESIGN & PRINT",
    desc: "Send us your artwork or work with our team. We print on 28# bond paper or 80# coated stock — sizes from 24\"×36\" to 48\"×72\" jumbo wall takeovers.",
  },
  {
    num: "02",
    title: "LOCATION SCOUT",
    desc: "Our local crews identify prime walls in the highest-traffic neighborhoods of your target city — the spots where your audience lives, works, and moves.",
  },
  {
    num: "03",
    title: "INSTALL & DOCUMENT",
    desc: "Crews install overnight. Every location is photographed, timestamped, and delivered in a clean campaign report. Ready to post on your own channels.",
  },
];

const USE_CASES = [
  { label: "Music Artists", desc: "Album drops, tour announcements, event promos" },
  { label: "Fashion Brands", desc: "Product launches, streetwear drops, lookbook campaigns" },
  { label: "Film & TV", desc: "Opening weekend pushes, premiere promotions" },
  { label: "Sports Events", desc: "Game-day campaigns, championship moments" },
  { label: "Tech & Apps", desc: "City-by-city user acquisition campaigns" },
  { label: "Restaurants & Bars", desc: "Grand openings, neighborhood awareness" },
];

const ACCENT = "#D4A010";

export default function WheatPastingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div style={{ background: "#FFFEF8", minHeight: "100vh", color: "#1A1A1A" }}>
        <SiteNav />

        {/* ── Page Hero ─────────────────────────────────────────── */}
        <section className="relative px-5 sm:px-8 md:px-12 lg:px-16 pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
          {/* Background word */}
          <span
            aria-hidden
            className="absolute inset-x-0 top-6 text-center font-black uppercase pointer-events-none select-none"
            style={{
              fontSize: "clamp(90px, 18vw, 280px)",
              letterSpacing: "-0.05em",
              color: "rgba(212,160,16,0.06)",
              lineHeight: 1,
            }}
          >
            WHEAT
          </span>

          <div className="relative z-10 max-w-[900px]">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase mb-6"
              style={{ color: "rgba(0,0,0,0.4)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Wheat Pasting
            </span>

            <h1
              className="font-black uppercase m-0 leading-[0.88]"
              style={{ fontSize: "clamp(48px, 8vw, 110px)", letterSpacing: "-0.04em" }}
            >
              WHEAT PASTING<br />
              <ShinyGoldText>THAT OWNS WALLS.</ShinyGoldText>
            </h1>

            <p
              className="font-light leading-relaxed mt-8 mb-10 max-w-[540px]"
              style={{ fontSize: "clamp(15px, 1.6vw, 18px)", color: "rgba(0,0,0,0.5)" }}
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
                  boxShadow: "0 4px 28px rgba(0,0,0,0.42), 0 1px 0 rgba(255,255,255,0.08) inset",
                }}
              >
                <span className="absolute inset-0 pointer-events-none rounded-full"
                  style={{ background: "linear-gradient(180deg, rgba(196,162,18,0.28) 0%, transparent 48%)" }} />
                Get a Quote
                <span className="cta-arrow" style={{ color: ACCENT }}>→</span>
              </Link>
              <Link
                href="/#work"
                className="hero-cta-secondary inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.18em] uppercase no-underline px-6 py-4 rounded-full"
                style={{
                  color: "rgba(0,0,0,0.72)",
                  background: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(0,0,0,0.14)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}
              >
                See Our Work
                <span className="cta-arrow">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Stats bar ─────────────────────────────────────────── */}
        <section
          className="px-5 sm:px-8 md:px-12 lg:px-16 py-8 border-y"
          style={{ background: "rgba(242,240,236,0.6)", borderColor: "rgba(0,0,0,0.06)" }}
        >
          <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-6 text-center md:text-left md:flex md:items-center md:gap-16">
            {[
              { stat: "500+", label: "Campaigns" },
              { stat: "50+", label: "US Cities" },
              { stat: "100%", label: "Photo Documented" },
            ].map(({ stat, label }) => (
              <div key={label}>
                <div
                  className="font-black uppercase leading-none"
                  style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.04em", color: ACCENT }}
                >
                  {stat}
                </div>
                <div className="font-mono text-[9px] tracking-[0.3em] uppercase mt-1"
                  style={{ color: "rgba(0,0,0,0.4)" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── What is wheat pasting ─────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-4 flex items-center gap-2"
                style={{ color: "rgba(0,0,0,0.35)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                What It Is
              </span>
              <h2
                className="font-black uppercase m-0 mb-6 leading-[0.9]"
                style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}
              >
                STREET-LEVEL<br />
                <span style={{ color: ACCENT }}>IMPACT</span> AT SCALE.
              </h2>
              <p className="font-light leading-relaxed mb-5"
                style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px", maxWidth: "480px" }}>
                Wheat pasting is the original street advertising format — large printed posters adhered
                directly to urban walls using a wheat-starch paste. The result: bold, unmissable, and
                culturally embedded.
              </p>
              <p className="font-light leading-relaxed"
                style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px", maxWidth: "480px" }}>
                Unlike digital ads, a wheat-paste poster can&apos;t be scrolled past. It lives in your
                audience&apos;s neighborhood — on their commute, their lunch spot, their Saturday walk.
                It becomes part of the city texture.
              </p>
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
                    background: "rgba(242,240,236,0.7)",
                    border: "1px solid rgba(255,255,255,0.8)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                >
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2"
                    style={{ color: "rgba(0,0,0,0.35)" }}>
                    {label}
                  </div>
                  <div className="font-black uppercase leading-tight"
                    style={{ fontSize: "clamp(14px, 1.5vw, 18px)", color: "#1A1A1A", letterSpacing: "-0.02em" }}>
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ──────────────────────────────────────── */}
        <section
          className="px-5 sm:px-8 md:px-12 lg:px-16 py-20 md:py-28"
          style={{ background: "rgba(242,240,236,0.4)" }}
        >
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-14 md:mb-18">
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-4 flex items-center gap-2"
                style={{ color: "rgba(0,0,0,0.35)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                The Process
              </span>
              <h2
                className="font-black uppercase m-0 leading-[0.9]"
                style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}
              >
                HOW IT WORKS<span style={{ color: ACCENT }}>.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {STEPS.map((step) => (
                <div
                  key={step.num}
                  className="relative rounded-2xl p-8 md:p-10"
                  style={{
                    background: "rgba(248,247,244,0.9)",
                    border: "1px solid rgba(255,255,255,0.85)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9)",
                  }}
                >
                  <div className="font-mono text-[10px] tracking-[0.35em] uppercase mb-6"
                    style={{ color: ACCENT }}>
                    {step.num}
                  </div>
                  <h3
                    className="font-black uppercase m-0 mb-4 leading-[0.88]"
                    style={{ fontSize: "clamp(20px, 2vw, 28px)", letterSpacing: "-0.02em" }}
                  >
                    {step.title}<span style={{ color: ACCENT }}>.</span>
                  </h3>
                  <p className="font-light leading-relaxed m-0"
                    style={{ color: "rgba(0,0,0,0.52)", fontSize: "14px" }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Use Cases ─────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-14">
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-4 flex items-center gap-2"
                style={{ color: "rgba(0,0,0,0.35)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                Who Uses It
              </span>
              <h2
                className="font-black uppercase m-0 leading-[0.9]"
                style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}
              >
                BUILT FOR BRANDS<br />
                <span style={{ color: ACCENT }}>THAT MOVE CULTURE.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {USE_CASES.map(({ label, desc }) => (
                <div
                  key={label}
                  className="rounded-2xl p-6"
                  style={{
                    background: "rgba(242,240,236,0.6)",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    className="font-black uppercase leading-tight mb-2"
                    style={{ fontSize: "clamp(16px, 1.5vw, 20px)", letterSpacing: "-0.02em" }}
                  >
                    {label}
                  </div>
                  <p className="font-light m-0" style={{ color: "rgba(0,0,0,0.5)", fontSize: "13px" }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Other Services (internal links) ──────────────────── */}
        <section
          className="px-5 sm:px-8 md:px-12 lg:px-16 py-16"
          style={{ background: "rgba(242,240,236,0.4)", borderTop: "1px solid rgba(0,0,0,0.05)" }}
        >
          <div className="max-w-[1200px] mx-auto">
            <h2
              className="font-black uppercase m-0 mb-8 leading-[0.9]"
              style={{ fontSize: "clamp(20px, 2.5vw, 32px)", letterSpacing: "-0.025em" }}
            >
              MORE SERVICES<span style={{ color: ACCENT }}>.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/services/chalk-spray-stencils"
                className="no-underline group rounded-2xl p-7 flex items-center justify-between"
                style={{
                  background: "rgba(248,247,244,0.9)",
                  border: "1px solid rgba(0,0,0,0.07)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <div>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2"
                    style={{ color: "rgba(0,0,0,0.35)" }}>Service</div>
                  <div className="font-black uppercase leading-tight"
                    style={{ fontSize: "clamp(17px, 1.8vw, 22px)", letterSpacing: "-0.02em", color: "#1A1A1A" }}>
                    CHALK SPRAY<br />STENCILS
                  </div>
                </div>
                <span style={{ color: ACCENT, fontSize: "24px" }}>→</span>
              </Link>
              <Link
                href="/services/full-impact-campaigns"
                className="no-underline group rounded-2xl p-7 flex items-center justify-between"
                style={{
                  background: "rgba(248,247,244,0.9)",
                  border: "1px solid rgba(0,0,0,0.07)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <div>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2"
                    style={{ color: "rgba(0,0,0,0.35)" }}>Service</div>
                  <div className="font-black uppercase leading-tight"
                    style={{ fontSize: "clamp(17px, 1.8vw, 22px)", letterSpacing: "-0.02em", color: "#1A1A1A" }}>
                    FULL IMPACT<br />CAMPAIGNS
                  </div>
                </div>
                <span style={{ color: ACCENT, fontSize: "24px" }}>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 py-24 md:py-32 text-center">
          <div className="max-w-[700px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center justify-center gap-2"
              style={{ color: "rgba(0,0,0,0.35)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Ready to Hit the Streets?
            </span>
            <h2
              className="font-black uppercase m-0 mb-6 leading-[0.9]"
              style={{ fontSize: "clamp(38px, 6vw, 80px)", letterSpacing: "-0.04em" }}
            >
              LET&apos;S BUILD<br />
              <ShinyGoldText>YOUR CAMPAIGN.</ShinyGoldText>
            </h2>
            <p className="font-light leading-relaxed mb-10 mx-auto"
              style={{ color: "rgba(0,0,0,0.5)", fontSize: "15px", maxWidth: "420px" }}>
              Tell us your city, your timeline, and your vision.
              We&apos;ll respond within 24 hours with a custom street strategy.
            </p>
            <Link
              href="/contact"
              className="service-cta relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-10 py-5 rounded-full overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${ACCENT} 0%, #F5CA20 100%)`,
                color: "#FFF",
                boxShadow: `0 6px 32px rgba(212,160,16,0.55), 0 1px 0 rgba(255,255,255,0.25) inset`,
              }}
            >
              <span className="absolute inset-0 pointer-events-none rounded-full"
                style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 55%)" }} />
              Launch My Campaign
              <span className="cta-arrow">→</span>
            </Link>
          </div>
        </section>

        {/* ── Footer ────────────────────────────────────────────── */}
        <footer
          className="px-5 sm:px-8 md:px-12 lg:px-16 py-12 border-t"
          style={{ background: "rgba(242,240,236,0.7)", borderColor: "rgba(0,0,0,0.06)" }}
        >
          <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="font-black uppercase text-[14px] tracking-[0.05em] mb-1" style={{ color: "#1A1A1A" }}>
                Phantom<span style={{ color: ACCENT }}>Pasting</span>
              </div>
              <p className="font-mono text-[9px] tracking-[0.22em] uppercase m-0"
                style={{ color: "rgba(0,0,0,0.3)" }}>
                © 2026 — All Rights Reserved
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {[
                { label: "Wheat Pasting", href: "/services/wheat-pasting" },
                { label: "Chalk Stencils", href: "/services/chalk-spray-stencils" },
                { label: "Full Impact", href: "/services/full-impact-campaigns" },
                { label: "Contact", href: "/contact" },
                { label: "About", href: "/about" },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="footer-link font-light no-underline"
                  style={{ fontSize: "13px" }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
