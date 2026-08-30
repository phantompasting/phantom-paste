import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, KW_NATIONWIDE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: { absolute: "Wheat Pasting Indiana | Indianapolis Campaigns" },
  description:
    "Wheat pasting across Indiana — Indianapolis Fountain Square, Mass Ave, Broad Ripple, Bloomington. Statewide IN poster rollouts with GPS photo proof.",
  keywords: [
    "wheat pasting Indiana",
    "wheatpasting Indiana",
    "Indiana poster campaigns",
    "Indiana guerrilla marketing",
    "Indiana street media",
    "Indianapolis wheat pasting",
    "Indy poster campaigns",
    "Fountain Square street advertising",
    "Bloomington guerrilla marketing",
    "statewide Indiana OOH",
    ...cityBuyerIntent("Indiana"),
    ...cityBuyerIntent("Indianapolis"),
    ...KW_CITY_BASE,
    ...KW_NATIONWIDE.slice(0, 4),
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/indiana" },
  openGraph: {
    title: "Wheat Pasting Indiana",
    description:
      "Statewide wheat paste poster campaigns across Indiana — Indianapolis, Bloomington, Fort Wayne, South Bend.",
    url: "https://www.phantompasting.com/locations/indiana",
    images: [{
      url: "https://www.phantompasting.com/gallery/dont-fall-off-wheat-paste-building-bike-rack.webp",
      width: 1200,
      height: 630,
      alt: "Wheat paste poster campaign across Indiana — Phantom Pasting statewide rollouts",
    }],
  },
};

const data: CityPageData = {
  city: "Indiana",
  state: "IN",
  slug: "indiana",
  heroWord: "INDIANA",
  intro:
    "Indianapolis carries Indiana — Fountain Square's dive-bar arts strip, Mass Ave's gallery row, and Broad Ripple's nightlife corridor give the city three distinct wheat paste audiences, with the Cultural Trail stitching them together on foot. Bloomington adds IU's 47K students; South Bend adds Notre Dame's national event weekends.",
  whyTitle: "INDY'S CULTURAL TRAIL\nIS A FOOT-TRAFFIC MACHINE.",
  whyText:
    "The Indianapolis Cultural Trail is an 8-mile pedestrian loop connecting Fountain Square, Mass Ave, and downtown — a purpose-built corridor of exactly the foot traffic wheat paste wants. Fountain Square keeps an analog, music-venue character; Mass Ave runs galleries and theaters; Broad Ripple carries the late-night crowd. Bloomington's Kirkwood Ave funnels the entire IU campus through six walkable blocks, and Gen Con + the Indy 500 bring recurring six-figure event crowds downtown.",
  neighborhoods: [
    { name: "Indianapolis", desc: "Fountain Square, Mass Ave, Broad Ripple, downtown/Cultural Trail, Fletcher Place. State anchor with three distinct corridor audiences." },
    { name: "Bloomington", desc: "Kirkwood Avenue, courthouse square, IU campus edge. 47K students in a compact walkable core." },
    { name: "Fort Wayne", desc: "The Landing, downtown riverfront. Northeast Indiana's growing culture district." },
    { name: "South Bend", desc: "Downtown/East Bank, Notre Dame edge. Football Saturdays bring 80K+ to a small-city footprint." },
  ],
  heroImage1: { src: "/gallery/dont-fall-off-wheat-paste-building-bike-rack.webp", alt: "Wheat paste poster on building wall" },
  heroImage2: { src: "/gallery/biodance-wheat-paste-poster-wall-los-angeles.webp", alt: "Wheat paste poster wall" },
  areaLabel: "CITIES SERVED",
  serviceAreaType: "State",
  lastUpdated: "2026-08-29",
  spotlight: {
    eyebrow: "Statewide Capability",
    title: "EVENT-WINDOW INDY",
    body:
      "Indianapolis hosts outsized recurring events for its footprint — the Indy 500 (300K+ attendance, the largest single-day sporting event in the world), Gen Con (70K badge-holders downtown for four days), and NCAA tournaments. Saturating Fountain Square + Mass Ave + the Cultural Trail the week before an event window is the highest-leverage play in the state.",
    links: [
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get an Indiana Quote", href: "/contact" },
    ],
  },
  faqs: [
    {
      q: "Is wheat pasting legal in Indiana?",
      a: "Yes on owner-authorized walls. Indianapolis' Fountain Square and Mass Ave arts districts have established poster cultures; standard private-property consent applies statewide. We work only from our own authorized-wall database.",
    },
    {
      q: "What Indiana cities do you cover?",
      a: "Indianapolis, Bloomington, Fort Wayne, and South Bend as standing markets, plus West Lafayette (Purdue), Muncie (Ball State), and Evansville on a per-campaign basis.",
    },
    {
      q: "How much does an Indiana campaign cost?",
      a: "Single-city IN campaigns run $2,800–$5,500. An Indy + Bloomington combined brief runs $6K–$9K; statewide runs $9K–$15K on one price sheet.",
    },
    {
      q: "Can you time campaigns to the Indy 500 or Gen Con?",
      a: "Yes — both are standing event windows. Race-week installs go up the Monday–Wednesday before Memorial Day weekend; Gen Con briefs target downtown + Mass Ave the week prior. Both book 4–6 weeks ahead.",
    },
    {
      q: "How long do posters last in Indiana weather?",
      a: "4–6 weeks in season. Midwest freeze weeks we schedule around; every placement is photo-documented within 48 hours so proof is locked regardless of weather.",
    },
  ],
  localBusiness: {
    name: "Phantom Pasting — Indiana",
    description:
      "Wheat pasting and poster campaign services across Indiana — Indianapolis, Bloomington, Fort Wayne, South Bend.",
    url: "https://www.phantompasting.com/locations/indiana",
  },
};

export default function IndianaPage() {
  return <CityPageTemplate data={data} />;
}
