# New Scotland Coastal & Cape Breton Tours

Premium responsive website for **New Scotland Coastal and Cape Breton Tours** — built with Next.js 16, TypeScript, and Tailwind CSS.

---

## Quick Start

```bash
cd new-scotland-coastal
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # serve production build
```

---

## Project Structure

```
src/
  app/                  # Next.js App Router pages
    page.tsx            # Home
    tours/page.tsx      # Tour listing
    tours/[slug]/       # Tour detail (dynamic)
    private-tours/      # Private Tours & Transport
    about/              # About
    gallery/            # Gallery
    contact/            # Plan Your Trip / Contact
    layout.tsx          # Root layout (fonts, header, footer)
    not-found.tsx       # Custom 404
    sitemap.ts          # Auto-generated sitemap
    robots.ts           # robots.txt
  components/
    layout/             # Header, Footer, StructuredData
    sections/           # Home page sections
    forms/              # EnquiryForm
    ui/                 # TourCard, SectionHeader, FaqAccordion, ScrollReveal
  lib/
    config.ts           # Business details (name, phone, email, URL)
    tours.ts            # Tour catalogue data
```

---

## Content Editing

### Business Details
Edit `src/lib/config.ts` to update the business name, phone, email, and website URL.

### Tour Catalogue
Edit `src/lib/tours.ts` to update, add, or remove tours. Every tour object has:
- `duration`, `groupSize`, `priceFrom` — set to `null` to show "Contact us" instead
- `inclusions`, `exclusions` — set to `null` to hide the section
- `draftNote` — shown as an amber banner on the tour page; remove once confirmed

### Images
Replace the Unsplash URLs in `src/lib/tours.ts` and each page file with your own hosted images. For production, store images in `public/images/` and reference them as `/images/filename.jpg`, or upload to a CDN and update `next.config.ts` with the new domain under `images.remotePatterns`.

---

## Enquiry Delivery and Deployment

The website is now configured for **GitHub Pages static export**. Run `npm run build` and publish `out/`; do not publish the raw Next.js source. The included GitHub Actions workflow builds and deploys main after the repository’s Pages source is set to **GitHub Actions**.

Automatic enquiry delivery needs a verified external HTTPS endpoint, configured with `NEXT_PUBLIC_ENQUIRY_ENDPOINT` at build time. Formspree is supported, as is a custom JSON endpoint returning `{ "ok": true }` after acceptance by the mail provider. Until configured, the form prepares a clearly labelled email draft for the visitor to send.

See [DEPLOYMENT.md](DEPLOYMENT.md) for recipient verification, environment variables, the Pages workflow and live inbox checks. SMTP credentials must never be placed in browser code. The old Node-hosted handler is retained under `server/next-enquiry-route.ts`, outside the static site.

Validation: `npm test`, `npm run lint`, and `npm run build`.

## Business Details Awaiting Confirmation

The following items are marked as drafts in the tour data and should be confirmed with the business owner before publishing:

- [ ] All tour durations
- [ ] Group size limits per tour
- [ ] Pricing for each tour
- [ ] Confirmed inclusions and exclusions per tour
- [ ] Vehicle types and capacities
- [ ] Airport transfer service availability
- [ ] Cruise port excursion terms and timing
- [ ] WhatsApp availability (number not confirmed for WhatsApp)
- [ ] Viator or third-party booking links (not yet provided)
- [ ] Cancellation and rescheduling policy
- [ ] Accessibility details per tour
- [ ] Confirmed pickup/departure locations

Remove the `draftNote` field from each tour in `src/lib/tours.ts` once details are confirmed.

---

## Design System

| Token | Value | Usage |
|---|---|---|
| `--navy` | `#0b1d35` | Primary backgrounds, text |
| `--ivory` | `#f7f3ec` | Page backgrounds |
| `--teal` | `#2a7a8c` | Accents, links, icons |
| `--champagne` | `#c9a96e` | Gold accents, CTAs, dividers |

Fonts: **Playfair Display** (serif headlines) + **Inter** (sans-serif body), loaded via `next/font/google`.
