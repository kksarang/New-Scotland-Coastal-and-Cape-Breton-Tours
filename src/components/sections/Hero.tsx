"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TOURS } from "@/lib/tours";

export default function Hero() {
  const router = useRouter();
  const [tourInterest, setTourInterest] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");

  const handleStrip = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (tourInterest) params.set("tour", tourInterest);
    if (date) params.set("date", date);
    if (guests) params.set("guests", guests);
    router.push(`/contact?${params.toString()}`);
  };

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden" aria-label="Hero">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85"
        alt="Dramatic Cape Breton coastal cliffs and ocean"
        fill
        priority
        sizes="100vw"
        className="object-cover ken-burns"
      />
      <div className="hero-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-32 md:pb-36">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <span className="inline-block font-sans text-xs font-semibold tracking-[0.22em] uppercase text-champagne mb-6">
              Cape Breton &amp; Nova Scotia, Canada
            </span>
            <span className="divider-champagne mb-6" />

            {/* Headline */}
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.08] mb-6">
              Discover Cape Breton,<br />
              <em className="not-italic text-champagne">One Beautiful Stop</em><br />
              at a Time.
            </h1>

            {/* Sub-copy */}
            <p className="font-sans text-base md:text-lg text-white/80 leading-relaxed max-w-xl mb-10">
              Cinematic coastal scenery, Gaelic heritage, and the legendary Cabot Trail — explored at your pace with a dedicated private guide.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="/tours" className="btn-primary">
                Explore Tours
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/private-tours" className="btn-outline">
                Plan a Private Tour
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry strip */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-navy/90 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-4">
          <form
            onSubmit={handleStrip}
            className="flex flex-col sm:flex-row items-stretch sm:items-end gap-3"
            aria-label="Quick enquiry"
          >
            <div className="flex-1 flex flex-col gap-1">
              <label className="font-sans text-[0.65rem] tracking-widest uppercase text-white/50">
                Tour Interest
              </label>
              <select
                value={tourInterest}
                onChange={(e) => setTourInterest(e.target.value)}
                className="bg-white/10 border border-white/20 text-white font-sans text-sm px-3 py-2 focus:outline-none focus:border-champagne"
              >
                <option value="" className="text-charcoal bg-white">— Any tour —</option>
                {TOURS.map((t) => (
                  <option key={t.slug} value={t.slug} className="text-charcoal bg-white">
                    {t.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label className="font-sans text-[0.65rem] tracking-widest uppercase text-white/50">
                Preferred Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-white/10 border border-white/20 text-white font-sans text-sm px-3 py-2 focus:outline-none focus:border-champagne [color-scheme:dark]"
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label className="font-sans text-[0.65rem] tracking-widest uppercase text-white/50">
                Guests
              </label>
              <input
                type="number"
                min="1"
                placeholder="2"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="bg-white/10 border border-white/20 text-white font-sans text-sm px-3 py-2 focus:outline-none focus:border-champagne placeholder-white/30"
              />
            </div>
            <button
              type="submit"
              className="btn-primary flex-shrink-0 self-end sm:self-auto"
            >
              Request Availability
            </button>
          </form>
          <p className="font-sans text-[0.65rem] text-white/35 mt-2">
            This form prefills an enquiry — it does not confirm availability or take payment.
          </p>
        </div>
      </div>
    </section>
  );
}
