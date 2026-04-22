import type { ReactNode } from "react";

const ACCENT = "#D4A010";

/**
 * PullQuote — gold left-border blockquote used inside blog post bodies to
 * highlight direct field-note voice from the author. Sets the "Installer's
 * Perspective" sections apart visually, which is the EEAT moat (real-world
 * experience quoted verbatim) competitors can't replicate.
 *
 *   <PullQuote attribution="Mateo Vargas, Field Operations Lead">
 *     <p>You don't think about water until you're in a parking lot…</p>
 *   </PullQuote>
 */
export default function PullQuote({
  children,
  attribution,
}: {
  children: ReactNode;
  attribution?: string;
}) {
  return (
    <blockquote
      className="my-10 rounded-r-xl"
      style={{
        borderLeft: `3px solid ${ACCENT}`,
        background: "rgba(255,255,255,0.35)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        padding: "1.5rem 1.75rem",
        margin: "2.5rem 0",
      }}
    >
      <div
        className="font-light leading-relaxed"
        style={{
          fontSize: "clamp(16px, 1.6vw, 18px)",
          color: "rgba(0,0,0,0.78)",
          fontStyle: "italic",
        }}
      >
        {children}
      </div>
      {attribution && (
        <footer
          className="font-mono uppercase mt-5"
          style={{
            fontSize: "10px",
            letterSpacing: "0.22em",
            color: "rgba(0,0,0,0.55)",
          }}
        >
          — {attribution}
        </footer>
      )}
    </blockquote>
  );
}
