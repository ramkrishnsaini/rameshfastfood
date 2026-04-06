/**
 * GitHub project pages use a subpath (e.g. /rameshfastfood). Public assets must
 * include this prefix — Next does not always prefix `next/image` + `public/` in static export.
 */
export function getBasePath(): string {
  const raw = (process.env.NEXT_PUBLIC_BASE_PATH || "").trim();
  if (!raw) return "";
  const trimmed = raw.replace(/^\/+|\/+$/g, "");
  return trimmed ? `/${trimmed}` : "";
}

/** Prefix a root-relative public path: `/logo.png` → `/rameshfastfood/logo.png` when needed. */
export function assetPath(path: string): string {
  const base = getBasePath();
  const p = path.startsWith("/") ? path : `/${path}`;
  return base ? `${base}${p}` : p;
}
