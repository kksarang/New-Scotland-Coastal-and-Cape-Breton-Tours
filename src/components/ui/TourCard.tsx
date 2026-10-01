"use client";

import Image from "next/image";
import Link from "next/link";
import type { Tour } from "@/lib/tours";

interface TourCardProps {
  tour: Tour;
  priority?: boolean;
}

const CATEGORY_LABELS: Record<string, string> = {
  coastal: "Coastal",
  cultural: "Cultural",
  highland: "Highland",
  private: "Private",
};

export default function TourCard({ tour, priority = false }: TourCardProps) {
  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="tour-card group block bg-white overflow-hidden border border-ivory-warm hover:shadow-xl transition-shadow duration-500"
    >
      {/* Image */}
      <div className="relative h-64 md:h-72 overflow-hidden">
        <Image
          src={tour.heroImage}
          alt={tour.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover tour-card-img"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
        {/* Category badge */}
        <span className="absolute top-4 left-4 bg-champagne text-navy-deep text-[0.7rem] font-semibold font-sans tracking-widest uppercase px-3 py-1">
          {CATEGORY_LABELS[tour.category] ?? tour.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 md:p-7">
        <h3 className="font-serif text-xl md:text-2xl text-navy leading-snug mb-2">
          {tour.title}
        </h3>
        <p className="font-sans text-sm text-muted leading-relaxed line-clamp-3 mb-5">
          {tour.description}
        </p>

        {/* Meta row */}
        <div className="flex items-center justify-between pt-4 border-t border-ivory-warm">
          <span className="font-sans text-xs font-semibold tracking-widest uppercase text-teal">
            {tour.priceFrom ? `From ${tour.priceFrom}` : "Request Pricing"}
          </span>
          <span className="font-sans text-xs font-semibold tracking-widest uppercase text-navy flex items-center gap-1.5 group-hover:text-teal transition-colors">
            View Tour
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
