import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Maps to CSS vars set in layout.tsx via next/font
        sans: ["var(--font-barlow)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        accent: "#B8960F",
        "accent-gold": "#B8960F",
        canvas: "#060606",
      },
      screens: {
        // Add a small breakpoint for tighter mobile control
        xs: "400px",
      },
    },
  },
  plugins: [],
};

export default config;
