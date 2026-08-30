import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, KW_NATIONWIDE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: { absolute: "Wheat Pasting Maryland | Baltimore Campaigns" },
  description:
    "Wheat pasting across Maryland — Baltimore Station North, Hampden, Fells Point, plus Silver Spring and Annapolis. DC-adjacent rollouts with photo proof.",
  keywords: [
    "wheat pasting Maryland",
    "wheatpasting Maryland",
    "Maryland poster campaigns",
    "Maryland guerrilla marketing",
    "Maryland street media",
    "Baltimore wheat pasting",
    "Baltimore poster campaigns",
    "Station North street advertising",
    "Silver Spring guerrilla marketing",
    "statewide Maryland OOH",
    ...cityBuyerIntent("Maryland"),
    ...cityBuyerIntent("Baltimore"),
    ...KW_CITY_BASE,
    ...KW_NATIONWIDE.slice(0, 4),
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/maryland" },
  openGraph: {
    title: "Wheat Pasting Maryland",
    description:
      "Statewide wheat paste poster campaigns across Maryland — Baltimore, Silver Spring, Annapolis, Frederick.",
    url: "https://www.phantompasting.com/locations/maryland",
    images: [{
      url: "https://www.phantompasting.com/gallery/biodance-making-a-splash-wheat-paste-underpass-wall-los-angeles.webp",
      width: 1200,
      height: 630,
      alt: "Wheat paste poster campaign across Maryland — Phantom Pasting statewide rollouts",
    }],
  },
};

const data: CityPageData = {
  city: "Maryland",
  state: "MD",
  slug: "maryland",
  heroWord: "MARYLAND",
  intro:
    "Baltimore is the anchor — Station North is a state-designated arts district built around exactly this medium, and Hampden, Fells Point, and Mount Vernon each add their own corridor audience. Silver Spring extends any campaign into the DC metro, and Annapolis brings the waterfront-capital crowd.",
  whyTitle: "BALTIMORE'S ARTS DISTRICTS\nWERE MADE FOR THIS.",
  whyText:
    "Station North holds MICA's campus, the Charles Theatre, and a decade of sanctioned murals — one of the most paste-fluent zones on the East Coast. Hampden's 36th Street (The Avenue) runs quirky-retail foot traffic, Fells Point's cobblestone bar district packs weekend crowds, and Mount Vernon carries the museum-and-university audience. Johns Hopkins, MICA, and Towson add 40K+ students. Silver Spring's downtown puts placements one Red Line ride from DC.",
  neighborhoods: [
    { name: "Baltimore", desc: "Station North Arts District, Hampden (The Avenue), Fells Point, Mount Vernon, Federal Hill, Remington. The state's volume anchor." },
    { name: "Silver Spring", desc: "Downtown Silver Spring, Fenton Village. DC Red Line audience at Maryland pricing." },
    { name: "Annapolis", desc: "Main Street, City Dock, Maryland Ave. Capital + Naval Academy + sailing-tourism foot traffic." },
    { name: "Frederick", desc: "Historic downtown, Carroll Creek. Fast-growing arts-friendly main street between Baltimore and DC." },
  ],
  heroImage1: { src: "/gallery/biodance-making-a-splash-wheat-paste-underpass-wall-los-angeles.webp", alt: "Wheat paste posters on underpass wall" },
  heroImage2: { src: "/gallery/fashionpass-wheat-paste-campaign-poster-wall.webp", alt: "Wheat paste campaign poster wall" },
  areaLabel: "CITIES SERVED",
  serviceAreaType: "State",
  lastUpdated: "2026-08-29",
  spotlight: {
    eyebrow: "Statewide Capability",
    title: "THE BALTIMORE–DC CORRIDOR PLAY",
    body:
      "Maryland briefs pair naturally with Washington DC: Baltimore + Silver Spring + the District covers the full Baltimore–Washington corridor — 9M+ people — in one coordinated install week. Artscape (America's largest free arts festival) and Preakness week are Baltimore's standing high-density windows; MICA and Hopkins move-in weeks anchor the student calendar.",
    links: [
      { label: "Washington DC Campaigns", href: "/locations/washington-dc" },
      { label: "Get a Maryland Quote", href: "/contact" },
    ],
  },
  faqs: [
    {
      q: "Is wheat pasting legal in Maryland?",
      a: "Yes on owner-authorized walls. Baltimore's arts districts (Station North, Highlandtown) are explicitly built around street-level art; standard private-property consent applies statewide. We work only from our authorized-wall database.",
    },
    {
      q: "What Maryland cities do you cover?",
      a: "Baltimore, Silver Spring, Annapolis, and Frederick as standing markets, plus College Park (UMD), Bethesda, and Towson on a per-campaign basis.",
    },
    {
      q: "How much does a Maryland campaign cost?",
      a: "Single-city MD campaigns run $2,800–$5,500. Baltimore + Silver Spring runs $5K–$8K; the full Baltimore–DC corridor including the District runs $9K–$15K.",
    },
    {
      q: "Can you combine Maryland with a Washington DC campaign?",
      a: "Yes — it's the standard configuration. Silver Spring and College Park installs ride along with DC briefs on one geo-tagged report, extending District campaigns to the Maryland side of the Red and Green lines.",
    },
    {
      q: "How long do posters last in Maryland weather?",
      a: "4–6 weeks typical. Chesapeake humidity is the main factor in summer; every placement is photo-documented within 48 hours so proof is locked regardless of weather.",
    },
  ],
  localBusiness: {
    name: "Phantom Pasting — Maryland",
    description:
      "Wheat pasting and poster campaign services across Maryland — Baltimore, Silver Spring, Annapolis, Frederick.",
    url: "https://www.phantompasting.com/locations/maryland",
  },
};

export default function MarylandPage() {
  return <CityPageTemplate data={data} />;
}
