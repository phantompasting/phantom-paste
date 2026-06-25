import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import ShinyGoldText from "@/components/ShinyGoldText";
import Breadcrumb from "@/components/Breadcrumb";
import SiteFooter from "@/components/SiteFooter";
import TrustBar from "@/components/TrustBar";
import { BUSINESS } from "@/lib/business";
import { articleSchema, jsonLd } from "@/lib/schema";

const PAGE_URL = `${BUSINESS.url}/artists/steven-sued`;
const PORTRAIT = "/artists/steven-sued/steven-sued-creative-director-mural-artist-portrait.webp";
const PAGE_OG = `${BUSINESS.url}/artists/steven-sued/steven-sued-mural-avocado-man.webp`;
const PAGE_TITLE = "Steven Sued · Mural Artist & Designer";
const PAGE_DESC =
  "Steven Sued — featured mural artist and creative director. Original hand-painted murals for business, commissioned and fully managed through Phantom Pasting.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "Steven Sued",
    "Steven Sued mural artist",
    "Steven Sued graphic designer",
    "mural artist Los Angeles",
    "commission a mural artist",
    "Four Quarters Agency",
    "hand-painted mural artist",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Steven Sued · Mural Artist & Designer | Phantom Pasting",
    description: PAGE_DESC,
    url: PAGE_URL,
    type: "profile",
    images: [{ url: PAGE_OG, width: 1200, height: 630, alt: "Avocado Man wall mural by Steven Sued" }],
  },
};

const ACCENT = "#D4A010";

const MURALS: { src: string; label: string; desc: string; wide?: boolean }[] = [
  { src: "/artists/steven-sued/steven-sued-mural-avocado-man.webp", label: "Avocado Man", desc: "Bold blue portrait mural on an exterior building wall.", wide: true },
  { src: "/artists/steven-sued/steven-sued-mural-groovy.webp", label: "Groovy", desc: "Vibrant retro hand-lettering and color blocking." },
  { src: "/artists/steven-sued/steven-sued-mural-electric-snail.webp", label: "Electric Snail", desc: "Large-format line-work character on a warehouse wall." },
  { src: "/artists/steven-sued/steven-sued-mural-amarena-bakery.webp", label: "Amarena Bakery", desc: "Interior brand mural anchoring a café dining room." },
  { src: "/artists/steven-sued/steven-sued-mural-boo.webp", label: "Boo", desc: "Street-facing mural on a brick building corner." },
  { src: "/artists/steven-sued/steven-sued-mural-gratitude.webp", label: "Gratitude", desc: "Flowing single-color line-work across an interior wall." },
  { src: "/artists/steven-sued/steven-sued-mural-up.webp", label: "UP", desc: "Bold dimensional lettering on a concrete street wall." },
  { src: "/artists/steven-sued/steven-sued-mural-live-and-learn.webp", label: "Live & Learn", desc: "Purple-and-gold hand-lettered script mural over a patterned wall." },
] as const;

const SKILLS = [
  "Murals", "Branding & Identity", "Illustration", "Art Direction", "Graphic Design", "Packaging Design", "Lettering",
] as const;

const stevenPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Steven Sued",
  jobTitle: "Mural Artist & Creative Director",
  url: PAGE_URL,
  description:
    "Mural artist, creative director, and graphic designer with 10+ years in design and marketing; founder of Four Quarters Agency and featured mural artist for Phantom Pasting.",
  image: `${BUSINESS.url}${PORTRAIT}`,
  knowsAbout: ["Mural Art", "Brand Identity Design", "Illustration", "Art Direction", "Graphic Design", "Lettering"],
  worksFor: { "@id": `${BUSINESS.url}/#org` },
};

export default function StevenSuedArtistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(stevenPersonSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            articleSchema({
              headline: "Steven Sued — Featured Mural Artist",
              description: PAGE_DESC,
              url: PAGE_URL,
              image: PAGE_OG,
              datePublished: "2026-06-20",
              dateModified: "2026-06-20",
              articleSection: "Artists",
              articleBody:
                "Steven Sued is a mural artist, creative director, and graphic designer — Phantom Pasting's first featured artist for its managed mural service.",
              keywords: ["steven sued", "mural artist", "graphic designer", "four quarters agency"],
              audienceType: "Business Owners, Brand Marketers",
              genre: "Artist Profile",
            })
          ),
        }}
      />

      <div style={{ background: "transparent", minHeight: "100dvh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Art Murals", href: "/services/art-murals" },
            { name: "Steven Sued", href: "/artists/steven-sued" },
          ]}
        />
        <TrustBar />

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pt-4 pb-16 md:pb-24">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden order-1 md:order-none" style={{ aspectRatio: "4/5", boxShadow: "0 24px 64px rgba(0,0,0,0.18)" }}>
              <Image src={PORTRAIT} alt="Steven Sued — mural artist, creative director, and graphic designer" fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" priority />
            </div>
            <div>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase mb-5 flex items-center gap-2" style={{ color: ACCENT }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                Featured Artist · 01
              </span>
              <h1 className="font-black uppercase m-0 leading-[0.88]" style={{ fontSize: "clamp(44px, 6.5vw, 96px)", letterSpacing: "-0.045em" }}>
                STEVEN <ShinyGoldText>SUED.</ShinyGoldText>
              </h1>
              <div className="font-mono text-[11px] tracking-[0.25em] uppercase mt-4 mb-6" style={{ color: "rgba(0,0,0,0.55)" }}>
                Graphic Designer + Mural Artist
              </div>
              <p className="font-light leading-relaxed m-0 mb-4" style={{ color: "rgba(0,0,0,0.6)", fontSize: "16px", maxWidth: "560px" }}>
                Steven is a creative director and graphic designer with 10+ years in design and
                marketing, and the founder of Four Quarters Agency. His work spans brand identity,
                illustration, and art direction for clients including the Avenue of the Arts Festival,
                BFyne, Rutgers University, and NJIT.
              </p>
              <p className="font-light leading-relaxed m-0 mb-8" style={{ color: "rgba(0,0,0,0.6)", fontSize: "16px", maxWidth: "560px" }}>
                As Phantom Pasting&apos;s first featured artist, he brings that design sensibility to the
                wall — translating a brand or a space into an original, hand-painted mural. Commission
                Steven through Phantom Pasting and we handle everything around the art.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {SKILLS.map((s) => (
                  <span key={s} className="font-mono text-[9px] tracking-[0.15em] uppercase px-3 py-2 rounded-full" style={{ color: "rgba(0,0,0,0.6)", background: "rgba(212,160,16,0.1)", border: "1px solid rgba(212,160,16,0.25)" }}>{s}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-7 py-4 rounded-full" style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #F5CA20 100%)`, color: "#FFF", boxShadow: "0 6px 28px rgba(212,160,16,0.45)" }}>
                  Commission Steven <span className="cta-arrow">→</span>
                </Link>
                <Link href="/services/art-murals" className="inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.18em] uppercase no-underline px-6 py-4 rounded-full" style={{ color: "rgba(0,0,0,0.82)", background: "rgba(255,255,255,0.9)", border: "1px solid rgba(0,0,0,0.14)" }}>
                  About Art Murals →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Mural gallery ─────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-16 md:pb-24">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-10 md:mb-12">
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase flex items-center gap-2" style={{ color: "rgba(0,0,0,0.55)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                Selected Murals
              </span>
              <h2 className="font-black uppercase m-0 mt-3 leading-[0.9]" style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.035em" }}>
                ON THE <span style={{ color: ACCENT }}>WALL.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {MURALS.map((m) => (
                <figure key={m.label} className={`m-0 rounded-2xl overflow-hidden ${m.wide ? "sm:col-span-2 lg:col-span-1" : ""}`} style={{ background: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 2px 14px rgba(0,0,0,0.05)" }}>
                  <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                    <Image src={m.src} alt={`${m.label} — mural by Steven Sued`} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" loading="lazy" />
                  </div>
                  <figcaption className="p-5">
                    <div className="font-black uppercase leading-tight mb-1" style={{ fontSize: "14px", letterSpacing: "-0.01em" }}>{m.label}</div>
                    <p className="font-light m-0 leading-relaxed" style={{ color: "rgba(0,0,0,0.55)", fontSize: "12.5px" }}>{m.desc}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ── How to commission ─────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-16 md:pb-24">
          <div className="max-w-[1000px] mx-auto">
            <div className="mb-10 md:mb-12">
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase flex items-center gap-2" style={{ color: "rgba(0,0,0,0.55)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                Working With Steven
              </span>
              <h2 className="font-black uppercase m-0 mt-3 leading-[0.9]" style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.035em" }}>
                ART YOU COMMISSION,<br /><span style={{ color: ACCENT }}>BUSINESS WE HANDLE.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { h: "Tell us your wall", b: "Share your space, your brand, and the feeling you want — interior or exterior. We scope size, surface, and budget, and match you to Steven&apos;s style." },
                { h: "Steven designs it", b: "He develops concept sketches and a final design. Nothing touches the wall until you approve the artwork, placement, and palette." },
                { h: "We run the rest", b: "Phantom Pasting handles the contract, scheduling, prep, and payment. You get original art with zero freelancer hassle." },
              ].map(({ h, b }) => (
                <div key={h} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.7)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}>
                  <h3 className="font-black uppercase m-0 mb-2 leading-tight" style={{ fontSize: "15px", letterSpacing: "-0.01em" }} dangerouslySetInnerHTML={{ __html: h }} />
                  <p className="font-light m-0 leading-relaxed" style={{ color: "rgba(0,0,0,0.58)", fontSize: "13.5px" }} dangerouslySetInnerHTML={{ __html: b }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32 text-center">
          <div className="max-w-[700px] mx-auto">
            <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]" style={{ fontSize: "clamp(34px, 5.5vw, 72px)", letterSpacing: "-0.04em" }}>
              COMMISSION<br /><ShinyGoldText>A MURAL.</ShinyGoldText>
            </h2>
            <p className="font-light leading-relaxed mb-8 mx-auto" style={{ color: "rgba(0,0,0,0.5)", fontSize: "15px", maxWidth: "460px" }}>
              Tell us your space and the feeling you&apos;re after. We&apos;ll put Steven on it and send a plan within 24 hours.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="service-cta relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-10 py-5 rounded-full overflow-hidden" style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #F5CA20 100%)`, color: "#FFF", boxShadow: `0 6px 32px rgba(212,160,16,0.55), 0 1px 0 rgba(255,255,255,0.25) inset` }}>
                <span className="absolute inset-0 pointer-events-none rounded-full" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 55%)" }} />
                Commission Steven <span className="cta-arrow">→</span>
              </Link>
              <a href={BUSINESS.telHref} className="inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-8 py-5 rounded-full" style={{ color: "#1A1A1A", background: "rgba(255,255,255,0.9)", border: "1px solid rgba(0,0,0,0.14)" }}>
                Call {BUSINESS.telephoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
