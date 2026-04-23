import BlogLink from "@/components/BlogLink";
import PullQuote from "@/components/PullQuote";

/**
 * Post body for /blog/how-to-make-wheat-paste.
 * Registry metadata lives in /lib/blogRegistry.ts.
 * Layout chrome (hero, byline, FAQ, CTA, schema) lives in BlogPostLayout.
 */

export function tldr() {
  return (
    <p>
      Wheat paste is flour, water, and heat — three ingredients, a thousand variables. After 10+
      years and 500+ campaigns across LA, NYC, Phoenix, Miami, and Denver, we&apos;ve settled on a
      base recipe that works for most walls: <strong>1 part flour to 4 parts water</strong>, cooked
      to a pancake-batter consistency, cooled before use. What changes per campaign is everything
      else — wall surface, temperature, water source, application tool. This guide gives you the
      recipe and the real-world adjustments.
    </p>
  );
}

export default function Post() {
  return (
    <>
      <h2>The Base Recipe</h2>
      <p>For a single-poster test run at home:</p>
      <ul>
        <li>1 cup wheat flour — all-purpose or pastry flour. Not bread flour. Too much gluten makes the paste stringy.</li>
        <li>4 cups cold water, divided</li>
        <li>A heavy-bottomed pot</li>
        <li>Optional: 2 tablespoons sugar for extra tack, a splash of PVA (wood glue) for weatherproofing</li>
      </ul>
      <p>Method:</p>
      <ol>
        <li>Whisk the flour into 1 cup cold water until smooth. No lumps — lumps leave pimples in the finished paste.</li>
        <li>Bring the other 3 cups of water to a boil.</li>
        <li>Pour the flour slurry into the boiling water while whisking continuously.</li>
        <li>Reduce heat to low. Cook 5–8 minutes, whisking, until the mixture coats the back of a spoon and looks like thin pancake batter.</li>
        <li>Pull off heat. Cool to room temp. Paste applied hot wrinkles the poster.</li>
      </ol>
      <p>That&apos;s the recipe. Now for the part nobody publishes.</p>

      <h2>Scaling Up to a Real Campaign</h2>
      <p>
        Home kitchen recipes mean nothing when you&apos;re pasting 200 posters in one night. At
        campaign scale:
      </p>
      <ul>
        <li>One full bag of commercial wheat paste powder (pre-blended for consistency) mixes with 3 buckets of water</li>
        <li>That batch covers roughly 80–120 posters depending on poster size and wall porosity</li>
        <li>We prep one bucket of ready-to-use paste before leaving the warehouse, and mix the rest on-site as needed</li>
        <li>All buckets have locking lids. Every bucket. No exceptions. An open bucket tips into the truck bed at the first pothole — ask us how we know.</li>
      </ul>
      <p>
        For the full campaign walk-through — crew size, route, install timing — see{" "}
        <BlogLink slug="wheat-pasting-campaign">how a wheat pasting campaign actually works</BlogLink>.
      </p>

      <h2>Technical Specs</h2>
      <table>
        <thead>
          <tr>
            <th>Spec</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Flour-to-water ratio (DIY)</td><td>1:4</td></tr>
          <tr><td>Flour-to-water ratio (commercial powder)</td><td>Follow label, usually 1:5</td></tr>
          <tr><td>Cook temperature</td><td>~190°F (just below boil)</td></tr>
          <tr><td>Cook time</td><td>5–8 minutes</td></tr>
          <tr><td>Cooling time before use</td><td>30–45 min to room temp</td></tr>
          <tr><td>Shelf life (sealed, cool)</td><td>3–4 days</td></tr>
          <tr><td>Shelf life (hot weather, lid off)</td><td>A few hours</td></tr>
          <tr><td>Coverage, 24×36 poster</td><td>~2–3 fl oz paste</td></tr>
        </tbody>
      </table>

      <h2>Installer&apos;s Perspective — Water in Denver</h2>
      <PullQuote attribution="Mateo Vargas, Field Operations Lead">
        <p>
          You don&apos;t think about water until you&apos;re in a parking lot at 2 a.m. with a bag of paste
          and no way to mix it.
        </p>
        <p style={{ marginTop: "1rem" }}>
          In Denver, during working hours, Home Depot is the move. They have a faucet in the garden
          area. Walk in, find an employee, <strong>ask for water</strong> — politely. Don&apos;t just walk
          up with a bucket. If you don&apos;t ask, some employees will assume you&apos;re homeless trying to
          shower and turn rude before you can explain you&apos;re here for a job. Respect works. A
          30-second conversation buys you 5 gallons of clean water.
        </p>
        <p style={{ marginTop: "1rem" }}>
          Graveyard shift is different. Home Depot is closed. What we do: find a 24-hour self-serve
          car wash. They&apos;re everywhere in bigger metros — quarters in the slot, water comes out.
          That&apos;s the backup we&apos;ve used in Denver, Phoenix, and on late NYC nights when nothing else
          is open.
        </p>
      </PullQuote>

      <h2>Adjusting for Wall Type</h2>
      <p>
        One recipe doesn&apos;t work on every wall. This is the single biggest mistake brands and
        one-off installers make.
      </p>

      <h3>Brick and smooth concrete</h3>
      <p>
        Base recipe, applied with a soft-brush broom — specifically the kind sold for washing cars.
        Stiff bristles tear posters. One pass bottom-up, one pass over the poster once it&apos;s on the
        wall.
      </p>

      <h3>Popcorn cement (common in Phoenix, Vegas, parts of LA)</h3>
      <p>The textured surface eats thin paste. Either:</p>
      <ul>
        <li>Add 2–3 extra tablespoons of flour per cup of water to the recipe (thicker paste fills the valleys), or</li>
        <li>Switch to a commercial heavy-tack variant designed for rough surfaces</li>
      </ul>

      <h3>Stucco</h3>
      <p>
        Similar to popcorn cement but with finer grit. Thicker paste plus a pre-wet — wipe the wall
        with a damp rag before pasting. The wetness helps the paste grab the grit.
      </p>

      <h3>Painted metal, glass, glossy vinyl</h3>
      <p>
        Wheat paste doesn&apos;t stick to these long-term. Don&apos;t try. Use snipe stickers or vinyl
        decals instead.
      </p>

      <h3>Abandoned buildings and construction barricades</h3>
      <p>
        Usually plywood or OSB — wheat paste&apos;s happiest surface. Clean recipe, clean application,
        it&apos;ll hold 4–8 weeks before weather peels it.
      </p>

      <h2>Storage and Spoilage</h2>
      <p>Paste is flour and water — it ferments. In summer:</p>
      <ul>
        <li>Keep buckets in shade with lids locked</li>
        <li>Use within 2–3 days max</li>
        <li>If it smells sour or has a grey film on top, scrap the batch</li>
      </ul>
      <p>In winter it keeps longer but stiffens. A splash of warm water whisked in brings it back.</p>

      <h2>Three Mistakes Brands Make DIY-ing This</h2>
      <ol>
        <li><strong>Using bread flour.</strong> Too much gluten. Paste goes stringy, peels off the brush, lumps on the wall.</li>
        <li><strong>Applying it hot.</strong> Paste shrinks as it cools. Posters wrinkle. Always cool to room temp.</li>
        <li>
          <strong>One recipe for all walls.</strong> A popcorn cement wall gets the same paste as
          brick and the campaign fails in 48 hours. The legal side of where you can paste also
          changes by wall — see{" "}
          <BlogLink slug="is-wheat-pasting-legal">is wheat pasting legal</BlogLink> for the
          city-by-city breakdown.
        </li>
      </ol>
    </>
  );
}
