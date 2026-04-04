/**
 * Shared city landing page template — used by all /locations/ pages.
 * Server component — no "use client" needed.
 */
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import ShinyGoldText from "@/components/ShinyGoldText";

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
}

export default function CityPageTemplate({ data }: { data: CityPageData }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://phantompasting.com" },
      { "@type": "ListItem", position: 2, name: "Locations", item: "https://phantompasting.com/locations/" + data.slug },
      { "@type": "ListItem", position: 3, name: data.city, item: "https://phantompasting.com/locations/" + data.slug },
    ],
  };

  // Enrich the LocalBusiness schema with serviceArea and address fields
  const localBusinessSchema = {
    ...data.localBusiness,
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
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

      <div style={{ background: "transparent", minHeight: "100vh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="relative px-5 sm:px-8 md:px-12 lg:px-16 pt-16 pb-16 md:pt-24 md:pb-20 overflow-hidden">
          <span aria-hidden className="absolute inset-x-0 top-4 text-center font-black uppercase pointer-events-none select-none"
            style={{ fontSize: "clamp(60px, 14vw, 220px)", letterSpacing: "-0.05em", color: "rgba(212,160,16,0.05)", lineHeight: 1 }}>
            {data.heroWord}
          </span>

          <div className="relative z-10 max-w-[900px]">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase mb-6"
              style={{ color: "rgba(0,0,0,0.4)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              {data.city}, {data.state}
            </span>

            <h1 className="font-black uppercase m-0 leading-[0.88]"
              style={{ fontSize: "clamp(42px, 7vw, 100px)", letterSpacing: "-0.04em" }}>
              WHEAT PASTING &amp;<br />WILD POSTING IN<br />
              <ShinyGoldText>{data.city.toUpperCase()}.</ShinyGoldText>
            </h1>

            <p className="font-light leading-relaxed mt-8 mb-10 max-w-[540px]"
              style={{ fontSize: "clamp(15px, 1.6vw, 18px)", color: "rgba(0,0,0,0.5)" }}>
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
              <Link href="/"
                className="hero-cta-secondary inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.18em] uppercase no-underline px-6 py-4 rounded-full"
                style={{ color: "rgba(0,0,0,0.72)", background: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(0,0,0,0.14)", boxShadow: "0 2px 12px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)" }}>
                See Our Work <span className="cta-arrow">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Stats inline ──────────────────────────────────────── */}
        <div className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20 md:pb-28">
          <div className="max-w-[1200px] mx-auto flex flex-wrap gap-12 md:gap-20">
            {[
              { stat: "Wheat Pasting", label: "Large Format Posters" },
              { stat: "Chalk Stencils", label: "Sidewalk Level" },
              { stat: "100%", label: "Documented" },
            ].map(({ stat, label }) => (
              <div key={label}>
                <div className="font-black uppercase leading-none"
                  style={{ fontSize: "clamp(20px, 2.5vw, 36px)", letterSpacing: "-0.03em", color: ACCENT }}>
                  {stat}
                </div>
                <div className="font-mono text-[9px] tracking-[0.3em] uppercase mt-2" style={{ color: "rgba(0,0,0,0.4)" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Why this city ─────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
            <div>
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
                style={{ color: "rgba(0,0,0,0.35)" }}>
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
                  style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.6)" }}>
                  <div>
                    <div className="font-black uppercase text-[14px] tracking-[-0.01em] mb-1" style={{ color: "#1A1A1A" }}>
                      {svc.title}
                    </div>
                    <p className="font-light m-0" style={{ color: "rgba(0,0,0,0.45)", fontSize: "12px" }}>{svc.desc}</p>
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
              style={{ color: "rgba(0,0,0,0.35)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Campaign Areas
            </span>
            <h2 className="font-black uppercase m-0 mb-14 leading-[0.9]"
              style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}>
              {data.city.toUpperCase()}<br /><span style={{ color: ACCENT }}>NEIGHBORHOODS.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
              style={{ background: "rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.06)", borderRadius: "20px", overflow: "hidden" }}>
              {data.neighborhoods.map((n) => (
                <div key={n.name} className="p-7"
                  style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
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
                  style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
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
