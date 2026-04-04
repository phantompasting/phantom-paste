import type { Metadata } from "next";
import { Barlow_Condensed, DM_Mono } from "next/font/google";
import GrainientBackground from "@/components/GrainientBackground";
import "./globals.css";

/**
 * Barlow Condensed — ultra-compressed, high-impact display
 * DM Mono — technical mono for labels, stats, and badges
 */
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-barlow",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wheat Pasting & Wild Posting Company | Phantom Pasting",
  description:
    "The #1 guerrilla marketing agency for wheat pasting and wild posting campaigns across 50+ US cities. 500+ campaigns. 100% photo-documented. Get a quote.",
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
  metadataBase: new URL("https://phantompasting.com"),
  alternates: {
    canonical: "https://phantompasting.com",
  },
  openGraph: {
    title: "Wheat Pasting & Wild Posting Company | Phantom Pasting",
    description:
      "Street-level wheat paste and wild posting campaigns across 50+ US cities. 500+ campaigns. 100% documented. Clients include FashionPass, FIFA World Cup, Incrediwear.",
    type: "website",
    url: "https://phantompasting.com",
    siteName: "Phantom Pasting",
    images: [{ url: "/phantom-pasting-logo.png", width: 1200, height: 630, alt: "Phantom Pasting — Wheat Pasting & Wild Posting Company" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wheat Pasting & Wild Posting Company | Phantom Pasting",
    description:
      "Street-level wheat paste and wild posting campaigns across 50+ US cities. 500+ campaigns. 100% documented.",
    images: ["/phantom-pasting-logo.png"],
    site: "@phantompasting",
    creator: "@phantompasting",
  },
  icons: {
    icon: "/favicon-32.png",
    apple: "/phantom-pasting-logo.png",
  },
  other: {
    "theme-color": "#F2F0EC",
    "og:locale": "en_US",
    "og:locale:alternate": "en_US",
  },
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
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes heroUp{from{transform:translateY(24px);opacity:0}to{transform:translateY(0);opacity:1}}
          @keyframes heroUpVisible{from{transform:translateY(24px)}to{transform:translateY(0)}}
          @keyframes heroDown{from{transform:translateY(-20px);opacity:0}to{transform:translateY(0);opacity:1}}
          @keyframes goldShine{0%{background-position:150% center}100%{background-position:-50% center}}
          .shiny-gold-text{background-image:linear-gradient(120deg,#D4A010 0%,#D4A010 35%,#FDF0A0 50%,#D4A010 65%,#D4A010 100%);background-size:200% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;display:inline-block;padding-right:0.06em;animation:goldShine 4s ease-in-out infinite alternate}
        ` }} />
      </head>
      <body>
        <GrainientBackground />
        {children}
      </body>
    </html>
  );
}
