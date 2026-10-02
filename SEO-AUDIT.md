# SEO audit summary — newscotlandcapetours.com

Revamp completed 2 October 2026. Checked locally against the production build (`npm run build && npm run preview`).

## Results

| Check | Result |
|---|---|
| Lighthouse (home, tour, cruise, destination, guide) | Performance 95–99 · Accessibility 100 · Best Practices 100 · SEO 100 |
| Largest Contentful Paint (local, uncompressed) | 2.1–2.9 s |
| Cumulative Layout Shift | ≤ 0.005 |
| Pages with exactly one H1 | 34 / 34 |
| Unique titles and descriptions | Yes, no duplicates |
| Canonical tags | Every indexable page, matching its trailing-slash URL |
| Broken internal links | 0 |
| Images without alt text | 0 |
| Horizontal overflow at 375 px and 320 px | None (19 page types checked) |
| JSON-LD | Valid JSON on every page |

## Implemented

**Fixed a live indexing problem.** The old canonical tags and sitemap pointed to URLs such as `/about`, which GitHub Pages 301-redirects to `/about/`. Every canonical, sitemap entry and internal link now uses the final trailing-slash URL.

**Homepage**
- H1: “Private Cape Breton Tours & Taxi Service in Sydney, Nova Scotia”.
- “Find your kind of unforgettable” is kept as the emotional line above it.
- Sections in this order: hero → trust points → popular tours → categories → private-tour promo → cruise section → destinations → “Explore Cape Breton with confidence” (reviews) → travel guides → FAQ → contact/NAP → quote CTA.

**New landing pages (all pre-rendered with unique metadata)**
- Hub: `/cape-breton-tours/`
- Tours: `/cabot-trail-tours/`, `/fortress-of-louisbourg-tour/`, `/cape-breton-highlands-tour/`, `/highland-village-tour/`, `/coastal-cape-breton-tour/`, `/sydney-nova-scotia-tours/`, `/private-cape-breton-tours/`
- Cruise: `/sydney-cruise-port-tours/`, `/cape-breton-shore-excursions/`
- Transport: `/taxi-sydney-nova-scotia/`, `/airport-transfers-sydney-ns/`
- Discovery: `/things-to-do-cape-breton/`
- `/destinations/` plus 7 destination pages: Cabot Trail, Louisbourg, Highlands, Sydney, Baddeck, Iona, Bras d’Or Lake.
- `/guides/` plus 4 articles: Cabot Trail from Sydney, Sydney cruise port guide, fall colours, one day in Cape Breton.

**Tour pages** follow the requested booking flow: gallery → highlights → places (linked to destinations) → itinerary → Google Maps route → pickup and cruise suitability → good to know (accessibility, children, weather, what to bring, inclusions) → reviews → FAQ → inquiry form → related destinations and tours. The sidebar holds Check availability, WhatsApp, Call, and Viator/Tripadvisor buttons that appear once URLs exist.

**Redirects.** Old URLs (`/tours/…`, `/taxi-service/`) and `/cruise-excursions/` redirect to the new pages. The host can’t send real 301s, so these use an instant redirect with a canonical, which Google treats as permanent.

**Structured data** comes from one central file (`src/seo/schema.js`). It covers:
- TravelAgency (a LocalBusiness type), with alternate names, address, area served and `sameAs` (Facebook, Instagram)
- WebSite and WebPage / AboutPage / ContactPage
- BreadcrumbList
- TouristTrip, Service, TouristDestination / TouristAttraction and Article

No ratings, reviews, prices or availability are marked up.

**Technical SEO**
- Generated `sitemap.xml` (32 URLs, with image entries).
- `robots.txt`.
- Noindex on `/book/`.
- A real 404 page served with a 404 status. Previously the homepage was copied in as `404.html`, which created soft 404s.
- Open Graph and Twitter cards, with a 1200×630 image per page.
- Favicon, apple-touch icon and web manifest.
- `lang="en-CA"`.

**Images**
- Pre-cropped responsive WebP files with descriptive names, e.g. `cabot-trail-coastal-highway-cape-breton-800.webp`.
- `srcset` and `sizes`, explicit width and height, lazy loading below the fold, and high priority for the hero.
- Natural alt text that labels illustrations as illustrations.
- Regenerate with `scripts/optimize-images.sh`.

**Performance**
- Images are 28–200 KB instead of 300–650 KB.
- Google Fonts load without blocking rendering.
- The unused Playfair Display font was dropped.

**Conversion**
- Header and subnav: Tours, Destinations, Cruise excursions, Taxi & transfers, Travel guides, About, Contact, Book a tour.
- Phone number in the header, with active-page states.
- Mobile sticky bar (Call / WhatsApp / Book), which links to the current tour on tour pages.
- Pre-filled per-tour WhatsApp message.
- Inquiry forms collect tour, date, guests, pickup, cruise ship, arrival time, all-aboard time, mobility needs, flight number, phone, email and message. They have a spam honeypot and date validation.
- Back-to-top button, Share and Save buttons on tours, destination filters.

**Analytics** (GA4-ready, one global listener). Events:
- Contact and outbound clicks: `call_click`, `email_click`, `whatsapp_click`, `sms_click`, `google_maps_click`, `tripadvisor_click`, `tripadvisor_review_click`, `viator_click`, `viator_booking_click`, `book_tour_click`
- Page interest: `tour_view`, `destination_view`, `tour_share`
- Forms: `quote_start`, `quote_submit`, `cruise_inquiry_submit`

Outbound Viator and Tripadvisor links carry UTM parameters.

**Brand consistency.** The site uses “New Scotland Coastal & Cape Breton Tours” for the full name and schema, and “New Scotland Cape Tours” in page titles. The schema lists “New Scotland Coastal and Cape Breton Tours” as an alternate name so Google connects it to the current Business Profile.

**Footer.** Five columns: brand and socials, popular tours, destinations, travel guides, contact. Below them: copyright, privacy policy and booking information, and the credit “| Developed by Enitexa.ai” on the copyright line, linking to https://sarangrajan.in/enitexa.ai/ in a new tab.

## Needs owner information

All of these are single-line edits in `src/data/`.

1. **Tripadvisor and Viator URLs.** Add them to `profiles` in `business.js`, and add each tour’s product URL as `viatorUrl` / `tripadvisorUrl` in `tours.js`. Buttons, footer links and schema `sameAs` appear automatically.
2. **Real customer reviews** (with permission). Add them to `reviews.js`. They display as testimonials only.
3. **Prices.** Add them to `pricing.js`. Cards and the price calculator update automatically.
4. **Tour durations, inclusions and exclusions, cancellation policy.** The pages currently say these are confirmed with the quote.
5. **Real photographs.** Most current images are AI-generated illustrations. Original photos of the vehicle, guests (with consent), the Cabot Trail, Louisbourg and cruise pickups would improve trust and conversion, and help Google Images and the Business Profile. Replace files in `assets/images/` and rerun the image script.
6. **Business hours and an About-page story** (who runs the business and how long they have been guiding). Adding these strengthens the E-E-A-T signals Google uses to judge experience and trustworthiness.
7. **Review all factual copy** in `destinations.js`, `guides.js` and `services.js`, such as drive times, seasons and the return-to-ship approach. Add first-hand local tips where possible.
8. **Confirm the WhatsApp number** (currently +1 902-549-4542).

## Needs external account configuration

1. **Google Search Console.** The property is already verified via `google3a084cc968d9a079.html`. After deploying:
   - Submit `https://newscotlandcapetours.com/sitemap.xml`.
   - Request indexing for the homepage, `/cabot-trail-tours/`, `/sydney-cruise-port-tours/`, `/fortress-of-louisbourg-tour/`, `/private-cape-breton-tours/` and `/taxi-sydney-nova-scotia/`.
2. **Google Analytics 4.** Create a property, then add its Measurement ID (`G-…`) as the repository variable `GA_MEASUREMENT_ID` (GitHub → Settings → Secrets and variables → Actions → Variables). The privacy policy updates automatically. Mark `quote_submit`, `cruise_inquiry_submit`, `call_click`, `whatsapp_click` and `sms_click` as key events.
3. **Google Business Profile.**
   - Make the name match the website exactly: “New Scotland Coastal & Cape Breton Tours”. It currently uses “and”.
   - Add services matching the landing pages and set the website link.
   - Keep collecting reviews and posting real photos.
4. **Bing Webmaster Tools.** Import the site from Search Console.
5. **Apple Business Connect, Facebook, Tripadvisor, Viator and Nova Scotia / Cape Breton tourism directories.** Use identical name, address and phone everywhere.

## Future recommendations

- Write the remaining guide topics from first-hand experience, such as best Cabot Trail stops, Cape Breton for seniors, rainy-day ideas and a two-day itinerary. Don’t publish generic filler.
- After 4–6 weeks, use Search Console → Performance → Queries to find pages ranking in positions 8–20 and expand them.
- Add short videos (Cabot Trail, vehicle, Louisbourg) as lazy-loaded YouTube embeds once footage exists.
- If a backend is ever added, send enquiries server-side, with validation and rate limiting. Forms currently open WhatsApp or email for the visitor to send.
- Known minor issue: URLs with query strings (e.g. `/book/?tour=…`) cause a harmless React hydration warning, because pages are pre-rendered without parameters. It was present before this revamp and does not affect indexed pages.
