# Ramesh Fast Food — website

Next.js (App Router) + Tailwind + Framer Motion.

## Live site (custom domain)

**https://rameshfastfood.in**

The build uses this URL for Open Graph, sitemap, and structured data (`lib/site-url.ts` + GitHub Actions `NEXT_PUBLIC_SITE_URL`).

### GitHub Pages + custom domain setup

1. **DNS** (at your domain registrar for `rameshfastfood.in`):
   - **A records** (apex `@`) pointing to GitHub Pages IPs (see [GitHub docs — configuring a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)).
   - Or use **CNAME** for `www` → `<user>.github.io` if you prefer `www` only.

2. **Repository → Settings → Pages**:
   - **Source:** GitHub Actions (not “Deploy from a branch”).
   - **Custom domain:** `rameshfastfood.in`
   - Enable **Enforce HTTPS** after DNS validates.

3. This repo includes **`public/CNAME`** with `rameshfastfood.in` so each deploy keeps the custom domain configured.

4. Push to `main` / `master` or run **Actions → Deploy to GitHub Pages → Run workflow**.

### If the site still shows only the README

1. **Settings → Pages → Source** must be **GitHub Actions**.
2. Wait for a green workflow run in the **Actions** tab.

### Optional: `github.io` preview URL

GitHub may still expose `https://<user>.github.io/<repo>/`. The **canonical** URL in metadata is **rameshfastfood.in**. If you ever need a separate preview build with a subpath, set `NEXT_PUBLIC_BASE_PATH` locally or in CI (not required for the custom domain at root).

## Local

```bash
npm install
npm run dev
```

Static export preview (matches production URL):

```bash
set NEXT_PUBLIC_SITE_URL=https://rameshfastfood.in
npm run build
npm run preview
```

## Social / Open Graph image

The share preview image (**1200×630**) is `public/images/og-social.png`, generated from **Mysore Masala Dosa** plus a branded overlay.

```bash
npm run generate:og
```

Requires **sharp** (dev dependency).

## Tech

- Static export (`output: "export"`) for GitHub Pages.
- **Custom domain** uses **no** `basePath` (site served at domain root).
