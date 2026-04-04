import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import GalleryPageClient from "./GalleryPageClient";

export const metadata: Metadata = {
  title: "Campaign Gallery | Our Work | Phantom Pasting",
  description:
    "Browse 500+ documented wheat paste, wild posting, and chalk spray stencil campaigns across the US. Every activation photo-documented.",
  alternates: { canonical: "https://phantompasting.com/gallery" },
  openGraph: {
    title: "Campaign Gallery | Phantom Pasting",
    description: "Photo documentation from 500+ guerrilla marketing campaigns across 50+ US cities.",
    type: "website",
    url: "https://phantompasting.com/gallery",
    siteName: "Phantom Pasting",
  },
};

export default function GalleryPage() {
  return (
    <div style={{ background: "transparent", minHeight: "100vh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
      <SiteNav />
      <GalleryPageClient />
    </div>
  );
}
