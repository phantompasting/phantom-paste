/**
 * Single source of truth for the state ↔ city relationship across all
 * /locations/* pages. Used by CityPageTemplate to auto-render:
 *
 *   - "← Statewide [State] Rollouts" upward-navigation callout on every
 *     city page where a parent-state page exists
 *   - "Other [State] cities" sibling cross-link section on every city page
 *     with siblings that have their own pages
 *   - Linkable neighborhoods grid on state pages when a constituent city
 *     has its own city page
 *
 * Centralized here (instead of duplicated per-page) so adding a new city
 * or state automatically propagates: add an entry below, every related
 * page picks up the linkage on next build. No per-page edits required.
 */

export interface StatePageRef {
  /** Display name of the state. */
  name: string;
  /** /locations/<slug> for the state landing page. */
  slug: string;
  /** Two-letter state abbreviation (matches CityPageData.state). */
  abbr: string;
}

export interface CityPageRef {
  name: string;
  slug: string;
  /** State abbreviation this city belongs to. */
  state: string;
}

// ── State pages ────────────────────────────────────────────────────────
//
// Every state with a /locations/<state> landing page. Add new entries here
// to make `getStatePage(abbr)` return them.
export const STATE_PAGES: ReadonlyArray<StatePageRef> = [
  { name: "California",    slug: "california",      abbr: "CA" },
  { name: "New York",      slug: "new-york-state",  abbr: "NY" },
  { name: "Texas",         slug: "texas",           abbr: "TX" },
  { name: "Florida",       slug: "florida",         abbr: "FL" },
  { name: "Georgia",       slug: "georgia",         abbr: "GA" },
  { name: "Illinois",      slug: "illinois",        abbr: "IL" },
  { name: "Arizona",       slug: "arizona",         abbr: "AZ" },
  { name: "Washington",    slug: "washington",      abbr: "WA" },
  { name: "Oregon",        slug: "oregon",          abbr: "OR" },
  { name: "Colorado",      slug: "colorado",        abbr: "CO" },
  { name: "Nevada",        slug: "nevada",          abbr: "NV" },
  { name: "Massachusetts", slug: "massachusetts",   abbr: "MA" },
  { name: "Pennsylvania",  slug: "pennsylvania",    abbr: "PA" },
];

// ── City pages ─────────────────────────────────────────────────────────
//
// Every city with a /locations/<city> landing page, grouped by state.
// `state` matches a STATE_PAGES.abbr so sibling-city + parent-state lookup
// works without name-fuzzy-matching.
//
// `name` here MUST match the `data.city` field on the city page so the
// state-page neighborhoods array can fuzzy-match against this list to
// find linkable cities. (See `findCityPageByName` below.)
export const CITY_PAGES: ReadonlyArray<CityPageRef> = [
  // California
  { name: "Los Angeles",    slug: "los-angeles",     state: "CA" },
  { name: "San Francisco",  slug: "san-francisco",   state: "CA" },
  // New York
  { name: "New York City",  slug: "new-york",        state: "NY" },
  // Texas
  { name: "Houston",        slug: "houston",         state: "TX" },
  { name: "Dallas",         slug: "dallas",          state: "TX" },
  { name: "Austin",         slug: "austin",          state: "TX" },
  // Florida
  { name: "Miami",          slug: "miami",           state: "FL" },
  // Georgia
  { name: "Atlanta",        slug: "atlanta",         state: "GA" },
  // Illinois
  { name: "Chicago",        slug: "chicago",         state: "IL" },
  // Arizona
  { name: "Phoenix",        slug: "phoenix",         state: "AZ" },
  // Washington
  { name: "Seattle",        slug: "seattle",         state: "WA" },
  // Oregon
  { name: "Portland",       slug: "portland",        state: "OR" },
  // Colorado
  { name: "Denver",         slug: "denver",          state: "CO" },
  // Nevada
  { name: "Las Vegas",      slug: "las-vegas",       state: "NV" },
  // Massachusetts
  { name: "Boston",         slug: "boston",          state: "MA" },
  // Tennessee — no state page yet, but Nashville city page exists
  { name: "Nashville",      slug: "nashville",       state: "TN" },
  // DC
  { name: "Washington DC",  slug: "washington-dc",   state: "DC" },
];

// ──────────────────────────────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────────────────────────────

/** Look up the parent state-page ref for a given city's state abbreviation. */
export function getStatePage(stateAbbr: string): StatePageRef | undefined {
  return STATE_PAGES.find((s) => s.abbr === stateAbbr);
}

/**
 * Look up a city-page ref by display name (case-insensitive, ignores
 * extra whitespace). Used by state pages to detect which entries in their
 * `neighborhoods` array correspond to a real city page so the template can
 * render them as Links instead of plain text.
 *
 * Handles common aliases: "NYC" / "New York" / "New York City" all
 * resolve to the same ref.
 */
export function findCityPageByName(rawName: string): CityPageRef | undefined {
  const norm = rawName.toLowerCase().replace(/\s+/g, " ").trim();

  // Direct match
  const direct = CITY_PAGES.find((c) => c.name.toLowerCase() === norm);
  if (direct) return direct;

  // Common aliases for the disambiguated cities
  const aliases: Record<string, string> = {
    "nyc": "New York City",
    "new york": "New York City",
    "la": "Los Angeles",
    "sf": "San Francisco",
    "san fran": "San Francisco",
    "vegas": "Las Vegas",
    "dc": "Washington DC",
    "washington d.c.": "Washington DC",
    "atl": "Atlanta",
  };
  const aliasTarget = aliases[norm];
  if (aliasTarget) {
    return CITY_PAGES.find((c) => c.name === aliasTarget);
  }

  return undefined;
}

/**
 * Get sibling cities (other cities in the same state that have their own
 * page) for a given city slug. Empty array if the city has no siblings or
 * doesn't exist in CITY_PAGES.
 */
export function getSiblingCities(citySlug: string): ReadonlyArray<CityPageRef> {
  const me = CITY_PAGES.find((c) => c.slug === citySlug);
  if (!me) return [];
  return CITY_PAGES.filter((c) => c.state === me.state && c.slug !== citySlug);
}
