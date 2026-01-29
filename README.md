# Mawal Couture (Next.js + Tailwind + Redux)

This is a starter scaffold for the Mawal Couture project — a pixel-accurate, responsive clone-inspired site implemented with Next.js 15.5.9, TypeScript, Tailwind CSS and Redux Toolkit.

Quick start:

1. Install dependencies:

   npm install

2. Run development server:

   npm run dev

Files to inspect:
- `src/app/` — app routes and pages
- `src/components/` — reusable components
- `src/store/` — Redux store and slices

Notes:
- Fonts and images are placeholders. Replace assets in `public/` and update `globals.css`.


Data & seed files
-----------------

This project includes local JSON seed data for offline development and to mock a CMS:

- `data/products.json` — product catalog (id, slug, price, images, variants)
- `data/collections.json` — collection landing data
- `data/navigation.json` — top-level navigation used by the header / mega-menu

These files reference public image URLs (Unsplash) so you don't need to add local assets. Replace with your own images in `public/` for production.

Running locally
---------------

1. Install dependencies:

   npm install

2. Run dev server:

   npm run dev

3. Visit http://localhost:3000

Notes
-----
- The site uses mocked data; pages and components are wired to read from `data/*.json`. Replace with a headless CMS later if needed.
- Focus was placed on responsive layout, typographic scale, and component skeletons to match the reference site.
# mawal-couture
