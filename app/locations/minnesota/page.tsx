import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, KW_NATIONWIDE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: { absolute: "Wheat Pasting Minnesota | Minneapolis & St. Paul Campaigns" },
  description:
    "Wheat pasting across Minnesota — Minneapolis Northeast Arts District, Uptown, North Loop, St. Paul Lowertown. Twin Cities rollouts with GPS photo proof.",
  keywords: [
    "wheat pasting Minnesota",
    "wheatpasting Minnesota",
    "Minnesota poster campaigns",
    "Minnesota guerrilla marketing",
    "Minnesota street media",
    "Minneapolis wheat pasting",
    "St. Paul wheat pasting",
    "Twin Cities poster campaigns",
    "Northeast Arts District advertising",
    "statewide Minnesota OOH",
    ...cityBuyerIntent("Minnesota"),
    ...cityBuyerIntent("Minneapolis"),
    ...KW_CITY_BASE,
    ...KW_NATIONWIDE.slice(0, 4),
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/minnesota" },
  openGraph: {
    title: "Wheat Pasting Minnesota",
    description:
      "Statewide wheat paste poster campaigns across Minnesota — Minneapolis, St. Paul, Duluth, Rochester.",
    url: "https://www.phantompasting.com/locations/minnesota",
    images: [{
      url: "https://www.phantompasting.com/gallery/zach-john-king-im-what-you-get-wheat-paste-poster-wall-greenspace-nashville.webp",
      width: 1200,
      height: 630,
      alt: "Wheat paste poster campaign across Minnesota — Phantom Pasting statewide rollouts",
    }],
  },
};

const data: CityPageData = {
  city: "Minnesota",
  state: "MN",
  slug: "minnesota",
  heroWord: "MINNESOTA",
  intro:
    "The Twin Cities are one campaign with two personalities: Minneapolis' Northeast Arts District, Uptown, and North Loop carry the galleries, breweries, and venues, while St. Paul's Lowertown and Grand Avenue add the quieter half. First Avenue's legacy makes this one of the most music-literate audiences in the country — poster culture here traces straight back to Prince.",
  whyTitle: "FIRST AVENUE CULTURE.\nTWIN CITIES ON ONE BRIEF.",
  whyText:
    "Minneapolis grew up on show posters — First Avenue, the Entry, and a venue network that trained generations to read walls for what's next. The Northeast Arts District holds the largest concentration of working artists in the state (Art-A-Whirl, the country's largest open-studio tour, happens here every May). Uptown and Lyn-Lake run retail + nightlife, North Loop carries the new-money boutique crowd, and the U of M's Dinkytown puts 50K students on a compact grid. St. Paul's Lowertown rounds out the pair.",
  neighborhoods: [
    { name: "Minneapolis", desc: "Northeast Arts District, Uptown/Lyn-Lake, North Loop, Dinkytown (U of M), Whittier's Eat Street. State anchor and venue-poster heartland." },
    { name: "St. Paul", desc: "Lowertown, Grand Avenue, Cathedral Hill, Midway. The quieter twin; Xcel Energy Center event nights spike foot traffic." },
    { name: "Duluth", desc: "Canal Park, downtown Superior Street. Lakefront tourism plus UMD; summer-heavy calendar." },
    { name: "Rochester", desc: "Downtown/Peace Plaza. Mayo Clinic brings 3M visitors a year to a walkable core." },
  ],
  heroImage1: { src: "/gallery/zach-john-king-im-what-you-get-wheat-paste-poster-wall-greenspace-nashville.webp", alt: "Freestanding wheat paste poster wall" },
  heroImage2: { src: "/gallery/zach-john-king-im-what-you-get-wheat-paste-concrete-wall-park-nashville.webp", alt: "Wheat paste posters on concrete wall" },
  areaLabel: "CITIES SERVED",
  serviceAreaType: "State",
  lastUpdated: "2026-08-29",
  spotlight: {
    eyebrow: "Statewide Capability",
    title: "TWIN CITIES + ART-A-WHIRL TIMING",
    body:
      "Minneapolis and St. Paul install as one rotation — a Twin Cities brief covers both downtowns, Northeast, and Uptown in a single window. Art-A-Whirl weekend (May) puts 40K+ art-buyers directly into the Northeast Arts District, and the summer festival run (Basilica Block Party, Twin Cities Pride) keeps the calendar dense. Music briefs anchor on the First Avenue + Uptown corridors.",
    links: [
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get a Minnesota Quote", href: "/contact" },
    ],
  },
  faqs: [
    {
      q: "Is wheat pasting legal in Minnesota?",
      a: "Yes on owner-authorized walls. Minneapolis' venue-poster tradition and the Northeast Arts District's open-studio culture make authorized walls plentiful; standard private-property consent applies statewide.",
    },
    {
      q: "What Minnesota cities do you cover?",
      a: "Minneapolis, St. Paul, Duluth, and Rochester as standing markets, plus Bloomington (Mall of America zone) and Mankato on a per-campaign basis.",
    },
    {
      q: "How much does a Minnesota campaign cost?",
      a: "A Twin Cities campaign (Minneapolis + St. Paul on one rotation) runs $3,500–$6,500. Statewide including Duluth runs $8K–$13K on one price sheet.",
    },
    {
      q: "How do Minnesota winters affect campaigns?",
      a: "May–October is the reliable season; posters hold 4–6 weeks. Deep-winter installs are limited to thaw windows, which is why release campaigns here cluster around the festival summer. Every placement gets 48-hour photo proof.",
    },
    {
      q: "Can you time a campaign to Art-A-Whirl or a First Avenue run?",
      a: "Yes — Art-A-Whirl weekend installs go up that Wednesday–Thursday, and tour campaigns routinely target the blocks around First Avenue and Uptown ahead of show dates.",
    },
  ],
  localBusiness: {
    name: "Phantom Pasting — Minnesota",
    description:
      "Wheat pasting and poster campaign services across Minnesota — Minneapolis, St. Paul, Duluth, Rochester.",
    url: "https://www.phantompasting.com/locations/minnesota",
  },
};

export default function MinnesotaPage() {
  return <CityPageTemplate data={data} />;
}
