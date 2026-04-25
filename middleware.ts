import { NextResponse, type NextRequest } from "next/server";

/**
 * Emit the Content-Security-Policy header per-request so we can vary
 * `upgrade-insecure-requests` based on whether the page is actually served
 * over HTTPS.
 *
 * Why this isn't in next.config.ts `headers()`:
 *   Safari does NOT exempt localhost from `upgrade-insecure-requests` the way
 *   Chrome does. With the directive set unconditionally, Safari loading
 *   `http://localhost:3100` tries to fetch every subresource from
 *   `https://localhost:3100/...`, which doesn't exist, and the site renders
 *   as plain HTML with no CSS, no images, no fonts. `headers()` in
 *   next.config.ts has no access to the request protocol, so conditional
 *   emission requires middleware.
 *
 * Why middleware is safe here (earlier codebase note claimed it wasn't):
 *   The earlier attempt tried to inject a per-request NONCE into <script>
 *   tags, which does conflict with SSG (HTML is baked at build time, so
 *   nonces can't be injected). Sending a CSP HEADER from middleware is
 *   unrelated — headers are per-response and don't need to match anything
 *   embedded in the HTML. All directives below use 'self' / 'unsafe-inline'
 *   which apply uniformly regardless of when the HTML was generated.
 */
const BASE_DIRECTIVES = [
  "default-src 'self'",
  // script-src: googletagmanager.com hosts the GA4 gtag.js loader; the
  // inline init snippet is covered by 'unsafe-inline'. Adding analytics.google.com
  // because GA's enhanced-measurement loader occasionally pulls auxiliary
  // scripts from there (e.g. the optimize/consent plugins).
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
  // Worker-src explicit because Safari doesn't reliably fall back through
  // `child-src` → `default-src` for module workers
  // (`new Worker(url, { type: "module" })`). `blob:` covers webpack code
  // paths that wrap the worker chunk in a blob URL. See
  // components/grainient.worker.ts.
  "worker-src 'self' blob:",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  // img-src already permits any https: origin, so GA's 1×1 collect beacon
  // pixel is allowed without an explicit Google domain.
  "img-src 'self' data: https:",
  // connect-src: GA4 fires beacons to region1/region2.../www.google-analytics.com
  // (regional collection endpoints) and analytics.google.com. The wildcards
  // cover the regional sharding without locking us to specific regions.
  "connect-src 'self' https://api.web3forms.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self' https://api.web3forms.com",
  "object-src 'none'",
];

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Trust `x-forwarded-proto` first (Netlify, Vercel, Cloudflare all set it);
  // fall back to the request URL's protocol for direct-hit scenarios.
  const proto =
    req.headers.get("x-forwarded-proto") ?? new URL(req.url).protocol.replace(":", "");
  const isHttps = proto === "https";

  const directives = isHttps
    ? [...BASE_DIRECTIVES, "upgrade-insecure-requests"]
    : BASE_DIRECTIVES;

  res.headers.set("Content-Security-Policy", directives.join("; "));
  return res;
}

// Run on every page + API route, but skip Next's internal asset pipeline.
// Static assets under /_next/static/ ship with their own long-cache headers
// set in next.config.ts; they don't need (and shouldn't carry) the page CSP.
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
