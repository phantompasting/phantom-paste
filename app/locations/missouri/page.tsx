import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, KW_NATIONWIDE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: { absolute: "Wheat Pasting Missouri | Kansas City & St. Louis Campaigns" },
  description:
    "Wheat pasting across Missouri — Kansas City Crossroads Arts District, St. Louis Cherokee Street & The Grove. Two-city MO rollouts with GPS photo proof.",
  keywords: [
    "wheat pasting Missouri",
    "wheatpasting Missouri",
    "Missouri poster campaigns",
    "Missouri guerrilla marketing",
    "Missouri street media",
    "Kansas City wheat pasting",
    "St. Louis wheat pasting",
    "Crossroads Arts District advertising",
    "Cherokee Street poster campaigns",
    "statewide Missouri OOH",
    ...cityBuyerIntent("Missouri"),
    ...cityBuyerIntent("Kansas City"),
    ...KW_CITY_BASE,
    ...KW_NATIONWIDE.slice(0, 4),
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/missouri" },
  openGraph: {
    title: "Wheat Pasting Missouri",
    description:
      "Statewide wheat paste poster campaigns across Missouri — Kansas City, St. Louis, Columbia, Springfield.",
    url: "https://www.phantompasting.com/locations/missouri",
    images: [{
      url: "https://www.phantompasting.com/gallery/zach-john-king-im-what-you-get-wheat-paste-poster-grid-garage-door-nashville.webp",
      width: 1200,
      height: 630,
      alt: "Wheat paste poster campaign across Missouri — Phantom Pasting statewide rollouts",
    }],
  },
};

const data: CityPageData = {
  city: "Missouri",
  state: "MO",
  slug: "missouri",
  heroWord: "MISSOURI",
  intro:
    "Missouri is a two-city state with two real street cultures. Kansas City's Crossroads Arts District turns into a 10,000-person open gallery every First Friday, and St. Louis' Cherokee Street + The Grove carry the indie-music and LGBTQ+ nightlife audiences. One brief covers both metros — 5M+ people — with Columbia's Mizzou corridor as the college add-on.",
  whyTitle: "CROSSROADS FIRST FRIDAYS.\nCHEROKEE STREET ENERGY.",
  whyText:
    "KC's Crossroads is the model arts district — galleries, murals, and a First Friday crowd that treats walls as the main event. Westport and the River Market add nightlife and weekend-market foot traffic. In St. Louis, Cherokee Street is the DIY-music spine, The Grove runs the nightlife strip, and the Delmar Loop (one of the country's celebrated urban streets) funnels WashU students past 8 walkable blocks of venues. Both metros read posters natively.",
  neighborhoods: [
    { name: "Kansas City", desc: "Crossroads Arts District, Westport, River Market, 18th & Vine jazz district. First Fridays are the monthly saturation window." },
    { name: "St. Louis", desc: "Cherokee Street, The Grove, Delmar Loop, South Grand, downtown west. Indie-venue density plus WashU/SLU student traffic." },
    { name: "Columbia", desc: "The District (downtown), Mizzou campus edge. 30K+ students in a walkable core between KC and STL." },
    { name: "Springfield", desc: "Commercial Street (C-Street), downtown square. Southwest Missouri add-on market." },
  ],
  heroImage1: { src: "/gallery/zach-john-king-im-what-you-get-wheat-paste-poster-grid-garage-door-nashville.webp", alt: "Wheat paste poster grid on garage door" },
  heroImage2: { src: "/gallery/zach-john-king-im-what-you-get-wheat-paste-wall-street-view-nashville.webp", alt: "Wheat paste poster wall street view" },
  areaLabel: "CITIES SERVED",
  serviceAreaType: "State",
  lastUpdated: "2026-08-29",
  spotlight: {
    eyebrow: "Statewide Capability",
    title: "KC + STL ON ONE PRICE SHEET",
    body:
      "Kansas City and St. Louis are four hours apart, and almost no national vendor runs both without subcontracting. We route them as a single two-city rotation — install KC ahead of a First Friday, STL the same week, one geo-tagged report. Music campaigns get standing value here: both cities' venue corridors (recordBar, Off Broadway, The Pageant) sit inside our wall zones.",
    links: [
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get a Missouri Quote", href: "/contact" },
    ],
  },
  faqs: [
    {
      q: "Is wheat pasting legal in Missouri?",
      a: "Yes on owner-authorized walls. KC's Crossroads and STL's Cherokee Street have deep poster-and-mural cultures; standard private-property consent applies statewide. We work only from our authorized-wall database.",
    },
    {
      q: "What Missouri cities do you cover?",
      a: "Kansas City, St. Louis, Columbia, and Springfield as standing markets, plus St. Charles, Lawrence KS, and Overland Park on KC-metro briefs.",
    },
    {
      q: "How much does a Missouri campaign cost?",
      a: "Single-city MO campaigns run $2,800–$5,500. The KC + STL two-city rotation runs $6K–$10K; adding Columbia for a statewide sweep runs $9K–$14K.",
    },
    {
      q: "What's the best timing for a Kansas City campaign?",
      a: "Install the Wednesday–Thursday before a First Friday. The Crossroads' monthly art walk puts 10K+ people directly in front of the district's walls — it's the most efficient recurring window in the state.",
    },
    {
      q: "How long do posters last in Missouri weather?",
      a: "4–6 weeks in season. Summer humidity and winter freeze weeks trim the edges; installs are scheduled around rain windows and every placement is photo-documented within 48 hours.",
    },
  ],
  localBusiness: {
    name: "Phantom Pasting — Missouri",
    description:
      "Wheat pasting and poster campaign services across Missouri — Kansas City, St. Louis, Columbia, Springfield.",
    url: "https://www.phantompasting.com/locations/missouri",
  },
};

export default function MissouriPage() {
  return <CityPageTemplate data={data} />;
}
