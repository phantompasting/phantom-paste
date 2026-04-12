import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Wheat Pasting Miami | Wild Posting FL | Phantom Pasting",
  description:
    "Wheat pasting and wild posting in Miami. Large-format street posters across Wynwood, South Beach, Brickell, and the Design District. Get a quote.",
  keywords: ["wheat pasting Miami", "wild posting Miami", "Miami guerrilla marketing", "street advertising Miami", "Wynwood wild posting"],
  alternates: { canonical: "https://www.phantompasting.com/locations/miami" },
  openGraph: {
    title: "Wheat Pasting Miami | Wild Posting FL",
    description: "Large-format wheat paste and wild posting campaigns across Miami. Wynwood, South Beach, Brickell, Design District.",
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
  intro: "Miami's outdoor culture, year-round foot traffic, and world-famous art scene make it one of the best cities in the US for street marketing. We deploy across Wynwood, South Beach, Brickell, and the Design District.",
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
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Phantom Pasting — Miami",
    description: "Wheat pasting and wild posting services in Miami, FL. Street poster campaigns across Wynwood, South Beach, Brickell, and the Design District.",
    url: "https://www.phantompasting.com/locations/miami",
    areaServed: { "@type": "City", name: "Miami", addressRegion: "FL" },
    parentOrganization: { "@type": "Organization", name: "Phantom Pasting", url: "https://www.phantompasting.com" },
  },
};

export default function MiamiPage() {
  return <CityPageTemplate data={data} />;
}
