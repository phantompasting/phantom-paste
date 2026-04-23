import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import BlogPostsGrid from "@/components/BlogPostsGrid";
import ShinyGoldText from "@/components/ShinyGoldText";
import { BUSINESS } from "@/lib/business";
import { MATEO_VARGAS } from "@/lib/blogAuthor";
import { PUBLISHED_POSTS, SILO_LABELS } from "@/lib/blogRegistry";
import { collectionPageSchema, jsonLd } from "@/lib/schema";

const ACCENT = "#D4A010";
const PAGE_URL = `${BUSINESS.url}/blog`;
// Meta title — keyword-first for search, brand tagline preserved on-page as H1.
// "Wheat Pasting Blog" is the head term this hub needs to rank for; "Field Notes
// from the Street" stays as the H1/visual identity so the brand voice is still
// what visitors see on arrival.
const PAGE_TITLE = "Wheat Pasting Blog: Field Notes from the Street";
const PAGE_DESC =
  "Installer-written wheat pasting, flyposting & street postering guides. From Mateo Vargas and the Phantom Pasting crew — 500+ campaigns, 50+ US cities.";

export const metadata: Metadata = {
  // `absolute` bypasses the root layout's "%s | Phantom Pasting" template so
  // the blog hub title stays under 60 chars. Without this, the rendered title
  // becomes "Wheat Pasting Blog: Field Notes from the Street | Phantom Pasting"
  // (73 chars — Google truncates past ~60).
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Wheat Pasting Blog — Field Notes from the Street",
    description:
      "Installer-written wheat pasting, flyposting, and street postering guides — from a crew with 500+ campaigns across 50+ US cities.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: `${BUSINESS.url}${BUSINESS.ogImageDefault}`,
        width: BUSINESS.ogImageWidth,
        height: BUSINESS.ogImageHeight,
        alt: "Phantom Pasting — field notes from the street",
      },
    ],
  },
};

export default function BlogHubPage() {
  const latest = PUBLISHED_POSTS[0];
  const rest = PUBLISHED_POSTS.slice(1);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            collectionPageSchema({
              name: PAGE_TITLE,
              description: PAGE_DESC,
              url: PAGE_URL,
              items: PUBLISHED_POSTS.map((p) => ({
                name: p.title,
                url: `${BUSINESS.url}/blog/${p.slug}`,
              })),
            })
          ),
        }}
      />

      <SiteNav />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Blog" },
        ]}
      />

      <main>
        {/* ── Compact branding strip ───────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pt-6 pb-8 md:pb-10">
          <div className="max-w-[1200px] mx-auto">
            <span
              className="inline-flex items-center gap-2 font-mono uppercase mb-5"
              style={{ fontSize: "9px", letterSpacing: "0.3em", color: "rgba(0,0,0,0.55)" }}
            >
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              The Blog
            </span>
            <h1
              className="font-black uppercase m-0 leading-[0.94]"
              style={{ fontSize: "clamp(32px, 5.5vw, 64px)", letterSpacing: "-0.04em" }}
            >
              FIELD NOTES <ShinyGoldText>FROM THE STREET.</ShinyGoldText>
            </h1>
            <p
              className="font-light leading-relaxed mt-5 max-w-[640px]"
              style={{ fontSize: "clamp(15px, 1.4vw, 17px)", color: "rgba(0,0,0,0.6)" }}
            >
              Installer-written guides on wheat pasting, flyposting, and street postering.
              Written from the sidewalk up by{" "}
              <strong style={{ color: "#1A1A1A" }}>Mateo Vargas</strong> and
              the Phantom Pasting crew — 10+ years on active install teams across 50+ US cities.
            </p>
          </div>
        </section>

        {/* The "Why this blog exists" silos block was removed — the three
            category cards + intro prose read as visual clutter above the
            featured post. The /blog/what-is-wheat-pasting link still surfaces
            from the SiteFooter and from in-body links inside other posts, so
            the orphan-link Semrush warning stays addressed. */}

        {/* ── Featured: latest post as page hero ──────────────────────── */}
        {latest && (
          <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-16 md:pb-20">
            <div className="max-w-[1200px] mx-auto">
              <Link
                href={`/blog/${latest.slug}`}
                className="group no-underline block rounded-3xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.35)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.6)",
                  color: "inherit",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr]">
                  <div
                    className="relative w-full"
                    style={{ aspectRatio: "16/10", minHeight: 280 }}
                  >
                    <Image
                      src={latest.heroImage}
                      alt={latest.heroAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="p-7 sm:p-9 md:p-11 flex flex-col justify-center">
                    <div
                      className="font-mono uppercase mb-4 inline-flex items-center gap-2"
                      style={{ fontSize: "9px", letterSpacing: "0.3em", color: ACCENT, fontWeight: 700 }}
                    >
                      <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                      Latest · {SILO_LABELS[latest.silo].label}
                    </div>
                    <h2
                      className="font-black uppercase m-0 leading-[0.95] mb-5"
                      style={{
                        fontSize: "clamp(22px, 2.8vw, 36px)",
                        letterSpacing: "-0.03em",
                        color: "#1A1A1A",
                      }}
                    >
                      {latest.title}
                      <span style={{ color: ACCENT }}>.</span>
                    </h2>
                    <p
                      className="font-light leading-relaxed m-0 mb-6"
                      style={{ fontSize: "15px", color: "rgba(0,0,0,0.65)" }}
                    >
                      {latest.excerpt}
                    </p>
                    <span
                      className="inline-flex items-center gap-2 font-bold uppercase"
                      style={{ fontSize: "11px", letterSpacing: "0.22em", color: ACCENT }}
                    >
                      Read the Guide <span aria-hidden>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* ── Flat grid with chip filter ──────────────────────────────── */}
        {rest.length > 0 && (
          <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20">
            <div className="max-w-[1200px] mx-auto">
              <h2
                className="font-black uppercase m-0 mb-8 leading-[0.95]"
                style={{ fontSize: "clamp(26px, 3.5vw, 44px)", letterSpacing: "-0.035em" }}
              >
                All Posts<span style={{ color: ACCENT }}>.</span>
              </h2>
              <BlogPostsGrid posts={rest} />
            </div>
          </section>
        )}

        {/* ── Author card ─────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20">
          <div
            className="max-w-[900px] mx-auto rounded-3xl flex flex-col sm:flex-row gap-6 items-start"
            style={{
              background: "rgba(255,255,255,0.35)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.6)",
              padding: "2rem",
            }}
          >
            <div
              aria-hidden
              className="rounded-full flex items-center justify-center flex-shrink-0 font-black"
              style={{
                width: 80,
                height: 80,
                background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)",
                color: ACCENT,
                fontSize: 26,
                letterSpacing: "-0.02em",
              }}
            >
              MV
            </div>
            <div className="flex-1 min-w-0">
              <div
                className="font-mono uppercase mb-2"
                style={{ fontSize: "9px", letterSpacing: "0.3em", color: "rgba(0,0,0,0.55)" }}
              >
                Meet the Writer
              </div>
              <div
                className="font-black uppercase mb-3 leading-tight"
                style={{ fontSize: "20px", letterSpacing: "-0.02em", color: "#1A1A1A" }}
              >
                {MATEO_VARGAS.name} ·{" "}
                <span style={{ color: ACCENT }}>{MATEO_VARGAS.jobTitle}</span>
              </div>
              <p
                className="font-light leading-relaxed m-0"
                style={{ fontSize: "15px", color: "rgba(0,0,0,0.7)" }}
              >
                {MATEO_VARGAS.bio}
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24">
          <div
            className="max-w-[900px] mx-auto rounded-3xl text-center"
            style={{
              background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)",
              color: "#FFF",
              padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 3rem)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.25)",
            }}
          >
            <div
              className="font-mono uppercase mb-4"
              style={{ fontSize: "10px", letterSpacing: "0.3em", color: ACCENT }}
            >
              Planning a Campaign?
            </div>
            <h2
              className="font-black uppercase m-0 mb-6 leading-[0.95]"
              style={{ fontSize: "clamp(24px, 3vw, 38px)", letterSpacing: "-0.03em" }}
            >
              Get a Quote in <span style={{ color: ACCENT }}>24 Hours.</span>
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-bold uppercase no-underline rounded-full"
              style={{
                fontSize: "11px",
                letterSpacing: "0.22em",
                padding: "14px 28px",
                background: "#FFF",
                color: "#1A1A1A",
              }}
            >
              Get a Quote <span style={{ color: ACCENT }}>→</span>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
