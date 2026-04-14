import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import ShinyGoldText from "@/components/ShinyGoldText";

export const metadata: Metadata = {
  title: "Chalk Spray Stencil Advertising | Phantom Pasting",
  description:
    "Precision chalk spray stencil activations at street level. Temporary, bold, 100% documented. Sidewalks, intersections, venue entrances — across 50+ US cities.",
  keywords: [
    "chalk spray stencil marketing",
    "chalk stencil advertising",
    "sidewalk chalk advertising",
    "guerrilla marketing stencils",
    "street level marketing",
    "chalk spray marketing",
  ],
  alternates: { canonical: "https://www.phantompasting.com/services/chalk-spray-stencils" },
  openGraph: {
    title: "Chalk Spray Stencil Advertising | Phantom Pasting",
    description:
      "Precision chalk spray stencil activations at street level. Temporary, bold, 100% documented.",
    url: "https://www.phantompasting.com/services/chalk-spray-stencils",
    type: "website",
    images: [
      {
        url: "https://www.phantompasting.com/gallery/black-pearl-la-chalk-spray-stencil-sidewalk.webp",
        width: 1200,
        height: 630,
        alt: "Chalk spray stencil sidewalk advertising by Phantom Pasting",
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.phantompasting.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.phantompasting.com/services/chalk-spray-stencils" },
    { "@type": "ListItem", position: 3, name: "Chalk Spray Stencils", item: "https://www.phantompasting.com/services/chalk-spray-stencils" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chalk Spray Stencils",
  alternateName: "Chalk Stencil Advertising",
  description:
    "Precision chalk spray stencil activations at sidewalk level. Water-based, temporary, and 100% photo documented. Available in 50+ US cities.",
  url: "https://www.phantompasting.com/services/chalk-spray-stencils",
  provider: { "@type": "Organization", name: "Phantom Pasting", url: "https://www.phantompasting.com" },
  areaServed: "United States",
  offers: {
    "@type": "Offer",
    description: "Custom chalk spray stencil campaigns — design, install, and documentation included.",
    url: "https://www.phantompasting.com/contact",
  },
};

const STEPS = [
  {
    num: "01",
    title: "CUSTOM CUT",
    desc: "We precision-cut your artwork into reusable stencil templates — logos, URLs, custom art, or text. Sizes from compact 6\"×12\" to large 48\"×48\" floor installations.",
  },
  {
    num: "02",
    title: "LOCATION TARGET",
    desc: "High-foot-traffic sidewalks, intersections, event queues, and venue entrances. We place where your audience actually walks — not just where ads are allowed.",
  },
  {
    num: "03",
    title: "SPRAY & DOCUMENT",
    desc: "Water-based chalk spray is applied in passes for crisp, bold results. Every installation is photographed and delivered in a campaign report. Natural fade within days.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is chalk spray stencil advertising?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chalk spray stencil advertising is a temporary street-level marketing technique where water-based chalk spray paint is applied through custom-cut stencils onto sidewalks, plazas, and paved surfaces. It creates bold, high-visibility impressions that naturally fade within days.",
      },
    },
    {
      "@type": "Question",
      name: "Is chalk spray stencil advertising legal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chalk spray stencils use water-based, non-permanent chalk that washes away naturally with rain and foot traffic. Unlike paint, chalk stencils are temporary and do not damage surfaces, making them a widely accepted form of street-level marketing in most US cities.",
      },
    },
    {
      "@type": "Question",
      name: "How long does chalk stencil advertising last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chalk spray stencil installations typically last 3–10 days depending on weather, surface type, and foot traffic. Rain and heavy pedestrian activity will accelerate fading. Indoor venues and covered areas can last significantly longer.",
      },
    },
    {
      "@type": "Question",
      name: "What sizes are available for chalk stencil campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer chalk stencil installations from compact 6\"×12\" logos up to large 48\"×48\" floor activations. Custom stencil templates are precision-cut from your artwork and can be reused across multiple locations.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle the stencil design and cutting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we precision-cut custom stencil templates from your provided artwork or can work with our team to develop a design. Templates are reusable across all installation locations in your campaign.",
      },
    },
  ],
};

const ACCENT = "#D4A010";

export default function ChalkSprayStencilsPage() {
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
                  Chalk Spray Stencils
                </span>
                <h1 className="font-black uppercase m-0 leading-[0.88]"
                  style={{ fontSize: "clamp(48px, 7vw, 100px)", letterSpacing: "-0.04em" }}>
                  CHALK STENCILS<br /><ShinyGoldText>AT STREET LEVEL.</ShinyGoldText>
                </h1>
                <p className="font-light leading-relaxed mt-8 mb-10"
                  style={{ fontSize: "clamp(15px, 1.4vw, 17px)", color: "rgba(0,0,0,0.5)", maxWidth: "480px" }}>
                  Precision chalk spray stencil activations at the sidewalk level.
                  Temporary. Legal. Impossible to miss. Perfect for brand moments that
                  need to stop people mid-step.
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

                {/* Stats row */}
                <div className="flex flex-wrap gap-10 md:gap-16 mt-12 pt-10"
                  style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                  {[
                    { stat: "Street", label: "Level Placement" },
                    { stat: "Custom", label: "Stencil Cuts" },
                    { stat: "100%",   label: "Documented" },
                  ].map(({ stat, label }) => (
                    <div key={label}>
                      <div className="font-black uppercase leading-none"
                        style={{ fontSize: "clamp(22px, 3vw, 40px)", letterSpacing: "-0.04em", color: ACCENT }}>
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
                  CHALK
                </span>

                {/* Primary image */}
                <div className="absolute top-10 right-0 rounded-2xl overflow-hidden"
                  style={{ width: "82%", height: "62%",
                    transform: "rotate(1.8deg)",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.20), 0 4px 14px rgba(0,0,0,0.10)" }}>
                  <Image
                    src="/gallery/black-pearl-la-chalk-spray-stencil-sidewalk.webp"
                    alt="Chalk spray stencil guerrilla marketing"
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
                    src="/gallery/black-pearl-la-stencil-template-grass.webp"
                    alt="Chalk stencil street activation"
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
                    style={{ fontSize: "20px", letterSpacing: "-0.04em", color: ACCENT }}>100%</div>
                  <div className="font-mono text-[8px] tracking-[0.3em] uppercase mt-1"
                    style={{ color: "rgba(0,0,0,0.4)" }}>Legal</div>
                </div>
              </div>

            </div>
          </div>
        </section>

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
                EYE LEVEL.<br /><span style={{ color: ACCENT }}>UNAVOIDABLE.</span>
              </h2>
              <div className="flex flex-col gap-5">
                <p className="font-light leading-relaxed m-0"
                  style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "480px" }}>
                  Chalk spray stencils turn sidewalks, plazas, and intersections into your ad space.
                  Water-based chalk spray is applied through precision-cut templates — crisp logos,
                  bold messaging, or intricate artwork that stops foot traffic cold.
                </p>
                <p className="font-light leading-relaxed m-0"
                  style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "480px" }}>
                  The temporary nature is a feature, not a bug. A fresh installation at an event,
                  product launch, or venue entrance creates urgency. People photograph it. People
                  share it. Then it naturally fades.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Stencil Sizes", value: '6"×12" to 48"×48"' },
                { label: "Material", value: "Water-Based Chalk" },
                { label: "Lifespan", value: "Days to Weeks" },
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

        {/* ── More Services ─────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]"
              style={{ fontSize: "clamp(20px, 2.5vw, 32px)", letterSpacing: "-0.025em" }}>
              MORE SERVICES<span style={{ color: ACCENT }}>.</span>
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
              CHALK STENCILS IN EVERY MAJOR US CITY<span style={{ color: ACCENT }}>.</span>
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
