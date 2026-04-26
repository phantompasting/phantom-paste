import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, KW_NATIONWIDE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: "Wheat Pasting Nevada",
  description:
    "Wheat pasting & street media across Nevada — Las Vegas, Henderson, Reno. Statewide NV rollouts.",
  keywords: [
    "wheat pasting Nevada",
    "wheatpasting Nevada",
    "Nevada poster campaigns",
    "Nevada guerrilla marketing",
    "Nevada street media",
    "Nevada flyposting",
    "Nevada OOH advertising",
    "Las Vegas wheat pasting",
    "Henderson wheat pasting",
    "Reno poster campaigns",
    "statewide Nevada OOH",
    ...cityBuyerIntent("Nevada"),
    ...cityBuyerIntent("Las Vegas"),
    ...KW_CITY_BASE,
    ...KW_NATIONWIDE.slice(0, 4),
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/nevada" },
  openGraph: {
    title: "Wheat Pasting Nevada",
    description:
      "Statewide wheat paste poster campaigns across Nevada — Las Vegas, Henderson, Reno.",
    url: "https://www.phantompasting.com/locations/nevada",
    images: [{
      url: "https://www.phantompasting.com/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp",
      width: 1200,
      height: 630,
      alt: "Wheat paste poster campaign across Nevada — Phantom Pasting statewide rollouts",
    }],
  },
};

const data: CityPageData = {
  city: "Nevada",
  state: "NV",
  slug: "nevada",
  heroWord: "NEVADA",
  intro:
    "Nevada is a Vegas-led market with two secondary metros that mainstream agencies skip. Vegas Strip + Fremont East + Arts District drive year-round event-window saturation; Henderson's Water Street District + downtown carry the suburban-affluent overlay; Reno's Midtown + Riverwalk pulls UNR + casino-tourism foot traffic. Desert install logic + 110°F summer adjustments apply.",
  whyTitle: "NV IS VEGAS-DRIVEN\nWITH RENO + HENDERSON.",
  whyText:
    "Vegas dominates Nevada — CES, NAB, Magic Week, Defcon, EDC, every conference rotation drives a fresh saturation window. The Strip + Fremont East + the 18b Arts District each carry their own audiences. But Henderson is the country's fastest-growing suburb (Water Street District + Green Valley Ranch corridor), and Reno's Midtown is one of the West's most under-rated walkable creative cores. Statewide NV rollouts capture all three on coordinated briefs.",
  neighborhoods: [
    { name: "Las Vegas", slug: "las-vegas", desc: "The Strip, Fremont East, Arts District (18b), Downtown Container Park, Chinatown corridor. Volume leader; conference + tourism + nightlife overlap." },
    { name: "Henderson", desc: "Water Street District, Green Valley Ranch corridor, downtown Henderson. Country's fastest-growing major suburb." },
    { name: "Reno", desc: "Midtown, downtown Reno, Riverwalk, UNR campus zone. UNR + casino-tourism + craft-beer creative scene." },
    { name: "North Las Vegas", desc: "Aliante corridor, Craig Ranch. Vegas-metro overflow with lower wall-space competition." },
    { name: "Carson City", desc: "Downtown Carson City. State capital — small market, low competition, government workforce." },
    { name: "Sparks", desc: "Victorian Square, downtown Sparks. Reno-adjacent metro with growing arts scene." },
  ],
  heroImage1: { src: "/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp", alt: "Wheat paste poster wall in Nevada" },
  heroImage2: { src: "/gallery/sticker-campaign-street-intersection-urban.webp", alt: "Sticker campaign at Nevada street intersection" },
  areaLabel: "CITIES SERVED",
  serviceAreaType: "State",
  lastUpdated: "2026-04-25",
  spotlight: {
    eyebrow: "Statewide Capability",
    title: "VEGAS + HENDERSON + RENO ON ONE BRIEF",
    body:
      "Most agencies route Nevada to Las Vegas-only. We run Vegas plus Henderson, Reno, North Las Vegas, Carson City, and Sparks from coordinated crew rotations. Vegas conference-week deployments (CES, NAB, Magic Week, Defcon, EDC) are a specialty — saturation timed to the event window with documented next-morning photo proof. Reno's Midtown is one of NV's most under-served opportunities for brands willing to deploy beyond Vegas.",
    links: [
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get a Nevada Quote", href: "/contact" },
    ],
  },
  faqs: [
    {
      q: "Is wheat pasting legal in Nevada?",
      a: "Yes on owner-authorized walls. Vegas is highly permissive on private walls with property-owner consent. Strip-adjacent properties + Fremont East + the Arts District are the highest-volume corridors. Henderson + Reno follow similar patterns.",
    },
    {
      q: "Can you handle conference-week saturation in Vegas?",
      a: "Yes — it's a specialty. CES (January), NAB (April), Magic Week (February + August), Defcon (August), EDC (May) all drive 5-10x baseline foot traffic in Strip-adjacent and Fremont East corridors. Saturation campaigns timed to event windows book 6-8 weeks ahead.",
    },
    {
      q: "How does desert heat affect Vegas campaigns?",
      a: "Summer (June-September) install windows shift to 9 p.m.-2 a.m. when surface temps drop. July-August daytime installs fail — 110°F+ heat flash-sets paste. October-April is the reliable window.",
    },
    {
      q: "What Nevada cities do you cover?",
      a: "All major NV metros: Las Vegas, Henderson, Reno, North Las Vegas, Carson City, Sparks, plus Mesquite + Boulder City for specialty briefs.",
    },
    {
      q: "How much does a Nevada campaign cost?",
      a: "Vegas-only: $3,500-$6,800 (conference weeks book at the higher end). Statewide NV rollouts (Vegas + Henderson + Reno) run $11K-$18K with the multi-city volume discount.",
    },
  ],
  localBusiness: {
    name: "Phantom Pasting — Nevada",
    description:
      "Wheat pasting and poster campaign services across Nevada — Las Vegas, Henderson, Reno.",
    url: "https://www.phantompasting.com/locations/nevada",
  },
};

export default function NevadaPage() {
  return <CityPageTemplate data={data} />;
}
