import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import ShinyGoldText from "@/components/ShinyGoldText";
import Breadcrumb from "@/components/Breadcrumb";
import SiteFooter from "@/components/SiteFooter";
import TrustBar from "@/components/TrustBar";
import { BUSINESS } from "@/lib/business";
import {
  serviceSchema,
  webPageSchema,
  articleSchema,
  faqPageSchema,
  jsonLd,
} from "@/lib/schema";
import {
  KW_SERVICE_MURALS,
  KW_MURALS,
  KW_STREET_MARKETING,
} from "@/lib/keywordSets";

const PAGE_URL = `${BUSINESS.url}/services/art-murals`;
const PAGE_OG = `${BUSINESS.url}/artists/steven-sued/steven-sued-mural-groovy.webp`;
const PAGE_TITLE = "Art Murals for Business · Mural Artists";
const PAGE_DESC =
  "Commission original hand-painted murals for your business — interior or exterior. Phantom Pasting matches you with vetted mural artists and manages the project end to end. First featured artist: Steven Sued.";
const DATE_PUBLISHED = "2026-06-18";
const DATE_MODIFIED = "2026-06-18";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [...KW_SERVICE_MURALS],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Art Murals for Business | Phantom Pasting",
    description: PAGE_DESC,
    url: PAGE_URL,
    type: "article",
    publishedTime: DATE_PUBLISHED,
    modifiedTime: DATE_MODIFIED,
    images: [
      {
        url: PAGE_OG,
        width: 1200,
        height: 630,
        alt: "Hand-painted wall mural by featured artist Steven Sued",
      },
    ],
  },
};

const STEPS = [
  {
    num: "01",
    title: "BRIEF & WALL",
    desc: "Tell us about your space, your goals, and the feeling you want on the wall. Share style references or leave it open. We scope size, surface, and budget.",
    bullets: ["Interior or exterior walls", "Style + brand direction"],
  },
  {
    num: "02",
    title: "WE MATCH YOUR ARTIST",
    desc: "We pair you with the artist from our roster whose style fits your space and brand. You review their portfolio and approve the match before anything starts.",
    bullets: ["Vetted artist roster", "You approve the fit"],
  },
  {
    num: "03",
    title: "DESIGN & APPROVAL",
    desc: "Your artist develops concept sketches and a final design. Nothing touches the wall until you sign off on the artwork, placement, and palette.",
    bullets: ["Concept + final design", "Your approval before paint"],
  },
  {
    num: "04",
    title: "PAINT & REVEAL",
    desc: "The artist installs on a set schedule while we handle the contract, prep, scheduling, and payment. You get an original, photo-documented mural — zero freelancer hassle.",
    bullets: ["On-schedule install", "Full photo documentation"],
  },
];

const FAQS = [
  {
    q: "What are art murals for business?",
    a: "Original, hand-painted artwork commissioned for a commercial space — a restaurant dining room, office, retail wall, gym, or storefront exterior. Unlike decor you buy off a shelf, an art mural for business is created for your wall, your brand, and your customers, and it works every day as atmosphere, photo backdrop, and landmark. Phantom Pasting manages the entire commission from artist match to final brushstroke.",
  },
  {
    q: "What is Phantom Pasting's art mural service?",
    a: "It's a fully managed way for businesses to get original, hand-painted murals on their walls. Phantom Pasting connects you with a vetted mural artist, then handles every business detail — scope, contract, scheduling, prep, and payment. You get original art; the artist focuses on creating it; we run the project.",
  },
  {
    q: "How does matching with an artist work?",
    a: "Tell us about your space, brand, and the style you're after. We pair you with the artist from our roster whose work fits best, and you approve the match before anything begins. Our first featured artist is Steven Sued — a creative director and graphic designer with 10+ years of brand and illustration work.",
  },
  {
    q: "Can you do interior and exterior murals?",
    a: "Both. Interior murals for offices, restaurants, retail, lobbies, and gyms; exterior murals on owner-authorized walls and storefronts. We scope surface prep, permits where required, and weather-appropriate materials for outdoor installs.",
  },
  {
    q: "How much does a commissioned mural cost?",
    a: "It depends on wall size, surface, detail, and the artist. Small interior accent walls start in the low four figures; large exterior or highly detailed murals scale from there. Tell us your wall and we'll return a clear quote — one price that covers the artist, materials, and our project management.",
  },
  {
    q: "Who are the artists, and are they vetted?",
    a: "Every artist on our roster is reviewed for craft, professionalism, and reliability before we put them in front of a client. We're building the roster now, led by featured artist Steven Sued (Four Quarters Agency). As we grow, we match each brief to the artist whose style fits it best.",
  },
  {
    q: "Do I own the finished mural?",
    a: "Yes — the commissioned mural on your wall is yours. Specific usage and reproduction rights (for example, using the artwork in your marketing) are spelled out in the project agreement so there are no surprises. We handle that paperwork so you don't have to.",
  },
  {
    q: "What is mural advertising?",
    a: "Mural advertising is brand messaging delivered as hand-painted wall art instead of printed media — the modern descendant of the hand-painted billboard. It earns longer dwell time than any printed format, gets photographed and shared, and reads as a contribution to the street rather than an interruption of it. We run both paint and paper, so a brand can pick the right tool per goal.",
  },
  {
    q: "Do you paint wallscapes and hand-painted billboards?",
    a: "Yes. Wallscape, hand-painted billboard, and painted-wall advertising are all industry names for the large-format commercial end of the same craft. We scope the wall, handle owner authorization and permits where required, and manage the paint crew — whether the brief is a brand-forward wallscape or an art-forward mural.",
  },
  {
    q: "Should my business commission a mural or run a wheat paste campaign?",
    a: "Different jobs. A mural is permanence and placemaking — one wall, working for months or years, anchoring a location. Wheat paste is reach and speed — many walls across a city for weeks, built for launches. The strongest brand plays often combine them: a mural anchor at the flagship, paste amplification across the neighborhoods around it.",
  },
] as const;

const STEVEN_WORK = [
  {
    src: "/artists/steven-sued/steven-sued-mural-groovy.webp",
    label: "Groovy",
    desc: "Vibrant hand-lettered exterior wall mural — retro type and color blocking on a street-facing wall.",
  },
  {
    src: "/artists/steven-sued/steven-sued-mural-electric-snail.webp",
    label: "Electric Snail",
    desc: "Large-format exterior mural — line-work character art scaled across a warehouse wall.",
  },
  {
    src: "/artists/steven-sued/steven-sued-mural-amarena-bakery.webp",
    label: "Amarena Bakery",
    desc: "Interior brand mural — hand-painted logo and lettering anchoring a café dining room.",
  },
  {
    src: "/artists/steven-sued/steven-sued-mural-boo.webp",
    label: "Boo",
    desc: "Street-facing brick wall mural — bold character and lettering on a building corner.",
  },
  {
    src: "/artists/steven-sued/steven-sued-mural-gratitude.webp",
    label: "Gratitude",
    desc: "Line-work mural — flowing single-color illustration painted across an interior wall.",
  },
  {
    src: "/artists/steven-sued/steven-sued-mural-up.webp",
    label: "UP",
    desc: "Exterior wall mural — bold dimensional lettering on a concrete street wall.",
  },
] as const;

const STEVEN_SKILLS = [
  "Branding & Identity",
  "Illustration",
  "Art Direction",
  "Graphic Design",
  "Packaging Design",
  "Murals",
] as const;

const ACCENT = "#D4A010";

// Person schema for the featured artist — declares Steven as a named entity
// associated with the Phantom Pasting art-murals service.
const stevenPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Steven Sued",
  jobTitle: "Mural Artist & Creative Director",
  description:
    "Creative director, brand strategist, and graphic designer with 10+ years in design and marketing; founder of Four Quarters Agency and featured mural artist for Phantom Pasting.",
  image: `${BUSINESS.url}/artists/steven-sued/steven-sued-creative-director-mural-artist-portrait.webp`,
  knowsAbout: [
    "Mural Art",
    "Brand Identity Design",
    "Illustration",
    "Art Direction",
    "Graphic Design",
  ],
  worksFor: { "@id": `${BUSINESS.url}/#org` },
};

export default function ArtMuralsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            serviceSchema({
              name: "Art Murals",
              alternateName: [
                "Mural Art",
                "Commissioned Murals",
                "Hand-Painted Murals",
                "Business Murals",
                "Commercial Mural Painting",
                "Custom Wall Murals",
                "Mural Artist Service",
              ],
              additionalType: ["https://www.productontology.org/id/Mural"],
              description:
                "Original hand-painted murals for businesses — interior and exterior. Phantom Pasting connects clients with vetted mural artists and manages each commission end to end: scope, contract, scheduling, and install.",
              url: PAGE_URL,
              serviceType: "Mural Art Commission",
              category: "Visual Arts",
              image: PAGE_OG,
              slogan: "Original art on your walls — fully managed.",
              audienceType:
                "Business Owners, Restaurants, Offices, Retail Brands, Hospitality, Brand Marketers",
              offerItems: [
                {
                  name: "Interior Brand Mural",
                  description:
                    "Original hand-painted mural for an office, restaurant, retail space, lobby, or gym. Artist matched to your brand and space, with concept-to-install management.",
                },
                {
                  name: "Exterior Mural",
                  description:
                    "Large-format exterior mural on an owner-authorized wall or storefront. Includes surface prep, weather-appropriate materials, and permit coordination where required.",
                },
                {
                  name: "Managed Artist Commission",
                  description:
                    "We match you with the right artist from our roster and run the whole engagement — scope, contract, scheduling, and payment — so you get original art with zero freelancer hassle.",
                },
              ],
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            webPageSchema({
              name: PAGE_TITLE,
              description: PAGE_DESC,
              url: PAGE_URL,
              datePublished: DATE_PUBLISHED,
              dateModified: DATE_MODIFIED,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            articleSchema({
              headline: "Art Murals for Business",
              description: PAGE_DESC,
              url: PAGE_URL,
              image: PAGE_OG,
              datePublished: DATE_PUBLISHED,
              dateModified: DATE_MODIFIED,
              articleSection: "Services",
              articleBody: PAGE_DESC,
              keywords: [
                ...KW_MURALS.slice(0, 10),
                ...KW_STREET_MARKETING.slice(0, 3),
              ],
              audienceType: "Business Owners, Brand Marketers",
              genre: "Service Page",
            })
          ),
        }}
      />
      {/* Org + WebSite schema injected globally via app/layout.tsx (see lib/schema.ts orgSchema). */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(stevenPersonSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(faqPageSchema(FAQS.map(({ q, a }) => ({ q, a })))),
        }}
      />
      <div style={{ background: "transparent", minHeight: "100dvh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Art Murals", href: "/services/art-murals" },
          ]}
        />
        <TrustBar />

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] lg:min-h-[660px] items-center">
              <div className="relative z-10 flex flex-col justify-center py-6 md:py-10 lg:py-14 lg:pr-16">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: "rgba(0,0,0,0.55)" }}>
                  <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                  Art Murals
                </span>
                <h1 className="font-black uppercase m-0 leading-[0.88]" style={{ fontSize: "clamp(48px, 7vw, 100px)", letterSpacing: "-0.04em" }}>
                  ART ON<br /><ShinyGoldText>YOUR WALLS.</ShinyGoldText>
                </h1>
                <p className="font-light leading-relaxed mt-8 mb-10" style={{ fontSize: "clamp(17px, 1.6vw, 19px)", color: "rgba(0,0,0,0.5)", maxWidth: "480px" }}>
                  Original, hand-painted art murals for business spaces — interior or exterior. We match you with a vetted artist and manage the whole commission. You get the art; we handle the business.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="hero-cta-primary relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-8 py-4 rounded-full overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)", color: "#FFF", boxShadow: "0 4px 28px rgba(0,0,0,0.42), 0 1px 0 rgba(255,255,255,0.08) inset" }}>
                    <span className="absolute inset-0 pointer-events-none rounded-full" style={{ background: "linear-gradient(180deg, rgba(196,162,18,0.28) 0%, transparent 48%)" }} />
                    Commission a Mural <span className="cta-arrow" style={{ color: ACCENT }}>→</span>
                  </Link>
                  <a href={BUSINESS.telHref} className="hero-cta-secondary inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.18em] uppercase no-underline px-6 py-4 rounded-full"
                    style={{ color: "rgba(0,0,0,0.82)", background: "rgba(255,255,255,0.9)", border: "1px solid rgba(0,0,0,0.14)", boxShadow: "0 2px 12px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)" }}>
                    Call {BUSINESS.telephoneDisplay}
                  </a>
                </div>
                <div className="flex flex-wrap gap-10 md:gap-16 mt-12 pt-10" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                  {[
                    { stat: "Original", label: "Hand-Painted Art" },
                    { stat: "Vetted", label: "Artist Roster" },
                    { stat: "Fully", label: "Managed" },
                  ].map(({ stat, label }) => (
                    <div key={label}>
                      <div className="font-black uppercase leading-none" style={{ fontSize: "clamp(22px, 3vw, 40px)", letterSpacing: "-0.04em", color: ACCENT }}>{stat}</div>
                      <div className="font-mono text-[9px] tracking-[0.3em] uppercase mt-1.5" style={{ color: "rgba(0,0,0,0.55)" }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative hidden lg:block h-[660px] overflow-hidden">
                <span aria-hidden className="absolute right-0 top-1/2 font-black uppercase pointer-events-none select-none"
                  style={{ fontSize: "clamp(80px, 12vw, 180px)", letterSpacing: "-0.06em", color: "rgba(212,160,16,0.05)", lineHeight: 1, writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}>
                  MURALS
                </span>
                <div className="absolute top-10 right-0 rounded-2xl overflow-hidden" style={{ width: "78%", height: "60%", transform: "rotate(1.8deg)", boxShadow: "0 24px 64px rgba(0,0,0,0.20), 0 4px 14px rgba(0,0,0,0.10)" }}>
                  <Image src="/artists/steven-sued/steven-sued-mural-avocado-man.webp" alt="Avocado Man — large blue portrait wall mural by Steven Sued" fill style={{ objectFit: "cover" }} sizes="(max-width: 1024px) 0vw, 40vw" priority />
                </div>
                <div className="absolute bottom-8 left-2 rounded-xl overflow-hidden" style={{ width: "46%", height: "52%", transform: "rotate(-2.2deg)", boxShadow: "0 16px 48px rgba(0,0,0,0.26), 0 3px 10px rgba(0,0,0,0.12)" }}>
                  <Image src="/artists/steven-sued/steven-sued-creative-director-mural-artist-portrait.webp" alt="Steven Sued — featured mural artist and creative director" fill style={{ objectFit: "cover" }} sizes="(max-width: 1024px) 0vw, 22vw" priority />
                </div>
                <div className="absolute top-6 left-4 rounded-xl px-4 py-3" style={{ background: "rgba(255,254,248,0.92)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.75)", boxShadow: "0 4px 20px rgba(0,0,0,0.09)" }}>
                  <div className="font-black uppercase leading-none" style={{ fontSize: "16px", letterSpacing: "-0.03em", color: ACCENT }}>Artist 01</div>
                  <div className="font-mono text-[8px] tracking-[0.3em] uppercase mt-1" style={{ color: "rgba(0,0,0,0.55)" }}>Steven Sued</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Byline ────────────────────────────────────────────── */}
        <div className="px-5 sm:px-8 md:px-12 lg:px-16 pb-6">
          <div className="max-w-[1200px] mx-auto">
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase m-0" style={{ color: "rgba(0,0,0,0.55)" }}>
              By <span style={{ color: "rgba(0,0,0,0.58)" }}>Phantom Pasting</span>
              &nbsp;·&nbsp;
              <time dateTime={DATE_MODIFIED}>New for 2026</time>
            </p>
          </div>
        </div>

        {/* ── What is the Art Murals service ───────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2" style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              The Service
            </span>
            <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]" style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}>
              ORIGINAL MURALS,<br /><ShinyGoldText>FULLY MANAGED.</ShinyGoldText>
            </h2>
            <p className="font-light leading-relaxed m-0 mb-4" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "760px" }}>
              For a decade we&apos;ve been putting work on walls across the country. Art Murals is the natural next step: original, hand-painted murals commissioned for your business — interior or exterior — instead of a printed campaign.
            </p>
            <p className="font-light leading-relaxed m-0 mb-4" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "760px" }}>
              Here&apos;s how it&apos;s different from hiring a freelancer: we run an artist roster, and we own the entire business side of the engagement. You tell us the space and the feeling you want; we match you with the right artist, then handle scope, contracts, scheduling, prep, and payment. The artist focuses on making something great. You deal with one partner — us.
            </p>
            <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "760px" }}>
              The result is a piece of original art that turns your wall into something worth photographing — a brand statement customers remember, in a lobby, a dining room, a storefront, or an office.
            </p>
          </div>
        </section>

        {/* ── At A Glance ──────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2" style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              At A Glance
            </span>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { label: "Format", value: "Hand-Painted Original" },
                { label: "Placement", value: "Interior + Exterior" },
                { label: "Roster", value: "Vetted Artists" },
                { label: "Management", value: "Fully Handled" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.6)" }}>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.55)" }}>{label}</div>
                  <div className="font-black uppercase leading-tight" style={{ fontSize: "clamp(14px, 1.5vw, 18px)", color: "#1A1A1A", letterSpacing: "-0.02em" }}>{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works (4 steps) ───────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2" style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              The Process
            </span>
            <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]" style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}>
              FROM BLANK WALL TO <ShinyGoldText>FINISHED MURAL.</ShinyGoldText>
            </h2>
            <p className="font-light mb-10 m-0" style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px", maxWidth: "640px" }}>
              Four steps, one partner. You approve the artist and the design before any paint touches the wall.
            </p>
            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px list-none m-0 p-0" style={{ background: "rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.06)", borderRadius: "20px", overflow: "hidden" }}>
              {STEPS.map((step) => (
                <li key={step.num} className="p-8 flex flex-col" style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}>
                  <div className="font-mono text-[10px] tracking-[0.35em] uppercase mb-5" style={{ color: ACCENT }}>{step.num}</div>
                  <h3 className="font-black uppercase m-0 mb-3 leading-[0.88]" style={{ fontSize: "clamp(16px, 1.6vw, 22px)", letterSpacing: "-0.02em" }}>
                    {step.title}<span style={{ color: ACCENT }}>.</span>
                  </h3>
                  <p className="font-light leading-relaxed mb-4" style={{ color: "rgba(0,0,0,0.55)", fontSize: "13px" }}>{step.desc}</p>
                  <ul className="list-none m-0 p-0 flex flex-col gap-2 mt-auto">
                    {step.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 font-mono text-[9px] tracking-[0.08em] uppercase" style={{ color: "rgba(0,0,0,0.55)" }}>
                        <span className="shrink-0 mt-1 w-1 h-1 rounded-full" style={{ background: ACCENT }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Why a managed mural ──────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 items-start">
            <div>
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2" style={{ color: "rgba(0,0,0,0.55)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                Why Phantom
              </span>
              <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]" style={{ fontSize: "clamp(28px, 3.8vw, 48px)", letterSpacing: "-0.035em" }}>
                ONE PARTNER,<br /><ShinyGoldText>ZERO HASSLE.</ShinyGoldText>
              </h2>
              <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.55)", fontSize: "14px" }}>
                Commissioning a mural usually means finding an artist, negotiating scope, chasing timelines, and hoping it all lands. We remove every part of that friction.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { h: "We handle the business", p: "Sourcing, scope, contracts, scheduling, prep, and payment all run through us. The artist creates; we manage the engagement so you never chase a freelancer." },
                { h: "Vetted artists, matched to you", p: "Every artist on our roster is reviewed for craft and reliability. We pair your space and brand with the artist whose style fits — and you approve the match before work begins." },
                { h: "Art that fits your brand", p: "From bold graphic identity to fine illustration, we direct the work so the finished mural reads as you — a wall customers stop, photograph, and remember." },
              ].map(({ h, p }) => (
                <div key={h} className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.5)", border: "1px solid rgba(0,0,0,0.06)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}>
                  <div className="font-black uppercase m-0 mb-2" style={{ fontSize: "13px", letterSpacing: "0.02em" }}>{h}</div>
                  <p className="font-light m-0 leading-relaxed" style={{ color: "rgba(0,0,0,0.55)", fontSize: "13px" }}>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured Artist: Steven Sued ─────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.08)", background: "rgba(255,255,255,0.45)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}>
            <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr]">
              {/* Portrait — clickable, links to Steven's page */}
              <Link href="/artists/steven-sued" className="relative block min-h-[360px] md:min-h-[520px]" aria-label="Steven Sued — view artist page">
                <Image src="/artists/steven-sued/steven-sued-creative-director-mural-artist-portrait.webp" alt="Steven Sued — featured mural artist, creative director, and graphic designer" fill style={{ objectFit: "cover", objectPosition: "center top" }} sizes="(max-width: 768px) 100vw, 40vw" loading="lazy" />
              </Link>
              {/* Bio */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2" style={{ color: ACCENT }}>
                  <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                  Featured Artist · 01
                </span>
                <Link href="/artists/steven-sued" className="no-underline inline-block" style={{ color: "inherit" }} aria-label="Steven Sued — view artist page">
                  <h2 className="font-black uppercase m-0 mb-2 leading-[0.9]" style={{ fontSize: "clamp(30px, 4vw, 52px)", letterSpacing: "-0.035em" }}>
                    STEVEN <ShinyGoldText>SUED.</ShinyGoldText>
                    <span aria-hidden style={{ color: ACCENT, fontSize: "0.42em", verticalAlign: "super", marginLeft: "0.15em" }}>↗</span>
                  </h2>
                </Link>
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase mb-6" style={{ color: "rgba(0,0,0,0.55)" }}>
                  Graphic Designer + Mural Artist
                </div>
                <p className="font-light leading-relaxed m-0 mb-4" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px" }}>
                  Steven is a creative director and graphic designer with 10+ years in design and marketing, and the founder of Four Quarters Agency. His work spans brand identity, illustration, and art direction for clients including the Avenue of the Arts Festival, Rutgers University, and NJIT.
                </p>
                <p className="font-light leading-relaxed m-0 mb-6" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px" }}>
                  As our first featured artist, he brings that design sensibility to the wall — translating a brand into an original, hand-painted mural. Commission Steven through Phantom Pasting and we handle everything around the art.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {STEVEN_SKILLS.map((s) => (
                    <span key={s} className="font-mono text-[9px] tracking-[0.15em] uppercase px-3 py-2 rounded-full" style={{ color: "rgba(0,0,0,0.6)", background: "rgba(212,160,16,0.1)", border: "1px solid rgba(212,160,16,0.25)" }}>
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-7 py-4 rounded-full"
                    style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #F5CA20 100%)`, color: "#FFF", boxShadow: "0 6px 28px rgba(212,160,16,0.45)" }}>
                    Commission Steven <span className="cta-arrow">→</span>
                  </Link>
                  <Link href="/artists/steven-sued" className="inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-6 py-4 rounded-full"
                    style={{ color: "rgba(0,0,0,0.82)", background: "rgba(255,255,255,0.9)", border: "1px solid rgba(0,0,0,0.14)" }}>
                    View Profile <span style={{ color: ACCENT }}>→</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* Work samples */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px" style={{ background: "rgba(0,0,0,0.06)", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
              {STEVEN_WORK.map((w) => (
                <figure key={w.label} className="m-0 p-0" style={{ background: "rgba(255,255,255,0.55)" }}>
                  <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                    <Image src={w.src} alt={`${w.label} — design work by Steven Sued`} fill style={{ objectFit: "cover" }} sizes="(max-width: 640px) 100vw, 33vw" loading="lazy" />
                  </div>
                  <figcaption className="p-5">
                    <div className="font-black uppercase leading-tight mb-1" style={{ fontSize: "13px", letterSpacing: "-0.01em" }}>{w.label}</div>
                    <p className="font-light m-0 leading-relaxed" style={{ color: "rgba(0,0,0,0.55)", fontSize: "12px" }}>{w.desc}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <p className="font-light text-center mt-6 m-0 mx-auto" style={{ color: "rgba(0,0,0,0.5)", fontSize: "13px", maxWidth: "560px" }}>
            Steven is the first name on a growing roster. As we add artists, we match each commission to the style that fits it best.
          </p>
        </section>

        {/* ── TL;DR ────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <div className="rounded-2xl p-6" style={{ border: "2px solid rgba(212,160,16,0.3)", background: "rgba(212,160,16,0.04)" }}>
              <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px" }}>
                <strong style={{ color: ACCENT }}>TL;DR</strong> — Art Murals is a fully managed way to get original, hand-painted murals on your business walls. We match you with a vetted artist — starting with Steven Sued — and handle scope, contracts, scheduling, and install. Interior or exterior. Call <a href={BUSINESS.telHref} style={{ color: ACCENT }}>{BUSINESS.telephoneDisplay}</a> to commission one.
              </p>
            </div>
          </div>
        </section>

        {/* ── More Services ────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]" style={{ fontSize: "clamp(20px, 2.5vw, 32px)", letterSpacing: "-0.025em" }}>
              MORE SERVICES<span style={{ color: ACCENT }}>.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/services/wheat-pasting", l1: "WHEAT", l2: "PASTING" },
                { href: "/services/chalk-spray-stencils", l1: "CHALK", l2: "STENCILS" },
                { href: "/services/snipes", l1: "SNIPES &", l2: "STICKERS" },
                { href: "/services/full-impact-campaigns", l1: "FULL IMPACT", l2: "CAMPAIGNS" },
              ].map(({ href, l1, l2 }) => (
                <Link key={href} href={href} className="no-underline rounded-2xl p-7 flex items-center justify-between" style={{ background: "rgba(248,247,244,0.9)", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                  <div>
                    <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.55)" }}>Service</div>
                    <div className="font-black uppercase leading-tight" style={{ fontSize: "clamp(17px, 1.8vw, 22px)", letterSpacing: "-0.02em", color: "#1A1A1A" }}>{l1}<br />{l2}</div>
                  </div>
                  <span style={{ color: ACCENT, fontSize: "24px" }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2" style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Common Questions
            </span>
            <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]" style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}>
              ART MURALS <ShinyGoldText>FAQ.</ShinyGoldText>
            </h2>
            <div className="flex flex-col">
              {FAQS.map(({ q, a }) => (
                <div key={q} className="py-6" style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                  <h3 className="font-black uppercase m-0 mb-3" style={{ fontSize: "15px", letterSpacing: "-0.01em" }}>{q}</h3>
                  <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px" }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32 text-center">
          <div className="max-w-[700px] mx-auto">
            <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]" style={{ fontSize: "clamp(38px, 6vw, 80px)", letterSpacing: "-0.04em" }}>
              PUT ART ON<br /><ShinyGoldText>YOUR WALL.</ShinyGoldText>
            </h2>
            <p className="font-light leading-relaxed mb-8 mx-auto" style={{ color: "rgba(0,0,0,0.5)", fontSize: "15px", maxWidth: "460px" }}>
              Tell us your space, your brand, and the feeling you&apos;re after. We&apos;ll match you with the right artist and send a plan within 24 hours.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="service-cta relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-10 py-5 rounded-full overflow-hidden" style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #F5CA20 100%)`, color: "#FFF", boxShadow: `0 6px 32px rgba(212,160,16,0.55), 0 1px 0 rgba(255,255,255,0.25) inset` }}>
                <span className="absolute inset-0 pointer-events-none rounded-full" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 55%)" }} />
                Commission a Mural <span className="cta-arrow">→</span>
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
