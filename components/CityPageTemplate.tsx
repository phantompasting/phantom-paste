/**
 * Shared city landing page template — used by all /locations/ pages.
 * Server component — no "use client" needed.
 */
import Link from "next/link";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import ShinyGoldText from "@/components/ShinyGoldText";
import Breadcrumb from "@/components/Breadcrumb";
import SiteFooter from "@/components/SiteFooter";
import TrustBar from "@/components/TrustBar";
import { BUSINESS } from "@/lib/business";

const ACCENT = "#D4A010";

export interface CityPageData {
  city: string;
  state: string;
  slug: string;
  heroWord: string;
  intro: string;
  whyTitle: string;
  whyText: string;
  neighborhoods: { name: string; desc: string }[];
  localBusiness: Record<string, unknown>;
  heroImage1?: { src: string; alt: string };
  heroImage2?: { src: string; alt: string };
}

export default function CityPageTemplate({ data }: { data: CityPageData }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.phantompasting.com" },
      { "@type": "ListItem", position: 2, name: data.city, item: "https://www.phantompasting.com/locations/" + data.slug },
    ],
  };

  // Enrich the LocalBusiness schema with serviceArea and address fields
  const localBusinessSchema = {
    ...data.localBusiness,
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    email: BUSINESS.email,
    telephone: BUSINESS.telephone,
    address: {
      "@type": "PostalAddress",
      addressLocality: data.city,
      addressRegion: data.state,
      addressCountry: "US",
    },
    serviceArea: {
      "@type": "City",
      name: data.city,
      addressRegion: data.state,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <div style={{ background: "transparent", minHeight: "100dvh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Locations", href: "/locations" },
            { name: data.city },
          ]}
        />
        <TrustBar />

        {/* ── Hero (split-screen) ───────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] lg:min-h-[660px] items-center">

              {/* LEFT — text + stats */}
              <div className="relative z-10 flex flex-col justify-center py-16 md:py-20 lg:py-24 lg:pr-16">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase mb-6"
                  style={{ color: "rgba(0,0,0,0.55)" }}>
                  <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                  {data.city}, {data.state}
                </span>

                <h1 className="font-black uppercase m-0 leading-[0.88]"
                  style={{ fontSize: "clamp(42px, 6.5vw, 88px)", letterSpacing: "-0.04em" }}>
                  WHEAT PASTING &amp;<br />WILD POSTING IN<br />
                  <ShinyGoldText>{data.city.toUpperCase()}.</ShinyGoldText>
                </h1>

                <p className="font-light leading-relaxed mt-8 mb-10"
                  style={{ fontSize: "clamp(17px, 1.6vw, 19px)", color: "rgba(0,0,0,0.5)", maxWidth: "480px" }}>
                  {data.intro}
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link href="/contact"
                    className="hero-cta-primary relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-8 py-4 rounded-full overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)", color: "#FFF",
                      boxShadow: "0 4px 28px rgba(0,0,0,0.42), 0 1px 0 rgba(255,255,255,0.08) inset" }}>
                    <span className="absolute inset-0 pointer-events-none rounded-full"
                      style={{ background: "linear-gradient(180deg, rgba(196,162,18,0.28) 0%, transparent 48%)" }} />
                    Get a {data.city} Quote
                    <span className="cta-arrow" style={{ color: ACCENT }}>→</span>
                  </Link>
                  <a href={BUSINESS.telHref}
                    aria-label={`Call Phantom Pasting at ${BUSINESS.telephoneDisplay}`}
                    className="hero-cta-secondary inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.18em] uppercase no-underline px-6 py-4 rounded-full"
                    style={{ color: "rgba(0,0,0,0.82)", background: "rgba(255,255,255,0.9)",
                      border: "1px solid rgba(0,0,0,0.14)", boxShadow: "0 2px 12px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ color: ACCENT }}>
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    Call Now
                  </a>
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
                    { stat: "Wheat Paste", label: "Large Posters" },
                    { stat: "Chalk", label: "Stencils" },
                    { stat: "100%", label: "Documented" },
                  ].map(({ stat, label }) => (
                    <div key={label}>
                      <div className="font-black uppercase leading-none"
                        style={{ fontSize: "clamp(22px, 2.8vw, 36px)", letterSpacing: "-0.03em", color: ACCENT }}>
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
                  {data.heroWord}
                </span>

                {data.heroImage1 && (
                  <div className="absolute top-10 right-0 rounded-2xl overflow-hidden"
                    style={{ width: "82%", height: "80%", transform: "rotate(1.8deg)",
                      boxShadow: "0 24px 64px rgba(0,0,0,0.20), 0 4px 14px rgba(0,0,0,0.10)" }}>
                    <Image src={data.heroImage1.src} alt={data.heroImage1.alt}
                      fill style={{ objectFit: "cover" }} sizes="40vw" priority />
                  </div>
                )}

                {data.heroImage2 && (
                  <div className="absolute bottom-10 left-2 rounded-xl overflow-hidden"
                    style={{ width: "50%", height: "48%", transform: "rotate(-2.2deg)",
                      boxShadow: "0 16px 48px rgba(0,0,0,0.26), 0 3px 10px rgba(0,0,0,0.12)" }}>
                    <Image src={data.heroImage2.src} alt={data.heroImage2.alt}
                      fill style={{ objectFit: "cover" }} sizes="25vw" />
                  </div>
                )}

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
                    {data.state}
                  </div>
                  <div className="font-mono text-[8px] tracking-[0.3em] uppercase mt-1"
                    style={{ color: "rgba(0,0,0,0.55)" }}>
                    {data.city}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why this city ─────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
            <div>
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
                style={{ color: "rgba(0,0,0,0.55)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                Why {data.city}
              </span>
              <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]"
                style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}>
                {data.whyTitle.split("\n").map((line, i) => (
                  <span key={i}>{i > 0 && <br />}{line}</span>
                ))}
              </h2>
              <p className="font-light leading-relaxed"
                style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "480px" }}>
                {data.whyText}
              </p>
            </div>

            {/* Services available */}
            <div className="flex flex-col gap-3">
              {[
                { title: "WHEAT PASTING", desc: "Large-format posters on prime walls throughout " + data.city, href: "/services/wheat-pasting" },
                { title: "CHALK STENCILS", desc: "Sidewalk-level activations at high-foot-traffic locations", href: "/services/chalk-spray-stencils" },
                { title: "FULL IMPACT", desc: "Multi-format city saturation campaigns", href: "/services/full-impact-campaigns" },
              ].map((svc) => (
                <Link key={svc.title} href={svc.href}
                  className="no-underline rounded-2xl p-6 flex items-center justify-between"
                  style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.6)" }}>
                  <div>
                    <div className="font-black uppercase text-[14px] tracking-[-0.01em] mb-1" style={{ color: "#1A1A1A" }}>
                      {svc.title}
                    </div>
                    <p className="font-light m-0" style={{ color: "rgba(0,0,0,0.58)", fontSize: "12px" }}>{svc.desc}</p>
                  </div>
                  <span style={{ color: ACCENT, fontSize: "20px" }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Neighborhoods ─────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
              style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Campaign Areas
            </span>
            <h2 className="font-black uppercase m-0 mb-14 leading-[0.9]"
              style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}>
              {data.city.toUpperCase()}<br /><ShinyGoldText>NEIGHBORHOODS.</ShinyGoldText>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
              style={{ background: "rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.06)", borderRadius: "20px", overflow: "hidden" }}>
              {data.neighborhoods.map((n) => (
                <div key={n.name} className="p-7"
                  style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}>
                  <div className="font-black uppercase leading-tight mb-2"
                    style={{ fontSize: "clamp(16px, 1.5vw, 20px)", letterSpacing: "-0.02em" }}>
                    {n.name}
                  </div>
                  <p className="font-light m-0" style={{ color: "rgba(0,0,0,0.5)", fontSize: "13px" }}>{n.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ──────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-black uppercase m-0 mb-14 leading-[0.9]"
              style={{ fontSize: "clamp(24px, 3.5vw, 42px)", letterSpacing: "-0.03em" }}>
              HOW IT WORKS IN {data.city.toUpperCase()}<span style={{ color: ACCENT }}>.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px"
              style={{ background: "rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.06)", borderRadius: "20px", overflow: "hidden" }}>
              {[
                { num: "01", title: "TELL US YOUR VISION", desc: `Share your artwork, target neighborhoods in ${data.city}, and launch timeline. We'll send a custom strategy within 24 hours.` },
                { num: "02", title: "WE HIT THE STREETS", desc: `Our local ${data.city} crew handles print, install, and deployment — walls pasted, sidewalks stenciled, intersections activated.` },
                { num: "03", title: "FULL DOCUMENTATION", desc: "Every hit photographed, timestamped, and geo-tagged. Campaign report delivered with social-ready assets." },
              ].map((step) => (
                <div key={step.num} className="p-8 md:p-10"
                  style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}>
                  <div className="font-mono text-[10px] tracking-[0.35em] uppercase mb-5" style={{ color: ACCENT }}>{step.num}</div>
                  <h3 className="font-black uppercase m-0 mb-3 leading-[0.88]"
                    style={{ fontSize: "clamp(18px, 1.8vw, 24px)", letterSpacing: "-0.02em" }}>
                    {step.title}<span style={{ color: ACCENT }}>.</span>
                  </h3>
                  <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.55)", fontSize: "14px" }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32 text-center">
          <div className="max-w-[700px] mx-auto">
            <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]"
              style={{ fontSize: "clamp(36px, 6vw, 76px)", letterSpacing: "-0.04em" }}>
              GET A QUOTE FOR<br /><ShinyGoldText>{data.city.toUpperCase()}.</ShinyGoldText>
            </h2>
            <p className="font-light leading-relaxed mb-10 mx-auto"
              style={{ color: "rgba(0,0,0,0.5)", fontSize: "15px", maxWidth: "420px" }}>
              Tell us your brand, your vision, and your timeline.
              We&apos;ll respond within 24 hours with a custom {data.city} street strategy.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact"
                className="service-cta relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-10 py-5 rounded-full overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #F5CA20 100%)`, color: "#FFF",
                  boxShadow: `0 6px 32px rgba(212,160,16,0.55), 0 1px 0 rgba(255,255,255,0.25) inset` }}>
                <span className="absolute inset-0 pointer-events-none rounded-full"
                  style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 55%)" }} />
                Launch My Campaign <span className="cta-arrow">→</span>
              </Link>
              <a href={BUSINESS.telHref}
                aria-label={`Call Phantom Pasting at ${BUSINESS.telephoneDisplay}`}
                className="inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-8 py-5 rounded-full"
                style={{ color: "#1A1A1A", background: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(0,0,0,0.14)", boxShadow: "0 2px 12px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ color: ACCENT }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {BUSINESS.telephoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
