import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TOURS } from "@/lib/tours";
import TourCard from "@/components/ui/TourCard";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "All Tours",
  description:
    "Explore our full catalogue of Cape Breton and Nova Scotia tours — Cabot Trail, Fortress of Louisbourg, Baddeck, Ingonish Beach, and custom private experiences.",
  alternates: { canonical: "/tours" },
};

export default function ToursPage() {
  const coastal = TOURS.filter((t) => t.category === "coastal");
  const cultural = TOURS.filter((t) => t.category === "cultural");
  const highland = TOURS.filter((t) => t.category === "highland");
  const privateT = TOURS.filter((t) => t.category === "private");

  const sections = [
    { label: "Coastal Experiences", tours: coastal },
    { label: "Cultural Discoveries", tours: cultural },
    { label: "Highland & Lakeside", tours: highland },
    { label: "Private & Custom", tours: privateT },
  ].filter((s) => s.tours.length > 0);

  return (
    <>
      {/* Page Hero */}
      <div className="relative h-[440px] md:h-[520px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85"
          alt="Cape Breton coastal panorama"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 h-full flex items-end pb-16 md:pb-20">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10 w-full">
            <span className="font-sans text-xs font-semibold tracking-[0.22em] uppercase text-champagne block mb-3">
              Cape Breton & Nova Scotia
            </span>
            <span className="divider-champagne mb-5" />
            <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight">
              Our Tours
            </h1>
            <p className="font-sans text-base md:text-lg text-white/75 mt-3 max-w-xl">
              Private, unhurried experiences along the Cabot Trail and Nova Scotia&apos;s most extraordinary destinations.
            </p>
          </div>
        </div>
      </div>

      {/* Note banner */}
      <div className="bg-champagne-pale border-b border-champagne/30">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-4">
          <p className="font-sans text-xs text-navy/70 leading-relaxed">
            <strong className="font-semibold text-navy">Please note:</strong> Tour durations, pricing, and operational details are subject to confirmation. Send an enquiry and we will respond with a personalised proposal.
          </p>
        </div>
      </div>

      {/* Tour sections */}
      <div className="bg-ivory">
        {sections.map((section, si) => (
          <section
            key={section.label}
            className={`section-pad ${si % 2 === 1 ? "bg-ivory-warm" : "bg-ivory"}`}
          >
            <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
              <ScrollReveal className="mb-10">
                <h2 className="font-serif text-2xl md:text-3xl text-navy">{section.label}</h2>
                <div className="divider-champagne mt-3" />
              </ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {section.tours.map((tour, i) => (
                  <ScrollReveal key={tour.slug} delay={i * 80}>
                    <TourCard tour={tour} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="section-pad bg-navy">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 text-center">
          <SectionHeader
            eyebrow="Can't find what you're looking for?"
            heading="Let Us Design Your Perfect Cape Breton Day"
            body="Tell us your interests and we will create a bespoke itinerary tailored entirely to you."
            light
          />
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link href="/tours/custom-private-cape-breton" className="btn-primary">Custom Private Tour</Link>
            <Link href="/contact" className="btn-outline">Send an Enquiry</Link>
          </div>
        </div>
      </section>
    </>
  );
}
