"use client";

import { useLayoutEffect } from "react";

/**
 * PerfGate — applies `.perf-lite` to <html> on weak hardware, so heavy
 * surfaces (grainient canvas, backdrop-filter blurs, gold animations)
 * downgrade to static equivalents.
 *
 * Why a Client Component instead of an inline <script> in <head>:
 * React Server Components silently drop plain <script> elements during
 * RSC payload serialization on SSG routes (those using
 * generateStaticParams, e.g. /blog/[slug]). Only scripts with
 * type="application/ld+json" survive because React treats them as
 * inert data. next/script strategy="beforeInteractive" is also stripped.
 * So we run the detection client-side via useLayoutEffect — it fires
 * synchronously right after React's first commit, before paint of
 * subsequent frames. There's a brief flash of the full experience on
 * Intel Macs before the class lands, but the CSS rules kick in on the
 * next repaint and save them from 2-4s of compositor cost thereafter.
 *
 * Pre-paint coverage for OS-level signals (prefers-reduced-motion,
 * prefers-reduced-transparency) is handled by pure CSS media queries
 * in globals.css, so accessibility-preference users get zero-flash
 * downgrade.
 *
 * Detection rules (conservative — never triggers on Apple Silicon Macs,
 * iPhones, Pixels, modern desktops, or anything with ≥4 cores):
 *   • connection.saveData === true (data saver opt-in)
 *   • Intel Mac UA (Macintosh + Intel Mac OS X — Apple Silicon dropped
 *     that string in 2020, iPhones say "like Mac OS X")
 *   • Double-signal weak hardware: ≤2 logical cores AND numeric
 *     deviceMemory ≤ 2 (Safari returns undefined for deviceMemory,
 *     so iPhones automatically skip this branch)
 */
export default function PerfGate() {
  useLayoutEffect(() => {
    try {
      const d = document.documentElement;
      if (d.classList.contains("perf-lite")) return;

      // Debug escape hatch — ?perf=full forces the full experience even
      // on weak hardware. Useful for QA, for capturing canvas screenshots
      // used as perf-lite fallback backgrounds, and for users who know
      // their device can handle it. ?perf=lite forces the lite mode for
      // testing the downgrade on capable devices.
      const qs = new URLSearchParams(location.search);
      const override = qs.get("perf");
      if (override === "full") return;
      if (override === "lite") {
        d.classList.add("perf-lite");
        return;
      }

      let lite = false;

      // Connection data-saver opt-in
      const nav = navigator as Navigator & {
        connection?: { saveData?: boolean };
        mozConnection?: { saveData?: boolean };
        webkitConnection?: { saveData?: boolean };
        deviceMemory?: number;
      };
      const conn = nav.connection || nav.mozConnection || nav.webkitConnection;
      if (conn && conn.saveData === true) lite = true;

      // Intel Mac UA signature (excludes Apple Silicon + iPhones)
      const ua = navigator.userAgent || "";
      if (/Macintosh;[^)]*Intel Mac OS X/.test(ua)) lite = true;

      // Double-signal weak hardware (both must be present + low)
      const cores = navigator.hardwareConcurrency;
      const mem = nav.deviceMemory;
      if (typeof cores === "number" && cores <= 2 && typeof mem === "number" && mem <= 2) {
        lite = true;
      }

      if (lite) d.classList.add("perf-lite");
    } catch {
      // Silent — failure means no downgrade, which is the safe default.
    }
  }, []);

  return null;
}
