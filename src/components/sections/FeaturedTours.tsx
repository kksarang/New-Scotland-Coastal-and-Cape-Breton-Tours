import Link from "next/link";
import { TOURS } from "@/lib/tours";
import TourCard from "@/components/ui/TourCard";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

const FEATURED_SLUGS = [
  "cabot-trail-coastal",
  "full-cabot-trail",
  "fortress-of-louisbourg",
  "baddeck-agbell",
  "highland-village-bras-dor",
  "custom-private-cape-breton",
];

export default function FeaturedTours() {
  const featured = FEATURED_SLUGS
    .map((s) => TOURS.find((t) => t.slug === s))
    .filter((t): t is (typeof TOURS)[number] => t !== undefined);

  return (
    <section className="section-pad bg-ivory" id="tours">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <ScrollReveal className="mb-14">
          <SectionHeader
            eyebrow="Curated Experiences"
            heading="Cape Breton's Finest Tours"
            body="From dramatic Cabot Trail coastlines to living history museums — each experience is private, unhurried, and shaped around you."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((tour, i) => (
            <ScrollReveal key={tour.slug} delay={i * 80}>
              <TourCard tour={tour} priority={i < 3} />
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link href="/tours" className="btn-outline-navy inline-flex">
            View All Tours
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
