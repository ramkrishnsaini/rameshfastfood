import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { assetPath } from "@/lib/base-path";
import { restaurantJsonLd } from "@/lib/json-ld";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = getSiteUrl();
const ogImage = `${siteUrl.replace(/\/$/, "")}/images/og-hero.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ramesh Fast Food | Best Fast Food in Lachhmangarh (Sikar)",
    template: "%s | Ramesh Fast Food",
  },
  description:
    "Ramesh Fast Food is the best fast food restaurant in Lachhmangarh near SDM Court. Enjoy Masala Dosa, Burger, Pav Bhaji, Chowmein, Pizza, Sandwich, Kulfi & South Indian food. Fresh, hygienic & tasty.",
  keywords: [
    "Ramesh Fast Food",
    "Best fast food in Lachhmangarh",
    "Dosa in Lachhmangarh",
    "Burger in Lachhmangarh",
    "Pizza in Lachhmangarh",
    "Pav Bhaji Lachhmangarh",
    "Chowmein Lachhmangarh",
    "Sandwich Lachhmangarh",
    "Kulfi Lachhmangarh",
    "South Indian food Lachhmangarh",
    "Restaurants near SDM Court Lachhmangarh",
    "Food near me Lachhmangarh",
    "Sikar food",
    "Rajasthan street food",
  ],
  authors: [{ name: "Ramesh Fast Food" }],
  creator: "Ramesh Fast Food",
  publisher: "Ramesh Fast Food",
  icons: {
    icon: assetPath("/logo.png"),
    apple: assetPath("/logo.png"),
  },
  openGraph: {
    title: "Best Fast Food in Lachhmangarh 🔥 | Ramesh Fast Food",
    description:
      "Enjoy Masala Dosa, Burger, Pizza, Chowmein, Pav Bhaji, Sandwich & Kulfi at Ramesh Fast Food near SDM Court, Lachhmangarh. Fresh, hygienic & delicious food.",
    url: siteUrl,
    siteName: "Ramesh Fast Food",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Ramesh Fast Food Lachhmangarh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fast Food in Lachhmangarh 🔥",
    description:
      "Masala Dosa, Burger, Pizza, Chowmein, Pav Bhaji & more at Ramesh Fast Food near SDM Court.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Lachhmangarh, Rajasthan",
    "geo.position": "27.8352323;75.0246494",
    ICBM: "27.8352323, 75.0246494",
  },
};

const jsonLd = restaurantJsonLd();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jakarta.variable} ${outfit.variable} min-h-screen font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
