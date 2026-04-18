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
          // Content-Security-Policy is set in middleware.ts, NOT here. The
          // reason: `upgrade-insecure-requests` must only be emitted on
          // HTTPS responses. Safari (unlike Chrome) does not exempt
          // localhost from that directive — if the CSP is sent unconditionally,
          // Safari on `http://localhost:3100` tries to upgrade every
          // subresource to https://localhost:3100/..., which doesn't exist,
          // and the page renders fully unstyled with broken images. Emitting
          // CSP conditionally requires access to the request protocol, which
          // the static `headers()` config doesn't provide.
        ],
      },
    ];
  },
};

export default nextConfig;
