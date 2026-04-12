"use client";

import { useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ACCENT = "#D4A010";

const GALLERY_IMGS = [
  { src: "/gallery/fashionpass-wheat-paste-campaign-poster-wall.webp",      label: "FashionPass — Campaign Wall",          alt: "FashionPass wheat paste campaign poster wall guerrilla marketing Los Angeles",                          tag: "Wheat Paste" },
  { src: "/gallery/fifa-world-cup-poster-wall-gallery-wide.webp",           label: "FIFA World Cup — Gallery Wall",        alt: "FIFA World Cup wheat paste poster wall gallery wide view Atlanta street advertising",                   tag: "Wild Posting" },
  { src: "/gallery/fashionpass-wheat-paste-wild-posting-wall-los-angeles.webp", label: "FashionPass — LA Wild Posting",    alt: "FashionPass wild posting wall Los Angeles wheat paste street marketing campaign",                       tag: "Wild Posting" },
  { src: "/gallery/fifa-world-cup-atlanta-wall-installation.webp",          label: "FIFA Atlanta — Wall Installation",     alt: "FIFA World Cup Atlanta wall installation wheat paste posters guerrilla advertising",                    tag: "Wheat Paste" },
  { src: "/gallery/dont-fall-off-wheat-paste-wall-closeup.webp",            label: "Don't Fall Off — Wall Close-Up",       alt: "Don't Fall Off music wheat paste poster wall close-up guerrilla advertising campaign",                  tag: "Wheat Paste" },
  { src: "/gallery/fifa-world-cup-poster-wall-angle-view.webp",             label: "FIFA Posters — Angle View",            alt: "FIFA World Cup poster wall angle view wild posting street advertising campaign",                        tag: "Wild Posting" },
  { src: "/gallery/fashionpass-wheat-paste-street-art-wall-la.webp",        label: "FashionPass — Wide Format Paste",      alt: "FashionPass wide format wheat paste street art wall Los Angeles wild posting",                          tag: "Wheat Paste" },
  { src: "/gallery/dont-fall-off-wheat-paste-street-view-la.webp",          label: "Don't Fall Off — Street View LA",      alt: "Don't Fall Off wheat paste wild posting wall installation street view Los Angeles",                     tag: "Wheat Paste" },
  { src: "/gallery/fifa-world-cup-wheat-paste-posters-closeup.webp",        label: "FIFA Posters — Close Up",              alt: "FIFA World Cup wheat paste posters close-up wild posting street campaign",                              tag: "Wild Posting" },
  { src: "/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp", label: "Incrediwear — Night Pole Wrap",        alt: "Incrediwear pole wrap guerrilla advertising at night urban street marketing",                           tag: "Wild Posting" },
  { src: "/gallery/chalk-spray-stencil-sidewalk-guerrilla-marketing.webp",  label: "Calvin Priice — Chalk Stencil",        alt: "Calvin Priice chalk spray stencil sidewalk guerrilla marketing campaign",                              tag: "Stencil" },
  { src: "/gallery/black-pearl-la-chalk-spray-stencil-sidewalk.webp",       label: "Black Pearl LA — Chalk Stencil",       alt: "Black Pearl Los Angeles chalk spray stencil marketing on sidewalk with custom stencil template",        tag: "Stencil" },
  { src: "/gallery/fifa-world-cup-poster-wall-street-perspective.webp",     label: "FIFA Posters — Street Perspective",    alt: "FIFA World Cup poster wall street perspective wild posting advertising campaign",                       tag: "Wild Posting" },
  { src: "/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp",         label: "Don't Fall Off — Urban Wall",          alt: "Don't Fall Off wheat paste posters on urban wall with pink accent guerrilla marketing",                 tag: "Wheat Paste" },
  { src: "/gallery/fifa-world-cup-poster-installation-closeup.webp",        label: "FIFA World Cup — Installation",        alt: "FIFA World Cup poster installation close-up wheat paste wild posting",                                  tag: "Wild Posting" },
  { src: "/gallery/street-pole-sticker-campaign-urban-advertising.webp",    label: "Calvin Priice — Sticker Campaign",     alt: "Calvin Priice street pole sticker campaign urban advertising guerrilla marketing",                      tag: "Wild Posting" },
  { src: "/gallery/black-pearl-la-stencil-template-grass.webp",             label: "Black Pearl LA — Stencil Template",    alt: "Custom chalk spray stencil template for Black Pearl Los Angeles guerrilla marketing campaign",          tag: "Stencil" },
  { src: "/gallery/fifa-world-cup-street-gallery-pedestrian-viewing.webp",  label: "FIFA — Street Gallery View",           alt: "FIFA World Cup street gallery pedestrian viewing wheat paste wild posting",                             tag: "Wild Posting" },
  { src: "/gallery/dont-fall-off-wheat-paste-pedestrian-street-art.webp",   label: "Don't Fall Off — Pedestrian View",     alt: "Pedestrian walking past Don't Fall Off wheat paste poster wall street art installation",                tag: "Wheat Paste" },
  { src: "/gallery/sticker-campaign-street-intersection-urban.webp",        label: "Sticker Campaign — Intersection",      alt: "Sticker campaign street intersection urban advertising guerrilla marketing",                            tag: "Wild Posting" },
  { src: "/gallery/custom-stencil-template-cut-out-design.webp",            label: "Custom Stencil Template",              alt: "Custom stencil template cut-out design for chalk spray guerrilla marketing campaigns",                  tag: "Stencil" },
  { src: "/gallery/dont-fall-off-wheat-paste-building-bike-rack.webp",      label: "Don't Fall Off — Building Perspective", alt: "Don't Fall Off wheat paste campaign building wall installation street perspective with bike rack",       tag: "Wheat Paste" },
] as const;

/* ── SVG Icons ── */
const IconChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M15 18l-6-6 6-6" />
  </svg>
);
const IconChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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
  const lightbox = lightboxIdx !== null ? GALLERY_IMGS[lightboxIdx] : null;

  const openLightbox = useCallback((i: number) => setLightboxIdx(i), []);
  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const prevImage = useCallback(() => setLightboxIdx(i => i !== null ? (i - 1 + GALLERY_IMGS.length) % GALLERY_IMGS.length : null), []);
  const nextImage = useCallback(() => setLightboxIdx(i => i !== null ? (i + 1) % GALLERY_IMGS.length : null), []);

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
      <section className="px-5 sm:px-8 md:px-12 lg:px-16 pt-16 pb-8 md:pt-24 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Label */}
          <span className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.35em] uppercase mb-4"
            style={{ color: "rgba(0,0,0,0.38)" }}>
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
              style={{ color: "rgba(0,0,0,0.35)" }}>
              {GALLERY_IMGS.length} Photos · Documented Campaigns
            </p>
          </div>

          {/* Divider */}
          <div className="mt-8 w-full h-px" style={{ background: "rgba(0,0,0,0.07)" }} />
        </motion.div>
      </section>

      {/* ── Masonry Grid ──────────────────────────────────────────── */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24">
        <div
          className="columns-1 sm:columns-2 lg:columns-3"
          style={{ columnGap: "16px" }}
        >
          {GALLERY_IMGS.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="break-inside-avoid mb-4"
            >
              <button
                onClick={() => openLightbox(i)}
                className="w-full text-left group relative overflow-hidden rounded-2xl cursor-zoom-in block"
                style={{ border: "none", padding: 0, background: "none" }}
                aria-label={`View ${img.label}`}
              >
                {/* Image */}
                <div className="relative w-full overflow-hidden rounded-2xl"
                  style={{ aspectRatio: i % 5 === 0 ? "3/4" : i % 3 === 0 ? "1/1" : "4/3" }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    loading={i < 6 ? "eager" : "lazy"}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-4"
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
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center"
        >
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase mb-6"
            style={{ color: "rgba(0,0,0,0.35)" }}>
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
              className="fixed inset-0 z-[9999] flex items-center justify-center"
              style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)" }}
              onClick={closeLightbox}
              tabIndex={-1}
              ref={(el) => el?.focus()}
            >
              <motion.div
                key={lightboxIdx}
                initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.94, opacity: 0 }}
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
                className="relative w-full h-full flex items-center justify-center p-4 md:p-10"
                onClick={e => e.stopPropagation()}
              >
                <div className="relative w-full h-full max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden"
                  style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}>
                  <Image src={lightbox.src} alt={lightbox.alt} fill sizes="100vw" className="object-contain" priority />
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
