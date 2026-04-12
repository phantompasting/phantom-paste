import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import ShinyGoldText from "@/components/ShinyGoldText";

export const metadata: Metadata = {
  title: "Incrediwear Guerrilla Marketing | Phantom Pasting",
  description:
    "Incrediwear guerrilla marketing street campaign featuring pole wraps, sticker campaigns, and nighttime urban advertising. Full documentation across multiple US cities.",
  keywords: [
    "Incrediwear guerrilla marketing",
    "pole wrap advertising",
    "sticker campaign urban",
    "street advertising night",
    "guerrilla marketing campaign",
  ],
  alternates: { canonical: "https://www.phantompasting.com/work/incrediwear-street-campaign" },
  openGraph: {
    title: "Incrediwear Guerrilla Marketing | Phantom Pasting",
    description: "Incrediwear street campaign — pole wraps, stickers, and nighttime urban advertising.",
    url: "https://www.phantompasting.com/work/incrediwear-street-campaign",
    type: "article",
    images: [{ url: "https://www.phantompasting.com/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp", width: 1200, height: 630, alt: "Incrediwear pole wrap guerrilla advertising at night" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.phantompasting.com" },
    { "@type": "ListItem", position: 2, name: "Work", item: "https://www.phantompasting.com/work/incrediwear-street-campaign" },
    { "@type": "ListItem", position: 3, name: "Incrediwear Street Campaign", item: "https://www.phantompasting.com/work/incrediwear-street-campaign" },
  ],
};

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Incrediwear Guerrilla Marketing Street Campaign",
  description: "Multi-format guerrilla marketing campaign for Incrediwear featuring pole wraps and urban sticker campaigns.",
  url: "https://www.phantompasting.com/work/incrediwear-street-campaign",
  datePublished: "2025-12-05",
  dateModified: "2025-12-05",
  author: { "@type": "Organization", name: "Phantom Pasting", url: "https://www.phantompasting.com" },
  publisher: {
    "@type": "Organization",
    name: "Phantom Pasting",
    url: "https://www.phantompasting.com",
    logo: { "@type": "ImageObject", url: "https://www.phantompasting.com/phantom-pasting-logo.png" },
  },
  image: [
    "https://www.phantompasting.com/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp",
    "https://www.phantompasting.com/gallery/street-pole-sticker-campaign-urban-advertising.webp",
    "https://www.phantompasting.com/gallery/sticker-campaign-street-intersection-urban.webp",
  ],
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.phantompasting.com/work/incrediwear-street-campaign" },
};

const ACCENT = "#D4A010";

const IMAGES = [
  { src: "/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp", alt: "Incrediwear pole wrap guerrilla advertising at night" },
  { src: "/gallery/street-pole-sticker-campaign-urban-advertising.webp", alt: "Street pole sticker campaign urban advertising" },
  { src: "/gallery/sticker-campaign-street-intersection-urban.webp", alt: "Sticker campaign at street intersection" },
];

export default function IncrediwearCaseStudy() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }} />

      <div style={{ background: "transparent", minHeight: "100vh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="relative px-5 sm:px-8 md:px-12 lg:px-16 pt-12 pb-16 md:pt-20 md:pb-20 overflow-hidden">
          <span aria-hidden className="absolute inset-x-0 top-2 text-center font-black uppercase pointer-events-none select-none"
            style={{ fontSize: "clamp(50px, 10vw, 180px)", letterSpacing: "-0.05em", color: "rgba(212,160,16,0.05)", lineHeight: 1 }}>
            INCREDIWEAR
          </span>
          <div className="relative z-10 max-w-[900px]">
            <Link href="/" className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase mb-6 no-underline"
              style={{ color: "rgba(0,0,0,0.4)" }}>← Back to Work</Link>
            <h1 className="font-black uppercase m-0 leading-[0.88]"
              style={{ fontSize: "clamp(40px, 7vw, 96px)", letterSpacing: "-0.04em" }}>
              INCREDIWEAR<br /><ShinyGoldText>STREET CAMPAIGN.</ShinyGoldText>
            </h1>
            <p className="font-light leading-relaxed mt-6 max-w-[540px]"
              style={{ fontSize: "clamp(15px, 1.6vw, 18px)", color: "rgba(0,0,0,0.5)" }}>
              Multi-format guerrilla marketing campaign for Incrediwear — pole wraps,
              sticker saturation, and nighttime urban advertising. Street-level brand
              presence that catches eyes day and night.
            </p>
          </div>
        </section>

        {/* ── Stats inline ──────────────────────────────────────── */}
        <div className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20 md:pb-24">
          <div className="max-w-[1200px] mx-auto flex flex-wrap gap-12 md:gap-20">
            {[
              { stat: "Incrediwear", label: "Client" },
              { stat: "Multi-Format", label: "Format" },
              { stat: "Day & Night", label: "Execution" },
              { stat: "100% Photo", label: "Documentation" },
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
                RECOVERY BRAND,<br /><span style={{ color: ACCENT }}>STREET PRESENCE.</span>
              </h2>
              <p className="font-light leading-relaxed" style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px" }}>
                Incrediwear needed grassroots visibility for their performance recovery products.
                The ask: put the brand in front of active, health-conscious audiences at street level —
                near gyms, parks, and fitness-focused neighborhoods — using formats that feel native
                to the urban environment.
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
                POLES, STICKERS,<br /><span style={{ color: ACCENT }}>INTERSECTIONS.</span>
              </h2>
              <p className="font-light leading-relaxed" style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px" }}>
                We deployed pole wraps with illuminated nighttime impact, sticker saturation
                at key urban intersections, and targeted placements near fitness centers and
                active lifestyle hubs. Multi-format execution that kept the brand visible
                around the clock — day and night.
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
              <Link href="/work/fifa-world-cup-atlanta" className="no-underline rounded-2xl p-7 flex items-center justify-between"
                style={{ background: "rgba(248,247,244,0.9)", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.35)" }}>Case Study</div>
                  <div className="font-black uppercase leading-tight"
                    style={{ fontSize: "clamp(17px, 1.8vw, 22px)", letterSpacing: "-0.02em", color: "#1A1A1A" }}>
                    FIFA WORLD CUP<br />ATLANTA
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
                { label: "Full Impact", href: "/services/full-impact-campaigns" }, { label: "Gallery", href: "/gallery" },
                { label: "New York", href: "/locations/new-york" }, { label: "Los Angeles", href: "/locations/los-angeles" },
                { label: "Contact", href: "/contact" }, { label: "About", href: "/about" }
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
