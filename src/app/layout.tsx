import { Syne, Figtree } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Oluwatopraise Multipurpose Store",
  description:
    "Kitchen utensils, household items, gift items, wears, and drinks. Quality products, trusted service, total satisfaction. Order via WhatsApp or Instagram @oluwatopraise44.",
  openGraph: {
    title: "Oluwatopraise Multipurpose Store",
    description:
      "We sell kitchen utensils, household items, gift items and wears. Quality Products, Trusted Service, Total Satisfaction.",
    images: ["/instagram-extract/images/02-towels-gifts.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
