# The Baisa

Production-ready Next.js 16 storefront for **The Baisa**, an ethnic wear brand from Sanganer, Jaipur.

- Brand site: `baisajaipur.in`
- WhatsApp: `+91 9251022710`
- Instagram: [@the_baisa](https://instagram.com/the_baisa)

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build         # Node target (Netlify, Vercel, VPS)
npm run build:static  # Static export → ./out (Hostinger shared hosting)
```

## Deploy

See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for step-by-step instructions for Netlify and Hostinger (shared / VPS), plus the brand-correctness checklist that must pass **before** DNS or live `public_html` is touched.

## Project layout

```
app/            # App Router pages, robots.ts, sitemap.ts
components/     # Header, Footer, ProductCard, ProductFilters, FloatingWhatsApp
lib/            # business.ts (brand metadata), products.ts (catalog)
public/         # logo and static assets
```
