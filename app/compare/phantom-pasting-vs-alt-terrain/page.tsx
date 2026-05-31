import type { Metadata } from "next";
import ComparePageTemplate from "@/components/ComparePageTemplate";
import { getComparison } from "@/lib/competitors";
import { BUSINESS } from "@/lib/business";

const data = getComparison("alt-terrain")!;
const PAGE_URL = `${BUSINESS.url}/compare/phantom-pasting-vs-alt-terrain`;

export const metadata: Metadata = {
  title: { absolute: `${data.metaTitle} | Phantom Pasting` },
  description: data.metaDescription,
  keywords: [
    "Phantom Pasting vs ALT TERRAIN",
    "ALT TERRAIN alternative",
    "ALT TERRAIN vs Phantom Pasting",
    "alternative to ALT TERRAIN",
    "wild posting company comparison",
    "wheat pasting agency comparison",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `${data.metaTitle} | Phantom Pasting`,
    description: data.metaDescription,
    url: PAGE_URL,
    type: "article",
    images: [{ url: BUSINESS.ogImageDefault, width: 1200, height: 630, alt: "Phantom Pasting vs ALT TERRAIN comparison" }],
  },
};

export default function Page() {
  return <ComparePageTemplate data={data} />;
}
