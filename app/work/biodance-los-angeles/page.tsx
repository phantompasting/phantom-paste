import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import ShinyGoldText from "@/components/ShinyGoldText";
import Breadcrumb from "@/components/Breadcrumb";
import SiteFooter from "@/components/SiteFooter";
import TrustBar from "@/components/TrustBar";
import { BUSINESS } from "@/lib/business";
import { articleSchema, faqPageSchema, jsonLd } from "@/lib/schema";

const PAGE_URL = `${BUSINESS.url}/work/biodance-los-angeles`;
const PAGE_OG = `${BUSINESS.url}/gallery/biodance-making-a-splash-poster-wall-the-grove-los-angeles.webp`;
const PAGE_TITLE = "Biodance LA · Multi-Format Case Study";
const PAGE_DESC =
  "Biodance 'We Are Making A Splash' case study — a multi-format LA launch combining wheat paste walls, die-cut stickers, and chalk stencils around The Grove.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "Biodance campaign case study",
    "We Are Making A Splash campaign",
    "multi-format guerrilla marketing case study",
    "skincare brand street campaign Los Angeles",
    "The Grove launch activation",
    "wheat paste sticker stencil campaign",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Biodance LA · Multi-Format Case Study | Phantom Pasting",
    description: "Biodance 'We Are Making A Splash' — wheat paste walls, stickers, and chalk stencils across Los Angeles. Brief, execution, documentation.",
    url: PAGE_URL,
    type: "article",
    images: [{ url: PAGE_OG, width: 1200, height: 630, alt: "Biodance We Are Making A Splash wheat paste poster wall at The Grove in Los Angeles" }],
  },
};

const ACCENT = "#D4A010";

const IMAGES = [
  { src: "/gallery/biodance-making-a-splash-poster-wall-the-grove-los-angeles.webp", alt: "Biodance We Are Making A Splash wheat paste poster wall at The Grove Los Angeles" },
  { src: "/gallery/biodance-making-a-splash-wheat-paste-scaffold-wall-los-angeles.webp", alt: "Biodance wheat paste poster wall under scaffolding in Los Angeles" },
  { src: "/gallery/biodance-hydrogel-splash-sticker-pole-night-los-angeles.webp", alt: "Biodance Hydrogel Splash die-cut sticker on a street pole at night in Los Angeles" },
  { src: "/gallery/biodance-glow-on-the-go-chalk-stencil-sidewalk-los-angeles.webp", alt: "Biodance Glow On The Go pink chalk spray sidewalk stencil in Los Angeles" },
];

const CASE_STUDY_FAQS: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: "What formats did the Biodance campaign use?",
    a: "Three, stacked into one coordinated push: wheat paste poster walls (the anchor), die-cut Hydrogel Splash stickers on walls and street poles, and pink 'Glow On The Go' chalk-spray sidewalk stencils that pointed foot traffic toward the activation. Layering paste, snipes, and stencils multiplies frequency — the same audience sees the brand on a wall, a pole, and the pavement.",
  },
  {
    q: "Where in Los Angeles did the Biodance launch run?",
    a: "It centered on The Grove and the surrounding corridors over a two-day launch window (May 30–31). Wheat paste walls landed on scaffold wraps, a freeway-underpass wall, plywood construction barriers, and a storefront wall lit at night, with stickers and sidewalk stencils filling the streets in between.",
  },
  {
    q: "Why run a multi-format campaign instead of just posters?",
    a: "A single format reaches a person once; multiple formats reach the same person repeatedly across a short walk. For a product launch like Biodance's Hydrogel Splash, that compounding frequency in a tight geographic window — anchored on a destination like The Grove — turns a wall into a moment people photograph and share.",
  },
];

export default function BiodanceCaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            articleSchema({
              headline: "Biodance — Multi-Format Launch Campaign in Los Angeles",
              description: "Biodance 'We Are Making A Splash' multi-format launch — wheat paste walls, stickers, and chalk stencils around The Grove in Los Angeles.",
              url: PAGE_URL,
              image: PAGE_OG,
              datePublished: "2026-06-20",
              dateModified: "2026-06-20",
              articleSection: "Case Studies",
              articleBody:
                "Biodance launched its Hydrogel Splash product in LA with a multi-format street campaign — wheat paste poster walls anchored by die-cut stickers and pink chalk-spray sidewalk stencils, concentrated around The Grove over a two-day window.",
              keywords: [
                "biodance",
                "case study",
                "we are making a splash",
                "the grove",
                "multi-format campaign",
                "skincare brand guerrilla marketing",
                "wheat paste sticker stencil",
              ],
              audienceType: "Brand Marketers, Marketing Agencies, Beauty & Skincare Brands",
              genre: "Case Study",
            })
          ),
        }}
      />
      {/* Org + WebSite schema injected globally via app/layout.tsx (see lib/schema.ts orgSchema). */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqPageSchema(CASE_STUDY_FAQS)) }}
      />

      <div style={{ background: "transparent", minHeight: "100dvh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Work", href: "/work" },
            { name: "Biodance Los Angeles", href: "/work/biodance-los-angeles" },
          ]}
        />
        <TrustBar />

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="relative max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-6 md:py-10 lg:py-14 text-center">
            <div className="inline-flex items-center gap-4 mb-8">
              <span style={{ width: 40, height: 1, background: "rgba(0,0,0,0.14)" }} />
              <Link href="/work" className="font-mono text-[10px] tracking-[0.3em] uppercase no-underline" style={{ color: "rgba(0,0,0,0.55)" }}>← Back to Work</Link>
              <span style={{ width: 8, height: 1, background: "rgba(0,0,0,0.14)" }} />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: ACCENT }}>
                Case Study / Beauty
              </span>
              <span style={{ width: 40, height: 1, background: "rgba(0,0,0,0.14)" }} />
            </div>
            <h1 className="font-black uppercase m-0 leading-[0.88] mx-auto" style={{ fontSize: "clamp(44px, 7vw, 120px)", letterSpacing: "-0.045em", maxWidth: "1280px" }}>
              BIODANCE <ShinyGoldText>LOS ANGELES.</ShinyGoldText>
            </h1>
            <p className="font-light leading-relaxed mt-8 mb-10 mx-auto" style={{ fontSize: "clamp(17px, 1.5vw, 20px)", color: "rgba(0,0,0,0.55)", maxWidth: "680px" }}>
              A multi-format launch for &ldquo;We Are Making A Splash&rdquo; — wheat paste
              poster walls, die-cut Hydrogel Splash stickers, and pink chalk-spray sidewalk
              stencils, concentrated around The Grove over a two-day window.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="hero-cta-primary relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-8 py-4 rounded-full overflow-hidden"
                style={{ background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)", color: "#FFF", boxShadow: "0 4px 28px rgba(0,0,0,0.42), 0 1px 0 rgba(255,255,255,0.08) inset" }}>
                <span className="absolute inset-0 pointer-events-none rounded-full" style={{ background: "linear-gradient(180deg, rgba(196,162,18,0.28) 0%, transparent 48%)" }} />
                Get a Quote <span className="cta-arrow" style={{ color: ACCENT }}>→</span>
              </Link>
              <Link href="/services/full-impact-campaigns" className="hero-cta-secondary inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.18em] uppercase no-underline px-6 py-4 rounded-full"
                style={{ color: "rgba(0,0,0,0.82)", background: "rgba(255,255,255,0.9)", border: "1px solid rgba(0,0,0,0.14)", boxShadow: "0 2px 12px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)" }}>
                Full Impact Campaigns →
              </Link>
            </div>
            <div className="mt-14 pt-8 mx-auto" style={{ borderTop: "1px solid rgba(0,0,0,0.08)", maxWidth: "1040px" }}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                {[
                  { stat: "Biodance", label: "Client" },
                  { stat: "Los Angeles", label: "City" },
                  { stat: "Multi-Format", label: "Approach" },
                  { stat: "2026", label: "Year" },
                ].map(({ stat, label }) => (
                  <div key={label}>
                    <div className="font-black uppercase leading-none" style={{ fontSize: "clamp(17px, 1.9vw, 24px)", letterSpacing: "-0.03em", color: ACCENT }}>{stat}</div>
                    <div className="font-mono text-[9px] tracking-[0.3em] uppercase mt-2" style={{ color: "rgba(0,0,0,0.55)" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Gallery ───────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-16 md:pb-24">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {IMAGES.map((img, i) => (
                <div key={img.src} className={`relative rounded-2xl overflow-hidden ${i === 0 ? "md:col-span-2" : ""}`} style={{ aspectRatio: i === 0 ? "16/9" : "4/3" }}>
                  <Image src={img.src} alt={img.alt} fill className="object-cover"
                    sizes={i === 0 ? "(max-width: 768px) 100vw, 1200px" : "(max-width: 768px) 100vw, 600px"}
                    quality={i === 0 ? 78 : 70} priority={i === 0} loading={i === 0 ? "eager" : "lazy"} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Brief / Execution ─────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-4 flex items-center gap-2" style={{ color: "rgba(0,0,0,0.55)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                The Brief
              </span>
              <h2 className="font-black uppercase m-0 mb-5 leading-[0.9]" style={{ fontSize: "clamp(24px, 3vw, 38px)", letterSpacing: "-0.03em" }}>
                LAUNCH A<br /><span style={{ color: ACCENT }}>SPLASH.</span>
              </h2>
              <p className="font-light leading-relaxed" style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px" }}>
                Biodance — a Korean skincare brand known for its hydrogel masks — needed its
                &ldquo;We Are Making A Splash&rdquo; Hydrogel Splash launch to feel like an event in the
                streets, not just another post in the feed. The brand wanted concentrated,
                photographable presence around a destination, with enough repetition that a single
                shopper would encounter the launch more than once on the same walk. The goal was
                density and energy in one tight window — not a thin spread across the whole city.
              </p>
            </div>
            <div>
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-4 flex items-center gap-2" style={{ color: "rgba(0,0,0,0.55)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                The Execution
              </span>
              <h2 className="font-black uppercase m-0 mb-5 leading-[0.9]" style={{ fontSize: "clamp(24px, 3vw, 38px)", letterSpacing: "-0.03em" }}>
                THREE FORMATS,<br /><span style={{ color: ACCENT }}>ONE BLOCK.</span>
              </h2>
              <p className="font-light leading-relaxed" style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px" }}>
                We anchored the launch on wheat paste poster walls around The Grove — scaffold wraps,
                a freeway-underpass wall, plywood construction barriers, and a storefront wall lit at
                night. Between the walls we layered die-cut Hydrogel Splash stickers on poles and
                surfaces and pink &ldquo;Glow On The Go&rdquo; chalk-spray sidewalk stencils that
                pointed foot traffic toward the activation. Every surface was photographed across the
                two-day window and delivered as a full campaign report.
              </p>
            </div>
          </div>
        </section>

        {/* ── The Formats ───────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-16 md:pb-24">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-10 md:mb-14">
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase flex items-center gap-2" style={{ color: "rgba(0,0,0,0.55)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                The Formats
              </span>
              <h2 className="font-black uppercase m-0 mt-3 leading-[0.9]" style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.035em" }}>
                PASTE, SNIPES,<br /><span style={{ color: ACCENT }}>AND STENCILS.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "WHEAT PASTE WALLS", tag: "The Anchor", body: "Large-format poster walls did the heavy lifting — scaffold wraps, an underpass wall, plywood barriers, and a night-lit storefront. Paste reads as part of the street, so the launch felt cultural, not commercial." },
                { name: "DIE-CUT STICKERS", tag: "The Connective Tissue", body: "Hydrogel Splash stickers on poles and surfaces between the walls. Snipes are the cheapest way to build frequency — they catch the eye in the gaps where a full wall would be overkill." },
                { name: "CHALK STENCILS", tag: "The Wayfinding", body: "Pink 'Glow On The Go' chalk-spray sidewalk stencils pointed foot traffic toward the activation. Temporary, legal, and playful — stencils turned the pavement itself into part of the campaign." },
              ].map(({ name, tag, body }) => (
                <div key={name} className="rounded-2xl p-7" style={{ background: "rgba(255,255,255,0.5)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 2px 14px rgba(0,0,0,0.04)" }}>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.55)" }}>{tag}</div>
                  <h3 className="font-black uppercase m-0 mb-4 leading-none" style={{ fontSize: "clamp(18px, 2vw, 24px)", letterSpacing: "-0.03em", color: ACCENT }}>{name}</h3>
                  <p className="font-light m-0 leading-relaxed" style={{ fontSize: "14px", color: "rgba(0,0,0,0.58)" }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Campaign Impact ───────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-16 md:pb-24">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase inline-flex items-center gap-2" style={{ color: "rgba(0,0,0,0.55)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                Why It Worked
              </span>
              <h2 className="font-black uppercase m-0 mt-3 leading-[0.9]" style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.035em" }}>
                FREQUENCY IN <span style={{ color: ACCENT }}>ONE WALK.</span>
              </h2>
              <p className="font-light leading-relaxed mx-auto mt-5" style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px", maxWidth: "680px" }}>
                A destination like The Grove concentrates exactly the foot traffic a beauty launch
                wants. By stacking three formats in one geography, a single shopper met Biodance on a
                wall, then a pole, then the sidewalk — three impressions on one trip, each reinforcing
                the last. That is the multiplier a single billboard can never deliver.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { n: "3", l: "Formats Stacked" },
                { n: "2-Day", l: "Launch Window" },
                { n: "100%", l: "Photo Documented" },
                { n: "The Grove", l: "Anchor Destination" },
              ].map(({ n, l }) => (
                <div key={l} className="rounded-2xl p-6 md:p-7 text-center" style={{ background: "rgba(255,255,255,0.5)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 2px 14px rgba(0,0,0,0.04)" }}>
                  <div className="font-black leading-none" style={{ fontSize: "clamp(24px, 3.4vw, 40px)", letterSpacing: "-0.04em", color: ACCENT }}>{n}</div>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mt-3" style={{ color: "rgba(0,0,0,0.58)" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[820px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2" style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              About This Campaign
            </span>
            <h2 className="font-black uppercase m-0 mb-10 leading-[0.92]" style={{ fontSize: "clamp(28px, 3.6vw, 44px)", letterSpacing: "-0.035em" }}>
              CAMPAIGN<span style={{ color: ACCENT }}> Q&amp;A.</span>
            </h2>
            <div className="flex flex-col gap-3">
              {CASE_STUDY_FAQS.map(({ q, a }) => (
                <details key={q} className="rounded-2xl" style={{ background: "rgba(255,255,255,0.40)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.7)" }}>
                  <summary className="cursor-pointer font-black uppercase list-none flex items-center justify-between gap-4" style={{ fontSize: "14px", letterSpacing: "-0.01em", padding: "1.1rem 1.5rem", color: "#1A1A1A" }}>
                    <span>{q}</span>
                    <span aria-hidden className="font-mono" style={{ color: ACCENT, fontSize: "18px", flexShrink: 0 }}>+</span>
                  </summary>
                  <div className="font-light leading-relaxed" style={{ fontSize: "15px", color: "rgba(0,0,0,0.72)", padding: "0 1.5rem 1.25rem" }}>{a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Service Backlink ──────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-16 md:pb-20">
          <div className="max-w-[900px] mx-auto rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5" style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.6)" }}>
            <div>
              <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.55)" }}>Approach Used in This Campaign</div>
              <div className="font-black uppercase leading-tight mb-1" style={{ fontSize: "clamp(16px, 1.8vw, 22px)", letterSpacing: "-0.02em", color: "#1A1A1A" }}>Full Impact Campaigns</div>
              <p className="font-light m-0" style={{ fontSize: "13px", color: "rgba(0,0,0,0.5)" }}>Wheat paste, snipes, and stencils stacked into one coordinated takeover — the multi-format approach behind this Biodance launch.</p>
            </div>
            <Link href="/services/full-impact-campaigns" className="shrink-0 no-underline font-bold text-[11px] tracking-[0.2em] uppercase px-6 py-3 rounded-full whitespace-nowrap" style={{ background: `linear-gradient(135deg, #D4A010 0%, #F5CA20 100%)`, color: "#FFF", boxShadow: "0 4px 20px rgba(212,160,16,0.45)" }}>
              Explore Full Impact →
            </Link>
          </div>
        </section>

        {/* ── More Work + CTA ───────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]" style={{ fontSize: "clamp(20px, 2.5vw, 32px)", letterSpacing: "-0.025em" }}>
              MORE WORK<span style={{ color: ACCENT }}>.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
              <Link href="/work/fashionpass-los-angeles" className="no-underline rounded-2xl p-7 flex items-center justify-between" style={{ background: "rgba(248,247,244,0.9)", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.55)" }}>Case Study</div>
                  <div className="font-black uppercase leading-tight" style={{ fontSize: "clamp(17px, 1.8vw, 22px)", letterSpacing: "-0.02em", color: "#1A1A1A" }}>FASHIONPASS<br />LOS ANGELES</div>
                </div>
                <span style={{ color: ACCENT, fontSize: "24px" }}>→</span>
              </Link>
              <Link href="/work/fifa-world-cup-atlanta" className="no-underline rounded-2xl p-7 flex items-center justify-between" style={{ background: "rgba(248,247,244,0.9)", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.55)" }}>Case Study</div>
                  <div className="font-black uppercase leading-tight" style={{ fontSize: "clamp(17px, 1.8vw, 22px)", letterSpacing: "-0.02em", color: "#1A1A1A" }}>FIFA WORLD CUP<br />ATLANTA</div>
                </div>
                <span style={{ color: ACCENT, fontSize: "24px" }}>→</span>
              </Link>
            </div>

            <div className="text-center">
              <h2 className="font-black uppercase m-0 mb-5 leading-[0.9]" style={{ fontSize: "clamp(32px, 5vw, 64px)", letterSpacing: "-0.04em" }}>
                WANT A LAUNCH<br /><ShinyGoldText>LIKE THIS?</ShinyGoldText>
              </h2>
              <Link href="/contact" className="service-cta relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-10 py-5 rounded-full overflow-hidden" style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #F5CA20 100%)`, color: "#FFF", boxShadow: `0 6px 32px rgba(212,160,16,0.55), 0 1px 0 rgba(255,255,255,0.25) inset` }}>
                <span className="absolute inset-0 pointer-events-none rounded-full" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 55%)" }} />
                Get a Quote <span className="cta-arrow">→</span>
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
