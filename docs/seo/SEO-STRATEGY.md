# PhantomPasting — SEO Strategy

> **Domain:** phantompasting.com | **Industry:** Guerrilla Marketing / Street Advertising Agency
> **Template:** Agency + Local Service hybrid | **Status:** New domain, zero DA
> **Date:** 2026-03-27

---

## Executive Summary

PhantomPasting operates in a **low-competition, high-intent niche** with almost no sophisticated SEO competitors. The top-ranking sites for "wheat pasting company" and "wild posting service" are mostly directory pages, thin agency sites, or regional players with weak link profiles. This is an open field.

The site has exceptional E-E-A-T signals to deploy immediately:
- **Real, named clients** (FashionPass, FIFA World Cup, Incrediwear)
- **Documented proof** — 100% photo-documented campaigns
- **Scale** — 500+ campaigns, 50+ US cities
- **Longevity** — 10+ years in the business

**Primary goal:** Rank #1–3 for "wheat pasting company", "wild posting company", and "wheat paste advertising [city]" within 12 months.

---

## Keyword Strategy

### Tier 1 — Primary Head Terms (Target Month 3–6)

| Keyword | Intent | Est. Monthly Volume | Competition |
|---------|--------|----------------------|-------------|
| wheat pasting company | Commercial | 400–600 | Low |
| wild posting company | Commercial | 300–500 | Low |
| wheat paste advertising | Commercial | 200–400 | Low |
| guerrilla marketing agency | Commercial | 800–1,200 | Medium |
| wild posting advertising | Commercial | 300–500 | Low |
| wheat pasting service | Commercial | 200–350 | Low |

### Tier 2 — Service + Intent (Target Month 2–4)

| Keyword | Intent | Priority |
|---------|--------|----------|
| wheat paste poster advertising | Commercial | High |
| street level marketing company | Commercial | High |
| urban guerrilla marketing | Commercial | High |
| chalk spray stencil marketing | Commercial | High |
| chalk stencil advertising | Commercial | Medium |
| wheat paste campaign cost | Informational → Commercial | High |
| how much does wild posting cost | Informational → Commercial | High |

### Tier 3 — City + Service (Win Early, High Conversion)

| URL Pattern | Examples |
|------------|---------|
| `/locations/[city]/wheat-pasting` | Los Angeles, New York, Chicago |
| `/locations/[city]/wild-posting` | Miami, Atlanta, Austin |
| `/locations/[city]` | All 20 priority cities |
| `wheat pasting [city]` | wheat pasting Los Angeles |
| `wild posting [city]` | wild posting NYC |

### Tier 4 — Long Tail Wins (Month 1–2, Builds Authority)

- "how to do wheat pasting" (blog)
- "wheat paste vs wild posting difference" (blog)
- "wheat pasting permit laws [city]" (blog)
- "best wheat paste formula for posters" (blog)
- "how to design a poster for wheat pasting" (blog)
- "guerrilla marketing for music artists" (blog)
- "street marketing ideas for fashion brands" (blog)
- "FashionPass wheat paste campaign" (case study)
- "FIFA World Cup wild posting" (case study)

---

## Site Architecture

### Full URL Hierarchy

```
phantompasting.com/
│
├── /services/
│   ├── /wheat-pasting                    ← Primary service page
│   ├── /wild-posting                     ← Alias/redirect or separate page
│   ├── /chalk-spray-stencils             ← Secondary service
│   └── /full-impact-campaigns            ← Bundle / combo offering
│
├── /locations/                           ← City hub (high SEO value)
│   ├── /los-angeles/
│   │   ├── /wheat-pasting               ← Service × City
│   │   └── /wild-posting
│   ├── /new-york/
│   ├── /chicago/
│   ├── /miami/
│   ├── /atlanta/
│   ├── /austin/
│   └── ... (20 total in 12 months)
│
├── /work/                               ← Portfolio / Case Studies
│   ├── /fashionpass-los-angeles         ← Case study (massive E-E-A-T)
│   ├── /fifa-world-cup-atlanta          ← Case study
│   └── /incrediwear-street-campaign     ← Case study
│
├── /blog/                               ← Content marketing hub
│   ├── /what-is-wheat-pasting
│   ├── /wild-posting-vs-billboard
│   ├── /wheat-pasting-cost-guide
│   └── ... (2×/month cadence)
│
├── /industries/
│   ├── /music-artists                   ← Vertical page
│   ├── /fashion-brands
│   ├── /sports-events
│   └── /entertainment
│
├── /about/
│   └── /our-process
│
├── /faq/
├── /gallery/
└── /contact/
```

---

## E-E-A-T Implementation Plan

### Experience
- Every service page: exact campaigns completed + photo proof
- Stats with context: "500+ campaigns in 10+ years" not just "500+ campaigns"
- Client logos section (FashionPass, FIFA, Incrediwear)

### Expertise
- Detailed `/about/our-process` page: how we scout walls, night crew, photo-doc system
- Blog content demonstrating deep craft knowledge (paste recipes, paper weights, permit maps)
- Service pages describe methodology, not just deliverables

### Authoritativeness
- Case studies with named brands and specific results
- Press/media mentions (build toward these)
- Guest posts on marketing industry blogs
- Citations in "best guerrilla marketing companies" roundups

### Trustworthiness
- Phone number, email, and response time prominently displayed
- Physical team — show real people doing the work (crew action shots already exist)
- Photo documentation as proof of delivery (huge differentiator)
- Clear quote/pricing process (no black box)

---

## Schema Markup Plan

### Homepage — `Organization` + `ProfessionalService`
```json
{
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "name": "Phantom Pasting",
  "url": "https://phantompasting.com",
  "logo": "https://phantompasting.com/logo.png",
  "description": "Guerrilla marketing agency specializing in wheat pasting, wild posting, and chalk spray stencil campaigns across 50+ US cities.",
  "areaServed": "United States",
  "knowsAbout": ["Wheat Pasting", "Wild Posting", "Guerrilla Marketing", "Street Advertising"],
  "foundingDate": "2014",
  "numberOfEmployees": {"@type": "QuantitativeValue", "value": "10+"},
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Street Marketing Services",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Wheat Pasting"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Chalk Spray Stencils"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Full Impact Street Campaigns"}}
    ]
  }
}
```

### Service Pages — `Service`
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Wheat Pasting Advertising",
  "provider": {"@type": "Organization", "name": "Phantom Pasting"},
  "description": "Large-format wheat paste poster advertising on prime urban walls across 50+ US cities. Campaigns from 24\"×36\" to 48\"×72\".",
  "areaServed": "United States",
  "serviceType": "Outdoor Advertising",
  "audience": {"@type": "Audience", "audienceType": "Brands, Marketing Agencies, Event Promoters"}
}
```

### Location Pages — `LocalBusiness`
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Phantom Pasting Los Angeles",
  "url": "https://phantompasting.com/locations/los-angeles",
  "areaServed": [
    {"@type": "City", "name": "Los Angeles"},
    {"@type": "City", "name": "West Hollywood"},
    {"@type": "City", "name": "Silver Lake"},
    {"@type": "City", "name": "Venice"}
  ],
  "geo": {"@type": "GeoCoordinates", "latitude": "34.0522", "longitude": "-118.2437"}
}
```

### Case Studies — `Article` with structured data
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "articleSection": "Case Study",
  "headline": "FashionPass Wild Posting Campaign — Los Angeles",
  "author": {"@type": "Organization", "name": "Phantom Pasting"},
  "image": "https://phantompasting.com/gallery/fashionpass-wheat-paste-wild-posting-wall-los-angeles.jpg",
  "datePublished": "2026-04-01"
}
```

### Gallery Images — `ImageObject` (wins Google Image traffic)
```json
{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": "https://phantompasting.com/gallery/fashionpass-wheat-paste-wild-posting-wall-los-angeles.jpg",
  "name": "FashionPass Wild Posting Campaign — Los Angeles Construction Hoarding",
  "description": "Repeated wheat paste posters for FashionPass on a construction hoarding wall in Los Angeles, guerrilla marketing campaign.",
  "author": {"@type": "Organization", "name": "Phantom Pasting"}
}
```

### FAQ Page — `FAQPage`
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does wheat pasting cost?",
      "acceptedAnswer": {"@type": "Answer", "text": "..."}
    },
    {
      "@type": "Question",
      "name": "What cities do you do wild posting in?",
      "acceptedAnswer": {"@type": "Answer", "text": "..."}
    }
  ]
}
```

---

## Technical SEO — Next.js 14 App Router Checklist

### Core Infrastructure
- [ ] `app/sitemap.ts` — dynamic sitemap including all city pages, blog posts, case studies
- [ ] `app/robots.ts` — allow all, point to sitemap
- [ ] `generateMetadata()` — unique title/description on every page and layout
- [ ] Canonical URLs via `alternates.canonical` in metadata
- [ ] `next/image` with `alt`, `width`, `height`, `priority` on hero images

### Metadata Pattern (Every Page)
```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    title: `Wheat Pasting ${city} | Phantom Pasting`,
    description: `Street-level wheat paste and wild posting campaigns in ${city}. 100% photo-documented. Get a quote from Phantom Pasting.`,
    alternates: { canonical: `https://phantompasting.com/locations/${slug}` },
    openGraph: {
      title: `..`,
      description: `..`,
      images: [{ url: `/og/${slug}.jpg`, width: 1200, height: 630 }],
    },
  };
}
```

### JSON-LD Pattern (Every Page)
```typescript
// In layout.tsx or page.tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>
```

### Performance
- [ ] `next/image` with WebP/AVIF auto-format
- [ ] `loading="lazy"` on below-fold images, `priority` on LCP image
- [ ] Font subsetting — only load characters used
- [ ] Static export (`output: 'export'`) for max CDN caching
- [ ] Core Web Vitals targets: LCP < 2.5s, CLS < 0.1, INP < 200ms

### Image SEO (Big opportunity — visual portfolio business)
- [ ] All gallery images have descriptive `alt` text
- [ ] SEO-named filenames already in place ✅
- [ ] `ImageObject` schema on gallery and case study pages
- [ ] `og:image` on every page pointing to relevant campaign photo

---

## Link Building for New Domain

### Month 1–3 (Foundation Links)
1. **Google Business Profile** — create immediately, fill 100%
2. **Bing Places** — often overlooked, still valuable
3. **Yelp Business** — create profile with description + photos
4. **Yellow Pages / Manta / Clutch.co** — directory citations
5. **Crunchbase** — set up company profile
6. **LinkedIn Company Page** — link back to site
7. **Instagram bio link** — social signal
8. **Marketing industry directories** — Agency Spotter, Sortlist, UpCity

### Month 3–6 (Earned Links)
1. **Client case study mentions** — ask FashionPass, Incrediwear if they'll link to the case study from their "we worked with" page
2. **Local news angles** — reach out to LA/NYC/Chicago marketing press about street campaign coverage
3. **"Best guerrilla marketing companies" roundups** — identify existing ones, submit
4. **Marketing blogs** — guest post: "What brands need to know before running a wheat paste campaign"
5. **Reddit presence** — r/marketing, r/guerrillamarketing — answer questions, build authority

### Month 6–12 (Authority Links)
1. **Podcast appearances** — marketing/advertising podcasts ("How brands go underground")
2. **Original research** — "2026 State of Guerrilla Marketing" report → earns natural links
3. **Press coverage** — pitch to Billboard, Adweek, Marketing Week about FIFA/FashionPass campaigns
4. **Industry associations** — OAAA (Out of Home Advertising Association), guerrilla marketing groups

---

## KPI Targets

| Metric | Baseline | Month 3 | Month 6 | Month 12 |
|--------|----------|---------|---------|----------|
| Organic Traffic | 0 | 200–400/mo | 800–1,500/mo | 3,000–6,000/mo |
| Indexed Pages | 1 | 20+ | 50+ | 100+ |
| Keyword Rankings (top 10) | 0 | 10–20 | 40–80 | 150+ |
| Domain Authority | 0 | 5–10 | 15–25 | 30–40 |
| City Pages Live | 0 | 5 | 12 | 20 |
| Case Studies Live | 0 | 3 | 5 | 8 |
| Blog Posts Live | 0 | 4 | 12 | 24 |
| Backlinks | 0 | 20–40 | 60–100 | 200+ |
