import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, KW_NATIONWIDE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: { absolute: "Wheat Pasting Wisconsin | Milwaukee & Madison Campaigns" },
  description:
    "Wheat pasting across Wisconsin — Milwaukee Third Ward & Bay View, Madison State Street, Green Bay. Statewide WI poster rollouts with GPS photo proof.",
  keywords: [
    "wheat pasting Wisconsin",
    "wheatpasting Wisconsin",
    "Wisconsin poster campaigns",
    "Wisconsin guerrilla marketing",
    "Wisconsin street media",
    "Milwaukee wheat pasting",
    "Madison wheat pasting",
    "Third Ward street advertising",
    "State Street poster campaigns",
    "statewide Wisconsin OOH",
    ...cityBuyerIntent("Wisconsin"),
    ...cityBuyerIntent("Milwaukee"),
    ...KW_CITY_BASE,
    ...KW_NATIONWIDE.slice(0, 4),
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/wisconsin" },
  openGraph: {
    title: "Wheat Pasting Wisconsin",
    description:
      "Statewide wheat paste poster campaigns across Wisconsin — Milwaukee, Madison, Green Bay.",
    url: "https://www.phantompasting.com/locations/wisconsin",
    images: [{
      url: "https://www.phantompasting.com/gallery/dont-fall-off-wheat-paste-pedestrian-street-art.webp",
      width: 1200,
      height: 630,
      alt: "Wheat paste poster campaign across Wisconsin — Phantom Pasting statewide rollouts",
    }],
  },
};

const data: CityPageData = {
  city: "Wisconsin",
  state: "WI",
  slug: "wisconsin",
  heroWord: "WISCONSIN",
  intro:
    "Milwaukee and Madison are 80 miles apart and cover two different Wisconsins: Milwaukee's Third Ward, Bay View, and Riverwest carry the industrial-arts and music-venue culture, while Madison's State Street funnels 50K UW students between the Capitol and campus on one walkable spine. Summerfest — the world's largest music festival — makes Milwaukee a standing music-campaign market.",
  whyTitle: "SUMMERFEST CITY.\nSTATE STREET DENSITY.",
  whyText:
    "Milwaukee's Historic Third Ward pairs warehouse walls with boutique foot traffic, Bay View's Kinnickinnic Ave is the indie-venue strip, and Riverwest keeps the DIY poster culture alive. Every summer, Summerfest pulls 600K+ music fans to the lakefront — the state's biggest campaign window. Madison's State Street is one of America's model pedestrian corridors: no cars, eight blocks, the entire UW-Madison student body passing through weekly.",
  neighborhoods: [
    { name: "Milwaukee", desc: "Historic Third Ward, Bay View (KK Ave), Riverwest, Walker's Point, East Side. State anchor; Summerfest + venue corridors." },
    { name: "Madison", desc: "State Street, Capitol Square, Willy Street (Williamson), UW campus edge. 50K students on a car-free spine." },
    { name: "Green Bay", desc: "Downtown/Broadway District. Packers home Sundays put 80K+ at Lambeau in a city of 105K — saturation math like nowhere else." },
  ],
  heroImage1: { src: "/gallery/dont-fall-off-wheat-paste-pedestrian-street-art.webp", alt: "Pedestrian passing wheat paste street art" },
  heroImage2: { src: "/gallery/biodance-making-a-splash-wheat-paste-plywood-wall-los-angeles.webp", alt: "Wheat paste posters on plywood wall" },
  areaLabel: "CITIES SERVED",
  serviceAreaType: "State",
  lastUpdated: "2026-08-29",
  spotlight: {
    eyebrow: "Statewide Capability",
    title: "SUMMERFEST + GAME-DAY WINDOWS",
    body:
      "Music campaigns anchor Wisconsin: Summerfest's 11 days pull 600K+ fans past Milwaukee's lakefront and Third Ward walls, and label briefs routinely time releases to it. In fall the calendar flips — Badgers Saturdays flood State Street and Packers Sundays turn Green Bay into the densest game-day market in America relative to city size.",
    links: [
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get a Wisconsin Quote", href: "/contact" },
    ],
  },
  faqs: [
    {
      q: "Is wheat pasting legal in Wisconsin?",
      a: "Yes on owner-authorized walls. Milwaukee's Riverwest and Bay View have long-running poster cultures and Madison's campus corridors read street media natively. Standard private-property consent applies statewide.",
    },
    {
      q: "What Wisconsin cities do you cover?",
      a: "Milwaukee, Madison, and Green Bay as standing markets, plus Eau Claire, Oshkosh, and La Crosse on a per-campaign basis.",
    },
    {
      q: "How much does a Wisconsin campaign cost?",
      a: "Single-city WI campaigns run $2,800–$5,500. Milwaukee + Madison combined runs $6K–$9K; adding Green Bay for statewide runs $8K–$13K.",
    },
    {
      q: "Can you time a campaign to Summerfest?",
      a: "Yes — it's the state's marquee window. Installs go up the week before opening day across the Third Ward, East Side, and Bay View; artist and festival-adjacent briefs book 6–8 weeks ahead.",
    },
    {
      q: "How long do posters last in Wisconsin weather?",
      a: "4–6 weeks May–October. Lake-effect winters compress the calendar; cold-season installs are scheduled to thaw windows and every placement gets 48-hour photo proof.",
    },
  ],
  localBusiness: {
    name: "Phantom Pasting — Wisconsin",
    description:
      "Wheat pasting and poster campaign services across Wisconsin — Milwaukee, Madison, Green Bay.",
    url: "https://www.phantompasting.com/locations/wisconsin",
  },
};

export default function WisconsinPage() {
  return <CityPageTemplate data={data} />;
}
