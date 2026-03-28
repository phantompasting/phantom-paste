"use client";

/**
 * PHANTOM PASTING — Scroll Sections (Full-Page Snap)
 * ─────────────────────────────────────────────────────
 * Every section = exactly 100vh. CSS scroll-snap-type: y mandatory.
 * Animations via useInView. Zero dead space between sections.
 */

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  AnimatePresence,
  type Variants,
} from "framer-motion";

const SNAP      = { type: "spring", stiffness: 140, damping: 22 } as const;
const SNAP_HARD = { type: "spring", stiffness: 180, damping: 26 } as const;
const SNAP_SLOW = { type: "spring", stiffness: 100, damping: 20 } as const;

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
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="#B8960F" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="36" cy="36" r="30"/>
    <polyline points="22,36 32,48 52,24"/>
  </svg>
);
const IconCheck = ({ color }: { color: string }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ flexShrink: 0 }}>
    <polyline points="1.5,6 4.5,9 10.5,3"/>
  </svg>
);

/* ── Count-up hook — ease-out cubic, respects prefers-reduced-motion ── */
function useCountUp(target: number, inView: boolean, duration = 1200): number {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) { setValue(target); return; }
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);
  return value;
}

/* Parses "500+" → counts 0→500, appends "+". Works for "10yr", "100%", "24hr" too. */
function StatNum({ raw, inView }: { raw: string; inView: boolean }) {
  const match = raw.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : raw;
  const count = useCountUp(target, inView, Math.max(600, target * 2));
  if (!match) return <>{raw}</>;
  return <>{count}{suffix}</>;
}

/* ── Animation variants ── */
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.08 } },
};
const fadeUp: Variants = {
  hidden: { y: 28, opacity: 0 },
  show: { y: 0, opacity: 1, transition: SNAP },
};
const fadeUpBig: Variants = {
  hidden: { y: 44, opacity: 0 },
  show: { y: 0, opacity: 1, transition: SNAP_SLOW },
};
const slideLeft: Variants = {
  hidden: { x: -44, opacity: 0 },
  show: { x: 0, opacity: 1, transition: SNAP },
};
const scaleIn: Variants = {
  hidden: { scale: 0.94, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: SNAP },
};

/* ── Shared Components ── */
function SnapPage({ children, className = "", id, style }: {
  children: React.ReactNode; className?: string; id?: string; style?: React.CSSProperties;
}) {
  return (
    <div id={id} className={`h-[100dvh] overflow-hidden relative flex items-center ${className}`}
      style={{ scrollSnapAlign: "start", scrollSnapStop: "always", contain: "layout style paint", transform: "translateZ(0)", ...style }}>
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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <SnapPage>
      <div ref={ref} className="w-full flex flex-col items-center justify-center px-8">


        <motion.div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 0.06 } : {}} transition={{ duration: 0.8 }} aria-hidden>
          <span className="font-black uppercase whitespace-nowrap"
            style={{ fontSize: "clamp(120px, 18vw, 280px)", letterSpacing: "-0.05em", color: "#1A1A1A" }}>
            PHANTOM PASTING
          </span>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}
          className="flex flex-col items-center relative z-10">
          <motion.div variants={fadeUp} className="mb-6"><Label>Street Impact</Label></motion.div>

          <motion.div variants={fadeUpBig} className="text-center mb-5">
            <h2 className="font-black uppercase m-0 leading-[0.88]"
              style={{ fontSize: "clamp(64px, 9vw, 110px)", letterSpacing: "-0.04em" }}>
              <span style={{ color: "#B8960F" }}>REAL NUMBERS.</span><br />
              <span style={{ color: "#1A1A1A" }}>REAL STREETS.</span>
            </h2>
          </motion.div>

          <motion.p variants={fadeUp}
            className="text-center max-w-lg mb-10 font-light leading-relaxed"
            style={{ color: "rgba(0,0,0,0.55)", fontSize: "clamp(14px, 1.2vw, 17px)" }}>
            A decade of guerrilla campaigns across every major US market.
            Every placement photographed, every campaign documented.
          </motion.p>

          <motion.div variants={fadeUp}
            className="w-full max-w-3xl h-px mb-12 mx-auto"
            style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.15), transparent)" }}
          />

          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 w-full max-w-5xl">
            {STATS.map((s, i) => {
              const isAccent = i === 2 || i === 4;
              return (
                <motion.div key={s.label} variants={scaleIn}
                  className="relative overflow-hidden rounded-2xl flex flex-col items-center justify-center py-5 px-3"
                  style={{
                    background: isAccent ? "rgba(245,240,220,0.92)" : "rgba(242,240,236,0.88)",
                    border: isAccent ? "1px solid rgba(184,150,15,0.28)" : "1px solid rgba(255,255,255,0.68)",
                    boxShadow: isAccent
                      ? "0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.5), 0 0 24px rgba(184,150,15,0.08)"
                      : "0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.75)",
                  }}>
                  <div className="absolute inset-x-0 top-0 h-px pointer-events-none"
                    style={{ background: isAccent
                      ? "linear-gradient(90deg, transparent 10%, rgba(184,150,15,0.5) 50%, transparent 90%)"
                      : "linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.9) 50%, transparent 90%)"
                    }} />
                  <div className="font-black leading-none tabular-nums"
                    style={{ fontSize: "clamp(28px, 4.5vw, 56px)", color: "#1A1A1A", letterSpacing: "-0.04em" }}>
                    <StatNum raw={s.num} inView={inView} />
                  </div>
                  <div className="font-mono text-[8px] tracking-[0.28em] uppercase mt-2 text-center"
                    style={{ color: "rgba(0,0,0,0.42)" }}>
                    {s.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
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
  { num: "03", icon: "bolt",   title: "We Deploy", color: "#B8960F",
    desc: "Our crew hits the streets. Walls pasted, sidewalks stenciled. 25–200+ precision placements per campaign run, executed at the exact locations agreed in your strategy brief.",
    sub: "Crew deployment → precision execution → city-wide coverage" },
  { num: "04", icon: "camera", title: "You See It", color: "#1A1A1A",
    desc: "Full photo documentation from every single hit — timestamped, geo-tagged, and packaged into a clean campaign report. Proof of every placement, ready to share as social content.",
    sub: "Photo docs → geo-tags → campaign report delivered" },
];

function ProcessStepPage({ step, index }: { step: typeof STEPS[number]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <SnapPage>
      <div ref={ref} className="w-full h-full flex items-center">


        {/* Side accent lines */}
        <div className="absolute left-0 top-0 bottom-0 w-px hidden md:block"
          style={{ background: "linear-gradient(to bottom, transparent 20%, rgba(0,0,0,0.04) 50%, transparent 80%)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-px hidden md:block"
          style={{ background: "linear-gradient(to bottom, transparent 20%, rgba(0,0,0,0.04) 50%, transparent 80%)" }} />

        {/* Background step number */}
        <motion.div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }} aria-hidden>
          <span className="font-black" style={{ fontSize: "clamp(200px, 30vw, 380px)", letterSpacing: "-0.06em", color: "rgba(0,0,0,0.04)" }}>
            {step.num}
          </span>
        </motion.div>

        {index === 0 && (
          <motion.div className="absolute top-8 left-8 md:left-16 z-20"
            initial={{ y: 16, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={SNAP}>
            <Label>How It Works</Label>
          </motion.div>
        )}

        {/* Side-by-side: icon + title left, description right */}
        <div className="relative z-10 flex flex-col md:flex-row items-center w-full px-8 md:px-16 lg:px-24">
          <motion.div className="flex-shrink-0 md:mr-16 lg:mr-20"
            variants={slideLeft} initial="hidden" animate={inView ? "show" : "hidden"}>
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
          </motion.div>

          <motion.div className="flex-1 max-w-xl mt-8 md:mt-0"
            initial={{ y: 20, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ ...SNAP, delay: 0.06 }}>
            <p className="font-light leading-[1.7] mb-6"
              style={{ color: "rgba(0,0,0,0.6)", fontSize: "clamp(17px, 2vw, 22px)" }}>
              {step.desc}
            </p>
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase"
              style={{ color: `${step.color}90` }}>
              {step.sub}
            </span>
          </motion.div>
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
    num: "02", icon: "⬡", name: "Chalk Spray Stencils", sub: "Ground Level Impact", accent: "#B8960F",
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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <SnapPage {...(index === 0 ? { id: "services" } : {})}>
      <div ref={ref} className="w-full h-full flex flex-col justify-center md:justify-start md:flex-row items-center md:items-stretch">


        {/* Watermark */}
        <motion.div className="absolute top-0 right-4 md:right-8 h-full flex items-center pointer-events-none select-none z-0"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 0.035 } : {}} transition={{ duration: 0.6 }} aria-hidden>
          <span className="font-black uppercase"
            style={{ writingMode: "vertical-rl", fontSize: "clamp(60px, 8vw, 120px)", letterSpacing: "0.1em", color: "#1A1A1A" }}>
            PHANTOMPASTING
          </span>
        </motion.div>

        {index === 0 && (
          <motion.div className="absolute top-8 left-6 md:left-20 lg:left-28 z-20"
            initial={{ y: 16, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={SNAP}>
            <Label>What We Do</Label>
          </motion.div>
        )}

        {/* Text side */}
        <motion.div className="relative z-10 flex flex-col justify-center px-6 md:px-20 lg:px-28 py-12 md:py-20 w-full md:w-1/2"
          variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}>
          <motion.div variants={fadeUp} className="mb-4 flex items-center gap-3">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase" style={{ color: svc.accent }}>{svc.sub}</span>
            <span className="px-2 py-0.5 rounded-full font-mono text-[8px] tracking-[0.15em] uppercase"
              style={{ background: svc.accent === "#B8960F" ? "rgba(184,150,15,0.1)" : "rgba(0,0,0,0.05)", color: svc.accent, border: `1px solid ${svc.accent}20` }}>
              {svc.badge}
            </span>
          </motion.div>
          <motion.h2 variants={fadeUpBig} className="font-black uppercase m-0 mb-4 leading-[0.88]"
            style={{ fontSize: "clamp(52px, 7vw, 96px)", letterSpacing: "-0.03em", color: "#1A1A1A" }}>
            {svc.name}
          </motion.h2>
          <motion.p variants={fadeUp} className="font-black uppercase m-0 mb-6"
            style={{ fontSize: "clamp(14px, 1.6vw, 20px)", color: svc.accent, letterSpacing: "-0.01em" }}>
            {svc.tagline}
          </motion.p>
          <motion.p variants={fadeUp} className="font-light leading-relaxed mb-8 max-w-sm"
            style={{ color: "rgba(0,0,0,0.55)", fontSize: "17.5px" }}>
            {svc.desc}
          </motion.p>
          <motion.ul variants={fadeUp} className="flex flex-col gap-2.5 mb-10 list-none m-0 p-0">
            {svc.features.map((f) => (
              <li key={f} className="flex items-center gap-3 font-mono text-[11px] tracking-[0.1em]"
                style={{ color: "rgba(0,0,0,0.5)" }}>
                <IconCheck color={svc.accent} /> {f}
              </li>
            ))}
          </motion.ul>
          <motion.a variants={fadeUp} href="#contact"
            className="self-start relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-7 py-3.5 rounded-full overflow-hidden"
            style={{
              background: svc.accent === "#B8960F" ? "linear-gradient(135deg, #B8960F 0%, #D4A810 100%)" : "#1A1A1A",
              color: "#FFF",
              boxShadow: svc.accent === "#B8960F"
                ? "0 4px 18px rgba(184,150,15,0.5), inset 0 1px 0 rgba(255,255,255,0.2)"
                : "0 4px 18px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}>
            <span className="absolute inset-0 pointer-events-none rounded-full"
              style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 55%)" }} />
            Book This →
          </motion.a>
        </motion.div>

        {/* Image side */}
        <motion.div className="hidden md:block relative w-1/2 overflow-hidden"
          initial={{ x: 120, opacity: 0 }} animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ ...SNAP, delay: 0.1 }}>
          <Image src={svc.img} alt={svc.name} loading="lazy"
            fill sizes="50vw" className="object-cover" />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(242,240,236,0.7) 0%, transparent 40%)" }} />
          <div className="absolute bottom-8 right-8 font-black leading-none"
            style={{ fontSize: "clamp(80px, 10vw, 140px)", color: "rgba(0,0,0,0.06)", letterSpacing: "-0.04em" }}>
            {svc.num}
          </div>
        </motion.div>

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
  { icon: "broadcast", title: "Earned Media Machine",     desc: "Every wheat paste and stencil becomes a photo opp. People stop, post, tag. Your campaign generates organic social content for free — and the buzz outlasts the poster.", accent: "#B8960F" },
  { icon: "users",     title: "Raw Cultural Credibility", desc: "Street-level presence signals authenticity. The brands people talk about are the ones they see in real life — woven into the urban experience.", accent: "#1A1A1A" },
  { icon: "pin",       title: "Hyper-Local Targeting",    desc: "Every placement is mapped to your audience's exact neighborhoods — their commutes, lunch spots, music venues, and midnight routes home.", accent: "#B8960F" },
];

function WhySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <SnapPage>
      <div ref={ref} className="w-full h-full relative flex flex-col md:block px-4 md:px-10 py-6 md:py-0 overflow-hidden">

        {/* "WHY US" background text — centered in page */}
        <motion.div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 0.25 } : {}} transition={{ duration: 0.6 }} aria-hidden>
          <span className="font-black uppercase whitespace-nowrap"
            style={{ fontSize: "clamp(120px, 18vw, 300px)", letterSpacing: "-0.05em", color: "#B8960F" }}>
            WHY US
          </span>
        </motion.div>

        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(180deg, transparent 0%, rgba(184,150,15,0.03) 40%, rgba(184,150,15,0.03) 60%, transparent 100%)" }} />

        {/* Title — top-left, always in flow */}
        <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}
          className="relative z-10 shrink-0 pt-8 md:pt-12 md:pl-6">
          <motion.div variants={fadeUp} className="mb-2 md:mb-3"><Label>Why Guerrilla</Label></motion.div>
          <motion.h2 variants={fadeUpBig} className="font-black uppercase m-0 leading-[0.9]"
            style={{ fontSize: "clamp(28px, 5vw, 72px)", letterSpacing: "-0.03em" }}>
            DIGITAL ADS FADE.<span className="hidden md:inline">&nbsp;</span><br className="md:hidden" />
            <span style={{ color: "#B8960F" }}>STREETS DON&apos;T.</span>
          </motion.h2>
        </motion.div>

        {/* Cards — flex-1 on mobile (fill remaining), absolute centered on desktop */}
        <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}
          className="relative md:absolute md:inset-0 z-10 flex-1 flex items-center justify-center px-0 md:px-10 py-4 md:py-0 pointer-events-none min-h-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 w-full max-w-[1100px] pointer-events-auto h-full md:h-auto" style={{ gridAutoRows: "1fr" }}>
            {WHY_ITEMS.map((item, i) => (
              <motion.div key={item.title} variants={scaleIn}
                className="why-card relative flex items-center md:flex-col md:items-start gap-4 md:gap-0 px-5 md:px-10 py-5 md:py-10 rounded-2xl md:rounded-3xl overflow-hidden cursor-default"
                style={{
                  background: "linear-gradient(135deg, rgba(242,240,236,0.85) 0%, rgba(242,240,236,0.78) 50%, rgba(242,240,236,0.83) 100%)",
                  border: "1px solid rgba(255,255,255,0.5)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(255,255,255,0.15)",
                }}>
                {/* Top edge highlight */}
                <div className="absolute inset-x-0 top-0 h-[1.5px] pointer-events-none"
                  style={{ background: "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.95) 30%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.95) 70%, transparent 95%)" }} />
                {/* Left edge highlight */}
                <div className="absolute inset-y-0 left-0 w-[1px] pointer-events-none hidden md:block"
                  style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.8) 10%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.5) 90%)" }} />
                {/* Bottom edge */}
                <div className="absolute inset-x-0 bottom-0 h-[1px] pointer-events-none hidden md:block"
                  style={{ background: "linear-gradient(90deg, transparent 5%, rgba(0,0,0,0.05) 50%, transparent 95%)" }} />
                {/* Hover shine sweep */}
                <div className="why-card-shine absolute inset-0 pointer-events-none rounded-2xl md:rounded-3xl"
                  style={{
                    background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.5) 45%, rgba(255,255,255,0.15) 55%, transparent 70%)",
                    opacity: 0,
                    transition: "opacity 0.5s ease",
                  }} />

                {/* Icon + number */}
                <div className="flex flex-col items-center gap-1.5 shrink-0 md:flex-row md:items-center md:gap-3 md:mb-6">
                  <span className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-xl"
                    style={{
                      background: "rgba(0,0,0,0.04)",
                      border: "2px solid rgba(0,0,0,0.07)",
                    }}>
                    {WHY_ICONS[item.icon]}
                  </span>
                  <span className="font-mono text-[8px] tracking-[0.3em] uppercase"
                    style={{ color: "rgba(0,0,0,0.2)" }}>
                    0{i + 1}
                  </span>
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-black uppercase leading-[0.88] m-0 mb-1 md:mb-4"
                    style={{ fontSize: "clamp(18px, 2.8vw, 36px)", letterSpacing: "-0.025em", color: "#1A1A1A" }}>
                    {item.title}<span style={{ color: item.accent }}>.</span>
                  </h3>
                  <p className="font-light leading-snug md:leading-relaxed m-0"
                    style={{ color: "rgba(0,0,0,0.50)", fontSize: "clamp(13.5px, 1.2vw, 16px)", maxWidth: "400px" }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SnapPage>
  );
}


/* ═══════════════════════════════════════════════════════════════
   5. GALLERY
═══════════════════════════════════════════════════════════════ */
const GALLERY_IMGS = [
  { src: "/gallery/fifa-world-cup-poster-wall-angle-view.webp",             label: "FIFA Posters — Angle View" },
  { src: "/gallery/fifa-world-cup-poster-wall-street-perspective.webp",     label: "FIFA Posters — Street Perspective" },
  { src: "/gallery/fifa-world-cup-atlanta-wall-installation.webp",          label: "FIFA Atlanta — Wall Installation" },
  { src: "/gallery/fashionpass-wheat-paste-street-art-wall-la.webp",        label: "FashionPass — Wide Format Paste" },
  { src: "/gallery/fifa-world-cup-wheat-paste-posters-closeup.webp",        label: "FIFA Posters — Close Up" },
  { src: "/gallery/fifa-world-cup-poster-installation-closeup.webp",        label: "FIFA World Cup — Installation" },
  { src: "/gallery/fifa-world-cup-poster-wall-gallery-wide.webp",           label: "FIFA World Cup — Gallery Wall" },
  { src: "/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp", label: "Incrediwear — Night Pole Wrap" },
  { src: "/gallery/street-pole-sticker-campaign-urban-advertising.webp",    label: "Calvin Priice — Sticker Campaign" },
  { src: "/gallery/sticker-campaign-street-intersection-urban.webp",        label: "Sticker Campaign — Intersection" },
  { src: "/gallery/fashionpass-wheat-paste-wild-posting-wall-los-angeles.webp", label: "FashionPass — LA Wild Posting Wall" },
  { src: "/gallery/chalk-spray-stencil-sidewalk-guerrilla-marketing.webp",  label: "Calvin Priice — Chalk Stencil" },
  { src: "/gallery/custom-stencil-template-cut-out-design.webp",            label: "Custom Stencil Template" },
] as const;

function GallerySection() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [lightbox, setLightbox] = useState<{ src: string; label: string } | null>(null);

  const scroll = useCallback((dir: -1 | 1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.75, behavior: "smooth" });
  }, []);

  // Close lightbox on Escape
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") setLightbox(null);
  }, []);

  /* Group images into sets of 6 for the 2-row bento layout.
     Each set renders as: top row [wide, med, med], bottom row [med, wide, med] */
  const sets: (typeof GALLERY_IMGS[number])[][] = [];
  for (let i = 0; i < GALLERY_IMGS.length; i += 6) {
    sets.push(GALLERY_IMGS.slice(i, i + 6) as (typeof GALLERY_IMGS[number])[]);
  }

  return (
    <SnapPage>
      <div id="work" ref={ref} className="w-full h-full flex flex-col">


        <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}
          className="flex flex-col h-full">

          {/* Header */}
          <motion.div variants={fadeUp} className="px-6 md:px-10 pt-8 pb-4 flex items-end justify-between shrink-0">
            <div>
              <Label>Campaign Gallery</Label>
              <h2 className="font-black uppercase m-0 mt-3 leading-[0.88]"
                style={{ fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-0.03em", color: "#1A1A1A" }}>
                OUR WORK<span style={{ color: "#B8960F" }}>.</span>
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase mr-3"
                style={{ color: "rgba(0,0,0,0.35)" }}>{GALLERY_IMGS.length} Photos</span>
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
          </motion.div>

          {/* Bento grid — horizontal scroll */}
          <motion.div variants={fadeUp}
            ref={scrollRef}
            className="flex-1 flex gap-2.5 overflow-x-auto no-scrollbar pb-6"
            style={{ scrollSnapType: "x mandatory", overscrollBehaviorX: "contain", minHeight: 0, scrollPadding: "0 24px" }}>

            {/* Left spacer for page margin */}
            <div className="shrink-0 w-4 md:w-8" aria-hidden />

            {sets.map((set, si) => (
              <div key={si} className={`shrink-0 grid gap-2 ${si === 0 ? "gallery-set-dual" : "gallery-set"}`}
                style={{
                  scrollSnapAlign: "start",
                  width: "max(88vw, min(1100px, 96vw))",
                  height: "100%",
                }}>
                {set.map((item, i) => {
                  const isHero = si === 0 ? (i === 0 || i === 1) : i === 0;
                  const isWide = si === 0 ? false : i === 4;
                  return (
                    <button key={i} onClick={() => setLightbox(item)}
                      className={`gallery-item relative overflow-hidden rounded-xl group cursor-zoom-in${isHero ? " gallery-hero" : ""}${isWide ? " gallery-wide" : ""}`}
                      style={{ display: "block", padding: 0, border: "none", background: "none" }}>
                      <Image src={item.src} alt={item.label} loading="lazy"
                        fill sizes="(max-width: 768px) 80vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
                        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 65%)" }}>
                        <div>
                          <span className="font-black uppercase tracking-tight text-white text-xs block">{item.label}</span>
                          <span className="font-mono text-[8px] tracking-[0.3em] uppercase mt-0.5 block" style={{ color: "#B8960F" }}>
                            Phantom Pasting
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            ))}

            {/* Right spacer for page margin */}
            <div className="shrink-0 w-4 md:w-8" aria-hidden />
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)" }}
            onClick={() => setLightbox(null)}
            onKeyDown={handleKeyDown}
            tabIndex={-1}>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="relative w-full h-full flex items-center justify-center p-4 md:p-10"
              onClick={e => e.stopPropagation()}>
              <div className="relative w-full h-full max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}>
                <Image src={lightbox.src} alt={lightbox.label} fill
                  sizes="100vw" className="object-contain" priority />
              </div>
              {/* Label */}
              <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 text-center pointer-events-none">
                <span className="font-black uppercase tracking-tight text-white text-sm md:text-base block">{lightbox.label}</span>
                <span className="font-mono text-[9px] tracking-[0.3em] uppercase mt-1 block" style={{ color: "#B8960F" }}>Phantom Pasting</span>
              </div>
            </motion.div>
            {/* Close button */}
            <button onClick={() => setLightbox(null)} aria-label="Close"
              className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 flex items-center justify-center rounded-full text-white cursor-pointer"
              style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}>
              <IconClose />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </SnapPage>
  );
}


/* ═══════════════════════════════════════════════════════════════
   6. CONTACT
═══════════════════════════════════════════════════════════════ */
const CITIES = "NYC · LA · Chicago · Miami · SF · Atlanta · Houston · Philly · Seattle · Austin · Boston · DC · Portland · Denver · Vegas · Nashville + Every US City";

function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
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
      <div ref={ref} className="w-full py-10 px-5 sm:px-8 md:px-12 lg:px-16">


        <div className="absolute inset-0 pointer-events-none" aria-hidden
          style={{ backgroundImage: "url(/gallery/bedstuy-stencil.webp)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.08, filter: "grayscale(1)" }} />

        <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}
          className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left — Heading */}
          <motion.div variants={fadeUp}>
            <div className="mb-4"><Label>Get a Quote</Label></div>
            <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]"
              style={{ fontSize: "clamp(42px, 6vw, 80px)", letterSpacing: "-0.03em" }}>
              LET&apos;S HIT<br /><span className="text-[#B8960F]">THE STREETS.</span>
            </h2>
            <p className="font-light leading-relaxed max-w-sm mb-8"
              style={{ color: "rgba(0,0,0,0.55)", fontSize: "14px" }}>
              Tell us about your campaign. We&apos;ll get back within 24 hours with a custom street strategy and pricing for your city.
            </p>

            <div className="flex flex-col gap-3 mb-6">
              {[
                { icon: <IconMail color="#1A1A1A" />,      label: "Email",     value: "info@phantompasting.co", href: "mailto:info@phantompasting.co" },
                { icon: <IconInstagram color="#1A1A1A" />, label: "Instagram", value: "@phantompasting",        href: "#" },
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
              <p className="font-mono text-[9px] tracking-[0.28em] uppercase text-[#B8960F] mb-1">◎ Nationwide Coverage</p>
              <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.45)", fontSize: "11px" }}>{CITIES}</p>
            </div>

            {/* Mobile CTA — reveals form */}
            {!mobileFormOpen && (
              <button onClick={() => setMobileFormOpen(true)}
                className="lg:hidden mt-8 relative w-full inline-flex items-center justify-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase px-8 py-4 rounded-full overflow-hidden cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #B8960F 0%, #D4A810 100%)",
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
          </motion.div>

          {/* Right — Form */}
          <motion.div variants={fadeUp} className={mobileFormOpen ? "" : "hidden lg:block"}>
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
                      <a href="#" className="no-underline" style={{ color: "#B8960F" }}>@phantompasting</a>{" "}
                      to see campaigns live in the wild.
                    </p>
                  </Glass>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit}
                  className="flex flex-col rounded-2xl overflow-hidden"
                  style={{
                    gap: "1px",
                    background: "rgba(242,240,236,0.94)",
                    border: "1px solid rgba(255,255,255,0.72)",
                    boxShadow: "0 24px 60px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(0,0,0,0.04)",
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
                    <p className="font-mono text-[9px] tracking-[0.25em] uppercase mb-3" style={{ color: "rgba(0,0,0,0.4)" }}>Service Needed</p>
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
                              style={{ color: "rgba(0,0,0,0.4)" }}>W (in)</label>
                            <input name="st_width" type="number" min="6" max="48" placeholder="24"
                              className="w-full bg-transparent outline-none pt-8 pb-3 px-5 font-light"
                              style={{ color: "rgba(0,0,0,0.8)", fontSize: "14px", fontFamily: "inherit" }} />
                          </div>
                          <span className="pb-3 font-mono text-[11px]" style={{ color: "rgba(0,0,0,0.25)" }}>×</span>
                          <div className="relative">
                            <label className="absolute top-3 left-3 font-mono text-[9px] tracking-[0.25em] uppercase pointer-events-none"
                              style={{ color: "rgba(0,0,0,0.4)" }}>H (in)</label>
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
                      style={{ color: "rgba(0,0,0,0.4)" }}>Campaign Details</label>
                    <textarea name="message" rows={3}
                      placeholder="Campaign goals, target audience, specific neighborhoods…"
                      className="w-full bg-transparent outline-none resize-none pt-8 pb-3 px-5 font-light"
                      style={{ color: "rgba(0,0,0,0.8)", fontSize: "14px", fontFamily: "inherit" }} />
                  </div>
                  <motion.button type="submit" disabled={submitting}
                    className="relative flex items-center justify-between font-black text-[16px] tracking-[0.06em] uppercase px-8 py-4 border-0 cursor-pointer overflow-hidden disabled:opacity-70"
                    style={{
                      background: "linear-gradient(135deg, #B8960F 0%, #D4A810 50%, #B8960F 100%)",
                      color: "#FFF", fontFamily: "inherit",
                      boxShadow: "0 4px 24px rgba(184,150,15,0.5), inset 0 1px 0 rgba(255,255,255,0.25)",
                    }}
                    whileHover={{ scale: 1.02, boxShadow: "0 8px 32px rgba(184,150,15,0.65)" }}
                    whileTap={{ scale: 0.97 }}
                    transition={SNAP_HARD}>
                    <span className="absolute inset-0 pointer-events-none"
                      style={{ background: "linear-gradient(105deg, rgba(255,255,255,0) 35%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0) 65%)" }} />
                    {submitting ? "Sending…" : "Launch My Campaign"}
                    {!submitting && <span className="submit-arrow">→</span>}
                  </motion.button>
                  <p className="text-center font-mono text-[9px] tracking-[0.12em] mt-2 mb-1"
                    style={{ color: "rgba(0,0,0,0.25)" }}>
                    ✦ No spam. Your info is used only to build your campaign.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
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
        style={{ color: "rgba(0,0,0,0.4)" }}>{label}</label>
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
        style={{ color: "rgba(0,0,0,0.4)" }}>{label}</label>
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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [open, setOpen] = useState<number | null>(null);

  return (
    <SnapPage id="faq">
      <div ref={ref} className="w-full h-full flex flex-col pt-10 pb-4 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden">

        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.01) 30%, rgba(0,0,0,0.01) 70%, transparent 100%)" }} />

        <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}
          className="max-w-[900px] w-full mx-auto relative z-10 flex flex-col flex-1 min-h-0">

          {/* Header — fixed, doesn't scroll */}
          <motion.div variants={fadeUp} className="mb-6 md:mb-10 shrink-0">
            <div className="mb-3 md:mb-4"><Label>FAQ</Label></div>
            <h2 className="font-black uppercase m-0 leading-[0.9]"
              style={{ fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.03em" }}>
              COMMON<br /><span className="text-[#B8960F]">QUESTIONS</span>
            </h2>
          </motion.div>

          {/* Questions list — scrollable on mobile if needed */}
          <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col gap-px">
            {FAQS.map((faq, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="border-b" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                  <button onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between gap-5 py-4 md:py-5 text-left bg-transparent border-0 cursor-pointer"
                    style={{ fontFamily: "inherit" }}>
                    <span className="font-black uppercase tracking-tight"
                      style={{ fontSize: "clamp(13px, 1.4vw, 19px)", letterSpacing: "-0.01em", color: "#1A1A1A" }}>
                      {faq.q}
                    </span>
                    <motion.div className="w-8 h-8 shrink-0 flex items-center justify-center rounded-xl"
                      style={{
                        background: open === i ? "#B8960F" : "rgba(242,240,236,0.85)",
                        border: open === i ? "1px solid #B8960F" : "1px solid rgba(0,0,0,0.08)",
                        color: open === i ? "#FFF" : "#1A1A1A",
                        fontSize: "18px",
                        boxShadow: open === i ? "0 2px 12px rgba(184,150,15,0.35)" : "0 1px 4px rgba(0,0,0,0.06)",
                      }}
                      animate={{ rotate: open === i ? 45 : 0 }}
                      transition={SNAP}>+
                    </motion.div>
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SnapPage>
  );
}


/* ═══════════════════════════════════════════════════════════════
   8. FOOTER
═══════════════════════════════════════════════════════════════ */
const FOOTER_LINKS = {
  Services: ["Wheat Pasting","Chalk Spray Stencils","Full Impact","Custom Activations"],
  Markets:  ["New York City","Los Angeles","Miami","Chicago","All US Cities →"],
  Company:  ["Gallery","Blog","Contact","Privacy Policy"],
} as const;

function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <footer className="relative flex items-center px-5 sm:px-8 md:px-12 lg:px-16 border-t py-16"
      style={{
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        background: "rgba(242,240,236,0.75)",
        borderColor: "rgba(255,255,255,0.55)",
      }}>
      <motion.div ref={ref} className="w-full"
        initial={{ y: 24, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={SNAP}>
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start mb-3">
              <Image
                src="/phantom-pasting-logo.png"
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
              <span style={{ color: "#B8960F" }}>PASTING</span>
            </h2>
            <p className="font-light leading-relaxed mt-4 max-w-md"
              style={{ color: "rgba(0,0,0,0.45)", fontSize: "14px" }}>
              The premier guerrilla marketing agency. Wheat pasting and stencil activations across every US city.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 pb-16 border-b"
            style={{ borderColor: "rgba(0,0,0,0.06)" }}>
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#B8960F" }} />
                <span className="font-mono text-[9px] tracking-[0.35em] uppercase" style={{ color: "rgba(0,0,0,0.3)" }}>Contact</span>
              </div>
              <div className="flex flex-col gap-3">
                <a href="mailto:info@phantompasting.co" className="font-mono text-[11px] tracking-[0.1em] no-underline text-[#B8960F]">
                  info@phantompasting.co
                </a>
                <a href="#" className="font-mono text-[11px] tracking-[0.1em] no-underline footer-link">
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
                    <li key={link}>
                      <a href="#" className="footer-link font-light no-underline"
                        style={{ fontSize: "13px" }}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between pt-8 flex-wrap gap-4">
            <p className="font-mono text-[9px] tracking-[0.22em] uppercase"
              style={{ color: "rgba(0,0,0,0.25)" }}>
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
      </motion.div>
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
      <GallerySection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
