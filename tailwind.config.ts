import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F6F6F6",
        secondary: "#6D6D6D",
        bid: "#FF5662",
        ask: "#86FF56",
        buttonfill: "#111111",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)"],
        spacegrotesk: ["var(--font-space-grotesk)"],
        inter: ["var(--font-inter)"],
        aeonikpro: ["var(--font-aeonik-pro)"],
      },
      fontSize: {
        "2xs": ["0.625rem", "0.75rem"],
      },
    },
  },
  plugins: [],
} satisfies Config;
