# Location Pages — Tier 2 Follow-ups

**Created:** 2026-04-25
**Revisit by:** ~2026-05-09 (week or two after the nationwide expansion ships)
**Owner:** denicio

---

## Context

We just shipped (uncommitted at time of writing):

- 22 new location pages (10 state pages + 12 city pages)
- EEAT byline + lastUpdated stamp on every location page
- FAQPage schema on every location page (4–5 Qs each, ~150 net-new FAQ entries)
- `lib/locationGraph.ts` — central state ↔ city map for auto-rendered cross-links
- Auto-rendered "← Part of [State] Statewide Rollouts" upward-nav callout on every city page
- Auto-rendered "Other [State] markets" sibling-cities cross-link section before CTA
- State pages: cities with their own page now render as Links with hover accent
- Per-page heroStats (3 stats) on top 12 high-impact pages
- Mobile nav simplified — Locations is now a direct link to /locations (no accordion)
- Mega-footer on every page lists all 13 states + 5 cities under each

---

## Tier 2 follow-ups (defer 1–2 weeks)

These were flagged as worthwhile but lower-priority during the Tier 1 push. Revisit after the new pages have had time to be crawled + start surfacing in GSC.

### 1. Hero images repeat across new pages

Most of the 22 new pages reuse 2–3 stock gallery images on rotation (`fashionpass-wheat-paste-...`, `dont-fall-off-wheat-paste-urban-wall-pink`, `incrediwear-pole-wrap-...`). On their own each is fine; in aggregate the gallery feels less varied.

**Options:**
- (a) Live with it — acceptable for SEO; users scroll fast past hero images
- (b) Add 4–6 more stock-style hero images and rotate by slug-hash (low effort)
- (c) Commission city-specific photos for the top 5 cities when budget allows

**Recommendation:** option (a) until we see GSC data showing image-search demand for specific cities.

### 2. Breadcrumb does not show the state for city pages

Current: `Home › Locations › Los Angeles`
Could be: `Home › Locations › California › Los Angeles`

Pros: clarifies hierarchy + reinforces state→city relationship for crawlers.
Cons: requires per-city state mapping (already exists in `lib/locationGraph.ts`) + adds nav complexity + potential mobile wrap on long names like "San Francisco".

**Recommendation:** small lift — extend CityPageTemplate breadcrumb to read `getStatePage(data.state)` and inject the state crumb when present. Verify mobile wrap on narrow viewports before shipping.

### 3. "Recent campaigns in [city]" cross-link rail per city

Each city page could pull a "Recent campaigns" rail from `/work` when applicable:
- LA → FashionPass case study
- Atlanta → FIFA World Cup case study
- NYC → Incrediwear case study

Currently partially handled via the spotlight section's `links` array, but a dedicated structured rail with hero image + thumbnail per case study would convert better.

**Recommendation:** medium lift — add `recentCampaigns?: Array<{ slug: string; client: string; image: string }>` to `CityPageData`, then render below the FAQ. Requires manually populating per city OR adding a `cities: ["los-angeles"]` tag to each case study in `app/work/`.

### 4. Mobile breadcrumb wrap test on narrow viewports

Verify that long city names ("San Francisco", "Las Vegas", "Washington DC") don't wrap awkwardly inside the breadcrumb on iPhone SE / 375px viewports. If they do, consider `flex-wrap` adjustments or truncating with `…` past N chars.

**Recommendation:** quick visual test on real device or Chrome DevTools mobile emulation. Probably no fix needed but worth checking.

### 5. Schema validation pass

Run all 30 location pages through [Google Rich Results Test](https://search.google.com/test/rich-results) and [validator.schema.org](https://validator.schema.org/) before relying on them for ranking.

The Service + FAQPage + Breadcrumb schema combination is dense — worth validating that Google parses each cleanly. Also confirms the `provider: { @id: ORG_ID }` chain resolves correctly.

**Recommendation:** spot-check 5 pages (LA, NYC, California, Texas, Nashville) — if those validate, the rest will too since they share the template.

---

## How to use this doc

1. Open `/locations/los-angeles` (or any new page) in a browser
2. Scan for the rough spot the follow-up describes
3. If you want to action it: open this doc + the relevant component file (`components/CityPageTemplate.tsx`, `lib/locationGraph.ts`, `app/locations/<slug>/page.tsx`)
4. If you don't: leave it. Tier 2 is intentionally lower-priority — none of these will block ranking gains from the Tier 1 work.

When all five are addressed (or explicitly skipped), delete this file.
