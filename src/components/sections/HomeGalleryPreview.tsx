import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=900&q=80",
    alt: "Rocky Atlantic coastline at sunrise",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
    alt: "Lighthouse on a rugged cape headland",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
    alt: "Misty autumn forest on the Cabot Trail",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=600&q=80",
    alt: "Morning mist over highland valley",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=600&q=80",
    alt: "Coastal village harbour in summer",
    span: "",
  },
];

export default function HomeGalleryPreview() {
  return (
    <section className="section-pad bg-ivory">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <ScrollReveal className="mb-12">
          <SectionHeader
            eyebrow="Gallery"
            heading="Cape Breton Through the Lens"
            body="A glimpse of the landscapes, coastlines, and cultural treasures that await."
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[420px] md:h-[560px]">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden ${img.span} ${i === 0 ? "col-span-2 row-span-2" : ""}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-10 text-center">
          <Link href="/gallery" className="btn-outline-navy inline-flex">
            View Full Gallery
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
