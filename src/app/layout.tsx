import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
