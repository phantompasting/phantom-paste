import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import ShinyGoldText from "@/components/ShinyGoldText";
import Breadcrumb from "@/components/Breadcrumb";
import SiteFooter from "@/components/SiteFooter";
import TrustBar from "@/components/TrustBar";
import { BUSINESS } from "@/lib/business";
import { webPageSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";
import { KW_ABOUT } from "@/lib/keywordSets";

const PAGE_URL = `${BUSINESS.url}/about`;
const PAGE_TITLE = "About — Guerrilla Marketing Since 2014";
const PAGE_DESC =
  "Wheat pasting company founded 2014 — guerrilla marketing agency, street media buyer, nationwide alternative OOH partner. 500+ campaigns, 50+ cities.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [...KW_ABOUT],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: "Founded in 2014. 500+ campaigns. 50+ US cities. The guerrilla marketing agency that builds culture at the ground level.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: `${BUSINESS.url}${BUSINESS.ogImageDefault}`,
        width: BUSINESS.ogImageWidth,
        height: BUSINESS.ogImageHeight,
        alt: "Phantom Pasting — guerrilla marketing agency, wheat pasting campaign",
      },
    ],
  },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            webPageSchema({
              name: PAGE_TITLE,
              description: PAGE_DESC,
              url: PAGE_URL,
            })
          ),
        }}
      />
      {/* localBusinessSchema is emitted globally via app/layout.tsx — duplicating it
          per page adds no signal and bloats the HTML. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
            ])
          ),
        }}
      />

      <div style={{ background: "transparent", minHeight: "100dvh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "About" },
          ]}
        />
        <TrustBar />

        {/* ── Hero (split-screen) ─────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] lg:min-h-[660px] items-center">

              {/* LEFT — text + stats */}
              <div className="relative z-10 flex flex-col justify-center py-16 md:py-20 lg:py-24 lg:pr-16">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase mb-6"
                  style={{ color: "rgba(0,0,0,0.55)" }}>
                  <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                  Est. 2014
                </span>
                <h1 className="font-black uppercase m-0 leading-[0.88]"
                  style={{ fontSize: "clamp(48px, 7vw, 100px)", letterSpacing: "-0.04em" }}>
                  GUERRILLA<br />MARKETING<br /><ShinyGoldText>AGENCY.</ShinyGoldText>
                </h1>
                <p className="font-light leading-relaxed mt-8 mb-10"
                  style={{ fontSize: "clamp(17px, 1.6vw, 19px)", color: "rgba(0,0,0,0.5)", maxWidth: "480px" }}>
                  Phantom Pasting is a guerrilla marketing agency founded in 2014.{" "}
                  <Link href="/services/wheat-pasting" style={{ color: "rgba(0,0,0,0.72)", textDecoration: "underline", textDecorationColor: ACCENT, textUnderlineOffset: "3px" }}>Wheat pasting</Link>,
                  street postering, and{" "}
                  <Link href="/services/chalk-spray-stencils" style={{ color: "rgba(0,0,0,0.72)", textDecoration: "underline", textDecorationColor: ACCENT, textUnderlineOffset: "3px" }}>chalk spray stencils</Link>{" "}
                  across{" "}
                  <Link href="/locations" style={{ color: "rgba(0,0,0,0.72)", textDecoration: "underline", textDecorationColor: ACCENT, textUnderlineOffset: "3px" }}>every major US city</Link>.
                  Ten-plus years on the streets.
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

                {/* Stats row */}
                <div className="flex flex-wrap gap-10 md:gap-16 mt-12 pt-10"
                  style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                  {[
                    { stat: "2014", label: "Founded" },
                    { stat: "500+", label: "Campaigns" },
                    { stat: "50+", label: "US Cities" },
                    { stat: "10+", label: "Years" },
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

              {/* RIGHT — image composition */}
              <div className="relative hidden lg:block h-[660px] overflow-hidden">
                <span aria-hidden className="absolute right-0 top-1/2 font-black uppercase pointer-events-none select-none"
                  style={{ fontSize: "clamp(80px, 12vw, 180px)", letterSpacing: "-0.06em",
                    color: "rgba(212,160,16,0.05)", lineHeight: 1,
                    writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}>
                  ABOUT
                </span>

                <div className="absolute top-10 right-0 rounded-2xl overflow-hidden"
                  style={{ width: "82%", height: "80%", transform: "rotate(1.8deg)",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.20), 0 4px 14px rgba(0,0,0,0.10)" }}>
                  {/* Wrapper above is `hidden lg:block`. Mobile never sees this image,
                      but `priority` preloads regardless of CSS visibility — was wasting
                      ~300KB of mobile bandwidth on every load. */}
                  <Image
                    src="/gallery/fashionpass-wheat-paste-street-postering-wall-los-angeles.webp"
                    alt="Phantom Pasting wheat paste campaign wall"
                    fill style={{ objectFit: "cover" }}
                    sizes="(max-width: 1024px) 0vw, 40vw" loading="lazy"
                  />
                </div>

                <div className="absolute bottom-10 left-2 rounded-xl overflow-hidden"
                  style={{ width: "50%", height: "48%", transform: "rotate(-2.2deg)",
                    boxShadow: "0 16px 48px rgba(0,0,0,0.26), 0 3px 10px rgba(0,0,0,0.12)" }}>
                  {/* Hidden on mobile (hidden lg:block) — let lazy loading handle it
                      on desktop; the H1 text paints first anyway, so the LCP impact
                      of dropping priority is negligible. */}
                  <Image
                    src="/gallery/fifa-world-cup-atlanta-wall-installation.webp"
                    alt="FIFA World Cup street campaign in Atlanta"
                    fill style={{ objectFit: "cover" }}
                    sizes="(max-width: 1024px) 0vw, 25vw" loading="lazy"
                  />
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
                    2014
                  </div>
                  <div className="font-mono text-[8px] tracking-[0.3em] uppercase mt-1"
                    style={{ color: "rgba(0,0,0,0.55)" }}>
                    Founded
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Definition ────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
              style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Definition
            </span>
            <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]"
              style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}>
              WHAT IS GUERRILLA <ShinyGoldText>MARKETING?</ShinyGoldText>
            </h2>
            <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px", maxWidth: "680px" }}>
              Guerrilla marketing is unconventional, street-level advertising that uses physical media to create brand presence in the real world. Unlike digital ads that are skipped, blocked, or scrolled past, guerrilla campaigns — wheat pasting, chalk stencils, street postering — exist in the physical environment where they demand attention through sheer visibility.
            </p>
          </div>
        </section>

        {/* ── Story ────────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
            <div>
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
                style={{ color: "rgba(0,0,0,0.55)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                Our Story
              </span>
              <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]"
                style={{ fontSize: "clamp(34px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}>
                BUILT ON<br /><ShinyGoldText>THE STREETS.</ShinyGoldText>
              </h2>
              <div className="flex flex-col gap-5">
                <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "480px" }}>
                  Phantom Pasting started in 2014 with a simple premise: brands deserve advertising
                  that can&apos;t be skipped, muted, or blocked. The streets can&apos;t be ad-blocked.
                </p>
                <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "480px" }}>
                  What started as a small{" "}
                  <Link href="/services/wheat-pasting" style={{ color: "rgba(0,0,0,0.75)", textDecoration: "underline", textDecorationColor: ACCENT, textUnderlineOffset: "3px" }}>wheat-pasting</Link>{" "}
                  operation in one city grew into a nationwide network of crews, walls, and documented campaigns across{" "}
                  <Link href="/locations" style={{ color: "rgba(0,0,0,0.75)", textDecoration: "underline", textDecorationColor: ACCENT, textUnderlineOffset: "3px" }}>50+ markets</Link>.
                  Every campaign we run today is still built on that same foundation — get it on the streets, photograph
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
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
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
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase" style={{ color: "rgba(0,0,0,0.55)" }}>
                    Est. 2014 · Nationwide
                  </div>
                </div>
              </div>

              {/* Clients */}
              <div>
                <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-4" style={{ color: "rgba(0,0,0,0.55)" }}>
                  Trusted By
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "FashionPass", href: "/work/fashionpass-los-angeles" },
                    { label: "FIFA World Cup", href: "/work/fifa-world-cup-atlanta" },
                    { label: "Incrediwear", href: "/work/incrediwear-street-campaign" },
                    { label: "Calvin Priice", href: null },
                  ].map(({ label, href }) => {
                    const chipClass = "font-black uppercase text-[12px] tracking-[0.04em] px-4 py-2 rounded-full no-underline";
                    const chipStyle = { background: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.6)", color: "rgba(0,0,0,0.65)" };
                    return href ? (
                      <Link key={label} href={href} className={chipClass} style={chipStyle}>
                        {label}
                      </Link>
                    ) : (
                      <span key={label} className={chipClass} style={chipStyle}>
                        {label}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── What Sets Us Apart ────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
              style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              How We Work
            </span>
            <h2 className="font-black uppercase m-0 mb-14 leading-[0.9]"
              style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}>
              WHAT SETS US<br /><ShinyGoldText>APART.</ShinyGoldText>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px"
              style={{ background: "rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.06)", borderRadius: "20px", overflow: "hidden" }}>
              {VALUES.map((v, i) => (
                <div key={v.num}
                  className="p-8 md:p-10"
                  style={{
                    background: "rgba(255,255,255,0.35)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
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

        {/* ── Comparison Table ──────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
              style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Compare
            </span>
            <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]"
              style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}>
              PHANTOM PASTING VS TRADITIONAL<span style={{ color: ACCENT }}>AGENCIES.</span>
            </h2>
            <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid rgba(0,0,0,0.06)" }}>
              <table className="w-full" style={{ borderCollapse: "separate", borderSpacing: 0 }}>
                <thead>
                  <tr style={{ background: "rgba(0,0,0,0.03)" }}>
                    <th className="text-left font-mono text-[9px] tracking-[0.25em] uppercase p-4" style={{ color: "rgba(0,0,0,0.55)" }}>Feature</th>
                    <th className="text-left font-mono text-[9px] tracking-[0.25em] uppercase p-4" style={{ color: ACCENT }}>Phantom Pasting</th>
                    <th className="text-left font-mono text-[9px] tracking-[0.25em] uppercase p-4" style={{ color: "rgba(0,0,0,0.55)" }}>Traditional Agency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                    <td className="font-mono text-[10px] tracking-[0.15em] uppercase p-4" style={{ color: "rgba(0,0,0,0.5)" }}>Documentation</td>
                    <td className="font-light p-4" style={{ fontSize: "13px", color: "rgba(0,0,0,0.7)" }}>100% photo proof every hit</td>
                    <td className="font-light p-4" style={{ fontSize: "13px", color: "rgba(0,0,0,0.5)" }}>Campaign summaries</td>
                  </tr>
                  <tr style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                    <td className="font-mono text-[10px] tracking-[0.15em] uppercase p-4" style={{ color: "rgba(0,0,0,0.5)" }}>Crews</td>
                    <td className="font-light p-4" style={{ fontSize: "13px", color: "rgba(0,0,0,0.7)" }}>Local crews in 50+ cities</td>
                    <td className="font-light p-4" style={{ fontSize: "13px", color: "rgba(0,0,0,0.5)" }}>Outsourced vendors</td>
                  </tr>
                  <tr style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                    <td className="font-mono text-[10px] tracking-[0.15em] uppercase p-4" style={{ color: "rgba(0,0,0,0.5)" }}>Lead Time</td>
                    <td className="font-light p-4" style={{ fontSize: "13px", color: "rgba(0,0,0,0.7)" }}>1–3 weeks</td>
                    <td className="font-light p-4" style={{ fontSize: "13px", color: "rgba(0,0,0,0.5)" }}>4–8 weeks</td>
                  </tr>
                  <tr style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                    <td className="font-mono text-[10px] tracking-[0.15em] uppercase p-4" style={{ color: "rgba(0,0,0,0.5)" }}>Formats</td>
                    <td className="font-light p-4" style={{ fontSize: "13px", color: "rgba(0,0,0,0.7)" }}>Wheat paste + chalk stencils</td>
                    <td className="font-light p-4" style={{ fontSize: "13px", color: "rgba(0,0,0,0.5)" }}>Billboard + transit</td>
                  </tr>
                  <tr style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                    <td className="font-mono text-[10px] tracking-[0.15em] uppercase p-4" style={{ color: "rgba(0,0,0,0.5)" }}>Proof of Placement</td>
                    <td className="font-light p-4" style={{ fontSize: "13px", color: "rgba(0,0,0,0.7)" }}>Geo-tagged, timestamped</td>
                    <td className="font-light p-4" style={{ fontSize: "13px", color: "rgba(0,0,0,0.5)" }}>Impression estimates</td>
                  </tr>
                </tbody>
              </table>
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

        <SiteFooter />
      </div>
    </>
  );
}
