# Phantom Pasting — Competitive SEO Audit & Rank-#1 Roadmap

> **Saved:** 2026-04-18 · **Reference this next week when starting execution.**

---

## Execution Status (as of 2026-04-18)

### ✅ Done this session
- Fixed homepage H1 hygiene (pill = real `<h1>`, display headline = `<div>`).
- Added FAQPage + BreadcrumbList JSON-LD on homepage.
- Removed fake `AggregateRating` (will re-add once 5+ real reviews exist).
- Title shortened to 57 chars with keyword in title.
- **Swapped `LocalBusiness` → `ProfessionalService`** in `lib/schema.ts` (more accurate for a nationwide service-area agency; city pages keep LocalBusiness + PostalAddress via `CityPageTemplate`).

### 📋 User owns this week (Week 1)
- **Google Business Profile setup** — service-area business; pins you into Maps for "wild posting near me" queries.
- **Directory listings** — Clutch, DesignRush, UpCity, Sortlist, Agency Spotter. ~20 do-follow backlinks in a week of claim-and-fill work.
- **Submit sitemap to Search Console** (`https://www.phantompasting.com/sitemap.xml`) — 13/15 indexed currently; the other 2 are just crawl latency, no code issue (all source URLs are https canonical).
- **SERP baseline** — incognito-search "wheat pasting company" and note rank. Re-check weekly.

### 🚧 Pending (kicks off Week 2+)
- Phase 1 content sprint — see below.

---

## Context

You asked where Phantom Pasting stands against the wheat pasting / wild posting competitive field — what we're doing right, what we suck at, what competitors have that we don't, and a realistic plan + timeline to rank #1 on Google and capture leads nationwide. Did SERP research + technical audits of the top 10 competitors and compared them against our current site state.

**TL;DR verdict:** You're winning on technical SEO (schema, H1 hygiene, performance, mobile). You're losing on **content volume, city coverage, and backlink authority**. The path to #1 is to keep the technical edge and execute a 90-day content sprint — the competitors are old, slow, and technically sloppy. They won on inertia, not excellence. That's beatable.

---

## The Competitive Field

Ranked by how often they appear on page 1 for 8 core queries (wheat pasting company, wild posting company, wild posting agency, wheat paste advertising, wild posting nyc/la/chicago, guerrilla marketing agency wheat paste):

| # | Domain | SERP prominence | Type |
|---|---|---|---|
| 1 | **wildposting.com** | 8/8 queries, usually #1 | National agency, owns "Wild Posting®" trademark |
| 2 | **altterrain.com** | 8/8 queries, #2–3 | National agency, founded 2003, 350+ brands |
| 3 | wheatpasteposters.com | 6/8 | Printing + installation (founded 2002) |
| 4 | billsniping.com | 5/8 | NYC/LA specialist |
| 5 | dashtwo.com | 5/8 | Content-marketing leader, 38 blog posts |
| 6 | wildposting.org | 4/8 | Legacy/regional sister to #1 |
| 7 | gorillaprinting.com | 4/8 | NYC printing |
| 8 | americanguerrillamarketing.com | Strong on "guerrilla" queries | Broad guerrilla agency |
| 9 | grassrootsadvertising.com | 2/8 | Street marketing generalist |
| 10 | saucedlab.com | 2/8 | NYC specialty |

**Key surprise:** wildposting.com owns the registered trademark **"Wild Posting®"**. We can't legally title-match on that exact phrase. **Our wedge is "Wheat Pasting Company"** — a category they don't own, and where the field is more open.

---

## Head-to-Head: Phantom Pasting vs. the Field

### On-Page SEO

| Element | phantompasting.com | wildposting.com | altterrain.com | dashtwo.com |
|---|---|---|---|---|
| `<title>` length | 57 chars ✅ | missing/thin ❌ | 108 chars stuffed ❌ | thin ❌ |
| Meta description | 136 chars ✅ | missing ❌ | missing ❌ | missing ❌ |
| H1 count (homepage) | **1** ✅ | 12 ❌ | 8 ❌ | 4 ⚠️ |
| H1 text ↔ title match | exact ✅ | weak | weak | weak |
| Open Graph / Twitter Card | full ✅ | none ❌ | none ❌ | none ❌ |
| Canonical URL | explicit ✅ | missing ❌ | present | present |

**Verdict:** You crush every competitor on fundamentals.

### Structured Data (JSON-LD)

| Schema | Phantom Pasting | wildposting.com | altterrain.com | dashtwo.com |
|---|---|---|---|---|
| Organization | ✅ | ❌ | ❌ | ❌ |
| WebSite | ✅ | ❌ | ❌ | ❌ |
| ProfessionalService | ✅ (nationwide) | ❌ | ❌ | ❌ |
| FAQPage | ✅ | ❌ | ❌ | ❌ |
| BreadcrumbList | ✅ | ❌ | ❌ | ❌ |
| Service (on /services/*) | ✅ | ⚠️ partial | ❌ | ❌ |
| Article (blog) | n/a — no blog | ❌ | ❌ | ❌ |

**Verdict:** **No competitor has structured data.** 6–18-month moat — retrofitting schema into a WordPress stack is painful. We'll start stealing CTR once Google re-indexes the FAQ/Breadcrumb blocks.

### Performance & Core Web Vitals

| Signal | Phantom Pasting | Competitors |
|---|---|---|
| Lighthouse perf | 88–99 ✅ | 40–65 ❌ |
| Mobile experience | modern snap-scroll ✅ | WordPress/jQuery ❌ |
| Image formats | AVIF/WebP ✅ | unoptimized JPG/PNG ❌ |
| JS execution | lazy-loaded, code-split ✅ | monolithic ❌ |

### Content & Site Depth (where you lose)

| Asset | Phantom Pasting | wildposting.com | altterrain.com | dashtwo.com |
|---|---|---|---|---|
| Sitemap pages | **~21** | ~88 | ~100+ | 73 |
| City/location pages | **6** | **38** | 50+ | 24 |
| Blog posts | **0** | 28 | present | **38** |
| Case study pages | 3 (FIFA, FashionPass, Incrediwear) | several branded | many | none |
| Industry-vertical pages | 0 | 0 | 0 | **6** |
| Pricing transparency | none | none | **inline ($10K–$30K/wk)** | none |
| Comparison tables | none | yes | yes | some |
| Coverage map | none | yes | no | no |

**This is the biggest gap.** Content depth = topical authority. 21 vs 80–100 is the single biggest lever.

### Trust & Authority

| Signal | Phantom Pasting | Top competitors |
|---|---|---|
| Domain age | ~2024 (newer) | 2002–2010s |
| Backlinks (est.) | <100 | 500–1,500+ |
| Named-brand case studies | 3 (**FIFA, FashionPass, Incrediwear** — elite) | 5–10+ |
| Social proof | none surfaced | limited |
| "Since YYYY" visible above fold | no | yes |

**Verdict:** You will never out-age altterrain. But FIFA/FashionPass are elite logos you're burying — surface them.

---

## What You're Doing Great

1. **Schema dominance** — 6 correct JSON-LD types vs competitors' 0.
2. **Core Web Vitals** — Lighthouse 88–99 vs 40–65.
3. **Single H1 hygiene** — fixed; competitors still broken.
4. **Title ↔ H1 alignment** — exact match.
5. **Modern scroll-snap design** — premium, builds E-E-A-T.
6. **Full Open Graph + Twitter Cards**.
7. **Elite client roster** (FIFA, FashionPass, Incrediwear).
8. **Service pages with real Service schema**.
9. **Mobile-first UX** — modern stack favored by mobile-first indexing.
10. **Technical velocity** — full SEO pass in one session.

## What You Suck At

1. **Page count** — 21 vs 80–100.
2. **City coverage** — 6 cities; competitors have 24–50+.
3. **No blog** — zero top-of-funnel content.
4. **No industry vertical pages** — DashTwo has 6 (fashion/music/cannabis/streaming/beauty/film).
5. **No comparison content** — "wheat paste vs wild posting," "guerrilla vs permitted," etc.
6. **Thin case studies** — 3 pages, light content. Need 500+ words + metrics + Article schema + ImageObject.
7. **No coverage map / interactive tool** — wildposting has per-city maps that attract backlinks.
8. **No pricing page** — altterrain has inline pricing ($10K–$30K/week) and ranks for cost queries.
9. **No backlinks strategy** — no PR, no directory listings, no partner pages.
10. **Trust signals buried** — FIFA/FashionPass only on individual /work/* pages, not hero/footer/cards.

## What They Have That You Don't

| Competitor | What they have | Why it matters |
|---|---|---|
| **wildposting.com** | Trademarked "Wild Posting®", 38 cities, 28 blog posts, per-city coverage maps, branded case studies | Brand moat + topical breadth |
| **altterrain.com** | 20+ yr domain age, 50+ cities, 350+ brands claim, **transparent pricing**, comparison tables | Trust signals, pricing SEO, high-intent content |
| **dashtwo.com** | 38 blog posts, 6 industry-vertical pages, QR+wildposting hybrid | Top-of-funnel, buyer-language targeting |
| **wheatpasteposters.com** | Oldest (2002), printing vertical, wholesale pricing | Informational authority (manufacturing) |
| **americanguerrillamarketing.com** | Multi-state copy, "guerrilla" category ownership | Broader keyword net |

---

## The 90-Day Plan to Outrank Them

### Phase 1 — Week 2 to Week 4 (days 7–30): Catch Up on Coverage

Pace: **5 new city pages per week**, not all 20 at once. Quality > speed; Google penalizes thin/templated content.

1. **20 new city pages** building on the existing 6. Priority order:
   - Week 2: Houston, Dallas, Phoenix, Philadelphia, San Diego
   - Week 3: Austin, San Francisco, Seattle, Denver, Boston
   - Week 4: Washington DC, Las Vegas, Nashville, Portland, Minneapolis
   - Week 5 (overflow): Detroit, Brooklyn, Queens, Charlotte, Tampa
   - Each page: 800–1,200 unique words, local neighborhoods/landmarks, 3 local campaign examples, city-specific 3-Q FAQ, Service + BreadcrumbList + FAQPage schema, CTA.
2. **5 industry-vertical pages** under `/industries/*`:
   - `/industries/fashion-brands`, `/music-festivals-concerts`, `/cannabis-brands`, `/streaming-entertainment`, `/restaurant-hospitality`.
   - 800 words + vertical-specific examples + 3-Q FAQ each.
3. **Pricing page** `/pricing` — tiered packages (Single-City Drop / Multi-Market / National Takeover), "starting at" bands, what's included, photo documentation callout. Emits Offer schema.
4. **Expand 3 existing case studies** (`/work/fashionpass-los-angeles`, `/work/fifa-world-cup-atlanta`, `/work/incrediwear-street-campaign`):
   - 500+ words each: brief, strategy, execution photos, outcome metrics, client quote if available.
   - Emit `CaseStudy` (Article) + `ImageObject` for gallery photos.
5. **Coverage map** on `/locations` hub — SVG US map, each state clickable → city page. SEO candy + internal-link density.

**Files touched:**
- New: `app/locations/<city>/`, `app/industries/<vertical>/`, `app/pricing/`
- Extend: `lib/business.ts` (full city list), `lib/schema.ts` (add `caseStudySchema`, `pricingOfferSchema`), `app/sitemap.ts`, `components/sections/ScrollSections.tsx` (expanded footer markets)

### Phase 2 — Days 30–60: Blog Launch (The Big Lever)

Pace: **2 cornerstone posts per week × 6 weeks = 12 posts**.

1. Set up `/blog` infrastructure — MDX-based, emits `Article` + `BreadcrumbList` schema per post.
2. Cornerstone topics:
   - "What is Wheat Pasting? The Complete Guide to Wheat Paste Advertising (2026)"
   - "Wild Posting vs Wheat Pasting: What's the Difference?"
   - "Is Wild Posting Legal? A State-by-State Breakdown"
   - "How Much Does Wheat Pasting Cost? 2026 Pricing Guide"
   - "Wheat Paste vs Digital Out-of-Home: Which Delivers Better ROI?"
   - "The 10 Best Cities for Wild Posting Campaigns in the US"
   - "Wheat Pasting for Fashion Brands: 5 Campaign Examples"
   - "Guerrilla Marketing for Music Festivals: A Playbook"
   - "Chalk Spray Stencils vs Wheat Paste Posters: When to Use Each"
   - "How to Measure Wheat Pasting Campaign ROI"
   - "Wheat Pasting in New York: A Complete Market Guide"
   - "Wheat Pasting in Los Angeles: A Complete Market Guide"
3. Each post: 1,500–2,500 words, original campaign photos, internal links to service/city/pricing pages, CTA block.

Closes ~80% of the content-depth gap with wildposting.com.

### Phase 3 — Days 60–90: Authority & Distribution

1. **Press outreach** — AdAge, AdWeek, Campaign US, Muse by Clio, LBBOnline. Each FIFA/FashionPass/Incrediwear campaign is a press-ready story. Target 5–10 earned placements.
2. **Directory listings** (start this in Week 1 — not content-dependent): Clutch, DesignRush, UpCity, Sortlist, Agency Spotter. ~20 do-follow links.
3. **Client quote + logo lockup** on homepage hero + `/clients` page. Counter altterrain's "350+ brands" claim on *quality* not quantity.
4. **Reviews** — request from FIFA/FashionPass/Incrediwear contacts on G2, Clutch, GBP. Once 5+ real reviews on one platform, re-enable `AggregateRating` schema legitimately.
5. **Guest posts / podcasts** — 2–3 marketing podcast appearances; 2–3 bylined posts.
6. **Google Business Profile** (Week 1 item) — pins into Maps for "wild posting near me" local-intent queries.

---

## Realistic Timeline

| Time | Query | Expected result |
|---|---|---|
| **Week 2** | "wheat pasting company" | Move from page 2 → top of page 1 (schema + H1 take effect) |
| **Week 4** | Long-tail city queries we now have pages for | Top 5 |
| **Week 8** | "wheat pasting new york", "wild posting los angeles" | Top 3 for most; top 10 for highest-competition cities |
| **Week 12** | Blog informational queries | Page 1 for 50%+ of 12 cornerstone posts |
| **Month 6** | "Wild posting agency" | Page 1, #3–5 (wildposting keeps #1 on trademark) |
| **Month 6** | "Wheat pasting company" | **#1 achievable** (no trademark, technical + content parity) |
| **Month 9–12** | "wild posting [city]" across top 20 | Top 3 in most; #1 in 10+ |
| **Month 12+** | "Wild Posting" (trademarked term) | #2–3 ceiling — ~20% click share |

**Conversion expectation:** 5–10× increase in qualified inbound leads at 90 days once content lands and schema is indexed. City pages are permanent lead magnets — content SEO compounds.

---

## What "#1" Actually Means Here

The vertical has **no dominant well-SEO'd operator**. Every top competitor is technically sloppy and under-schemaed. The #1 spot wasn't earned by doing everything right — it's held on domain age and backlinks alone.

**That's your opening.** Technical excellence (you have it) + content volume (you need it) + trust signals (FIFA/FashionPass, once surfaced) = category ownership inside 6–12 months.

You are not behind on quality. You are behind on quantity. That's fixable on a calendar.

---

## Verification Checkpoints

Re-run these weekly during the sprint:

1. **Live-site schema**: `curl -sL https://www.phantompasting.com/ | grep -oE '"@type":"[A-Za-z]+"'` — confirms Organization, WebSite, ProfessionalService, FAQPage, BreadcrumbList render in production SSR.
2. **Search Console**: confirm sitemap submitted, monitor indexed-pages count climbing as new content ships.
3. **Arvow re-scan**: expect "Keyword in title: found", primary keyword = "wheat pasting & wild posting agency".
4. **SERP spot-check**: incognito search "wheat pasting company" weekly, log rank.
5. **Competitor deltas**: spot-check wildposting.com/sitemap.xml quarterly to see if they ship new content.

---

## Files Touched This Session (schema fix)

- `lib/schema.ts` — `"@type": "LocalBusiness"` → `"@type": "ProfessionalService"` (nationwide accuracy). City-page schema unchanged.
- All 12+ callers of `localBusinessSchema()` (layout, services, contact, work, locations, gallery, about, services/*) now emit ProfessionalService automatically.
