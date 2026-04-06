import {
  ADDRESS_COUNTRY,
  ADDRESS_LOCALITY,
  ADDRESS_POSTAL_CODE,
  ADDRESS_REGION,
  ADDRESS_STREET,
  GOOGLE_MAPS_COORDS,
  GOOGLE_MAPS_URL,
  INSTAGRAM_URL,
  OPENING_HOURS,
  PHONE_E164,
  SITE_NAME,
} from "@/lib/constants";
import { getSiteUrl } from "@/lib/site-url";

/** Structured data — FastFoodRestaurant + LocalBusiness signals for Google. */
export function restaurantJsonLd(): Record<string, unknown> {
  const base = getSiteUrl().replace(/\/$/, "");
  const heroDosa = `${base}/images/${encodeURIComponent("Mysore Masala Dosa.png")}`;

  return {
    "@context": "https://schema.org",
    "@type": "FastFoodRestaurant",
    "@id": `${base}/#restaurant`,
    name: SITE_NAME,
    url: base,
    image: [
      heroDosa,
      `${base}/images/og-social.png`,
      `${base}/logo.png`,
      `${base}/images/og-hero.png`,
    ],
    telephone: PHONE_E164,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS_STREET,
      addressLocality: ADDRESS_LOCALITY,
      addressRegion: ADDRESS_REGION,
      postalCode: ADDRESS_POSTAL_CODE,
      addressCountry: ADDRESS_COUNTRY,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GOOGLE_MAPS_COORDS.lat,
      longitude: GOOGLE_MAPS_COORDS.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...OPENING_HOURS.dayOfWeek],
        opens: OPENING_HOURS.opens,
        closes: OPENING_HOURS.closes,
      },
    ],
    servesCuisine: ["South Indian", "Fast Food", "Street Food"],
    priceRange: "₹₹",
    menu: `${base}/#menu`,
    sameAs: [INSTAGRAM_URL],
    hasMap: GOOGLE_MAPS_URL,
    description:
      "Best fast food in Lachhmangarh (Sikar district). Masala Dosa, burgers, pizza, chowmein, pav bhaji, sandwich, kulfi & South Indian food — fresh, hygienic & tasty.",
    areaServed: [
      {
        "@type": "City",
        name: "Lachhmangarh",
      },
      {
        "@type": "AdministrativeArea",
        name: "Sikar district, Rajasthan",
      },
    ],
  };
}
