/**
 * Centralized NAP (Name/Address/Phone) + brand constants for Phantom Pasting.
 *
 * Every schema, footer, `tel:` / `mailto:` link, and metadata export should pull
 * from here. DRY single-source-of-truth — update in one place, propagates site-wide.
 *
 * IMPORTANT — NO LOCAL ADDRESS BY DESIGN:
 * Phantom Pasting is a nationwide service-area business (SAB) with no public
 * storefront customers visit. Declaring an addressLocality / addressRegion in
 * schema actively pins us as a local business in that city — Google then
 * routes city-pack SERPs locally and excludes us from "wheat pasting [other
 * city]" queries we ARE qualified to serve. So `address` here carries only
 * `addressCountry: "US"`. If a future GBP profile or verified storefront is
 * added, it should live in a SEPARATE constant (e.g. `BUSINESS.headquarters`)
 * and be opted into per-page, never injected globally.
 *
 * Also intentionally absent: `priceRange`. Schema.org only defines
 * `priceRange` on LocalBusiness, so emitting it would re-inherit LocalBusiness
 * pinning baggage even if @type stays Organization.
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
  ogImageDefault: "/gallery/fashionpass-wheat-paste-street-postering-wall-los-angeles.webp",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  // PostalAddress — country-only for the nationwide service-area business.
  // Locality + region intentionally omitted (see file-level docstring). Any
  // future verified storefront / GBP profile should live in a SEPARATE
  // constant and never replace this one.
  address: {
    addressCountry: "US",
  },
} as const;

/** Machine-friendly locations list used across schemas + city chips. */
export const LOCATIONS: ReadonlyArray<{ name: string; slug: string; href: string }> = [
  { name: "New York",    slug: "new-york",    href: "/locations/new-york" },
  { name: "Los Angeles", slug: "los-angeles", href: "/locations/los-angeles" },
  { name: "Miami",       slug: "miami",       href: "/locations/miami" },
  { name: "Chicago",     slug: "chicago",     href: "/locations/chicago" },
  { name: "Atlanta",     slug: "atlanta",     href: "/locations/atlanta" },
];
