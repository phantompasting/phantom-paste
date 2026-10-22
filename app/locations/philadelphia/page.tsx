import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: { absolute: "Wheat Pasting Philadelphia | Philly Wheatpasting Company" },
  description:
    "Wheat pasting in Philadelphia: Fishtown, Northern Liberties, South Street, University City. 24x36 and 48x72 posters, photo-documented, quote in 24 hours.",
  keywords: [
    "wheat pasting Philadelphia",
    "wheatpasting Philadelphia",
    "wheat paste Philadelphia",
    "Philly wheat pasting",
    "Philadelphia poster campaigns",
    "Philadelphia wild posting",
    "Philadelphia street postering",
    "Philadelphia flyposting",
    "Philadelphia guerrilla marketing",
    "Fishtown wheat pasting",
    "South Street poster campaigns",
    "University City street advertising",
    ...cityBuyerIntent("Philadelphia"),
    ...cityBuyerIntent("Philly"),
    ...KW_CITY_BASE,
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/philadelphia" },
  openGraph: {
    title: "Wheat Pasting Philadelphia",
    description: "Wheat paste poster campaigns across Philadelphia. Fishtown, Northern Liberties, South Street, University City.",
    url: "https://www.phantompasting.com/locations/philadelphia",
    images: [{
      url: "https://www.phantompasting.com/gallery/nokia-bell-labs-wheat-paste-installer-48x72-posters-helix-new-brunswick-nj.webp",
      width: 1400,
      height: 1050,
      alt: "Phantom Pasting installer pasting 48x72 inch wheat paste posters on the East Coast",
    }],
  },
};

const data: CityPageData = {
  city: "Philadelphia",
  state: "PA",
  slug: "philadelphia",
  heroWord: "PHILADELPHIA",
  intro:
    "Phantom Pasting is a wheat pasting company that runs poster campaigns in Philadelphia: 24x36 and jumbo 48x72 wheat paste posters, chalk spray stencils, and sticker snipes, installed by our East Coast crew and photo-documented wall by wall. Philly is one of the most walkable, mural-literate cities in the country, which makes it one of the best wheat paste markets on the East Coast.",
  whyTitle: "THE MURAL CAPITAL\nPASTES DIFFERENT.",
  whyText:
    "Mural Arts Philadelphia has put thousands of murals on the city's walls, so Philadelphians read wall-based creative as part of the city, not as clutter. Fishtown and Northern Liberties carry the creative-class and nightlife density, South Street and Queen Village carry the foot traffic, and University City puts Penn and Drexel students on the same blocks every day. Temple's North Broad corridor and East Passyunk round out the city. A Philly run also pairs naturally with New York and New Jersey: our East Coast crew installed 60 jumbo posters at The Helix in New Brunswick, NJ in October 2026, about an hour up I-95.",
  neighborhoods: [
    { name: "Fishtown", desc: "Frankford Avenue, Girard Avenue. Music venues, bars, and the city's densest creative-class audience." },
    { name: "Northern Liberties", desc: "2nd Street, Liberties Walk, Germantown Avenue. Walkable nightlife and restaurant blocks next to Fishtown." },
    { name: "South Street + Queen Village", desc: "South Street from Front to Broad, Fabric Row. Philly's classic foot-traffic strip for music, fashion, and streetwear." },
    { name: "University City", desc: "Walnut, Chestnut, and Lancaster Avenue around Penn and Drexel. Student density all school year." },
    { name: "Temple + North Broad", desc: "Cecil B. Moore, North Broad Street. Temple students plus Met Philadelphia show nights." },
    { name: "Old City + Center City", desc: "Market Street, Old City galleries, Rittenhouse edges. Higher-income and tourist traffic; historic blocks are more restricted, so placements are planned around them." },
    { name: "East Passyunk", desc: "Passyunk Avenue. Restaurant row with a strong local and food-and-drink audience." },
  ],
  heroImage1: { src: "/gallery/nokia-bell-labs-wheat-paste-installer-48x72-posters-helix-new-brunswick-nj.webp", alt: "Phantom Pasting installer pasting jumbo 48x72 inch wheat paste posters at The Helix, New Brunswick, NJ, an hour from Philadelphia", position: "right bottom" },
  heroImage2: { src: "/gallery/nokia-bell-labs-wheat-paste-poster-series-blue-hoarding-helix-new-brunswick.webp", alt: "Series of wheat paste posters installed by Phantom Pasting's East Coast crew", position: "right bottom" },
  heroStats: [
    { stat: "24x36", label: "+ 48x72 Jumbos" },
    { stat: "100%", label: "Photo Documented" },
    { stat: "24hr", label: "Quote Turnaround" },
  ],
  lastUpdated: "2026-10-22",
  spotlight: {
    eyebrow: "East Coast Crew · Recent Install",
    title: "60 JUMBO POSTERS IN ONE DAY",
    body:
      "The same crew that runs Philadelphia installed 60 jumbo 48x72 inch posters for Nokia Bell Labs on the construction fence at The Helix in New Brunswick, NJ, on October 19, 2026, in a single day, with a certificate of insurance on file before we arrived. That is the standard a Philly campaign gets: signed agreement, insurance when the site needs it, a planned wall list, and a time-stamped photo report when the posters are up.",
    links: [
      { label: "Read the Helix Case Study", href: "/work/nokia-bell-labs-helix-new-jersey" },
      { label: "Insurance & Standards", href: "/standards" },
      { label: "Philly + NJ Field Guide", href: "/blog/wheat-pasting-philadelphia-new-jersey" },
      { label: "Pennsylvania Statewide", href: "/locations/pennsylvania" },
      { label: "Get a Philadelphia Quote", href: "/contact" },
    ],
  },
  faqs: [
    {
      q: "Who does wheat pasting in Philadelphia?",
      a: "Phantom Pasting runs wheat paste poster campaigns in Philadelphia, including Fishtown, Northern Liberties, South Street, University City, and North Broad. We handle printing, wall planning, overnight or daytime installs, and a time-stamped photo report for every placement. Quotes come back within 24 hours from /contact.",
    },
    {
      q: "How much does wheat pasting cost in Philadelphia?",
      a: "Most Philadelphia campaigns run about $4,000 for 50 posters, $5,800 for 100, and around $10,000 for 200 (24x36, printing and install included). Jumbo 48x72 posters are available and price at roughly 2.5 to 3 times a 24x36. Chalk spray stencil runs start around $2,800 for 25 placements.",
    },
    {
      q: "Is wheat pasting legal in Philadelphia?",
      a: "On walls where the property owner or controlling party has given permission, yes. Philadelphia is unusually comfortable with wall-based art because of Mural Arts Philadelphia, but historic districts like Old City and Society Hill are more restricted. We tell you in writing which surfaces a campaign will use and who authorized them.",
    },
    {
      q: "Can you run Philadelphia and New York in the same campaign?",
      a: "Yes. Philly, New Jersey, and New York run on the same East Coast crew rotation, so one brief, one agreement, and one photo report can cover all three. Our most recent New Jersey install was 60 jumbo posters at The Helix in New Brunswick in October 2026.",
    },
    {
      q: "How fast can a Philadelphia campaign go up?",
      a: "Plan on about 7 to 10 days from signed agreement and final artwork to install: roughly 5 business days to print, then 1 to 2 install days depending on poster count. Rush windows are sometimes possible; ask when you request a quote.",
    },
  ],
  localBusiness: {
    name: "Phantom Pasting — Philadelphia",
    description:
      "Wheat pasting and poster campaign services in Philadelphia, PA. Street postering across Fishtown, Northern Liberties, South Street, University City, North Broad, and East Passyunk.",
    url: "https://www.phantompasting.com/locations/philadelphia",
  },
};

export default function PhiladelphiaPage() {
  return <CityPageTemplate data={data} />;
}
