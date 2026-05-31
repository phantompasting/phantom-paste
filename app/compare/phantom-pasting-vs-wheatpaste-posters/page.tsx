import type { Metadata } from "next";
import ComparePageTemplate from "@/components/ComparePageTemplate";
import { getComparison } from "@/lib/competitors";
import { BUSINESS } from "@/lib/business";

const data = getComparison("wheatpaste-posters")!;
const PAGE_URL = `${BUSINESS.url}/compare/phantom-pasting-vs-wheatpaste-posters`;

export const metadata: Metadata = {
  title: { absolute: `${data.metaTitle} | Phantom Pasting` },
  description: data.metaDescription,
  keywords: [
    "Phantom Pasting vs Wheatpaste Posters",
    "Wheatpaste Posters alternative",
    "Wheatpaste Posters vs Phantom Pasting",
    "alternative to Wheatpaste Posters",
    "wheatpasting company comparison",
    "wheat pasting agency comparison",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `${data.metaTitle} | Phantom Pasting`,
    description: data.metaDescription,
    url: PAGE_URL,
    type: "article",
    images: [{ url: BUSINESS.ogImageDefault, width: 1200, height: 630, alt: "Phantom Pasting vs Wheatpaste Posters comparison" }],
  },
};

export default function Page() {
  return <ComparePageTemplate data={data} />;
}
