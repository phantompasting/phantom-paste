/**
 * Single source of truth for the nationwide coverage claim: every US state
 * (+ DC), each with the metros we cover there. Consumed by:
 *
 *   - components/CoverageMap.tsx  — interactive US map on /locations
 *   - app/locations/page.tsx      — typographic state/city index + schema
 *
 * `slug` on a state = /locations/<slug> landing page exists (renders as a
 * link + "statewide rollouts" CTA). `slug` on a city = dedicated city page.
 * Cities without slugs render as plain text — they document per-campaign
 * coverage, not dead links.
 *
 * Ordering is alphabetical by state name (DC files under "Washington DC").
 */

export interface CoverageCity {
  name: string;
  slug?: string;
}

export interface CoverageState {
  name: string;
  /** Two-letter abbreviation; lowercase form keys into US_STATE_PATHS. */
  abbr: string;
  /** /locations/<slug> when a state landing page exists. */
  slug?: string;
  cities: CoverageCity[];
}

export const COVERAGE: ReadonlyArray<CoverageState> = [
  {
    name: "Alabama", abbr: "AL",
    cities: [
      { name: "Birmingham" },
      { name: "Huntsville" },
      { name: "Montgomery" },
      { name: "Mobile" },
    ],
  },
  {
    name: "Alaska", abbr: "AK",
    cities: [
      { name: "Anchorage" },
      { name: "Fairbanks" },
      { name: "Juneau" },
    ],
  },
  {
    name: "Arizona", abbr: "AZ", slug: "arizona",
    cities: [
      { name: "Phoenix", slug: "phoenix" },
      { name: "Tucson" },
      { name: "Mesa" },
      { name: "Scottsdale" },
      { name: "Tempe" },
      { name: "Flagstaff" },
    ],
  },
  {
    name: "Arkansas", abbr: "AR",
    cities: [
      { name: "Little Rock" },
      { name: "Fayetteville" },
      { name: "Bentonville" },
    ],
  },
  {
    name: "California", abbr: "CA", slug: "california",
    cities: [
      { name: "Los Angeles", slug: "los-angeles" },
      { name: "San Francisco", slug: "san-francisco" },
      { name: "San Diego" },
      { name: "Sacramento" },
      { name: "Oakland" },
      { name: "San Jose" },
    ],
  },
  {
    name: "Colorado", abbr: "CO", slug: "colorado",
    cities: [
      { name: "Denver", slug: "denver" },
      { name: "Colorado Springs" },
      { name: "Aurora" },
      { name: "Boulder" },
      { name: "Fort Collins" },
      { name: "Greeley" },
    ],
  },
  {
    name: "Connecticut", abbr: "CT",
    cities: [
      { name: "Hartford" },
      { name: "New Haven" },
      { name: "Stamford" },
      { name: "Bridgeport" },
    ],
  },
  {
    name: "Delaware", abbr: "DE",
    cities: [
      { name: "Wilmington" },
      { name: "Newark DE" },
      { name: "Dover" },
    ],
  },
  {
    name: "Florida", abbr: "FL", slug: "florida",
    cities: [
      { name: "Miami", slug: "miami" },
      { name: "Tampa" },
      { name: "Orlando" },
      { name: "Jacksonville" },
      { name: "Ft. Lauderdale" },
      { name: "St. Petersburg" },
    ],
  },
  {
    name: "Georgia", abbr: "GA", slug: "georgia",
    cities: [
      { name: "Atlanta", slug: "atlanta" },
      { name: "Savannah" },
      { name: "Athens" },
      { name: "Augusta" },
      { name: "Macon" },
      { name: "Columbus" },
    ],
  },
  {
    name: "Hawaii", abbr: "HI",
    cities: [
      { name: "Honolulu" },
      { name: "Hilo" },
      { name: "Kailua" },
    ],
  },
  {
    name: "Idaho", abbr: "ID",
    cities: [
      { name: "Boise" },
      { name: "Meridian" },
      { name: "Idaho Falls" },
    ],
  },
  {
    name: "Illinois", abbr: "IL", slug: "illinois",
    cities: [
      { name: "Chicago", slug: "chicago" },
      { name: "Naperville" },
      { name: "Champaign-Urbana" },
      { name: "Rockford" },
      { name: "Peoria" },
      { name: "Springfield" },
    ],
  },
  {
    name: "Indiana", abbr: "IN", slug: "indiana",
    cities: [
      { name: "Indianapolis" },
      { name: "Fort Wayne" },
      { name: "Bloomington" },
      { name: "South Bend" },
    ],
  },
  {
    name: "Iowa", abbr: "IA",
    cities: [
      { name: "Des Moines" },
      { name: "Iowa City" },
      { name: "Cedar Rapids" },
    ],
  },
  {
    name: "Kansas", abbr: "KS",
    cities: [
      { name: "Wichita" },
      { name: "Kansas City KS" },
      { name: "Topeka" },
      { name: "Lawrence" },
    ],
  },
  {
    name: "Kentucky", abbr: "KY",
    cities: [
      { name: "Louisville" },
      { name: "Lexington" },
      { name: "Bowling Green" },
    ],
  },
  {
    name: "Louisiana", abbr: "LA",
    cities: [
      { name: "New Orleans" },
      { name: "Baton Rouge" },
      { name: "Lafayette" },
      { name: "Shreveport" },
    ],
  },
  {
    name: "Maine", abbr: "ME",
    cities: [
      { name: "Portland ME" },
      { name: "Bangor" },
      { name: "Augusta ME" },
    ],
  },
  {
    name: "Maryland", abbr: "MD", slug: "maryland",
    cities: [
      { name: "Baltimore" },
      { name: "Silver Spring" },
      { name: "Annapolis" },
      { name: "Frederick" },
    ],
  },
  {
    name: "Massachusetts", abbr: "MA", slug: "massachusetts",
    cities: [
      { name: "Boston", slug: "boston" },
      { name: "Cambridge" },
      { name: "Worcester" },
      { name: "Springfield MA" },
      { name: "Lowell" },
      { name: "New Bedford" },
    ],
  },
  {
    name: "Michigan", abbr: "MI", slug: "michigan",
    cities: [
      { name: "Detroit" },
      { name: "Grand Rapids" },
      { name: "Ann Arbor" },
      { name: "Lansing" },
    ],
  },
  {
    name: "Minnesota", abbr: "MN", slug: "minnesota",
    cities: [
      { name: "Minneapolis" },
      { name: "St. Paul" },
      { name: "Duluth" },
      { name: "Rochester MN" },
    ],
  },
  {
    name: "Mississippi", abbr: "MS",
    cities: [
      { name: "Jackson" },
      { name: "Gulfport" },
      { name: "Hattiesburg" },
      { name: "Oxford" },
    ],
  },
  {
    name: "Missouri", abbr: "MO", slug: "missouri",
    cities: [
      { name: "Kansas City" },
      { name: "St. Louis" },
      { name: "Columbia MO" },
      { name: "Springfield MO" },
    ],
  },
  {
    name: "Montana", abbr: "MT",
    cities: [
      { name: "Billings" },
      { name: "Missoula" },
      { name: "Bozeman" },
    ],
  },
  {
    name: "Nebraska", abbr: "NE",
    cities: [
      { name: "Omaha" },
      { name: "Lincoln" },
    ],
  },
  {
    name: "Nevada", abbr: "NV", slug: "nevada",
    cities: [
      { name: "Las Vegas", slug: "las-vegas" },
      { name: "Henderson" },
      { name: "Reno" },
      { name: "North Las Vegas" },
      { name: "Carson City" },
      { name: "Sparks" },
    ],
  },
  {
    name: "New Hampshire", abbr: "NH",
    cities: [
      { name: "Manchester" },
      { name: "Nashua" },
      { name: "Portsmouth" },
    ],
  },
  {
    name: "New Jersey", abbr: "NJ", slug: "new-jersey",
    cities: [
      { name: "Newark" },
      { name: "Jersey City" },
      { name: "Hoboken" },
      { name: "Atlantic City" },
    ],
  },
  {
    name: "New Mexico", abbr: "NM",
    cities: [
      { name: "Albuquerque" },
      { name: "Santa Fe" },
      { name: "Las Cruces" },
    ],
  },
  {
    name: "New York", abbr: "NY", slug: "new-york-state",
    cities: [
      { name: "New York City", slug: "new-york" },
      { name: "Buffalo" },
      { name: "Rochester" },
      { name: "Yonkers" },
      { name: "Syracuse" },
      { name: "Albany" },
    ],
  },
  {
    name: "North Carolina", abbr: "NC", slug: "north-carolina",
    cities: [
      { name: "Charlotte" },
      { name: "Raleigh" },
      { name: "Durham" },
      { name: "Asheville" },
      { name: "Greensboro" },
    ],
  },
  {
    name: "North Dakota", abbr: "ND",
    cities: [
      { name: "Fargo" },
      { name: "Bismarck" },
      { name: "Grand Forks" },
    ],
  },
  {
    name: "Ohio", abbr: "OH", slug: "ohio",
    cities: [
      { name: "Columbus OH" },
      { name: "Cleveland" },
      { name: "Cincinnati" },
      { name: "Dayton" },
      { name: "Akron" },
    ],
  },
  {
    name: "Oklahoma", abbr: "OK",
    cities: [
      { name: "Oklahoma City" },
      { name: "Tulsa" },
      { name: "Norman" },
    ],
  },
  {
    name: "Oregon", abbr: "OR", slug: "oregon",
    cities: [
      { name: "Portland", slug: "portland" },
      { name: "Eugene" },
      { name: "Salem" },
      { name: "Bend" },
      { name: "Beaverton" },
      { name: "Hillsboro" },
    ],
  },
  {
    name: "Pennsylvania", abbr: "PA", slug: "pennsylvania",
    cities: [
      { name: "Philadelphia" },
      { name: "Pittsburgh" },
      { name: "Allentown" },
      { name: "Erie" },
      { name: "Reading" },
      { name: "Lancaster" },
    ],
  },
  {
    name: "Rhode Island", abbr: "RI",
    cities: [
      { name: "Providence" },
      { name: "Newport" },
      { name: "Warwick" },
    ],
  },
  {
    name: "South Carolina", abbr: "SC",
    cities: [
      { name: "Charleston" },
      { name: "Columbia SC" },
      { name: "Greenville" },
      { name: "Myrtle Beach" },
    ],
  },
  {
    name: "South Dakota", abbr: "SD",
    cities: [
      { name: "Sioux Falls" },
      { name: "Rapid City" },
    ],
  },
  {
    name: "Tennessee", abbr: "TN", slug: "nashville", // Nashville city page acts as TN landing
    cities: [
      { name: "Nashville", slug: "nashville" },
      { name: "Memphis" },
      { name: "Knoxville" },
      { name: "Chattanooga" },
    ],
  },
  {
    name: "Texas", abbr: "TX", slug: "texas",
    cities: [
      { name: "Houston", slug: "houston" },
      { name: "Dallas", slug: "dallas" },
      { name: "Austin", slug: "austin" },
      { name: "San Antonio" },
      { name: "Fort Worth" },
      { name: "El Paso" },
    ],
  },
  {
    name: "Utah", abbr: "UT",
    cities: [
      { name: "Salt Lake City" },
      { name: "Provo" },
      { name: "Ogden" },
      { name: "Park City" },
    ],
  },
  {
    name: "Vermont", abbr: "VT",
    cities: [
      { name: "Burlington" },
      { name: "Montpelier" },
    ],
  },
  {
    name: "Virginia", abbr: "VA", slug: "virginia",
    cities: [
      { name: "Richmond" },
      { name: "Virginia Beach" },
      { name: "Norfolk" },
      { name: "Arlington" },
      { name: "Charlottesville" },
    ],
  },
  {
    name: "Washington", abbr: "WA", slug: "washington",
    cities: [
      { name: "Seattle", slug: "seattle" },
      { name: "Spokane" },
      { name: "Tacoma" },
      { name: "Vancouver WA" },
      { name: "Bellevue" },
      { name: "Olympia" },
    ],
  },
  {
    name: "Washington DC", abbr: "DC", slug: "washington-dc",
    cities: [
      { name: "Washington DC", slug: "washington-dc" },
      { name: "Georgetown" },
      { name: "Capitol Hill" },
      { name: "Adams Morgan" },
    ],
  },
  {
    name: "West Virginia", abbr: "WV",
    cities: [
      { name: "Charleston WV" },
      { name: "Morgantown" },
      { name: "Huntington" },
    ],
  },
  {
    name: "Wisconsin", abbr: "WI", slug: "wisconsin",
    cities: [
      { name: "Milwaukee" },
      { name: "Madison" },
      { name: "Green Bay" },
    ],
  },
  {
    name: "Wyoming", abbr: "WY",
    cities: [
      { name: "Cheyenne" },
      { name: "Jackson" },
      { name: "Casper" },
      { name: "Laramie" },
    ],
  },
];

// ── Derived stats (computed, never hand-maintained) ────────────────────

export const COVERAGE_STATS = {
  /** 50 states + DC. */
  states: COVERAGE.length,
  /** Total metros listed across every state. */
  cities: COVERAGE.reduce((n, s) => n + s.cities.length, 0),
  /** States/cities with dedicated landing pages. */
  statePages: COVERAGE.filter((s) => s.slug).length,
  cityPages: COVERAGE.reduce(
    (n, s) => n + s.cities.filter((c) => c.slug).length,
    0
  ),
} as const;

/** Lookup by two-letter abbreviation (case-insensitive). */
export function getCoverageState(abbr: string): CoverageState | undefined {
  const norm = abbr.toUpperCase();
  return COVERAGE.find((s) => s.abbr === norm);
}
