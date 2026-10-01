import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const DESTINATIONS = [
  {
    name: "Cabot Trail",
    tagline: "North America's most celebrated coastal drive",
    image: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80",
    href: "/tours/cabot-trail-coastal",
  },
  {
    name: "Fortress of Louisbourg",
    tagline: "Largest reconstructed 18th-century fortified town",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80",
    href: "/tours/fortress-of-louisbourg",
  },
  {
    name: "Bras d'Or Lake",
    tagline: "UNESCO Biosphere Reserve — an inland sea",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    href: "/tours/highland-village-bras-dor",
  },
  {
    name: "Ingonish Beach",
    tagline: "Where freshwater and saltwater meet the Atlantic",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    href: "/tours/ingonish-beach-green-cove",
  },
];

export default function DestinationHighlights() {
  return (
    <section className="section-pad bg-ivory-warm">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <ScrollReveal className="mb-14">
          <SectionHeader
            eyebrow="Destination Highlights"
            heading="The Places That Define Cape Breton"
            body="From windswept headlands to tranquil inland shores — these are the defining landscapes of Nova Scotia's island jewel."
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {DESTINATIONS.map((dest, i) => (
            <ScrollReveal key={dest.name} delay={i * 100}>
              <Link
                href={dest.href}
                className="group block relative overflow-hidden aspect-[3/4]"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-serif text-white text-lg md:text-xl leading-tight mb-1">
                    {dest.name}
                  </h3>
                  <p className="font-sans text-xs text-white/70 leading-snug">
                    {dest.tagline}
                  </p>
                </div>
                {/* Champagne border on hover */}
                <div className="absolute inset-0 border-2 border-champagne/0 group-hover:border-champagne/60 transition-all duration-400" />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
