import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import ShinyGoldText from "@/components/ShinyGoldText";

export const metadata: Metadata = {
  title: "FIFA World Cup Street Campaign Atlanta | Phantom Pasting",
  description:
    "FIFA World Cup wheat pasting and wild posting street campaign in Atlanta. Large-format posters installed across Midtown, Little Five Points, and Buckhead. Full documentation.",
  keywords: [
    "FIFA World Cup street marketing",
    "wheat pasting Atlanta",
    "wild posting Atlanta",
    "sports event guerrilla marketing",
    "Atlanta street advertising",
  ],
  alternates: { canonical: "https://phantompasting.com/work/fifa-world-cup-atlanta" },
  openGraph: {
    title: "FIFA World Cup Street Campaign Atlanta | Phantom Pasting",
    description: "Large-format wheat paste campaign for FIFA World Cup across Atlanta. Midtown, Little Five Points, Buckhead.",
    url: "https://phantompasting.com/work/fifa-world-cup-atlanta",
    type: "article",
    images: [{ url: "https://phantompasting.com/gallery/fifa-world-cup-atlanta-wall-installation.webp", width: 1200, height: 630, alt: "FIFA World Cup poster wall installation in Atlanta" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://phantompasting.com" },
    { "@type": "ListItem", position: 2, name: "Work", item: "https://phantompasting.com/work/fifa-world-cup-atlanta" },
    { "@type": "ListItem", position: 3, name: "FIFA World Cup Atlanta", item: "https://phantompasting.com/work/fifa-world-cup-atlanta" },
  ],
};

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "FIFA World Cup Street Campaign — Atlanta",
  description: "Large-format wheat paste and wild posting campaign for FIFA World Cup across prime walls in Atlanta.",
  url: "https://phantompasting.com/work/fifa-world-cup-atlanta",
  datePublished: "2026-01-20",
  dateModified: "2026-01-20",
  author: { "@type": "Organization", name: "Phantom Pasting", url: "https://phantompasting.com" },
  publisher: {
    "@type": "Organization",
    name: "Phantom Pasting",
    url: "https://phantompasting.com",
    logo: { "@type": "ImageObject", url: "https://phantompasting.com/phantom-pasting-logo.png" },
  },
  image: [
    "https://phantompasting.com/gallery/fifa-world-cup-atlanta-wall-installation.webp",
    "https://phantompasting.com/gallery/fifa-world-cup-poster-wall-angle-view.webp",
    "https://phantompasting.com/gallery/fifa-world-cup-poster-wall-street-perspective.webp",
    "https://phantompasting.com/gallery/fifa-world-cup-wheat-paste-posters-closeup.webp",
    "https://phantompasting.com/gallery/fifa-world-cup-poster-wall-gallery-wide.webp",
  ],
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://phantompasting.com/work/fifa-world-cup-atlanta" },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }} />

      <div style={{ background: "transparent", minHeight: "100vh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="relative px-5 sm:px-8 md:px-12 lg:px-16 pt-12 pb-16 md:pt-20 md:pb-20 overflow-hidden">
          <span aria-hidden className="absolute inset-x-0 top-2 text-center font-black uppercase pointer-events-none select-none"
            style={{ fontSize: "clamp(50px, 10vw, 160px)", letterSpacing: "-0.05em", color: "rgba(212,160,16,0.05)", lineHeight: 1 }}>
            FIFA WORLD CUP
          </span>
          <div className="relative z-10 max-w-[900px]">
            <Link href="/" className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase mb-6 no-underline"
              style={{ color: "rgba(0,0,0,0.4)" }}>← Back to Work</Link>
            <h1 className="font-black uppercase m-0 leading-[0.88]"
              style={{ fontSize: "clamp(40px, 7vw, 96px)", letterSpacing: "-0.04em" }}>
              FIFA WORLD CUP<br /><ShinyGoldText>ATLANTA.</ShinyGoldText>
            </h1>
            <p className="font-light leading-relaxed mt-6 max-w-[540px]"
              style={{ fontSize: "clamp(15px, 1.6vw, 18px)", color: "rgba(0,0,0,0.5)" }}>
              Massive wheat paste and wild posting campaign across Atlanta for the
              FIFA World Cup. Multi-wall installations in high-traffic zones —
              creating an inescapable street presence for the world&apos;s biggest
              sporting event.
            </p>
          </div>
        </section>

        {/* ── Stats inline ──────────────────────────────────────── */}
        <div className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20 md:pb-24">
          <div className="max-w-[1200px] mx-auto flex flex-wrap gap-12 md:gap-20">
            {[
              { stat: "FIFA", label: "Client" },
              { stat: "Atlanta, GA", label: "City" },
              { stat: "Wheat Pasting", label: "Format" },
              { stat: "Multi-Wall", label: "Scale" },
            ].map(({ stat, label }) => (
              <div key={label}>
                <div className="font-black uppercase leading-none"
                  style={{ fontSize: "clamp(18px, 2vw, 28px)", letterSpacing: "-0.03em", color: ACCENT }}>
                  {stat}
                </div>
                <div className="font-mono text-[9px] tracking-[0.3em] uppercase mt-2" style={{ color: "rgba(0,0,0,0.4)" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Gallery ───────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-16 md:pb-24">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {IMAGES.map((img, i) => (
                <div key={img.src}
                  className={`relative rounded-2xl overflow-hidden ${i === 0 ? "md:col-span-2" : ""}`}
                  style={{ aspectRatio: i === 0 ? "16/9" : "4/3" }}>
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes={i === 0 ? "100vw" : "50vw"} />
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
                style={{ color: "rgba(0,0,0,0.35)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                The Brief
              </span>
              <h2 className="font-black uppercase m-0 mb-5 leading-[0.9]"
                style={{ fontSize: "clamp(24px, 3vw, 38px)", letterSpacing: "-0.03em" }}>
                WORLD CUP<br /><span style={{ color: ACCENT }}>ON THE STREETS.</span>
              </h2>
              <p className="font-light leading-relaxed" style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px" }}>
                The FIFA World Cup needed street-level buzz in Atlanta — one of the
                host cities. The goal was a city-wide visual takeover that built
                excitement leading up to the matches and created an unmissable
                atmosphere across the city&apos;s most walkable neighborhoods.
              </p>
            </div>
            <div>
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-4 flex items-center gap-2"
                style={{ color: "rgba(0,0,0,0.35)" }}>
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
                stopped to photograph. Every hit documented and delivered.
              </p>
            </div>
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
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.35)" }}>Case Study</div>
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
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.35)" }}>Case Study</div>
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
              {[{ label: "Wheat Pasting", href: "/services/wheat-pasting" }, { label: "Chalk Stencils", href: "/services/chalk-spray-stencils" },
                { label: "Full Impact", href: "/services/full-impact-campaigns" }, { label: "Contact", href: "/contact" }, { label: "About", href: "/about" }
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
