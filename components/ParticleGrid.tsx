"use client";

import { useEffect, useRef } from "react";

interface Particle {
  ox: number; oy: number; // origin
  x: number;  y: number;  // current
  size: number;
  opacity: number;
}

const SPACING = 38;
const MOUSE_RADIUS = 110;
const MOUSE_STRENGTH = 22;
const RETURN_EASE = 0.08;
const COLOR = "184,150,15"; // gold

export default function ParticleGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Skip on touch-only devices
    if (window.matchMedia("(hover: none)").matches) return;

    let particles: Particle[] = [];
    let mouse = { x: -9999, y: -9999 };
    let raf: number;
    let w = 0, h = 0;

    const build = () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w; canvas.height = h;
      particles = [];
      const cols = Math.ceil(w / SPACING) + 1;
      const rows = Math.ceil(h / SPACING) + 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const ox = c * SPACING;
          const oy = r * SPACING;
          particles.push({ ox, oy, x: ox, y: oy, size: 1.2, opacity: 0.18 + Math.random() * 0.10 });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        const dx = mouse.x - p.ox;
        const dy = mouse.y - p.oy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS) {
          const force = (1 - dist / MOUSE_RADIUS) * MOUSE_STRENGTH;
          const angle = Math.atan2(dy, dx);
          p.x += (-Math.cos(angle) * force - (p.x - p.ox)) * RETURN_EASE;
          p.y += (-Math.sin(angle) * force - (p.y - p.oy)) * RETURN_EASE;
        } else {
          p.x += (p.ox - p.x) * RETURN_EASE;
          p.y += (p.oy - p.y) * RETURN_EASE;
        }
        const distFromOrigin = Math.sqrt((p.x - p.ox) ** 2 + (p.y - p.oy) ** 2);
        const glow = Math.min(distFromOrigin / 8, 1);
        const opacity = p.opacity + glow * 0.45;
        const size = p.size + glow * 0.8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${COLOR},${opacity})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => { mouse = { x: e.clientX, y: e.clientY }; };
    const onLeave = () => { mouse = { x: -9999, y: -9999 }; };
    const onResize = () => { build(); };

    build();
    draw();
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.85,
      }}
    />
  );
}
