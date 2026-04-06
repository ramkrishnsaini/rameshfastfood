/** WhatsApp Business number: country code + number, no + (used in wa.me links). */
export const WHATSAPP_NUMBER = "919785566796";

export const PHONE_DISPLAY = "+91 97855 66796";

export const SITE_NAME = "Ramesh Fast Food";

/** Brand logo in `public/` (PNG). */
export const LOGO_PATH = "/logo.png" as const;

/** Full postal address for map, footer, and SEO. */
export const ADDRESS =
  "SDM Ct Rd, Laxmangarh, Rajasthan 332311, India";

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
