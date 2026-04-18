"use client";

/**
 * GSAP reveal helpers — replaces Framer Motion useInView + motion.* variants.
 *
 * Design rules (from mempalace 60fps Manifesto + Brand Kit):
 *   - Only animate `transform` / `opacity` (GPU composite)
 *   - `once: true` on every entrance ScrollTrigger (self-kill after firing)
 *   - `ScrollTrigger.batch()` for grids/lists (avoids the "1000 triggers" problem)
 *   - Scope every `useGSAP` to a container ref (selector leak protection)
 *   - `gsap.matchMedia()` gates animations on prefers-reduced-motion
 *
 * Brand timing: expo.out ≈ cubic-bezier(0.16, 1, 0.3, 1), duration 0.55–0.65s.
 */

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

// The site uses CSS scroll-snap on a scrollable wrapper (not window),
// so ScrollTrigger must observe that element. Falls back to window.
const SCROLLER = ".scroll-container";

export type RevealKind = "fade-up" | "fade-up-big" | "scale" | "slide-left" | "slide-right";

const KIND_FROM: Record<RevealKind, gsap.TweenVars> = {
  "fade-up":     { y: 28, opacity: 0 },
  "fade-up-big": { y: 44, opacity: 0 },
  "scale":       { scale: 0.94, opacity: 0 },
  "slide-left":  { x: -44, opacity: 0 },
  "slide-right": { x: 120, opacity: 0 },
};

const BASE_TWEEN = {
  duration: 0.6,
  ease: "expo.out",
} as const;

const STAGGER_CHILDREN = 0.06;
const DELAY_CHILDREN   = 0.08;

/**
 * Reveals all [data-reveal] elements in the scope in a single batched
 * ScrollTrigger per kind. Each kind uses its own stagger sequence.
 *
 * Usage:
 *   const containerRef = useSectionReveal();
 *   return <div ref={containerRef}>
 *     <h2 data-reveal="fade-up-big">Title</h2>
 *     <p data-reveal="fade-up">Body</p>
 *   </div>
 */
export function useSectionReveal<T extends HTMLElement = HTMLDivElement>() {
  const scope = useRef<T>(null);

  useGSAP(
    () => {
      const el = scope.current;
      if (!el) return;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // gsap.utils.toArray is ~2–3× faster than Array.from(NodeList) on
      // large sections because it skips NodeList iteration indirection.
      // Accepts a selector string directly, so no querySelectorAll call needed.
      const watermarks = gsap.utils.toArray<HTMLElement>("[data-watermark]", el);
      const nodes = gsap.utils.toArray<HTMLElement>("[data-reveal]", el);

      if (reduced) {
        gsap.set(nodes, { opacity: 1, clearProps: "transform" });
        watermarks.forEach((wm) => gsap.set(wm, { opacity: parseFloat(wm.dataset.watermark || "0.1") }));
        return;
      }

      // Pre-set "from" states so elements are hidden before IO fires.
      nodes.forEach((n) => {
        const kind = (n.dataset.reveal as RevealKind) || "fade-up";
        gsap.set(n, KIND_FROM[kind]);
      });

      const run = () => {
        watermarks.forEach((wm) => {
          const target = parseFloat(wm.dataset.watermark || "0.1");
          gsap.fromTo(wm, { opacity: 0 }, { opacity: target, duration: 0.8, ease: "power2.out" });
        });
        if (nodes.length) {
          gsap.to(nodes, {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            ...BASE_TWEEN,
            stagger: STAGGER_CHILDREN,
            delay: DELAY_CHILDREN,
          });
        }
      };

      // IntersectionObserver rooted on the snap container. More reliable than
      // scroll-event polling because it fires on layout/intersection changes,
      // not just on scroll events (which CSS scroll-snap can throttle).
      const root = document.querySelector(SCROLLER) as Element | null;
      let fired = false;
      const io = new IntersectionObserver(
        (entries) => {
          if (fired) return;
          for (const entry of entries) {
            if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
              fired = true;
              run();
              io.disconnect();
              break;
            }
          }
        },
        // Single threshold — we only care whether we've crossed the reveal
        // line once. Multiple thresholds fire redundant callbacks during scroll
        // until the `fired` flag catches; one threshold = one callback.
        { root, threshold: 0.15 }
      );
      io.observe(el);
      return () => io.disconnect();
    },
    { scope }
  );

  return scope;
}

/**
 * Batch-reveals a list of children (e.g. cards, stat tiles) with stagger.
 * Use when a container holds many similar items that should enter together.
 *
 * Usage:
 *   const gridRef = useBatchReveal<HTMLDivElement>(".stat-card");
 *   return <div ref={gridRef}>{stats.map(...)}</div>
 */
export function useBatchReveal<T extends HTMLElement = HTMLDivElement>(
  selector: string,
  opts: { kind?: RevealKind; stagger?: number; start?: string } = {}
) {
  const scope = useRef<T>(null);
  const { kind = "scale", stagger = 0.07, start = "top 80%" } = opts;

  useGSAP(
    () => {
      const el = scope.current;
      if (!el) return;
      const nodes = el.querySelectorAll<HTMLElement>(selector);
      if (!nodes.length) return;

      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) {
        gsap.set(nodes, { opacity: 1, clearProps: "transform" });
        return;
      }

      gsap.fromTo(
        nodes,
        KIND_FROM[kind],
        {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          ...BASE_TWEEN,
          stagger,
          scrollTrigger: { trigger: el, scroller: SCROLLER, start, once: true },
        }
      );
    },
    { scope, dependencies: [selector] }
  );

  return scope;
}

/**
 * Tiny IntersectionObserver hook to replace Framer Motion's `useInView`.
 * Fires once, then disconnects. Pure DOM, zero framework cost.
 */
import { useEffect, useState } from "react";

export function useInViewOnce(
  ref: React.RefObject<HTMLElement | null>,
  amount = 0.3
): boolean {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const root = document.querySelector(SCROLLER) as Element | null;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= amount) {
            setInView(true);
            io.disconnect();
            break;
          }
        }
      },
      // Single threshold — we disconnect after the first fire, so extra
      // thresholds just cost redundant callbacks during scroll.
      { root, threshold: Math.min(amount, 1) }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, amount, inView]);
  return inView;
}
