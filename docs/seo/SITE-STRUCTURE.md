# PhantomPasting — Site Structure & URL Architecture

> Build order: Core → Services → Locations → Work → Blog → Industries

---

## Priority Build Order

### Phase 1 — Core (Week 1–2)
Pages that must exist before any other SEO effort.

| Priority | URL | Title Tag | H1 |
|----------|-----|-----------|-----|
| 🔴 P1 | `/` | Wheat Pasting & Wild Posting Company \| Phantom Pasting | — (hero handles it) |
| 🔴 P1 | `/services/wheat-pasting` | Wheat Pasting Services \| Large Format Street Posters | Wheat Pasting That Owns Walls |
| 🔴 P1 | `/services/chalk-spray-stencils` | Chalk Spray Stencil Advertising \| Phantom Pasting | Chalk Stencils At Street Level |
| 🔴 P1 | `/services/full-impact-campaigns` | Full Guerrilla Marketing Campaigns \| Phantom Pasting | Total Street Ownership |
| 🔴 P1 | `/contact` | Get a Quote \| Phantom Pasting | Let's Hit the Streets |
| 🔴 P1 | `/about` | About Phantom Pasting \| 10+ Years Street Marketing | Who We Are |

### Phase 2 — Case Studies (Week 2–4)
Biggest E-E-A-T boost. Each one is an authority signal with named brands.

| URL | Title Tag | Key Client |
|-----|-----------|------------|
| `/work/fashionpass-los-angeles` | FashionPass Wild Posting Campaign LA \| Phantom Pasting | FashionPass |
| `/work/fifa-world-cup-atlanta` | FIFA World Cup Street Campaign Atlanta \| Phantom Pasting | FIFA |
| `/work/incrediwear-street-campaign` | Incrediwear Guerrilla Marketing \| Phantom Pasting | Incrediwear |

### Phase 3 — City Landing Pages (Month 1–3)
**Each city page = unique local search rankings.** High conversion, direct intent.

#### Tier 1 Cities (Highest volume + already have campaigns there)

| URL | Title Tag | Description Focus |
|-----|-----------|-------------------|
| `/locations/los-angeles` | Wheat Pasting Los Angeles \| Wild Posting LA | Melrose, Silver Lake, Fairfax, DTLA |
| `/locations/new-york` | Wheat Pasting New York City \| Wild Posting NYC | Lower East Side, Brooklyn, SoHo |
| `/locations/chicago` | Wheat Pasting Chicago \| Wild Posting IL | Wicker Park, Wrigleyville, Logan Square |
| `/locations/miami` | Wheat Pasting Miami \| Wild Posting FL | Wynwood, South Beach, Brickell |
| `/locations/atlanta` | Wheat Pasting Atlanta \| Wild Posting GA | Midtown, Little Five Points, Buckhead |

#### Tier 2 Cities (Month 2–3)

| URL | City Focus |
|-----|------------|
| `/locations/austin` | East 6th St, South Congress, Domain |
| `/locations/houston` | Montrose, Midtown, Heights |
| `/locations/dallas` | Deep Ellum, Uptown, Design District |
| `/locations/san-francisco` | Mission District, SoMa, Haight |
| `/locations/nashville` | Broadway, 12 South, Gulch |

#### Tier 3 Cities (Month 3–6)

```
/locations/denver
/locations/phoenix
/locations/seattle
/locations/portland
/locations/las-vegas
/locations/new-orleans
/locations/boston
/locations/philadelphia
/locations/detroit
/locations/minneapolis
```

### City Page Template (Use for every location)
```
H1: Wheat Pasting & Wild Posting in [City]
H2: Why [City] Is Our Territory
  — Describe specific neighborhoods (Silver Lake, Wynwood, etc.)
  — Mention foot traffic, culture, demographics
H2: Our [City] Work
  — Embed 2-3 photos from that city (or closest)
  — Name campaigns if possible
H2: [City] Campaign Areas
  — List 6-8 specific neighborhoods/areas with brief descriptions
H2: How It Works in [City]
  — Brief localized version of process
H2: Get a Quote for [City]
  — CTA to contact form with city pre-filled
```

### Phase 4 — Blog Content (Month 1–12)

#### Pillar Posts (Long, ranking-targeted)
| URL | Target Keyword | Est. Words |
|-----|---------------|------------|
| `/blog/what-is-wheat-pasting` | what is wheat pasting | 1,500 |
| `/blog/wheat-pasting-cost-guide` | how much does wheat pasting cost | 1,200 |
| `/blog/wild-posting-vs-billboard` | wild posting vs billboard advertising | 1,000 |
| `/blog/guerrilla-marketing-for-music-artists` | guerrilla marketing music artist | 1,200 |
| `/blog/how-to-design-poster-wheat-pasting` | design poster wheat pasting | 1,000 |
| `/blog/wheat-pasting-permit-laws-by-city` | wheat pasting legal cities | 1,500 |
| `/blog/wild-posting-advertising-guide` | wild posting advertising guide | 1,500 |

#### Supporting Posts (Cluster content, internal links to pillars)
| URL | Topic |
|-----|-------|
| `/blog/wheat-paste-formula-best` | DIY paste recipe vs pro-grade |
| `/blog/what-size-posters-wheat-pasting` | Poster size guide |
| `/blog/guerrilla-marketing-fashion-brands` | Fashion brand street marketing |
| `/blog/wheat-pasting-before-and-after` | Before/after documentation |
| `/blog/street-marketing-sports-events` | Sports event marketing strategy |
| `/blog/chalk-stencil-vs-chalk-spray` | Chalk type comparison |

### Phase 5 — Industry Vertical Pages (Month 3–6)

| URL | Title Tag | Target |
|-----|-----------|--------|
| `/industries/music-artists` | Street Marketing for Music Artists \| Phantom Pasting | music artists, labels |
| `/industries/fashion-brands` | Wheat Pasting for Fashion Brands \| Phantom Pasting | fashion, streetwear |
| `/industries/sports-events` | Wild Posting for Sports Events \| Phantom Pasting | sports teams, events |
| `/industries/entertainment` | Guerrilla Marketing for Entertainment \| Phantom Pasting | film, TV, concerts |
| `/industries/restaurants-bars` | Street Advertising for Restaurants \| Phantom Pasting | hospitality |

---

## Internal Linking Map

```
Homepage
  → /services/wheat-pasting
  → /services/chalk-spray-stencils
  → /work/fashionpass-los-angeles (feature case study)
  → /locations/los-angeles, /locations/new-york (top cities)

/services/wheat-pasting
  → /locations/[all cities] (breadcrumb + "Available in these cities" section)
  → /work/fashionpass-los-angeles
  → /work/fifa-world-cup-atlanta
  → /blog/what-is-wheat-pasting
  → /blog/wheat-pasting-cost-guide

/locations/[city]
  → /services/wheat-pasting
  → /services/chalk-spray-stencils
  → /work/ (filter by city)
  → /contact

/blog/[post]
  → Relevant service page
  → Relevant city page
  → Related blog posts (2-3)
  → /contact (CTA at end)

/work/[case-study]
  → Relevant service used
  → Relevant city
  → Other case studies
  → /contact
```

---

## Redirect Strategy

| From | To | Reason |
|------|----|--------|
| `/wild-posting` | `/services/wheat-pasting` | Synonym — consolidate |
| `/services/wild-posting` | `/services/wheat-pasting` | Synonym redirect |
| `/poster-advertising` | `/services/wheat-pasting` | Broader term redirect |
| `/gallery` | `/work` | Rebrand gallery to portfolio |

> Note: If you want `/services/wild-posting` to rank independently (it's a distinct keyword cluster), keep it as a real page with unique content rather than a redirect. "Wild posting" and "wheat pasting" have different search volumes — having both pages is fine.

---

## Sitemap Priority Values

```xml
<url>
  <loc>https://phantompasting.com/</loc>
  <priority>1.0</priority>
  <changefreq>weekly</changefreq>
</url>
<url>
  <loc>https://phantompasting.com/services/wheat-pasting</loc>
  <priority>0.9</priority>
  <changefreq>monthly</changefreq>
</url>
<url>
  <loc>https://phantompasting.com/locations/los-angeles</loc>
  <priority>0.8</priority>
  <changefreq>monthly</changefreq>
</url>
<url>
  <loc>https://phantompasting.com/work/fashionpass-los-angeles</loc>
  <priority>0.8</priority>
  <changefreq>never</changefreq>
</url>
<url>
  <loc>https://phantompasting.com/blog/what-is-wheat-pasting</loc>
  <priority>0.7</priority>
  <changefreq>monthly</changefreq>
</url>
```
