import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Wheat Pasting Atlanta | Wild Posting GA | Phantom Pasting",
  description:
    "Wheat pasting and wild posting in Atlanta. Large-format street posters across Midtown, Little Five Points, Buckhead, and East Atlanta. Get a quote.",
  keywords: ["wheat pasting Atlanta", "wild posting Atlanta", "Atlanta guerrilla marketing", "street advertising Atlanta", "wheat paste posters GA"],
  alternates: { canonical: "https://phantompasting.com/locations/atlanta" },
  openGraph: {
    title: "Wheat Pasting Atlanta | Wild Posting GA",
    description: "Large-format wheat paste and wild posting campaigns across Atlanta. Midtown, Little Five Points, Buckhead.",
    url: "https://phantompasting.com/locations/atlanta",
  },
};

const data: CityPageData = {
  city: "Atlanta",
  state: "GA",
  slug: "atlanta",
  heroWord: "ATLANTA",
  intro: "Atlanta is one of the fastest-growing cities in the US — and one of the best for street marketing. We deploy across Midtown, Little Five Points, Buckhead, and East Atlanta Village with large-format wheat paste posters and chalk stencils.",
  whyTitle: "ATLANTA\nIS GROWING.",
  whyText: "Atlanta is a hub for music, film, and culture — and it's growing fast. Little Five Points is the city's creative nerve center. Midtown draws young professionals and students. Buckhead has the spending power. Every major tour, album drop, and cultural event passes through ATL — and street marketing is how you make noise here.",
  neighborhoods: [
    { name: "Midtown", desc: "Arts and entertainment hub. Piedmont Park foot traffic, Georgia Tech students, and Peachtree Street density." },
    { name: "Little Five Points", desc: "Atlanta's creative district. Independent shops, music venues, and the most street-culture-native audience in the city." },
    { name: "Buckhead", desc: "Upscale shopping and nightlife. High spending power and dense foot traffic along Peachtree Rd." },
    { name: "East Atlanta Village", desc: "Emerging arts scene. Bars, music venues, and a tight community that engages with street-level content." },
    { name: "Old Fourth Ward", desc: "BeltLine adjacent. One of the most walkable corridors in the city with year-round foot traffic." },
    { name: "Decatur", desc: "Walkable downtown square. Festivals, restaurants, and a community that supports local and independent brands." },
  ],
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Phantom Pasting — Atlanta",
    description: "Wheat pasting and wild posting services in Atlanta, GA. Street poster campaigns across Midtown, Little Five Points, Buckhead, and East Atlanta.",
    url: "https://phantompasting.com/locations/atlanta",
    areaServed: { "@type": "City", name: "Atlanta", addressRegion: "GA" },
    parentOrganization: { "@type": "Organization", name: "Phantom Pasting", url: "https://phantompasting.com" },
  },
};

export default function AtlantaPage() {
  return <CityPageTemplate data={data} />;
}
