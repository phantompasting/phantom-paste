import Image from "next/image";
import Link from "next/link";
import { SILO_LABELS, type BlogPostMeta } from "@/lib/blogRegistry";

const ACCENT = "#D4A010";

/**
 * BlogCard — glass-morphism card used on /blog and silo columns. Mirrors the
 * /work case-study card pattern (same glass bg, gold hover cue, wrapped in
 * next/link for crawlable internal links that populate the ItemList schema).
 *
 * Variants:
 *   "default" — full card with hero image + meta + title + excerpt
 *   "compact" — text-only mini-card used inside silo columns for density
 */
export default function BlogCard({
  post,
  variant = "default",
  priority = false,
}: {
  post: BlogPostMeta;
  variant?: "default" | "compact";
  priority?: boolean;
}) {
  const href = `/blog/${post.slug}`;
  const siloLabel = SILO_LABELS[post.silo].label;

  if (variant === "compact") {
    return (
      <Link
        href={href}
        className="group no-underline block rounded-xl p-5"
        style={{
          background: "rgba(255,255,255,0.28)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.55)",
          color: "inherit",
          transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1), border-color 0.25s",
        }}
      >
        <div
          className="font-mono uppercase mb-2"
          style={{ fontSize: "9px", letterSpacing: "0.3em", color: "rgba(0,0,0,0.55)" }}
        >
          {siloLabel}
        </div>
        <div
          className="font-black uppercase leading-tight mb-2"
          style={{ fontSize: "15px", letterSpacing: "-0.015em", color: "#1A1A1A" }}
        >
          {post.title}
        </div>
        <div
          className="font-light leading-relaxed"
          style={{ fontSize: "13px", color: "rgba(0,0,0,0.6)" }}
        >
          {post.excerpt.split(".")[0]}.
        </div>
        <span
          className="inline-block mt-3 font-bold uppercase"
          style={{ fontSize: "10px", letterSpacing: "0.22em", color: ACCENT }}
        >
          Read →
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group no-underline block rounded-3xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.35)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.6)",
        color: "inherit",
      }}
    >
      <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
        <Image
          src={post.heroImage}
          alt={post.heroAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />
      </div>
      <div className="p-6">
        <div
          className="font-mono uppercase mb-2"
          style={{ fontSize: "9px", letterSpacing: "0.3em", color: "rgba(0,0,0,0.55)" }}
        >
          {siloLabel} ·{" "}
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          })}
        </div>
        <div
          className="font-black uppercase leading-tight mb-3"
          style={{ fontSize: "clamp(17px, 1.8vw, 20px)", letterSpacing: "-0.02em", color: "#1A1A1A" }}
        >
          {post.title}
          <span style={{ color: ACCENT }}>.</span>
        </div>
        <p
          className="font-light leading-relaxed m-0"
          style={{ fontSize: "14px", color: "rgba(0,0,0,0.6)" }}
        >
          {post.excerpt}
        </p>
        <span
          className="inline-block mt-4 font-bold uppercase"
          style={{ fontSize: "11px", letterSpacing: "0.22em", color: ACCENT }}
        >
          Read the Guide →
        </span>
      </div>
    </Link>
  );
}
