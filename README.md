# Ramesh Fast Food — website

Next.js (App Router) + Tailwind + Framer Motion.

## GitHub Pages (this repo)

Your site should load at:

**https://ramkrishnsaini.github.io/rameshfastfood/**

### If you only see the README title (“# rameshfastfood”)

That means GitHub is **not** serving the Next.js build. Fix it like this:

1. Open the repo on GitHub → **Settings** → **Pages** (under “Code and automation”).
2. Under **Build and deployment** → **Source**, choose **GitHub Actions** (not “Deploy from a branch”).
3. Save. Push to `main` (or **Actions** → **Deploy to GitHub Pages** → **Run workflow**).
4. Wait until the workflow finishes (green check). Open the **Actions** tab if it failed and read the log.

### First-time deploy

- The workflow **`.github/workflows/deploy-github-pages.yml`** builds a static site into `out/` and publishes it.
- **Repository → Settings → Pages → Source: GitHub Actions** must be set once.

### Custom domain (optional)

Add your domain in **Settings → Pages → Custom domain** after DNS is ready.  
Then set **`NEXT_PUBLIC_SITE_URL`** (and base path if needed) in the workflow `env` or in **Settings → Secrets and variables → Actions** and reference them in the workflow.

## Local

```bash
npm install
npm run dev
```

Static export preview (same as GitHub Pages):

```bash
set NEXT_PUBLIC_SITE_URL=https://ramkrishnsaini.github.io/rameshfastfood
set NEXT_PUBLIC_BASE_PATH=/rameshfastfood
npm run build
npm run preview
```

## Tech

- Static export (`output: "export"`) for GitHub Pages.
- **`NEXT_PUBLIC_BASE_PATH`** must match the repo name for project pages (`/rameshfastfood`).
