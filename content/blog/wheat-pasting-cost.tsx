import BlogLink from "@/components/BlogLink";
import PullQuote from "@/components/PullQuote";

export function tldr() {
  return (
    <p>
      Wheat pasting campaigns run $5,000–$13,500 per city for a standard 150–250 poster rollout,
      with per-poster costs settling at $33–$55 installed. Cost depends on five variables: city,
      poster count, wall mix, print quality, and documentation. Here&apos;s the real pricing from
      500+ campaigns — what moves the number, what doesn&apos;t, and what a fair quote looks like in
      2026.
    </p>
  );
}

export default function Post() {
  return (
    <>
      <p style={{ fontStyle: "italic", color: "rgba(0,0,0,0.6)", marginBottom: "1.5em" }}>
        This guide is for marketing leads, agencies, and brand managers building a media
        budget that includes wheat paste. Pricing reflects 2026 US rates from a
        crew that&apos;s run 500+ live campaigns; per-poster math holds across most major
        markets, with the variance explained below.
      </p>

      <h2>The Baseline — What a Standard Campaign Costs</h2>
      <p>
        A standard single-city wheat paste campaign in 2026:
      </p>
      <ul>
        <li>150–250 posters total</li>
        <li>12–15 walls</li>
        <li>4–8 unique designs</li>
        <li>24×36-inch poster size</li>
        <li>Overnight install, next-morning documentation</li>
      </ul>
      <p>
        Typical all-in cost: <strong>$5,000–$13,500 per city</strong>. That&apos;s print + wall
        rights + install labor + paste + photo documentation + project management. The range
        depends on which five variables move against you. We&apos;ve quoted hundreds of these
        and the spread has stayed remarkably stable since 2022 — paper pricing crept up, wall
        rights went up faster, but the bands held. A real reference point: a recent 450-poster
        rollout across 3 cities ran $15,179 total, which works out to ~$33.70 per poster — at the
        bottom of the range thanks to multi-city scale discounts.
      </p>

      <h2>The Five Cost Drivers</h2>

      <h3>1. City — Los Angeles and NYC are premium markets</h3>
      <p>
        Wall rights in Melrose or SoHo run materially higher than wall rights in Atlanta or
        Denver. Property owners in prime creative corridors know what a paste wall is worth and
        price accordingly. Same poster, same install crew, 25–40% cost spread between top-tier
        (<a href="/locations/los-angeles">LA</a>, <a href="/locations/new-york">NYC</a>,{" "}
        <a href="/locations/miami">Miami</a>) and secondary markets (<a href="/locations/atlanta">Atlanta</a>,{" "}
        Denver, <a href="/locations/phoenix">Phoenix</a>, <a href="/locations/chicago">Chicago</a>).
        Each city page lists its own pricing tiers.
      </p>

      <h3>2. Poster count — there&apos;s a floor but no ceiling</h3>
      <p>
        The economic floor is about 100 posters. Below that, fixed costs (crew mobilization,
        vehicle, paste prep, documentation pass) dominate per-poster cost. Above 300, scale
        discounts start — an extra 100 posters on the same install route adds about $800, not the
        $1,500 you&apos;d pay for a standalone 100-poster run.
      </p>

      <h3>3. Wall mix — premium walls cost real money</h3>
      <p>
        Not all walls are equal. A brick wall on Fairfax runs $180–$350 for a single-campaign
        placement. An entire scaffold wrap in Midtown Manhattan can run $2,000–$6,000 depending
        on dimensions and foot traffic. Most campaigns mix 8–12 standard walls with 1–3 premium
        walls for the hero-shot images. We&apos;ve had brands try to fill an entire campaign
        with $200 walls to hit a budget — the photos came back fine, but the brand team was
        confused why their content team didn&apos;t want to post any of them. The premium walls
        are premium because they make the photos worth posting.
      </p>

      <h3>4. Print quality — commercial vs. pro-grade</h3>
      <p>
        Commercial wheat paste print on 70 lb blue-back paper runs $1.25–$2.00 per 24×36 poster in
        quantities of 200+. Pro-grade UV-printed weatherproof stock runs $3.00–$4.50 for the same
        size. The jump in print cost is mostly justified — pro-grade holds color 2–3 weeks longer
        in sun — but it&apos;s a real line item.
      </p>

      <h3>5. Documentation tier — standard vs. premium</h3>
      <p>
        Standard: next-morning photo pass, wide + tight per wall, delivered as a Google Drive
        folder within 48 hours. Included in baseline cost.
      </p>
      <p>
        Premium: full video walk-through per wall, drone overhead shots where permitted, edited
        recap reel for the brand&apos;s social. Adds $800–$2,500 to the campaign.
      </p>

      <h2>Per-Poster Cost Breakdown</h2>
      <table>
        <thead>
          <tr>
            <th>Line Item</th>
            <th>Per Poster</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Print (commercial)</td><td>$2.00</td><td>24×36, 70 lb blue-back, 200 qty</td></tr>
          <tr><td>Paste + materials</td><td>$1.00</td><td>Paste, paper trim, broom wear</td></tr>
          <tr><td>Wall rights (amortized)</td><td>$11.00</td><td>Per poster across a typical wall grid</td></tr>
          <tr><td>Install labor</td><td>$9.00</td><td>2-person crew, ~1.5 min per poster + insurance</td></tr>
          <tr><td>Documentation pass</td><td>$2.50</td><td>Morning photo, processing, delivery</td></tr>
          <tr><td>Vehicle + fuel</td><td>$2.50</td><td>Amortized per poster per city night</td></tr>
          <tr><td>Project management</td><td>$5.00</td><td>Scout, schedule, report</td></tr>
          <tr><td>Insurance + overhead</td><td>$5.50</td><td>Liability, GL, business operations</td></tr>
          <tr><td><strong>Total</strong></td><td><strong>$38.50</strong></td><td>Standard all-in per-poster cost</td></tr>
        </tbody>
      </table>
      <p>
        That&apos;s the midpoint. Premium markets (LA Melrose, NYC SoHo, Manhattan scaffolding)
        and premium walls push it to $50–$55. Secondary markets and high-volume multi-city
        campaigns with scale discounts drop it to $33–$36.
      </p>

      <h2>Installer&apos;s Perspective — What Brands Get Wrong About Cost</h2>
      <PullQuote attribution="Mateo Vargas, Field Operations Lead">
        <p>
          The single most common cost mistake brands make is treating wheat pasting like a
          one-time media buy. They look at $5,000 for a Los Angeles campaign and compare it to a
          $5,000 Meta spend that&apos;s measured, trackable, and delivers X number of clicks.
        </p>
        <p style={{ marginTop: "1rem" }}>
          Wrong comparison. The right comparison is: what does $5,000 in billboard media get you
          in LA for two months? Answer: not much, and nobody photographs it. A $5,000 wheat paste
          campaign gets you 180 posters across 12 walls, six weeks of physical presence, and —
          if the creative is right — 40 to 200 user-generated photos on Instagram and TikTok that
          you never paid for. That&apos;s the actual math.
        </p>
      </PullQuote>

      <h2>Multi-City Pricing</h2>
      <p>
        Running the same campaign in 3+ cities unlocks scale discounts:
      </p>
      <ul>
        <li>2 cities: ~8% discount vs. two standalones</li>
        <li>3 cities: ~14% discount</li>
        <li>5+ cities: ~22% discount</li>
      </ul>
      <p>
        The discount comes from print run economics (printing 900 posters is materially cheaper
        per unit than 3 runs of 300) and project management (one creative review, one reporting
        template, one PM overseeing the tour).
      </p>

      <h2>What Doesn&apos;t Cost Extra</h2>
      <ul>
        <li>Single overnight install window (standard)</li>
        <li>Mixing 4–8 designs into one campaign (standard)</li>
        <li>Mid-campaign swap to a new creative (one time, standard)</li>
        <li>Documentation with GPS pin per wall (standard)</li>
      </ul>

      <h2>What Does Cost Extra</h2>
      <ul>
        <li>Same-week emergency rollout (rush premium 20–35%)</li>
        <li>Weekly refresh for long-run campaigns (priced per refresh)</li>
        <li>Permit pulls in historic districts (Miami Wynwood, NYC Midtown scaffolding)</li>
        <li>Drone documentation / video recap</li>
        <li>Multi-format combos (paste + snipes + floor decals in one campaign)</li>
      </ul>

      <h2>How to Read a Quote</h2>
      <p>A reputable wheat paste quote should itemize:</p>
      <ol>
        <li>Total poster count and poster size</li>
        <li>Number of walls and rough neighborhood list</li>
        <li>Number of unique creatives</li>
        <li>Print specs (paper weight, print type)</li>
        <li>Install window and crew size</li>
        <li>Documentation scope and delivery timeline</li>
        <li>Permit and insurance coverage</li>
      </ol>
      <p>
        If a quote arrives as a single lump number with no breakdown, ask for one. Transparent
        pricing is a reliable signal of a trustworthy operator; opaque pricing usually means
        corners are being cut on one of the seven line items above. We&apos;ve had brands forward
        us competitor quotes that read &quot;LA wheat paste campaign — $4,500 — net 30,&quot; full
        stop. No poster count, no neighborhoods, no print spec. That&apos;s how a brand ends up
        with 60 posters on three dead walls and a brand manager wondering where the money went.
      </p>

      <h2>Cost vs. Billboards, Digital OOH, and Social</h2>
      <p>
        For the full side-by-side breakdown against other out-of-home formats, see{" "}
        <BlogLink slug="wheat-pasting-vs-billboards">wheat pasting vs. billboards</BlogLink>.
        And for the format-mix decision (paste vs. snipes vs. floor decals), see{" "}
        <BlogLink slug="snipe-posters-vs-wheat-paste-vs-floor-decals">the three-format guide</BlogLink>.
      </p>
      <p>
        Short version: wheat paste runs $0.10–$0.30 CPM in-person, which is 25–80× cheaper than{" "}
        <a href="https://en.wikipedia.org/wiki/Out-of-home_advertising" target="_blank" rel="noopener noreferrer">digital out-of-home (DOOH)</a>{" "}
        in the same market — industry-tracked DOOH CPMs typically run $8–$20 per the{" "}
        <a href="https://oaaa.org/" target="_blank" rel="noopener noreferrer">OAAA</a>{" "}
        — with the added upside of organic social amplification that pushes effective CPM
        far lower still.
      </p>

      <h2>Get a Quote</h2>
      <p>
        Want a per-city quote for a wheat pasting campaign? Tell us city, poster count, and
        timeline and we&apos;ll send a fully itemized number within 24 hours.{" "}
        <a href="/contact">Get a custom quote →</a>
      </p>
    </>
  );
}
