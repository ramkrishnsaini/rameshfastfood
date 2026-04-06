/**
 * Builds a 1200×630 Open Graph / Twitter card image from a food photo.
 * Run: npm run generate:og  (requires: npm i -D sharp)
 */
import sharp from "sharp";
import { readFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const SOURCE = join(root, "public", "images", "Mysore Masala Dosa.png");
const OUTPUT = join(root, "public", "images", "og-social.png");

const WIDTH = 1200;
const HEIGHT = 630;

const overlaySvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="og-grad" x1="0" y1="${HEIGHT}" x2="0" y2="180" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#111827" stop-opacity="0.94"/>
      <stop offset="0.42" stop-color="#111827" stop-opacity="0.45"/>
      <stop offset="0.72" stop-color="#111827" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#111827" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="accent-line" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#FF6B00"/>
      <stop offset="1" stop-color="#FACC15"/>
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#og-grad)"/>
  <rect x="56" y="468" width="120" height="5" rx="2" fill="url(#accent-line)"/>
  <text x="56" y="448" font-family="system-ui,Segoe UI,sans-serif" font-size="52" font-weight="800" fill="#ffffff">Ramesh Fast Food</text>
  <text x="56" y="508" font-family="system-ui,Segoe UI,sans-serif" font-size="28" font-weight="600" fill="#FACC15">Best food in Lachhmangarh</text>
  <text x="56" y="548" font-family="system-ui,Segoe UI,sans-serif" font-size="19" fill="#d1d5db">Dosa · Burger · Pizza · Chowmein · South Indian</text>
</svg>`;

async function main() {
  await readFile(SOURCE);

  const base = await sharp(SOURCE)
    .resize(WIDTH, HEIGHT, { fit: "cover", position: "center" })
    .png()
    .toBuffer();

  const overlay = await sharp(Buffer.from(overlaySvg))
    .resize(WIDTH, HEIGHT)
    .ensureAlpha()
    .png()
    .toBuffer();

  await sharp(base)
    .composite([{ input: overlay, blend: "over" }])
    .png({ compressionLevel: 9, quality: 92 })
    .toFile(OUTPUT);

  console.log(`OG image written: ${OUTPUT}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
