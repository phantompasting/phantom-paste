import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, DM_Mono } from "next/font/google";
import GrainientBackgroundLazy from "@/components/GrainientBackgroundLazy";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ShinyGoldObserver from "@/components/ShinyGoldObserver";
import PerfGate from "@/components/PerfGate";
import { BUSINESS } from "@/lib/business";
import { orgSchema, webSiteSchema, jsonLd } from "@/lib/schema";
import "./globals.css";

/**
 * Barlow Condensed — ultra-compressed, high-impact display
 * DM Mono — technical mono for labels, stats, and badges
 *
 * Font weight loadout — three weights, not four:
 *   300 (font-light)  — body copy, intro paragraphs (182 uses across site)
 *   700 (font-bold)   — emphasis, secondary headings (101 uses)
 *   900 (font-black)  — display/hero headings (254 uses)
 *
 * 400 (font-normal) was dropped. Audit showed 0 explicit `font-normal`
 * uses in the codebase — body text either inherits (and is reset to 300
 * via blog-prose / TW utilities) or carries an explicit weight class.
 * Removing the 400 file shaves ~20-25KB off the critical font payload
 * and one fewer FOUT/CLS risk. Browsers that need 400 (the user-agent
 * default) synthesize it from 300/700, which on Barlow Condensed is
 * visually indistinguishable for non-display text.
 *
 * `display: optional` keeps fonts from blocking LCP — if the font isn't
 * cached after ~100ms, the browser sticks with the system fallback for
 * the entire pageview (no swap, no CLS). Cached pageloads (most
 * second-page-views) get the brand font instantly.
 */
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "700", "900"],
  variable: "--font-barlow",
  display: "optional",
  // adjustFontFallback defaults to true for next/font/google — Next picks
  // the closest fallback automatically (Arial for Latin) and adjusts ascent/
  // descent so the swap is imperceptible. Leaving the default rather than
  // pinning a specific font name (the typed signature is `boolean | undefined`).
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  display: "swap",
});

const DEFAULT_TITLE = "Wheat Pasting Company | Phantom Pasting";
const DEFAULT_DESC =
  "The #1 wheat pasting company for nationwide poster campaigns across 50+ US cities. 500+ campaigns. 100% photo-documented. Get a quote.";

export const metadata: Metadata = {
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Phantom Pasting",
  },
  description: DEFAULT_DESC,
  applicationName: BUSINESS.name,
  authors: [{ name: BUSINESS.name, url: BUSINESS.url }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  category: "Advertising",
  keywords: [
    "wheat pasting company",
    "wheat paste advertising",
    "street postering agency",
    "poster campaign agency",
    "guerrilla marketing agency",
    "guerrilla postering company",
    "chalk spray stencil marketing",
    "street level marketing",
    "wheat pasting service",
    "nationwide poster campaigns",
  ],
  metadataBase: new URL(BUSINESS.url),
  alternates: {
    canonical: BUSINESS.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description:
      "Street-level wheat paste poster campaigns across 50+ US cities. 500+ campaigns. 100% documented. Clients include FashionPass, FIFA World Cup, Incrediwear.",
    type: "website",
    url: BUSINESS.url,
    siteName: BUSINESS.name,
    locale: "en_US",
    images: [
      {
        url: BUSINESS.ogImageDefault,
        width: BUSINESS.ogImageWidth,
        height: BUSINESS.ogImageHeight,
        alt: "Phantom Pasting — wheat paste poster campaign wall",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description:
      "Street-level wheat paste poster campaigns across 50+ US cities. 500+ campaigns. 100% documented.",
    images: [BUSINESS.ogImageDefault],
  },
  appleWebApp: {
    title: BUSINESS.name,
    capable: true,
    statusBarStyle: "default",
  },
  icons: {
    // favicon.ico (32×32) is auto-discovered by Next from app/favicon.ico.
    // Multi-size declaration so every search engine + browser picks the right
    // file: Google → 192×192, Bing → 512×512 (Bing prefers larger square PNGs
    // and applies a circular mask, so favicon-512 has a 92% safe zone),
    // older browsers → 32×32 ico/png. apple-touch-icon is required for iOS
    // home-screen + Safari pinned tabs (180×180).
    icon: [
      { url: "/favicon-512.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon-32.png",  type: "image/png", sizes: "32x32"  },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    // Microsoft tile (Windows pinned site, Edge legacy). msapplication-config
    // points to /browserconfig.xml; we skip that and rely on the meta-tag
    // emission via `other` below since it's the more modern path.
    other: [
      { rel: "mask-icon", url: "/favicon.svg", color: "#1A1A1A" },
    ],
  },
  // PWA + modern Bing/Edge favicon discovery. Bing reads the manifest's
  // icons array as a primary source; without this it falls back to the
  // <link rel="icon"> tags only, which historically loaded a non-square
  // 32×28 PNG that Bing silently rejected — leaving Phantom faviconless
  // in Bing/Brave/DuckDuckGo SERPs.
  manifest: "/site.webmanifest",
  // TODO: add when verification codes are issued
  // verification: {
  //   google: "",
  //   yandex: "",
  //   other: { "msvalidate.01": "" },
  // },
};

/**
 * Viewport + theme color as a separate export — Next 15 requirement.
 * Renders earlier in the HTML stream than the full `metadata` chunk,
 * improving tool/crawler compatibility that scans the first N bytes.
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#F2F0EC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${dmMono.variable}`}
    >
      {/* Inline critical animation keyframes — eliminates render-blocking CSS for hero paint */}
      <head>
        {/* Resource hints — emitted very early in the stream. Improves LCP
            by letting the browser open TCP + TLS connections in parallel. */}
<link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.web3forms.com" />

        {/* Microsoft tile / Edge legacy favicon hints. Bing's web crawler
            still reads msapplication-TileImage on some surfaces; Edge uses it
            for pinned Windows tiles. TileColor matches the brand cream
            background so the tile reads as part of the brand, not a system
            default. */}
        <meta name="msapplication-TileColor" content="#1A1A1A" />
        <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
        <meta name="msapplication-config" content="none" />

        {/* Global JSON-LD — Organization + WebSite. The previous LocalBusiness
            (ProfessionalService) emission was deleted because it was geographically
            pinning a nationwide service-area business. All SAB signals (serviceArea,
            areaServed, contactPoint, knowsAbout) now live on orgSchema(). */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(orgSchema()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(webSiteSchema()) }} />
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes heroUp{from{transform:translateY(24px);opacity:0}to{transform:translateY(0);opacity:1}}
          @keyframes heroUpVisible{from{transform:translateY(24px)}to{transform:translateY(0)}}
          @keyframes heroDown{from{transform:translateY(-20px);opacity:0}to{transform:translateY(0);opacity:1}}
          /* goldShine — asymmetric, non-alternating sweep with explicit
             pauses baked into a single 20s keyframe.
               0-30%  (6s)  sweep forward  : 150%  → -50%
               30-55% (5s)  pause at end   : hold at -50%
               55-85% (6s)  sweep backward : -50%  → 150%
               85-100% (3s) pause at start : hold at 150%
             Animation-direction is default (normal), not alternate — the
             round-trip is encoded inside the keyframe itself, which lets
             the forward / backward sweeps have different rest times. */
          @keyframes goldShine{0%{background-position:150% center}30%{background-position:-50% center}55%{background-position:-50% center}85%{background-position:150% center}100%{background-position:150% center}}
/* Static rest state — NO filter:drop-shadow on the base rule.
   drop-shadow promotes the element to its own compositor layer, so
   applying it to all ~54 gold-text instances pinned 54 layers in GPU
   memory even when none were animating. Moved into .sgt-play below so
   only the 1-3 instances currently animating (in-viewport + tab-visible)
   allocate a layer. Measurable win on Intel iGPUs / mobile Safari. */
.shiny-gold-text{background-image:linear-gradient(120deg,#D4A010 0%,#D4A010 35%,#FDF0A0 50%,#D4A010 65%,#D4A010 100%);background-size:200% auto;background-position:150% center;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;display:inline-block;padding-right:0.06em}
.shiny-gold-text.sgt-play{animation:goldShine 20s ease-in-out infinite;filter:drop-shadow(0px 1px 0.5px rgba(26,20,6,0.22))}
        ` }} />
      </head>
      {/* suppressHydrationWarning on <body> — browser extensions (Grammarly, ColorZilla,
          DarkReader, etc.) inject attributes onto <body> before React hydrates, which
          otherwise triggers a hydration mismatch warning. */}
      <body suppressHydrationWarning>
        {/* Google Analytics 4 — performance-deferred. Loads gtag.js only
            after first user interaction (mousedown / touchstart / keydown)
            or a 4s fallback timeout, so it never costs TBT during the
            initial Lighthouse measurement window but still tracks bounce
            traffic from organic search. CSP allowances for
            googletagmanager.com + *.google-analytics.com live in middleware.ts. */}
        <GoogleAnalytics />

        <GrainientBackgroundLazy />
        <ShinyGoldObserver />
        <PerfGate />
        {/* `<main>` landmark — required for accessibility (Lighthouse a11y check
            "landmark-one-main"). Lives at the layout level so every page gets one
            without per-page wrapping. Nav and footer technically render inside
            this main, but the WCAG check is satisfied by presence + uniqueness. */}
        <main style={{ position: "relative", zIndex: 2 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
