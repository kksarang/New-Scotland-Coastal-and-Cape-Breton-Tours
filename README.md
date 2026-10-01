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
    api/enquiry/        # Enquiry form API endpoint
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

## Enquiry Email Configuration

The enquiry form at `/contact` (and tour sidebar forms) posts to `/api/enquiry`.

**Without SMTP configuration:** The API returns a fallback signal that opens a pre-filled `mailto:` draft in the visitor's email client — honest, transparent, and always functional.

**To enable server-side delivery**, create a `.env.local` file:

```env
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your@email.com
SMTP_PASS=your-smtp-password
ENQUIRY_TO_EMAIL=newscotlandcapetours@gmail.com
```

Gmail users: use an [App Password](https://support.google.com/accounts/answer/185833) with `smtp.gmail.com` on port 587.

---

## Deployment

### Vercel (recommended)

```bash
npx vercel
```

Add environment variables in the Vercel dashboard under **Settings → Environment Variables**.

### Other platforms

Any Node.js host that supports Next.js works. The `/api/enquiry` route requires a server-side runtime (not purely static export).

---

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
