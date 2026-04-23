/**
 * BlogLink — smart wrapper for cross-post links.
 *
 * WHY THIS EXISTS:
 * Blog drafts referenced from a published post create 4xx errors, broken
 * internal links in Semrush, and dead-end UX. Manually commenting/uncommenting
 * <Link> tags every time we ship a post doesn't scale.
 *
 * BEHAVIOR:
 * - If `slug` matches a post with status: "published" in lib/blogRegistry.ts →
 *   renders a real <Link href="/blog/{slug}">.
 * - If `slug` is a draft (or unknown) → renders <strong>{children}</strong>:
 *   the prose still reads naturally, no 404, no broken-link signal to crawlers.
 *
 * RUNBOOK:
 * Flipping a post's status from "draft" → "published" in blogRegistry.ts
 * automatically activates every BlogLink reference to it across the site.
 * No content edits required when shipping a new post.
 */

import Link from "next/link";
import type { ReactNode } from "react";
import { PUBLISHED_POSTS } from "@/lib/blogRegistry";

const PUBLISHED_SLUGS = new Set(PUBLISHED_POSTS.map((p) => p.slug));

interface BlogLinkProps {
  slug: string;
  children: ReactNode;
  className?: string;
}

export default function BlogLink({ slug, children, className }: BlogLinkProps) {
  if (PUBLISHED_SLUGS.has(slug)) {
    return (
      <Link href={`/blog/${slug}`} className={className}>
        {children}
      </Link>
    );
  }
  // Draft or unknown — keep prose readable, emit no anchor.
  return <strong className={className}>{children}</strong>;
}
