import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PrivateToursBanner() {
  return (
    <section className="relative overflow-hidden" aria-label="Private tours and transport">
      {/* Full-bleed image */}
      <div className="relative h-[520px] md:h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1600&q=80"
          alt="Secluded coastal cove at golden hour"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="hero-overlay-side absolute inset-0" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10 w-full">
            <ScrollReveal className="max-w-xl">
              <span className="font-sans text-xs font-semibold tracking-[0.22em] uppercase text-champagne block mb-4">
                Private &amp; Tailored
              </span>
              <span className="divider-champagne mb-6" />
              <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-5">
                Your Cape Breton,<br />
                <em className="not-italic text-champagne">Entirely Your Way</em>
              </h2>
              <p className="font-sans text-base md:text-lg text-white/80 leading-relaxed mb-4">
                Every one of our tours is private — you will never share a vehicle with strangers. We also offer bespoke sightseeing and transport arrangements for airport arrivals, cruise-ship excursions, and multi-day trips.
              </p>
              <p className="font-sans text-sm text-white/60 mb-8">
                Transport and excursion services are subject to availability confirmation. We will respond to every enquiry personally.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/private-tours" className="btn-primary">
                  Private Tours &amp; Transport
                </Link>
                <Link href="/contact" className="btn-outline">
                  Send an Enquiry
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
