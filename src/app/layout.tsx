import type { Metadata } from "next";
import { allFontVariables } from "@/theme/fonts";

import "@/theme/globals.css";
import { StoreProvider } from "../store";

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
      <body className={allFontVariables}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
