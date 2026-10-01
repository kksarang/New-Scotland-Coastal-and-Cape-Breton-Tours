import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function EditorialFeature() {
  return (
    <section className="section-pad bg-navy-deep overflow-hidden" aria-label="Cape Breton editorial feature">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <ScrollReveal>
            <div className="flex flex-col gap-5">
              <span className="font-sans text-xs font-semibold tracking-[0.22em] uppercase text-champagne">
                The Cape Breton Experience
              </span>
              <span className="divider-champagne" />
              <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
                A Land That Stays With You Long After You Leave
              </h2>
              <div className="prose-luxury">
                <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed">
                  Cape Breton Island is one of Canada&apos;s most extraordinary destinations — a place where the Atlantic crashes against cliffs of ancient granite, where highland plateaus meet inland seas, and where the lilting sounds of Gaelic music drift from open windows on summer evenings.
                </p>
                <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed mt-4">
                  The Cabot Trail traces 298 kilometres of some of the most celebrated coastal scenery in North America. Beyond it, the Bras d&apos;Or Lake — a vast inland sea designated a UNESCO Biosphere Reserve — mirrors the sky in extraordinary silence. Fortress of Louisbourg transports visitors to 18th-century New France. Baddeck holds the legacy of Alexander Graham Bell.
                </p>
                <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed mt-4">
                  We are here to show you all of it — privately, at your pace, with the knowledge and care that makes the difference between a good trip and an unforgettable one.
                </p>
              </div>
              <div className="flex gap-4 mt-2 flex-wrap">
                <Link href="/tours" className="btn-primary">
                  Explore Tours
                </Link>
                <Link href="/about" className="btn-outline">
                  About Us
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Images */}
          <ScrollReveal delay={150} className="relative">
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=85"
                  alt="Highland landscape with misty valleys"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-champagne p-6 max-w-[220px]">
                <p className="font-serif text-navy-deep text-xl font-bold leading-tight mb-1">
                  Explore the Trail
                </p>
                <p className="font-sans text-navy text-xs leading-snug opacity-75">
                  One of the most beautiful coastal drives in the world
                </p>
              </div>
              {/* Decorative border */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-champagne/30 pointer-events-none" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
