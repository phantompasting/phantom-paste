import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: { absolute: "Wheat Pasting LA | Wheatpasting Posters Melrose to DTLA" },
  description:
    "Wheat pasting in Los Angeles — also known as wheatpasting or wild posting. Melrose, Fairfax, Silver Lake, DTLA Arts District, Venice. Highest-signal paste market in the US, 500+ campaigns.",
  keywords: [
    "wheat pasting Los Angeles",
    "wheatpasting Los Angeles",
    "wheatpasting LA",
    "wheat pasting LA",
    "wheat paste posting LA",
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
        url: "https://www.phantompasting.com/gallery/biodance-making-a-splash-poster-wall-the-grove-los-angeles.webp",
        width: 1200,
        height: 630,
        alt: "Biodance “We Are Making A Splash” wheat paste poster wall at The Grove in Los Angeles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wheat Pasting Los Angeles",
    description: "Large-format wheat paste poster campaigns across Los Angeles. Melrose, Silver Lake, Fairfax, DTLA.",
    images: ["https://www.phantompasting.com/gallery/biodance-making-a-splash-poster-wall-the-grove-los-angeles.webp"],
  },
};

const data: CityPageData = {
  city: "Los Angeles",
  state: "CA",
  slug: "los-angeles",
  heroWord: "LOS ANGELES",
  intro: "LA is built for street marketing. Sun-bleached walls, walkable neighborhoods, and a culture that lives outdoors. We've installed wheat pasting campaigns — the large-format poster medium LA brands also search for as wheatpasting or wild posting — for Biodance, music labels, and national brands across LA, covering Melrose, Silver Lake, Fairfax, DTLA Arts District, Venice, Echo Park, Highland Park, and Hollywood. 24×36 posters in 6–16 unit grids on owner-authorized walls, finished with full daylight photo documentation the morning after install.",
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
  heroStats: [
    { stat: "8", label: "Neighborhoods" },
    { stat: "10+ yrs", label: "Active in LA" },
    { stat: "100%", label: "Documented" },
  ],
  heroImage1: { src: "/gallery/momentous-trend-proof-wheat-paste-wall-los-angeles-street.webp", alt: "Momentous Trend Proof wheat paste poster wall street corner Los Angeles" },
  heroImage2: { src: "/gallery/biodance-hydrogel-splash-wheat-paste-wall-los-angeles.webp", alt: "Biodance “We Are Making A Splash” wheat paste poster wall in Los Angeles" },
  lastUpdated: "2026-06-18",
  pricingTiers: [
    { tier: "Single-Neighborhood Test", range: "$3,500 – $6,500", includes: "80–120 posters · 1 LA neighborhood · Photo doc + GPS-logged install" },
    { tier: "Four-Neighborhood Activation", range: "$11K – $18K", includes: "Four LA districts · Multi-design rotation · Daylight + install-night shots" },
    { tier: "LA Flagship", range: "$18K – $35K", includes: "Paste + snipes + chalk · Multi-week run · Full city coverage" },
    { tier: "Scaffold + Wall Combo", range: "$28K – $65K", includes: "Fashion-week / awards-season · DBS permits · Multi-format saturation" },
  ],
  faqs: [
    { q: "Is wheat pasting legal in Los Angeles?", a: "Yes on owner-authorized walls. LAPD does not enforce unlawful posting on clean commercial campaigns. Historic preservation zones (parts of Hollywood, downtown, Beverly Hills-adjacent) need DBS permits — we handle them." },
    { q: "Is wild posting the same as wheat pasting in LA?", a: "Effectively, yes. 'Wild posting' and 'wheatpasting' (one word) are the terms most LA brands search for, and they describe the same thing we do: large-format posters hand-pasted onto owner-authorized walls across Melrose, Fairfax, and DTLA. We say 'wheat pasting' because it names the actual material — a flour-and-water paste that holds paper to brick for weeks — but whether you call it wild posting, flyposting, or street postering, it's the same campaign." },
    { q: "What LA neighborhoods work best for wheat pasting?", a: "Melrose Avenue between Fairfax and La Brea is the highest-signal corridor in the US. Fairfax Avenue, Silver Lake, Echo Park, DTLA Arts District, Highland Park, and Abbot Kinney round out the primary LA paste map. Hollywood for awards-season activations." },
    { q: "How much does an LA wheat pasting campaign cost?", a: "Single-neighborhood test: $3,500-$6,500 for 80-120 posters. Four-neighborhood LA-only activation: $11K-$18K. LA flagship with paste + snipes + chalk: $18K-$35K. Scaffold + wall combos for fashion-week or awards-season runs: $28K-$65K." },
    { q: "How long do wheat paste posters last in Los Angeles?", a: "6–10 weeks on standard walls — the longest poster lifespan of any major US market. LA's dry climate and mild temperatures keep paper from deteriorating. Shaded brick on Melrose and Fairfax holds 12+ weeks. Summer heat can shorten to 4–6 weeks, but shade and PVA-reinforced paste mitigates it." },
    { q: "Can you handle California statewide rollouts from LA?", a: "Yes. LA + SF + San Diego + Sacramento + Oakland + San Jose is a natural California statewide configuration — same crew rotation handles all six markets on coordinated rollouts. Common: LA + SF on a single launch week." },
  ],
  spotlight: {
    eyebrow: "LA Case Study",
    title: "BIODANCE · “WE ARE MAKING A SPLASH”",
    body:
      "Biodance — the Korean hydrogel-mask brand — launched “We Are Making A Splash” in LA with a multi-format street rollout we installed around The Grove and the surrounding corridors over a two-day push. Wheat paste poster walls anchored it: scaffold wraps, an underpass wall beside the Karl Lagerfeld run, plywood construction barriers, and a storefront wall lit up at night — backed by die-cut Hydrogel Splash stickers on walls and poles and pink “Glow On The Go” chalk-spray sidewalk stencils pointing toward the activation. The medium is also called wild posting, flyposting, or street postering — wheat pasting names the actual material we use. Multi-format LA campaigns like this book 7–10 days from sign-off to install; rush windows are possible during launch-week pushes.",
    links: [
      { label: "See the Biodance Campaign", href: "/gallery" },
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Wheat Pasting in LA — Field Guide", href: "/blog/wheat-pasting-los-angeles" },
      { label: "Street Flyering in LA", href: "/services/street-flyering/los-angeles" },
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
