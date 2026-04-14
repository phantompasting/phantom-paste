import type { Metadata } from "next";
import Image from "next/image";
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
  alternates: { canonical: "https://www.phantompasting.com/services/full-impact-campaigns" },
  openGraph: {
    title: "Full Guerrilla Marketing Campaigns | Phantom Pasting",
    description:
      "End-to-end guerrilla marketing combining wheat pasting, wild posting, and chalk stencils. Total street domination.",
    url: "https://www.phantompasting.com/services/full-impact-campaigns",
    type: "website",
    images: [
      {
        url: "https://www.phantompasting.com/gallery/fifa-world-cup-poster-wall-gallery-wide.webp",
        width: 1200,
        height: 630,
        alt: "Full impact guerrilla marketing campaign — FIFA World Cup wall installation",
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.phantompasting.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.phantompasting.com/services/full-impact-campaigns" },
    { "@type": "ListItem", position: 3, name: "Full Impact Campaigns", item: "https://www.phantompasting.com/services/full-impact-campaigns" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Full Impact Street Campaigns",
  description:
    "End-to-end guerrilla marketing campaigns combining wheat pasting, wild posting, and chalk spray stencil activations across 50+ US cities.",
  url: "https://www.phantompasting.com/services/full-impact-campaigns",
  provider: { "@type": "Organization", name: "Phantom Pasting", url: "https://www.phantompasting.com" },
  areaServed: "United States",
  offers: {
    "@type": "Offer",
    description: "Custom full-impact street campaigns — strategy, print, install, and documentation.",
    url: "https://www.phantompasting.com/contact",
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
  'Wheat paste posters (24"×36" to 48"×72")',
  "Chalk spray stencil activations",
  "Multi-city simultaneous deployment",
  "Neighborhood & wall scouting",
  "Timestamped photo documentation",
  "Campaign report + social-ready assets",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is included in a full impact guerrilla marketing campaign?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full impact campaign combines wheat paste posters (24\"×36\" to 48\"×72\"), chalk spray stencil sidewalk activations, neighborhood and wall scouting, multi-city simultaneous deployment, timestamped photo documentation, and a complete campaign report with social-ready assets.",
      },
    },
    {
      "@type": "Question",
      name: "Can you run guerrilla marketing campaigns in multiple cities at the same time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Phantom Pasting has local crews in 50+ US cities and can deploy simultaneous multi-city campaigns. We coordinate all crews centrally so every market activates on the same day.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between wheat pasting and wild posting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wheat pasting uses a water-based paste adhesive to affix paper posters to walls. Wild posting is a broader term that can include both paste-applied and adhesive-backed posters on legal posting surfaces. Phantom Pasting uses both techniques depending on the location and surface.",
      },
    },
    {
      "@type": "Question",
      name: "How far in advance do I need to book a campaign?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Single-city campaigns typically need 1–2 weeks lead time from artwork approval to installation. Multi-city or large-scale campaigns require 2–4 weeks. Rush campaigns may be possible depending on availability — contact us to discuss your timeline.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get a quote for a guerrilla marketing campaign?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use the quote form on our contact page. Tell us your target city or cities, campaign budget, preferred format (wheat pasting, chalk stencils, or both), and your timeline. We respond within 24 hours.",
      },
    },
  ],
};

const ACCENT = "#D4A010";

export default function FullImpactCampaignsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ background: "transparent", minHeight: "100vh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />

        {/* ── Hero (split-screen) ───────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] lg:min-h-[660px] items-center">

              {/* LEFT — text + stats */}
              <div className="relative z-10 flex flex-col justify-center py-16 md:py-20 lg:py-24 lg:pr-16">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase mb-6"
                  style={{ color: "rgba(0,0,0,0.4)" }}>
                  <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                  Full Impact Campaigns
                </span>
                <h1 className="font-black uppercase m-0 leading-[0.88]"
                  style={{ fontSize: "clamp(48px, 7vw, 100px)", letterSpacing: "-0.04em" }}>
                  TOTAL<br /><ShinyGoldText>STREET OWNERSHIP.</ShinyGoldText>
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
                  <Link href="/gallery"
                    className="hero-cta-secondary inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.18em] uppercase no-underline px-6 py-4 rounded-full"
                    style={{ color: "rgba(0,0,0,0.72)", background: "rgba(255,255,255,0.9)",
                      border: "1px solid rgba(0,0,0,0.14)", boxShadow: "0 2px 12px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)" }}>
                    See Our Work <span className="cta-arrow">→</span>
                  </Link>
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
                      <div className="font-mono text-[9px] tracking-[0.3em] uppercase mt-1.5" style={{ color: "rgba(0,0,0,0.4)" }}>
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — image composition (desktop only) */}
              <div className="relative hidden lg:block h-[660px] overflow-hidden">
                {/* Ghost background label */}
                <span aria-hidden className="absolute right-0 top-1/2 font-black uppercase pointer-events-none select-none"
                  style={{ fontSize: "clamp(80px, 12vw, 180px)", letterSpacing: "-0.06em",
                    color: "rgba(212,160,16,0.05)", lineHeight: 1,
                    writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}>
                  IMPACT
                </span>

                {/* Primary image */}
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

                {/* Secondary image */}
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

                {/* Gold accent line */}
                <div aria-hidden className="absolute pointer-events-none"
                  style={{ top: "30%", left: "32%", width: "1px", height: "28%",
                    background: "linear-gradient(to bottom, transparent, rgba(212,160,16,0.5), transparent)",
                    transform: "rotate(18deg)" }} />

                {/* Floating badge */}
                <div className="absolute top-6 left-4 rounded-xl px-4 py-3"
                  style={{ background: "rgba(255,254,248,0.92)", backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,255,255,0.75)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.09)" }}>
                  <div className="font-black uppercase leading-none"
                    style={{ fontSize: "20px", letterSpacing: "-0.04em", color: ACCENT }}>3-Format</div>
                  <div className="font-mono text-[8px] tracking-[0.3em] uppercase mt-1"
                    style={{ color: "rgba(0,0,0,0.4)" }}>Street Blitz</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── What's Included ───────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
            <div>
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
                style={{ color: "rgba(0,0,0,0.35)" }}>
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
                  style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.6)" }}>
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
              style={{ color: "rgba(0,0,0,0.35)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              The Process
            </span>
            <h2 className="font-black uppercase m-0 mb-14 leading-[0.9]"
              style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}>
              FOUR PHASES<span style={{ color: ACCENT }}>.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px"
              style={{ background: "rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.06)", borderRadius: "20px", overflow: "hidden" }}>
              {PHASES.map((phase) => (
                <div key={phase.num} className="p-8 md:p-10"
                  style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
                  <div className="font-mono text-[10px] tracking-[0.35em] uppercase mb-5" style={{ color: ACCENT }}>{phase.num}</div>
                  <h3 className="font-black uppercase m-0 mb-3 leading-[0.88]"
                    style={{ fontSize: "clamp(18px, 1.8vw, 24px)", letterSpacing: "-0.02em" }}>
                    {phase.title}<span style={{ color: ACCENT }}>.</span>
                  </h3>
                  <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.55)", fontSize: "14px" }}>{phase.desc}</p>
                </div>
              ))}
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
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.35)" }}>Service</div>
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
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.35)" }}>Service</div>
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

        {/* ── Markets We Serve ──────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
              style={{ color: "rgba(0,0,0,0.35)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Markets We Serve
            </span>
            <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]"
              style={{ fontSize: "clamp(20px, 2.5vw, 32px)", letterSpacing: "-0.025em" }}>
              FULL IMPACT CAMPAIGNS ACROSS THE US<span style={{ color: ACCENT }}>.</span>
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Los Angeles", href: "/locations/los-angeles" },
                { label: "New York", href: "/locations/new-york" },
                { label: "Chicago", href: "/locations/chicago" },
                { label: "Atlanta", href: "/locations/atlanta" },
                { label: "Miami", href: "/locations/miami" },
              ].map(({ label, href }) => (
                <Link key={href} href={href}
                  className="font-mono text-[11px] tracking-[0.1em] px-4 py-2 rounded-lg no-underline"
                  style={{ background: "rgba(255,255,255,0.45)", border: "1px solid rgba(0,0,0,0.08)", color: "rgba(0,0,0,0.65)" }}>
                  {label} →
                </Link>
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
            <p className="font-light leading-relaxed mb-10 mx-auto"
              style={{ color: "rgba(0,0,0,0.5)", fontSize: "15px", maxWidth: "420px" }}>
              Tell us your city, your launch date, and your ambition.
              We&apos;ll respond within 24 hours with a full campaign strategy.
            </p>
            <Link href="/contact"
              className="service-cta relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-10 py-5 rounded-full overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #F5CA20 100%)`, color: "#FFF",
                boxShadow: `0 6px 32px rgba(212,160,16,0.55), 0 1px 0 rgba(255,255,255,0.25) inset` }}>
              <span className="absolute inset-0 pointer-events-none rounded-full"
                style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 55%)" }} />
              Launch My Campaign <span className="cta-arrow">→</span>
            </Link>
          </div>
        </section>

        {/* ── Footer ────────────────────────────────────────────── */}
        <footer className="px-5 sm:px-8 md:px-12 lg:px-16 py-10 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
          <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="font-black uppercase text-[14px] tracking-[0.05em] mb-1" style={{ color: "#1A1A1A" }}>
                Phantom<span style={{ color: ACCENT }}>Pasting</span>
              </div>
              <p className="font-mono text-[9px] tracking-[0.22em] uppercase m-0" style={{ color: "rgba(0,0,0,0.3)" }}>© 2026 — All Rights Reserved</p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {[
                { label: "Wheat Pasting", href: "/services/wheat-pasting" },
                { label: "Chalk Stencils", href: "/services/chalk-spray-stencils" },
                { label: "Full Impact", href: "/services/full-impact-campaigns" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
                { label: "About", href: "/about" },
              ].map(({ label, href }) => (
                <Link key={label} href={href} className="footer-link font-light no-underline" style={{ fontSize: "13px" }}>{label}</Link>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
