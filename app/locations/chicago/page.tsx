import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: "Wheat Pasting Chicago",
  description:
    "Wheat pasting in Chicago — poster campaigns across Wicker Park, Wrigleyville, Logan Square, and the Loop. Large-format street posters. Get a quote.",
  keywords: [
    "wheat pasting Chicago",
    "Chicago poster campaigns",
    "Chicago guerrilla marketing",
    "street postering Chicago",
    "wheat paste posters IL",
    "Chicago street media",
    "Chicago street marketing agency",
    "Chicago flyposting",
    "Chicago OOH advertising",
    "Wicker Park wheat pasting",
    "Logan Square poster campaigns",
    "Wrigleyville street advertising",
    "Pilsen guerrilla marketing",
    "Loop OOH advertising",
    ...cityBuyerIntent("Chicago"),
    ...KW_CITY_BASE,
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/chicago" },
  openGraph: {
    title: "Wheat Pasting Chicago",
    description: "Large-format wheat paste poster campaigns across Chicago. Wicker Park, Logan Square, Wrigleyville.",
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
  intro: "Chicago's neighborhoods are built for street marketing — walkable blocks, dense populations, and a culture that supports local art and independent brands. We deploy across Wicker Park, Logan Square, Wrigleyville, and the Loop. Phantom Pasting has run wheat paste campaigns for national brands and independent artists across Chicago's most walkable streets.",
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
  heroStats: [
    { stat: "6", label: "Neighborhoods" },
    { stat: "Lolla + Pitchfork", label: "Festival Windows" },
    { stat: "Game-Day", label: "Saturation Specialty" },
  ],
  heroImage1: { src: "/gallery/fashionpass-wheat-paste-campaign-poster-wall.webp", alt: "Wheat paste campaign poster wall in Chicago" },
  heroImage2: { src: "/gallery/sticker-campaign-street-intersection-urban.webp", alt: "Sticker campaign at Chicago street intersection" },
  lastUpdated: "2026-04-25",
  spotlight: {
    eyebrow: "Chicago Spotlight",
    title: "WICKER PARK + LOGAN SQUARE + LOLLA WINDOWS",
    body:
      "Chicago's Wicker Park (Milwaukee Ave) and Logan Square (Milwaukee + Diversey) are two of the densest walkable creative-class corridors in the Midwest — wheat paste lands on owner-authorized walls that already feature mural + street-art density. Lollapalooza (early August) drives 5x baseline foot traffic across the Loop + Wicker Park + Logan Square; Pitchfork Festival (July) anchors a smaller but premium music-industry window. The medium is also called wild posting, flyposting, or street postering depending on the audience. Chicago-led briefs can scale to Naperville + Champaign-Urbana + Rockford on a single Illinois statewide rollout.",
    links: [
      { label: "Illinois Statewide Page", href: "/locations/illinois" },
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get a Chicago Quote", href: "/contact" },
    ],
  },
  faqs: [
    { q: "Is wheat pasting legal in Chicago?", a: "Yes on owner-authorized walls. Chicago is permissive on private walls with property-owner consent. The Pilsen + Wicker Park mural-friendly cultures make wheat paste land naturally. Historic districts need permits; we handle them." },
    { q: "What Chicago neighborhoods work best for wheat pasting?", a: "Wicker Park (Milwaukee Ave) for retail/cultural reach, Logan Square for arts + walkability, Wrigleyville for game-day saturation, the Loop for downtown commuter density, Pilsen for mural-corridor audience, Lincoln Park for affluent walkable retail." },
    { q: "How much does a Chicago wheat pasting campaign cost?", a: "Single-neighborhood test: $2,800-$4,200 for 60-90 posters. Full-city activation across 4-5 districts: $10K-$16K. Lollapalooza or Pitchfork Festival saturation runs $14K-$28K." },
    { q: "When is the best time to run Chicago campaigns?", a: "May-October (mild weather). Lollapalooza (early August), Pitchfork Festival (July), Cubs/Sox/Bulls/Bears game days, and Riot Fest (September) drive the highest event-window saturation. Winter installs (December-March) require winter-formulated paste." },
    { q: "Can you handle Illinois statewide rollouts from Chicago?", a: "Yes. Chicago + Naperville + Champaign-Urbana + Rockford + Peoria + Springfield is a natural Illinois statewide configuration — same crew rotation handles all six markets on coordinated rollouts." },
  ],
  // Service schema base — CityPageTemplate enriches with @type, provider,
  // areaServed, and offers. Field stays named `localBusiness` for type
  // compat with the shared template interface.
  localBusiness: {
    name: "Phantom Pasting — Chicago",
    description: "Wheat pasting and poster campaign services in Chicago, IL. Street postering across Wicker Park, Logan Square, Wrigleyville, and the Loop.",
    url: "https://www.phantompasting.com/locations/chicago",
  },
};

export default function ChicagoPage() {
  return <CityPageTemplate data={data} />;
}
