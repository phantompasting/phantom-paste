import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import ShinyGoldText from "@/components/ShinyGoldText";

export const metadata: Metadata = {
  title: "Full Guerrilla Marketing Campaigns | Phantom Pasting",
  description:
    "End-to-end guerrilla marketing campaigns combining wheat pasting, wild posting, and chalk spray stencils. Total street domination across 50+ US cities.",
  keywords: [
    "guerrilla marketing campaign",
    "full street marketing campaign",
    "wheat pasting and wild posting",
    "end-to-end guerrilla marketing",
    "street advertising campaign",
    "multi-format street campaign",
  ],
  alternates: { canonical: "https://phantompasting.com/services/full-impact-campaigns" },
  openGraph: {
    title: "Full Guerrilla Marketing Campaigns | Phantom Pasting",
    description:
      "End-to-end guerrilla marketing combining wheat pasting, wild posting, and chalk stencils. Total street domination.",
    url: "https://phantompasting.com/services/full-impact-campaigns",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Full Impact Street Campaigns",
  description:
    "End-to-end guerrilla marketing campaigns combining wheat pasting, wild posting, and chalk spray stencil activations across 50+ US cities.",
  url: "https://phantompasting.com/services/full-impact-campaigns",
  provider: {
    "@type": "Organization",
    name: "Phantom Pasting",
    url: "https://phantompasting.com",
  },
  areaServed: "United States",
  offers: {
    "@type": "Offer",
    description: "Custom full-impact street campaigns — strategy, print, install, and documentation.",
    url: "https://phantompasting.com/contact",
  },
};

const PHASES = [
  {
    num: "01",
    title: "STRATEGY",
    desc: "We map your campaign objectives to a street strategy — which neighborhoods, which formats, which moments. City-specific planning with the local knowledge of our crews.",
  },
  {
    num: "02",
    title: "PRODUCTION",
    desc: "Large-format wheat paste posters printed and precision-cut chalk stencil templates produced in parallel. Ready to hit the streets on your timeline.",
  },
  {
    num: "03",
    title: "EXECUTION",
    desc: "Crews in every city deploy simultaneously — walls pasted, sidewalks stenciled, key intersections activated. High density in targeted zones for maximum visual saturation.",
  },
  {
    num: "04",
    title: "DOCUMENTATION",
    desc: "Every hit photographed. Timestamped campaign reports delivered with geo-tagged images ready to use as social content. 100% transparency on what ran where.",
  },
];

const INCLUDED = [
  "Wheat paste posters (24\"×36\" to 48\"×72\")",
  "Chalk spray stencil activations",
  "Multi-city simultaneous deployment",
  "Neighborhood & wall scouting",
  "Timestamped photo documentation",
  "Campaign report + social-ready assets",
];

const ACCENT = "#D4A010";

export default function FullImpactCampaignsPage() {
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
          <span
            aria-hidden
            className="absolute inset-x-0 top-4 text-center font-black uppercase pointer-events-none select-none"
            style={{
              fontSize: "clamp(70px, 14vw, 220px)",
              letterSpacing: "-0.05em",
              color: "rgba(212,160,16,0.06)",
              lineHeight: 1,
            }}
          >
            FULL IMPACT
          </span>

          <div className="relative z-10 max-w-[900px]">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase mb-6"
              style={{ color: "rgba(0,0,0,0.4)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Full Impact Campaigns
            </span>

            <h1
              className="font-black uppercase m-0 leading-[0.88]"
              style={{ fontSize: "clamp(48px, 8vw, 110px)", letterSpacing: "-0.04em" }}
            >
              TOTAL<br />
              <ShinyGoldText>STREET OWNERSHIP.</ShinyGoldText>
            </h1>

            <p
              className="font-light leading-relaxed mt-8 mb-10 max-w-[560px]"
              style={{ fontSize: "clamp(15px, 1.6vw, 18px)", color: "rgba(0,0,0,0.5)" }}
            >
              When you need to own a city, Full Impact combines wheat pasting, chalk stencils,
              and strategic multi-format deployment for total street presence. One team. One plan.
              Every corner.
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
                Plan My Campaign
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
              { stat: "10+", label: "Years Experience" },
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

        {/* ── What&apos;s Included ──────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-4 flex items-center gap-2"
                style={{ color: "rgba(0,0,0,0.35)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                What's Included
              </span>
              <h2
                className="font-black uppercase m-0 mb-6 leading-[0.9]"
                style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}
              >
                EVERY FORMAT.<br />
                <span style={{ color: ACCENT }}>ONE CAMPAIGN.</span>
              </h2>
              <p className="font-light leading-relaxed mb-8"
                style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px", maxWidth: "480px" }}>
                Full Impact campaigns are built for brands that want to dominate a market —
                not just touch it. We stack formats strategically so your messaging hits at
                eye level, wall level, and everywhere in between.
              </p>
              <Link
                href="/contact"
                className="service-cta relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-8 py-4 rounded-full overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${ACCENT} 0%, #F5CA20 100%)`,
                  color: "#FFF",
                  boxShadow: `0 4px 24px rgba(212,160,16,0.5), 0 1px 0 rgba(255,255,255,0.25) inset`,
                }}
              >
                <span className="absolute inset-0 pointer-events-none rounded-full"
                  style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 55%)" }} />
                Get Custom Pricing
                <span className="cta-arrow">→</span>
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              {INCLUDED.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-xl px-5 py-4"
                  style={{
                    background: "rgba(242,240,236,0.7)",
                    border: "1px solid rgba(255,255,255,0.8)",
                  }}
                >
                  <span
                    className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white font-bold text-[10px]"
                    style={{ background: ACCENT }}
                  >
                    ✓
                  </span>
                  <span className="font-light" style={{ fontSize: "14px", color: "rgba(0,0,0,0.7)" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Campaign Phases ───────────────────────────────────── */}
        <section
          className="px-5 sm:px-8 md:px-12 lg:px-16 py-20 md:py-28"
          style={{ background: "rgba(242,240,236,0.4)" }}
        >
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-14">
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-4 flex items-center gap-2"
                style={{ color: "rgba(0,0,0,0.35)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                The Process
              </span>
              <h2
                className="font-black uppercase m-0 leading-[0.9]"
                style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}
              >
                FOUR PHASES<span style={{ color: ACCENT }}>.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PHASES.map((phase) => (
                <div
                  key={phase.num}
                  className="rounded-2xl p-8 md:p-10"
                  style={{
                    background: "rgba(248,247,244,0.9)",
                    border: "1px solid rgba(255,255,255,0.85)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9)",
                  }}
                >
                  <div className="font-mono text-[10px] tracking-[0.35em] uppercase mb-6"
                    style={{ color: ACCENT }}>
                    {phase.num}
                  </div>
                  <h3
                    className="font-black uppercase m-0 mb-4 leading-[0.88]"
                    style={{ fontSize: "clamp(20px, 2vw, 28px)", letterSpacing: "-0.02em" }}
                  >
                    {phase.title}<span style={{ color: ACCENT }}>.</span>
                  </h3>
                  <p className="font-light leading-relaxed m-0"
                    style={{ color: "rgba(0,0,0,0.52)", fontSize: "14px" }}>
                    {phase.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Component Services ────────────────────────────────── */}
        <section
          className="px-5 sm:px-8 md:px-12 lg:px-16 py-16"
          style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
        >
          <div className="max-w-[1200px] mx-auto">
            <h2
              className="font-black uppercase m-0 mb-8 leading-[0.9]"
              style={{ fontSize: "clamp(20px, 2.5vw, 32px)", letterSpacing: "-0.025em" }}
            >
              INDIVIDUAL SERVICES<span style={{ color: ACCENT }}>.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/services/wheat-pasting"
                className="no-underline rounded-2xl p-7 flex items-center justify-between"
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
                    WHEAT<br />PASTING
                  </div>
                </div>
                <span style={{ color: ACCENT, fontSize: "24px" }}>→</span>
              </Link>
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
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2"
                    style={{ color: "rgba(0,0,0,0.35)" }}>Service</div>
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

        {/* ── Bottom CTA ────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 py-24 md:py-32 text-center">
          <div className="max-w-[700px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center justify-center gap-2"
              style={{ color: "rgba(0,0,0,0.35)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Ready to Own the Streets?
            </span>
            <h2
              className="font-black uppercase m-0 mb-6 leading-[0.9]"
              style={{ fontSize: "clamp(38px, 6vw, 80px)", letterSpacing: "-0.04em" }}
            >
              LET&apos;S PLAN<br />
              <ShinyGoldText>YOUR TAKEOVER.</ShinyGoldText>
            </h2>
            <p className="font-light leading-relaxed mb-10 mx-auto"
              style={{ color: "rgba(0,0,0,0.5)", fontSize: "15px", maxWidth: "420px" }}>
              Tell us your city, your launch date, and your ambition.
              We&apos;ll respond within 24 hours with a full campaign strategy.
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
                <Link key={label} href={href} className="footer-link font-light no-underline"
                  style={{ fontSize: "13px" }}>
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
