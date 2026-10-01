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

The build pre-renders 16 routes into `dist/`, including every tour detail page. Upload **the contents** of `dist/` to the hosting web root. Apache routing is provided in `.htaccess`. For other static hosts, use the pre-rendered directories and a fallback to `/index.html` for unknown app routes.

## Stack

React, Vite, React Router, Tailwind CSS, Lucide icons and Framer Motion. Source is organized into reusable components, page modules and a single tour data file.

## Content and enquiries

- Business details and tour content: `src/data/tours.js`.
- Booking form: `src/pages/Booking.jsx`. It prepares a customer-controlled email or WhatsApp message. It does not send email from a server, store enquiries, accept payment or confirm reservations.
- Tour prices, admission, availability, vehicle capacity and cancellation terms must be agreed with the business. No invented pricing or reviews are displayed.
- Original supplied promotional images are shown in the gallery. Main page scenic windows clip those same assets without modifying the originals; artwork is labelled as illustration.
- Supplied photographs are credited to Thomas Lipke and Livia Widjaja / Unsplash. Peggy’s Cove is labelled as Nova Scotia, not Cape Breton.
- Founder biography and social account links await verified client information and are intentionally absent from public copy.
- Optional feature-detected WebMCP action opens a tour enquiry; it never sends it.

## Deployment

See `DOMAIN-SETUP.md` for Hostinger launch steps. `.openai/hosting.json` identifies the private Sites review deployment. The custom domain is not changed automatically. No credentials belong in this repository.

## Experience browsing

The interface uses a search-led marketplace layout inspired by Viator and Tripadvisor. Search and category filters run over the verified tour catalogue. Heart buttons save tour slugs in browser local storage, without creating an account. Travel dates carry from results into the tour enquiry. Prices and reviews are not fabricated.
