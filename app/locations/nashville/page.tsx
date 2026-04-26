import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: "Wheat Pasting Nashville",
  description:
    "Wheat pasting in Nashville — poster campaigns across East Nashville, The Gulch, 12 South, Music Row, Germantown. Album launches & festival saturation.",
  keywords: [
    "wheat pasting Nashville",
    "Nashville poster campaigns",
    "Nashville guerrilla marketing",
    "Nashville street media",
    "Nashville street postering",
    "Nashville flyposting",
    "Nashville OOH advertising",
    "East Nashville wheat pasting",
    "The Gulch poster campaigns",
    "Music Row street advertising",
    "12 South guerrilla marketing",
    "Nashville album launch OOH",
    ...cityBuyerIntent("Nashville"),
    ...KW_CITY_BASE,
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/nashville" },
  openGraph: {
    title: "Wheat Pasting Nashville",
    description:
      "Large-format wheat paste poster campaigns across Nashville. East Nashville, The Gulch, 12 South, Music Row.",
    url: "https://www.phantompasting.com/locations/nashville",
    images: [{
      url: "https://www.phantompasting.com/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp",
      width: 1200,
      height: 630,
      alt: "Wheat paste poster campaign in Nashville",
    }],
  },
};

const data: CityPageData = {
  city: "Nashville",
  state: "TN",
  slug: "nashville",
  heroWord: "NASHVILLE",
  intro:
    "Nashville is a music-industry capital with walkable creative cores in East Nashville, The Gulch, 12 South, Germantown, and Music Row. Album launches, tour announcements, and CMA/festival weeks drive year-round street-marketing windows. We deploy large-format wheat paste, snipes, and chalk stencils on owner-authorized walls across all six neighborhoods.",
  whyTitle: "MUSIC CITY\nLIVES ON WALLS.",
  whyText:
    "Nashville is unique in US street marketing — the music industry IS the local economy, which means album drops + tour announcements + festival lineups make street walls a primary launch channel, not an alternative one. East Nashville's creative class documents and reposts every wall they pass; The Gulch and 12 South's foot traffic peaks during weekend tourism; Music Row carries industry insiders. CMA Fest week (June) drives 5x baseline foot traffic across the central districts.",
  neighborhoods: [
    { name: "East Nashville", desc: "Five Points, Eastland, Riverside Village. Creative-class hub; indie music + craft cocktail density." },
    { name: "The Gulch", desc: "12th Avenue South corridor, 11th Avenue. New-build mixed-use with the city's most-photographed mural walls." },
    { name: "12 South", desc: "12th Avenue South retail strip. Walkable boutique + restaurant corridor with weekend tourism foot traffic." },
    { name: "Music Row", desc: "16th + 17th Avenue South. Music-industry HQ corridor; label offices + recording studios + publisher row." },
    { name: "Germantown", desc: "5th Avenue North, Buchanan. Walkable historic neighborhood with restaurant + arts overlay." },
    { name: "Wedgewood-Houston", desc: "WeHo Arts District, Houston Street. Emerging arts corridor with the highest mural-wall density in the city." },
  ],
  heroStats: [
    { stat: "Album Launch", label: "Specialty" },
    { stat: "CMA Fest", label: "June Anchor" },
    { stat: "6", label: "Districts" },
  ],
  heroImage1: { src: "/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp", alt: "Wheat paste poster wall in Nashville" },
  heroImage2: { src: "/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp", alt: "Pole wrap guerrilla advertising in Nashville at night" },
  lastUpdated: "2026-04-25",
  spotlight: {
    eyebrow: "Music City Spotlight",
    title: "ALBUM LAUNCH + TOUR PROMO IS WHAT NASHVILLE DOES",
    body:
      "Music industry briefs are the highest-volume use case in Nashville. Album-launch campaigns typically run a 4-week sequence: typography teaser week -3, lookbook reveal week -1, drop-day full-city saturation, single-art rotation week +2. CMA Fest week (June) and Americana Fest week (September) drive the city's biggest event-window saturation campaigns — book 6-8 weeks ahead. The medium is also called wild posting, flyposting, or street postering depending on the audience; wheat pasting names the actual material.",
    links: [
      { label: "Guerrilla Marketing for Music", href: "/blog/guerrilla-marketing-for-music" },
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get a Nashville Quote", href: "/contact" },
    ],
  },
  faqs: [
    {
      q: "Is wheat pasting legal in Nashville?",
      a: "Yes on owner-authorized walls. Nashville is permissive on private walls with property-owner consent — the city's mural-friendly culture (especially Wedgewood-Houston Arts District) makes wheat paste land naturally. Historic-district walls (downtown core) need permits; we handle them.",
    },
    {
      q: "What Nashville neighborhoods work best for wheat pasting?",
      a: "East Nashville (Five Points + Eastland), The Gulch, 12 South, Wedgewood-Houston, and Germantown. Music Row carries industry-insider visibility. Downtown Lower Broadway is high-volume tourism but lower-quality walls; we usually recommend the residential creative corridors instead.",
    },
    {
      q: "How much does a Nashville wheat pasting campaign cost?",
      a: "Single-neighborhood test: $2,800-$4,200 for 60-90 posters. Full-city activation across 4-5 districts: $8K-$14K. Album-launch sequence (4-week rotating refresh): $14K-$28K depending on city + creative complexity.",
    },
    {
      q: "When is the best time to run Nashville campaigns?",
      a: "CMA Fest week (June) is the highest-attention window — book 6-8 weeks ahead. Americana Fest (September), tin pan south (March), and the NHL playoffs (April-May) drive secondary saturation windows. Album-launch campaigns are anchored to the artist's release calendar.",
    },
    {
      q: "How quickly can a Nashville campaign launch?",
      a: "Standard turnaround is 7-10 business days from approved brief. Rush launches (4-5 days) are possible for single-neighborhood activations. Album-launch sequences need 3-4 weeks to coordinate the multi-week rotation.",
    },
  ],
  localBusiness: {
    name: "Phantom Pasting — Nashville",
    description:
      "Wheat pasting and poster campaign services in Nashville, TN. Street postering across East Nashville, The Gulch, 12 South, Music Row, Germantown.",
    url: "https://www.phantompasting.com/locations/nashville",
  },
};

export default function NashvillePage() {
  return <CityPageTemplate data={data} />;
}
