import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Wheat Pasting NYC",
  description:
    "Wheat pasting in New York City — poster campaigns across the Lower East Side, Brooklyn, SoHo, and Williamsburg. Large-format street posters. Get a quote.",
  keywords: ["wheat pasting NYC", "NYC poster campaigns", "NYC guerrilla marketing", "street postering New York", "wheat paste posters Brooklyn"],
  alternates: { canonical: "https://www.phantompasting.com/locations/new-york" },
  openGraph: {
    title: "Wheat Pasting NYC",
    description: "Large-format wheat paste poster campaigns across NYC. LES, Brooklyn, SoHo, Williamsburg.",
    url: "https://www.phantompasting.com/locations/new-york",
    images: [
      {
        url: "https://www.phantompasting.com/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp",
        width: 1200,
        height: 630,
        alt: "Guerrilla marketing campaign in New York City — urban street advertising",
      },
    ],
  },
};

const data: CityPageData = {
  city: "New York",
  state: "NY",
  slug: "new-york",
  heroWord: "NEW YORK",
  intro: "New York City is the birthplace of wheat pasting culture. More foot traffic per block than anywhere in the country. We hit the Lower East Side, Brooklyn, SoHo, Williamsburg, and every high-density neighborhood in between. Phantom Pasting has executed wheat paste and guerrilla campaigns for national brands across New York's streets.",
  whyTitle: "NYC IS WHERE\nIT STARTED.",
  whyText: "New York has the highest pedestrian density in the US — millions of daily commuters, tourists, and residents who experience the city on foot. A wheat paste poster in Williamsburg or SoHo isn't just advertising — it's part of the visual fabric of the street. NYC campaigns generate organic social shares at a rate no other city can match.",
  neighborhoods: [
    { name: "Lower East Side", desc: "Art galleries, nightlife, and dense foot traffic. Prime walls along Bowery and Rivington." },
    { name: "Williamsburg", desc: "Brooklyn's creative hub. Bedford Ave to the waterfront — high engagement from a young, culture-forward audience." },
    { name: "SoHo", desc: "Luxury retail meets street culture. Tourist foot traffic + fashion-forward locals." },
    { name: "Bushwick", desc: "Street art capital of Brooklyn. Walls here are part of the culture — your poster belongs." },
    { name: "East Village", desc: "Music, food, and counterculture. Dense walkability and a legacy of street-level advertising." },
    { name: "Chelsea / Meatpacking", desc: "Gallery district meets nightlife. High foot traffic from the High Line and Hudson Yards." },
  ],
  heroImage1: { src: "/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp", alt: "Guerrilla advertising pole wrap campaign at night in New York" },
  heroImage2: { src: "/gallery/sticker-campaign-street-intersection-urban.webp", alt: "Sticker campaign at NYC street intersection" },
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Phantom Pasting — New York City",
    description: "Wheat pasting and poster campaign services in New York City. Street postering across LES, Brooklyn, SoHo, and Williamsburg.",
    url: "https://www.phantompasting.com/locations/new-york",
    areaServed: { "@type": "City", name: "New York", addressRegion: "NY" },
    parentOrganization: { "@type": "Organization", name: "Phantom Pasting", url: "https://www.phantompasting.com" },
  },
};

export default function NewYorkPage() {
  return <CityPageTemplate data={data} />;
}
