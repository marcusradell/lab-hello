import type { Metadata } from "next";
import { Sunflower } from "next/font/google";
import "./globals.css";

const font = Sunflower({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Sol Rådell",
  description: "Sol Rådell's website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
