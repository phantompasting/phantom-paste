import Link from "next/link";
import PullQuote from "@/components/PullQuote";

/**
 * Post body for /blog/wheat-pasting-campaign.
 * Registry metadata lives in /lib/blogRegistry.ts.
 */

export function tldr() {
  return (
    <p>
      A typical client campaign is 12–15 locations, 6–16 posters per wall, 4–8 unique designs,
      finished overnight in one city. The math behind it — how we prep, route, paste, and
      document — is what separates a campaign that holds for 6 weeks from one that peels in 3
      days. Here&apos;s the full breakdown.
    </p>
  );
}

export default function Post() {
  return (
    <>
      <h2>The Setup</h2>
      <p>
        Most campaigns arrive like this: a brand wants 200 posters up in Los Angeles by Friday
        morning. They&apos;ve signed off on 4–8 designs, all at 24×36 inches — our standard. Large
        enough to read from 30 feet, small enough to paste solo.
      </p>
      <p>From sign-off to install, we run:</p>
      <ol>
        <li><strong>Design delivery and print</strong> (3–5 days)</li>
        <li>
          <strong>Site scouting</strong> (1–2 days — walls we&apos;ve worked before get re-confirmed;
          new cities get full scout)
        </li>
        <li><strong>Crew scheduling</strong> (2–3 installers per vehicle)</li>
        <li><strong>Night of install</strong> (6–8 hours, typically 10 p.m. to 4 a.m.)</li>
        <li><strong>Documentation pass</strong> (next morning, daylight photos of every wall)</li>
      </ol>

      <h2>Pre-Flight Prep</h2>
      <p>
        Before the crew leaves the warehouse, posters are stacked and bundled{" "}
        <strong>in install order</strong> — not by design, but by location and grid position. At a
        3×2 wall, the installer pulls posters top-to-bottom, left-to-right. Any other stacking
        costs 30 seconds per wall. 30 seconds × 15 locations = 7.5 minutes lost, which is the
        difference between finishing at 4 a.m. and finishing at 4:10.
      </p>
      <p>
        Design order per wall is mapped: most campaigns run rows of three to eight posters wide and
        columns of two tall. A 6×2 wall gets a specific sequence of designs — usually alternating
        to create a rhythm readable from across the street.
      </p>

      <h2>Crew Kit Per Vehicle</h2>
      <ul>
        <li><strong>3 buckets of water</strong> (10-gallon each, locking lids)</li>
        <li><strong>1 full bag of commercial wheat paste powder</strong> (mix on-site as needed)</li>
        <li><strong>1 bucket of paste already prepared</strong> at the warehouse — ready to use on wall #1</li>
        <li>
          <strong>2 soft-brush brooms</strong> — the kind sold for washing cars. Stiff brushes tear
          posters; the soft car-wash broom spreads paste evenly.
        </li>
        <li><strong>2 scissor clamps and 1 utility knife</strong> (trim posters to scale)</li>
        <li><strong>1 gallon clean water</strong> in a spray bottle (dampening paste if it thickens)</li>
        <li><strong>Headlamps</strong> (hands-free work)</li>
        <li><strong>Phone + shotgun mic</strong> for documentation video</li>
        <li><strong>Trash bags</strong> — old posters come off the wall and go into the bag, not the sidewalk</li>
      </ul>
      <p>
        Every bucket has a locking lid. We learned this the hard way. One tipped bucket in a
        vehicle bed means 10 gallons of wheat paste in the carpet, and that truck is out of
        rotation for a week.
      </p>
      <p>
        The paste itself is a separate science — see{" "}
        <Link href="/blog/how-to-make-wheat-paste">how to make wheat paste</Link> for the full mix
        breakdown.
      </p>

      <h2>The Route</h2>
      <p>Route planning is the invisible part of campaign work. A good route:</p>
      <ul>
        <li>Hits highest-traffic walls first (so daylight photos catch them with best context the next morning)</li>
        <li>Batches by neighborhood (Melrose walls together, DTLA walls together) to minimize drive time</li>
        <li>
          Avoids known surveillance-heavy blocks (government buildings, banks) — not for legality
          reasons (<Link href="/blog/is-wheat-pasting-legal">we&apos;re authorized</Link>) but to avoid
          unnecessary delays
        </li>
        <li>Ends near a car wash or home base for bucket rinse-down</li>
      </ul>
      <p>
        For a 12-location LA campaign, typical route: Melrose corridor first (3 walls) → Fairfax
        (2 walls) → Silver Lake (2 walls) → Echo Park (2 walls) → DTLA Arts District (3 walls).
        Total drive time: under 90 minutes including breaks.
      </p>

      <h2>The Install — Per Wall</h2>
      <ol>
        <li><strong>Brush down the surface</strong> — any loose material, old poster fragments, dust</li>
        <li><strong>First paste coat</strong> on the wall — 3–4 feet wide by poster-height</li>
        <li><strong>Apply poster</strong> top-edge first, press down center, sweep outward with the broom</li>
        <li><strong>Second paste coat over the poster</strong> — this seals the paper against weather and wind</li>
        <li>
          <strong>Next poster</strong> — overlap the previous by 1/8 inch. Posters butted flush
          leak weather at the seam.
        </li>
        <li><strong>Step back and photograph</strong> — full wall shot plus close-up of any visible seam</li>
      </ol>
      <p>
        A 3×2 grid (6 posters) takes a 2-person crew 8–10 minutes. A 4×2 grid (8 posters) takes
        11–13 minutes. Multiply across 12 locations: 120–150 minutes of active paste time, plus
        transitions.
      </p>

      <h2>Technical Specs — Typical LA Campaign</h2>
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Locations</td><td>12–15</td></tr>
          <tr><td>Posters per wall</td><td>6–16 (grid-dependent)</td></tr>
          <tr><td>Total posters</td><td>144–240</td></tr>
          <tr><td>Unique designs</td><td>4–8</td></tr>
          <tr><td>Poster size</td><td>24×36 inches (standard)</td></tr>
          <tr><td>Buckets of water per vehicle</td><td>3</td></tr>
          <tr><td>Paste batches mixed on-site</td><td>2–4</td></tr>
          <tr><td>Install window</td><td>10 p.m. – 4 a.m.</td></tr>
          <tr><td>Documentation</td><td>Next-morning daylight photos, every wall</td></tr>
        </tbody>
      </table>

      <h2>Installer&apos;s Perspective — The Broom and the Lid</h2>
      <PullQuote attribution="Mateo Vargas, Field Operations Lead">
        <p>
          The broom is the thing nobody thinks about until they get it wrong. A regular janitorial
          broom has stiff bristles — you&apos;ll tear through the first poster and spend 10 minutes
          re-pasting. The broom we buy is a soft-brush car-wash broom, the kind sold at auto parts
          stores. It holds paste in the bristles, spreads it smoothly, and doesn&apos;t mark the poster.
        </p>
        <p style={{ marginTop: "1rem" }}>
          The other piece people skip: the locked-lid bucket. It sounds paranoid until the first
          time you take a pothole and a 10-gallon bucket of paste tips onto a roll of posters. One
          bad pothole can cost $400 in print and 4 hours of rework. Lock the lid.
        </p>
      </PullQuote>

      <h2>Documentation — The Part Brands Never See</h2>
      <p>
        Every campaign ends with a documentation pass the morning after install. The crew drives
        the full route in daylight and shoots each wall with:
      </p>
      <ul>
        <li>A <strong>wide shot</strong> (wall in context — store next door, street view)</li>
        <li>A <strong>tight shot</strong> (poster grid at full detail)</li>
        <li>A <strong>location pin</strong> (GPS dropped per wall)</li>
      </ul>
      <p>
        That package reaches the brand within 24 hours. Without photos, a wheat paste campaign
        exists only in the installer&apos;s word. With photos, it becomes a deliverable the marketer
        can send up the chain.
      </p>
    </>
  );
}
