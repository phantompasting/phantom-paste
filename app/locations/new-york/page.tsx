import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Wheat Pasting New York City | Wild Posting NYC | Phantom Pasting",
  description:
    "Wheat pasting and wild posting in New York City. Large-format street posters across the Lower East Side, Brooklyn, SoHo, and Williamsburg. Get a quote.",
  keywords: ["wheat pasting NYC", "wild posting New York", "NYC guerrilla marketing", "street advertising New York", "wheat paste posters Brooklyn"],
  alternates: { canonical: "https://phantompasting.com/locations/new-york" },
  openGraph: {
    title: "Wheat Pasting New York City | Wild Posting NYC",
    description: "Large-format wheat paste and wild posting campaigns across NYC. LES, Brooklyn, SoHo, Williamsburg.",
    url: "https://phantompasting.com/locations/new-york",
  },
};

const data: CityPageData = {
  city: "New York",
  state: "NY",
  slug: "new-york",
  heroWord: "NEW YORK",
  intro: "New York City is the birthplace of wheat pasting culture. More foot traffic per block than anywhere in the country. We hit the Lower East Side, Brooklyn, SoHo, Williamsburg, and every high-density neighborhood in between.",
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
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Phantom Pasting — New York City",
    description: "Wheat pasting and wild posting services in New York City. Street poster campaigns across LES, Brooklyn, SoHo, and Williamsburg.",
    url: "https://phantompasting.com/locations/new-york",
    areaServed: { "@type": "City", name: "New York", addressRegion: "NY" },
    parentOrganization: { "@type": "Organization", name: "Phantom Pasting", url: "https://phantompasting.com" },
  },
};

export default function NewYorkPage() {
  return <CityPageTemplate data={data} />;
}
