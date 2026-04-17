"use client";

/**
 * PHANTOM PASTING — Scroll Sections (Full-Page Snap)
 * ─────────────────────────────────────────────────────
 * Every section = exactly 100vh. CSS scroll-snap-type: y mandatory.
 * GSAP ScrollTrigger entrances via useSectionReveal. Framer Motion
 * retained only for lightbox + form success AnimatePresence swaps.
 */

import { useRef, useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ShinyGoldText from "@/components/ShinyGoldText";
import GlassSurface from "@/components/GlassSurface";
import SpotlightCard from "@/components/SpotlightCard";
import { GALLERY_IMGS } from "@/lib/gallery-data";
import { BUSINESS } from "@/lib/business";
import { useSectionReveal, useInViewOnce } from "./reveal";

const SNAP      = { type: "spring", stiffness: 140, damping: 22 } as const;
const SNAP_HARD = { type: "spring", stiffness: 180, damping: 26 } as const;

/* ── SVG Icons — inline, no emoji, no icon library dependency ── */
const IconMail = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <polyline points="2,7 12,13 22,7"/>
  </svg>
);
const IconMap = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
    <line x1="8" y1="2" x2="8" y2="18"/>
    <line x1="16" y1="6" x2="16" y2="22"/>
  </svg>
);
const IconBolt = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const IconCamera = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
    <circle cx="12" cy="13" r="4"/>
  </svg>
);

const IconPin = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconEye = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);
const IconBroadcast = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="2"/>
    <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>
  </svg>
);
const IconUsers = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconInstagram = ({ color }: { color: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const IconClock = ({ color }: { color: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);
const IconPhone = ({ color }: { color: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IconChevronLeft = ({ color }: { color: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);
const IconChevronRight = ({ color }: { color: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);
const IconClose = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const IconSuccessRing = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="#D4A010" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="36" cy="36" r="30"/>
    <polyline points="22,36 32,48 52,24"/>
  </svg>
);
const IconCheck = ({ color }: { color: string }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ flexShrink: 0 }}>
    <polyline points="1.5,6 4.5,9 10.5,3"/>
  </svg>
);

/* ── Shared count-up ticker ─────────────────────────────────────
   One rAF loop for ALL stat counters on the page. Each registered
   counter writes its value directly into its own <span> via ref,
   so React never re-renders during the animation. Avoids N parallel
   setState-per-frame loops when the stats grid scrolls into view.
   ─────────────────────────────────────────────────────────────── */
type CountTask = {
  el: HTMLSpanElement;
  target: number;
  suffix: string;
  duration: number;
  start: number;
};
const countTasks = new Set<CountTask>();
let countRaf = 0;
const tickCounters = () => {
  const now = performance.now();
  for (const t of countTasks) {
    const progress = Math.min((now - t.start) / t.duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    t.el.textContent = `${Math.round(eased * t.target)}${t.suffix}`;
    if (progress >= 1) countTasks.delete(t);
  }
  if (countTasks.size > 0) {
    countRaf = requestAnimationFrame(tickCounters);
  } else {
    countRaf = 0;
  }
};

/* Parses "500+" → counts 0→500, appends "+". Works for "10yr", "100%", "24hr" too. */
function StatNum({ raw, inView }: { raw: string; inView: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const match = raw.match(/^(\d+)(.*)$/);
  // With `noUncheckedIndexedAccess`, capture groups are `string | undefined` even
  // when the parent `match` succeeded — TypeScript can't prove regex capture semantics.
  const target = match?.[1] ? parseInt(match[1], 10) : 0;
  const suffix = match?.[2] ?? raw;

  useEffect(() => {
    if (!inView || !match || !ref.current) return;
    const el = ref.current;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) { el.textContent = `${target}${suffix}`; return; }
    const duration = Math.max(600, target * 2);
    const task: CountTask = { el, target, suffix, duration, start: performance.now() };
    countTasks.add(task);
    if (countRaf === 0) countRaf = requestAnimationFrame(tickCounters);
    return () => { countTasks.delete(task); };
  }, [inView, match, target, suffix]);

  if (!match) return <>{raw}</>;
  return <span ref={ref}>0{suffix}</span>;
}

/* ── Shared Components ── */
function SnapPage({ children, className = "", id, style }: {
  children: React.ReactNode; className?: string; id?: string; style?: React.CSSProperties;
}) {
  return (
    <div id={id} className={`h-[100dvh] overflow-hidden relative flex items-center ${className}`}
      // NB: dropped the `transform: translateZ(0)` GPU-promotion hint. With 13
      // SnapPage sections on the home page, translateZ was forcing the
      // compositor to allocate 13 viewport-sized GPU layers — on mid-range
      // mobile that's hundreds of MB of texture memory and causes layer
      // thrash during snap-scroll. `contain: layout style paint` gives us
      // the painting/layout isolation we need without promoting to a GPU
      // layer. Only elements that actually move/animate should be promoted.
      style={{ scrollSnapAlign: "start", scrollSnapStop: "always", contain: "layout style paint", ...style }}>
      {children}
    </div>
  );
}


function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.35em] uppercase"
      style={{ color: "rgba(0,0,0,0.5)" }}>
      <span className="block w-5 h-px" style={{ background: "rgba(0,0,0,0.25)" }} />
      {children}
    </span>
  );
}

function Glass({
  children, className = "", style = {}, accentColor = "rgba(0,0,0,0.06)",
}: { children: React.ReactNode; className?: string; style?: React.CSSProperties; accentColor?: string; }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl ${className}`}
      style={{
        background: "rgba(242,240,236,0.88)",
        border: "1px solid rgba(255,255,255,0.6)",
        boxShadow: `0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -1px 0 ${accentColor}`,
        ...style,
      }}>
      {children}
    </div>
  );
}


/* ── TiltCard — 3D tilt + spotlight (desktop only) ─────────────
   Mouse-move handling is rAF-batched: we cache the latest pointer
   coords on each event and only write styles once per frame. Previously
   every mousemove rewrote the inline `transform` string AND re-parsed a
   full `radial-gradient(...)` expression on the spotlight layer, which
   triggered style recomputation at pointer-sample rate. Now all writes
   happen in one rAF callback per frame.
   Also: the radial gradient is now driven by CSS custom properties on
   the spotlight element (--sx / --sy), avoiding re-parse of the whole
   gradient string per frame — the browser just recomputes the gradient
   positions. */
function TiltCard({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);
  const rafPending = useRef(false);
  const latest = useRef({ x: 0.5, y: 0.5 });

  const flush = useCallback(() => {
    rafPending.current = false;
    const el = ref.current;
    if (!el) return;
    const { x, y } = latest.current;
    const rotX = (y - 0.5) * -10;
    const rotY = (x - 0.5) * 12;
    el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02,1.02,1.02)`;
    if (spotRef.current) {
      spotRef.current.style.setProperty("--sx", `${x * 100}%`);
      spotRef.current.style.setProperty("--sy", `${y * 100}%`);
      spotRef.current.style.opacity = "1";
    }
  }, []);

  // willChange is toggled only during active hover — permanent `will-change`
  // on every TiltCard keeps compositor layers alive even when idle, which
  // costs memory and wakes the compositor on any repaint near them.
  const onEnter = useCallback(() => {
    const el = ref.current;
    if (el) el.style.willChange = "transform";
  }, []);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia("(hover: none)").matches) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    latest.current.x = (e.clientX - left) / width;
    latest.current.y = (e.clientY - top) / height;
    if (!rafPending.current) {
      rafPending.current = true;
      requestAnimationFrame(flush);
    }
  }, [flush]);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    el.style.willChange = "auto";
    if (spotRef.current) spotRef.current.style.opacity = "0";
  }, []);

  return (
    <div ref={ref} className={className} style={{ ...style, transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)" }}
      onMouseEnter={onEnter} onMouseMove={onMove} onMouseLeave={onLeave}>
      {/* Spotlight layer — gradient positions driven by --sx / --sy */}
      <div ref={spotRef} className="absolute inset-0 pointer-events-none rounded-2xl md:rounded-3xl"
        style={{
          opacity: 0,
          transition: "opacity 0.3s ease",
          zIndex: 2,
          background: "radial-gradient(circle at var(--sx, 50%) var(--sy, 50%), rgba(255,255,255,0.22) 0%, transparent 65%)",
        }} />
      {children}
    </div>
  );
}

/* ── Images (local gallery — SEO-named) ── */
const IMGS = {
  wheat1:   "/gallery/fashionpass-wheat-paste-campaign-poster-wall.webp",
  wheat2:   "/gallery/fashionpass-wheat-paste-wild-posting-wall-los-angeles.webp",
  stencil:  "/gallery/chalk-spray-stencil-sidewalk-guerrilla-marketing.webp",
  full1:    "/gallery/fifa-world-cup-street-gallery-pedestrian-viewing.webp",
  full2:    "/gallery/fifa-world-cup-poster-wall-gallery-wide.webp",
  gallery1: "/gallery/fashionpass-wheat-paste-wild-posting-wall-los-angeles.webp",
  gallery2: "/gallery/fifa-world-cup-atlanta-wall-installation.webp",
  gallery3: "/gallery/fifa-world-cup-street-gallery-pedestrian-viewing.webp",
  gallery4: "/gallery/fashionpass-wheat-paste-street-art-wall-la.webp",
  gallery5: "/gallery/fifa-world-cup-wheat-paste-posters-closeup.webp",
  gallery6: "/gallery/chalk-spray-stencil-sidewalk-guerrilla-marketing.webp",
};



/* ═══════════════════════════════════════════════════════════════
   1. STATS
═══════════════════════════════════════════════════════════════ */
const STATS = [
  { num: "50+",  label: "US Cities" },
  { num: "500+", label: "Campaigns" },
  { num: "200+", label: "Hits / Run" },
  { num: "24hr", label: "Response" },
  { num: "100%", label: "Documented" },
  { num: "10yr", label: "Street Cred" },
];

function StatsSection() {
  const scope = useSectionReveal<HTMLDivElement>();
  const inView = useInViewOnce(scope, 0.3);
  return (
    <SnapPage>
      <div ref={scope} className="w-full flex flex-col items-center justify-center px-8">


        <div data-watermark="0.06" className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ opacity: 0 }} aria-hidden>
          <span className="font-black uppercase whitespace-nowrap"
            style={{ fontSize: "clamp(120px, 18vw, 280px)", letterSpacing: "-0.05em", color: "#1A1A1A" }}>
            PHANTOM PASTING
          </span>
        </div>

        <div className="flex flex-col items-center relative z-10">
          <div data-reveal="fade-up" className="mb-6"><Label>Street Impact</Label></div>

          <div data-reveal="fade-up-big" className="text-center mb-5">
            <h2 className="font-black uppercase m-0 leading-[0.88]"
              style={{ fontSize: "clamp(64px, 9vw, 110px)", letterSpacing: "-0.04em" }}>
              <ShinyGoldText>REAL NUMBERS.</ShinyGoldText><br />
              <span style={{ color: "#1A1A1A" }}>REAL STREETS.</span>
            </h2>
          </div>

          <p data-reveal="fade-up"
            className="text-center max-w-lg mb-10 font-light leading-relaxed"
            style={{ color: "rgba(0,0,0,0.55)", fontSize: "clamp(14px, 1.2vw, 17px)" }}>
            A decade of guerrilla campaigns across every major US market.
            Every placement photographed, every campaign documented.
          </p>

          <div data-reveal="fade-up"
            className="w-full max-w-3xl h-px mb-12 mx-auto"
            style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.15), transparent)" }}
          />

          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 w-full max-w-5xl">
            {STATS.map((s, i) => {
              const isAccent = i === 2 || i === 4;
              return (
                <div key={s.label} data-reveal="scale">
                  <GlassSurface
                    borderRadius={16}
                    style={isAccent ? { border: "1px solid rgba(184,150,15,0.35)" } : undefined}
                  >
                    <div className="flex flex-col items-center py-5 px-3">
                      <div className="font-black leading-none tabular-nums"
                        style={{ fontSize: "clamp(28px, 4.5vw, 56px)", color: "#1A1A1A", letterSpacing: "-0.04em" }}>
                        <StatNum raw={s.num} inView={inView} />
                      </div>
                      <div className="font-mono text-[8px] tracking-[0.28em] uppercase mt-2 text-center"
                        style={{ color: "rgba(0,0,0,0.55)" }}>
                        {s.label}
                      </div>
                    </div>
                  </GlassSurface>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SnapPage>
  );
}


/* ═══════════════════════════════════════════════════════════════
   2. PROCESS — One page per step (4 snap pages)
═══════════════════════════════════════════════════════════════ */
const STEP_ICONS: Record<string, (color: string) => React.ReactNode> = {
  mail:   (c) => <IconMail color={c} />,
  map:    (c) => <IconMap color={c} />,
  bolt:   (c) => <IconBolt color={c} />,
  camera: (c) => <IconCamera color={c} />,
};

const STEPS = [
  { num: "01", icon: "mail",   title: "Brief Us",  color: "#1A1A1A",
    desc: "Tell us your brand, target city, campaign goals, and timeline. We respond within 24 hours with a custom guerrilla strategy tailored to your market, audience, and budget.",
    sub: "Campaign brief → strategy proposal → pricing" },
  { num: "02", icon: "map",    title: "We Plan",   color: "#1A1A1A",
    desc: "You bring the artwork — we handle everything else. We review your existing designs, print all posters or cut your stencils, source materials, and map out strategic high-traffic placement zones in your city.",
    sub: "Your artwork → print & materials → placement map" },
  { num: "03", icon: "bolt",   title: "We Deploy", color: "#D4A010",
    desc: "Our crew hits the streets. Walls pasted, sidewalks stenciled. 25–200+ precision placements per campaign run, executed at the exact locations agreed in your strategy brief.",
    sub: "Crew deployment → precision execution → city-wide coverage" },
  { num: "04", icon: "camera", title: "You See It", color: "#1A1A1A",
    desc: "Full photo documentation from every single hit — timestamped, geo-tagged, and packaged into a clean campaign report. Proof of every placement, ready to share as social content.",
    sub: "Photo docs → geo-tags → campaign report delivered" },
];

function ProcessStepPage({ step, index }: { step: typeof STEPS[number]; index: number }) {
  const scope = useSectionReveal<HTMLDivElement>();

  return (
    <SnapPage>
      <div ref={scope} className="w-full h-full flex items-center">


        {/* Side accent lines */}
        <div className="absolute left-0 top-0 bottom-0 w-px hidden md:block"
          style={{ background: "linear-gradient(to bottom, transparent 20%, rgba(0,0,0,0.04) 50%, transparent 80%)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-px hidden md:block"
          style={{ background: "linear-gradient(to bottom, transparent 20%, rgba(0,0,0,0.04) 50%, transparent 80%)" }} />

        {/* Background step number */}
        <div data-watermark="1" className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ opacity: 0 }} aria-hidden>
          <span className="font-black" style={{ fontSize: "clamp(200px, 30vw, 380px)", letterSpacing: "-0.06em", color: "rgba(0,0,0,0.04)" }}>
            {step.num}
          </span>
        </div>

        {index === 0 && (
          <div data-reveal="fade-up" className="absolute top-8 left-8 md:left-16 z-20">
            <Label>How It Works</Label>
          </div>
        )}

        {/* Side-by-side: icon + title left, description right */}
        <div className="relative z-10 flex flex-col md:flex-row items-center w-full px-8 md:px-16 lg:px-24">
          <div data-reveal="slide-left" className="flex-shrink-0 md:mr-16 lg:mr-20">
            <div className="flex flex-col items-start">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl mb-6"
                style={{ background: `${step.color}10`, border: `2px solid ${step.color}28` }}>
                {STEP_ICONS[step.icon]?.(step.color)}
              </div>
              <span className="font-black uppercase leading-none"
                style={{ fontSize: "clamp(80px, 12vw, 160px)", letterSpacing: "-0.04em", color: step.color }}>
                {step.title}
              </span>
            </div>
          </div>

          <div data-reveal="fade-up" className="flex-1 max-w-xl mt-8 md:mt-0">
            <p className="font-light leading-[1.7] mb-6"
              style={{ color: "rgba(0,0,0,0.6)", fontSize: "clamp(17px, 2vw, 22px)" }}>
              {step.desc}
            </p>
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase"
              style={{ color: step.color === "#D4A010" ? "rgba(0,0,0,0.38)" : `${step.color}90` }}>
              {step.sub}
            </span>
          </div>
        </div>

        {/* Step indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
          {STEPS.map((_, i) => (
            <div key={i} className="h-px"
              style={{ width: "32px", background: i === index ? "#1A1A1A" : "rgba(0,0,0,0.1)" }} />
          ))}
        </div>
      </div>
    </SnapPage>
  );
}


/* ═══════════════════════════════════════════════════════════════
   3. SERVICES — One page per service (3 snap pages)
═══════════════════════════════════════════════════════════════ */
const SERVICES_DATA = [
  {
    num: "01", icon: "◈", name: "Wheat Pasting", sub: "Wall Takeovers", accent: "#1A1A1A",
    img: IMGS.wheat1,
    tagline: "Large format walls. Impossible to miss.",
    desc: "Posters from 24\"×36\" to 48\"×72\" on prime urban walls — high-foot-traffic intersections, construction hoardings, late-night districts. We find the walls your audience already lives around.",
    features: ["Print-ready file to finished poster","Strategic wall mapping","Photo-documented every hit","Sizes up to 48\"×72\""],
    badge: "Most Booked",
  },
  {
    num: "02", icon: "⬡", name: "Chalk Spray Stencils", sub: "Ground Level Impact", accent: "#D4A010",
    img: IMGS.stencil,
    tagline: "Beneath every footstep. Before every door.",
    desc: "Eco-friendly, temporary paint stencils on sidewalks, plazas, subway exits. 25–200+ placements per campaign. We create a breadcrumb trail leading foot traffic directly to your event or store.",
    features: ["Your design, we cut the stencil","25–200+ placements","Eco-friendly paint","Geo-tagged documentation"],
    badge: "Highest Recall",
  },
  {
    num: "03", icon: "◉", name: "Full Impact", sub: "Total Street Ownership", accent: "#1A1A1A",
    img: IMGS.full1,
    tagline: "Above eye level. Below every footstep.",
    desc: "The complete guerrilla takeover. Large-format wall posters combined with precision chalk spray stencils. Your brand woven into the daily rhythm of the city from every angle.",
    features: ["Full wheat pasting campaign","Stencil activations (25–200+)","Strategic placement mapping","Nationwide deployment"],
    badge: "Best Value",
  },
] as const;

function ServicePage({ svc, index }: { svc: typeof SERVICES_DATA[number]; index: number }) {
  const scope = useSectionReveal<HTMLDivElement>();

  return (
    <SnapPage {...(index === 0 ? { id: "services" } : {})}>
      <div ref={scope} className="w-full h-full flex flex-col justify-center md:justify-start md:flex-row items-center md:items-stretch">


        {/* Watermark */}
        <div data-watermark="0.035" className="absolute top-0 right-4 md:right-8 h-full flex items-center pointer-events-none select-none z-0"
          style={{ opacity: 0 }} aria-hidden>
          <span className="font-black uppercase"
            style={{ writingMode: "vertical-rl", fontSize: "clamp(60px, 8vw, 120px)", letterSpacing: "0.1em", color: "#1A1A1A" }}>
            PHANTOMPASTING
          </span>
        </div>

        {index === 0 && (
          <div data-reveal="fade-up" className="absolute top-8 left-6 md:left-20 lg:left-28 z-20">
            <Label>What We Do</Label>
          </div>
        )}

        {/* Text side */}
        <div className="relative z-10 flex flex-col justify-center px-6 md:px-20 lg:px-28 py-12 md:py-20 w-full md:w-1/2">
          <div data-reveal="fade-up" className="mb-4 flex items-center gap-3">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase" style={{ color: svc.accent }}>{svc.sub}</span>
            <span className="px-2 py-0.5 rounded-full font-mono text-[8px] tracking-[0.15em] uppercase"
              style={{ background: svc.accent === "#D4A010" ? "rgba(184,150,15,0.1)" : "rgba(0,0,0,0.05)", color: svc.accent, border: `1px solid ${svc.accent}20` }}>
              {svc.badge}
            </span>
          </div>
          <h2 data-reveal="fade-up-big" className="font-black uppercase m-0 mb-4 leading-[0.88]"
            style={{ fontSize: "clamp(52px, 7vw, 96px)", letterSpacing: "-0.03em", color: "#1A1A1A" }}>
            {svc.name}
          </h2>
          <p data-reveal="fade-up" className="font-black uppercase m-0 mb-6"
            style={{ fontSize: "clamp(14px, 1.6vw, 20px)", color: svc.accent, letterSpacing: "-0.01em" }}>
            {svc.tagline}
          </p>
          <p data-reveal="fade-up" className="font-light leading-relaxed mb-8 max-w-sm"
            style={{ color: "rgba(0,0,0,0.55)", fontSize: "17.5px" }}>
            {svc.desc}
          </p>
          <ul data-reveal="fade-up" className="flex flex-col gap-2.5 mb-10 list-none m-0 p-0">
            {svc.features.map((f) => (
              <li key={f} className="flex items-center gap-3 font-mono text-[11px] tracking-[0.1em]"
                style={{ color: "rgba(0,0,0,0.5)" }}>
                <IconCheck color={svc.accent} /> {f}
              </li>
            ))}
          </ul>
          <a data-reveal="fade-up" href="#contact"
            className="service-cta self-start relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-7 py-3.5 rounded-full overflow-hidden"
            style={{
              background: "#1A1A1A",
              color: "#FFF",
              boxShadow: "0 4px 18px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}>
            <span className="absolute inset-0 pointer-events-none rounded-full"
              style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 55%)" }} />
            Book This →
          </a>
        </div>

        {/* Image side */}
        <div data-reveal="slide-right" className="hidden md:block relative w-1/2 overflow-hidden">
          <Image src={svc.img} alt={svc.name} loading="lazy"
            fill sizes="50vw" className="object-cover brightness-90" />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.06) 55%, transparent 100%)" }} />
          <div className="absolute bottom-8 right-8 font-black leading-none"
            style={{ fontSize: "clamp(80px, 10vw, 140px)", color: "rgba(0,0,0,0.06)", letterSpacing: "-0.04em" }}>
            {svc.num}
          </div>
        </div>

        {/* Service indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-6 z-20">
          {SERVICES_DATA.map((_, i) => (
            <div key={i} className="flex items-center gap-2 font-mono text-[9px] tracking-[0.25em] uppercase"
              style={{ color: i === index ? "#1A1A1A" : "rgba(0,0,0,0.15)" }}>
              <span className="block w-8 h-px" style={{ background: "currentColor" }} />
              0{i + 1}
            </div>
          ))}
        </div>
      </div>
    </SnapPage>
  );
}


/* ═══════════════════════════════════════════════════════════════
   4. WHY GUERRILLA
═══════════════════════════════════════════════════════════════ */
const WHY_ICONS: Record<string, React.ReactNode> = {
  eye:       <IconEye color="#1A1A1A" />,
  broadcast: <IconBroadcast color="#1A1A1A" />,
  users:     <IconUsers color="#1A1A1A" />,
  pin:       <IconPin color="#1A1A1A" />,
};

const WHY_ITEMS = [
  { icon: "eye",       title: "Impossible to Ignore",     desc: "Traditional ads are scrolled past, muted, or blocked. Our campaigns live at street level — where people walk, gather, and exist. You can't close a popup on a brick wall.", accent: "#1A1A1A" },
  { icon: "broadcast", title: "Earned Media Machine",     desc: "Every wheat paste and stencil becomes a photo opp. People stop, post, tag. Your campaign generates organic social content for free — and the buzz outlasts the poster.", accent: "#D4A010" },
  { icon: "users",     title: "Raw Cultural Credibility", desc: "Street-level presence signals authenticity. The brands people talk about are the ones they see in real life — woven into the urban experience.", accent: "#1A1A1A" },
  { icon: "pin",       title: "Hyper-Local Targeting",    desc: "Every placement is mapped to your audience's exact neighborhoods — their commutes, lunch spots, music venues, and midnight routes home.", accent: "#D4A010" },
];

function WhySection() {
  const scope = useSectionReveal<HTMLDivElement>();

  return (
    <SnapPage>
      <div ref={scope} className="w-full h-full relative flex flex-col md:block px-4 md:px-10 py-6 md:py-0 overflow-hidden">

        {/* "WHY US" background text */}
        <div data-watermark="0.22" className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ opacity: 0 }} aria-hidden>
          <span className="font-black uppercase whitespace-nowrap"
            style={{ fontSize: "clamp(120px, 18vw, 300px)", letterSpacing: "-0.05em", color: "#D4A010" }}>
            WHY US
          </span>
        </div>

        {/* Subtle warm overlay */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(180deg, transparent 0%, rgba(184,150,15,0.025) 40%, rgba(184,150,15,0.025) 60%, transparent 100%)" }} />

        {/* Title block — left-anchored, tight */}
        <div className="relative z-10 shrink-0 pt-8 md:pt-10 md:pl-6">
          <div data-reveal="fade-up" className="mb-2 md:mb-3"><Label>Why Guerrilla</Label></div>
          <h2 data-reveal="fade-up-big" className="font-black uppercase m-0 leading-[0.9]"
            style={{ fontSize: "clamp(28px, 5vw, 72px)", letterSpacing: "-0.03em" }}>
            DIGITAL ADS FADE.<span className="hidden md:inline">&nbsp;</span><br className="md:hidden" />
            <ShinyGoldText>STREETS DON&apos;T.</ShinyGoldText>
          </h2>

          {/* Definition — display weight, condensed italic, on-brand */}
          <p data-reveal="fade-up"
            className="font-black uppercase italic m-0 mt-4 leading-[0.95] hidden md:block"
            style={{ fontSize: "clamp(13px, 1.4vw, 18px)", letterSpacing: "-0.01em", color: "rgba(0,0,0,0.50)" }}>
            Street-level. Unskippable. Documented.
          </p>
        </div>

        {/* Cards — absolute centered on desktop, fill remaining on mobile */}
        <div className="relative md:absolute md:inset-0 z-10 flex-1 flex items-center justify-center px-0 md:px-10 py-4 md:py-0 pointer-events-none min-h-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 w-full max-w-[1100px] pointer-events-auto h-full md:h-auto" style={{ gridAutoRows: "1fr" }}>
            {WHY_ITEMS.map((item, i) => (
              <div key={item.title} data-reveal="scale" className="h-full">
              <SpotlightCard className="h-full rounded-2xl md:rounded-3xl overflow-hidden">
              <div
                className="why-card relative flex items-center md:flex-col md:items-start gap-4 md:gap-0 px-5 md:px-8 py-5 md:py-8 rounded-2xl md:rounded-3xl overflow-hidden cursor-default h-full"
                style={{
                  background: "rgba(242,240,236,0.82)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.68)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(0,0,0,0.04)",
                }}
              >
                {/* Gold top-edge accent on odd cards */}
                <div className="absolute inset-x-0 top-0 h-px pointer-events-none"
                  style={{
                    background: i % 2 === 1
                      ? "linear-gradient(90deg, transparent 10%, rgba(212,160,16,0.5) 40%, rgba(212,160,16,0.3) 60%, transparent 90%)"
                      : "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.95) 30%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.95) 70%, transparent 95%)"
                  }} />

                {/* Icon + index */}
                <div className="flex flex-col items-center gap-1.5 shrink-0 md:flex-row md:items-center md:gap-3 md:mb-5">
                  <span className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-xl"
                    style={{
                      background: i % 2 === 1 ? "rgba(212,160,16,0.08)" : "rgba(0,0,0,0.04)",
                      border: `1.5px solid ${i % 2 === 1 ? "rgba(212,160,16,0.2)" : "rgba(0,0,0,0.07)"}`,
                    }}>
                    {WHY_ICONS[item.icon]}
                  </span>
                  <span className="font-mono text-[8px] tracking-[0.3em] uppercase"
                    style={{ color: "rgba(0,0,0,0.18)" }}>
                    0{i + 1}
                  </span>
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-black uppercase leading-[0.88] m-0 mb-1 md:mb-3"
                    style={{ fontSize: "clamp(18px, 2.6vw, 33px)", letterSpacing: "-0.025em", color: "#1A1A1A" }}>
                    {item.title}<span style={{ color: item.accent }}>.</span>
                  </h3>
                  <p className="font-light leading-snug md:leading-relaxed m-0"
                    style={{ color: "rgba(0,0,0,0.60)", fontSize: "clamp(13px, 1.1vw, 15px)", maxWidth: "380px" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
              </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SnapPage>
  );
}


/* DefinitionSection removed — content absorbed into WhySection + subpages */


/* ═══════════════════════════════════════════════════════════════
   4C. TL;DR — Key Takeaways
═══════════════════════════════════════════════════════════════ */
const TLDR_CARDS = [
  {
    bold: "Street ads can't be muted.",
    body: "Wheat paste and chalk stencils live in the real world. No algorithm decides who sees them — if you walk past, you see it.",
  },
  {
    bold: "Every campaign is proven.",
    body: "100% photo documentation at every install — timestamped, geo-tagged, report-ready. No impression estimates, just proof.",
  },
  {
    bold: "50+ cities, any scale.",
    body: "Single-market drops or simultaneous national saturation. Local crews in every city. Rush timelines from 5 business days.",
  },
];

function TLDRSection() {
  const scope = useSectionReveal<HTMLDivElement>();

  return (
    <SnapPage style={{ background: "transparent" }}>
      <div ref={scope} className="w-full h-full flex items-center justify-center px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden" style={{ background: "transparent" }}>

        {/* Ghost bg text */}
        <div data-watermark="0.04" className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ opacity: 0 }} aria-hidden>
          <span className="font-black uppercase whitespace-nowrap"
            style={{ fontSize: "clamp(120px, 18vw, 300px)", letterSpacing: "-0.05em", color: "#1A1A1A" }}>
            TL;DR
          </span>
        </div>

        <div className="relative z-10 max-w-[1100px] w-full mx-auto text-center">

          <div data-reveal="fade-up" className="mb-3">
            <Label>Key Takeaways</Label>
          </div>

          <h2 data-reveal="fade-up-big" className="font-black uppercase m-0 mb-10 leading-[0.9]"
            style={{ fontSize: "clamp(32px, 5vw, 64px)", letterSpacing: "-0.035em", color: "#1A1A1A" }}>
            WHY GUERRILLA MARKETING<br />
            <ShinyGoldText>WORKS.</ShinyGoldText>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TLDR_CARDS.map((card, i) => (
              <div key={card.bold} data-reveal="scale">
                <SpotlightCard className="rounded-2xl overflow-hidden">
                <div
                  className="relative rounded-2xl p-6 md:p-8 text-left overflow-hidden"
                  style={{
                    background: "rgba(242,240,236,0.82)",
                    border: "1px solid rgba(255,255,255,0.68)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9)",
                  }}>
                  {/* Gold top stripe */}
                  <div className="absolute inset-x-0 top-0 h-px pointer-events-none"
                    style={{ background: "linear-gradient(90deg, transparent 10%, rgba(212,160,16,0.5) 40%, rgba(212,160,16,0.3) 60%, transparent 90%)" }} />
                  <div className="font-mono text-[8px] tracking-[0.3em] uppercase mb-4"
                    style={{ color: "rgba(212,160,16,0.7)" }}>0{i + 1}</div>
                  <h3 className="font-black uppercase m-0 mb-3 leading-[0.88]"
                    style={{ fontSize: "clamp(15px, 1.6vw, 20px)", letterSpacing: "-0.02em", color: "#1A1A1A" }}>
                    {card.bold}
                  </h3>
                  <p className="font-light leading-relaxed m-0"
                    style={{ color: "rgba(0,0,0,0.60)", fontSize: "13px" }}>
                    {card.body}
                  </p>
                </div>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SnapPage>
  );
}


/* ═══════════════════════════════════════════════════════════════
   5. GALLERY
═══════════════════════════════════════════════════════════════ */

function GallerySection() {
  const scope = useSectionReveal<HTMLDivElement>();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const lightbox = lightboxIdx !== null ? GALLERY_IMGS[lightboxIdx] : null;

  // Lightbox open trigger was removed along with the zoom cursor on gallery
  // tiles — homepage images intentionally don't expand now. The close/nav
  // handlers + portal below stay wired so the lightbox can be reinstated
  // without reshaping state, but nothing currently calls setLightboxIdx(n).
  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const prevImage = useCallback(() => setLightboxIdx(i => i !== null ? (i - 1 + GALLERY_IMGS.length) % GALLERY_IMGS.length : null), []);
  const nextImage = useCallback(() => setLightboxIdx(i => i !== null ? (i + 1) % GALLERY_IMGS.length : null), []);

  const scroll = useCallback((dir: -1 | 1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.75, behavior: "smooth" });
  }, []);

  // Drag-to-scroll (desktop only). pointermove fires at pointer-sample rate
  // (often >60/sec). Previously we wrote `el.scrollLeft` synchronously inside
  // every event — that forces a layout read-write on each move, which
  // competes with scroll compositor work. Now we cache the latest pointer X
  // and apply the scroll write inside a single rAF per frame.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || window.matchMedia("(hover: none)").matches) return;
    let startX = 0, startScroll = 0, latestX = 0, dragging = false, rafPending = false;
    const flush = () => {
      rafPending = false;
      if (!dragging) return;
      el.scrollLeft = startScroll - (latestX - startX);
    };
    const onDown = (e: PointerEvent) => {
      dragging = true; startX = e.clientX; startScroll = el.scrollLeft; latestX = e.clientX;
      el.style.cursor = "grabbing"; el.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      latestX = e.clientX;
      if (!rafPending) {
        rafPending = true;
        requestAnimationFrame(flush);
      }
    };
    const onUp = () => { dragging = false; el.style.cursor = "grab"; };
    el.style.cursor = "grab";
    el.addEventListener("pointerdown", onDown, { passive: true });
    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerup", onUp, { passive: true });
    el.addEventListener("pointercancel", onUp, { passive: true });
    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
    };
  }, []);

  // Keyboard nav: Escape close, arrows prev/next
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") prevImage();
    else if (e.key === "ArrowRight") nextImage();
  }, [closeLightbox, prevImage, nextImage]);

  /* Group images into sets of 6 for the 2-row bento layout.
     Each set renders as: top row [wide, med, med], bottom row [med, wide, med] */
  const sets: (typeof GALLERY_IMGS[number])[][] = [];
  for (let i = 0; i < GALLERY_IMGS.length; i += 6) {
    sets.push(GALLERY_IMGS.slice(i, i + 6) as (typeof GALLERY_IMGS[number])[]);
  }

  return (
    <>
    <SnapPage>
      <div id="work" ref={scope} className="w-full h-full flex flex-col">


        <div className="flex flex-col h-full">

          {/* Header */}
          <div data-reveal="fade-up" className="px-6 md:px-10 pt-8 pb-4 flex items-end justify-between shrink-0">
            <div>
              <Label>Campaign Gallery</Label>
              <h2 className="font-black uppercase m-0 mt-3 leading-[0.88]"
                style={{ fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-0.03em", color: "#1A1A1A" }}>
                OUR WORK<span style={{ color: "#D4A010" }}>.</span>
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase mr-3"
                style={{ color: "rgba(0,0,0,0.55)" }}>{GALLERY_IMGS.length} Photos</span>
              <button onClick={() => scroll(-1)} aria-label="Scroll gallery left"
                className="w-9 h-9 flex items-center justify-center rounded-full cursor-pointer"
                style={{ background: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.1)", color: "rgba(0,0,0,0.5)", fontFamily: "inherit" }}>
                <IconChevronLeft color="rgba(0,0,0,0.5)" />
              </button>
              <button onClick={() => scroll(1)} aria-label="Scroll gallery right"
                className="w-9 h-9 flex items-center justify-center rounded-full cursor-pointer"
                style={{ background: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.1)", color: "rgba(0,0,0,0.5)", fontFamily: "inherit" }}>
                <IconChevronRight color="rgba(0,0,0,0.5)" />
              </button>
            </div>
          </div>

          {/* Bento grid — horizontal scroll */}
          <div data-reveal="fade-up"
            ref={scrollRef}
            className="flex-1 flex gap-2.5 overflow-x-auto no-scrollbar pb-6"
            style={{ scrollSnapType: "x mandatory", overscrollBehaviorX: "contain", minHeight: 0, scrollPadding: "0 24px" }}>

            {/* Left spacer for page margin */}
            <div className="shrink-0 w-4 md:w-8" aria-hidden />

            {sets.map((set, si) => (
              <div key={si}
                className={`shrink-0 grid gap-2 ${si === 0 ? "gallery-set-dual" : "gallery-set"}`}
                style={{
                  scrollSnapAlign: "start",
                  width: "max(88vw, min(1100px, 96vw))",
                  height: "100%",
                }}>
                {set.map((item, i) => {
                  const isHero = si === 0 ? (i === 0 || i === 1) : i === 0;
                  const isWide = si === 0 ? false : i === 4;
                  return (
                    <div key={i} data-reveal="scale"
                      className={`gallery-item relative overflow-hidden rounded-xl group${isHero ? " gallery-hero" : ""}${isWide ? " gallery-wide" : ""}`}>
                      <Image src={item.src} alt={item.label} loading="lazy"
                        fill sizes="(max-width: 768px) 80vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
                        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 65%)" }}>
                        <div>
                          <span className="font-black uppercase tracking-tight text-white text-xs block">{item.label}</span>
                          <span className="font-mono text-[8px] tracking-[0.3em] uppercase mt-0.5 block" style={{ color: "#D4A010" }}>
                            Phantom Pasting
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}

            {/* Right spacer for page margin */}
            <div className="shrink-0 w-4 md:w-8" aria-hidden />
          </div>
        </div>
      </div>

    </SnapPage>

    {/* Lightbox — rendered via portal to escape SnapPage's CSS containment + transform */}
    {createPortal(
      <AnimatePresence>
        {lightbox && lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            // No `backdrop-filter: blur()` — full-viewport backdrop blur on an
            // animated Framer Motion element forces per-frame re-composite of
            // everything behind it. A slightly more opaque black achieves the
            // same "focus the image" read without the compositor cost.
            style={{ background: "rgba(0,0,0,0.96)" }}
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
            ref={(el) => el?.focus()}>
            <motion.div
              key={lightboxIdx}
              initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.94, opacity: 0 }}
              // Tween over high-stiffness spring — springs emit many subframe
              // state updates (style recalcs) that compound with any remaining
              // composited work. A 260ms tween reads identical to the eye.
              transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full flex items-center justify-center p-4 md:p-10"
              onClick={e => e.stopPropagation()}>
              <div className="relative w-full h-full max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}>
                <Image src={lightbox.src} alt={lightbox.label} fill
                  sizes="(min-width: 768px) 80vw, 100vw" className="object-contain" />
              </div>
              {/* Label + counter */}
              <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 text-center pointer-events-none">
                <span className="font-black uppercase tracking-tight text-white text-sm md:text-base block">{lightbox.label}</span>
                <span className="font-mono text-[9px] tracking-[0.3em] uppercase mt-1 block" style={{ color: "#D4A010" }}>
                  {lightboxIdx + 1} / {GALLERY_IMGS.length} &nbsp;·&nbsp; Phantom Pasting
                </span>
              </div>
            </motion.div>
            {/* Prev / Next arrows */}
            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} aria-label="Previous image"
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full text-white cursor-pointer transition-all hover:scale-110"
              style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", fontFamily: "inherit" }}>
              <IconChevronLeft color="#fff" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} aria-label="Next image"
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full text-white cursor-pointer transition-all hover:scale-110"
              style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", fontFamily: "inherit" }}>
              <IconChevronRight color="#fff" />
            </button>
            {/* Close button */}
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


/* ═══════════════════════════════════════════════════════════════
   6. CONTACT
═══════════════════════════════════════════════════════════════ */
const CITIES = "NYC · LA · Chicago · Miami · SF · Atlanta · Houston · Philly · Seattle · Austin · Boston · DC · Portland · Denver · Vegas · Nashville + Every US City";

function ContactSection() {
  const scope = useSectionReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [selectedSvcs, setSelectedSvcs] = useState<Set<string>>(new Set());
  const [mobileFormOpen, setMobileFormOpen] = useState(false);

  const toggleSvc = (svc: string) => {
    setSelectedSvcs(prev => {
      const next = new Set(prev);
      if (next.has(svc)) next.delete(svc); else next.add(svc);
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", "d830efb8-46f4-4275-9086-2319a36134d0");
    data.append("subject", "New Phantom Pasting Quote Request");
    data.append("from_name", "Phantom Pasting Website");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      if (res.ok) setSubmitted(true);
    } catch { /* network error — fail silently */ }
    setSubmitting(false);
  };

  return (
    <SnapPage id="contact" style={mobileFormOpen ? { height: "auto", minHeight: "100vh" } : undefined}>
      <div ref={scope} className="w-full py-10 px-5 sm:px-8 md:px-12 lg:px-16">


        <div className="absolute inset-0 pointer-events-none" aria-hidden
          style={{ backgroundImage: "url(/gallery/bedstuy-stencil.webp)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.08, filter: "grayscale(1)" }} />

        <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left — Heading */}
          <div data-reveal="fade-up">
            <div className="mb-4"><Label>Get a Quote</Label></div>
            <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]"
              style={{ fontSize: "clamp(42px, 6vw, 80px)", letterSpacing: "-0.03em" }}>
              LET&apos;S HIT<br /><ShinyGoldText>THE STREETS.</ShinyGoldText>
            </h2>
            <p className="font-light leading-relaxed max-w-sm mb-8"
              style={{ color: "rgba(0,0,0,0.55)", fontSize: "14px" }}>
              Tell us about your campaign. We&apos;ll get back within 24 hours with a custom street strategy and pricing for your city.
            </p>

            <div className="flex flex-col gap-3 mb-6">
              {[
                { icon: <IconPhone color="#1A1A1A" />,     label: "Phone",     value: BUSINESS.telephoneDisplay, href: BUSINESS.telHref },
                { icon: <IconMail color="#1A1A1A" />,      label: "Email",     value: BUSINESS.email,           href: `mailto:${BUSINESS.email}` },
                { icon: <IconInstagram color="#1A1A1A" />, label: "Instagram", value: BUSINESS.instagramHandle, href: BUSINESS.instagramUrl },
                { icon: <IconClock color="#1A1A1A" />,     label: "Response",  value: "Within 24 hours",       href: null },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center shrink-0 rounded-lg"
                    style={{ background: "rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.08)" }}>
                    {icon}
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.12em]" style={{ color: "rgba(0,0,0,0.5)" }}>
                    {label}:{" "}
                    {href ? <a href={href} className="no-underline" style={{ color: "rgba(0,0,0,0.8)" }}>{value}</a>
                          : <span style={{ color: "rgba(0,0,0,0.8)" }}>{value}</span>}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-xl" style={{ background: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.06)" }}>
              <p className="font-mono text-[9px] tracking-[0.28em] uppercase text-[#D4A010] mb-1">◎ Nationwide Coverage</p>
              <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.58)", fontSize: "11px" }}>{CITIES}</p>
            </div>

            {/* Mobile CTA — reveals form */}
            {!mobileFormOpen && (
              <button onClick={() => setMobileFormOpen(true)}
                className="lg:hidden mt-8 relative w-full inline-flex items-center justify-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase px-8 py-4 rounded-full overflow-hidden cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #D4A010 0%, #F5CA20 100%)",
                  color: "#FFF",
                  border: "none",
                  fontFamily: "inherit",
                  boxShadow: "0 4px 24px rgba(184,150,15,0.55), 0 1px 0 rgba(255,255,255,0.25) inset, 0 -1px 0 rgba(0,0,0,0.15) inset",
                }}>
                <span className="absolute inset-0 pointer-events-none rounded-full"
                  style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 55%)" }} />
                Launch My Campaign
                <span className="cta-arrow">→</span>
              </button>
            )}
          </div>

          {/* Right — Form */}
          <div data-reveal="fade-up" className={mobileFormOpen ? "" : "hidden lg:block"}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div key="ok" initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={SNAP}>
                  <Glass className="p-10 text-center" accentColor="rgba(0,0,0,0.08)">
                    <div className="absolute inset-x-0 top-0 h-px"
                      style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.15), transparent)" }} />
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ ...SNAP_HARD, delay: 0.1 }}
                      className="mb-6 flex items-center justify-center">
                      <IconSuccessRing />
                    </motion.div>
                    <h3 className="font-black uppercase tracking-tight m-0 mb-3"
                      style={{ fontSize: "clamp(36px, 4vw, 56px)", color: "#1A1A1A" }}>You&apos;re In.</h3>
                    <p className="font-light leading-relaxed" style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px" }}>
                      We&apos;ll hit your inbox within 24 hours. Follow{" "}
                      <a href={BUSINESS.instagramUrl} target="_blank" rel="noopener noreferrer" className="no-underline" style={{ color: "#D4A010" }}>@phantompasting</a>{" "}
                      to see campaigns live in the wild.
                    </p>
                  </Glass>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit}
                  className="flex flex-col rounded-2xl overflow-hidden"
                  style={{
                    gap: "1px",
                    background: "rgba(248,247,244,0.97)",
                    border: "none",
                    boxShadow: "0 24px 60px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.05)",
                  }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
                    <FormField label="First Name *" name="firstName" placeholder="Alex" required />
                    <FormField label="Last Name *" name="lastName" placeholder="Rivera" required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
                    <FormField label="Email *" name="email" type="email" placeholder="alex@brand.com" required />
                    <FormField label="Phone" name="phone" placeholder="+1 (212) 000-0000" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
                    <FormField label="Brand / Company *" name="brand" placeholder="Your Brand" required />
                    <FormField label="Target City *" name="city" placeholder="New York City, NY" required />
                  </div>

                  {/* Service toggles */}
                  <div className="p-4 border" style={{ background: "rgba(0,0,0,0.02)", borderColor: "rgba(0,0,0,0.08)" }}>
                    <p className="font-mono text-[9px] tracking-[0.25em] uppercase mb-3" style={{ color: "rgba(0,0,0,0.55)" }}>Service Needed</p>
                    <div className="flex flex-wrap gap-2">
                      {["Wheat Pasting","Chalk Spray Stencils","Full Impact","Custom"].map((svc) => {
                        const active = selectedSvcs.has(svc);
                        return (
                          <button key={svc} type="button" onClick={() => toggleSvc(svc)}
                            className="font-mono text-[10px] tracking-[0.1em] px-3 py-2 rounded-lg border cursor-pointer select-none transition-all duration-200"
                            style={{
                              background: active ? "rgba(184,150,15,0.15)" : "rgba(242,240,236,0.7)",
                              borderColor: active ? "rgba(184,150,15,0.5)" : "rgba(0,0,0,0.12)",
                              color: active ? "#8B7209" : "rgba(0,0,0,0.5)",
                              boxShadow: active ? "0 0 12px rgba(184,150,15,0.15), inset 0 1px 0 rgba(255,255,255,0.6)" : "none",
                              fontFamily: "inherit",
                            }}>
                            {active && <span style={{ marginRight: "6px", display: "inline-flex", verticalAlign: "middle" }}><IconCheck color="#8B7209" /></span>}
                            {svc}
                          </button>
                        );
                      })}
                    </div>
                    {Array.from(selectedSvcs).map(svc => (
                      <input key={svc} type="hidden" name="service" value={svc} />
                    ))}
                  </div>

                  {/* Wheat Pasting options — CSS grid-row reveal (GPU-friendly) */}
                  <div className="grid transition-[grid-template-rows,opacity] duration-300 ease-out"
                    style={{
                      gridTemplateRows: selectedSvcs.has("Wheat Pasting") ? "1fr" : "0fr",
                      opacity: selectedSvcs.has("Wheat Pasting") ? 1 : 0,
                    }}>
                    <div style={{ overflow: "hidden", minHeight: 0 }}>
                    <div className="border-t" style={{ borderColor: "rgba(184,150,15,0.2)" }}>
                      {/* Row 1: Material + Size */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
                        <FormSelect label="Material (optional)" name="wp_material"
                          options={["28# Bond Paper", "80# Coated Front, Uncoated Back", "30# Kraft Paper"]} />
                        <FormSelect label="Poster Size" name="wp_size"
                          options={['24" × 36"', '48" × 72"']} />
                      </div>
                      {/* Row 2: Quantity + Versions */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
                        <FormField label="Quantity (optional)" name="wp_quantity" placeholder="100" type="number" />
                        <FormField label="Versions (optional)" name="wp_versions" placeholder="2" type="number" />
                      </div>
                    </div>
                    </div>
                  </div>

                  {/* Chalk Spray Stencils options — CSS grid-row reveal (GPU-friendly) */}
                  <div className="grid transition-[grid-template-rows,opacity] duration-300 ease-out"
                    style={{
                      gridTemplateRows: selectedSvcs.has("Chalk Spray Stencils") ? "1fr" : "0fr",
                      opacity: selectedSvcs.has("Chalk Spray Stencils") ? 1 : 0,
                    }}>
                    <div style={{ overflow: "hidden", minHeight: 0 }}>
                    <div className="border-t" style={{ borderColor: "rgba(184,150,15,0.2)" }}>
                      {/* Row 1: Material + Cutting Method */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
                        <FormSelect label="Stencil Material (optional)" name="st_material"
                          options={["0.030\" Styrene", "14PT Cover Paper"]} />
                        <FormSelect label="Cutting Method (optional)" name="st_cutting"
                          options={["Laser Cut"]} />
                      </div>
                      {/* Row 2: W × H + Overspray Area */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
                        <div className="form-field relative border grid grid-cols-[1fr_auto_1fr] items-end gap-0"
                          style={{ background: "rgba(0,0,0,0.02)", borderColor: "rgba(0,0,0,0.08)" }}>
                          <div className="relative">
                            <label className="absolute top-3 left-5 font-mono text-[9px] tracking-[0.25em] uppercase pointer-events-none"
                              style={{ color: "rgba(0,0,0,0.55)" }}>W (in)</label>
                            <input name="st_width" type="number" min="6" max="48" placeholder="24"
                              className="w-full bg-transparent outline-none pt-8 pb-3 px-5 font-light"
                              style={{ color: "rgba(0,0,0,0.8)", fontSize: "14px", fontFamily: "inherit" }} />
                          </div>
                          <span className="pb-3 font-mono text-[11px]" style={{ color: "rgba(0,0,0,0.52)" }}>×</span>
                          <div className="relative">
                            <label className="absolute top-3 left-3 font-mono text-[9px] tracking-[0.25em] uppercase pointer-events-none"
                              style={{ color: "rgba(0,0,0,0.55)" }}>H (in)</label>
                            <input name="st_height" type="number" min="6" max="240" placeholder="36"
                              className="w-full bg-transparent outline-none pt-8 pb-3 px-3 font-light"
                              style={{ color: "rgba(0,0,0,0.8)", fontSize: "14px", fontFamily: "inherit" }} />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
                          <FormField label="Overspray Area (optional)" name="st_overspray" placeholder="2&quot;" />
                          <FormField label="Quantity (optional)" name="st_quantity" placeholder="50" type="number" />
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
                    <FormSelect label="Campaign Budget" name="budget"
                      options={["Under $2,000","$2,000 – $5,000","$5,000 – $10,000","$10,000 – $25,000","$25,000+"]} />
                    <FormSelect label="Launch Timeline" name="timeline"
                      options={["ASAP (within 2 weeks)","1 month","2–3 months","Planning ahead (3+ months)"]} />
                  </div>
                  <div className="relative border" style={{ background: "rgba(0,0,0,0.02)", borderColor: "rgba(0,0,0,0.08)" }}>
                    <label className="absolute top-3 left-5 font-mono text-[9px] tracking-[0.25em] uppercase pointer-events-none"
                      style={{ color: "rgba(0,0,0,0.55)" }}>Campaign Details</label>
                    <textarea name="message" rows={3}
                      placeholder="Campaign goals, target audience, specific neighborhoods…"
                      className="w-full bg-transparent outline-none resize-none pt-8 pb-3 px-5 font-light"
                      style={{ color: "rgba(0,0,0,0.8)", fontSize: "14px", fontFamily: "inherit" }} />
                  </div>
                  <button type="submit" disabled={submitting}
                    className="submit-btn relative flex items-center justify-between font-black text-[16px] tracking-[0.06em] uppercase px-8 py-4 border-0 cursor-pointer overflow-hidden disabled:opacity-70"
                    style={{
                      background: "linear-gradient(135deg, #D4A010 0%, #F5CA20 50%, #D4A010 100%)",
                      color: "#FFF", fontFamily: "inherit",
                      boxShadow: "0 4px 24px rgba(184,150,15,0.5), inset 0 1px 0 rgba(255,255,255,0.25)",
                    }}>
                    <span className="absolute inset-0 pointer-events-none"
                      style={{ background: "linear-gradient(105deg, rgba(255,255,255,0) 35%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0) 65%)" }} />
                    {submitting ? "Sending…" : "Launch My Campaign"}
                    {!submitting && <span className="submit-arrow">→</span>}
                  </button>
                  <p className="text-center font-mono text-[9px] tracking-[0.12em] mt-2 mb-1"
                    style={{ color: "rgba(0,0,0,0.52)" }}>
                    ✦ No spam. Your info is used only to build your campaign.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SnapPage>
  );
}

function FormField({ label, name, placeholder, type = "text", required = false }: {
  label: string; name: string; placeholder: string; type?: string; required?: boolean;
}) {
  return (
    <div className="form-field relative border"
      style={{ background: "rgba(0,0,0,0.02)", borderColor: "rgba(0,0,0,0.08)" }}>
      <label htmlFor={name} className="absolute top-3 left-5 font-mono text-[9px] tracking-[0.25em] uppercase pointer-events-none"
        style={{ color: "rgba(0,0,0,0.55)" }}>{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} required={required}
        className="w-full bg-transparent outline-none pt-8 pb-3 px-5 font-light"
        style={{ color: "rgba(0,0,0,0.8)", fontSize: "14px", fontFamily: "inherit" }} />
    </div>
  );
}

function FormSelect({ label, name, options }: {
  label: string; name: string; options: readonly string[];
}) {
  return (
    <div className="form-field relative border"
      style={{ background: "rgba(0,0,0,0.02)", borderColor: "rgba(0,0,0,0.08)" }}>
      <label htmlFor={name} className="absolute top-3 left-5 font-mono text-[9px] tracking-[0.25em] uppercase pointer-events-none z-10"
        style={{ color: "rgba(0,0,0,0.55)" }}>{label}</label>
      <select id={name} name={name} defaultValue=""
        className="w-full bg-transparent outline-none pt-8 pb-3 px-5 appearance-none font-light"
        style={{ color: "rgba(0,0,0,0.6)", fontSize: "14px", fontFamily: "inherit" }}>
        <option value="" disabled style={{ background: "#F2F0EC" }}>Select…</option>
        {options.map((opt) => (
          <option key={opt} value={opt} style={{ background: "#F2F0EC", color: "#1A1A1A" }}>{opt}</option>
        ))}
      </select>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════
   7. FAQ
═══════════════════════════════════════════════════════════════ */
const FAQS = [
  { q: "What makes guerrilla marketing more effective than traditional advertising?",
    a: "Traditional ads are scrolled past, muted, or ignored. Our campaigns live at street level — genuine surprise moments that get photographed, shared, and talked about. You can't DVR a poster on your block." },
  { q: "How quickly can you launch a campaign?",
    a: "Rush campaigns in as little as 5–7 business days from artwork approval. Standard campaigns take 2–3 weeks. We'll always confirm the realistic timeline upfront." },
  { q: "Do you cover cities outside of New York?",
    a: "Every city in the US. 50+ markets nationwide — New York to LA, Miami to Seattle, Austin to Chicago. Name a city, we can hit it. We also operate internationally." },
  { q: "What poster and stencil sizes do you offer?",
    a: "Wheat paste from 24\"×36\" up to jumbo 48\"×72\" wall takeovers. Chalk spray stencils from 6\"×60\" strips to 48\"×48\" floor installations." },
  { q: "How do I know exactly where my campaign ran?",
    a: "Full photo documentation from every hit — timestamped, geo-tagged, formatted into a clean campaign report. Doubles as ready-made social content." },
  { q: "What kind of brands work with Phantom Pasting?",
    a: "Global names to indie streetwear labels, tech startups, event promoters, bars, restaurants, artists, nonprofits. Any scale, any budget." },
] as const;

function FAQSection() {
  const scope = useSectionReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <SnapPage id="faq">
      <div ref={scope} className="w-full h-full flex flex-col pt-10 pb-4 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden">

        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.01) 30%, rgba(0,0,0,0.01) 70%, transparent 100%)" }} />

        <div className="max-w-[900px] w-full mx-auto relative z-10 flex flex-col flex-1 min-h-0">

          {/* Header — fixed, doesn't scroll */}
          <div data-reveal="fade-up" className="mb-6 md:mb-10 shrink-0">
            <div className="mb-3 md:mb-4"><Label>FAQ</Label></div>
            <h2 className="font-black uppercase m-0 leading-[0.9]"
              style={{ fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.03em" }}>
              COMMON<br /><ShinyGoldText>QUESTIONS</ShinyGoldText>
            </h2>
          </div>

          {/* Questions list — scrollable on mobile if needed */}
          <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col gap-px">
            {FAQS.map((faq, i) => (
              <div key={i} data-reveal="fade-up">
                <div className="border-b" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                  <button onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between gap-5 py-4 md:py-5 text-left bg-transparent border-0 cursor-pointer"
                    style={{ fontFamily: "inherit" }}>
                    <span className="font-black uppercase tracking-tight"
                      style={{ fontSize: "clamp(13px, 1.4vw, 19px)", letterSpacing: "-0.01em", color: "#1A1A1A" }}>
                      {faq.q}
                    </span>
                    <div className="w-8 h-8 shrink-0 flex items-center justify-center rounded-xl transition-transform duration-300 ease-out"
                      style={{
                        background: open === i ? "#D4A010" : "rgba(242,240,236,0.85)",
                        border: open === i ? "1px solid #D4A010" : "1px solid rgba(0,0,0,0.08)",
                        color: open === i ? "#FFF" : "#1A1A1A",
                        fontSize: "18px",
                        boxShadow: open === i ? "0 2px 12px rgba(184,150,15,0.35)" : "0 1px 4px rgba(0,0,0,0.06)",
                        transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                      }}>+
                    </div>
                  </button>
                  <div className="grid transition-[grid-template-rows,opacity] duration-300 ease-out"
                    style={{
                      gridTemplateRows: open === i ? "1fr" : "0fr",
                      opacity: open === i ? 1 : 0,
                    }}>
                    <div style={{ overflow: "hidden", minHeight: 0 }}>
                      <div className="pb-4 pr-10">
                        <p className="font-light leading-relaxed"
                          style={{ color: "rgba(0,0,0,0.58)", fontSize: "14px", maxWidth: "680px" }}>
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SnapPage>
  );
}


/* ═══════════════════════════════════════════════════════════════
   8. FOOTER
═══════════════════════════════════════════════════════════════ */
const FOOTER_LINKS = {
  Services: [
    { label: "Wheat Pasting", href: "/services/wheat-pasting" },
    { label: "Chalk Spray Stencils", href: "/services/chalk-spray-stencils" },
    { label: "Full Impact", href: "/services/full-impact-campaigns" },
  ],
  Markets: [
    { label: "New York City", href: "/locations/new-york" },
    { label: "Los Angeles", href: "/locations/los-angeles" },
    { label: "Miami", href: "/locations/miami" },
    { label: "Chicago", href: "/locations/chicago" },
    { label: "Atlanta", href: "/locations/atlanta" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

function Footer() {
  const scope = useSectionReveal<HTMLDivElement>();

  return (
    <footer className="relative flex items-center px-5 sm:px-8 md:px-12 lg:px-16 border-t py-16"
      style={{
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        background: "rgba(242,240,236,0.75)",
        borderColor: "rgba(255,255,255,0.55)",
      }}>
      <div ref={scope} data-reveal="fade-up" className="w-full">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start mb-3">
              <Image
                src="/phantom-pasting-logo.webp"
                alt="Phantom Pasting Logo"
                width={48}
                height={48}
                className="rounded-xl"
                style={{ objectFit: "cover" }}
              />
            </div>
            <h2 className="font-black uppercase m-0 leading-[0.85]"
              style={{ fontSize: "clamp(48px, 8vw, 120px)", letterSpacing: "-0.04em" }}>
              <span style={{ color: "#1A1A1A" }}>PHANTOM</span>
              <ShinyGoldText>PASTING</ShinyGoldText>
            </h2>
            <p className="font-light leading-relaxed mt-4 max-w-md"
              style={{ color: "rgba(0,0,0,0.58)", fontSize: "14px" }}>
              The premier guerrilla marketing agency. Wheat pasting and stencil activations across every US city.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 pb-16 border-b"
            style={{ borderColor: "rgba(0,0,0,0.06)" }}>
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#D4A010" }} />
                <span className="font-mono text-[9px] tracking-[0.35em] uppercase" style={{ color: "rgba(0,0,0,0.3)" }}>Contact</span>
              </div>
              <div className="flex flex-col gap-3">
                <a href="mailto:info@phantompasting.com" className="font-mono text-[11px] tracking-[0.1em] no-underline text-[#D4A010]">
                  info@phantompasting.com
                </a>
                <a href="https://www.instagram.com/phantompasting" className="font-mono text-[11px] tracking-[0.1em] no-underline footer-link">
                  @phantompasting
                </a>
              </div>
            </div>
            {Object.entries(FOOTER_LINKS).map(([col, links]) => (
              <div key={col}>
                <h3 className="font-mono text-[9px] tracking-[0.3em] uppercase mb-5 m-0"
                  style={{ color: "rgba(0,0,0,0.3)" }}>{col}</h3>
                <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="footer-link font-light no-underline"
                        style={{ fontSize: "13px" }}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between pt-8 flex-wrap gap-4">
            <p className="font-mono text-[9px] tracking-[0.22em] uppercase"
              style={{ color: "rgba(0,0,0,0.52)" }}>
              © 2026 Phantom Pasting — All Rights Reserved
            </p>
            <div className="flex gap-2.5">
              {["IG","X","TK"].map((s) => (
                <a key={s} href="#"
                  className="social-icon w-8 h-8 flex items-center justify-center rounded-lg font-mono text-[10px] no-underline transition-colors duration-200">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


/* ═══════════════════════════════════════════════════════════════
   ROOT EXPORT
═══════════════════════════════════════════════════════════════ */
export default function ScrollSections() {
  return (
    <div className="flex flex-col" style={{ gap: 0 }}>
      <StatsSection />
      {STEPS.map((step, i) => (
        <ProcessStepPage key={step.num} step={step} index={i} />
      ))}
      {SERVICES_DATA.map((svc, i) => (
        <ServicePage key={svc.num} svc={svc} index={i} />
      ))}
      <WhySection />
      <TLDRSection />
      <GallerySection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
