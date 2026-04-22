import Link from "next/link";
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
      <h2>What the Law Actually Says</h2>
      <p>
        Most US municipalities have &quot;unlawful posting&quot; or &quot;illegal posting&quot; ordinances
        that cover wheat pasting, flyposting, and sticker placement. Penalties range from:
      </p>
      <ul>
        <li><strong>Civil fines</strong>, $75–$500 per poster, rarely enforced</li>
        <li><strong>Misdemeanor charges</strong> in a handful of cities (NYC Admin Code §10-117 is the most cited)</li>
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
          <tr><td>Los Angeles</td><td>LAMC 28.00</td><td>Low on private property</td><td>Only for historic zones</td></tr>
          <tr><td>New York City</td><td>NYC Admin §10-117</td><td>Moderate; strong in Midtown</td><td>Yes for scaffold wrapping</td></tr>
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
        <Link href="/blog/wheat-pasting-campaign">see how a campaign actually works</Link>.
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
        <Link href="/blog/how-to-make-wheat-paste">full paste recipe breakdown</Link> walks through
        the mix, cook, and cool-down.
      </p>
    </>
  );
}
