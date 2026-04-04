import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import ShinyGoldText from "@/components/ShinyGoldText";

export const metadata: Metadata = {
  title: "About Phantom Pasting | 10+ Years Street Marketing",
  description:
    "Phantom Pasting is a guerrilla marketing agency founded in 2014. 500+ campaigns, 50+ US cities, 10+ years of wheat pasting, wild posting, and chalk stencil activations.",
  keywords: [
    "about phantom pasting",
    "guerrilla marketing agency",
    "wheat pasting company",
    "wild posting agency",
    "street marketing company",
    "founded 2014",
    "US street advertising agency",
  ],
  alternates: { canonical: "https://phantompasting.com/about" },
  openGraph: {
    title: "About Phantom Pasting | 10+ Years Street Marketing",
    description: "Founded in 2014. 500+ campaigns. 50+ US cities. The street marketing agency that builds culture at the ground level.",
    url: "https://phantompasting.com/about",
    type: "website",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "Phantom Pasting",
  url: "https://phantompasting.com",
  description: "Guerrilla marketing agency specializing in wheat pasting, wild posting, and chalk spray stencil campaigns across 50+ US cities. Founded 2014.",
  foundingDate: "2014",
  areaServed: "United States",
  sameAs: ["https://www.instagram.com/phantompasting"],
};

const ACCENT = "#D4A010";

const VALUES = [
  { num: "01", title: "DOCUMENTATION FIRST", desc: "Every campaign photographed — timestamped, geo-tagged, delivered. You always know exactly where and when your campaign ran." },
  { num: "02", title: "REAL CREWS, REAL CITIES", desc: "Local crews in every market, not outsourced drivers. Local knowledge, better walls, faster execution." },
  { num: "03", title: "NO FLUFF, JUST STREETS", desc: "Simple briefs, fast turnarounds, and campaigns that actually show up in the real world. We don't pitch decks — we put your brand on walls." },
  { num: "04", title: "ANY SCALE", desc: "Single-city drops to simultaneous multi-city saturation. Built for indie artists and global brands alike." },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

      <div style={{ background: "transparent", minHeight: "100vh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="relative px-5 sm:px-8 md:px-12 lg:px-16 pt-16 pb-16 md:pt-24 md:pb-20 overflow-hidden">
          <span aria-hidden className="absolute inset-x-0 top-2 text-center font-black uppercase pointer-events-none select-none"
            style={{ fontSize: "clamp(80px, 18vw, 280px)", letterSpacing: "-0.05em", color: "rgba(212,160,16,0.05)", lineHeight: 1 }}>
            ABOUT
          </span>
          <div className="relative z-10 max-w-[900px]">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase mb-6"
              style={{ color: "rgba(0,0,0,0.4)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Est. 2014
            </span>
            <h1 className="font-black uppercase m-0 leading-[0.88]"
              style={{ fontSize: "clamp(52px, 9vw, 120px)", letterSpacing: "-0.045em" }}>
              WHO<br /><ShinyGoldText>WE ARE.</ShinyGoldText>
            </h1>
            <p className="font-light leading-relaxed mt-8 max-w-[520px]"
              style={{ fontSize: "clamp(15px, 1.6vw, 18px)", color: "rgba(0,0,0,0.5)" }}>
              Phantom Pasting is a guerrilla marketing agency founded in 2014. Wheat pasting,
              wild posting, and chalk spray stencils across every major US city. Ten-plus years on the streets.
            </p>
          </div>
        </section>

        {/* ── Stats — inline, no box ────────────────────────────────── */}
        <div className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20 md:pb-28">
          <div className="max-w-[1200px] mx-auto flex flex-wrap gap-12 md:gap-20">
            {[
              { stat: "2014", label: "Founded" },
              { stat: "500+", label: "Campaigns" },
              { stat: "50+", label: "US Cities" },
              { stat: "10+", label: "Years" },
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

        {/* ── Story ────────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
            <div>
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
                style={{ color: "rgba(0,0,0,0.35)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                Our Story
              </span>
              <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]"
                style={{ fontSize: "clamp(34px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}>
                BUILT ON<br /><span style={{ color: ACCENT }}>THE STREETS.</span>
              </h2>
              <div className="flex flex-col gap-5">
                <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "480px" }}>
                  Phantom Pasting started in 2014 with a simple premise: brands deserve advertising
                  that can&apos;t be skipped, muted, or blocked. The streets can&apos;t be ad-blocked.
                </p>
                <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "480px" }}>
                  What started as a small wheat-pasting operation in one city grew into a nationwide
                  network of crews, walls, and documented campaigns across 50+ markets. Every campaign
                  we run today is still built on that same foundation — get it on the streets, photograph
                  every hit, and let the work speak.
                </p>
                <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "480px" }}>
                  Over a decade later, we&apos;ve run campaigns for global brands and local artists,
                  fashion drops and sports events, film releases and restaurant openings. Same approach
                  every time: real streets, real documentation, real impact.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div
                className="rounded-3xl flex items-center justify-center py-16"
                style={{
                  background: "rgba(255,255,255,0.35)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.6)",
                }}
              >
                <div className="flex flex-col items-center gap-4 text-center px-8">
                  <Image src="/phantom-pasting-logo.webp" alt="Phantom Pasting" width={80} height={80}
                    className="rounded-2xl" style={{ objectFit: "cover" }} />
                  <div className="font-black uppercase leading-tight"
                    style={{ fontSize: "clamp(22px, 2.5vw, 30px)", letterSpacing: "-0.03em" }}>
                    Phantom<span style={{ color: ACCENT }}>Pasting</span>
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase" style={{ color: "rgba(0,0,0,0.4)" }}>
                    Est. 2014 · Nationwide
                  </div>
                </div>
              </div>

              {/* Clients */}
              <div>
                <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-4" style={{ color: "rgba(0,0,0,0.35)" }}>
                  Trusted By
                </div>
                <div className="flex flex-wrap gap-2">
                  {["FashionPass", "FIFA World Cup", "Incrediwear", "Calvin Priice"].map((client) => (
                    <span key={client}
                      className="font-black uppercase text-[12px] tracking-[0.04em] px-4 py-2 rounded-full"
                      style={{ background: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.6)", color: "rgba(0,0,0,0.65)" }}>
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── What Sets Us Apart ────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
              style={{ color: "rgba(0,0,0,0.35)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              How We Work
            </span>
            <h2 className="font-black uppercase m-0 mb-14 leading-[0.9]"
              style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}>
              WHAT SETS US<br /><span style={{ color: ACCENT }}>APART.</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px"
              style={{ background: "rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.06)", borderRadius: "20px", overflow: "hidden" }}>
              {VALUES.map((v, i) => (
                <div key={v.num}
                  className="p-8 md:p-10"
                  style={{
                    background: "rgba(255,255,255,0.35)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }}>
                  <div className="font-mono text-[10px] tracking-[0.35em] uppercase mb-5" style={{ color: ACCENT }}>{v.num}</div>
                  <h3 className="font-black uppercase m-0 mb-3 leading-[0.88]"
                    style={{ fontSize: "clamp(18px, 1.8vw, 24px)", letterSpacing: "-0.02em" }}>
                    {v.title}<span style={{ color: ACCENT }}>.</span>
                  </h3>
                  <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.55)", fontSize: "14px" }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32 text-center">
          <div className="max-w-[700px] mx-auto">
            <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]"
              style={{ fontSize: "clamp(38px, 6vw, 80px)", letterSpacing: "-0.04em" }}>
              READY TO<br /><ShinyGoldText>WORK TOGETHER?</ShinyGoldText>
            </h2>
            <p className="font-light leading-relaxed mb-10 mx-auto"
              style={{ color: "rgba(0,0,0,0.5)", fontSize: "15px", maxWidth: "380px" }}>
              Tell us your city, your brand, and your goal. We&apos;ll hit you back within 24 hours.
            </p>
            <Link href="/contact"
              className="service-cta relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-10 py-5 rounded-full overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #F5CA20 100%)`, color: "#FFF",
                boxShadow: `0 6px 32px rgba(212,160,16,0.55), 0 1px 0 rgba(255,255,255,0.25) inset` }}>
              <span className="absolute inset-0 pointer-events-none rounded-full"
                style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 55%)" }} />
              Get a Quote <span className="cta-arrow">→</span>
            </Link>
          </div>
        </section>

        {/* ── Footer ──────────────────────────────────────────────── */}
        <footer className="px-5 sm:px-8 md:px-12 lg:px-16 py-10 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
          <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="font-black uppercase text-[14px] tracking-[0.05em] mb-1" style={{ color: "#1A1A1A" }}>
                Phantom<span style={{ color: ACCENT }}>Pasting</span>
              </div>
              <p className="font-mono text-[9px] tracking-[0.22em] uppercase m-0" style={{ color: "rgba(0,0,0,0.3)" }}>© 2026 — All Rights Reserved</p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {[{ label: "Wheat Pasting", href: "/services/wheat-pasting" }, { label: "Chalk Stencils", href: "/services/chalk-spray-stencils" },
                { label: "Full Impact", href: "/services/full-impact-campaigns" }, { label: "Contact", href: "/contact" }
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
