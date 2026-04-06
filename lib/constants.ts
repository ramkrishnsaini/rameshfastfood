import { assetPath } from "@/lib/base-path";

/** WhatsApp Business number: country code + number, no + (used in wa.me links). */
export const WHATSAPP_NUMBER = "919785566796";

/** Same mobile number as WhatsApp — display format. */
export const PHONE_DISPLAY = "+91 97855 66796";

/** E.164 for `tel:` links and JSON-LD `telephone` (matches PHONE_DISPLAY). */
export const PHONE_E164 = "+919785566796";

export const SITE_NAME = "Ramesh Fast Food";

/**
 * Opening year for “Serving … since” copy — set to your real start year for accuracy.
 */
export const SERVING_SINCE_YEAR = 2015;

/** Brand logo in `public/` (PNG), includes GitHub Pages basePath when set. */
export const LOGO_PATH = assetPath("/logo.png");

/**
 * Structured address (NAP) — keep in sync with Google Business Profile / Maps.
 * Locality uses “Lachhmangarh” (common spelling); PIN 332311 is Laxmangarh, Sikar district.
 */
export const ADDRESS_STREET = "Near SDM Court, SDM Court Road";
export const ADDRESS_LOCALITY = "Lachhmangarh";
export const ADDRESS_REGION = "Rajasthan";
export const ADDRESS_POSTAL_CODE = "332311";
export const ADDRESS_COUNTRY = "IN";

/** Full single-line address for footer, map copy, and UI. */
export const ADDRESS = `${ADDRESS_STREET}, ${ADDRESS_LOCALITY}, ${ADDRESS_REGION} ${ADDRESS_POSTAL_CODE}, India`;

/** Opening hours (local time) — adjust if they change. */
export const OPENING_HOURS = {
  opens: "10:00",
  closes: "22:00",
  dayOfWeek: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ] as const,
};

/**
 * Official Google Maps place link (short URL → RAMESH FAST FOOD RESTAURANT).
 * @see https://maps.app.goo.gl/tR3EzVSfVuaGauGR8
 */
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/tR3EzVSfVuaGauGR8";

/** Official Instagram profile (@ramesh_fastfood). */
export const INSTAGRAM_URL =
  "https://www.instagram.com/ramesh_fastfood?igsh=M2htdm9qdnJtYW5h";

/** Place coordinates from Google Maps (pin for Ramesh Fast Food). */
export const GOOGLE_MAPS_COORDS = { lat: 27.8352323, lng: 75.0246494 } as const;

/** Google Maps embed URL for iframe (centred on the business pin). */
export function googleMapsEmbedUrl(): string {
  const { lat, lng } = GOOGLE_MAPS_COORDS;
  return `https://maps.google.com/maps?q=${lat},${lng}&z=17&output=embed&hl=en`;
}

export function whatsappHref(text?: string) {
  const q = text
    ? `?text=${encodeURIComponent(text)}`
    : `?text=${encodeURIComponent("Hi Ramesh Fast Food — I'd like to place an order.")}`;
  return `https://wa.me/${WHATSAPP_NUMBER}${q}`;
}
