import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: "Wheat Pasting Los Angeles",
  description:
    "Wheat pasting in LA — poster campaigns across Melrose, Silver Lake, Fairfax, DTLA, Venice, Echo Park, Highland Park, Hollywood. 100% documented.",
  keywords: [
    "wheat pasting Los Angeles",
    "LA poster campaigns",
    "Los Angeles guerrilla marketing",
    "street postering LA",
    "wheat paste posters LA",
    "Melrose wheat pasting",
    "DTLA poster campaigns",
    "Silver Lake street advertising",
    "Fairfax wheat pasting",
    "Los Angeles street media",
    "LA street marketing agency",
    "LA flyposting",
    "LA OOH advertising",
    "Hollywood guerrilla marketing",
    "Highland Park street postering",
    "Venice Abbot Kinney advertising",
    "Echo Park poster campaigns",
    ...cityBuyerIntent("Los Angeles"),
    ...cityBuyerIntent("LA"),
    ...KW_CITY_BASE,
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/los-angeles" },
  openGraph: {
    title: "Wheat Pasting Los Angeles",
    description: "Large-format wheat paste poster campaigns across Los Angeles. Melrose, Silver Lake, Fairfax, DTLA.",
    url: "https://www.phantompasting.com/locations/los-angeles",
    images: [
      {
        url: "https://www.phantompasting.com/gallery/fashionpass-wheat-paste-street-postering-wall-los-angeles.webp",
        width: 1200,
        height: 630,
        alt: "Wheat paste poster campaign wall in Los Angeles",
      },
    ],
  },
};

const data: CityPageData = {
  city: "Los Angeles",
  state: "CA",
  slug: "los-angeles",
  heroWord: "LOS ANGELES",
  intro: "LA is built for street marketing. Sun-bleached walls, walkable neighborhoods, and a culture that lives outdoors. We've installed wheat paste poster campaigns for FashionPass, music labels, and national brands across LA — covering Melrose, Silver Lake, Fairfax, DTLA Arts District, Venice, Echo Park, Highland Park, and Hollywood. 24×36 posters in 6–16 unit grids on owner-authorized walls, finished with full daylight photo documentation the morning after install.",
  whyTitle: "LA IS OUR\nTERRITORY.",
  whyText: "Los Angeles is the capital of visual culture — fashion, film, music, and art all converge on the street. Melrose Ave drives streetwear; Silver Lake and Echo Park anchor the indie scene; Fairfax owns hype-culture; DTLA's Arts District has the densest gallery-wall corridor in the city. LA's outdoor lifestyle means more foot traffic, more eyeballs, and more organic shares than almost any other US city. We've been working LA walls since 2014 and maintain owner-authorized placements that walk-up crews can't access.",
  neighborhoods: [
    { name: "Melrose", desc: "Fashion-forward foot traffic. Prime wall space along Melrose Ave — the streetwear and boutique corridor between La Brea and Fairfax." },
    { name: "Silver Lake", desc: "Creative-class hub. Sunset Junction to the reservoir — independent shops, coffee culture, and high walkability make every poster an event." },
    { name: "Fairfax", desc: "Streetwear epicenter. Supreme to Round Two — Fairfax Ave between Melrose and Beverly is where hype culture lives at street level." },
    { name: "DTLA Arts District", desc: "Gallery walls, brewery foot traffic, and the city's densest mural corridor. Every poster lands in a context that reads as art, not advertising." },
    { name: "Venice / Abbot Kinney", desc: "Beach-adjacent foot traffic. Tourists and locals mix along Abbot Kinney Blvd — one of LA's most-photographed retail strips." },
    { name: "Echo Park", desc: "Indie music and art scene. Sunset Blvd between Echo Park Ave and Glendale — tight community, high engagement, walls that get noticed." },
    { name: "Highland Park", desc: "York Blvd and Figueroa — northeast LA's fastest-growing creative corridor. Younger demo, less wall-space competition than Silver Lake." },
    { name: "Hollywood", desc: "Hollywood Blvd tourism foot traffic plus Sunset Blvd nightlife corridor. High visibility, premium placements during awards season." },
  ],
  heroImage1: { src: "/gallery/fashionpass-wheat-paste-street-postering-wall-los-angeles.webp", alt: "FashionPass wheat paste poster campaign wall in Los Angeles" },
  heroImage2: { src: "/gallery/dont-fall-off-wheat-paste-street-view-la.webp", alt: "Wheat paste street view in Los Angeles" },
  spotlight: {
    eyebrow: "LA Case Study",
    title: "FASHIONPASS · MELROSE WALL CAMPAIGN",
    body:
      "FashionPass needed a Melrose-anchored campaign that read as cultural, not promotional — the kind of wall placement that gets photographed and reposted by the foot-traffic audience itself. We executed a multi-wall wheat paste rollout across Melrose, Fairfax, and Silver Lake with 4 design rotations and full next-morning daylight documentation. The medium is also called wild posting, flyposting, or street postering — wheat pasting names the actual material we use. LA campaigns at this scale book 7–10 days from sign-off to install; rush windows are possible during fashion-week and awards-season pushes.",
    links: [
      { label: "See the FashionPass Campaign", href: "/work/fashionpass-los-angeles" },
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Wheat Pasting in LA — Field Guide", href: "/blog/wheat-pasting-los-angeles" },
      { label: "Get an LA Quote", href: "/contact" },
    ],
  },
  // Service schema base — CityPageTemplate enriches with @type, provider,
  // areaServed, and offers. Field stays named `localBusiness` for type
  // compat with the shared template interface.
  localBusiness: {
    name: "Phantom Pasting — Los Angeles",
    description: "Wheat pasting and poster campaign services in Los Angeles, CA. Large-format street postering across Melrose, Fairfax, Silver Lake, DTLA Arts District, Venice, Echo Park, Highland Park, and Hollywood.",
    url: "https://www.phantompasting.com/locations/los-angeles",
  },
};

export default function LosAngelesPage() {
  return <CityPageTemplate data={data} />;
}
