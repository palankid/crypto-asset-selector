import type { Metadata } from "next";
import { allFontVariables } from "@/theme/fonts";

import "@/theme/globals.css";
import { StoreProvider } from "@/store";
import { ErrorBoundary } from "@/components/ErrorBoundary";

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
        <ErrorBoundary>
          <StoreProvider>{children}</StoreProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
