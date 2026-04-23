# Wild Posting Purge — Execution Spec

**Status:** Finalized 2026-04-22 · Ready to execute
**Scope:** 178 occurrences across 31 shipped files
**Companion doc:** `docs/seo/SEO_COMPETITOR_KEYWORDS.md` (competitor intel, trademark landscape)

---

## Core Directive

1. **Lead term everywhere our positioning lives: `wheat pasting`** (two words, gerund/verb — generic, predates any TM, user directive)
2. **`Wild Posting` stripped from all service positioning** — H1s, meta titles, OG titles, schema `alternateName`, keyword arrays, section headers that describe OUR offering
3. **`Wild Posting` PRESERVED as descriptive terminology** — in educational/comparative blog prose, FAQ definitions, historical citations. Never framed as our service; always as "a term used" or "sometimes called"
4. **Claim the open brand category: `wheat pasting company`** — no competitor anchors on this exact phrase
5. **No URL renames.** All slugs stay. All changes are in-page text, metadata, schema, and image filenames

---

## Category-Level Keyword Strategy (validated)

### Tier 1 — Lead terms (use everywhere our positioning lives)
- `wheat pasting` / `wheat paste` (two words)
- `wheat pasting company` / `wheat pasting agency`
- `wheat paste poster campaigns`

### Tier 2 — Co-anchors (alternate in secondary slots; batch into keywords arrays)
- `street postering`
- `poster campaigns` / `poster advertising`
- `flyposting` / `fly posting`
- `guerrilla postering` / `guerrilla marketing`

### Tier 3 — Format-specific (long-tail, city + format landing pages)
- `snipe posters` / `snipe advertising`
- `sidewalk stencils` / `chalk stencil activations`
- `pole wrap advertising`
- `sidewalk decals` / `floor decal advertising`
- `wheat paste murals`

### Tier 4 — Geographic modifiers (stack with Tier 1 on city pages)
- `wheat pasting [city]` — LA, NYC, Miami, Chicago, Atlanta, Phoenix, Denver
- `wheat paste posters [city]`
- `[neighborhood] wheat pasting` — Melrose, Silver Lake, Fairfax, Williamsburg, LES, Wynwood, Wicker Park

### Banned in our positioning (preserved only as descriptive reference)
- `Wild Posting` (TM — wildposting.com)
- `Wheatpaste Posters` as capitalized brand phrase (TM — Printing Digital USA)
- `Wheatpasting` as one-word brand phrase (claimed TM — Printing Digital USA)

---

## Final Decision Table — Execute Without Re-Asking

### Row structure: `Context · Current · New · Rule`

#### Homepage (`app/page.tsx`, `app/layout.tsx`, `components/hero/HeroSection.tsx`)

| Slot | Current | New | Notes |
|---|---|---|---|
| H1 hero pill text | `Wheat Pasting & Wild Posting Agency` | **`Wheat Pasting Company · Nationwide Poster Campaigns`** | Claims unclaimed brand category |
| Meta title (root layout) | contains "wild posting" | **`Phantom Pasting — Wheat Pasting Company \| Nationwide Poster Campaigns`** | Lead with "wheat pasting company" |
| Meta description | contains "wild posting" | **`Nationwide wheat pasting company. 500+ wheat paste poster campaigns across 50+ US cities. 100% photo-documented. FashionPass, FIFA World Cup, Incrediwear.`** | |
| OG title | contains "wild posting" | Same as meta title | |
| OG description | contains "wild posting" | **`Street-level wheat paste and poster campaigns across 50+ US cities. 500+ campaigns. 100% documented. FashionPass, FIFA World Cup, Incrediwear.`** | |
| Keywords array | includes `"wild posting company"`, `"wild posting advertising"` | Replace with: **`"wheat pasting company", "wheat paste poster campaigns", "street postering", "poster campaigns", "flyposting", "guerrilla postering", "snipe posters", "sidewalk stencils", "wheat paste advertising", "street poster advertising"`** | Expand while we're in here |
| Schema `Organization.alternateName` | `"Wild Posting"` | **`["Wheat Pasting Company", "Street Postering Agency", "Poster Campaign Agency", "Guerrilla Postering Company"]`** | Array, not string |
| Service enumerations in body | `wheat pasting, wild posting, and chalk stencils` | **`wheat pasting, street postering, and chalk stencils`** | Consistent across site |

#### Service pages (`app/services/**`)

| Page | Slot | Current | New |
|---|---|---|---|
| `/services/wheat-pasting` | H1 | (already "Wheat Pasting") | Keep |
| `/services/wheat-pasting` | keywords array includes `"wild posting"` | — | Replace with `"street postering"`, add `"flyposting"`, `"guerrilla postering"`, `"wheat pasting company"` |
| `/services/wheat-pasting` | Schema `alternateName: "Wild Posting"` | — | **`alternateName: ["Street Postering", "Poster Campaigns", "Flyposting", "Guerrilla Postering"]`** |
| `/services/wheat-pasting` | Body: "legal wild-posting corridors" / "legal wild-posting rights" | — | **`legal poster-campaign corridors`** / **`legal street-postering rights`** |
| `/services/full-impact-campaigns` | All 8 occurrences in service enumerations | `wheat pasting, wild posting, and chalk stencils` | **`wheat pasting, street postering, and chalk stencils`** (use `replace_all`) |
| `/services/full-impact-campaigns` | keyword `"wheat pasting and wild posting"` | — | **`"wheat pasting and street postering"`**; also add `"poster campaigns"`, `"flyposting"` |
| `/services` | 3 occurrences of `wild posting` in service descriptions | — | Replace with `street postering` |

#### Location pages (`app/locations/**`)

Pattern applies to all 6 city pages (LA, NYC, Miami, Chicago, Atlanta, + page.tsx hub):

| Slot | Pattern | New Pattern |
|---|---|---|
| H1 in CityPageTemplate | `WHEAT PASTING &\nWILD POSTING IN\n[CITY]` | **`WHEAT PASTING\nIN [CITY]\n— POSTER CAMPAIGNS`** (CityPageTemplate) |
| Meta title | `Wheat Pasting & Wild Posting in [City]` | **`Wheat Pasting [City] — Poster Campaigns \| Phantom Pasting`** |
| Meta description | `Wheat pasting and wild posting in [city]...` | **`Wheat pasting and street poster campaigns in [city]. Large-format wheat paste posters across [neighborhoods].`** |
| Keywords array | `["wheat pasting [city]", "wild posting [city-abbrev]", ...]` | **`["wheat pasting [city]", "street postering [city]", "poster campaigns [city]", "flyposting [city]", "wheat paste posters [city]", "[neighborhood] wheat pasting", "guerrilla marketing [city]"]`** |
| Body: "wheat pasting and wild posting campaigns" | — | **`wheat pasting and street poster campaigns`** |
| Image alt text | `wild posting wall in [city]` | **`wheat paste poster wall in [city]`** |
| Miami-specific: `"Wynwood wild posting"` (keyword) | — | **`"Wynwood wheat pasting"`**, `"Wynwood poster campaigns"` |

Special: `app/locations/page.tsx` (hub) — update intro copy + 2 image refs + 1 alt tag with the same pattern.

#### Work / Case Studies (`app/work/**`)

**FashionPass LA (`app/work/fashionpass-los-angeles/page.tsx`) — 12 occurrences:**

| Slot | Current | New |
|---|---|---|
| `headline` in schema | `FashionPass Wild Posting Campaign — Los Angeles` | **`FashionPass — Wheat Paste Poster Campaign in Los Angeles`** |
| Meta title | includes "wild posting" | **`FashionPass LA Case Study — Wheat Paste Campaign \| Phantom Pasting`** |
| Meta description | includes "wild posting" | **`FashionPass wheat paste and street poster campaign across Los Angeles. Large-format posters in Melrose, Silver Lake, and DTLA. Photo documented.`** |
| Keywords | `"FashionPass wild posting", "wild posting LA"` | **`"FashionPass wheat paste", "wheat pasting LA", "street postering LA", "FashionPass case study", "poster campaigns Los Angeles"`** |
| OG image alt | `FashionPass wild posting campaign wall in Los Angeles` | **`FashionPass wheat paste poster wall campaign in Los Angeles`** |
| Section H2 `Why Wild Posting for Fashion` | — | **`Why Wheat Pasting Wins for Fashion Brands`** |
| Body copy: "pitched wild posting as a flanking move" | — | **`pitched wheat pasting as a flanking move`** |
| Body copy: "Wild posting campaigns get tagged..." | — | **`Street poster campaigns get tagged...`** |
| Body copy: "running wild posting campaigns for brands since 2018" | — | **`running wheat paste poster campaigns for brands since 2018`** |
| FAQ: "What makes wild posting a fit for fashion brands specifically?" | — | **`What makes wheat pasting a fit for fashion brands specifically?`** + rewrite answer to lead with "wheat pasting" |
| Hash anchor (if exists) `#why-wild-posting-for-fashion` | — | **`#why-wheat-pasting-wins-for-fashion`** (update anchor + any in-page TOC links) |

**FIFA World Cup Atlanta (`app/work/fifa-world-cup-atlanta/page.tsx`) — 10 occurrences:**

| Slot | Current | New |
|---|---|---|
| Keywords | `"wild posting Atlanta"` | **`"wheat pasting Atlanta", "street postering Atlanta", "poster campaigns Atlanta", "sports event marketing Atlanta"`** |
| Schema description | `Large-format wheat paste and wild posting campaign for FIFA...` | **`Large-format wheat paste poster campaign for FIFA World Cup across prime walls in Atlanta.`** |
| Body: "Massive wheat paste and wild posting campaign" | — | **`Massive wheat paste poster campaign`** |
| Body: "Wild posting reaches them exactly..." | — | **`Street poster campaigns reach them exactly...`** |
| Body: "Event wild posting is inherently event-locked" | — | **`Event-based poster campaigns are inherently event-locked`** |
| Body: "event-driven wild posting for five World Cup..." | — | **`event-driven poster campaigns for five World Cup...`** |
| Body: "Wild posting hits a crowd..." | — | **`Street poster campaigns hit a crowd...`** |
| Section H2 `Why Wild Posting for Sports` | — | **`Why Wheat Pasting Wins for Major Sports Events`** |
| FAQ: "How far ahead of an event should a wild posting campaign launch?" | — | **`How far ahead of an event should a wheat paste campaign launch?`** |

**Incrediwear (`app/work/incrediwear-street-campaign/page.tsx`) — 3 occurrences:**

| Slot | Current | New |
|---|---|---|
| Body: "wild posting for eight performance and recovery brands since 2020" | — | **`wheat paste and pole wrap campaigns for eight performance and recovery brands since 2020`** (leans into pole wrap — the Incrediwear hero format) |
| Section H2 `Why Wild Posting for Wellness` | — | **`Why Street Posters Work for Wellness Brands`** (varies from the other two case studies — prevents identical H2 pattern across the triad) |
| Body: "multi-format wild posting for wellness and performance" | — | **`multi-format street poster campaigns for wellness and performance`** |

**`/work/page.tsx` hub — 4 occurrences:**

| Slot | Current | New |
|---|---|---|
| Meta description | `FashionPass LA, FIFA World Cup Atlanta, Incrediwear. Wheat pasting and wild posting case studies...` | **`FashionPass LA, FIFA World Cup Atlanta, Incrediwear. Wheat pasting and poster campaign case studies, fully photo-documented.`** |
| FashionPass card `alt` | `FashionPass wild posting wall in Los Angeles` | **`FashionPass wheat paste poster wall in Los Angeles`** |
| Image src in body (2×) | `fashionpass-wheat-paste-wild-posting-wall-los-angeles.webp` | **`fashionpass-wheat-paste-street-postering-wall-los-angeles.webp`** (already renamed via `git mv`) |

#### About (`app/about/page.tsx`) — 5 occurrences

| Slot | Current | New |
|---|---|---|
| Meta description | `Wheat pasting, wild posting, and chalk stencil activations nationwide` | **`Wheat pasting, street postering, and chalk stencil activations nationwide`** |
| Keywords: `"wild posting agency"` | — | **`"wheat pasting agency", "poster campaign agency", "street postering agency"`** |
| Body paragraph: `wild posting, and chalk stencils` | — | **`street postering, and chalk stencils`** |
| Image `src` | `fashionpass-wheat-paste-wild-posting-wall-los-angeles.webp` | **renamed filename** |
| Body: "wheat pasting, chalk stencils, wild posting" | — | **`wheat pasting, chalk stencils, street postering`** |

#### Gallery (`app/gallery/page.tsx` + `lib/gallery-data.ts`)

| Slot | Current | New |
|---|---|---|
| Meta description | `wheat paste, wild posting, and chalk spray stencil campaigns` | **`wheat paste, street postering, and chalk spray stencil campaigns`** |
| All 12 gallery items with `tag: "Wild Posting"` | — | **`tag: "Street Postering"`** |
| All alt texts containing "wild posting" | — | Replace with "street postering" or "wheat paste campaign" context-specific |
| Filename reference | `wild-posting` in filename | **`street-postering`** (already renamed) |

#### Contact (`app/contact/page.tsx`) — 1 occurrence

| Slot | Current | New |
|---|---|---|
| Keywords: `"wild posting campaign quote"` | — | **`"wheat pasting quote", "poster campaign quote", "wheat paste campaign pricing"`** |

#### SiteMap Images (`app/sitemap-images.xml/route.ts`) — 9 occurrences

All occurrences are `title:` or `caption:` fields on image entries. Rule:
- Replace `wild posting` → **`wheat paste poster campaign`** (reads better as image context for Google Image Search than "street postering")
- Replace filename key + all 3 filename-in-array refs → **renamed filename**

#### llms.txt (`public/llms.txt`) — 2 occurrences

| Current | New |
|---|---|
| `wheat pasting, wild posting, and chalk spray stencil campaigns across 50+ US cities` | **`wheat pasting, street postering, and chalk spray stencil campaigns across 50+ US cities. Also known as poster campaigns, flyposting, or guerrilla postering.`** |
| `Combined wheat pasting + stencil + wild posting packages` | **`Combined wheat pasting + stencil + poster campaign packages`** |

#### Data files

**`lib/business.ts` — 1 occurrence:**
- `ogImageDefault: "/gallery/fashionpass-wheat-paste-wild-posting-wall-los-angeles.webp"` → **renamed filename**

**`lib/blogRegistry.ts` — 8 occurrences (MIXED — some KEEP as descriptive):**
- L379-380 FAQ "Is wheat pasting the same as wild posting?" → **KEEP but soften answer** to: *"Wheat pasting is the craft. `Wild posting` is a US trade term some agencies use. `Flyposting` is the international equivalent. At Phantom Pasting, we operate as a wheat pasting company — focused on the medium, not the trade name."* (descriptive, not positioning)
- L403 description mentioning "wheat pasting and wild posting" → **`wheat pasting, flyposting, and poster campaigns`**
- L405, L416 flyposting explanatory prose → **KEEP** (educational/comparative)
- L423-424 "flyposting vs wild posting" FAQ → **KEEP** (educational comparison post)
- L569 heroImage filename → **renamed**

**`lib/gallery-data.ts` — 12 occurrences:**
- 1× filename: renamed
- 8× `tag: "Wild Posting"` → **`"Street Postering"`**
- 3× alt text "wild posting" → **"wheat paste poster"** context-specific

#### Shared components

**`components/sections/StaticSEOSections.tsx` — 8 occurrences:**
- H2 `How It Works — Our Wheat Pasting & Wild Posting Process` → **`How It Works — Our Wheat Pasting & Poster Campaign Process`**
- H2 `Frequently Asked Questions — Wheat Pasting & Wild Posting` → **`Frequently Asked Questions — Wheat Pasting & Poster Campaigns`**
- Body: "500+ Wheat pasting and wild posting campaigns delivered" → **`500+ wheat pasting and poster campaigns delivered`**
- Body: "Nationwide wild posting deployment" → **`Nationwide poster campaign deployment`**
- Body: "Every wild posting placement is mapped" → **`Every poster placement is mapped`**
- Body: "Single-market drops or simultaneous national wild posting" → **`Single-market drops or simultaneous national poster campaigns`**
- Body: "wild posting placement photographed" → **`poster placement photographed`**
- Body: "pasting and wild posting campaigns live at street level" → **`pasting and poster campaigns live at street level`**

**`components/sections/ScrollSections.tsx` — 2 occurrences:**
- Both are image filename references → **renamed filename**

**`components/hero/HeroSection.tsx` — 1 occurrence:**
- `Wheat Pasting &amp; Wild Posting Agency` → **`Wheat Pasting Company · Nationwide`** (matches homepage hero pill decision above)

**`components/CityPageTemplate.tsx` — 1 occurrence:**
- `WHEAT PASTING &amp;<br />WILD POSTING IN<br />[city]` → **`WHEAT PASTING<br />IN {CITY}<br />— POSTER CAMPAIGNS`**

#### Blog content

**`content/blog/flyposting-explained.tsx` — 6 occurrences:**
- **KEEP ALL 6** — this is the educational post explaining term differences. That's literally its SEO purpose. Verify each mention frames "wild posting" as *a term used in the industry*, not as Phantom Pasting's service.
- At post CTA / closing paragraph: ensure the call-to-action references "wheat pasting" / "poster campaigns" (not wild posting).

**`content/blog/what-is-wheat-pasting.tsx` — 1 occurrence:**
- `Wildposting.com, AltTerrain, DashTwo, Phantom Pasting, and...` → **KEEP** (factual citation of competitor domain)

---

## Internal-Linking Rules

1. **No URL/slug renames.** Every existing `<Link href="...">` stays. Only visible text (anchor label) and metadata change.

2. **Hash anchors get renamed for section H2 changes:**
   - `#why-wild-posting-for-fashion` → `#why-wheat-pasting-wins-for-fashion`
   - `#why-wild-posting-for-sports` → `#why-wheat-pasting-wins-for-major-sports-events`
   - `#why-wild-posting-for-wellness` → `#why-street-posters-work-for-wellness-brands`
   - Search the codebase for any `href="#...wild-posting..."` and update to match the new H2 slugs.

3. **Anchor-text rewrites** (in-body links across blog posts / service pages):
   - "our wild posting service" → **"our wheat paste poster campaigns"**
   - "wild posting in Los Angeles" → **"wheat pasting in Los Angeles"**
   - Preserve every `href` target.

4. **Image `src` updates** (9 files reference the renamed `.webp`): single `replace_all` pattern — `wild-posting-wall-los-angeles` → `street-postering-wall-los-angeles`.

5. **Nav (`SiteNav.tsx`):** if the primary nav currently includes "Wild Posting" as a menu item, change to "Services" (keep structure) — verify during build.

---

## Pillar + Cluster Structure (final, aligned to agency template)

```
Phantom Pasting Information Architecture
│
├── PILLAR 1 · Wheat Pasting (lead service)
│   ├── Hub: /services/wheat-pasting
│   └── Clusters (blog):
│       • /blog/how-to-make-wheat-paste
│       • /blog/wheat-paste-recipes
│       • /blog/what-is-wheat-pasting
│       • /blog/wheat-pasting-cost
│       • /blog/wheat-pasting-vs-billboards
│       • /blog/is-wheat-pasting-legal
│
├── PILLAR 2 · Poster Campaigns / Street Postering (category claim)
│   ├── Hub: /services (broad services page)
│   └── Clusters (blog):
│       • /blog/street-postering-tools
│       • /blog/snipe-posters-vs-wheat-paste-vs-floor-decals
│       • /blog/flyposting-explained
│       • /blog/wheat-pasting-campaign
│
├── PILLAR 3 · City / Local Coverage (geographic authority)
│   ├── Hub: /locations
│   └── Clusters:
│       • /locations/los-angeles + /blog/wheat-pasting-los-angeles
│       • /locations/new-york + /blog/wheat-pasting-new-york
│       • /locations/miami
│       • /locations/chicago
│       • /locations/atlanta
│       • /blog/wheat-pasting-phoenix
│
├── PILLAR 4 · Industry Proof / Case Studies (E-E-A-T)
│   ├── Hub: /work
│   └── Clusters:
│       • /work/fashionpass-los-angeles + /blog/wheat-pasting-for-fashion-brands
│       • /work/fifa-world-cup-atlanta + /blog/guerrilla-marketing-for-music (events angle)
│       • /work/incrediwear-street-campaign
│
└── Full Impact Campaigns (cross-pillar)
    └── /services/full-impact-campaigns  ← links up to all 4 pillars
```

**Internal linking rule per pillar:**
- Every blog post in a cluster links UP to its pillar hub at least once
- Pillar hub links DOWN to at least 3 cluster posts
- Every case study links horizontally to 1 relevant city page + 1 relevant service page
- 3 in-body links per blog post (already specified in blog plan)

---

## Case Study Handling — Final Answer

### FashionPass LA
- **H1:** `FashionPass — Wheat Paste Poster Campaign in Los Angeles`
- **Why:** "Wheat paste poster" is descriptive, lead keyword, zero TM risk. "Campaign" signals it's a case study, not a product. "Los Angeles" for local SEO.
- **Section H2 (was "Why Wild Posting for Fashion"):** `Why Wheat Pasting Wins for Fashion Brands`

### FIFA World Cup Atlanta
- **Section H2 (was "Why Wild Posting for Sports"):** `Why Wheat Pasting Wins for Major Sports Events`
- **Why "Major Sports Events" not just "Sports":** the case study is specifically about a tournament moment. Stacks more long-tail specificity.

### Incrediwear
- **Section H2 (was "Why Wild Posting for Wellness"):** `Why Street Posters Work for Wellness Brands`
- **Why different pattern from the other two:** if all three case studies used "Why Wheat Pasting Wins for [X]" it reads as template-filler and tanks topical authority. Incrediwear's hero format is pole wraps + street-level — "Street Posters" fits the actual installation better.

---

## Keyword Gap Closures (NEW terms to ADD during the purge pass)

While we're already editing all 31 files, inject these high-opportunity terms into the meta `keywords` arrays wherever contextually appropriate:

| Keyword | Priority | Where to add |
|---|---|---|
| `wheat pasting company` | **P0** | Homepage, layout.tsx, about, services, locations hub |
| `poster campaigns` | P0 | Every service page, every location page, homepage |
| `street postering` | P0 | Every service page, every location page |
| `flyposting` / `fly posting` | P1 | Every service + location page, blog posts |
| `guerrilla postering` | P1 | Homepage, services, about |
| `snipe posters` / `snipe advertising` | P1 | Full impact campaign page, services page |
| `sidewalk stencils` | P1 (already used) | Ensure appears on services + full impact pages |
| `pole wrap advertising` | P2 | Incrediwear case study, full impact services |
| `wheat paste posters` | P0 | Every page (drop into body prose where natural) |
| `wheat paste advertising` | P1 | Services, about, locations |
| `alternative OOH` | P2 | About, services (positioning language) |
| `wheat paste mural` | P2 | Services, blog where relevant |

---

## Execution Order (single-session, no commit/push)

1. **Data files first** (lib/*) — break nothing downstream
   - `lib/gallery-data.ts`
   - `lib/blogRegistry.ts` (respecting KEEP rules for educational FAQ)
   - `lib/business.ts`

2. **Shared components**
   - `components/hero/HeroSection.tsx`
   - `components/CityPageTemplate.tsx`
   - `components/sections/StaticSEOSections.tsx`
   - `components/sections/ScrollSections.tsx`

3. **Top-level app shells**
   - `app/layout.tsx`
   - `app/page.tsx`
   - `app/gallery/page.tsx`
   - `app/contact/page.tsx`

4. **About + services**
   - `app/about/page.tsx`
   - `app/services/page.tsx`
   - `app/services/wheat-pasting/page.tsx`
   - `app/services/full-impact-campaigns/page.tsx`

5. **Locations (6 pages)**
   - `app/locations/page.tsx`
   - `app/locations/los-angeles/page.tsx`
   - `app/locations/new-york/page.tsx`
   - `app/locations/miami/page.tsx`
   - `app/locations/chicago/page.tsx`
   - `app/locations/atlanta/page.tsx`

6. **Work / Case studies**
   - `app/work/page.tsx`
   - `app/work/fashionpass-los-angeles/page.tsx`
   - `app/work/fifa-world-cup-atlanta/page.tsx`
   - `app/work/incrediwear-street-campaign/page.tsx`

7. **Routes + static**
   - `app/sitemap-images.xml/route.ts`
   - `public/llms.txt`

8. **Blog (selective — only non-educational)**
   - `content/blog/flyposting-explained.tsx` → verify positioning, KEEP descriptive uses
   - `content/blog/what-is-wheat-pasting.tsx` → KEEP the 1 competitor-citation mention

9. **Build verification**
   - `npm run build` — must pass clean
   - `grep -ri "wild posting" app/ components/ lib/ content/ public/llms.txt` — expected residual: only the 6 `flyposting-explained.tsx` instances + 1 `what-is-wheat-pasting.tsx` citation + 2-3 `blogRegistry.ts` educational FAQ mentions. Zero elsewhere.

10. **STOP — await user preview approval before commit/push.**

---

## Implementation Roadmap (4-phase — post-purge growth)

### Phase 1 · Foundation (this session + 2 weeks)
- [x] Competitor intel + replacement hierarchy documented
- [ ] Purge executed per this spec (this session)
- [ ] Build passes + residual grep clean
- [ ] User preview + approval
- [ ] Deploy to Netlify
- [ ] Submit updated sitemap to GSC
- [ ] Update Organization schema with new `alternateName` array

### Phase 2 · Expansion (weeks 3-10)
- [ ] Ship blog posts 1–5 from the 15-post plan (2/week cadence)
- [ ] Lead posts: "What Is Wheat Pasting", "How to Make Wheat Paste", "Wheat Pasting Cost 2026"
- [ ] Add FAQ schema on every new post
- [ ] Build internal links from each post to the relevant pillar hub

### Phase 3 · Scale (weeks 11-24)
- [ ] Ship remaining 10 blog posts
- [ ] Add 3-4 new city pages (Phoenix, Denver, Seattle, Boston)
- [ ] Publish one original "field data" post with citable numbers (e.g. "wheat paste behavior across 12 cities — a data study") — GEO target
- [ ] Pursue 20 targeted backlinks from design/marketing blogs citing our installer voice

### Phase 4 · Authority (months 7-12)
- [ ] Thought-leadership post: "State of Wheat Pasting 2027" — data report format
- [ ] Add Person schema for Mateo Vargas byline on every post
- [ ] Land 3+ podcast interviews (industry authority)
- [ ] Monitor AI citation in ChatGPT / Perplexity / Google AI Overviews for "wheat pasting company" + "wheat paste advertising" + "street poster campaigns"

---

## KPI Baseline (post-purge)

| Metric | Baseline (pre-purge) | 3 Month | 6 Month | 12 Month |
|---|---|---|---|---|
| Organic keywords ranking | ~100 (estimate) | 300 | 700 | 1,200 |
| Organic traffic / month | ~80 | 400 | 1,200 | 2,500 |
| Indexed pages | 21 | 30+ (after first 5 posts live) | 36+ | 36+ (all 15 posts) |
| Ranking for `wheat pasting company` | Not ranking | Page 2 | Page 1 | #1–3 |
| Ranking for `wheat pasting [city]` (avg across 7 cities) | Not ranking | Page 2 | Page 1 | Top 3 |
| Ranking for `flyposting` + variations | Not ranking | Page 3 | Page 2 | Page 1 |
| Referring domains | Current baseline + 15 | +30 | +60 | +100 |
| Core Web Vitals | Current (good after perf-lite work) | Maintain | Maintain | Maintain |

Target: close 50% of the gap to wildposting.com (3,228 traffic → 1,600 traffic for us) by month 12.

---

## Risk Register

| Risk | Likelihood | Mitigation |
|---|---|---|
| wildposting.com TM C&D letter | Medium (was rising) → **Low** after purge | Purge ships, all "Wild Posting" removed from positioning; preserve only as educational citation |
| Ranking regression mid-purge | Low | No URL/slug renames. Content additions exceed removals per page. Title tag changes lead with existing high-authority term ("wheat pasting") |
| New keyword "street postering" has insufficient volume | Medium (no Semrush data to confirm) | Mitigate by BATCHING keywords — keywords array includes 8+ terms per page; relying on any single term is avoided |
| Internal links break from hash anchor renames | Low | Step 10 build check + grep pass catches them |
| Blog educational mentions flagged by wildposting.com | Very Low | Educational use of trademarked terms (nominative fair use) is well-established doctrine; disclaim ownership in each mention |

---

## Ready to Execute

Every decision in the decision tables above is final. No further clarification needed. Run the purge in the order listed. Stop before commit per user rule.
