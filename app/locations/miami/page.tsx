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
  heroStats: [
    { stat: "Wynwood", label: "Mural District" },
    { stat: "Year-Round", label: "Event Density" },
    { stat: "Art Basel", label: "December Anchor" },
  ],
  heroImage1: { src: "/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp", alt: "Wheat paste poster on pink urban wall in Miami" },
  heroImage2: { src: "/gallery/chalk-spray-stencil-sidewalk-guerrilla-marketing.webp", alt: "Chalk spray stencil sidewalk activation in Miami" },
  lastUpdated: "2026-04-25",
  pricingTiers: [
    { tier: "Single-Neighborhood Test", range: "$3,200 – $4,800", includes: "60–90 posters · 1 Miami neighborhood · Photo doc + GPS-logged install" },
    { tier: "Full-City Activation", range: "$13K – $22K", includes: "Wynwood + South Beach + Brickell + Design District · Multi-design rotation" },
    { tier: "Art Basel Saturation", range: "$25K – $50K", includes: "Early-December window · 8–10 weeks lead time · Wynwood + Design District focus" },
  ],
  spotlight: {
    eyebrow: "Miami Spotlight",
    title: "WYNWOOD + ART BASEL ARE WHAT MIAMI DOES",
    body:
      "Wynwood is the world's largest outdoor mural complex — wheat paste here lands as part of the visual culture rather than against it. Art Basel (early December) drives Miami's biggest event-window saturation campaign, with Wynwood + Design District + South Beach foot traffic spiking 8-10x over baseline; book 8-10 weeks ahead. Miami Music Week (March), Ultra (March), Super Bowl + Formula 1 windows round out the year-round event density. The medium is also called wild posting, flyposting, or street postering depending on the audience. Miami-led briefs can scale statewide to Tampa, Orlando, Jacksonville, Ft. Lauderdale, and St. Petersburg.",
    links: [
      { label: "Florida Statewide Page", href: "/locations/florida" },
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get a Miami Quote", href: "/contact" },
    ],
  },
  faqs: [
    { q: "Is wheat pasting legal in Miami?", a: "Yes on owner-authorized walls. Wynwood + the Design District are highly permissive — both neighborhoods have property-owner cultures built around large-format wall art (Wynwood Walls is the world's largest outdoor mural complex). Historic districts like Coral Gables need permits; we handle them." },
    { q: "What Miami neighborhoods work best for wheat pasting?", a: "Wynwood for arts/cultural reach (the world's densest mural corridor), South Beach for tourism + nightlife audience, Brickell for affluent tech/finance reach, Design District for luxury-brand activations, Little Havana for cultural credibility, Wynwood-adjacent Allapattah for emerging arts scene." },
    { q: "How much does a Miami wheat pasting campaign cost?", a: "Single-neighborhood test: $3,200-$4,800 for 60-90 posters. Full-city activation across Wynwood + South Beach + Brickell + Design District: $13K-$22K. Art Basel week saturation (early December) runs $25K-$50K." },
    { q: "When is the best time to run Miami campaigns?", a: "Year-round event density. Art Basel (early December) is the highest-attention window — book 8-10 weeks ahead. Miami Music Week (March), Ultra Music Festival (March), and Super Bowl/Formula 1 windows drive secondary saturation peaks. Hurricane season (June-November) requires risk planning." },
    { q: "Can you handle Florida statewide rollouts from Miami?", a: "Yes. Miami + Tampa + Orlando + Jacksonville + Ft. Lauderdale + St. Petersburg is a natural Florida statewide configuration — same crew rotation handles all six markets on coordinated rollouts." },
  ],
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
