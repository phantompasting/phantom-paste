"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { GALLERY_IMGS } from "@/lib/gallery-data";

// Lightbox is the only surface that needs framer-motion. Loading it on demand
// keeps framer (~38 KB) out of the initial gallery bundle. ssr:false because
// the lightbox uses createPortal(document.body) which is browser-only.
const GalleryLightbox = dynamic(() => import("./GalleryLightbox"), { ssr: false });

const ACCENT = "#D4A010";
// Lowered from 12 to 9 to cut initial mobile DOM size by 25% — gallery PSI
// mobile_perf was 74 (LCP 3.3s, TBT 500ms) per pagespeed.json. 3-column
// desktop layout still fills cleanly at 9 items; mobile single-column users
// scroll past 9 thumbs to the pagination control just as quickly as 12.
const PER_PAGE = 9;

// Unique tags derived from data — order: All first, then sorted
const ALL_TAGS = [
  "All",
  ...Array.from(new Set(GALLERY_IMGS.map((img) => img.tag))).sort(),
] as const;

// Tag count lookup (computed once, not per render)
const TAG_COUNTS = ALL_TAGS.reduce<Record<string, number>>((acc, tag) => {
  acc[tag] = tag === "All"
    ? GALLERY_IMGS.length
    : GALLERY_IMGS.filter((img) => img.tag === tag).length;
  return acc;
}, {});

/* ── SVG Icons ── */
const IconChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M15 18l-6-6 6-6" />
  </svg>
);
const IconChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export default function GalleryPageClient() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [activeTag, setActiveTag] = useState<string>("All");
  const [page, setPage] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  // ── Filtered + paged data ──────────────────────────────────────
  // Carry the original GALLERY_IMGS index alongside each image so the
  // lightbox can always navigate the full set regardless of active filter.
  const filteredWithIdx = activeTag === "All"
    ? GALLERY_IMGS.map((img, idx) => ({ img, idx }))
    : GALLERY_IMGS.map((img, idx) => ({ img, idx })).filter(({ img }) => img.tag === activeTag);

  const totalPages = Math.ceil(filteredWithIdx.length / PER_PAGE);
  const paged = filteredWithIdx.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  // ── Handlers ──────────────────────────────────────────────────
  const handleTagChange = (tag: string) => {
    setActiveTag(tag);
    setPage(0);
  };

  const handlePageChange = (next: number) => {
    setPage(next);
    // Scroll gallery top into view smoothly after state flushes
    setTimeout(() => {
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const openLightbox = useCallback((globalIdx: number) => setLightboxIdx(globalIdx), []);
  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const prevImage = useCallback(
    () => setLightboxIdx((i) => (i !== null ? (i - 1 + GALLERY_IMGS.length) % GALLERY_IMGS.length : null)),
    []
  );
  const nextImage = useCallback(
    () => setLightboxIdx((i) => (i !== null ? (i + 1) % GALLERY_IMGS.length : null)),
    []
  );

  // Keyboard nav now lives inside GalleryLightbox so the listener only attaches
  // when framer-motion has loaded and the modal is mounted.

  return (
    <>
      {/* ── Page Header ───────────────────────────────────────────── */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-16 pt-16 pb-8 md:pt-24 md:pb-10">
        <div>
          {/* Label */}
          <span className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.35em] uppercase mb-4"
            style={{ color: "rgba(0,0,0,0.55)" }}>
            <span className="block w-6 h-px" style={{ background: ACCENT }} />
            Campaign Gallery
          </span>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            {/* Page H1 — the SSR page intro was removed because two stacked
                titles ("FIELD-SHOT DOCUMENTATION" + "OUR WORK") read as
                redundant. Single H1 lives here, above the gallery grid. */}
            <h1
              className="font-black uppercase m-0 leading-[0.88]"
              style={{ fontSize: "clamp(40px, 6vw, 80px)", letterSpacing: "-0.03em", color: "#1A1A1A" }}
            >
              OUR WORK<span style={{ color: ACCENT }}>.</span>
            </h1>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase m-0"
              style={{ color: "rgba(0,0,0,0.55)" }}>
              {filteredWithIdx.length} Photos · Documented Campaigns
            </p>
          </div>

          {/* Divider */}
          <div className="mt-8 w-full h-px" style={{ background: "rgba(0,0,0,0.07)" }} />
        </div>
      </section>

      {/* ── Filter Pills ──────────────────────────────────────────── */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-8">
        {/* horizontal scroll on mobile, wrap on desktop */}
        <div
          className="flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible"
          style={{ scrollbarWidth: "none" }}
        >
          {ALL_TAGS.map((tag) => {
            const isActive = activeTag === tag;
            return (
              <button
                key={tag}
                onClick={() => handleTagChange(tag)}
                className="shrink-0 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] uppercase whitespace-nowrap px-4 py-2 rounded-full transition-all"
                style={{
                  // Active tab uses near-black bg with gold border for WCAG AA
                  // contrast on the small (10px) label. Pure gold-on-white was
                  // 2.37:1 contrast — failed AA — so the active state inverts to
                  // dark bg + cream text while the gold accent remains visible
                  // as the border + glow.
                  background: isActive ? "#1A1A1A" : "rgba(0,0,0,0.05)",
                  color: isActive ? "#FFF8E0" : "rgba(0,0,0,0.6)",
                  border: isActive ? `1px solid ${ACCENT}` : "1px solid rgba(0,0,0,0.08)",
                  fontFamily: "inherit",
                  boxShadow: isActive ? "0 2px 12px rgba(212,160,16,0.35)" : "none",
                  transition: "background 0.18s, color 0.18s, box-shadow 0.18s, border-color 0.18s",
                }}
              >
                {tag}
                <span style={{ opacity: isActive ? 0.75 : 0.45, fontSize: "9px" }}>
                  ({TAG_COUNTS[tag]})
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ── Gallery Grid ──────────────────────────────────────────── */}
      <section
        ref={gridRef}
        className="px-5 sm:px-8 md:px-12 lg:px-16 pb-10"
        style={{ scrollMarginTop: "80px" }}
      >
        {/* Filter/page transitions previously used framer AnimatePresence. Replaced
            with a plain keyed div so framer-motion stays out of the initial bundle.
            The `key` change still remounts the grid; we just skip the fade animation
            because pre-paint opacity:0 was delaying observed FCP on this page. */}
        <div
          key={`${activeTag}-${page}`}
          className="columns-1 sm:columns-2 lg:columns-3"
          style={{ columnGap: "16px" }}
        >
            {paged.map(({ img, idx }, i) => (
              <div key={idx} className="break-inside-avoid mb-4">
                <button
                  onClick={() => openLightbox(idx)}
                  className="w-full text-left group relative overflow-hidden rounded-2xl cursor-zoom-in block"
                  style={{ border: "none", padding: 0, background: "none" }}
                  aria-label={`View ${img.label}`}
                >
                  <div
                    className="relative w-full overflow-hidden rounded-2xl"
                    style={{
                      // Per-image override wins over the rotating default. Images
                      // tagged `aspect: "portrait"` in gallery-data force a 3/4
                      // thumbnail so vertical photos aren't center-cropped to a
                      // tiny middle band by a 4/3 landscape container.
                      aspectRatio: ("aspect" in img && img.aspect === "portrait")
                        ? "3/4"
                        : i % 5 === 0
                        ? "3/4"
                        : i % 3 === 0
                        ? "1/1"
                        : "4/3",
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      // First 3 images on each page form the above-fold row.
                      // Eager-load + high priority on those for fast LCP;
                      // everything else stays lazy + low priority.
                      loading={i < 3 ? "eager" : "lazy"}
                      fetchPriority={i === 0 ? "high" : i < 3 ? "auto" : "low"}
                      priority={i === 0}
                      // Tighter sizes — column-gap accounted for. Mobile is
                      // 1 col with 40px page padding; sm 2 cols; lg 3 cols.
                      // Previous `100vw` over-requested by ~2x at common widths.
                      sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1024px) calc(50vw - 24px), calc(33vw - 24px)"
                      // Quality 70 instead of Next's default 75 — gallery
                      // thumbnails are decorative + clicked through to the
                      // lightbox for a hi-res view, so the ~10-15% byte
                      // savings on every thumb is a clean LCP win on the
                      // mobile gallery (which was scoring 74 on PSI).
                      quality={70}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
                      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, transparent 60%)" }}
                    >
                      <span className="font-black uppercase tracking-tight text-white text-xs block leading-tight">
                        {img.label}
                      </span>
                      <span className="font-mono text-[8px] tracking-[0.3em] uppercase mt-1 block"
                        style={{ color: ACCENT }}>
                        {img.tag} · Phantom Pasting
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            ))}
        </div>

        {/* ── Pagination ──────────────────────────────────────────── */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-10">
            {/* Prev */}
            <button
              onClick={() => handlePageChange(Math.max(0, page - 1))}
              disabled={page === 0}
              className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] uppercase px-4 py-2 rounded-full transition-all"
              style={{
                background: "rgba(0,0,0,0.04)",
                color: page === 0 ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.65)",
                border: "1px solid rgba(0,0,0,0.08)",
                cursor: page === 0 ? "not-allowed" : "pointer",
                fontFamily: "inherit",
              }}
            >
              <IconChevronLeft /> Prev
            </button>

            {/* Page dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i)}
                  aria-label={`Page ${i + 1}`}
                  style={{
                    height: "8px",
                    width: i === page ? "24px" : "8px",
                    borderRadius: "99px",
                    background: i === page ? ACCENT : "rgba(0,0,0,0.15)",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    transition: "width 0.25s ease, background 0.2s ease",
                  }}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={() => handlePageChange(Math.min(totalPages - 1, page + 1))}
              disabled={page === totalPages - 1}
              className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] uppercase px-4 py-2 rounded-full transition-all"
              style={{
                background: "rgba(0,0,0,0.04)",
                color: page === totalPages - 1 ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.65)",
                border: "1px solid rgba(0,0,0,0.08)",
                cursor: page === totalPages - 1 ? "not-allowed" : "pointer",
                fontFamily: "inherit",
              }}
            >
              Next <IconChevronRight />
            </button>
          </div>
        )}

        {/* Page counter */}
        {totalPages > 1 && (
          <p className="text-center font-mono text-[9px] tracking-[0.2em] uppercase mt-4"
            style={{ color: "rgba(0,0,0,0.35)" }}>
            Page {page + 1} of {totalPages}
          </p>
        )}
      </section>

      {/* ── Footer CTA ────────────────────────────────────────────── */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24">
        <div className="w-full h-px mb-16" style={{ background: "rgba(0,0,0,0.07)" }} />
        <div className="text-center">
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase mb-6"
            style={{ color: "rgba(0,0,0,0.55)" }}>
            Ready to own your streets?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-8 py-4 rounded-full"
            style={{
              background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)",
              color: "#FFF",
              boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
            }}
          >
            Launch Your Campaign →
          </a>
        </div>
      </section>

      <GalleryLightbox lightboxIdx={lightboxIdx} closeLightbox={closeLightbox} prevImage={prevImage} nextImage={nextImage} />
    </>
  );
}
