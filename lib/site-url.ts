/** Production site URL (no trailing slash). Set `NEXT_PUBLIC_SITE_URL` when you deploy. */
export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://yourdomain.com"
  ).replace(/\/$/, "");
}
