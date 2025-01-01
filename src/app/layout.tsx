import type { Metadata } from "next";
import "@/theme/globals.css";
import { allFontVariables } from "@/theme/fonts";

export const metadata: Metadata = {
  title: "Premia Code Challenge",
  description: "A code challenge for Premia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={allFontVariables}>{children}</body>
    </html>
  );
}
