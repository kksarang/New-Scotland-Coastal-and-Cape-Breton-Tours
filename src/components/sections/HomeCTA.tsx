import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/config";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HomeCTA() {
  return (
    <section className="relative overflow-hidden h-[480px] md:h-[540px]" aria-label="Plan your trip call to action">
      <Image
        src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=1600&q=80"
        alt="Misty morning over Cape Breton highlands"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy/70" />

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <ScrollReveal className="max-w-2xl">
          <span className="font-sans text-xs font-semibold tracking-[0.22em] uppercase text-champagne block mb-4">
            Ready to Explore?
          </span>
          <span className="divider-champagne mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Your Cape Breton Adventure Starts With a Message
          </h2>
          <p className="font-sans text-base md:text-lg text-white/75 leading-relaxed mb-10">
            Send us your travel dates, group size, and interests. We will respond with a personal proposal — no automated quotes, no hidden fees.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Plan Your Trip
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="btn-outline flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2.5 3C2.5 9.351 6.649 13.5 13 13.5L13.5 13V11L11 10.5l-.5.5c-.5.5-1.5-.5-2.5-1.5S6.5 7 7 6.5L7.5 6 7 3.5H3L2.5 3z" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              {SITE.phoneDisplay}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
