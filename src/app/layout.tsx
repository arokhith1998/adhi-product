import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adhithya Rokhith Bhaskar - Product Marketing & Product Management",
  description:
    "Product Marketing & Product Management Leader — GTM, positioning, and pricing strategy for B2B and D2C brands.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
