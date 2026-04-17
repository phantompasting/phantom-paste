import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [390, 430, 768, 1080, 1440, 1920],
    imageSizes: [64, 128, 256, 384, 512],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  experimental: {
    // Enables barrel-file tree-shaking for these deps — without this, an
    // `import { motion } from "framer-motion"` pulls the whole lib; with it,
    // Next emits only what's used. gsap+lucide-react are in the same boat.
    optimizePackageImports: ["framer-motion", "gsap", "lucide-react"],
  },
  async headers() {
    // In dev, Turbopack reuses stable chunk URLs — immutable long-cache breaks HMR
    // by pinning the browser to a stale version. Only apply the asset cache in prod.
    const isProd = process.env.NODE_ENV === "production";
    const assetCacheHeaders = isProd
      ? [
          {
            source: "/_next/static/(.*)",
            headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
          },
          {
            source: "/(.*\\.(?:webp|png|jpg|jpeg|svg|ico|woff2|woff))",
            headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
          },
        ]
      : [
          {
            source: "/_next/static/(.*)",
            headers: [{ key: "Cache-Control", value: "no-store, must-revalidate" }],
          },
        ];
    return [
      ...assetCacheHeaders,
      {
        // Security headers — improves E-E-A-T signals and protects site integrity
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          // CSP for a fully statically-prerendered site. A per-request nonce
          // middleware was tried but doesn't work with SSG — the HTML (and
          // its <script> tags) is baked at build time, before the middleware
          // can inject a nonce, so every Next chunk gets blocked.
          // `'unsafe-inline'` only weakens script-src XSS protection; this
          // site has no user-generated content rendered into the DOM, so the
          // practical risk is near-zero. All structural CSP protections
          // below (frame-ancestors, object-src, base-uri, form-action)
          // remain in force.
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: https:",
              "connect-src 'self' https://api.web3forms.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self' https://api.web3forms.com",
              "object-src 'none'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
