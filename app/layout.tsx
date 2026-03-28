import type { Metadata } from "next";
import { Barlow_Condensed, DM_Mono } from "next/font/google";
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
  title: "Phantom Pasting — Wheat Pasting & Stencil Activations Nationwide",
  description:
    "The #1 guerrilla marketing agency for wheat pasting and chalk spray stencil campaigns across every US city. Bold. Street-level. Unforgettable.",
  keywords: [
    "wheat pasting",
    "wild posting",
    "guerrilla marketing",
    "chalk spray stencils",
    "street advertising",
    "street level marketing",
    "poster campaign",
    "nationwide guerrilla marketing",
  ],
  metadataBase: new URL("https://phantompasting.com"),
  openGraph: {
    title: "Phantom Pasting — Own the Streets",
    description:
      "Wheat pasting & chalk spray stencil campaigns across every US city. 500+ campaigns. 50+ markets. 100% documented.",
    type: "website",
    images: [{ url: "/phantom-pasting-logo.png", width: 400, height: 400, alt: "Phantom Pasting Logo" }],
  },
  icons: {
    icon: "/favicon-32.png",
    apple: "/phantom-pasting-logo.png",
  },
  other: {
    "theme-color": "#F2F0EC",
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
      <body>{children}</body>
    </html>
  );
}
