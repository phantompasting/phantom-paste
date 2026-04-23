import BlogLink from "@/components/BlogLink";
import PullQuote from "@/components/PullQuote";

export function tldr() {
  return (
    <p>
      New York is the second major US paste market — denser than LA, more regulated, and the only
      US city where scaffold wraps are a primary format. NYC&apos;s wall economy runs across five
      boroughs but concentrates in four neighborhoods that carry most of the press and social
      amplification. Here&apos;s the borough-by-borough map and what running NYC actually costs.
    </p>
  );
}

export default function Post() {
  return (
    <>
      <h2>Why NYC Is Different</h2>
      <p>
        New York is the only major US city where most of the audience walks. 3.2 million daily
        subway riders, dense ground-level retail, and decades of street-art history mean a paste
        wall in the right NYC neighborhood generates 2–4× the in-person impressions of the same
        wall in LA. The tradeoff: walls cost more, permits are tighter, and the city physically
        removes unauthorized posters within 48 hours in Midtown.
      </p>
      <p>
        The specific reasons brands run NYC:
      </p>
      <ul>
        <li>East Coast editorial press (Vogue, GQ, Complex, Pitchfork all based here)</li>
        <li>Fashion week audience (September + February activations cluster here)</li>
        <li>Scaffold wrap availability — no other US market has this format at scale</li>
        <li>Bi-coastal fashion/music campaigns require NYC presence for legitimacy</li>
      </ul>

      <h2>The Core NYC Neighborhoods</h2>

      <h3>Lower East Side</h3>
      <p>
        Roughly Delancey south to East Broadway, Allen east to Clinton. Indie labels, younger
        audience, dense wall supply. Under-30 streetwear and music audience lives here. Walls run
        $220–$400 per campaign slot. The LES is the cheapest quality NYC paste corridor and usually
        the first stop for brands testing the market.
      </p>

      <h3>Williamsburg / Bedford Avenue</h3>
      <p>
        Bedford Avenue from N 3rd to N 12th. The Brooklyn streetwear axis. Supreme Brooklyn, KITH
        Brooklyn, and every major indie label flagship locates in or near this corridor. Walls cost
        $250–$450. Works best for brands whose audience is Brooklyn-specific.
      </p>

      <h3>SoHo — Lafayette and Mercer</h3>
      <p>
        The fashion corridor. Lafayette Street from Houston to Canal, Mercer from Houston to
        Prince. Kith SoHo, Supreme NYC, Aimé Leon Dore, Reformation, and every major fashion
        flagship concentrate here. Walls run $300–$600. Premium SoHo walls during fashion week hit
        $1,000+.
      </p>

      <h3>Chinatown / Dimes Square</h3>
      <p>
        Around Canal, Orchard, and Essex. The 2020s successor to LES as the &quot;what&apos;s
        next&quot; corridor. Heavy editorial press coverage of this area means walls here earn
        outsized social amplification per dollar.
      </p>

      <h3>Bushwick — Flushing Avenue Corridor</h3>
      <p>
        Growing but not primary. Works for niche music/DIY/indie fashion activations. Walls are
        cheap ($150–$300) but foot traffic is lighter than Williamsburg. Good for second-wave
        Brooklyn coverage.
      </p>

      <h3>Midtown — Scaffold Country</h3>
      <p>
        The scaffold wrap market. 7th Avenue, Broadway from 42nd to 57th, and the side streets off
        Times Square. Scaffolds run $2,000–$8,000 per wrap depending on dimensions and location.
        Permits required. 3-4 week lead time. Not a typical paste play — it&apos;s a premium OOH
        format with paste-wall aesthetic.
      </p>

      <h2>Installer&apos;s Perspective — Five-Borough Logistics</h2>
      <PullQuote attribution="Mateo Vargas, Field Operations Lead">
        <p>
          NYC is the only market where we split the crew by borough. LA we run one truck across
          the whole city. NYC we&apos;ll have one crew on Manhattan and a separate crew in Brooklyn
          the same night. Williamsburg Bridge at 2 a.m. is fine; Williamsburg Bridge at 6 a.m.
          crawling back into Manhattan eats 90 minutes you don&apos;t have.
        </p>
        <p style={{ marginTop: "1rem" }}>
          The other NYC-specific thing is documentation. You cannot shoot SoHo walls in daylight on
          a Saturday — every wall is blocked by shoppers. We shoot between 7 and 9 a.m. Sunday. In
          LA we shoot at noon. NYC, the content pass is a tighter window than the install
          itself.
        </p>
      </PullQuote>

      <h2>NYC Campaign Economics</h2>
      <table>
        <thead>
          <tr>
            <th>Campaign Tier</th>
            <th>Scope</th>
            <th>Cost Range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Single-neighborhood test</td>
            <td>LES or Williamsburg, 80–120 posters</td>
            <td>$4,200–$6,800</td>
          </tr>
          <tr>
            <td>Manhattan-only activation</td>
            <td>LES + SoHo + Chinatown, 200–280 posters</td>
            <td>$8,500–$13,000</td>
          </tr>
          <tr>
            <td>Manhattan + Brooklyn</td>
            <td>4 neighborhoods, 300+ posters, two crews</td>
            <td>$14K–$22K</td>
          </tr>
          <tr>
            <td>Scaffold wrap + walls</td>
            <td>Midtown scaffold + 4 neighborhoods paste</td>
            <td>$22K–$55K</td>
          </tr>
          <tr>
            <td>Fashion week flagship</td>
            <td>Multi-scaffold + premium SoHo + Brooklyn</td>
            <td>$60K–$150K</td>
          </tr>
        </tbody>
      </table>

      <h2>NYC Legal Reality</h2>
      <p>
        NYC Administrative Code §10-117 is the &quot;unlawful posting&quot; statute. In practice:
      </p>
      <ul>
        <li>
          <strong>Authorized private-property walls:</strong> Zero enforcement concern. This is
          how every legitimate campaign operates.
        </li>
        <li>
          <strong>Scaffolding:</strong> Requires a DOB permit (scaffold wraps) plus building-owner
          consent. Sometimes a Department of Transportation permit for sidewalk obstruction during
          install. Lead time 3–4 weeks.
        </li>
        <li>
          <strong>Midtown aggressive enforcement zone:</strong> 34th to 59th, river to river. Even
          authorized walls here face faster city-initiated cleanup. We don&apos;t paste here
          without the property owner&apos;s written consent on file.
        </li>
        <li>
          <strong>Public property, scaffolding without permit, transit infrastructure:</strong>{" "}
          NYC Department of Sanitation issues civil fines. Repeat offenders face stronger
          action. No reputable commercial agency operates here.
        </li>
      </ul>
      <p>
        For the broader legal picture, see <BlogLink slug="is-wheat-pasting-legal">is wheat
        pasting legal</BlogLink>.
      </p>

      <h2>NYC Wall Types</h2>
      <ul>
        <li>
          <strong>Pre-war brick (LES, SoHo, Williamsburg).</strong> Ideal paste surface. Standard
          recipe, 6–8 week hold in spring/fall, 4–5 weeks in summer humidity.
        </li>
        <li>
          <strong>Painted brick (common SoHo and Midtown).</strong> Holds paste but colors fade
          faster on painted surfaces.
        </li>
        <li>
          <strong>Construction barriers (plywood hoardings).</strong> Wheat paste&apos;s best
          surface. 8–12 week hold, no fade, easy install.
        </li>
        <li>
          <strong>Scaffold wraps (vinyl mesh).</strong> Not paste — the poster is printed directly
          on the scaffold mesh. Different production path, longer lead time, 3–6 month lifespan.
        </li>
      </ul>

      <h2>NYC Timing Considerations</h2>
      <ul>
        <li>
          <strong>Fashion week (Sept + Feb):</strong> Wall prices spike 40-60%. Book 6 weeks out.
        </li>
        <li>
          <strong>Summer humidity (July-August):</strong> Poster lifespan drops to 3-4 weeks.
          Refresh timing tightens.
        </li>
        <li>
          <strong>Winter freezing (Jan-Feb):</strong> Paste setting slows. Install crews add
          anti-freeze additive; campaigns run at night with warmer paste buckets.
        </li>
        <li>
          <strong>Street fairs and marathons:</strong> Avoid installing the day before major
          pedestrian events. DOT sometimes removes posters &quot;for cleanliness&quot; ahead of
          televised events.
        </li>
      </ul>

      <h2>When NYC Campaigns Fail</h2>
      <ul>
        <li>
          <strong>Running NYC like LA.</strong> NYC has regulations, humidity, and pedestrian
          density LA doesn&apos;t. Reusing an LA install plan in NYC costs 30% more and delivers
          less.
        </li>
        <li>
          <strong>Skipping scaffold opportunities.</strong> A $5K scaffold wrap in SoHo outperforms
          $15K of standard walls for specific campaigns (flagship openings, fashion week).
        </li>
        <li>
          <strong>Documenting Monday morning.</strong> SoHo walls get photographed by influencers
          on weekend mornings. Documentation needs to hit before Sunday noon.
        </li>
      </ul>

      <h2>Where to Run NYC First</h2>
      <p>
        For a brand&apos;s first NYC activation: 60 posters on Lafayette Street (SoHo), 60 on
        Rivington (LES), 60 on Bedford (Williamsburg). $7,500 budget, 180 posters, three of the
        highest-signal corridors in the US. Documentation pass the following Sunday morning. The
        run covers every audience segment NYC paste is worth buying for.
      </p>

      <h2>Ready to Run NYC?</h2>
      <p>
        We&apos;ve run 150+ NYC campaigns across all four boroughs mapped above. For the full
        operational breakdown, see{" "}
        <BlogLink slug="wheat-pasting-campaign">
          how a 12-location campaign runs overnight
        </BlogLink>.
      </p>
    </>
  );
}
