import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Wheat Pasting Chicago | Wild Posting IL | Phantom Pasting",
  description:
    "Wheat pasting and wild posting in Chicago. Large-format street posters across Wicker Park, Wrigleyville, Logan Square, and the Loop. Get a quote.",
  keywords: ["wheat pasting Chicago", "wild posting Chicago", "Chicago guerrilla marketing", "street advertising Chicago", "wheat paste posters IL"],
  alternates: { canonical: "https://www.phantompasting.com/locations/chicago" },
  openGraph: {
    title: "Wheat Pasting Chicago | Wild Posting IL",
    description: "Large-format wheat paste and wild posting campaigns across Chicago. Wicker Park, Logan Square, Wrigleyville.",
    url: "https://www.phantompasting.com/locations/chicago",
    images: [
      {
        url: "https://www.phantompasting.com/gallery/fashionpass-wheat-paste-campaign-poster-wall.webp",
        width: 1200,
        height: 630,
        alt: "Wheat paste poster wall campaign — Phantom Pasting street advertising",
      },
    ],
  },
};

const data: CityPageData = {
  city: "Chicago",
  state: "IL",
  slug: "chicago",
  heroWord: "CHICAGO",
  intro: "Chicago's neighborhoods are built for street marketing — walkable blocks, dense populations, and a culture that supports local art and independent brands. We deploy across Wicker Park, Logan Square, Wrigleyville, and the Loop.",
  whyTitle: "CHICAGO\nHITS DIFFERENT.",
  whyText: "Chicago has some of the most walkable and culturally distinct neighborhoods in the Midwest. Wicker Park's independent retail strip, Logan Square's arts corridor, and Wrigleyville's game-day foot traffic create natural high-visibility zones. Chicago campaigns work because the city lives on its streets — especially in summer.",
  neighborhoods: [
    { name: "Wicker Park", desc: "Independent retail, bars, and creative studios. Milwaukee Ave is prime wall territory." },
    { name: "Logan Square", desc: "Arts and music corridor. Walkable, young, and culturally engaged." },
    { name: "Wrigleyville", desc: "Game-day foot traffic and nightlife. Massive visibility during Cubs season." },
    { name: "The Loop", desc: "Downtown core. Commuter density and tourist traffic along Michigan Ave." },
    { name: "Pilsen", desc: "Mural culture meets street advertising. One of Chicago's most visually alive neighborhoods." },
    { name: "Lincoln Park", desc: "Upscale walkability. DePaul students, young professionals, and weekend foot traffic." },
  ],
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Phantom Pasting — Chicago",
    description: "Wheat pasting and wild posting services in Chicago, IL. Street poster campaigns across Wicker Park, Logan Square, Wrigleyville, and the Loop.",
    url: "https://www.phantompasting.com/locations/chicago",
    areaServed: { "@type": "City", name: "Chicago", addressRegion: "IL" },
    parentOrganization: { "@type": "Organization", name: "Phantom Pasting", url: "https://www.phantompasting.com" },
  },
};

export default function ChicagoPage() {
  return <CityPageTemplate data={data} />;
}
