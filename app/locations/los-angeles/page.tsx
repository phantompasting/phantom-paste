import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Wheat Pasting Los Angeles | Wild Posting LA | Phantom Pasting",
  description:
    "Wheat pasting and wild posting in Los Angeles. Large-format street posters across Melrose, Silver Lake, Fairfax, and DTLA. 100% documented. Get a quote.",
  keywords: ["wheat pasting Los Angeles", "wild posting LA", "Los Angeles guerrilla marketing", "street advertising LA", "wheat paste posters LA"],
  alternates: { canonical: "https://www.phantompasting.com/locations/los-angeles" },
  openGraph: {
    title: "Wheat Pasting Los Angeles | Wild Posting LA",
    description: "Large-format wheat paste and wild posting campaigns across Los Angeles. Melrose, Silver Lake, Fairfax, DTLA.",
    url: "https://www.phantompasting.com/locations/los-angeles",
    images: [
      {
        url: "https://www.phantompasting.com/gallery/fashionpass-wheat-paste-wild-posting-wall-los-angeles.webp",
        width: 1200,
        height: 630,
        alt: "Wheat paste wild posting wall campaign in Los Angeles",
      },
    ],
  },
};

const data: CityPageData = {
  city: "Los Angeles",
  state: "CA",
  slug: "los-angeles",
  heroWord: "LOS ANGELES",
  intro: "LA is built for street marketing. Sun-bleached walls, walkable neighborhoods, and a culture that lives outdoors. We deploy large-format wheat paste posters and chalk stencils across LA's highest-traffic areas — Melrose, Silver Lake, Fairfax, and DTLA.",
  whyTitle: "LA IS OUR\nTERRITORY.",
  whyText: "Los Angeles is the capital of visual culture — fashion, film, music, and art all converge on the street. Every wall in Melrose is a billboard. Every sidewalk in Silver Lake is a canvas. LA's outdoor lifestyle means more foot traffic, more eyeballs, and more organic shares than almost any other US city.",
  neighborhoods: [
    { name: "Melrose", desc: "Fashion-forward foot traffic. Prime wall space along Melrose Ave — the streetwear and boutique corridor." },
    { name: "Silver Lake", desc: "Creative-class hub. Independent shops, coffee culture, and high walkability make every poster an event." },
    { name: "Fairfax", desc: "Streetwear epicenter. Supreme to Round Two — this is where hype culture lives at street level." },
    { name: "DTLA", desc: "Arts District to Broadway — dense foot traffic, gallery walls, and urban renewal zones." },
    { name: "Venice / Abbot Kinney", desc: "Beach-adjacent foot traffic. Tourists and locals mix along one of LA's most walkable strips." },
    { name: "Echo Park", desc: "Indie music and art scene. Tight community, high engagement, and walls that get noticed." },
  ],
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Phantom Pasting — Los Angeles",
    description: "Wheat pasting and wild posting services in Los Angeles, CA. Large-format street poster campaigns across Melrose, Silver Lake, Fairfax, and DTLA.",
    url: "https://www.phantompasting.com/locations/los-angeles",
    areaServed: { "@type": "City", name: "Los Angeles", addressRegion: "CA" },
    parentOrganization: { "@type": "Organization", name: "Phantom Pasting", url: "https://www.phantompasting.com" },
  },
};

export default function LosAngelesPage() {
  return <CityPageTemplate data={data} />;
}
