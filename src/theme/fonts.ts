import { Inter, DM_Sans, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const aeonikPro = localFont({
  src: "./assets/AeonikProTRIAL-Regular.woff2",
  variable: "--font-aeonik-pro",
});

export const allFontVariables = [inter, dmSans, spaceGrotesk, aeonikPro].reduce(
  (acc, font) => `${acc} ${font.variable}`,
  "font-sans",
);
