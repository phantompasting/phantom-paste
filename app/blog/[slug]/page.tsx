import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostLayout from "@/components/BlogPostLayout";
import { BUSINESS } from "@/lib/business";
import {
  PUBLISHED_POSTS,
  getPublishedPost,
} from "@/lib/blogRegistry";

/**
 * Single dynamic route handling every published post. Metadata + body come
 * from the registry + a matching `/content/blog/<slug>.tsx` module.
 *
 * Each content module exports:
 *   - default: the post body (React component)
 *   - tldr:    the TL;DR block (React component)
 *
 * Drafts stay in the registry with status: "draft" but never show here —
 * generateStaticParams() only returns PUBLISHED_POSTS slugs.
 */
export function generateStaticParams() {
  return PUBLISHED_POSTS.map((p) => ({ slug: p.slug }));
}

// Disable on-demand params — only pre-rendered slugs exist.
export const dynamicParams = false;

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPublishedPost(slug);
  if (!post) return {};

  const url = `${BUSINESS.url}/blog/${post.slug}`;
  const heroAbs = `${BUSINESS.url}${post.heroImage}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: ["Mateo Vargas"],
      tags: post.tags,
      images: [
        {
          url: heroAbs,
          width: BUSINESS.ogImageWidth,
          height: BUSINESS.ogImageHeight,
          alt: post.heroAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [heroAbs],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPublishedPost(slug);
  if (!post) notFound();

  // Dynamic import so each post's body only loads when its slug is requested.
  // Vite/Next can code-split per module; hub + other posts stay lean.
  const mod = await import(`@/content/blog/${slug}`);
  const PostBody = mod.default as React.ComponentType;
  const TLDR = mod.tldr as React.ComponentType;

  return (
    <BlogPostLayout post={post} tldr={<TLDR />}>
      <PostBody />
    </BlogPostLayout>
  );
}
