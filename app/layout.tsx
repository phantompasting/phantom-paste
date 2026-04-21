import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, DM_Mono } from "next/font/google";
import GrainientBackgroundLazy from "@/components/GrainientBackgroundLazy";
import ShinyGoldObserver from "@/components/ShinyGoldObserver";
import { BUSINESS } from "@/lib/business";
import { orgSchema, webSiteSchema, localBusinessSchema, jsonLd } from "@/lib/schema";
import "./globals.css";

/**
 * Barlow Condensed — ultra-compressed, high-impact display
 * DM Mono — technical mono for labels, stats, and badges
 */
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-barlow",
  display: "optional",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  display: "swap",
});

const DEFAULT_TITLE = "Wheat Pasting & Wild Posting Company | Phantom Pasting";
const DEFAULT_DESC =
  "The #1 guerrilla marketing agency for wheat pasting and wild posting campaigns across 50+ US cities. 500+ campaigns. 100% photo-documented. Get a quote.";

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
    "wild posting company",
    "wheat paste advertising",
    "guerrilla marketing agency",
    "wild posting advertising",
    "chalk spray stencil marketing",
    "street level marketing",
    "wheat pasting service",
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
      "Street-level wheat paste and wild posting campaigns across 50+ US cities. 500+ campaigns. 100% documented. Clients include FashionPass, FIFA World Cup, Incrediwear.",
    type: "website",
    url: BUSINESS.url,
    siteName: BUSINESS.name,
    locale: "en_US",
    images: [
      {
        url: BUSINESS.ogImageDefault,
        width: BUSINESS.ogImageWidth,
        height: BUSINESS.ogImageHeight,
        alt: "Phantom Pasting — wheat paste wild posting wall campaign",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description:
      "Street-level wheat paste and wild posting campaigns across 50+ US cities. 500+ campaigns. 100% documented.",
    images: [BUSINESS.ogImageDefault],
  },
  appleWebApp: {
    title: BUSINESS.name,
    capable: true,
    statusBarStyle: "default",
  },
  icons: {
    // favicon.ico is auto-discovered by Next from app/; don't redeclare.
    icon: [{ url: "/favicon-32.png", type: "image/png" }],
    // iOS home-screen icons need PNG (webp support is spotty on older iOS).
    // apple-touch-icon.png is a 180×180 PNG generated from the source webp.
    apple: "/apple-touch-icon.png",
  },
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

        {/* Global JSON-LD — Organization + WebSite + LocalBusiness stable @ids */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(orgSchema()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(webSiteSchema()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(localBusinessSchema()) }} />
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
        <GrainientBackgroundLazy />
        <ShinyGoldObserver />
        <div style={{ position: "relative", zIndex: 2 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
