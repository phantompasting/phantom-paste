import BlogLink from "@/components/BlogLink";
import PullQuote from "@/components/PullQuote";
import Callout from "@/components/Callout";

export function tldr() {
  return (
    <p>
      Startups live and die on attention, and paid acquisition keeps getting more expensive. Wheat
      paste, snipes, and stencils give a venture-backed or bootstrapped brand something the feed
      can&apos;t: a physical, photographable presence in the exact neighborhoods where founders,
      operators, and early adopters actually walk. Here&apos;s how tech and DTC startups use street
      campaigns to launch, raise credibility, and acquire users below the CAC their CFO expects.
    </p>
  );
}

export default function Post() {
  return (
    <>
      <p style={{ fontStyle: "italic", color: "rgba(0,0,0,0.6)", marginBottom: "1.5em" }}>
        For founders, heads of growth, and brand leads at tech and DTC startups deciding whether
        street marketing belongs in the mix alongside paid social, influencer, and PR. Pulled from
        running wheat paste, snipe, and QR campaigns for app launches, DTC product drops, and
        funding-announcement plays across SF, LA, NYC, and Austin.
      </p>

      <h2>Why Startups Are Built for the Street, Not Just the Feed</h2>
      <p>
        Every startup is fighting the same war: attention is finite and the channels that used to be
        cheap aren&apos;t anymore. Meta and Google CPMs climb every year, the inbox is a graveyard,
        and a launch tweet reaches 3% of your followers. Meanwhile a paste wall in the right
        neighborhood reaches every person who walks past it, costs a fraction of a comparable digital
        flight, and &mdash; critically &mdash; gets photographed and reposted by the exact early
        adopters you&apos;re trying to reach.
      </p>
      <p>
        Startups also have the one ingredient street marketing rewards most: a story worth
        photographing. A bold claim, a weird mascot, a number that sounds impossible, a QR code that
        promises something. Liquid Death built a category on physical-world provocation. Cash App
        turned stickers and QR drops into a growth channel. Notion grew on the back of a community
        that wanted to be seen using it in public. The brands that win on the street aren&apos;t the
        ones with the biggest budgets &mdash; they&apos;re the ones with the sharpest single idea.
        That&apos;s the same thesis behind{" "}
        <BlogLink slug="guerrilla-marketing-for-business">guerrilla marketing for business</BlogLink>{" "}
        generally, but startups have an unfair advantage: they&apos;re already weird enough to be
        worth a second look.
      </p>

      <h2>The Three Startup Campaign Types</h2>

      <h3>1. The launch wall</h3>
      <p>
        The product is live (or about to be) and you need the city to know. One to three
        neighborhoods, 100&ndash;250 posters, bold typographic creative with the product name, the
        promise, and a way to act &mdash; a URL or QR. This is the startup equivalent of the album
        announcement: it manufactures the feeling that the product is already everywhere before the
        algorithm has caught up.
      </p>

      <h3>2. The credibility play</h3>
      <p>
        Funding announcements, a marquee customer, a milestone (&quot;1 million users&quot;).
        Startups use the street to look bigger and more inevitable than their headcount suggests. A
        paste wall outside a competitor&apos;s office, a tech conference, or an investor-dense
        neighborhood signals &quot;we have arrived&quot; to the people whose perception actually
        moves the company &mdash; recruits, investors, and press.
      </p>

      <h3>3. Geo-targeted user acquisition</h3>
      <p>
        The most underrated use case. If your TAM is concentrated &mdash; restaurants in one city, a
        campus, a single business district, gig workers at an airport &mdash; you can blanket that
        exact micro-geography with snipes and QR stickers for less than a week of paid social, and
        every scan is a measurable install. This is where street marketing stops being &quot;brand&quot;
        and starts showing up in the acquisition dashboard.
      </p>

      <h2>The QR Code Is the Startup&apos;s Unfair Advantage</h2>
      <p>
        The old knock on street marketing was measurement: you couldn&apos;t prove it worked. That
        died with the QR code. A startup can put a unique, UTM-tagged QR on every wall and pole,
        track scans by location and time, and reconcile installs against spend the same way it does
        for a Meta campaign. We&apos;ve run pole-sticker QR campaigns where the client watched scans
        roll in by intersection within hours of the overnight install.
      </p>
      <p>
        That turns the honest weakness from the{" "}
        <BlogLink slug="wheat-pasting-vs-billboards">wheat pasting vs billboards</BlogLink>{" "}
        comparison &mdash; soft impression data &mdash; into a strength for digitally-native brands.
        Billboards can&apos;t tell you who scanned. A QR-tagged snipe campaign can.
      </p>

      <Callout variant="muted" label="The startup measurement stack">
        Unique QR per neighborhood + UTM + a dedicated landing page = scan-to-install attribution
        per wall. Most startups already own this entire stack. You&apos;re just pointing it at the
        physical world.
      </Callout>

      <h2>Installer&apos;s Perspective &mdash; The 2 a.m. App Launch</h2>
      <PullQuote attribution="Mateo Vargas, Field Operations Lead">
        <p>
          We did an overnight install for a DTC startup launching an app &mdash; QR stickers on
          poles across one LA corridor, plus a paste wall near a gym district their users actually
          lived in. The founder gave us the files at 6 p.m. and we were pasting by midnight.
        </p>
        <p style={{ marginTop: "1rem" }}>
          What I remember is the founder texting our crew lead at 9 the next morning, freaking out
          &mdash; not because something went wrong, but because the scan dashboard was already lighting
          up by the same intersections we&apos;d hit eight hours earlier. They&apos;d spent months
          on paid social fighting for that kind of signal. One night on the street gave it to them
          for the cost of printing.
        </p>
      </PullQuote>

      <h2>Where Startups Should Paste</h2>
      <p>
        Startup campaigns are even more neighborhood-specific than music or fashion, because the
        audience is concentrated by industry, not just by city. Four markets carry most startup
        street spend:
      </p>
      <ul>
        <li><strong><a href="/locations/san-francisco">San Francisco</a></strong> &mdash; the founder/investor density play; SoMa, the Mission, and the Caltrain corridor</li>
        <li><strong><a href="/locations/los-angeles">Los Angeles</a></strong> &mdash; consumer + DTC + creator economy; Silver Lake, Venice, Abbot Kinney, DTLA</li>
        <li><strong><a href="/locations/new-york">New York</a></strong> &mdash; fintech, media, and B2B; SoHo, Flatiron, Williamsburg</li>
        <li><strong><a href="/locations/austin">Austin</a></strong> &mdash; the relocation hub and the SXSW moment; East 6th and South Congress</li>
      </ul>
      <p>
        The rule that separates a working startup campaign from wasted spend: paste where your user
        walks, not where rent is highest. A wall in a financial district reaches commuters who scroll
        past it. A wall outside the third-wave coffee shop your power users actually frequent reaches
        the audience. Same city, completely different ROI &mdash; the same lesson covered in{" "}
        <BlogLink slug="what-is-wheat-pasting">what wheat pasting is and why brands use it</BlogLink>.
      </p>

      <h2>Budget Reality for Startups</h2>
      <p>
        The number that matters to a startup isn&apos;t the campaign cost &mdash; it&apos;s the cost
        relative to a week of paid acquisition. Here&apos;s where the tiers land:
      </p>
      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>Scope</th>
            <th>Budget Range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pre-seed / scrappy launch</td>
            <td>1 city, 1 neighborhood, snipes + QR stickers</td>
            <td>$2,500&ndash;$4,000</td>
          </tr>
          <tr>
            <td>Seed launch wall</td>
            <td>1 city, paste wall + snipe layer, ~150 posters</td>
            <td>$3,500&ndash;$6,500</td>
          </tr>
          <tr>
            <td>Series A credibility play</td>
            <td>2&ndash;3 cities, multi-neighborhood, paste + snipes</td>
            <td>$12K&ndash;$28K</td>
          </tr>
          <tr>
            <td>Growth-stage saturation</td>
            <td>4&ndash;6 cities, QR-tagged, multi-wave</td>
            <td>$35K&ndash;$80K</td>
          </tr>
        </tbody>
      </table>
      <p>
        For the full cost mechanics &mdash; what&apos;s standard, what costs extra, how to read a
        quote &mdash; see the{" "}
        <BlogLink slug="wheat-pasting-cost">wheat pasting cost breakdown</BlogLink>. And for how a
        multi-location install actually runs in one night, see{" "}
        <BlogLink slug="wheat-pasting-campaign">how a 12-location campaign works overnight</BlogLink>.
      </p>

      <h2>What Fails for Startups</h2>
      <ul>
        <li>
          <strong>Putting your whole pitch deck on a poster.</strong> A wall has one job: one idea,
          one action, readable from across the street. If it takes more than two seconds to parse, it
          failed. Founders over-explain; the street punishes it.
        </li>
        <li>
          <strong>No QR, or a QR to your homepage.</strong> The scan is the conversion. Point it at a
          dedicated, mobile-fast landing page with one action &mdash; not a homepage with a nav bar
          and five CTAs.
        </li>
        <li>
          <strong>Treating it as a one-night stunt.</strong> A single wall is a photo op. A
          two-wave campaign &mdash; teaser, then reveal &mdash; on the same walls compounds, because
          the audience notices the change and posts the before/after.
        </li>
        <li>
          <strong>Skipping documentation.</strong> Your investors and your team want to see it.
          Every install should come back with daylight photos within 12 hours &mdash; that&apos;s
          the asset that lives on in the deck and the launch thread long after the paste comes down.
        </li>
        <li>
          <strong>Pasting where rent is high instead of where users are.</strong> The most common
          and most expensive mistake. Neighborhood signal beats foot-traffic volume every time.
        </li>
      </ul>

      <Callout variant="accent" label="Launching something?" href="/contact" cta="Get a quote →">
        Tell us the product, the city, and who your first users are &mdash; we&apos;ll send a
        QR-tagged campaign plan and per-city pricing within 24 hours.
      </Callout>

      <h2>Ready to Take It to the Street?</h2>
      <p>
        We&apos;ve run paste, snipe, and QR-sticker campaigns for app launches, DTC product drops,
        and funding-announcement plays across San Francisco, LA, NYC, Austin, and 30+ other US
        markets. The startups that win on the street aren&apos;t the best-funded &mdash; they&apos;re
        the ones with one sharp idea and the nerve to put it on a wall. For the broader category
        frame, the{" "}
        <a href="https://en.wikipedia.org/wiki/Guerrilla_marketing" target="_blank" rel="noopener noreferrer">guerrilla marketing</a>{" "}
        and{" "}
        <a href="https://en.wikipedia.org/wiki/Wheatpaste" target="_blank" rel="noopener noreferrer">wheatpaste</a>{" "}
        references cover the history.
      </p>
      <p>
        Planning a launch? <a href="/contact">Get a quote</a> &mdash; tell us your product, target
        cities, and who your earliest users are, and we&apos;ll send a campaign plan within 24 hours.
      </p>
    </>
  );
}
