import Link from "next/link";
import PullQuote from "@/components/PullQuote";

export function tldr() {
  return (
    <p>
      Phoenix wheat pasting is a different job than Los Angeles or New York. 110°F summer heat,
      popcorn-cement walls, dry-air paste behavior, and water sourcing at 2 a.m. make Phoenix a
      market that rewards installers who&apos;ve adapted their recipe and routing to the desert.
      Here&apos;s what running Phoenix actually looks like — and why it still works despite the
      climate fighting you every step.
    </p>
  );
}

export default function Post() {
  return (
    <>
      <h2>Why Phoenix Is Worth Running</h2>
      <p>
        Phoenix is the fifth-largest US city, growing faster than any other top-10 metro, and
        drastically undercovered for commercial street media. The result is a market where:
      </p>
      <ul>
        <li>Wall rights run 30-40% cheaper than LA and NYC</li>
        <li>Competition for paste walls is roughly 1/10 the density of LA</li>
        <li>
          The creative-class corridors (Roosevelt Row, Grand Avenue, Melrose District) have high
          foot-traffic concentration during evenings and events
        </li>
        <li>
          DTC and streetwear brands with Sun Belt expansion plans use Phoenix as a proof-of-concept
          market before scaling to LA/NYC
        </li>
      </ul>
      <p>
        The tradeoff: you have to solve for heat, wall surface, and water. Every Phoenix installer
        figures these out by the second campaign or stops taking Phoenix jobs.
      </p>

      <h2>The Heat Problem</h2>
      <p>
        Wheat paste above 95°F behaves badly. Water evaporates out of the paste bucket faster than
        you can apply it. Open buckets skin over. Posters applied to hot walls curl immediately
        because the paste flash-sets instead of bonding.
      </p>
      <p>
        Our adjustments for summer Phoenix (May–September):
      </p>
      <ul>
        <li>
          <strong>Install windows shift to 9 p.m.–2 a.m.</strong> Walls cool by 9 p.m. even in
          July. Installing at 11 p.m. vs noon is the difference between posters that hold 6 weeks
          and posters that curl off in 3 days.
        </li>
        <li>
          <strong>Buckets stay lidded between walls.</strong> A 5-minute gap with a lid off in
          Phoenix sun costs 20% of the paste to evaporation.
        </li>
        <li>
          <strong>Add 10–15% extra water to the recipe.</strong> The dry air pulls moisture out
          fast; thicker paste mixed at the warehouse thins acceptably by the time we&apos;re at
          the second wall.
        </li>
        <li>
          <strong>Spray-bottle the wall before pasting.</strong> A light mist on hot brick cools
          the surface 10–15°F and gives the paste a cooperative bond instead of a flash-set.
        </li>
      </ul>

      <h2>Popcorn Cement — The Phoenix Wall Type</h2>
      <p>
        Most Phoenix commercial buildings are clad in popcorn cement — a textured stucco with
        pebble-sized high points that eats thin paste. Standard LA paste recipes fail on popcorn
        cement within 48 hours.
      </p>
      <p>
        The fix: thicker paste. Either add 2–3 extra tablespoons of flour per cup of water, or use
        a heavy-tack commercial formula designed for rough surfaces. The thicker paste fills the
        valleys between the high points; thin paste bridges the high points and leaves the poster
        suspended over the wall, ready to blow off with the first desert wind.
      </p>
      <p>
        For the full recipe adaptation, see{" "}
        <Link href="/blog/wheat-paste-recipes">wheat paste recipes</Link>.
      </p>

      <h2>Installer&apos;s Perspective — Car Wash Water at 2 A.M.</h2>
      <PullQuote attribution="Mateo Vargas, Field Operations Lead">
        <p>
          Phoenix is the market where water sourcing became an actual skill. Home Depot in
          Phoenix during summer is a life-saver — the garden department has a working faucet. Walk
          in during business hours, find an employee, politely ask. They almost always say yes.
          Key word: politely. If you walk up with a bucket and no conversation, some employees
          assume you&apos;re homeless trying to shower and the answer changes.
        </p>
        <p style={{ marginTop: "1rem" }}>
          Graveyard shift is the real Phoenix problem. Home Depot closes. We use 24-hour self-serve
          car washes — quarters in the slot, water in the bucket. Every Phoenix installer has a
          mental map of which car washes have working water at which hours. The one on Van Buren
          near 19th Ave has been our backup for six years.
        </p>
      </PullQuote>

      <h2>The Phoenix Neighborhoods That Matter</h2>

      <h3>Roosevelt Row</h3>
      <p>
        Roosevelt Street from 7th Avenue to 7th Street. The downtown arts district. First Fridays
        art walk brings 15,000+ pedestrians per event. Highest-signal Phoenix paste corridor.
        Walls run $100–$220 per campaign slot. Brick predominates — the one corridor in Phoenix
        where standard paste recipes work without heavy adjustment.
      </p>

      <h3>Grand Avenue</h3>
      <p>
        Roughly Van Buren to McDowell along Grand. Galleries, studios, independent retail. Second
        Fridays art walk concentrates foot traffic. Lower walls than Roosevelt Row, walls cost
        less ($80–$160).
      </p>

      <h3>Melrose District (Phoenix)</h3>
      <p>
        7th Avenue between Indian School and Camelback. Vintage shops, bars, record stores, and a
        younger demographic. Named after LA&apos;s Melrose but runs at about 20% of the foot
        traffic. Works for local-focused campaigns (Phoenix music, ASU-adjacent events).
      </p>

      <h3>Downtown Tempe — Mill Avenue</h3>
      <p>
        University town foot traffic. Great for campaigns targeting ASU students (concert promo,
        tech product launches, festival activations). Walls are limited — most Mill Avenue
        storefronts are brand chains that don&apos;t lease wall space.
      </p>

      <h3>Scottsdale — Old Town</h3>
      <p>
        Luxury retail adjacent. Higher-end DTC and premium fashion can find 2-3 authorized walls in
        the Marshall Way gallery district. Expensive ($300–$500 per wall slot) but reaches an
        audience LA can&apos;t. Niche but real.
      </p>

      <h2>Phoenix Campaign Economics</h2>
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
            <td>Roosevelt Row test</td>
            <td>Single corridor, 60–100 posters</td>
            <td>$2,400–$3,800</td>
          </tr>
          <tr>
            <td>Phoenix-only activation</td>
            <td>3 neighborhoods, 150–220 posters</td>
            <td>$4,500–$7,000</td>
          </tr>
          <tr>
            <td>Phoenix + Tucson combo</td>
            <td>Arizona-wide, 250+ posters</td>
            <td>$8K–$13K</td>
          </tr>
          <tr>
            <td>Sun Belt rollout</td>
            <td>Phoenix + Vegas + Albuquerque</td>
            <td>$14K–$22K</td>
          </tr>
        </tbody>
      </table>
      <p>
        For the general pricing model, see <Link href="/blog/wheat-pasting-cost">wheat pasting
        cost breakdown</Link>.
      </p>

      <h2>Phoenix Legal Reality</h2>
      <p>
        Phoenix is one of the most permissive US markets for authorized commercial paste work.
        Phoenix Code §23-52 covers unlawful posting but is almost never enforced on clean
        private-property campaigns. Enforcement focuses on:
      </p>
      <ul>
        <li>Historic districts (Heritage Square, Roosevelt Row buildings pre-1915)</li>
        <li>Government buildings downtown</li>
        <li>Scottsdale public right-of-way (stricter than Phoenix proper)</li>
      </ul>
      <p>
        Zero paste-related tickets on our crews in 50+ Phoenix campaigns. The legal friction is
        lower than almost any other major US market.
      </p>

      <h2>Phoenix Timing Windows</h2>
      <ul>
        <li>
          <strong>Best months: October through April.</strong> Temperatures between 60–85°F.
          Paste behaves normally, walls cool, 8-10 week poster life.
        </li>
        <li>
          <strong>Avoid: July and August.</strong> Daytime temperatures 105°F+. Install windows
          compress to 10 p.m.–2 a.m., poster lifespan drops to 3-4 weeks from UV intensity.
        </li>
        <li>
          <strong>Monsoon season: July-September.</strong> Sudden heavy rain can wash posters off
          walls pasted within 48 hours of a storm. Check 5-day forecast before install.
        </li>
        <li>
          <strong>First Fridays and Second Fridays:</strong> Roosevelt Row and Grand Avenue art
          walks. Pasting 2-3 days before these events maximizes per-campaign impressions.
        </li>
      </ul>

      <h2>Why Brands Use Phoenix</h2>
      <ul>
        <li>
          <strong>Sun Belt expansion proof-of-concept.</strong> Brands testing Scottsdale-adjacent
          DTC expansion use Phoenix paste to validate creative before an LA/Vegas push.
        </li>
        <li>
          <strong>ASU market reach.</strong> 75,000+ students within 10 miles of downtown. Concert
          promo, festival activations, back-to-school DTC campaigns all work.
        </li>
        <li>
          <strong>Cheaper test budgets.</strong> A full Phoenix activation ($5K) lets a brand test
          paste creative at 30-40% of the cost of the equivalent LA campaign. If the creative
          works in Phoenix, it&apos;s likely to work in LA.
        </li>
        <li>
          <strong>First Fridays amplification.</strong> Roosevelt Row&apos;s monthly art walk
          generates 15,000+ pedestrian impressions in a single evening — Phoenix&apos;s equivalent
          of a Melrose weekend.
        </li>
      </ul>

      <h2>What Fails in Phoenix Paste</h2>
      <ul>
        <li>
          <strong>Using LA paste recipes on popcorn cement.</strong> Posters curl off in 48 hours.
        </li>
        <li>
          <strong>Daytime summer installs.</strong> Walls at 120°F+ flash-set paste. Posters fail
          within a week.
        </li>
        <li>
          <strong>Ignoring monsoon forecasts.</strong> 20 minutes of desert downpour can destroy
          a campaign pasted the night before.
        </li>
        <li>
          <strong>Treating Phoenix like LA for documentation.</strong> Roosevelt Row photographs
          best during First Fridays evening light, not daylight. Brands insisting on noon shoots
          get weaker content.
        </li>
      </ul>

      <h2>Ready to Run Phoenix?</h2>
      <p>
        We&apos;ve run 50+ Phoenix campaigns across every corridor mapped above. For the
        operational breakdown, see{" "}
        <Link href="/blog/wheat-pasting-campaign">
          how a 12-location campaign runs overnight
        </Link>.
      </p>
    </>
  );
}
