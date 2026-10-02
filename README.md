# New-Scotland-Coastal-and-Cape-Breton-Tours

A responsive, experience-focused travel website for New Scotland Coastal and Cape Breton Tours in Sydney, Nova Scotia.

## Run locally

Requires Node.js 20.19+ (Node 22 recommended).

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The build pre-renders every route into `dist/` with its own title, description, canonical, Open Graph tags and JSON-LD, then writes `sitemap.xml`, a real `404.html` and redirect pages for old URLs. GitHub Actions deploys `dist/` to GitHub Pages on every push to `main`.

## Stack

React, Vite, React Router, Tailwind CSS, Lucide icons and Framer Motion. Source is organized into reusable components, page modules and a single tour data file.

## Content and enquiries

- Business name, address, phone, social profiles, Tripadvisor/Viator links: `src/data/business.js`.
- Tours (one landing page each): `src/data/tours.js`. Destinations, guides and service pages: `destinations.js`, `guides.js`, `services.js`. Reviews: `reviews.js`. Prices: `pricing.js`.
- Page titles, descriptions, sitemap and redirects: `src/seo/routes.js`. Structured data: `src/seo/schema.js`.
- Images: originals in `assets/images/`; run `scripts/optimize-images.sh` (ImageMagick) to regenerate `public/images/`.
- Analytics: set the `GA_MEASUREMENT_ID` repository variable to enable GA4. Events are defined in `src/lib/analytics.js`.
- Enquiry forms prepare a customer-controlled WhatsApp or email message. They do not send email from a server, store enquiries, accept payment or confirm reservations.
- No invented pricing, durations, inclusions or reviews are displayed. See `SEO-AUDIT.md` for what still needs owner information.

## Deployment

See `DOMAIN-SETUP.md` for Hostinger launch steps. `.openai/hosting.json` identifies the private Sites review deployment. The custom domain is not changed automatically. No credentials belong in this repository.

## Experience browsing

The interface uses a search-led marketplace layout inspired by Viator and Tripadvisor. Search and category filters run over the verified tour catalogue. Heart buttons save tour slugs in browser local storage, without creating an account. Travel dates carry from results into the tour enquiry. Prices and reviews are not fabricated.
