import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, KW_NATIONWIDE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: "Wheat Pasting California",
  description:
    "Wheat pasting & street media campaigns across California — LA, San Francisco, San Diego, Sacramento, Oakland, San Jose. Statewide CA rollouts.",
  keywords: [
    "wheat pasting California",
    "wheatpasting California",
    "California poster campaigns",
    "California guerrilla marketing",
    "California street media",
    "California street postering",
    "California flyposting",
    "California OOH advertising",
    "Los Angeles wheat pasting",
    "San Francisco wheat pasting",
    "San Diego poster campaigns",
    "Sacramento street advertising",
    "Oakland guerrilla marketing",
    "San Jose poster campaigns",
    "statewide California OOH",
    ...cityBuyerIntent("California"),
    ...cityBuyerIntent("Los Angeles"),
    ...cityBuyerIntent("San Francisco"),
    ...KW_CITY_BASE,
    ...KW_NATIONWIDE.slice(0, 4),
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/california" },
  openGraph: {
    title: "Wheat Pasting California",
    description:
      "Statewide wheat paste poster campaigns across California — LA, SF, San Diego, Sacramento, Oakland, San Jose.",
    url: "https://www.phantompasting.com/locations/california",
    images: [{
      url: "https://www.phantompasting.com/gallery/fashionpass-wheat-paste-street-postering-wall-los-angeles.webp",
      width: 1200,
      height: 630,
      alt: "Wheat paste poster campaign wall in California — Phantom Pasting statewide rollouts",
    }],
  },
};

const data: CityPageData = {
  city: "California",
  state: "CA",
  slug: "california",
  heroWord: "CALIFORNIA",
  intro:
    "California is the single most important state in US street marketing. LA's Melrose corridor, SF's Mission District, San Diego's North Park, Oakland's Uptown, Sacramento's R Street — every California metro has a walkable creative core that rewards wheat paste. We deploy statewide rollouts on a single brief, often hitting 4-6 CA markets the same launch week.",
  whyTitle: "CA IS WHERE\nSTREET MARKETING LIVES.",
  whyText:
    "Six metros, three regions, one of the most fashion + music + film-dense states in the world. SoCal (LA, San Diego, Long Beach) is where streetwear + fashion campaigns earn cultural weight. NorCal (SF, Oakland, San Jose) is where tech and DTC brands buy street credibility. Sacramento + Fresno fill the Central Valley. California campaigns deliver volume LA-only briefs leave on the table.",
  neighborhoods: [
    { name: "Los Angeles", slug: "los-angeles", desc: "Melrose, Silver Lake, Fairfax, DTLA, Venice, Echo Park, Highland Park, Hollywood. State volume leader; full breakdown on the LA page." },
    { name: "San Francisco", slug: "san-francisco", desc: "Mission District, Hayes Valley, SoMa, the Castro. Walkable creative-class density and tech audience reach." },
    { name: "San Diego", desc: "North Park, Hillcrest, Little Italy, downtown Gaslamp. Surf-culture + craft-beer creative scene." },
    { name: "Sacramento", desc: "R Street Corridor, Midtown, East Sacramento. State capital + UC Davis spillover audience." },
    { name: "Oakland", desc: "Uptown, Temescal, Jack London Square. East Bay arts community + creative-class density." },
    { name: "San Jose", desc: "SoFA District, Japantown, Santana Row. South Bay tech audience + walkable cultural pockets." },
  ],
  heroStats: [
    { stat: "6", label: "CA Metros" },
    { stat: "LA + SF", label: "Tier 1 Anchors" },
    { stat: "1 Brief", label: "Statewide Rollouts" },
  ],
  heroImage1: { src: "/gallery/fashionpass-wheat-paste-street-postering-wall-los-angeles.webp", alt: "Wheat paste poster campaign wall in California" },
  heroImage2: { src: "/gallery/dont-fall-off-wheat-paste-street-view-la.webp", alt: "Wheat paste street view in California" },
  areaLabel: "CITIES SERVED",
  serviceAreaType: "State",
  lastUpdated: "2026-04-25",
  spotlight: {
    eyebrow: "Statewide Capability",
    title: "LA + 5 SECONDARY CA MARKETS, ONE BRIEF",
    body:
      "Most agencies route California to LA-only and stop. Phantom Pasting runs LA plus SF, San Diego, Sacramento, Oakland, and San Jose from coordinated crew rotations — a brand can spec a SoCal-led brief with NorCal overlay on the same paperwork. The medium is also called wild posting, flyposting, or street postering depending on the audience; wheat pasting names the actual material we use. SF's Mission and San Diego's North Park are particularly under-served opportunities for brands willing to deploy beyond the LA core.",
    links: [
      { label: "Los Angeles City Page", href: "/locations/los-angeles" },
      { label: "FashionPass LA Case Study", href: "/work/fashionpass-los-angeles" },
      { label: "Get a California Quote", href: "/contact" },
    ],
  },
  faqs: [
    {
      q: "Is wheat pasting legal in California?",
      a: "Yes on owner-authorized walls. California has no state-level prohibition on commercial wheat pasting; enforcement is handled at the municipal level. LAPD does not enforce on clean campaigns; SF, San Diego, Oakland, and Sacramento are equally permissive on private walls. Historic-preservation zones (e.g. parts of LA, SF, downtown Sacramento) need permits — we handle that.",
    },
    {
      q: "What California cities do you cover?",
      a: "All major CA metros: LA, San Francisco, San Diego, Sacramento, Oakland, San Jose, Long Beach, Anaheim, Santa Ana, Fresno, Riverside, Bakersfield, Palm Springs. Statewide multi-city rollouts are our specialty — single brief, every market.",
    },
    {
      q: "How much does a California wheat pasting campaign cost?",
      a: "Single-city CA campaigns run $3,500-$7,500 (LA on the higher end). Statewide rollouts hitting 4-6 metros run $14K-$28K with the multi-city volume discount. SF + LA combined campaigns are the most common configuration.",
    },
    {
      q: "How quickly can a California campaign launch?",
      a: "Standard turnaround is 7-10 business days from approved brief. LA + SF can rush to 5 days; secondary markets (San Diego, Sacramento, Oakland, San Jose) typically need the full 7-10. Statewide multi-city briefs need 10-14 to coordinate crews.",
    },
    {
      q: "Why does California outperform other states for wheat pasting?",
      a: "Three reasons: pedestrianized corridors inside driving cities, the country's densest concentration of fashion/music/film/tech HQs, and weather that holds posters 6-10 weeks (vs 3-5 in the Midwest/Northeast). California campaigns generate more organic social shares per impression than any other state.",
    },
  ],
  localBusiness: {
    name: "Phantom Pasting — California",
    description:
      "Wheat pasting and poster campaign services across California — LA, SF, San Diego, Sacramento, Oakland, San Jose.",
    url: "https://www.phantompasting.com/locations/california",
  },
};

export default function CaliforniaPage() {
  return <CityPageTemplate data={data} />;
}
