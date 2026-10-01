import Link from "next/link";
import { SITE } from "@/lib/config";

const TOUR_LINKS = [
  { href: "/tours/cabot-trail-coastal", label: "Cabot Trail Coastal" },
  { href: "/tours/full-cabot-trail", label: "Full Cabot Trail" },
  { href: "/tours/ingonish-beach-green-cove", label: "Ingonish Beach" },
  { href: "/tours/fortress-of-louisbourg", label: "Fortress of Louisbourg" },
  { href: "/tours/baddeck-agbell", label: "Baddeck & Bell Historic Site" },
  { href: "/tours/highland-village-bras-dor", label: "Highland Village" },
];

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "All Tours" },
  { href: "/private-tours", label: "Private Tours & Transport" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Plan Your Trip" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      {/* Top enquiry strip */}
      <div className="bg-teal py-6 px-6">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-serif text-xl md:text-2xl text-white">Ready to explore Cape Breton?</p>
            <p className="font-sans text-sm text-white/75 mt-0.5">Send an enquiry and we will design your perfect coastal experience.</p>
          </div>
          <Link href="/contact" className="btn-primary flex-shrink-0">
            Plan Your Trip
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="block mb-5">
            <span className="font-serif text-lg font-bold text-white block">New Scotland</span>
            <span className="font-sans text-[0.6rem] tracking-[0.22em] uppercase text-champagne block">
              Coastal &amp; Cape Breton Tours
            </span>
          </Link>
          <p className="font-sans text-sm text-white/60 leading-relaxed mb-6">
            Private coastal tours, cultural experiences, and personalised transport along the Cabot Trail and Nova Scotia&apos;s finest destinations.
          </p>
          <div className="space-y-2">
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 font-sans text-sm text-white/70 hover:text-champagne transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 2.5C2 8.853 5.147 12 11.5 12l.5-.5V9.5L10 9l-.5.5c-.5.5-1.5-.5-2.5-1.5S5.5 5 6 4.5L6.5 4 6 2H3L2 2.5z" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              {SITE.phoneDisplay}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-2 font-sans text-sm text-white/70 hover:text-champagne transition-colors break-all"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="3" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" />
                <path d="M1 4l6 4 6-4" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              {SITE.email}
            </a>
            <p className="flex items-start gap-2 font-sans text-sm text-white/60">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 flex-shrink-0">
                <circle cx="7" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.2" />
                <path d="M3 12c0-2.21 1.79-4 4-4s4 1.79 4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              {SITE.location}
            </p>
          </div>
        </div>

        {/* Tours */}
        <div>
          <h4 className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-champagne mb-5">
            Our Tours
          </h4>
          <ul className="space-y-3">
            {TOUR_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-sm text-white/65 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-champagne mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-sm text-white/65 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Enquiry note */}
        <div>
          <h4 className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-champagne mb-5">
            How It Works
          </h4>
          <div className="space-y-4">
            {[
              ["01", "Choose Your Experience", "Browse our tours or request a fully custom itinerary."],
              ["02", "Send Your Preferences", "Tell us your travel dates, group size, and interests."],
              ["03", "Receive Availability & Pricing", "We respond with a personalised proposal."],
            ].map(([num, title, body]) => (
              <div key={num} className="flex gap-3">
                <span className="font-serif text-champagne text-lg leading-none">{num}</span>
                <div>
                  <p className="font-sans text-xs font-semibold text-white/90">{title}</p>
                  <p className="font-sans text-xs text-white/50 leading-relaxed mt-0.5">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-white/40">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="font-sans text-xs text-white/30 text-center">
            Tour details listed as draft proposals — all itineraries, pricing, and operational details subject to owner confirmation.
          </p>
        </div>
      </div>
    </footer>
  );
}
