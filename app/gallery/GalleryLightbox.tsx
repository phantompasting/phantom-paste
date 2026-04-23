"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_IMGS } from "@/lib/gallery-data";

const ACCENT = "#D4A010";

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

interface GalleryLightboxProps {
  lightboxIdx: number | null;
  closeLightbox: () => void;
  prevImage: () => void;
  nextImage: () => void;
}

export default function GalleryLightbox({ lightboxIdx, closeLightbox, prevImage, nextImage }: GalleryLightboxProps) {
  const lightbox = lightboxIdx !== null ? GALLERY_IMGS[lightboxIdx] : null;

  // Keyboard nav lives here (was duplicated; safe to centralize because lightbox is the
  // only consumer of arrow keys and Escape while open)
  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIdx, closeLightbox, prevImage, nextImage]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {lightbox && lightboxIdx !== null && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${lightbox.label} — enlarged view`}
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
            <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 text-center pointer-events-none">
              <span className="font-black uppercase tracking-tight text-white text-sm md:text-base block">{lightbox.label}</span>
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase mt-1 block" style={{ color: ACCENT }}>
                {lightboxIdx + 1} / {GALLERY_IMGS.length} · Phantom Pasting
              </span>
            </div>
          </motion.div>

          <button onClick={(e) => { e.stopPropagation(); prevImage(); }} aria-label="Previous"
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full text-white cursor-pointer transition-all hover:scale-110"
            style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", fontFamily: "inherit" }}>
            <IconChevronLeft />
          </button>
          <button onClick={(e) => { e.stopPropagation(); nextImage(); }} aria-label="Next"
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full text-white cursor-pointer transition-all hover:scale-110"
            style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", fontFamily: "inherit" }}>
            <IconChevronRight />
          </button>
          <button onClick={closeLightbox} aria-label="Close"
            className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 flex items-center justify-center rounded-full text-white cursor-pointer transition-all hover:scale-110"
            style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", fontFamily: "inherit" }}>
            <IconClose />
          </button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
