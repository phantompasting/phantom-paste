import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, KW_NATIONWIDE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: { absolute: "Wheat Pasting Michigan | Detroit & Ann Arbor Campaigns" },
  description:
    "Wheat pasting across Michigan — Detroit Eastern Market, Corktown, Ann Arbor, Grand Rapids. Statewide MI poster rollouts with GPS photo proof.",
  keywords: [
    "wheat pasting Michigan",
    "wheatpasting Michigan",
    "Michigan poster campaigns",
    "Michigan guerrilla marketing",
    "Michigan street media",
    "Detroit wheat pasting",
    "Ann Arbor wheat pasting",
    "Grand Rapids poster campaigns",
    "Eastern Market street advertising",
    "Corktown guerrilla marketing",
    "statewide Michigan OOH",
    ...cityBuyerIntent("Michigan"),
    ...cityBuyerIntent("Detroit"),
    ...KW_CITY_BASE,
    ...KW_NATIONWIDE.slice(0, 4),
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/michigan" },
  openGraph: {
    title: "Wheat Pasting Michigan",
    description:
      "Statewide wheat paste poster campaigns across Michigan — Detroit, Grand Rapids, Ann Arbor, Lansing.",
    url: "https://www.phantompasting.com/locations/michigan",
    images: [{
      url: "https://www.phantompasting.com/gallery/arsenal-boxing-wheat-paste-poster-wall-street-view-los-angeles.webp",
      width: 1200,
      height: 630,
      alt: "Wheat paste poster campaign across Michigan — Phantom Pasting statewide rollouts",
    }],
  },
};

const data: CityPageData = {
  city: "Michigan",
  state: "MI",
  slug: "michigan",
  heroWord: "MICHIGAN",
  intro:
    "Detroit is one of America's great wall cities — Eastern Market's mural program, Corktown's revival strip, and Midtown's Cass Corridor give wheat paste a home few markets can match. Add Ann Arbor's 50K-student campus core and Grand Rapids' ArtPrize-trained audience and Michigan rewards street campaigns that respect its culture.",
  whyTitle: "DETROIT WALLS.\nBUILT FOR PASTE.",
  whyText:
    "Eastern Market runs one of the largest curated mural programs in the country — its brick sheds and warehouse walls have trained Detroiters to read walls as media. Corktown's Michigan Avenue strip and Midtown's Cass Corridor add restaurant and gallery foot traffic. Out west, Grand Rapids hosts ArtPrize, the city-wide art event that turns the whole downtown into an exhibition. Ann Arbor's State Street + South U corridors put University of Michigan's 50K+ students in front of every placement.",
  neighborhoods: [
    { name: "Detroit", desc: "Eastern Market, Corktown, Midtown/Cass Corridor, Hamtramck edge, Riverfront. The state's anchor — warehouse-district wall stock built for large format." },
    { name: "Grand Rapids", desc: "Downtown/Monroe Center, Bridge Street, Eastown. ArtPrize audience; West Michigan's culture hub." },
    { name: "Ann Arbor", desc: "State Street, South University, Main Street, Kerrytown. U-M's 50K+ students; football Saturdays put 110K at the Big House." },
    { name: "Lansing", desc: "Old Town Lansing, REO Town, East Lansing's Grand River Ave (MSU). Capital + campus double market." },
  ],
  heroImage1: { src: "/gallery/arsenal-boxing-wheat-paste-poster-wall-street-view-los-angeles.webp", alt: "Wheat paste poster wall street view" },
  heroImage2: { src: "/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp", alt: "Wheat paste poster on urban wall" },
  areaLabel: "CITIES SERVED",
  serviceAreaType: "State",
  lastUpdated: "2026-08-29",
  spotlight: {
    eyebrow: "Statewide Capability",
    title: "DETROIT + ANN ARBOR + GRAND RAPIDS ROTATION",
    body:
      "A Michigan brief typically anchors on Detroit with Ann Arbor as the student add-on — 45 minutes apart, one install window covers both. Grand Rapids extends it statewide. Music releases do disproportionately well here: Detroit's techno/hip-hop heritage means poster culture is read fluently, and U-M + MSU football Saturdays are among the biggest recurring foot-traffic events in the Midwest.",
    links: [
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get a Michigan Quote", href: "/contact" },
    ],
  },
  faqs: [
    {
      q: "Is wheat pasting legal in Michigan?",
      a: "Yes on owner-authorized walls. Detroit's mural-district culture (Eastern Market, Grand River Creative Corridor) makes authorized wall access straightforward; Ann Arbor and Grand Rapids follow standard private-property consent rules.",
    },
    {
      q: "What Michigan cities do you cover?",
      a: "Detroit, Grand Rapids, Ann Arbor, and Lansing/East Lansing as standing markets, plus Ferndale, Royal Oak, Kalamazoo, and Ypsilanti on a per-campaign basis.",
    },
    {
      q: "How much does a Michigan campaign cost?",
      a: "Single-city MI campaigns run $2,800–$5,500. A Detroit + Ann Arbor combined brief runs $6K–$9K; full statewide with Grand Rapids runs $10K–$16K on one price sheet.",
    },
    {
      q: "How do Michigan winters affect campaigns?",
      a: "Paste cures fine down to about 40°F; hard-freeze weeks we schedule around. Spring–fall posters hold 4–6 weeks; winter installs are possible but we time them to thaw windows and always deliver 48-hour photo proof.",
    },
    {
      q: "Can you time a campaign to U-M or MSU football Saturdays?",
      a: "Yes. Michigan home games put 110K+ inside the Big House and multiples of that on the surrounding corridors — installs the Thursday before a home Saturday are a standing play for tour and streaming-release campaigns.",
    },
  ],
  localBusiness: {
    name: "Phantom Pasting — Michigan",
    description:
      "Wheat pasting and poster campaign services across Michigan — Detroit, Grand Rapids, Ann Arbor, Lansing.",
    url: "https://www.phantompasting.com/locations/michigan",
  },
};

export default function MichiganPage() {
  return <CityPageTemplate data={data} />;
}
