import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import ShinyGoldText from "@/components/ShinyGoldText";

export const metadata: Metadata = {
  title: "About Phantom Pasting | 10+ Years Street Marketing",
  description:
    "Phantom Pasting is a guerrilla marketing agency founded in 2014. 500+ campaigns, 50+ US cities, 10+ years of wheat pasting, wild posting, and chalk stencil activations.",
  alternates: { canonical: "https://phantompasting.com/about" },
  openGraph: {
    title: "About Phantom Pasting | 10+ Years Street Marketing",
    description:
      "Founded in 2014. 500+ campaigns. 50+ US cities. The street marketing agency that builds culture at the ground level.",
    url: "https://phantompasting.com/about",
    type: "website",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "Phantom Pasting",
  url: "https://phantompasting.com",
  logo: "https://phantompasting.com/phantom-pasting-logo.png",
  description:
    "Guerrilla marketing agency specializing in wheat pasting, wild posting, and chalk spray stencil campaigns across 50+ US cities. Founded 2014.",
  foundingDate: "2014",
  areaServed: "United States",
  knowsAbout: ["Wheat Pasting", "Wild Posting", "Guerrilla Marketing", "Street Advertising", "Chalk Spray Stencils"],
  sameAs: ["https://www.instagram.com/phantompasting"],
};

const ACCENT = "#D4A010";

const VALUES = [
  {
    title: "DOCUMENTATION FIRST",
    desc: "Every campaign is fully photographed — timestamped, geo-tagged, delivered. You always know exactly where and when your campaign ran.",
  },
  {
    title: "REAL CREWS, REAL CITIES",
    desc: "We work with local crews in every market, not outsourced drivers. That means local knowledge, better walls, and faster execution.",
  },
  {
    title: "NO FLUFF, JUST STREETS",
    desc: "We don't pitch decks. We put your brand on walls. Simple briefs, fast turnarounds, and campaigns that actually show up in the real world.",
  },
  {
    title: "ANY SCALE",
    desc: "From a single-city drop to simultaneous multi-city saturation campaigns. Built for indie artists and global brands alike.",
  },
];

const CLIENTS = ["FashionPass", "FIFA World Cup", "Incrediwear", "Calvin Priice"];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <div style={{ background: "#FFFEF8", minHeight: "100vh", color: "#1A1A1A" }}>
        <SiteNav />

        {/* ── Page Hero ─────────────────────────────────────────── */}
        <section className="relative px-5 sm:px-8 md:px-12 lg:px-16 pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
          <span
            aria-hidden
            className="absolute inset-x-0 top-4 text-center font-black uppercase pointer-events-none select-none"
            style={{
              fontSize: "clamp(80px, 16vw, 260px)",
              letterSpacing: "-0.05em",
              color: "rgba(212,160,16,0.06)",
              lineHeight: 1,
            }}
          >
            ABOUT
          </span>

          <div className="relative z-10 max-w-[900px]">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase mb-6"
              style={{ color: "rgba(0,0,0,0.4)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              About Us
            </span>

            <h1
              className="font-black uppercase m-0 leading-[0.88]"
              style={{ fontSize: "clamp(48px, 8vw, 110px)", letterSpacing: "-0.04em" }}
            >
              WHO<br />
              <ShinyGoldText>WE ARE.</ShinyGoldText>
            </h1>

            <p
              className="font-light leading-relaxed mt-8 mb-0 max-w-[560px]"
              style={{ fontSize: "clamp(15px, 1.6vw, 18px)", color: "rgba(0,0,0,0.5)" }}
            >
              Phantom Pasting is a guerrilla marketing agency founded in 2014.
              We specialize in wheat pasting, wild posting, and chalk spray stencil campaigns
              across every major US city. Ten-plus years on the streets.
            </p>
          </div>
        </section>

        {/* ── Stats bar ─────────────────────────────────────────── */}
        <section
          className="px-5 sm:px-8 md:px-12 lg:px-16 py-8 border-y"
          style={{ background: "rgba(242,240,236,0.6)", borderColor: "rgba(0,0,0,0.06)" }}
        >
          <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "2014", label: "Founded" },
              { stat: "500+", label: "Campaigns" },
              { stat: "50+", label: "US Cities" },
              { stat: "10+", label: "Years" },
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

        {/* ── Story ─────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-4 flex items-center gap-2"
                style={{ color: "rgba(0,0,0,0.35)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                Our Story
              </span>
              <h2
                className="font-black uppercase m-0 mb-6 leading-[0.9]"
                style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}
              >
                BUILT ON<br />
                <span style={{ color: ACCENT }}>THE STREETS.</span>
              </h2>
              <div className="flex flex-col gap-4">
                <p className="font-light leading-relaxed m-0"
                  style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px", maxWidth: "480px" }}>
                  Phantom Pasting started in 2014 with a simple premise: brands deserve advertising
                  that can&apos;t be skipped, muted, or blocked. The streets can&apos;t be ad-blocked.
                </p>
                <p className="font-light leading-relaxed m-0"
                  style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px", maxWidth: "480px" }}>
                  What started as a small wheat-pasting operation in one city grew into a nationwide
                  network of crews, walls, and documented campaigns across 50+ markets. Every campaign
                  we run today is still built on that same foundation: get it on the streets, photograph
                  every hit, and let the work speak.
                </p>
                <p className="font-light leading-relaxed m-0"
                  style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px", maxWidth: "480px" }}>
                  Over a decade later, we&apos;ve run campaigns for global brands and local artists,
                  fashion drops and sports events, film releases and restaurant openings — and we
                  still take the same approach every time: real streets, real documentation, real impact.
                </p>
              </div>
            </div>

            {/* Logo / brand image block */}
            <div
              className="rounded-3xl overflow-hidden flex items-center justify-center"
              style={{
                background: "rgba(242,240,236,0.7)",
                border: "1px solid rgba(255,255,255,0.8)",
                aspectRatio: "4/3",
              }}
            >
              <div className="flex flex-col items-center gap-4 p-10 text-center">
                <Image
                  src="/phantom-pasting-logo.webp"
                  alt="Phantom Pasting Logo"
                  width={96}
                  height={96}
                  className="rounded-2xl"
                  style={{ objectFit: "cover" }}
                />
                <div>
                  <div
                    className="font-black uppercase leading-tight"
                    style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.03em" }}
                  >
                    Phantom<span style={{ color: ACCENT }}>Pasting</span>
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mt-2"
                    style={{ color: "rgba(0,0,0,0.4)" }}>
                    Est. 2014
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Values ────────────────────────────────────────────── */}
        <section
          className="px-5 sm:px-8 md:px-12 lg:px-16 py-20 md:py-28"
          style={{ background: "rgba(242,240,236,0.4)" }}
        >
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-14">
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-4 flex items-center gap-2"
                style={{ color: "rgba(0,0,0,0.35)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                How We Work
              </span>
              <h2
                className="font-black uppercase m-0 leading-[0.9]"
                style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}
              >
                WHAT SETS<br />
                <span style={{ color: ACCENT }}>US APART.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {VALUES.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl p-8 md:p-10"
                  style={{
                    background: "rgba(248,247,244,0.9)",
                    border: "1px solid rgba(255,255,255,0.85)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9)",
                  }}
                >
                  <h3
                    className="font-black uppercase m-0 mb-4 leading-[0.88]"
                    style={{ fontSize: "clamp(18px, 1.8vw, 24px)", letterSpacing: "-0.02em" }}
                  >
                    {v.title}<span style={{ color: ACCENT }}>.</span>
                  </h3>
                  <p className="font-light leading-relaxed m-0"
                    style={{ color: "rgba(0,0,0,0.52)", fontSize: "14px" }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Clients ───────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 py-16 border-t"
          style={{ borderColor: "rgba(0,0,0,0.05)" }}>
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-8 flex items-center gap-2"
              style={{ color: "rgba(0,0,0,0.35)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Trusted By
            </span>
            <div className="flex flex-wrap gap-4 md:gap-6">
              {CLIENTS.map((client) => (
                <div
                  key={client}
                  className="rounded-xl px-5 py-3"
                  style={{
                    background: "rgba(242,240,236,0.7)",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <span className="font-black uppercase text-[13px] tracking-[0.05em]"
                    style={{ color: "rgba(0,0,0,0.6)" }}>
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 py-24 md:py-32 text-center">
          <div className="max-w-[700px] mx-auto">
            <h2
              className="font-black uppercase m-0 mb-6 leading-[0.9]"
              style={{ fontSize: "clamp(38px, 6vw, 80px)", letterSpacing: "-0.04em" }}
            >
              READY TO<br />
              <ShinyGoldText>WORK TOGETHER?</ShinyGoldText>
            </h2>
            <p className="font-light leading-relaxed mb-10 mx-auto"
              style={{ color: "rgba(0,0,0,0.5)", fontSize: "15px", maxWidth: "420px" }}>
              Tell us your city, your brand, and your goal.
              We&apos;ll hit you back within 24 hours with a plan.
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
              Get a Quote
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
