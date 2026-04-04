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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://phantompasting.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://phantompasting.com/services/wheat-pasting" },
    { "@type": "ListItem", position: 3, name: "Wheat Pasting", item: "https://phantompasting.com/services/wheat-pasting" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Wheat Pasting",
  alternateName: "Wild Posting",
  description:
    "Large-format wheat paste poster advertising installed on prime urban walls across 50+ US cities. Includes print, installation, and photo documentation.",
  url: "https://phantompasting.com/services/wheat-pasting",
  provider: { "@type": "Organization", name: "Phantom Pasting", url: "https://phantompasting.com" },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div style={{ background: "transparent", minHeight: "100vh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="relative px-5 sm:px-8 md:px-12 lg:px-16 pt-16 pb-16 md:pt-24 md:pb-20 overflow-hidden">
          <span aria-hidden className="absolute inset-x-0 top-6 text-center font-black uppercase pointer-events-none select-none"
            style={{ fontSize: "clamp(90px, 18vw, 280px)", letterSpacing: "-0.05em", color: "rgba(212,160,16,0.05)", lineHeight: 1 }}>
            WHEAT
          </span>
          <div className="relative z-10 max-w-[900px]">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase mb-6"
              style={{ color: "rgba(0,0,0,0.4)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Wheat Pasting
            </span>
            <h1 className="font-black uppercase m-0 leading-[0.88]"
              style={{ fontSize: "clamp(48px, 8vw, 110px)", letterSpacing: "-0.04em" }}>
              WHEAT PASTING<br /><ShinyGoldText>THAT OWNS WALLS.</ShinyGoldText>
            </h1>
            <p className="font-light leading-relaxed mt-8 mb-10 max-w-[540px]"
              style={{ fontSize: "clamp(15px, 1.6vw, 18px)", color: "rgba(0,0,0,0.5)" }}>
              Large-format wheat paste posters on prime urban walls across 50+ US cities.
              We handle everything — print, crew, installation, and 100% photo documentation.
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
              <Link href="/gallery"
                className="hero-cta-secondary inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.18em] uppercase no-underline px-6 py-4 rounded-full"
                style={{ color: "rgba(0,0,0,0.72)", background: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(0,0,0,0.14)", boxShadow: "0 2px 12px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)" }}>
                See Our Work <span className="cta-arrow">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Stats inline ──────────────────────────────────────── */}
        <div className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20 md:pb-28">
          <div className="max-w-[1200px] mx-auto flex flex-wrap gap-12 md:gap-20">
            {[
              { stat: "500+", label: "Campaigns" },
              { stat: "50+", label: "US Cities" },
              { stat: "100%", label: "Photo Documented" },
            ].map(({ stat, label }) => (
              <div key={label}>
                <div className="font-black uppercase leading-none"
                  style={{ fontSize: "clamp(36px, 5vw, 64px)", letterSpacing: "-0.04em", color: ACCENT }}>
                  {stat}
                </div>
                <div className="font-mono text-[9px] tracking-[0.3em] uppercase mt-2" style={{ color: "rgba(0,0,0,0.4)" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── What it is ────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
            <div>
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
                style={{ color: "rgba(0,0,0,0.35)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                What It Is
              </span>
              <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]"
                style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}>
                STREET-LEVEL<br /><span style={{ color: ACCENT }}>IMPACT</span> AT SCALE.
              </h2>
              <div className="flex flex-col gap-5">
                <p className="font-light leading-relaxed m-0"
                  style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "480px" }}>
                  Wheat pasting is the original street advertising format — large printed posters adhered
                  directly to urban walls using a wheat-starch paste. The result: bold, unmissable, and
                  culturally embedded.
                </p>
                <p className="font-light leading-relaxed m-0"
                  style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "480px" }}>
                  Unlike digital ads, a wheat-paste poster can&apos;t be scrolled past. It lives in your
                  audience&apos;s neighborhood — on their commute, their lunch spot, their Saturday walk.
                  It becomes part of the city texture.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Poster Size", value: '24"×36" to 48"×72"' },
                { label: "Coverage", value: "50+ US Cities" },
                { label: "Turnaround", value: "5–21 Business Days" },
                { label: "Documentation", value: "100% Photo Proof" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-2xl p-5"
                  style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.6)" }}>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.35)" }}>
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
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
              style={{ color: "rgba(0,0,0,0.35)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              The Process
            </span>
            <h2 className="font-black uppercase m-0 mb-14 leading-[0.9]"
              style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}>
              HOW IT WORKS<span style={{ color: ACCENT }}>.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px"
              style={{ background: "rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.06)", borderRadius: "20px", overflow: "hidden" }}>
              {STEPS.map((step) => (
                <div key={step.num} className="p-8 md:p-10"
                  style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
                  <div className="font-mono text-[10px] tracking-[0.35em] uppercase mb-5" style={{ color: ACCENT }}>{step.num}</div>
                  <h3 className="font-black uppercase m-0 mb-3 leading-[0.88]"
                    style={{ fontSize: "clamp(18px, 1.8vw, 24px)", letterSpacing: "-0.02em" }}>
                    {step.title}<span style={{ color: ACCENT }}>.</span>
                  </h3>
                  <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.55)", fontSize: "14px" }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who Uses It ───────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
              style={{ color: "rgba(0,0,0,0.35)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Who Uses It
            </span>
            <h2 className="font-black uppercase m-0 mb-14 leading-[0.9]"
              style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}>
              BUILT FOR BRANDS<br /><span style={{ color: ACCENT }}>THAT MOVE CULTURE.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
              style={{ background: "rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.06)", borderRadius: "20px", overflow: "hidden" }}>
              {USE_CASES.map(({ label, desc }) => (
                <div key={label} className="p-7"
                  style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
                  <div className="font-black uppercase leading-tight mb-2"
                    style={{ fontSize: "clamp(15px, 1.5vw, 19px)", letterSpacing: "-0.02em" }}>
                    {label}
                  </div>
                  <p className="font-light m-0" style={{ color: "rgba(0,0,0,0.5)", fontSize: "13px" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── More Services ─────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]"
              style={{ fontSize: "clamp(20px, 2.5vw, 32px)", letterSpacing: "-0.025em" }}>
              MORE SERVICES<span style={{ color: ACCENT }}>.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              <Link href="/services/full-impact-campaigns" className="no-underline rounded-2xl p-7 flex items-center justify-between"
                style={{ background: "rgba(248,247,244,0.9)", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.35)" }}>Service</div>
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

        {/* ── CTA ───────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32 text-center">
          <div className="max-w-[700px] mx-auto">
            <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]"
              style={{ fontSize: "clamp(38px, 6vw, 80px)", letterSpacing: "-0.04em" }}>
              LET&apos;S BUILD<br /><ShinyGoldText>YOUR CAMPAIGN.</ShinyGoldText>
            </h2>
            <p className="font-light leading-relaxed mb-10 mx-auto"
              style={{ color: "rgba(0,0,0,0.5)", fontSize: "15px", maxWidth: "420px" }}>
              Tell us your city, your timeline, and your vision.
              We&apos;ll respond within 24 hours with a custom street strategy.
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
