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
- Analytics: set the `GA_MEASUREMENT_ID` repository variable to enable GA4. Events are defined in `src/lib/analytics.js`. Contact-link events never include message bodies or query strings.
- Enquiries: booking and quote forms submit to [Formspree](https://formspree.io/) when `VITE_FORMSPREE_FORM_ID` is set at build time. Shared logic lives in `src/lib/enquirySubmit.js`. WhatsApp, SMS and mailto links remain optional alternatives and open the visitor’s apps separately.

### Formspree setup (required for automatic enquiries)

1. Sign in at [formspree.io](https://formspree.io/) with a business-owned account (not a shared personal password in this repo).
2. Create a new form. Set the notification email to `newscotlandcapetours@gmail.com` in the Formspree dashboard (do not rely on a hidden `recipient` field in the browser).
3. Under **Settings → Form**, enable **Reply-To** using the visitor field named `email` (lowercase).
4. Copy the public form ID from the form endpoint (`https://formspree.io/f/xxxxxxxx` → `xxxxxxxx`).
5. Local dev: copy `.env.example` to `.env` and set `VITE_FORMSPREE_FORM_ID=xxxxxxxx`, then `npm run dev`.
6. Production (GitHub Pages): in the GitHub repository go to **Settings → Secrets and variables → Actions → Variables** and add `FORMSPREE_FORM_ID` with the same value. Push to `main` or re-run the deploy workflow so the build picks up the variable (Vite inlines env vars at build time; changing the variable requires a rebuild).
7. Send one clearly labelled test enquiry from the live site. Confirm the submission appears in Formspree and that notification email arrives with a working **Reply-To** to the visitor address.

#### You (business) must receive the enquiry

1. Open Gmail for **`newscotlandcapetours@gmail.com`** and complete any Formspree **email verification** message (check Spam / Promotions).
2. In Formspree: **Settings → Email notifications** → destination **`newscotlandcapetours@gmail.com`**.
3. **Submissions** tab: if a row appears, Formspree accepted it. If Gmail is empty, check Spam, then open `https://formspree.io/unblock/newscotlandcapetours@gmail.com`.
4. The **new enquiry code must be deployed**. Until you push this branch to `main` (or upload a new `dist/` to Hostinger), the live site still only opens mailto drafts.

#### Visitor auto-reply (confirmation)

The website sends `_autoresponse` with the visitor’s `email` field. You must also turn it on in Formspree:

1. Open the form → **Plugins** (or **Workflow**) → **Send a confirmation / response email**.
2. To: visitor field **`email`**.
3. Subject: `We received your enquiry — New Scotland Coastal & Cape Breton Tours`.
4. Body: thank them, say the team will confirm availability, and that this is **not a booking**.
5. Save. Paid Formspree plans are often required for confirmation emails.

Never commit Formspree account passwords, Gmail app passwords or private API keys. Only the public form ID belongs in `VITE_FORMSPREE_FORM_ID`.
- No invented pricing, durations, inclusions or reviews are displayed. See `SEO-AUDIT.md` for what still needs owner information.

## Deployment

See `DOMAIN-SETUP.md` for Hostinger launch steps. `.openai/hosting.json` identifies the private Sites review deployment. The custom domain is not changed automatically. No credentials belong in this repository.

## Experience browsing

The interface uses a search-led marketplace layout inspired by Viator and Tripadvisor. Search and category filters run over the verified tour catalogue. Heart buttons save tour slugs in browser local storage, without creating an account. Travel dates carry from results into the tour enquiry. Prices and reviews are not fabricated.
