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
    optimizePackageImports: ["framer-motion"],
  },
  async headers() {
    return [
      {
        source: "/_next/static/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/(.*\\.(?:webp|png|jpg|jpeg|svg|ico|woff2|woff))",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
