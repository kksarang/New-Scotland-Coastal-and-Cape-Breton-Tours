"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/config";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "Tours" },
  { href: "/private-tours", label: "Private Tours" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          transparent
            ? "bg-transparent"
            : "bg-navy/97 backdrop-blur-md shadow-lg"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px] md:h-20">
          {/* Wordmark */}
          <Link href="/" className="flex flex-col leading-none group" aria-label="New Scotland Coastal Home">
            <span className={`font-serif text-lg md:text-xl font-bold tracking-tight transition-colors ${transparent ? "text-white" : "text-white"}`}>
              New Scotland
            </span>
            <span className={`font-sans text-[0.65rem] tracking-[0.22em] uppercase font-medium transition-colors ${transparent ? "text-champagne" : "text-champagne"}`}>
              Coastal &amp; Cape Breton Tours
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link font-sans text-xs tracking-widest uppercase font-medium transition-colors ${
                  transparent ? "text-white/85 hover:text-white" : "text-white/80 hover:text-white"
                } ${pathname === link.href ? "active text-white" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-champagne text-navy-deep font-sans text-xs font-bold tracking-widest uppercase px-5 py-2.5 hover:bg-champagne-light transition-colors"
            >
              Plan Your Trip
            </Link>

            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span
                className={`block h-px w-6 bg-white origin-center transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-[5px]" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-white transition-all duration-300 ${
                  mobileOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-white origin-center transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-navy-deep flex flex-col transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex-1 flex flex-col justify-center px-10 gap-2">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-serif text-3xl text-white py-3 border-b border-white/10 transition-all duration-300 ${
                mobileOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary mt-8 self-start"
            style={{ transitionDelay: `${NAV_LINKS.length * 60}ms` }}
          >
            Plan Your Trip
          </Link>
        </div>

        <div className="px-10 pb-12 border-t border-white/10 pt-6">
          <p className="font-sans text-xs text-white/50 tracking-widest uppercase mb-3">
            Get in touch
          </p>
          <a href={`tel:${SITE.phone}`} className="block font-sans text-white/80 hover:text-champagne mb-1 transition-colors">
            {SITE.phoneDisplay}
          </a>
          <a href={`mailto:${SITE.email}`} className="block font-sans text-white/80 hover:text-champagne text-sm transition-colors">
            {SITE.email}
          </a>
        </div>
      </div>
    </>
  );
}
