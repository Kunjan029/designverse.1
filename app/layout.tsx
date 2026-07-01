import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kunjan's Designverse",
  description:
    "An interactive creative universe showcasing 14+ years of graphic design work across social campaigns, ecommerce, banners, festival campaigns, and product editing.",
  openGraph: {
    title: "Kunjan's Designverse",
    description: "Explore Creative Universes",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-void text-white font-body antialiased">{children}</body>
    </html>
  );
}
