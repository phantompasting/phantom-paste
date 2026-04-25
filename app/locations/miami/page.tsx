import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: "Wheat Pasting Miami",
  description:
    "Wheat pasting in Miami — poster campaigns across Wynwood, South Beach, Brickell, and the Design District. Large-format street posters. Get a quote.",
  keywords: [
    "wheat pasting Miami",
    "Miami poster campaigns",
    "Miami guerrilla marketing",
    "street postering Miami",
    "Wynwood poster campaign",
    "Miami street media",
    "Miami street marketing agency",
    "Miami flyposting",
    "Miami OOH advertising",
    "Wynwood guerrilla marketing",
    "South Beach street advertising",
    "Brickell wheat pasting",
    "Design District poster campaigns",
    ...cityBuyerIntent("Miami"),
    ...KW_CITY_BASE,
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/miami" },
  openGraph: {
    title: "Wheat Pasting Miami",
    description: "Large-format wheat paste poster campaigns across Miami. Wynwood, South Beach, Brickell, Design District.",
    url: "https://www.phantompasting.com/locations/miami",
    images: [
      {
        url: "https://www.phantompasting.com/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp",
        width: 1200,
        height: 630,
        alt: "Wheat paste poster wall campaign — Phantom Pasting street advertising",
      },
    ],
  },
};

const data: CityPageData = {
  city: "Miami",
  state: "FL",
  slug: "miami",
  heroWord: "MIAMI",
  intro: "Miami's outdoor culture, year-round foot traffic, and world-famous art scene make it one of the best cities in the US for street marketing. We deploy across Wynwood, South Beach, Brickell, and the Design District. Phantom Pasting has run wheat paste and poster campaigns for brands and artists across Miami's most visible neighborhoods.",
  whyTitle: "MIAMI IS\nALWAYS ON.",
  whyText: "Miami has no off-season. Year-round warm weather means year-round foot traffic. Wynwood is already the street art capital of the US — your wheat paste campaign fits right into the visual culture. South Beach draws tourists from around the world. Brickell's professionals walk to lunch. Every surface is an opportunity.",
  neighborhoods: [
    { name: "Wynwood", desc: "Street art capital of the US. Murals, galleries, and Art Basel crowds make every wall prime real estate." },
    { name: "South Beach", desc: "Tourist foot traffic year-round. Ocean Drive to Collins Ave — maximum visibility." },
    { name: "Brickell", desc: "Miami's financial district. Dense professional foot traffic during weekdays." },
    { name: "Design District", desc: "Luxury retail meets art culture. Fashion-forward audience with high engagement." },
    { name: "Little Havana", desc: "Cultural corridor along Calle Ocho. Authentic foot traffic and community engagement." },
    { name: "Coconut Grove", desc: "Walkable village vibe. Young families, students, and weekend crowds." },
  ],
  heroImage1: { src: "/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp", alt: "Wheat paste poster on pink urban wall in Miami" },
  heroImage2: { src: "/gallery/chalk-spray-stencil-sidewalk-guerrilla-marketing.webp", alt: "Chalk spray stencil sidewalk activation in Miami" },
  // Service schema base — CityPageTemplate enriches with @type, provider,
  // areaServed, and offers. Field stays named `localBusiness` for type
  // compat with the shared template interface.
  localBusiness: {
    name: "Phantom Pasting — Miami",
    description: "Wheat pasting and poster campaign services in Miami, FL. Street postering across Wynwood, South Beach, Brickell, and the Design District.",
    url: "https://www.phantompasting.com/locations/miami",
  },
};

export default function MiamiPage() {
  return <CityPageTemplate data={data} />;
}
