import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: "Wheat Pasting Dallas",
  description:
    "Wheat pasting in Dallas — poster campaigns across Deep Ellum, Bishop Arts, Lower Greenville, Uptown, Oak Cliff, Knox-Henderson.",
  keywords: [
    "wheat pasting Dallas",
    "Dallas poster campaigns",
    "Dallas guerrilla marketing",
    "Dallas street media",
    "Dallas street postering",
    "Dallas flyposting",
    "Dallas OOH advertising",
    "Deep Ellum wheat pasting",
    "Bishop Arts poster campaigns",
    "Lower Greenville street advertising",
    "Uptown Dallas guerrilla marketing",
    "Oak Cliff OOH",
    ...cityBuyerIntent("Dallas"),
    ...KW_CITY_BASE,
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/dallas" },
  openGraph: {
    title: "Wheat Pasting Dallas",
    description: "Large-format wheat paste campaigns across Dallas. Deep Ellum, Bishop Arts, Lower Greenville, Uptown.",
    url: "https://www.phantompasting.com/locations/dallas",
    images: [{ url: "https://www.phantompasting.com/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp", width: 1200, height: 630, alt: "Wheat paste campaign in Dallas" }],
  },
};

const data: CityPageData = {
  city: "Dallas",
  state: "TX",
  slug: "dallas",
  heroWord: "DALLAS",
  intro:
    "Dallas's Deep Ellum is one of the country's strongest live-music + bar district corridors. Bishop Arts carries walkable retail + restaurant density. Lower Greenville's nightlife strip drives weekend foot traffic. Uptown's affluent retail + Oak Cliff's emerging arts scene + Knox-Henderson's boutique corridor round out the deployment map.",
  whyTitle: "DALLAS LIVES\nIN ITS NEIGHBORHOODS.",
  whyText:
    "Dallas's reputation as a billboard market masks the city's strong walkable creative cores. Deep Ellum is a live-music + bar district that's been Dallas's cultural anchor since the 1980s; Bishop Arts is a walkable retail + restaurant strip with one of TX's strongest weekend foot traffic densities; Lower Greenville drives nightlife volume; Knox-Henderson carries affluent boutique foot traffic. Cowboys + Mavericks + Stars game days drive Uptown saturation. Dallas brand campaigns deploy here for cultural credibility as much as foot traffic.",
  neighborhoods: [
    { name: "Deep Ellum", desc: "Main Street, Elm Street, Commerce. Live-music + bar district anchor; mural-corridor density." },
    { name: "Bishop Arts District", desc: "Bishop Avenue, Davis Street. Walkable retail + restaurant strip with weekend tourism foot traffic." },
    { name: "Lower Greenville", desc: "Lower Greenville Avenue, Henderson. Nightlife + restaurant district; weekend volume anchor." },
    { name: "Uptown", desc: "McKinney Avenue, West Village. Affluent retail + walkable young-professional density." },
    { name: "Oak Cliff", desc: "Bishop, Tyler, Davis Street west of Bishop Arts. Emerging arts neighborhood + Latino cultural anchor." },
    { name: "Knox-Henderson", desc: "Knox Street + Henderson Avenue. Boutique retail + restaurant strip; affluent young-professional reach." },
  ],
  heroImage1: { src: "/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp", alt: "Wheat paste poster wall in Dallas" },
  heroImage2: { src: "/gallery/sticker-campaign-street-intersection-urban.webp", alt: "Sticker campaign at Dallas street intersection" },
  lastUpdated: "2026-04-25",
  spotlight: {
    eyebrow: "Big D Spotlight",
    title: "DEEP ELLUM + BISHOP ARTS ARE THE ANCHORS",
    body:
      "Deep Ellum is Dallas's strongest live-music + bar district corridor — wheat paste lands as part of the visual culture in a neighborhood already built around large-format murals. Bishop Arts' walkable foot traffic is one of TX's most-photographed retail strips. Combined Deep Ellum + Bishop Arts campaigns hit Dallas's two highest-engagement audiences on a single brief. The medium is also called wild posting, flyposting, or street postering depending on the audience.",
    links: [
      { label: "Texas State Page", href: "/locations/texas" },
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get a Dallas Quote", href: "/contact" },
    ],
  },
  faqs: [
    { q: "Is wheat pasting legal in Dallas?", a: "Yes on owner-authorized walls. Dallas is permissive on private walls with property-owner consent. Deep Ellum + Bishop Arts are particularly receptive — both neighborhoods have property-owner cultures built around large-format wall art." },
    { q: "What Dallas neighborhoods work best for wheat pasting?", a: "Deep Ellum for music/cultural reach, Bishop Arts for retail/lifestyle, Lower Greenville for nightlife, Uptown for affluent retail audience, Oak Cliff for cultural credibility, Knox-Henderson for boutique-shopping demographic." },
    { q: "How much does a Dallas wheat pasting campaign cost?", a: "Single-neighborhood test: $2,800-$4,200 for 60-90 posters. Full-city activation across 4-5 districts: $10K-$16K. Combined Dallas + Houston + Austin Texas-wide briefs run $22K-$38K." },
    { q: "When is the best time to run Dallas campaigns?", a: "October-May (mild Texas seasons). Cowboys home games drive Uptown saturation; Mavericks playoff windows (April-June) and Stars NHL playoffs add volume. State Fair of Texas (late September-October) creates a 24-day saturation window." },
    { q: "Can you handle DFW Metroplex deployments?", a: "Yes. Dallas + Fort Worth + Arlington + Plano is a natural DFW corridor — same crew rotation handles the metroplex on coordinated rollouts. Common configuration: Dallas + Fort Worth on a single launch week." },
  ],
  localBusiness: {
    name: "Phantom Pasting — Dallas",
    description: "Wheat pasting and poster campaign services in Dallas, TX. Street postering across Deep Ellum, Bishop Arts, Lower Greenville, Uptown, Oak Cliff, Knox-Henderson.",
    url: "https://www.phantompasting.com/locations/dallas",
  },
};

export default function DallasPage() {
  return <CityPageTemplate data={data} />;
}
