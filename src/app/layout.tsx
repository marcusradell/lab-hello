import type { Metadata } from "next";
import { Sunshiney } from "next/font/google";
import "./globals.css";

const font = Sunshiney({ subsets: ["latin"], weight: "400" });

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
