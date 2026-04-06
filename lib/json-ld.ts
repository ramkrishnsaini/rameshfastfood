import {
  GOOGLE_MAPS_COORDS,
  GOOGLE_MAPS_URL,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  SITE_NAME,
} from "@/lib/constants";
import { getSiteUrl } from "@/lib/site-url";

/** Structured data for LocalBusiness / Restaurant — address matches site constants. */
export function restaurantJsonLd(): Record<string, unknown> {
  const base = getSiteUrl();
  const tel = PHONE_DISPLAY.replace(/\s/g, "");

  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: SITE_NAME,
    image: [`${base}/logo.png`, `${base}/images/og-hero.png`],
    address: {
      "@type": "PostalAddress",
      streetAddress: "SDM Ct Rd",
      addressLocality: "Laxmangarh",
      addressRegion: "Rajasthan",
      postalCode: "332311",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GOOGLE_MAPS_COORDS.lat,
      longitude: GOOGLE_MAPS_COORDS.lng,
    },
    servesCuisine: ["Fast Food", "South Indian", "Street Food"],
    telephone: tel,
    url: base,
    sameAs: [INSTAGRAM_URL],
    hasMap: GOOGLE_MAPS_URL,
    description:
      "Best fast food in Lachhmangarh (Sikar district). Masala Dosa, burgers, pizza, chowmein, pav bhaji, sandwich, kulfi & South Indian food — fresh, hygienic & tasty.",
    areaServed: ["Lachhmangarh", "Sikar district, Rajasthan"],
  };
}
