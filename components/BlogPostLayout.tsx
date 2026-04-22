import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import BlogCard from "@/components/BlogCard";
import RelatedServicesGrid from "@/components/RelatedServicesGrid";
import BlogTableOfContents from "@/components/BlogTableOfContents";
import { MATEO_VARGAS, mateoVargasPerson } from "@/lib/blogAuthor";
import { BUSINESS } from "@/lib/business";
import {
  articleSchema,
  breadcrumbSchema,
  faqPageSchema,
  jsonLd,
} from "@/lib/schema";
import {
  PUBLISHED_POSTS,
  SILO_LABELS,
  getPublishedPost,
  type BlogPostMeta,
} from "@/lib/blogRegistry";

const ACCENT = "#D4A010";

/**
 * BlogPostLayout — shared shell for every /blog/<slug> page.
 *
 * Layout — 2-column grid on lg+ (pattern borrowed from 3floorguys.com/blog):
 *   Outer container: max-w-6xl (~1152px)
 *   Grid:            grid-cols-1 lg:grid-cols-[1fr_320px] gap-12
 *   Main column:     header, hero, TL;DR, body, FAQ (prose ~780px on lg)
 *   Sidebar:         sticky widgets — author card, auto-TOC, CTA, related links
 *
 * Responsibilities:
 *   1. Emit Article + FAQPage + BreadcrumbList JSON-LD
 *   2. Render breadcrumb, byline, hero, TL;DR, body slot, FAQ, CTA, related posts
 *   3. Keep posts focused on content — layout chrome never touches /content/blog/*.tsx
 *
 * Posts provide:
 *   - metadata via `/lib/blogRegistry.ts` (lookup by slug)
 *   - body + TL;DR via the `children` + `tldr` props
 */
export default function BlogPostLayout({
  post,
  tldr,
  children,
}: {
  post: BlogPostMeta;
  tldr: ReactNode;
  children: ReactNode;
}) {
  const postUrl = `${BUSINESS.url}/blog/${post.slug}`;
  const heroAbsUrl = `${BUSINESS.url}${post.heroImage}`;
  const siloMeta = SILO_LABELS[post.silo];

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title },
  ];

  const related = post.relatedSlugs
    .map((slug) => getPublishedPost(slug))
    .filter((p): p is BlogPostMeta => Boolean(p));

  // "More from the Blog" feed. Prefer the hand-curated related list when the
  // post author has registered slugs; otherwise fall back to the three newest
  // published posts (excluding the current one) so the section never shows
  // empty on posts that haven't been cross-linked yet.
  const morePosts: BlogPostMeta[] =
    related.length > 0
      ? related.slice(0, 3)
      : PUBLISHED_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const publishedFmt = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const updatedFmt = new Date(post.updatedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const showUpdated = post.updatedAt !== post.publishedAt;

  return (
    <>
      {/* ── JSON-LD ─────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            articleSchema({
              headline: post.title,
              description: post.metaDescription,
              url: postUrl,
              image: heroAbsUrl,
              datePublished: post.publishedAt,
              dateModified: post.updatedAt,
              author: mateoVargasPerson(),
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(faqPageSchema(post.faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(breadcrumbSchema(breadcrumbItems)),
        }}
      />

      <SiteNav />
      <Breadcrumb items={breadcrumbItems} />

      <main>
        <div className="px-5 sm:px-8 md:px-12 lg:px-16 pt-8 pb-16">
          <div className="max-w-6xl mx-auto">

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-12">

              {/* ── MAIN COLUMN ─────────────────────────────────────────── */}
              <div className="min-w-0">

                {/* Header */}
                <header className="mb-10">
                  <div
                    className="inline-flex items-center gap-2 font-mono uppercase mb-5"
                    style={{ fontSize: "9px", letterSpacing: "0.3em", color: "rgba(0,0,0,0.55)" }}
                  >
                    <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                    {siloMeta.label} · {siloMeta.tagline}
                  </div>
                  <h1
                    className="font-black uppercase m-0 leading-[0.95]"
                    style={{ fontSize: "clamp(30px, 4.2vw, 54px)", letterSpacing: "-0.035em" }}
                  >
                    {post.title}
                  </h1>
                  <div
                    className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-7 font-mono uppercase"
                    style={{ fontSize: "10px", letterSpacing: "0.22em", color: "rgba(0,0,0,0.55)" }}
                  >
                    <span style={{ color: "#1A1A1A", fontWeight: 700 }}>{MATEO_VARGAS.name}</span>
                    <span aria-hidden>·</span>
                    <span>{MATEO_VARGAS.jobTitle}</span>
                    <span aria-hidden>·</span>
                    <time dateTime={post.publishedAt}>{publishedFmt}</time>
                    {showUpdated && (
                      <>
                        <span aria-hidden>·</span>
                        <span>
                          Updated <time dateTime={post.updatedAt}>{updatedFmt}</time>
                        </span>
                      </>
                    )}
                  </div>
                </header>

                {/* Hero image (inside main column, sits above TL;DR) */}
                <div
                  className="relative w-full rounded-2xl overflow-hidden mb-10"
                  style={{
                    aspectRatio: "16/9",
                    boxShadow: "0 18px 50px rgba(0,0,0,0.15), 0 3px 10px rgba(0,0,0,0.06)",
                  }}
                >
                  <Image
                    src={post.heroImage}
                    alt={post.heroAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 780px"
                    priority
                  />
                </div>

                {/* TL;DR */}
                <section
                  className="rounded-2xl mb-10"
                  style={{
                    background: "rgba(255,255,255,0.45)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.7)",
                    padding: "1.5rem 1.75rem",
                  }}
                >
                  <div
                    className="font-mono uppercase mb-3"
                    style={{ fontSize: "10px", letterSpacing: "0.3em", color: ACCENT, fontWeight: 700 }}
                  >
                    TL;DR
                  </div>
                  <div
                    className="font-light leading-relaxed"
                    style={{ fontSize: "clamp(15px, 1.5vw, 17px)", color: "rgba(0,0,0,0.82)" }}
                  >
                    {tldr}
                  </div>
                </section>

                {/* Body */}
                <article className="blog-prose">{children}</article>

                {/* FAQ */}
                <section className="mt-16">
                  <h2
                    className="font-black uppercase m-0 mb-8 leading-[0.95]"
                    style={{ fontSize: "clamp(26px, 3vw, 38px)", letterSpacing: "-0.03em" }}
                  >
                    Frequently Asked
                    <span style={{ color: ACCENT }}>.</span>
                  </h2>
                  <div className="flex flex-col gap-4">
                    {post.faqs.map(({ q, a }) => (
                      <details
                        key={q}
                        className="rounded-2xl group"
                        style={{
                          background: "rgba(255,255,255,0.35)",
                          backdropFilter: "blur(10px)",
                          WebkitBackdropFilter: "blur(10px)",
                          border: "1px solid rgba(255,255,255,0.6)",
                        }}
                      >
                        <summary
                          className="cursor-pointer font-black uppercase list-none flex items-center justify-between gap-4"
                          style={{
                            fontSize: "14px",
                            letterSpacing: "-0.01em",
                            padding: "1.1rem 1.5rem",
                            color: "#1A1A1A",
                          }}
                        >
                          <span>{q}</span>
                          <span
                            aria-hidden
                            className="font-mono"
                            style={{ color: ACCENT, fontSize: "18px", flexShrink: 0 }}
                          >
                            +
                          </span>
                        </summary>
                        <div
                          className="font-light leading-relaxed"
                          style={{
                            fontSize: "15px",
                            color: "rgba(0,0,0,0.72)",
                            padding: "0 1.5rem 1.25rem",
                          }}
                        >
                          {a}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>

              </div>
              {/* END MAIN COLUMN */}

              {/* ── SIDEBAR (lg+ only) ──────────────────────────────────── */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 flex flex-col gap-5">

                  {/* Author */}
                  <div
                    className="rounded-2xl flex gap-4 items-start"
                    style={{
                      background: "rgba(255,255,255,0.40)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.7)",
                      padding: "1.15rem 1.35rem",
                    }}
                  >
                    <div
                      aria-hidden
                      className="rounded-full flex items-center justify-center flex-shrink-0 font-black"
                      style={{
                        width: 44,
                        height: 44,
                        background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)",
                        color: ACCENT,
                        fontSize: 14,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      MV
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className="font-mono uppercase mb-1"
                        style={{ fontSize: "9px", letterSpacing: "0.3em", color: "rgba(0,0,0,0.55)" }}
                      >
                        Written by
                      </div>
                      <div
                        className="font-black uppercase leading-tight"
                        style={{ fontSize: "13px", letterSpacing: "-0.015em", color: "#1A1A1A" }}
                      >
                        {MATEO_VARGAS.name}
                      </div>
                      <div
                        className="font-medium"
                        style={{ fontSize: "11px", color: ACCENT, marginTop: 2 }}
                      >
                        {MATEO_VARGAS.jobTitle}
                      </div>
                    </div>
                  </div>

                  {/* Auto-generated TOC */}
                  <BlogTableOfContents />

                  {/* Sidebar CTA */}
                  <div
                    className="rounded-2xl"
                    style={{
                      background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)",
                      color: "#FFF",
                      padding: "1.25rem 1.4rem",
                    }}
                  >
                    <div
                      className="font-mono uppercase mb-2"
                      style={{ fontSize: "9px", letterSpacing: "0.3em", color: ACCENT, fontWeight: 700 }}
                    >
                      Planning a Campaign?
                    </div>
                    <div
                      className="font-black uppercase leading-tight mb-3"
                      style={{ fontSize: "16px", letterSpacing: "-0.02em" }}
                    >
                      Get a quote in{" "}
                      <span style={{ color: ACCENT }}>24 hours.</span>
                    </div>
                    <p
                      className="font-light leading-relaxed mb-4"
                      style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)" }}
                    >
                      Wheat pasting, snipes, and full-impact campaigns across 45+ US cities.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 font-bold uppercase no-underline rounded-full"
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.22em",
                        padding: "10px 18px",
                        background: "#FFF",
                        color: "#1A1A1A",
                      }}
                    >
                      Get a Quote <span style={{ color: ACCENT }}>→</span>
                    </Link>
                  </div>

                  {/* Related links */}
                  {related.length > 0 && (
                    <div
                      className="rounded-2xl"
                      style={{
                        background: "rgba(255,255,255,0.40)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.7)",
                        padding: "1.15rem 1.35rem",
                      }}
                    >
                      <div
                        className="font-mono uppercase mb-3"
                        style={{ fontSize: "9px", letterSpacing: "0.3em", color: "rgba(0,0,0,0.55)", fontWeight: 700 }}
                      >
                        Related Reading
                      </div>
                      <ul className="flex flex-col gap-3 list-none m-0 p-0">
                        {related.map((rp) => (
                          <li key={rp.slug} className="m-0 p-0">
                            <Link
                              href={`/blog/${rp.slug}`}
                              className="block no-underline"
                              style={{ color: "#1A1A1A" }}
                            >
                              <div
                                className="font-bold leading-tight"
                                style={{ fontSize: "13px", letterSpacing: "-0.01em" }}
                              >
                                {rp.title}
                              </div>
                              <div
                                className="font-mono uppercase mt-1"
                                style={{ fontSize: "9px", letterSpacing: "0.22em", color: ACCENT }}
                              >
                                {SILO_LABELS[rp.silo].label} →
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>
              </aside>
              {/* END SIDEBAR */}

            </div>
            {/* END GRID */}

          </div>
        </div>

        {/* ── Author card (full-width, mobile-friendly long bio) ───────── */}
        {/* CTA is handled by the sticky sidebar on lg+ and by the inline
            `<Callout variant="accent">` blocks inside each post on mobile.
            The full-width gradient CTA that used to sit here was removed —
            readers already see the quote ask in-context, and repeating it
            immediately below the FAQ made the page feel salesy. */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20">
          <div
            className="max-w-[900px] mx-auto rounded-3xl flex flex-col sm:flex-row gap-5 items-start"
            style={{
              background: "rgba(255,255,255,0.35)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.6)",
              padding: "1.75rem 2rem",
            }}
          >
            <div
              aria-hidden
              className="rounded-full flex items-center justify-center flex-shrink-0 font-black"
              style={{
                width: 72,
                height: 72,
                background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)",
                color: ACCENT,
                fontSize: 22,
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
                Written by
              </div>
              <div
                className="font-black uppercase mb-3"
                style={{ fontSize: "17px", letterSpacing: "-0.015em", color: "#1A1A1A" }}
              >
                {MATEO_VARGAS.name} ·{" "}
                <span style={{ color: ACCENT }}>{MATEO_VARGAS.jobTitle}</span>
              </div>
              <p
                className="font-light leading-relaxed m-0"
                style={{ fontSize: "14px", color: "rgba(0,0,0,0.68)" }}
              >
                {MATEO_VARGAS.bio}
              </p>
            </div>
          </div>
        </section>

        {/* ── More from the Blog ──────────────────────────────────────────
            Internal linking section. If this post has registered related
            slugs, we show up to 3 of them; otherwise we fall back to the
            newest 3 published posts (excluding the current one) so the
            section never feels empty even on sparse posts. */}
        {morePosts.length > 0 && (
          <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
                <div>
                  <div
                    className="font-mono uppercase mb-3 inline-flex items-center gap-2"
                    style={{
                      fontSize: "9px",
                      letterSpacing: "0.3em",
                      color: "rgba(0,0,0,0.55)",
                      fontWeight: 700,
                    }}
                  >
                    <span
                      className="block w-1.5 h-1.5 rounded-full"
                      style={{ background: ACCENT }}
                    />
                    Keep Reading
                  </div>
                  <h2
                    className="font-black uppercase m-0 leading-[0.95]"
                    style={{
                      fontSize: "clamp(24px, 2.8vw, 34px)",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    More from the Blog<span style={{ color: ACCENT }}>.</span>
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 font-bold uppercase no-underline"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.22em",
                    color: ACCENT,
                  }}
                >
                  View all posts <span aria-hidden>→</span>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {morePosts.map((rp) => (
                  <BlogCard key={rp.slug} post={rp} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Related Services ────────────────────────────────────────────
            The final conversion block. Reader has finished the post, seen
            related reading, and now gets a clean cross-link into what we
            actually do. Glass cards with gold hover rail — the visual language
            matches the TOC progress rail so the two widgets read as siblings.

            Positioned after "More from the Blog" intentionally: readers who
            want to keep learning see blog options first; readers ready to
            act see services last, right before the footer's Get-a-Quote. */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
              <div>
                <div
                  className="font-mono uppercase mb-3 inline-flex items-center gap-2"
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.3em",
                    color: "rgba(0,0,0,0.55)",
                    fontWeight: 700,
                  }}
                >
                  <span
                    className="block w-1.5 h-1.5 rounded-full"
                    style={{ background: ACCENT }}
                  />
                  What We Do
                </div>
                <h2
                  className="font-black uppercase m-0 leading-[0.95]"
                  style={{
                    fontSize: "clamp(24px, 2.8vw, 34px)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Related Services<span style={{ color: ACCENT }}>.</span>
                </h2>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-bold uppercase no-underline rounded-full"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                  padding: "10px 20px",
                  background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)",
                  color: "#FFF",
                }}
              >
                Get a Quote <span style={{ color: ACCENT }}>→</span>
              </Link>
            </div>
            <RelatedServicesGrid />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
