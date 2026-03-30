/**
 * ShinyGoldText — pure CSS, no framer-motion, server-renderable.
 * The shimmer is driven entirely by a CSS keyframe so the LCP element
 * is painted on first paint with no JS hydration dependency.
 */
export default function ShinyGoldText({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span className={`shiny-gold-text ${className}`} style={style}>
      {children}
    </span>
  );
}
