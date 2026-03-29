/**
 * Background3D — Server component.
 * Liquid paint blob aesthetic — CSS float + morph, no JS.
 * Five overlapping blobs with concentrated pigment cores + feathery edges.
 */

const BLOBS = [
  { left: "2%",  top: "-3%", w: "34vw", h: "30vw", orb: "orb-1" as const, opacity: 0.88 },
  { left: "60%", top: "3%",  w: "30vw", h: "27vw", orb: "orb-2" as const, opacity: 0.72 },
  { left: "-3%", top: "54%", w: "32vw", h: "29vw", orb: "orb-3" as const, opacity: 0.78 },
  { left: "57%", top: "50%", w: "28vw", h: "26vw", orb: "orb-1" as const, opacity: 0.60 },
] as const;

export default function Background3D() {
  return (
    <div aria-hidden
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
      {BLOBS.map((b, i) => (
        <div key={i} style={{ position: "absolute", left: b.left, top: b.top }}>
          <div className={`${b.orb} orb-drift`} style={{
            width: b.w, height: b.h,
            background: blobGradient(i),
            opacity: b.opacity,
          }} />
        </div>
      ))}
      {/* Warm vignette — keeps center readable */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 45%, transparent 28%, rgba(242,238,230,0.58) 100%)",
        pointerEvents: "none",
      }} />
      <div className="noise-grain" />
    </div>
  );
}

function blobGradient(i: number): string {
  // Concentrated pigment core → feathery transparent edge = liquid paint on paper
  const gradients = [
    // Warm amber — dominant
    "radial-gradient(circle at 40% 38%, rgba(212,166,18,0.94) 0%, rgba(200,154,10,0.58) 22%, rgba(185,145,8,0.20) 50%, transparent 68%)",
    // Deep ochre — upper right
    "radial-gradient(circle at 45% 42%, rgba(196,148,6,0.88) 0%, rgba(183,138,5,0.50) 24%, rgba(172,130,7,0.16) 52%, transparent 70%)",
    // Sienna-gold — lower left
    "radial-gradient(circle at 38% 44%, rgba(220,176,28,0.90) 0%, rgba(207,162,16,0.52) 22%, rgba(192,152,12,0.18) 48%, transparent 66%)",
    // Pale warm gold — lower right
    "radial-gradient(circle at 46% 40%, rgba(230,190,44,0.78) 0%, rgba(216,175,28,0.42) 24%, rgba(200,160,14,0.14) 52%, transparent 72%)",
  ];
  return gradients[i];
}
