# Deployment Guide — The Baisa

This is a Next.js 16 (App Router) storefront. Every page is statically pre-rendered, so it can deploy as a Node app (Netlify, Vercel, Hostinger Cloud/VPS) **or** as a fully static site (Hostinger shared hosting / any static host).

> ⚠️ **Do not change DNS or live hosting until you have verified the staging build is brand-correct.** This guide covers deploying to a staging URL only.

## 0. Pre-flight check (run anywhere)

```bash
npm install
npm run build       # Node target
# or
npm run build:static  # Static export target → ./out
```

The Node build should complete with no TypeScript errors. The static build emits an `out/` directory you can upload anywhere.

---

## Option A — Netlify (recommended for fast staging)

1. Push this branch to GitHub.
2. In Netlify, **Add new site → Import from Git** and pick the repo.
3. Netlify auto-detects Next.js. The included `netlify.toml` sets:
   - Build command: `npm run build`
   - Publish dir: `.next`
   - Plugin: `@netlify/plugin-nextjs` (installed automatically by Netlify)
4. Deploy. Netlify will give a `*.netlify.app` URL — verify the brand-correct site loads there.
5. **Do not** point the production domain to Netlify until verified. Use Netlify branch deploys to share preview URLs.

---

## Option B — Hostinger Premium / Business Shared Hosting (static export)

Hostinger shared plans run PHP/Apache and **cannot run Node servers**. Use the static export.

1. Build locally:
   ```bash
   npm install
   npm run build:static
   ```
   Output is in `out/`.
2. Open Hostinger **hPanel → File Manager** for the staging subdomain (e.g. `staging.thebaisa.com` or any unused subdomain you create — do NOT overwrite `public_html` of the live `thebaisa.com` until verified).
3. Upload the **contents of `out/`** (not the folder itself) into the subdomain's `public_html`.
4. Visit the staging subdomain. All pages should load and routing should work because `trailingSlash: true` produces directory-style paths (`/about/index.html`).
5. Once verified, you can either:
   - Repeat the upload into the live `public_html`, OR
   - Switch the live domain to point at the new content. Either way, do this only after sign-off.

### Caveats of static export
- The Admin page is published statically — protect it via Hostinger directory password if you don't want it public.
- Image optimization is disabled in static mode (`unoptimized: true`); product images come from Shopify CDN, so this is fine.
- Form submissions on `/bulk-wholesale` and `/contact` are currently presentational; wire them to a service (Formspree, Netlify Forms, or WhatsApp deeplink) before launch.

---

## Option C — Hostinger Cloud / VPS (Node)

If you have a Cloud or VPS plan with Node:

1. SSH in, `git clone` the repo, `npm install`, `npm run build`.
2. `npm run start -- -p 3000` (or use PM2 / systemd).
3. Configure the Hostinger reverse proxy / nginx in hPanel to forward your staging subdomain to `localhost:3000`.

---

## Verifying the brand replacement before going live

- [ ] Header shows **The Baisa | Go Traditional** with logo
- [ ] Homepage hero reads "Authentic Jaipur Ethnic Wear from Sanganer."
- [ ] Featured products render with Shopify CDN images
- [ ] Floating WhatsApp button opens `wa.me/919251022710` with a prefilled message
- [ ] Footer shows correct address, phone, IG handle
- [ ] `/contact` page lists correct phone/WhatsApp/Instagram and the Call/Chat CTAs work
- [ ] `/sitemap.xml` and `/robots.txt` resolve
- [ ] `<title>` and meta description on each page match the brand
- [ ] No leftover content from the previous (unrelated) site is reachable

Only after all boxes pass: change DNS / replace live `public_html` content.
