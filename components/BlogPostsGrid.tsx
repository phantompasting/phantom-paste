"use client";

import { useState } from "react";
import BlogCard from "./BlogCard";
import { SILO_LABELS, type BlogPostMeta, type BlogSilo } from "@/lib/blogRegistry";

const ACCENT = "#D4A010";
const EXPO = "cubic-bezier(0.16, 1, 0.3, 1)";

type Filter = "all" | BlogSilo;

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All Posts" },
  { key: "the-craft", label: SILO_LABELS["the-craft"].label },
  { key: "strategy-roi", label: SILO_LABELS["strategy-roi"].label },
  { key: "local-legal", label: SILO_LABELS["local-legal"].label },
];

/**
 * BlogPostsGrid — client-filtered flat grid of blog posts.
 *
 * Server-renders the full posts list inside a ul (crawlable for the
 * ItemList JSON-LD — schema is separately emitted by the hub page),
 * then hydrates into a chip-filter view on the client. No route change,
 * no network hit — pure local state.
 */
export default function BlogPostsGrid({ posts }: { posts: BlogPostMeta[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = filter === "all" ? posts : posts.filter((p) => p.silo === filter);

  return (
    <div>
      {/* ── Chip filter row ─────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filter posts by category">
        {FILTERS.map((f) => {
          const active = filter === f.key;
          return (
            <button
              key={f.key}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f.key)}
              className="font-bold uppercase rounded-full"
              style={{
                fontSize: "10px",
                letterSpacing: "0.22em",
                padding: "10px 18px",
                background: active ? "#1A1A1A" : "rgba(255,255,255,0.45)",
                color: active ? ACCENT : "rgba(0,0,0,0.72)",
                border: active
                  ? "1px solid #1A1A1A"
                  : "1px solid rgba(255,255,255,0.7)",
                backdropFilter: active ? undefined : "blur(10px)",
                WebkitBackdropFilter: active ? undefined : "blur(10px)",
                cursor: "pointer",
                transition: `background 0.25s ${EXPO}, color 0.25s ${EXPO}, border-color 0.25s ${EXPO}`,
              }}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* ── Grid ─────────────────────────────────────────────────────── */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      ) : (
        <div
          className="font-light italic text-center py-10"
          style={{ fontSize: "14px", color: "rgba(0,0,0,0.5)" }}
        >
          No posts in this category yet.
        </div>
      )}
    </div>
  );
}
