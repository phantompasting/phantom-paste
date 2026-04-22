"use client";

/**
 * Unified visibility-gated shimmer for `.shiny-gold-text` — desktop + mobile.
 *
 * Why this exists:
 *   - The default `.shiny-gold-text` rule (inline <style> in layout.tsx) ships
 *     WITHOUT an animation — it renders as static gold at its rest position.
 *   - This observer adds `.sgt-play` when an element is in the viewport AND
 *     the tab is visible. `.sgt-play` triggers the 10s `goldShine` keyframe
 *     (4s sweep + 6s rest, alternating).
 *
 * Two gating conditions, both required to animate:
 *   1. IntersectionObserver — element visible in viewport (80px margin)
 *   2. Page Visibility API — tab is in the foreground
 *
 * When the tab backgrounds, modern browsers throttle CSS animations, but
 * the compositor layer + `filter: drop-shadow` still occupy memory and
 * may paint on focus return. Stripping `.sgt-play` entirely drops the
 * layer flag and releases that memory deterministically.
 *
 * Desktop: observes the same as mobile. The old "always animate on
 * desktop" path is gone — every visible gold word is an animation;
 * there's no reason to animate the ones scrolled off screen.
 *
 * Re-observation on visibility return: when the tab becomes visible
 * again, the IO callback does NOT fire automatically for elements
 * whose intersection state didn't change. We force re-observation
 * (unobserve + observe) so the callback fires fresh with current state,
 * re-applying `.sgt-play` to elements still in view.
 */

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ShinyGoldObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("IntersectionObserver" in window)) return;

    // Reduced-motion opt-out — static gold only, never animated.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // perf-lite opt-out — weak hardware (Intel Macs, low-core devices) gets
    // solid gold, no animation, no drop-shadow. Skipping the observer
    // entirely means `.sgt-play` is never added, so no compositor layer is
    // ever allocated for any of the ~54 gold-text instances on the page.
    // The CSS override in globals.css (`html.perf-lite .shiny-gold-text.sgt-play`)
    // is a belt-and-suspenders backup for any edge case where the class
    // might slip in — but in practice this bail-out means the full version
    // shows shine and the lite version shows solid gold, exactly as designed.
    if (document.documentElement.classList.contains("perf-lite")) return;

    let tabVisible = !document.hidden;
    const observed = new Set<Element>();

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && tabVisible) {
            e.target.classList.add("sgt-play");
          } else {
            e.target.classList.remove("sgt-play");
          }
        }
      },
      {
        // Small positive margin so the animation is already running by
        // the time the element is fully visible — avoids a snap into
        // animation mid-scroll.
        rootMargin: "80px 0px 80px 0px",
        threshold: 0,
      },
    );

    document.querySelectorAll(".shiny-gold-text").forEach((el) => {
      io.observe(el);
      observed.add(el);
    });

    // Page Visibility handling:
    //   tab hidden   → strip every .sgt-play immediately (drops the
    //                  animation + compositor layer flag)
    //   tab visible  → unobserve/observe each element to force the IO
    //                  callback to re-fire with fresh intersection state
    //                  (which re-applies .sgt-play where appropriate).
    const onVisibility = () => {
      tabVisible = !document.hidden;
      if (!tabVisible) {
        observed.forEach((el) => el.classList.remove("sgt-play"));
      } else {
        observed.forEach((el) => {
          io.unobserve(el);
          io.observe(el);
        });
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
    // Re-scan on route change so client-side nav picks up new instances.
  }, [pathname]);

  return null;
}
