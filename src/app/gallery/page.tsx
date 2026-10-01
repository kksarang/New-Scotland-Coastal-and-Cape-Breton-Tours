import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photography from across Cape Breton Island and Nova Scotia — the Cabot Trail, Bras d'Or Lake, coastal headlands, and cultural landmarks.",
  alternates: { canonical: "/gallery" },
};

const GALLERY_ITEMS = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
    alt: "Dramatic Cape Breton coastal cliffs at sunset",
    caption: "Cabot Trail coastline",
    aspect: "aspect-video col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
    alt: "Rocky Atlantic shoreline at dawn",
    caption: "Atlantic shoreline",
    aspect: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    alt: "Highland plateau with valley below",
    caption: "Cape Breton Highlands",
    aspect: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    alt: "Lighthouse on a coastal headland",
    caption: "Nova Scotia lighthouse",
    aspect: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    alt: "Crystal clear beach with turquoise water",
    caption: "Ingonish Beach",
    aspect: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
    alt: "Bras d'Or Lake at golden hour",
    caption: "Bras d'Or Lake — UNESCO Biosphere Reserve",
    aspect: "aspect-video col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    alt: "Misty autumn forest along the Cabot Trail",
    caption: "Autumn on the Cabot Trail",
    aspect: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=800&q=80",
    alt: "Morning mist in a highland valley",
    caption: "Morning mist, Cape Breton Highlands",
    aspect: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80",
    alt: "Fortress of Louisbourg walls",
    caption: "Fortress of Louisbourg",
    aspect: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&q=80",
    alt: "Coastal village harbour in summer",
    caption: "Cape Breton fishing village",
    aspect: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1200&q=80",
    alt: "Winding coastal road with ocean views",
    caption: "The Cabot Trail — every curve reveals something new",
    aspect: "aspect-video col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    alt: "Secluded cove with golden light",
    caption: "A secluded Cape Breton cove",
    aspect: "aspect-square",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[400px] md:h-[480px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1920&q=85"
          alt="Rocky Cape Breton Atlantic shoreline"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 h-full flex items-end pb-16 md:pb-20">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10 w-full">
            <span className="font-sans text-xs font-semibold tracking-[0.22em] uppercase text-champagne block mb-3">
              Visual Stories
            </span>
            <span className="divider-champagne mb-5" />
            <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight">
              Cape Breton Through the Lens
            </h1>
            <p className="font-sans text-base md:text-xl text-white/75 mt-3 max-w-xl">
              Coastlines, highlands, culture, and the extraordinary light of Nova Scotia&apos;s island jewel.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery grid */}
      <section className="section-pad bg-ivory">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <ScrollReveal className="mb-12">
            <SectionHeader
              eyebrow="Gallery"
              heading="A Glimpse of What Awaits"
              body="These landscapes are best experienced in person. Reach out and we will help make that happen."
            />
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {GALLERY_ITEMS.map((item, i) => (
              <ScrollReveal
                key={i}
                delay={Math.min(i * 40, 300)}
                className={`${item.aspect.includes("col-span-2") ? "col-span-2" : ""} relative overflow-hidden group`}
              >
                <div className={`relative w-full ${item.aspect.includes("aspect-video") ? "aspect-video" : "aspect-square"}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes={item.aspect.includes("col-span-2") ? "(max-width: 768px) 100vw, 67vw" : "(max-width: 768px) 50vw, 25vw"}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-all duration-400" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                    <p className="font-sans text-xs text-white font-medium">{item.caption}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">See It for Yourself</h2>
          <p className="font-sans text-base md:text-lg text-white/65 mb-8 max-w-xl mx-auto leading-relaxed">
            No photograph does Cape Breton justice. Send us your travel dates and we will show you the real thing.
          </p>
          <Link href="/contact" className="btn-primary">Plan Your Trip</Link>
        </div>
      </section>
    </>
  );
}
