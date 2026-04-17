# Phantom Pasting — SEO Action Plan
**Generated:** 2026-04-15 | **Overall Score: 65/100**

---

## CRITICAL — Fix Immediately

### C1. Expand all 3 case studies to 500+ words with real metrics
**Pages:** `/work/fashionpass-los-angeles`, `/work/fifa-world-cup-atlanta`, `/work/incrediwear-street-campaign`
**Why:** All three are under 300 words with no metrics, no client quotes, no campaign specifics. These are the primary E-E-A-T proof pages on the site — they read as photo galleries, not case studies.
**What to add per page:**
- Number of poster/installation locations
- Neighborhoods covered (specific names)
- Campaign duration (start → end date or "4-week campaign")
- Client objective (e.g., "FashionPass launched their LA expansion...")
- Outcome (even qualitative: "campaign drove 3x social mentions" or "client re-booked within 30 days")
- At least one client quote or attribution
**Impact:** Content Quality ↑, E-E-A-T ↑, schema Article quality ↑

---

### C2. Remove FAQPage schema from service and location pages
**Pages:** All 3 service pages + all 5 location pages (via `CityPageTemplate`)
**Why:** Google restricted FAQPage rich results to health/government sites in August 2023. 8 pages are carrying dead markup that produces zero rich results.
**Fix in `CityPageTemplate.tsx`:** Remove the `faqSchema` script block.
**Fix in each service page:** Remove the FAQPage JSON-LD block.
**Impact:** Cleaner markup, correct schema expectations, schema score ↑
**Effort:** ~30 minutes

---

## HIGH — Fix Within 1 Week

### H1. Add `LocalBusiness` schema to homepage
**Page:** `app/page.tsx`
**Why:** The homepage has `Organization + ProfessionalService` but no `LocalBusiness`. This is the highest-value schema type for a service business — enables Knowledge Panel eligibility and geo signals.
**Add as a fourth `<script type="application/ld+json">` block:**
```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://www.phantompasting.com/#business",
  "name": "Phantom Pasting",
  "description": "Guerrilla marketing agency specializing in wheat pasting, wild posting, and chalk spray stencil campaigns across 50+ US cities.",
  "url": "https://www.phantompasting.com",
  "email": "info@phantompasting.com",
  "foundingDate": "2014",
  "priceRange": "$$",
  "areaServed": [
    { "@type": "City", "name": "New York", "addressRegion": "NY" },
    { "@type": "City", "name": "Los Angeles", "addressRegion": "CA" },
    { "@type": "City", "name": "Miami", "addressRegion": "FL" },
    { "@type": "City", "name": "Chicago", "addressRegion": "IL" },
    { "@type": "City", "name": "Atlanta", "addressRegion": "GA" },
    { "@type": "Country", "name": "United States" }
  ],
  "serviceType": "Guerrilla Marketing",
  "sameAs": ["https://www.instagram.com/phantompasting"],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "email": "info@phantompasting.com",
    "url": "https://www.phantompasting.com/contact",
    "areaServed": "US"
  }
}
```

---

### H2. Fix OG image for `/about` and `/contact`
**Why:** Both pages have no `og:image` override and inherit `layout.tsx`'s fallback — a 512×460 logo declared as 1200×630. Social shares of these pages will show a distorted/cropped logo.
**Fix option A:** Create a proper 1200×630 social card (Figma export) and update `layout.tsx` line 49 dimensions to match actual file.
**Fix option B (faster):** Add `openGraph: { images: [...] }` to `about/page.tsx` and `contact/page.tsx` with a real campaign photo sized 1200×630.

---

### H3. Create `/work` hub page
**Why:** No `/work` index page exists. The 3 case studies have no parent URL. Breadcrumb position 2 on all case study pages points to a 404. A `/work` hub page consolidates internal link authority and ranks for "guerrilla marketing portfolio," "wheat pasting examples."
**Content:** List all 3 case studies with client name, city, service type, and a hero image thumbnail. Add schema `CollectionPage`.
**Also add to sitemap.ts.**

---

### H4. Create `/services` hub page
**Why:** Same breadcrumb issue as `/work` — no parent page exists. A `/services` index creates a natural landing page for "guerrilla marketing services" and fixes the broken breadcrumb chain across all 3 service pages.
**Content:** Brief intro + cards linking to wheat pasting, chalk stencils, full impact.
**Also add to sitemap.ts.**

---

### H5. Add `priority` prop to hero images on case study pages
**Pages:** `app/work/fashionpass-los-angeles/page.tsx`, `app/work/fifa-world-cup-atlanta/page.tsx`, `app/work/incrediwear-street-campaign/page.tsx`
**Fix:** In the image map loop, add `priority={i === 0}` to the `<Image>` component:
```tsx
<Image
  src={img.src}
  alt={img.alt}
  fill
  className="object-cover"
  sizes={i === 0 ? "100vw" : "50vw"}
  priority={i === 0}   // ← add this
/>
```
**Impact:** Removes lazy-loading on LCP image across all 3 case study pages. Immediate CWV improvement.
**Effort:** 5 minutes

---

### H6. Fix breadcrumb schema — service and work pages
**Issue:** BreadcrumbList position 2 on service pages labels "Services" but item URL = same as position 3 (the service page itself). Same on work/case study pages with "Work."
**Fix A (recommended once H3/H4 done):** Update breadcrumb position 2 item to point to the new `/services` or `/work` hub URLs.
**Fix B (immediate):** Collapse to 2-item breadcrumbs (Home → [Page Name]) until hub pages exist.
```tsx
// Remove the middle "Services" / "Work" item from the breadcrumb array
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.phantompasting.com" },
    { "@type": "ListItem", "position": 2, "name": "Wheat Pasting", "item": "https://www.phantompasting.com/services/wheat-pasting" }
  ]
}
```

---

### H7. Upgrade Article `image` to `ImageObject` on case study pages
**Why:** Raw URL strings in `Article.image` prevent Google from generating image-enriched previews. Requires `width`, `height`, and `caption`.
**Fix:** Replace each string in the `image` array with an `ImageObject`:
```json
{
  "@type": "ImageObject",
  "url": "https://www.phantompasting.com/gallery/image-name.webp",
  "width": 1200,
  "height": 800,
  "caption": "Descriptive caption here"
}
```

---

## MEDIUM — Fix Within 1 Month

### M1. Trim oversized title tags
| Page | Current | Target | Fix |
|---|---|---|---|
| Homepage | 77 chars | ≤65 | "Phantom Pasting \| Guerrilla Marketing — Wheat Pasting & Wild Posting" |
| Wheat Pasting | 71 chars | ≤65 | "Wheat Pasting Services \| Street Poster Advertising \| Phantom Pasting" |
| New York | 65 chars | ≤63 | "Wheat Pasting NYC \| Wild Posting New York \| Phantom Pasting" |

### M2. Trim oversized meta descriptions
| Page | Current | Fix |
|---|---|---|
| About | 170 chars | Cut "and chalk stencil activations" → saves 30 chars |
| FashionPass | 175 chars | Cut "Full photo documentation." → use CTA instead |
| FIFA | 174 chars | Cut "Full documentation." → trim neighborhood list |
| Incrediwear | 167 chars | Replace "multiple US cities" with specific city names |

### M3. Add keyword to H1 on About and Contact
- About: Change "WHO WE ARE." → "GUERRILLA MARKETING AGENCY — WHO WE ARE."
- Contact: Change "LET'S HIT THE STREETS." → "GET A WHEAT PASTING QUOTE."

### M4. Add H2 structure to Contact page
Contact has only H1 + form content. Add H2s:
- "WHAT HAPPENS NEXT" (sets response expectation — 24hr claim)
- "CAMPAIGN TYPES" (links to 3 services)
- "CITIES WE SERVE" (location links)

### M5. Differentiate service page H2s
Replace identical "HOW IT WORKS." across all 3 service pages:
- Wheat Pasting: "HOW WHEAT PASTING WORKS."
- Chalk Stencils: "HOW CHALK STENCIL CAMPAIGNS WORK."
- Full Impact: "HOW FULL IMPACT CAMPAIGNS ARE BUILT."

### M6. Add `telephone` and `email` to city page LocalBusiness schema
**File:** `CityPageTemplate.tsx` (the LocalBusiness schema block)
```json
"telephone": "+1-555-000-0000",
"email": "info@phantompasting.com"
```

### M7. Add campaign proof to NYC, Miami, Chicago location pages
These 3 city pages make local crew claims but have no case study linked. Add at minimum one sentence:
> "Recent activations include campaigns for music artists, fashion brands, and tech startups across [neighborhoods]."

Or link to the gallery filtered by city if that feature exists.

### M8. Remove `WebSite` SearchAction schema from homepage
The site has no search function. Remove the `potentialAction: SearchAction` block from `websiteSchema` in `app/page.tsx`.

### M9. Remove single-item BreadcrumbList from homepage
A 1-item breadcrumb produces no rich result. Remove the `breadcrumbSchema` block from `app/page.tsx`.

### M10. Remove `og:locale:alternate` pointing to same locale
In `app/layout.tsx`, remove:
```tsx
"og:locale:alternate": "en_US",  // same as primary — remove this
```

### M11. Fix double redirect for HTTP non-www
Add to `netlify.toml`:
```toml
[[redirects]]
  from   = "http://phantompasting.com/*"
  to     = "https://www.phantompasting.com/:splat"
  status = 301
  force  = true
```

### M12. Mobile tap target — nav CTA
"GET A QUOTE" button in nav renders at 35px height on mobile (below the 44px minimum). Increase to `min-height: 44px` or adjust padding.

### M13. Add `sameAs` links to Organization schema
Add Google Business Profile URL, LinkedIn if they exist. Currently only Instagram is listed.

---

## LOW — Backlog

### L1. Security header improvements
- Remove deprecated `X-XSS-Protection` header from `next.config.ts`
- Add `includeSubDomains; preload` to HSTS header
- Add Content-Security-Policy (start in report-only mode)

### L2. Extract gallery `lastModified` to named constant
In `sitemap.ts`, replace `new Date("2026-04-11")` with a `GALLERY_REV` constant for consistency.

### L3. Update `siteUrl.ts` AVIF encoding note
AVIF-first in `formats: ["image/avif", "image/webp"]` causes slower first-hit encoding. Confirm Netlify CDN caches optimized output; if not, consider swapping to WebP-first.

### L4. Remove `<meta name="keywords">` from pages
Google ignores this tag. It adds HTML weight without benefit. Remove from future pages.

---

## CONTENT OPPORTUNITIES — Backlog

### CO1. Add a pricing page
Target: "how much does wheat pasting cost," "guerrilla marketing pricing," "wild posting rates"
Even a range table ("campaigns start at $X for 10 locations") converts high-intent searchers.

### CO2. Create `/work` + `/services` hub pages (already in H3/H4 above)

### CO3. Start a blog — minimum 3 posts
Priority topics:
1. "What Is Wheat Pasting? (And Why Brands Use It)" — targets top-of-funnel
2. "Wild Posting vs. Wheat Pasting: What's the Difference?" — comparison content ranks well
3. "How to Run a Guerrilla Marketing Campaign" — process guide, high E-E-A-T

### CO4. Add testimonials / review schema
Even 3–5 client quotes with names and companies significantly boosts E-E-A-T. Once Google Business Profile reviews accumulate, add `AggregateRating` to the homepage Organization schema.

### CO5. Add a fourth case study — Calvin Priice
The client is named in `/about` but has no case study. Creating the page adds a route, a case study, and a link target.

### CO6. Differentiate location page FAQs
The current FAQ answers are `${data.city}` substitutions — effectively identical across cities. Write city-specific answers referencing real neighborhoods, permit considerations, or campaign history in each city.

### CO7. Add campaign photography to location pages
Location pages have exactly 1 image (the logo). Adding 2–3 real campaign photos per city with keyword-rich alt text would significantly strengthen E-E-A-T and visual engagement.

---

## Summary Count

| Priority | Count | Estimated Time |
|---|---|---|
| Critical | 2 | 2–4 hours |
| High | 7 | 4–8 hours |
| Medium | 13 | 8–12 hours |
| Low | 4 | 1–2 hours |
| Content Opportunities | 7 | Ongoing |
