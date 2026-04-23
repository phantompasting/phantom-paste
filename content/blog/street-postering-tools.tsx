import BlogLink from "@/components/BlogLink";
import PullQuote from "@/components/PullQuote";

export function tldr() {
  return (
    <p>
      Most street postering guides list tools in generic terms — &quot;a brush, a bucket, some
      paste.&quot; That list will lose you a campaign. The exact tool matters. Stiff bristles tear
      posters; loose bucket lids end runs. Here&apos;s the exact kit a Phantom Pasting crew loads into
      a vehicle before a 12-location overnight install — brand, spec, and why nothing on this list
      is substitutable.
    </p>
  );
}

export default function Post() {
  return (
    <>
      <h2>The Kit, Top to Bottom</h2>
      <p>
        Every vehicle leaves the warehouse with the same kit. Variation at the tool level creates
        chaos at 2 a.m. — an installer reaches for the broom they&apos;re used to, finds a different
        one, and the paste handling changes for the worse.
      </p>

      <h3>1. Soft-brush car-wash broom</h3>
      <p>
        The single most important tool in a wheat paste kit. Sold at auto parts stores as a
        vehicle-washing brush — soft polyester or boar bristles, threaded head, telescoping
        handle.
      </p>
      <ul>
        <li>Soft bristles hold paste in the brush and release it evenly on the wall.</li>
        <li>Stiff janitorial bristles tear posters and spread paste in streaks.</li>
        <li>The threaded head lets you swap handle lengths — short for low walls, long for reach.</li>
      </ul>
      <p>
        Never use a standard push-broom. Ever. The single-most-common DIY failure is substituting
        a hardware-store broom for a car-wash broom. The difference shows in the first wall.
      </p>

      <h3>2. Locking-lid buckets (10-gallon, food-grade HDPE)</h3>
      <p>
        Three per vehicle minimum. Locking lids are non-negotiable.
      </p>
      <ul>
        <li>Food-grade HDPE is rated for long water contact without chemical leach into the paste.</li>
        <li>Locking lids prevent tip-spill when the vehicle hits potholes.</li>
        <li>10-gallon capacity balances coverage (~80 posters per bucket) with one-installer carrying weight.</li>
      </ul>
      <p>
        A spilled bucket in the vehicle bed retires the truck for a week. We&apos;ve lost one paste
        mix to a pothole. Once. Never again.
      </p>

      <h3>3. Commercial wheat paste powder</h3>
      <p>
        Pre-blended powders (sold under brands like Ross, Arch, Metylan, or rebranded for
        wallpaper trade) mix with water on-site. We keep one dry bag per 3 buckets of water, plus
        one bucket pre-mixed at the warehouse for wall #1.
      </p>
      <p>
        DIY flour-and-water mixes are viable for small campaigns — see{" "}
        <BlogLink slug="how-to-make-wheat-paste">the home recipe</BlogLink> — but for 12+ locations
        commercial powder is more consistent, stores longer, and mixes faster in the field.
      </p>

      <h3>4. Scissor clamps + utility knife</h3>
      <p>
        For trimming posters to fit odd wall dimensions. A 24&quot; scissor clamp (quilter&apos;s
        shears) cuts poster stock cleanly; a retractable utility knife with sharp blades trims
        edges against a wall once the poster is up.
      </p>

      <h3>5. Spray bottle, 1 gallon, clean water</h3>
      <p>
        For re-activating paste that&apos;s started to skin in the bucket. Between walls, the paste at
        the top of the bucket loses moisture — a light misting and a quick whisk brings it back
        workable.
      </p>

      <h3>6. Headlamps, not flashlights</h3>
      <p>
        Both hands need to be free. Headlamps in the 200-lumen range, with red-light mode for
        map-checking without destroying crew night vision. Petzl and Black Diamond are the usual
        buys — they survive being dropped on concrete.
      </p>

      <h3>7. Documentation rig</h3>
      <p>
        Phone on a gimbal with a shotgun mic for the morning documentation pass. Wide-shot, tight
        shot, and location pin per wall. See{" "}
        <BlogLink slug="wheat-pasting-campaign">the campaign breakdown</BlogLink> for how that feeds
        the client report.
      </p>

      <h3>8. Trash bags, heavy-duty 3-mil</h3>
      <p>
        Leave-no-trace is the foundation of how cities tolerate{" "}
        <BlogLink slug="is-wheat-pasting-legal">legitimate paste campaigns</BlogLink>. Trash bags
        are for our debris and anyone else&apos;s we pick up while we&apos;re on the block.
      </p>

      <h3>9. Hi-vis vests (optional but smart)</h3>
      <p>
        In neighborhoods where police or private security frequently pass, a reflective vest reads
        as &quot;authorized maintenance&quot; and cuts down on interruptions. Not a costume — we&apos;re
        actually working — but the signal it sends matters.
      </p>

      <h2>Installer&apos;s Perspective — The Broom That Costs You $400</h2>
      <PullQuote attribution="Mateo Vargas, Field Operations Lead">
        <p>
          New installers always ask if they can use the broom from the warehouse hall instead of
          the car-wash broom. The answer is no — and the reason is always the same. One torn
          poster on the wall means stop, scrape, clean, re-paste, re-apply. That&apos;s 12 minutes
          lost and one poster wasted.
        </p>
        <p style={{ marginTop: "1rem" }}>
          Repeat that six times in one night across a 200-poster campaign and you&apos;ve lost an hour
          and seventy dollars in print. Use the right broom. It&apos;s a $24 tool that pays for itself
          on the first wall.
        </p>
      </PullQuote>

      <h2>Full Kit — Per Vehicle Specs</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Spec / Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Car-wash broom</td><td>2</td><td>Soft polyester, threaded head</td></tr>
          <tr><td>10-gal buckets</td><td>3</td><td>Food-grade HDPE, locking lids</td></tr>
          <tr><td>Paste powder bag</td><td>1</td><td>Covers ~240 posters when mixed</td></tr>
          <tr><td>Pre-mixed paste bucket</td><td>1</td><td>For wall #1, ready on departure</td></tr>
          <tr><td>Scissor clamps</td><td>1 pair</td><td>24&quot; blade</td></tr>
          <tr><td>Utility knife + blades</td><td>1 + 5 spare</td><td>Retractable, sharp</td></tr>
          <tr><td>Spray bottle (water)</td><td>1 gal</td><td>Paste re-activation</td></tr>
          <tr><td>Headlamps</td><td>2</td><td>200-lumen, red-light mode</td></tr>
          <tr><td>Phone + shotgun mic + gimbal</td><td>1 rig</td><td>Morning documentation</td></tr>
          <tr><td>Heavy trash bags</td><td>10</td><td>3-mil, contractor grade</td></tr>
          <tr><td>Hi-vis vests</td><td>2</td><td>ANSI Class 2</td></tr>
        </tbody>
      </table>

      <h2>Tools We&apos;ve Tried and Abandoned</h2>
      <ul>
        <li>
          <strong>Paint rollers.</strong> Load unevenly, drip, and tear poster corners on the
          approach. A broom is better in every measurable way.
        </li>
        <li>
          <strong>Kitchen pots (for mixing on site).</strong> Too small. Walls move faster than
          batch cooking.
        </li>
        <li>
          <strong>Spray-on paste.</strong> Marketed as a time-saver. Clogs the nozzle within 20
          posters, requires constant cleaning, and the coverage is worse than brush-applied. Nice
          idea, doesn&apos;t work.
        </li>
        <li>
          <strong>Staple guns (for wheat paste posters, not snipes).</strong> Staples tear through
          wet paper. Staples belong on snipes, not paste posters.
        </li>
      </ul>

      <h2>Cost of the Full Kit</h2>
      <p>
        Full vehicle kit (excluding the vehicle itself and paste inventory): roughly $400–$600.
        Brooms and buckets are the major cost; everything else is under $50 per item. A kit lasts
        2–3 years of consistent use before brooms wear out and lids crack.
      </p>
      <p>
        $500 up front versus one ruined campaign ($3K–$7K of reprint plus crew time) — the math
        makes itself.
      </p>
    </>
  );
}
