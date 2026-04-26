import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: "Wheat Pasting Phoenix",
  description:
    "Wheat pasting in Phoenix — poster campaigns across Roosevelt Row, Grand Avenue, Melrose District, downtown Tempe. Desert-adapted recipes.",
  keywords: [
    "wheat pasting Phoenix",
    "Phoenix poster campaigns",
    "Phoenix guerrilla marketing",
    "Phoenix street media",
    "Phoenix street postering",
    "Phoenix flyposting",
    "Phoenix OOH advertising",
    "Roosevelt Row wheat pasting",
    "Grand Avenue Phoenix poster campaigns",
    "Melrose District street advertising",
    "Tempe guerrilla marketing",
    "Scottsdale OOH",
    ...cityBuyerIntent("Phoenix"),
    ...KW_CITY_BASE,
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/phoenix" },
  openGraph: {
    title: "Wheat Pasting Phoenix",
    description: "Large-format wheat paste campaigns across Phoenix. Roosevelt Row, Grand Avenue, Melrose District, Tempe.",
    url: "https://www.phantompasting.com/locations/phoenix",
    images: [{ url: "https://www.phantompasting.com/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp", width: 1200, height: 630, alt: "Wheat paste poster wall in Phoenix" }],
  },
};

const data: CityPageData = {
  city: "Phoenix",
  state: "AZ",
  slug: "phoenix",
  heroWord: "PHOENIX",
  intro:
    "Phoenix campaigns require desert-adapted recipes. Roosevelt Row arts district, Grand Avenue's mural corridor, Melrose District on 7th Avenue, and downtown Tempe carry the city's walkable foot traffic. Popcorn cement walls take a thicker paste; summer install windows shift to 9 p.m.-2 a.m. when surface temps drop below flash-set range.",
  whyTitle: "PHOENIX IS\nDESERT WHEAT PASTING.",
  whyText:
    "Most agencies don't run Phoenix because the desert install logic scares them off — 110°F summer heat, popcorn-cement walls, monsoon-season wash-off risk. We've adapted: thicker paste recipes for popcorn cement, night-only summer windows, monsoon-season risk planning, water sourcing from 24-hour car washes when Home Depot is closed. Roosevelt Row + Grand Avenue carry the densest mural-friendly walls. ASU's 70K+ undergrad density anchors Tempe.",
  neighborhoods: [
    { name: "Roosevelt Row", desc: "Roosevelt + Garfield streets, 4th-7th Ave. Phoenix's premier arts district + First Friday foot traffic anchor." },
    { name: "Grand Avenue", desc: "Grand Avenue between 7th + 19th. Mural corridor + walkable creative-class density." },
    { name: "Melrose District", desc: "7th Avenue between Camelback + Indian School. Walkable retail + restaurant strip + LGBTQ+ cultural anchor." },
    { name: "Downtown Tempe", desc: "Mill Avenue, ASU campus zone. ASU's 70K+ undergrad density drives year-round foot traffic." },
    { name: "Old Town Scottsdale", desc: "Scottsdale Road between Indian School + Camelback. Premium tourism + luxury-brand activation corridor." },
    { name: "Downtown Phoenix", desc: "Central Avenue, downtown core. Government workforce + light-rail commuter foot traffic." },
  ],
  heroImage1: { src: "/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp", alt: "Wheat paste poster wall in Phoenix" },
  heroImage2: { src: "/gallery/chalk-spray-stencil-sidewalk-guerrilla-marketing.webp", alt: "Chalk spray stencil activation in Phoenix" },
  lastUpdated: "2026-04-25",
  spotlight: {
    eyebrow: "Desert Install Spotlight",
    title: "POPCORN CEMENT + 110°F + MONSOON SEASON",
    body:
      "Phoenix campaigns need three operational adjustments most agencies skip: thicker paste recipes for popcorn-cement walls (10-15% more flour or heavy-tack commercial formulas), night-only install windows from May-September (9 p.m.-2 a.m. when surface temps drop below flash-set range), and monsoon-season risk planning (July-September can wash posters off walls within 48 hours of install if storms hit). October-April is the reliable window. The medium is also called wild posting, flyposting, or street postering depending on the audience.",
    links: [
      { label: "Phoenix Field Guide", href: "/blog/wheat-pasting-phoenix" },
      { label: "Arizona State Page", href: "/locations/arizona" },
      { label: "Get a Phoenix Quote", href: "/contact" },
    ],
  },
  faqs: [
    { q: "Does wheat paste work in Phoenix summer heat?", a: "Yes, but only with adjustments. Install windows shift to 9 p.m.-2 a.m., buckets stay lidded, paste recipe runs slightly wetter, and walls get a pre-install spray-bottle mist to cool the surface." },
    { q: "What's different about Phoenix walls?", a: "Most Phoenix commercial buildings use popcorn cement — a textured stucco that eats thin paste. Recipes need 10-15% more flour, or switch to a heavy-tack commercial formula that fills the wall's high points." },
    { q: "Is wheat pasting legal in Phoenix?", a: "Yes on authorized private walls. Phoenix Code §23-52 covers unlawful posting but is almost never enforced on clean commercial campaigns. Scottsdale public right-of-way is stricter than Phoenix proper." },
    { q: "What Phoenix neighborhoods work for paste?", a: "Roosevelt Row is the highest-signal corridor, followed by Grand Avenue, the Melrose District on 7th Ave, and downtown Tempe for ASU reach. Scottsdale Old Town for luxury activations." },
    { q: "When should you avoid Phoenix paste campaigns?", a: "July and August daytime installs fail — 105°F+ heat flash-sets paste. Monsoon season (July-September) can wash posters off walls within 48 hours of install if storms hit. October-April is the reliable window." },
  ],
  localBusiness: {
    name: "Phantom Pasting — Phoenix",
    description: "Wheat pasting and poster campaign services in Phoenix, AZ. Street postering across Roosevelt Row, Grand Avenue, Melrose District, Tempe.",
    url: "https://www.phantompasting.com/locations/phoenix",
  },
};

export default function PhoenixPage() {
  return <CityPageTemplate data={data} />;
}
