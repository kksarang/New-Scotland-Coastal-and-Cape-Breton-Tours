import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { TOURS, getTourBySlug, getRelatedTours } from "@/lib/tours";
import TourCard from "@/components/ui/TourCard";
import FaqAccordion from "@/components/ui/FaqAccordion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import EnquiryForm from "@/components/forms/EnquiryForm";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TOURS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return { title: "Tour Not Found" };
  return {
    title: tour.title,
    description: tour.description,
    alternates: { canonical: `/tours/${slug}` },
    openGraph: {
      title: tour.title,
      description: tour.description,
      images: [{ url: tour.heroImage, width: 1600, height: 900, alt: tour.title }],
    },
  };
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  const related = getRelatedTours(tour.relatedSlugs);

  return (
    <>
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[420px] max-h-[700px] overflow-hidden">
        <Image
          src={tour.heroImage}
          alt={tour.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 h-full flex items-end pb-12 md:pb-16">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10 w-full">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 font-sans text-xs text-white/60 hover:text-white mb-4 transition-colors tracking-wider uppercase"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All Tours
            </Link>
            <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-champagne block mb-3">
              {tour.category.charAt(0).toUpperCase() + tour.category.slice(1)} Experience
            </span>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight max-w-3xl">
              {tour.title}
            </h1>
            <p className="font-sans text-base md:text-xl text-white/75 mt-3">
              {tour.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Draft note */}
      {tour.draftNote && (
        <div className="bg-amber-50 border-b border-amber-200">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-3">
            <p className="font-sans text-xs text-amber-800">
              <strong>Content Review:</strong> {tour.draftNote}
            </p>
          </div>
        </div>
      )}

      {/* Main layout */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left: Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Introduction */}
            <ScrollReveal>
              <div>
                <span className="divider-champagne mb-5" />
                <p className="font-sans text-lg md:text-xl text-charcoal leading-relaxed">
                  {tour.description}
                </p>
                <p className="font-sans text-base text-muted leading-relaxed mt-4">
                  {tour.longDescription}
                </p>
              </div>
            </ScrollReveal>

            {/* Highlights */}
            <ScrollReveal>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-navy mb-6">Tour Highlights</h2>
                <ul className="space-y-3">
                  {tour.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-teal flex items-center justify-center mt-0.5">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="font-sans text-base text-charcoal leading-snug">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Itinerary */}
            <ScrollReveal>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-navy mb-6">Suggested Itinerary</h2>
                <p className="font-sans text-sm text-muted mb-6 italic">
                  This is a proposed outline — the actual experience is shaped to your preferences and confirmed with you in advance.
                </p>
                <div className="space-y-0">
                  {tour.itinerary.map((stop, i) => (
                    <div key={i} className="flex gap-5">
                      {/* Timeline */}
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                          <span className="font-serif text-xs text-champagne font-bold">{i + 1}</span>
                        </div>
                        {i < tour.itinerary.length - 1 && (
                          <div className="w-px flex-1 bg-ivory-warm min-h-[2rem]" />
                        )}
                      </div>
                      {/* Content */}
                      <div className="pb-8">
                        {stop.time && (
                          <span className="font-sans text-xs font-semibold tracking-wider uppercase text-teal block mb-1">
                            {stop.time}
                          </span>
                        )}
                        <h3 className="font-sans text-base font-semibold text-navy mb-1">{stop.title}</h3>
                        <p className="font-sans text-sm text-muted leading-relaxed">{stop.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Details grid */}
            <ScrollReveal>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { label: "Duration", value: tour.duration },
                  { label: "Group Size", value: tour.groupSize },
                  { label: "From", value: tour.priceFrom },
                  { label: "Pickup", value: tour.pickupInfo, full: true },
                  { label: "Accessibility", value: tour.accessibility },
                ].map((item) => item.value && (
                  <div
                    key={item.label}
                    className={`bg-ivory-warm border border-champagne/20 p-5 ${item.full ? "col-span-2 md:col-span-3" : ""}`}
                  >
                    <p className="font-sans text-xs font-semibold tracking-widest uppercase text-teal mb-1">
                      {item.label}
                    </p>
                    <p className="font-sans text-sm text-charcoal leading-snug">{item.value}</p>
                  </div>
                ))}
                {!tour.duration && !tour.groupSize && !tour.priceFrom && (
                  <div className="col-span-2 md:col-span-3 bg-champagne-pale border border-champagne/20 p-5">
                    <p className="font-sans text-xs font-semibold tracking-widest uppercase text-champagne mb-1">Pricing & Details</p>
                    <p className="font-sans text-sm text-charcoal">
                      Duration, group size, and pricing are provided in our personal response to your enquiry. Send us your details and we will respond promptly.
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>

            {/* Inclusions / Exclusions */}
            {(tour.inclusions || tour.exclusions) && (
              <ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tour.inclusions && (
                    <div>
                      <h3 className="font-sans text-sm font-semibold tracking-widest uppercase text-navy mb-4">Inclusions</h3>
                      <ul className="space-y-2">
                        {tour.inclusions.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 font-sans text-sm text-charcoal">
                            <span className="text-teal mt-0.5">✓</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {tour.exclusions && (
                    <div>
                      <h3 className="font-sans text-sm font-semibold tracking-widest uppercase text-navy mb-4">Exclusions</h3>
                      <ul className="space-y-2">
                        {tour.exclusions.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 font-sans text-sm text-charcoal">
                            <span className="text-muted mt-0.5">×</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            )}

            {/* Gallery */}
            {tour.galleryImages.length > 0 && (
              <ScrollReveal>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-navy mb-6">Gallery</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {tour.galleryImages.map((img, i) => (
                      <div key={i} className={`relative overflow-hidden ${i === 0 ? "col-span-2 aspect-video" : "aspect-[4/3]"}`}>
                        <Image
                          src={img}
                          alt={`${tour.title} — image ${i + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* FAQs */}
            {tour.faqs.length > 0 && (
              <ScrollReveal>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-navy mb-6">Frequently Asked Questions</h2>
                  <FaqAccordion items={tour.faqs} />
                </div>
              </ScrollReveal>
            )}
          </div>

          {/* Right: Sticky sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Enquiry card */}
              <div className="bg-navy p-7 md:p-8">
                <h3 className="font-serif text-2xl text-white mb-1">Request This Tour</h3>
                <p className="font-sans text-sm text-white/60 mb-6 leading-relaxed">
                  Send your preferences and we will respond with availability and pricing.
                </p>
                <Suspense>
                  <EnquiryForm prefilledTour={tour.slug} compact />
                </Suspense>
              </div>

              {/* Quick info */}
              <div className="border border-champagne/30 p-6 bg-champagne-pale">
                <p className="font-sans text-xs font-semibold tracking-widest uppercase text-teal mb-3">
                  All Our Tours Include
                </p>
                <ul className="space-y-2">
                  {[
                    "Private vehicle — your group only",
                    "Dedicated local guide",
                    "Flexible stops and pacing",
                    "Personal enquiry response",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 font-sans text-xs text-charcoal leading-snug">
                      <span className="text-teal flex-shrink-0">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="border border-ivory-warm p-6">
                <p className="font-sans text-xs font-semibold tracking-widest uppercase text-muted mb-3">
                  Prefer to Call?
                </p>
                <a
                  href="tel:+19025494542"
                  className="flex items-center gap-3 font-sans text-base font-semibold text-navy hover:text-teal transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 3.5C3 10.956 7.044 15 14.5 15L15 14.5V11.5L12.5 11l-.5.5c-.5.5-1.5-.5-2.5-1.5S8 7.5 8.5 7l.5-.5L8.5 4H4.5L3 3.5z" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                  +1 (902) 549-4542
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related tours */}
      {related.length > 0 && (
        <section className="section-pad bg-ivory-warm">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
            <h2 className="font-serif text-2xl md:text-3xl text-navy mb-2">You May Also Like</h2>
            <span className="divider-champagne mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((t) => (
                <TourCard key={t.slug} tour={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mobile sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-navy border-t border-white/10 px-4 py-3 z-40 flex gap-3">
        <Link
          href={`/contact?tour=${tour.slug}`}
          className="flex-1 btn-primary justify-center text-center"
        >
          Request Availability
        </Link>
        <a
          href="tel:+19025494542"
          className="flex-shrink-0 btn-outline px-4"
          aria-label="Call us"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 3.5C3 10.956 7.044 15 14.5 15L15 14.5V11.5L12.5 11l-.5.5c-.5.5-1.5-.5-2.5-1.5S8 7.5 8.5 7l.5-.5L8.5 4H4.5L3 3.5z" stroke="white" strokeWidth="1.4" />
          </svg>
        </a>
      </div>
      <div className="lg:hidden h-16" />
    </>
  );
}
