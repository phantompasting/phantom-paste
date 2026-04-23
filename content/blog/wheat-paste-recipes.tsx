import BlogLink from "@/components/BlogLink";
import PullQuote from "@/components/PullQuote";

export function tldr() {
  return (
    <p>
      A single wheat paste recipe will fail you. Brick takes one mix; popcorn cement takes
      another; stucco takes a third; weathered plywood takes a fourth. The 1:4 flour-to-water base
      is the starting point, not the finish line. After 500+ campaigns across seven climates,
      here&apos;s the recipe book we actually use — wall by wall, season by season.
    </p>
  );
}

export default function Post() {
  return (
    <>
      <h2>Why One Recipe Doesn&apos;t Cut It</h2>
      <p>
        Walls aren&apos;t a uniform substrate. A smooth brick wall in Brooklyn absorbs paste
        differently than a textured stucco wall in Phoenix. A shaded plywood construction barrier
        holds paste for 10 weeks; a sun-baked cinder block wall peels in 8 days. The recipe has to
        match the wall.
      </p>
      <p>
        This is the single biggest gap between DIY wheat paste tutorials and actual campaign work.
        YouTube gives you one recipe. Campaigns demand four or five, with notes on when to reach
        for each. The{" "}
        <BlogLink slug="how-to-make-wheat-paste">base recipe guide</BlogLink> covers the universal
        starting point — this post covers the variants.
      </p>

      <h2>Recipe 1 — Smooth Surface Base</h2>
      <p>
        For brick, smooth concrete, painted plywood, and flat metal doors.
      </p>
      <ul>
        <li>1 part all-purpose flour</li>
        <li>4 parts cold water</li>
        <li>Cook to pancake-batter consistency (5–8 minutes at 190°F)</li>
        <li>Optional: 1 tablespoon sugar per cup for extra tack</li>
      </ul>
      <p>
        This is the everyday mix. If a wall doesn&apos;t give you reasons to modify, this is what
        goes on it. Expected hold: 4–8 weeks depending on weather.
      </p>

      <h2>Recipe 2 — Textured Surface Heavy</h2>
      <p>
        For popcorn cement, rough stucco, unfinished cinder block, aged brick with deep mortar
        lines.
      </p>
      <ul>
        <li>1 part all-purpose flour</li>
        <li>3 parts cold water (not 4 — thicker mix)</li>
        <li>Cook 7–10 minutes until it&apos;s noticeably thicker than pancake batter — closer to thin yogurt</li>
        <li>1 tablespoon PVA wood glue per cup for extra weather resistance</li>
      </ul>
      <p>
        The thicker paste fills the texture valleys instead of bridging over them. A thin base
        recipe sits on top of popcorn cement and loses contact with 60% of the surface — poster
        peels within a week.
      </p>

      <h3>Pre-wet technique</h3>
      <p>
        On the roughest surfaces — unfinished cinder block especially — wipe the wall with a damp
        rag 30 seconds before pasting. The surface grit holds the poster better when it&apos;s already
        slightly wet. Dry textured surfaces release paste by the time the second coat goes on.
      </p>

      <h2>Recipe 3 — Heat & Sun Resistant</h2>
      <p>
        For Phoenix, Las Vegas, Austin summers, LA in July. Anywhere with direct sun on the wall
        for 4+ hours a day.
      </p>
      <ul>
        <li>1 part all-purpose flour</li>
        <li>3.5 parts cold water</li>
        <li>2 tablespoons PVA wood glue per cup of prepared paste</li>
        <li>1 teaspoon salt per cup (retards mold growth in the bucket between walls)</li>
        <li>Cook 6–8 minutes, cool fully before use</li>
      </ul>
      <p>
        Heat dries paste too fast. When paste cures before the poster locks in, the poster lifts
        at the corners within days. The PVA keeps flexibility in the cured film; the salt keeps
        the bucket from fermenting in 100°F heat between walls.
      </p>

      <h2>Recipe 4 — Cold Weather</h2>
      <p>
        For November–March in NYC, Chicago, Denver, Boston. Any time the overnight temperature is
        below 45°F.
      </p>
      <ul>
        <li>1 part all-purpose flour</li>
        <li>4 parts water</li>
        <li>1 tablespoon PVA wood glue per cup</li>
        <li>Apply paste warm — not hot — to the wall. Target 70–80°F mix temperature at application.</li>
      </ul>
      <p>
        Cold paste on a cold wall sits on the surface without bonding. Warming the paste to room
        temp before application gives the flour starches a few minutes of working window before
        the wall chills them solid. Keep the bucket in the vehicle cab between walls, not the
        bed.
      </p>

      <h2>Installer&apos;s Perspective — Four Walls, Four Mixes</h2>
      <PullQuote attribution="Mateo Vargas, Field Operations Lead">
        <p>
          The night that taught me the most was a six-wall LA campaign where we pasted Melrose
          brick, a Fairfax stucco wall, a DTLA popcorn cement alley, and a Silver Lake painted
          plywood construction barrier — all in one run. Same posters, same crew, four different
          mixes in four different buckets.
        </p>
        <p style={{ marginTop: "1rem" }}>
          Six weeks later we walked the route. The brick and plywood held perfectly. The stucco
          wall showed some edge lift but the posters were intact. The popcorn cement — where we&apos;d
          used our normal base recipe because we ran out of the thick mix — had peeled almost
          clean. That was the night I learned to prep every recipe before leaving the warehouse.
        </p>
      </PullQuote>

      <h2>Recipe Selection — A Quick Table</h2>
      <table>
        <thead>
          <tr>
            <th>Wall Type</th>
            <th>Recipe</th>
            <th>Typical Hold</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Brick (smooth)</td><td>1 — Base</td><td>4–8 weeks</td></tr>
          <tr><td>Painted plywood</td><td>1 — Base</td><td>6–10 weeks</td></tr>
          <tr><td>Smooth concrete</td><td>1 — Base</td><td>4–8 weeks</td></tr>
          <tr><td>Popcorn cement</td><td>2 — Heavy</td><td>3–6 weeks</td></tr>
          <tr><td>Stucco</td><td>2 — Heavy (pre-wet)</td><td>3–6 weeks</td></tr>
          <tr><td>Cinder block</td><td>2 — Heavy (pre-wet)</td><td>2–5 weeks</td></tr>
          <tr><td>Any wall + direct sun</td><td>3 — Heat Resistant</td><td>4–7 weeks</td></tr>
          <tr><td>Any wall + below 45°F</td><td>4 — Cold Weather</td><td>5–9 weeks</td></tr>
        </tbody>
      </table>

      <h2>Common Modifications That Don&apos;t Work</h2>
      <ul>
        <li>
          <strong>Adding white glue (Elmer&apos;s).</strong> Makes the paste too brittle. It cures hard
          and cracks in the first freeze-thaw cycle.
        </li>
        <li>
          <strong>Using cornstarch instead of flour.</strong> Paste never develops structure. Thin,
          runny, won&apos;t hold a poster over 18&quot;.
        </li>
        <li>
          <strong>Microwaving the mix.</strong> Heats unevenly, creates dead spots, lumps. Always
          stovetop.
        </li>
        <li>
          <strong>Adding food dye.</strong> Bleeds through the poster backing within 24 hours. If
          you need to tint the paste for visibility, use it clear and accept that you can&apos;t see it.
        </li>
      </ul>

      <h2>Storage Between Walls and Between Nights</h2>
      <p>
        Paste ferments — it&apos;s flour and water. The timeline:
      </p>
      <ul>
        <li>Between walls on the same night: seal the bucket, keep in shade or vehicle cab.</li>
        <li>Overnight in a 70°F garage: good for 48 hours sealed.</li>
        <li>In a fridge: 4–5 days.</li>
        <li>In a 100°F vehicle bed with the lid unsealed: 3–4 hours before sourness sets in.</li>
      </ul>
      <p>
        Sour paste looks fine but won&apos;t bond properly — scrap the batch. Cost of a $12 bag of
        flour is nothing against reinstalling a wall.
      </p>

      <p>
        Ready to see these recipes in motion? See{" "}
        <BlogLink slug="wheat-pasting-campaign">how a real 12-location campaign runs them
        overnight</BlogLink>.
      </p>
    </>
  );
}
