import type { Metadata } from "next";
import Script from "next/script";
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
/** 1200×630 — run `npm run generate:og` to rebuild from `public/images/Mysore Masala Dosa.png`. */
const ogImage = `${siteUrl.replace(/\/$/, "")}/images/og-social.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: `${siteUrl.replace(/\/$/, "")}/`,
  },
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
        alt: "Ramesh Fast Food — Mysore Dosa and best food in Lachhmangarh",
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

const GTM_ID = "GTM-MJBKTWLF";

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
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            title="Google Tag Manager"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
