import BlogLink from "@/components/BlogLink";
import PullQuote from "@/components/PullQuote";

/**
 * Post body for /blog/is-wheat-pasting-legal.
 * Registry metadata lives in /lib/blogRegistry.ts.
 */

export function tldr() {
  return (
    <p>
      Wheat pasting sits in a legal gray zone in most US cities. It&apos;s not graffiti (no permanent
      damage), not quite vandalism (paste and paper wash off), and enforcement varies wildly by
      city and officer. After 500+ campaigns across LA, NYC, Miami, Chicago, Atlanta, Phoenix,
      and Denver, here&apos;s what actually happens on the street — not what city code says in theory.
    </p>
  );
}

export default function Post() {
  return (
    <>
      <p style={{ fontStyle: "italic", color: "rgba(0,0,0,0.6)", marginBottom: "1.5em" }}>
        This guide is for brand managers, agencies, and anyone considering a wheat paste
        campaign and worried about the legal exposure. It&apos;s written from inside an
        active commercial install crew — not legal advice, but field reality.
      </p>

      <h2>What the Law Actually Says</h2>
      <p>
        Most US municipalities have &quot;unlawful posting&quot; or &quot;illegal posting&quot; ordinances
        that cover wheat pasting,{" "}
        <a href="https://en.wikipedia.org/wiki/Flyposting" target="_blank" rel="noopener noreferrer">flyposting</a>
        , and sticker placement. Penalties range from:
      </p>
      <ul>
        <li><strong>Civil fines</strong>, $75–$500 per poster, rarely enforced</li>
        <li><strong>Misdemeanor charges</strong> in a handful of cities (<a href="https://www.nyc.gov/assets/dsny/site/resources/streets-and-sidewalks-laws/posting-graffiti-laws" target="_blank" rel="noopener noreferrer">NYC Admin Code §10-119</a> is the most cited)</li>
        <li><strong>Property owner complaints</strong> that trigger cleanup fees, not criminal action</li>
      </ul>
      <p>
        These laws almost universally exempt private property posting{" "}
        <strong>with owner permission</strong>. That&apos;s the lane every legitimate wheat pasting
        campaign operates in — private walls, owner-consented, permits where applicable.
      </p>

      <h2>What Actually Happens on the Street</h2>
      <p>
        In LA and NYC, we&apos;ve pasted thousands of posters over the past decade. Encounters with
        police look like this:
      </p>

      <PullQuote attribution="Mateo Vargas, Field Operations Lead">
        <p>
          Usually in big cities like Los Angeles and New York City, police won&apos;t bother you if
          you&apos;re not doing any graffiti. If you&apos;re just doing posters, we make sure we don&apos;t leave
          any trash or residue behind. We always keep the site clean after posting — even when
          other installers from other companies leave old posters on the sidewalk. The second a
          crew trashes a block, that block gets flagged and enforcement tightens for everyone.
        </p>
      </PullQuote>

      <p>The pattern:</p>
      <ol>
        <li>
          <strong>Visible install, no graffiti, clean site → no interaction.</strong> Officers see a
          paste-up crew, register we&apos;re not spraying, keep moving. Happens 95% of the time.
        </li>
        <li>
          <strong>Questions instead of tickets.</strong> Occasionally an officer stops to ask what
          we&apos;re doing. Straight answer — &quot;we&apos;re installing for [brand] on this property, we have
          permission&quot; — ends the conversation.
        </li>
        <li>
          <strong>Property owner complaints.</strong> If an owner didn&apos;t authorize the wall, they
          can call in. We don&apos;t paste walls without authorization. Period. That&apos;s the whole
          compliance model.
        </li>
      </ol>
      <p>
        Cities where enforcement is tighter and we adjust accordingly: parts of Miami (historic
        districts), Downtown LA commercial corridors, Midtown Manhattan near government buildings.
        We route around those zones or pull specific permits.
      </p>

      <h2>The Leave-No-Trace Standard</h2>
      <p>
        Wheat paste is forgivable to a city in ways spray paint isn&apos;t — but only if crews leave
        sites clean. Our standard:
      </p>
      <ul>
        <li>No paper scraps left on sidewalks</li>
        <li>No paste drips on the ground</li>
        <li>No buckets, brushes, or tools left behind</li>
        <li>Old poster layers removed when adding new ones</li>
        <li>Even trash left by <strong>other</strong> installers gets picked up before we leave</li>
      </ul>
      <p>
        That last point isn&apos;t virtue signaling. It&apos;s self-interested. Cities judge the entire
        paste-up industry by the worst crew on the block. When a block goes dirty, code enforcement
        tightens and legitimate campaigns get harder. Clean work protects the whole market.
      </p>

      <h2>Legal Posture by City</h2>
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Ordinance</th>
            <th>Typical Enforcement</th>
            <th>Permit Needed?</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Los Angeles</td><td><a href="https://codelibrary.amlegal.com/codes/los_angeles/latest/lamc/0-0-0-128154" target="_blank" rel="noopener noreferrer">LAMC §28.04</a></td><td>Low on private property</td><td>Only for historic zones</td></tr>
          <tr><td>New York City</td><td><a href="https://www.nyc.gov/assets/dsny/site/resources/streets-and-sidewalks-laws/posting-graffiti-laws" target="_blank" rel="noopener noreferrer">NYC Admin §10-119</a></td><td>Moderate; strong in Midtown</td><td>Yes for scaffold wrapping</td></tr>
          <tr><td>Miami</td><td>Miami Code §54-3</td><td>Higher in historic districts</td><td>Yes in Wynwood / South Beach</td></tr>
          <tr><td>Chicago</td><td>MCC 10-8-320</td><td>Low with property consent</td><td>Rarely</td></tr>
          <tr><td>Atlanta</td><td>ACC §16-5A.006</td><td>Low</td><td>No on private walls</td></tr>
          <tr><td>Phoenix</td><td>PCC §23-52</td><td>Very low</td><td>No</td></tr>
          <tr><td>Denver</td><td>DRMC §38-82</td><td>Very low</td><td>No</td></tr>
        </tbody>
      </table>
      <p>
        <em>
          Consult a local attorney for any campaign — rules update and this table reflects field
          experience, not legal counsel.
        </em>
      </p>

      <h2>City-by-City: What the Law Actually Looks Like</h2>
      <p>
        The table above is the quick reference. The reality on the ground is more granular —
        the law on paper and the law as a beat cop or code-enforcement officer applies it
        rarely match. Here&apos;s how it actually plays out in the six markets where we paste most.
      </p>

      <h3>Wheat Pasting in NYC: Admin Code §10-119</h3>
      <p>
        <a href="https://www.nyc.gov/assets/dsny/site/resources/streets-and-sidewalks-laws/posting-graffiti-laws" target="_blank" rel="noopener noreferrer">NYC Administrative Code §10-119</a>
        {" "}covers unlawful posting on public property. The statutory fine starts at $75 per
        poster and tops out around $500. In practice, NYPD doesn&apos;t enforce it on private-wall
        commercial campaigns — they have actual crimes to chase. Where NYC does enforce: Midtown
        government-building corridors, scaffold wraps without DOB permits, and any block where
        an earlier crew left a paper-mess complaint trail. Lower East Side, Williamsburg,
        Bushwick, and DUMBO operate with effectively zero enforcement on owner-authorized walls.
        SoHo is moderate. We&apos;ve done 300+ NYC installs and have never seen a ticket on a
        properly-authorized wall. Scaffold wraps are the only NYC format that legitimately
        requires city paperwork — that&apos;s a DOB permit, 3-4 week lead time, runs $2K-$8K per
        wrap on top of installation. <BlogLink slug="wheat-pasting-new-york">Our NYC field
        guide</BlogLink> covers the borough-by-borough specifics; <a href="/locations/new-york">the
        NYC service page</a> has pricing.
      </p>

      <h3>Wheat Pasting in Los Angeles: LAMC §28.04</h3>
      <p>
        <a href="https://codelibrary.amlegal.com/codes/los_angeles/latest/lamc/0-0-0-128154" target="_blank" rel="noopener noreferrer">Los Angeles Municipal Code §28.04</a>
        {" "}prohibits posting on public property without consent. LAPD does not enforce this on
        clean commercial campaigns. The exception is historic-preservation zones — chunks of
        Hollywood, the DTLA Arts District&apos;s landmark structures, parts of Beverly Hills-adjacent
        Sunset Boulevard, and any building under HPOZ (Historic Preservation Overlay Zone)
        designation. Those require Department of Building &amp; Safety permits, which we handle when
        a brief targets those walls. Outside historic zones, LA is the most permissive Tier-1
        market in the US: Melrose Avenue between Fairfax and La Brea, Fairfax itself, Silver
        Lake, Echo Park, DTLA Arts District (non-historic walls), Venice / Abbot Kinney, Highland
        Park, and Hollywood corridors all operate with zero enforcement on owner-authorized walls.
        We&apos;ve been pasting LA since 2014 — see <BlogLink slug="wheat-pasting-los-angeles">our LA
        neighborhood breakdown</BlogLink> for the wall map and <a href="/locations/los-angeles">the LA
        service page</a> for pricing.
      </p>

      <h3>Wheat Pasting in Chicago: MCC §10-8-320</h3>
      <p>
        <a href="https://codelibrary.amlegal.com/codes/chicago/latest/chicago_il/0-0-0-2502604" target="_blank" rel="noopener noreferrer">Chicago Municipal Code §10-8-320</a>
        {" "}covers handbill and poster distribution. The Chicago Police Department doesn&apos;t
        treat clean commercial wheat-pasting as a priority offense, and the city&apos;s mural-corridor
        culture in Wicker Park, Logan Square, Pilsen, and the West Loop makes wall postings part
        of the visible neighborhood character rather than a code-enforcement target. The Loop and
        Magnificent Mile are stricter — both are tourist-heavy, sign-regulated, and police presence
        is denser. We route around those zones and concentrate Chicago campaigns on the cultural
        corridors. Property-owner authorization is the universal lane here as everywhere else: a
        wall owner signs off, we paste, the campaign holds 4-6 weeks. Chicago summer humidity
        shortens lifespan slightly versus the dry-climate markets. See <a href="/locations/chicago">our
        Chicago service page</a> for neighborhood-level detail.
      </p>

      <h3>Wheat Pasting in Atlanta: ACC §16-5A.006</h3>
      <p>
        Atlanta&apos;s posting code is light enforcement across the board. Old Fourth Ward, West End,
        Edgewood, the Beltline corridor, and Castleberry Hill all carry active mural cultures
        that make wheat paste a natural extension of what walls already display. We ran the FIFA
        World Cup activation across Atlanta in early 2026 and the city had no posting-related
        intervention on any of the 40+ walls we papered for that brief. The exception zones in
        Atlanta are around Buckhead luxury retail and the State Capitol area — both denser on
        signage code and police presence. The 2026 FIFA World Cup brought renewed attention to
        Atlanta&apos;s street-media corridors, and the city&apos;s response was overwhelmingly to lean
        into the cultural moment rather than enforce against it. Brand briefs targeting Atlanta&apos;s
        sports-event windows (Falcons, Hawks, Braves, MLS) get the most lift here. <a href="/locations/atlanta">Our Atlanta
        service page</a> details neighborhood specifics.
      </p>

      <h3>Wheat Pasting in Miami: Code §54-3</h3>
      <p>
        Miami has the most format-specific posting code of any market we run. <a href="https://library.municode.com/fl/miami/codes/code_of_ordinances" target="_blank" rel="noopener noreferrer">Miami Code §54-3</a>
        {" "}is enforced more actively in South Beach and the historic Art Deco district than in
        Wynwood — Wynwood&apos;s commercial mural-and-paste culture is essentially expected at this
        point, and the Wynwood Arts District operates with effectively zero posting enforcement on
        owner-authorized walls. Design District is moderate; permits are sometimes required for
        scaffolding or temporary installations. South Beach and Lincoln Road need permits more
        often than not — historic-preservation overlay applies. Brickell and Downtown Miami are
        mixed: enforcement varies by block. Humidity and salt-air degrade paste posters faster
        in Miami than anywhere else we work — typical lifespan is 3-5 weeks versus 6-8 in dry
        markets. We use PVA-reinforced paste for all Miami summer installs. <a href="/locations/miami">The
        Miami service page</a> has neighborhood pricing.
      </p>

      <h3>Wheat Pasting in Brooklyn: NYC §10-119 (Borough Application)</h3>
      <p>
        Brooklyn operates under the same NYC Administrative Code as Manhattan but with a
        practically different enforcement environment. Williamsburg, Bushwick, Greenpoint, and
        DUMBO have zero meaningful enforcement on owner-authorized commercial paste — the
        neighborhoods are dense with property owners who actively participate in the mural-paste
        economy. The Bedford Avenue corridor in Williamsburg, Flushing Avenue through Bushwick,
        and Manhattan Avenue through Greenpoint all carry walls we&apos;ve papered repeatedly with no
        intervention. Park Slope, Cobble Hill, and Brooklyn Heights are stricter — residential
        density and historic-district overlays change the calculus. We&apos;ve done 50+ Brooklyn
        installs and have never had a property-owner complaint or city intervention on an
        authorized wall. Brooklyn-only campaigns run 15-20% cheaper than Manhattan equivalents
        because wall rights are generally lower-cost in the outer-borough creative zones. See <a href="/locations/new-york">the
        NYC + Brooklyn service page</a> for combined-borough pricing.
      </p>

      <p>
        The pattern across all six cities is the same: the letter of the law is broader than the
        reality of enforcement, owner-authorization is the universal safe lane, and the agencies
        that actually get tickets are the ones cutting corners on permits, cleanup, or wall
        rights. Brand-side compliance comes down to picking an installer that operates in the
        authorized lane — not to picking a city.
      </p>

      <h2>How Reputable Agencies Protect Brands</h2>
      <p>If you&apos;re a brand marketer considering wheat pasting, here&apos;s how to avoid legal exposure:</p>
      <ol>
        <li>
          <strong>Work with agencies that secure wall rights.</strong> We source private walls and
          compensate property owners. The poster goes up with paperwork backing it.
        </li>
        <li>
          <strong>Ask for campaign documentation.</strong> Reputable crews photograph every install
          — wall, poster, location, timestamp. Documentation protects the brand if a code question
          ever arrives.
        </li>
        <li>
          <strong>Avoid campaigns that promise &quot;guaranteed city coverage&quot; with zero permit
          conversation.</strong> That&apos;s a crew pasting public property and hoping nobody notices.
          The brand carries liability if it goes sideways.
        </li>
        <li>
          <strong>Insist on cleanup.</strong> A campaign that pastes and disappears is a campaign
          that risks your brand name on a code violation report.
        </li>
      </ol>
      <p>
        For a full walk-through of how our crews execute,{" "}
        <BlogLink slug="wheat-pasting-campaign">see how a campaign actually works</BlogLink>.
      </p>

      <h2>Is Wheat Pasting Ever Prosecuted?</h2>
      <p>
        Rarely, and almost always tied to another offense (trespass, property damage, ignored
        cease-and-desist). Clean crews on authorized walls get warnings at worst. The cities that
        want to enforce &quot;illegal posting&quot; laws almost never have the prosecutorial bandwidth —
        they have actual crimes to chase.
      </p>

      <h2>Installer&apos;s Perspective</h2>
      <PullQuote attribution="Mateo Vargas, Field Operations Lead">
        <p>
          I&apos;ve been stopped by police maybe 20 times in 10 years of installs. Every single time,
          the conversation ended with &quot;okay, have a good night.&quot; The crew was clean, the wall
          was authorized, and we weren&apos;t spraying. I&apos;ve never seen a Phantom Pasting installer
          ticketed. Not once.
        </p>
        <p style={{ marginTop: "1rem" }}>
          The crews that do get hassled: the ones trashing sidewalks, pasting government
          buildings, or leaving buckets behind. Don&apos;t be those crews.
        </p>
      </PullQuote>

      <p>
        Curious how crews actually prep paste in the first place? Our{" "}
        <BlogLink slug="how-to-make-wheat-paste">full paste recipe breakdown</BlogLink> walks
        through the mix, cook, and cool-down. For the operational side of an authorized
        commercial campaign, see{" "}
        <BlogLink slug="wheat-pasting-campaign">how a 12-location campaign runs overnight</BlogLink>.
      </p>
      <p>
        Want a quote for an authorized, owner-consented campaign?{" "}
        <a href="/contact">Contact us</a> — we handle wall rights, permits where required,
        and full photo documentation per install.
      </p>
    </>
  );
}
