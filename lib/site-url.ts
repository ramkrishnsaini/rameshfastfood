/** Production site URL (no trailing slash). Override with `NEXT_PUBLIC_SITE_URL` in CI or `.env.local`. */
export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://rameshfastfood.in"
  ).replace(/\/$/, "");
}
