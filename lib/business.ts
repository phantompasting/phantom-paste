/**
 * Centralized NAP (Name/Address/Phone) + brand constants for Phantom Pasting.
 *
 * Every schema, footer, `tel:` / `mailto:` link, and metadata export should pull
 * from here. DRY single-source-of-truth — update in one place, propagates site-wide.
 *
 * TODO (pending real data):
 *  - address: { streetAddress, addressLocality, addressRegion, postalCode, addressCountry: "US" }
 *  - gbpUrl: Google Business Profile URL (unlocks LocalBusiness.hasMap, Maps embed on /contact)
 *  - aggregateRating: { ratingValue, reviewCount } — add once review pipeline exists
 */
export const BUSINESS = {
  name: "Phantom Pasting",
  legalName: "Phantom Pasting",
  url: "https://www.phantompasting.com",
  email: "info@phantompasting.com",
  mailtoHref: "mailto:info@phantompasting.com",
  telephone: "+1-917-400-4594",
  telephoneDisplay: "(917) 400-4594",
  telHref: "tel:+19174004594",
  foundingDate: "2014",
  areaServed: "United States",
  serviceCities: ["New York", "Los Angeles", "Miami", "Chicago", "Atlanta"] as const,
  sameAs: ["https://www.instagram.com/phantompasting"],
  instagramUrl: "https://www.instagram.com/phantompasting",
  instagramHandle: "@phantompasting",
  ogImageDefault: "/gallery/fashionpass-wheat-paste-wild-posting-wall-los-angeles.webp",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  // address: undefined,  // TODO: fill when available
  // gbpUrl: undefined,   // TODO: fill when Google Business Profile is live
} as const;

/** Machine-friendly locations list used across schemas + city chips. */
export const LOCATIONS: ReadonlyArray<{ name: string; slug: string; href: string }> = [
  { name: "New York",    slug: "new-york",    href: "/locations/new-york" },
  { name: "Los Angeles", slug: "los-angeles", href: "/locations/los-angeles" },
  { name: "Miami",       slug: "miami",       href: "/locations/miami" },
  { name: "Chicago",     slug: "chicago",     href: "/locations/chicago" },
  { name: "Atlanta",     slug: "atlanta",     href: "/locations/atlanta" },
];
