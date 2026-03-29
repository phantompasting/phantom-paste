"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useAnimationFrame, useTransform } from "framer-motion";

export default function ShinyGoldText({
  children,
  className = "",
  speed = 3,
  pauseOnHover = false,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  pauseOnHover?: boolean;
  style?: React.CSSProperties;
}) {
  const [isPaused, setIsPaused] = useState(false);
  const progress = useMotionValue(0);
  const elapsed = useRef(0);
  const lastTime = useRef<number | null>(null);
  const duration = speed * 1000;

  useAnimationFrame((time) => {
    if (isPaused) { lastTime.current = null; return; }
    if (lastTime.current === null) { lastTime.current = time; return; }
    elapsed.current += time - lastTime.current;
    lastTime.current = time;
    const cycleTime = elapsed.current % (duration * 2);
    progress.set(cycleTime < duration
      ? (cycleTime / duration) * 100
      : 100 - ((cycleTime - duration) / duration) * 100
    );
  });

  const backgroundPosition = useTransform(progress, (p) => `${150 - p * 2}% center`);

  const handleMouseEnter = useCallback(() => { if (pauseOnHover) setIsPaused(true); }, [pauseOnHover]);
  const handleMouseLeave = useCallback(() => { if (pauseOnHover) setIsPaused(false); }, [pauseOnHover]);

  return (
    <motion.span
      className={className}
      style={{
        backgroundImage: "linear-gradient(120deg, #D4A010 0%, #D4A010 35%, #FDF0A0 50%, #D4A010 65%, #D4A010 100%)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
        display: "inline-block",
        paddingRight: "0.06em",
        backgroundPosition,
        ...style,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.span>
  );
}
