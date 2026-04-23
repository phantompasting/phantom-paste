# Phantom Pasting — How We Beat Every Competitor (v2, Audit-Revised)

**Prepared:** 2026-04-22
**Revised:** 2026-04-22 — after full site audit against v1 recommendations
**Companion doc:** `COMPETITOR_COMPARISON_ANALYSIS.md`
**Scope:** Only the gaps that are actually still open after auditing the current production codebase. Everything the previous version suggested that turned out to already be shipped has been removed.

---

## Audit Results — What the v1 Plan Got Wrong

v1 recommended 6 Tier-1 "fixes" that the site already had. Corrected:

| v1 recommendation | Reality on disk | Verdict |
|---|---|---|
| Add homepage FAQ with FAQPage schema | `HOMEPAGE_FAQS` (6 Qs) → emitted as `FAQPage` JSON-LD on `/` + rendered visibly in `ScrollSections.tsx` FAQSection + mirrored in SSR `StaticSEOSections.tsx` | ✅ Already shipped — remove |
| Add "LEGAL & BIODEGRADABLE" / eco messaging | Already on `/services/chalk-spray-stencils` (full section, lines 342–370). Missing only on `/services/wheat-pasting`. | ⚠️ Partial — narrow fix only |
| Expand TrustBar to 6 stats | TrustBar is a thin phone-CTA strip by design. The **actual** 6-stat trust block is rendered in `ScrollSections.tsx` + `StaticSEOSections.tsx` (50+ cities · 500+ campaigns · 200+ hits · 24hr · 100% · 10 years) | ✅ Already shipped — remove |
| Ship 15-post blog plan | All 15 posts live in `content/blog/*` and registered in `lib/blogRegistry.ts` — including `wheat-pasting-cost`, `wheat-pasting-vs-billboards`, `wheat-pasting-phoenix`, and all 3 city deep-dives | ✅ Already shipped — remove |
| Accelerate `/blog/wheat-pasting-cost` as a priority post | Already live | ✅ Already shipped — remove |
| Create `/compare` hub as empty-state placeholder | Not built. Still a real gap. | ❌ Still open |
| Build `/author/mateo-vargas` page | Not built. Mateo Person schema exists in `lib/blogAuthor.ts`, used by every post, but no dedicated author page. | ❌ Still open |

**v1 correctly identified gaps (still open):**
- No `/compare/*` pages (0 of 5 built)
- No dedicated author page for Mateo Vargas
- No published pricing on service pages
- No client-logo-wall component on homepage
- Only 5 location pages (Phoenix, Austin, Dallas, others not built)
- No adjacent service pages (snipes, floor decals, sticker campaigns, etc.)
- Backlink outreach not started
- No video case studies
- No per-image `ImageObject` JSON-LD on `/gallery`

---

## What We Actually Beat Everyone On (Current State — Verified on Disk)

1. **Blog depth** — 15 live posts (matches or beats dashtwo.com at 38 on quality; beats wildposting.com at 28 on installer voice; crushes sidewalktattoos.com at ~0)
2. **Mateo Vargas installer persona** — Person schema live on every blog post · no competitor has a named author
3. **Homepage FAQ + schema** — 6 Qs visible + FAQPage JSON-LD · only sidewalktattoos.com also does this
4. **Published stats** — 500+ · 10+ years · 50+ cities · 200+ hits · 24hr · 100% photo-doc, all above the fold in ScrollSections
5. **Long-form case studies** — 3 published with Article schema + hero + process + FAQ (FashionPass, FIFA, Incrediwear)
6. **5 neighborhood-detail location pages** — LA, NYC, Chicago, Miami, Atlanta with LocalBusiness schema
7. **Image sitemap with per-image captions + titles** — zero competitors publish this
8. **Eco / biodegradable positioning** — shipped on chalk-spray-stencils page (one gap: missing on wheat-pasting page)
9. **Legal / permit transparency** — `/blog/is-wheat-pasting-legal` live
10. **Consolidated @graph schema** — Org + WebSite + LocalBusiness + hasOfferCatalog in one block on homepage
11. **Modern Next.js 15 SSG, Core Web Vitals tuned** — beats every competitor on performance

## Where We Still Lose (Verified Gaps)

| Gap | Competitor who owns it | Severity | Effort |
|---|---|---|---|
| No `/compare/*` pages | Nobody — wide open wedge | 🔴 High upside | 2–3 wks |
| No published pricing on service pages | AltTerrain (closest) | 🟡 Wedge | 2–3 days |
| No client-logo-wall component on homepage | sidewalktattoos.com, wildposting.com | 🟢 Easy | 3 hrs |
| No author page for Mateo Vargas | Nobody — wide open | 🟢 Easy | 3 hrs |
| Wheat-pasting service page doesn't mention biodegradable | sidewalktattoos.com | 🟢 Easy | 1 hr |
| Only 5 location pages (Phoenix has a blog post but no location page) | sidewalktattoos.com (~85), wildposting.com (34) | 🟠 Strategic | 1 wk per page |
| No backlink campaign yet | wildposting.com (707 on flagship) | 🔴 Critical | 90+ days |
| No adjacent service pages (snipes / floor decals / stickers / pole wraps / scaffold wraps) | americanguerrillamarketing.com (40+ pages) | 🟡 Breadth | 1 wk |
| No video case studies | Nobody | 🟡 Differentiator | Per-campaign |
| No per-image ImageObject JSON-LD on /gallery | Nobody | 🟢 Polish | 1 day |
| No blue-chip enterprise logo (Palantir-tier) | sidewalktattoos.com, wildposting.com | 🟠 Sales-gated | Ongoing |
| International market coverage | wildposting.com, sidewalktattoos.com | 🟠 Strategic | Out of scope for now |

---

## Tier 1 — Ship This Week (All Are Real Gaps Now)

### 1.1 `/compare` hub + first comparison page ⚡ 2–3 days
**Gap:** Zero comparison pages. Nobody in the category has them. First-mover on the entire cluster.
**Ship order:**
- `/app/compare/page.tsx` — hub index with 5 cards (4 "coming soon" + the one we ship first)
- `/app/compare/phantom-pasting-vs-sidewalk-tattoos/page.tsx` — first live comparison
**Why this one first:** Closest peer, identical tier architecture, highest intent.
**Content:** Verdict card + 22-axis matrix + author byline (Mateo) + honest "when to pick them" + FAQ with FAQPage schema
**Components to build once, reuse across all 5:** `ComparisonMatrix`, `VerdictCard`, `ComparisonFAQ`
**Schema:** Product + FAQPage + BreadcrumbList
**Sitemap:** register `/compare` + the first slug in `app/sitemap.ts`
**Nav:** add "Compare" link in `SiteNav.tsx`

### 1.2 `/author/mateo-vargas` author page ⚡ 3 hours
**Gap:** Mateo's Person schema is attached to every blog post, but `mateo-vargas` has no landing URL. Google E-E-A-T weights dedicated author pages.
**Fix:**
- `/app/author/mateo-vargas/page.tsx` — extended bio, credentials ("10+ years on active install crews"), list of all 15 posts, headshot/avatar (illustrated silhouette per original plan — never the real CEO's face), Person schema already in `lib/blogAuthor.ts`
- Update every blog post's byline in `BlogPostLayout.tsx` to link to `/author/mateo-vargas`
- Register in sitemap

### 1.3 Add biodegradable section to `/services/wheat-pasting` ⚡ 1 hour
**Gap:** Chalk-stencils page has "LEGAL & BIODEGRADABLE" section. Wheat-pasting page doesn't — even though wheat paste is literally flour and water, a stronger claim.
**Fix:**
- Copy the section pattern from `/app/services/chalk-spray-stencils/page.tsx` (lines 342–370)
- Rename headline: "BIODEGRADABLE BY CHEMISTRY."
- Three cards: "Flour + water + heat = the original green OOH format" · "Washes off with warm water — no permanent marking, no spray paint" · "Leave-no-trace install standard published — we pick up other crews' residue too"
- No schema change needed (belongs to existing Service schema)

### 1.4 Client logo wall on homepage ⚡ 3 hours
**Gap:** Homepage case-study strip shows 3 campaign thumbnails. Sidewalktattoos.com runs an explicit logo wall with Palantir / FIFA / True Religion / Yonex above the fold. Brand-gravity signal is visibly thinner on our home.
**Fix:**
- Build `<ClientLogoWall />` — grayscale row, color on hover
- Include: FashionPass · FIFA World Cup 2026 · Incrediwear + any additional brands sales clears
- Place it between Hero and the scroll sections
- No schema change (logos are visual trust only, already in Article schema on case studies)

---

## Tier 2 — Ship in Weeks 2–4

### 2.1 Remaining 4 `/compare/*` pages 🎯 2 days each
After the vs-sidewalktattoos page, ship in this order:
1. `/compare/alternatives-to-wildposting` — highest search intent (brand-alt queries)
2. `/compare/best-wheat-pasting-companies-2026` — evergreen roundup with ItemList schema
3. `/compare/wheat-pasting-vs-wild-posting` — educational wedge, trademark-careful
4. `/compare/phantom-pasting-vs-wildposting` — direct head-to-head, lowest priority
Shared components already exist from Tier 1.1 — each page is ~1,500 words + matrix + FAQ.

### 2.2 Pricing tables on service pages 💰 2–3 days
**Gap:** Pricing is currently in FAQ prose only ("low four figures for small activations, multi-city runs higher"). AltTerrain has the pricing SERP because they publish numbers; we don't.
**Fix:**
- Build `<PricingTable />` component — 3 tiers (Single Wall / Multi-Wall Campaign / Nationwide Rollout) with starting prices and scope per tier
- Install on `/services/wheat-pasting`, `/services/chalk-spray-stencils`, `/services/full-impact-campaigns`
- Emit `Offer` with `priceRange` on each Service schema
- Add "as of 2026" disclaimer per skill guidelines

### 2.3 Phoenix location page (Austin + Dallas after) 🗺️ 1 week each
**Gap:** Phoenix has a **blog post** (`/blog/wheat-pasting-phoenix`) but no **location page**. The blog is editorial — the location page is transactional and ranks for "wheat pasting Phoenix" with LocalBusiness schema.
**Priority:**
1. `/locations/phoenix` — copy pattern from `/app/locations/los-angeles/page.tsx`, cross-link to existing Phoenix blog post
2. `/locations/austin` — no existing editorial content, start fresh
3. `/locations/dallas` — largest US metro not covered
**Each page:** 800–1,200 words · 4–6 neighborhoods named · LocalBusiness + BreadcrumbList schema · linked from footer

### 2.4 Case study #4 — one enterprise logo 🎯 sales-gated
Sidewalktattoos.com has Palantir. Our client wall gains credibility with one enterprise-tier logo (SaaS / tech / fortune-500 consumer). Ship as soon as sales clears one.

### 2.5 Per-image `ImageObject` schema on `/gallery` 🖼️ 1 day
**Gap:** Our image sitemap is competitively unique. Push it further — every gallery image gets inline JSON-LD with `contentLocation` (city + neighborhood), `dateCreated`, `creator: MATEO_VARGAS`, `caption`. Google Image search becomes a second traffic channel.
**Fix:** extend `/app/gallery/page.tsx` to emit per-image `ImageObject` alongside the existing `<figure>` rendering.

---

## Tier 3 — Ship in Months 2–3

### 3.1 Backlink campaign targeting the 40 domains linking to wildposting.com's flagship 🔗 90+ days
**Why:** Single biggest gap. 707 backlinks from 40 domains on one competitor post.
**Flow:**
- Export the 40 referring domains from Semrush backlinks_pages on `wildposting.com/blog/the-ultimate-guide-to-wild-posting`
- Segment: marketing blogs · agency directories · academic/cultural sites · trade pubs
- Pitch two of our strongest posts as "installer's view" counterparts:
  - `/blog/what-is-wheat-pasting`
  - `/blog/how-to-make-wheat-paste`
- Pitch Adweek / Ad Age / Muse by Clio with the "installer diary" angle — nobody else has Mateo

### 3.2 Adjacent service pages 📄 1 week total
**Gap:** AmericanGuerrillaMarketing.com has 40+ service pages. We have 3. Pick 5 that fit our installer-crew identity:
- `/services/snipe-posters`
- `/services/floor-decals`
- `/services/sticker-campaigns`
- `/services/pole-wraps`
- `/services/scaffold-wraps`
**Each:** reuses the existing service-page template, 600–900 words, Service + FAQPage + BreadcrumbList schema. Linked from `/services` index.

### 3.3 Video case studies 🎥 per-campaign
60–90s install recap per new campaign — night-of timelapse + daylight reveal + GPS map overlay.
- Emit `VideoObject` schema on the case study page
- Cross-publish to YouTube; channel link back to case study

### 3.4 Expand to 10–12 US location pages 🌎 rolling
After Phoenix / Austin / Dallas (Tier 2.3), add Seattle, Portland, Nashville, Houston, San Diego as monthly drops.

### 3.5 New blog cadence post-15 📝 1/wk
The 15-post plan is shipped. New posts should directly feed the comparison cluster:
- "Wheat Pasting Cost by City: 2026 Regional Breakdown" — feeds pricing-table + cost blog
- "Sidewalk Tattoos Review from an Installer's POV" — feeds the vs-sidewalktattoos comparison
- "Why Brands Switch from Wild Posting® to Independent Wheat Pasting Crews" — feeds the alternatives page
- Anything that earns backlinks or feeds a `/compare/*` page

---

## Per-Competitor Scorecard (Updated)

### vs wildposting.com
**Still their win:** 707 backlinks, trademark, 17 international cities, Stranger Things / Keith Haring logos.
**Our live countermoat:** blog depth (15 vs 28 but ours is installer-voice), Mateo persona, full @graph schema, modern site, operational transparency content.
**What closes the gap:** Tier 1.1 `/compare/alternatives-to-wildposting` + Tier 3.1 backlink campaign + Tier 3.3 video content.

### vs sidewalktattoos.com
**Still their win:** ~85 global city list, logo wall (Palantir / True Religion), they ship logos as trust, eco-paint messaging.
**Our live countermoat:** neighborhood-depth location pages, Mateo byline, longer-form case studies, Article schema on every case, legal content, blog depth, biodegradable section on chalk stencils.
**What closes the gap:** Tier 1.4 logo wall + Tier 1.3 biodegradable on wheat-pasting + Tier 1.1 comparison page that makes the "US depth > global logo theater" argument explicitly.

### vs dashtwo.com, wheatpasteposters.com, altterrain.com, americanguerrillamarketing.com, gogorillamedia.com
**Already winning on every meaningful axis.** Marginal upside:
- vs altterrain: Tier 2.2 pricing tables
- vs americanguerrillamarketing: Tier 3.2 adjacent service pages

---

## Files to Touch — Corrected Reference

### New files (actually needed)
- `/app/compare/page.tsx` (hub)
- `/app/compare/phantom-pasting-vs-sidewalk-tattoos/page.tsx`
- `/app/compare/alternatives-to-wildposting/page.tsx`
- `/app/compare/best-wheat-pasting-companies-2026/page.tsx`
- `/app/compare/wheat-pasting-vs-wild-posting/page.tsx`
- `/app/compare/phantom-pasting-vs-wildposting/page.tsx`
- `/app/author/mateo-vargas/page.tsx`
- `/app/locations/phoenix/page.tsx`
- `/app/locations/austin/page.tsx`
- `/app/locations/dallas/page.tsx`
- `/app/services/snipe-posters/page.tsx` (Tier 3)
- `/app/services/floor-decals/page.tsx` (Tier 3)
- `/app/services/sticker-campaigns/page.tsx` (Tier 3)
- `/app/services/pole-wraps/page.tsx` (Tier 3)
- `/app/services/scaffold-wraps/page.tsx` (Tier 3)
- `/components/ComparisonMatrix.tsx`
- `/components/VerdictCard.tsx`
- `/components/RankingCard.tsx` (used by alternatives + best-of pages)
- `/components/ComparisonFAQ.tsx`
- `/components/ClientLogoWall.tsx`
- `/components/PricingTable.tsx`

### Files to edit
- `/app/page.tsx` — wire in `<ClientLogoWall />`
- `/app/services/wheat-pasting/page.tsx` — add biodegradable section (copy pattern from chalk-spray-stencils line 342+)
- `/app/services/chalk-spray-stencils/page.tsx` — add `<PricingTable />`
- `/app/services/wheat-pasting/page.tsx` — add `<PricingTable />`
- `/app/services/full-impact-campaigns/page.tsx` — add `<PricingTable />`
- `/app/gallery/page.tsx` — per-image `ImageObject` JSON-LD
- `/app/sitemap.ts` — register `/compare/*`, `/author/mateo-vargas`, new location + service pages
- `/app/sitemap-images.xml/route.ts` — add comparison page hero images
- `/components/SiteNav.tsx` — add "Compare" nav link
- `/components/BlogPostLayout.tsx` — link byline to `/author/mateo-vargas`
- `/lib/schema.ts` — extend to emit `Offer`/`priceRange`, `VideoObject` when Tier 3 ships
- `/public/llms.txt` — add Compare section, author page, new locations, new services

### Files explicitly NOT touching (already done)
- `/app/page.tsx` FAQ schema — already correct (`faqPageSchema(HOMEPAGE_FAQS)` wired)
- `/lib/homepageFAQs.ts` — already 6 Qs, fine as-is
- `/components/TrustBar.tsx` — by design; the 6-stat bar is in ScrollSections/StaticSEOSections already
- `/components/sections/StaticSEOSections.tsx` — already has the full SSR crawl content
- `/components/sections/ScrollSections.tsx` — already has FAQ section + stats
- `/lib/blogRegistry.ts` — all 15 posts registered
- `/content/blog/wheat-pasting-cost.tsx` — already live (v1 wrongly said "accelerate")
- `/content/blog/wheat-pasting-phoenix.tsx` — already live

---

## Execution Calendar (Real, 90 Days)

| Week | Work |
|---|---|
| 1 | Tier 1.1 components + hub page + first comparison (vs sidewalk tattoos) · Tier 1.2 author page · Tier 1.3 biodegradable fix · Tier 1.4 logo wall |
| 2 | Tier 2.1 `/compare/alternatives-to-wildposting` |
| 3 | Tier 2.1 `/compare/best-wheat-pasting-companies-2026` · Tier 2.2 pricing tables |
| 4 | Tier 2.1 last 2 comparison pages · Tier 2.5 gallery ImageObject |
| 5–6 | Tier 2.3 Phoenix location · Tier 2.3 Austin location · Tier 2.4 (if enterprise logo cleared) |
| 7–8 | Tier 2.3 Dallas location · Tier 3.1 backlink outreach kickoff |
| 9–10 | Tier 3.2 adjacent service pages (5 new) |
| 11–12 | Tier 3.5 new blog cadence starts · Tier 3.3 first video case study |

---

## Success Scoreboard — 90 Days

| Metric | Today | 30 Days | 90 Days |
|---|---|---|---|
| Comparison pages live | 0 | 3 | 5 |
| Author pages | 0 | 1 (Mateo) | 1 |
| US location pages | 5 | 6 (+Phoenix) | 8 (+Austin +Dallas) |
| Service pages (incl. adjacent) | 3 | 3 (+pricing) | 8 |
| Blog posts live | 15 | 17 | 20 |
| Biodegradable positioning | 1 service page | 2 service pages | 2 service pages |
| Client logo wall | ❌ | ✅ | ✅ (+1 enterprise) |
| Published pricing | ❌ | In progress | ✅ (3 tiers × 3 services) |
| Referring domains | baseline | +5 | +25 |
| Axes we lead on (of 22) | 14 | 17 | 20 |

*(v1 said we lead on 11 of 22 — audit confirms the real number today is 14. The gap to 22 is the 8-point to-do list above.)*

---

## Discipline Guardrails (Unchanged)

1. No chasing international breadth — we win US depth.
2. No re-introducing "Wild Posting" into our positioning copy. Trademark purge is final. Educational mentions only.
3. Don't duplicate sidewalktattoos.com's "eco-friendly paint" exact wording. Ours is stronger: biodegradable by chemistry, not marketing.
4. No fake reviews for AggregateRating schema. Real campaigns only.
5. No thin duplicate content across `/compare/*` — distinct matrix + verdict per page.
6. No defamation in comparison copy — acknowledge competitor strengths honestly.

---

## The One-Sentence Strategy (Unchanged)

**Win on depth and documentation in the US wheat-pasting category by publishing the proof, pricing, installer voice, and legal clarity no competitor is willing to publish — then capture every "alternatives / vs / best" query they leave on the table.**

---

*Document maintained by: Phantom Pasting SEO · v1 2026-04-22 · v2 audit-revised 2026-04-22 · Revisit after Tier 1 ships*
