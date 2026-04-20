/**
 * IndexNow submission script — Phantom Pasting
 *
 * Pings Bing + Yandex with the full canonical URL list after each Netlify
 * build. Bing powers ChatGPT Search, DuckDuckGo, Ecosia, and Yahoo (~10-15%
 * US search share) — these search engines use IndexNow to discover updated
 * content immediately instead of waiting for their next crawl cycle.
 *
 * Google does NOT support IndexNow (they rely on sitemap + Googlebot).
 *
 * Invoked by the `postbuild` npm script (see package.json). Skipped on local
 * builds — only fires when NETLIFY=true (set automatically by Netlify CI).
 *
 * Ported from 3floorguys/scripts/indexnow-submit.mjs — same pattern, PP domain.
 *
 * KEY MANAGEMENT: The key file is served at:
 *   https://www.phantompasting.com/0b647238e1ac4f2e8fa810ef49674e7a.txt
 * If you regenerate the key, update KEY below AND rename/update the .txt file
 * in /public/.
 *
 * MAINTENANCE: Keep URL_LIST in sync with ROUTES_META in app/sitemap.ts.
 * When adding a new page, add its canonical URL here too.
 */

// Submit to Bing and Yandex directly (parallel fan-out).
// api.indexnow.org is a federator that proxies to Bing first — if Bing 403s,
// the federator also 403s and blocks Yandex delivery. Direct endpoints are safer.
const ENDPOINTS = [
  { name: "bing",   url: "https://www.bing.com/indexnow"   },
  { name: "yandex", url: "https://yandex.com/indexnow"     },
];

const HOST         = "www.phantompasting.com";
const KEY          = "0b647238e1ac4f2e8fa810ef49674e7a";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Canonical URL list — keep in sync with app/sitemap.ts ROUTES_META
const URL_LIST = [
  `https://${HOST}/`,
  `https://${HOST}/services`,
  `https://${HOST}/services/wheat-pasting`,
  `https://${HOST}/services/chalk-spray-stencils`,
  `https://${HOST}/services/full-impact-campaigns`,
  `https://${HOST}/about`,
  `https://${HOST}/contact`,
  `https://${HOST}/gallery`,
  `https://${HOST}/work`,
  `https://${HOST}/work/fashionpass-los-angeles`,
  `https://${HOST}/work/fifa-world-cup-atlanta`,
  `https://${HOST}/work/incrediwear-street-campaign`,
  `https://${HOST}/locations`,
  `https://${HOST}/locations/new-york`,
  `https://${HOST}/locations/los-angeles`,
  `https://${HOST}/locations/miami`,
  `https://${HOST}/locations/chicago`,
  `https://${HOST}/locations/atlanta`,
  // Blog posts — uncomment as they go live:
  // `https://${HOST}/blog`,
  // `https://${HOST}/blog/what-is-wheat-pasting`,
  // `https://${HOST}/blog/wheat-pasting-cost-guide`,
];

async function submitToOne(endpoint, payload) {
  try {
    const res = await fetch(endpoint.url, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });

    // IndexNow status codes:
    //   200 / 202 — success (202 = key validation pending, still accepted)
    //   400       — bad request (malformed JSON or missing fields)
    //   403       — key mismatch OR site not verified in Bing Webmaster Tools
    //   422       — URLs don't match HOST
    //   429       — rate limit (back off, retry next deploy)
    if (res.status === 200 || res.status === 202) {
      console.log(`[indexnow:${endpoint.name}] ✓ submitted ${payload.urlList.length} URLs (HTTP ${res.status})`);
      return true;
    }
    const body = await res.text().catch(() => "");
    console.warn(`[indexnow:${endpoint.name}] HTTP ${res.status} — ${body.slice(0, 200)}`);
    return false;
  } catch (err) {
    // Network errors are non-fatal — Bing will discover via sitemap eventually
    console.warn(`[indexnow:${endpoint.name}] submission failed (non-fatal): ${err.message}`);
    return false;
  }
}

async function main() {
  // Skip on local dev — only run in Netlify CI to avoid spamming the endpoint
  if (process.env.NETLIFY !== "true") {
    console.log("[indexnow] skipped (not on Netlify — set NETLIFY=true to test locally)");
    return;
  }

  console.log(`[indexnow] submitting ${URL_LIST.length} URLs to Bing + Yandex…`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URL_LIST,
  };

  // Fan-out in parallel — one endpoint's failure doesn't block the other
  await Promise.all(ENDPOINTS.map((ep) => submitToOne(ep, payload)));
}

main();
