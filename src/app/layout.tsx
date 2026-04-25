import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adhithya Rokhith Bhaskar - Product Marketer & GTM Strategist",
  description:
    "Product Marketer & GTM Strategist — positioning, launch, and pricing for B2B and D2C brands. Currently at Sensata.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans">
        {children}
        <span className="hidden bg-amber-500/10 border-amber-500/40 border-amber-500/30 text-amber-300 text-amber-200 bg-amber-400" aria-hidden />

        <Analytics />
      </body>
    </html>
  );
}
