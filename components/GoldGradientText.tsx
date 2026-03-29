"use client";

import { useRef } from "react";
import { motion, useMotionValue, useAnimationFrame, useTransform } from "framer-motion";

// Subtle dark gradient — deep black to charcoal to black
const GOLD = ["#0A0A0A", "#1A1A1A", "#3A3A3A", "#555555", "#3A3A3A", "#1A1A1A", "#0A0A0A"];

export default function GoldGradientText({
  children,
  className = "",
  speed = 6,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}) {
  const progress = useMotionValue(0);
  const elapsed = useRef(0);
  const lastTime = useRef<number | null>(null);
  const duration = speed * 1000;

  useAnimationFrame((time) => {
    if (lastTime.current === null) {
      lastTime.current = time;
      return;
    }
    elapsed.current += time - lastTime.current;
    lastTime.current = time;
    const fullCycle = duration * 2;
    const cycleTime = elapsed.current % fullCycle;
    progress.set(
      cycleTime < duration
        ? (cycleTime / duration) * 100
        : 100 - ((cycleTime - duration) / duration) * 100
    );
  });

  const backgroundPosition = useTransform(progress, (p) => `${p}% 50%`);

  return (
    <motion.span
      className={className}
      style={{
        backgroundImage: `linear-gradient(to right, ${GOLD.join(", ")})`,
        backgroundSize: "300% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
        display: "inline",
      }}
    >
      {children}
    </motion.span>
  );
}
