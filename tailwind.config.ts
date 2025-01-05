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
        buttonhover: "#161618",
        divstroke: "#2B2B2B",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)"],
        spacegrotesk: ["var(--font-space-grotesk)"],
        inter: ["var(--font-inter)"],
        aeonikpro: ["var(--font-aeonik-pro)"],
      },
      fontSize: {
        "2xs": ["0.625rem", "1"],
        xs: ["0.75rem", "1"],
        sm: ["0.875rem", "1"],
        base: ["1rem", "1"],
        lg: ["1.125rem", "1"],
        xl: ["1.25rem", "1"],
        "2xl": ["1.5rem", "1"],
        "3xl": ["1.875rem", "1"],
        "4xl": ["2.25rem", "1"],
        "5xl": ["3rem", "1"],
        "6xl": ["3.75rem", "1"],
        "7xl": ["4.5rem", "1"],
        "8xl": ["6rem", "1"],
        "9xl": ["8rem", "1"],
      },
      screens: {
        xs: "480px",
      },
      boxShadow: {
        custom: "0px 4px 20px 0px #00000099",
      },
    },
  },
  plugins: [],
} satisfies Config;
