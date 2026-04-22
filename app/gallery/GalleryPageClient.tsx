"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_IMGS } from "@/lib/gallery-data";

const ACCENT = "#D4A010";
const PER_PAGE = 12;

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
const IconClose = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function GalleryPageClient() {
  const [mounted, setMounted] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [activeTag, setActiveTag] = useState<string>("All");
  const [page, setPage] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  const lightbox = lightboxIdx !== null ? GALLERY_IMGS[lightboxIdx] : null;

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

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") prevImage();
      else if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIdx, closeLightbox, prevImage, nextImage]);

  return (
    <>
      {/* ── Page Header ───────────────────────────────────────────── */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-16 pt-16 pb-8 md:pt-24 md:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Label */}
          <span className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.35em] uppercase mb-4"
            style={{ color: "rgba(0,0,0,0.55)" }}>
            <span className="block w-6 h-px" style={{ background: ACCENT }} />
            Campaign Gallery
          </span>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
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
        </motion.div>
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
                  background: isActive ? ACCENT : "rgba(0,0,0,0.05)",
                  color: isActive ? "#fff" : "rgba(0,0,0,0.6)",
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
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTag}-${page}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
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
                    style={{ aspectRatio: i % 5 === 0 ? "3/4" : i % 3 === 0 ? "1/1" : "4/3" }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      loading={i < 3 ? "eager" : "lazy"}
                      fetchPriority={i < 3 ? "high" : "low"}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
          </motion.div>
        </AnimatePresence>

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
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
        </motion.div>
      </section>

      {/* ── Lightbox Portal ───────────────────────────────────────── */}
      {mounted && createPortal(
        <AnimatePresence>
          {lightbox && lightboxIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              role="dialog"
              aria-modal="true"
              aria-label={lightbox ? `${lightbox.label} — enlarged view` : "Image viewer"}
              className="fixed inset-0 z-[9999] flex items-center justify-center"
              style={{ background: "rgba(0,0,0,0.96)" }}
              onClick={closeLightbox}
              tabIndex={-1}
              ref={(el) => el?.focus()}
            >
              <motion.div
                key={lightboxIdx}
                initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.94, opacity: 0 }}
                transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full flex items-center justify-center p-4 md:p-10"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-full max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden"
                  style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}>
                  <Image
                    src={lightbox.src}
                    alt={lightbox.alt}
                    fill
                    sizes="(min-width: 768px) 80vw, 100vw"
                    className="object-contain"
                  />
                </div>
                {/* Label */}
                <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 text-center pointer-events-none">
                  <span className="font-black uppercase tracking-tight text-white text-sm md:text-base block">{lightbox.label}</span>
                  <span className="font-mono text-[9px] tracking-[0.3em] uppercase mt-1 block" style={{ color: ACCENT }}>
                    {lightboxIdx + 1} / {GALLERY_IMGS.length} · Phantom Pasting
                  </span>
                </div>
              </motion.div>

              {/* Prev */}
              <button onClick={(e) => { e.stopPropagation(); prevImage(); }} aria-label="Previous"
                className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full text-white cursor-pointer transition-all hover:scale-110"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", fontFamily: "inherit" }}>
                <IconChevronLeft />
              </button>
              {/* Next */}
              <button onClick={(e) => { e.stopPropagation(); nextImage(); }} aria-label="Next"
                className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full text-white cursor-pointer transition-all hover:scale-110"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", fontFamily: "inherit" }}>
                <IconChevronRight />
              </button>
              {/* Close */}
              <button onClick={closeLightbox} aria-label="Close"
                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 flex items-center justify-center rounded-full text-white cursor-pointer transition-all hover:scale-110"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", fontFamily: "inherit" }}>
                <IconClose />
              </button>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
