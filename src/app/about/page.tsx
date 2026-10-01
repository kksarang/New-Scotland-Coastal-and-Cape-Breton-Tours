import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "New Scotland Coastal & Cape Breton Tours — a private tour company rooted in Cape Breton Island, Nova Scotia, dedicated to sharing its extraordinary landscapes and culture.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    title: "Genuinely Private",
    body: "Every tour is exclusively for your group. No shared vehicles, no strangers — just your party, your guide, and Cape Breton at its finest.",
  },
  {
    title: "Unhurried & Flexible",
    body: "We believe the best experiences happen when you are not watching a clock. We shape every itinerary around your pace, your interests, and what moves you.",
  },
  {
    title: "Honest & Transparent",
    body: "We will never oversell what we offer. If something is uncertain, we say so. Every response is personal, accurate, and direct.",
  },
  {
    title: "Rooted in Cape Breton",
    body: "This island is home. The stories we share, the viewpoints we know, and the care we bring to every experience come from a genuine love of this place.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[480px] md:h-[560px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=1920&q=85"
          alt="Misty morning over Cape Breton highlands — the landscape we call home"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 h-full flex items-end pb-16 md:pb-20">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10 w-full">
            <span className="font-sans text-xs font-semibold tracking-[0.22em] uppercase text-champagne block mb-3">
              Our Story
            </span>
            <span className="divider-champagne mb-5" />
            <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight max-w-2xl">
              Cape Breton Is Our Home. We Would Love to Share It With You.
            </h1>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="section-pad bg-ivory">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=85"
                  alt="Scenic Cape Breton highland valley"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute -bottom-5 -right-5 w-full h-full border border-champagne/30 pointer-events-none" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <span className="font-sans text-xs font-semibold tracking-[0.22em] uppercase text-teal block mb-4">
                About New Scotland Coastal
              </span>
              <span className="divider-champagne mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl text-navy leading-tight mb-5">
                A Different Kind of Tour Company
              </h2>
              <div className="space-y-4 font-sans text-base md:text-lg text-muted leading-relaxed">
                <p>
                  New Scotland Coastal &amp; Cape Breton Tours was founded with a simple belief: that the best way to experience Cape Breton is privately, at your own pace, in the company of someone who genuinely loves the island.
                </p>
                <p>
                  Cape Breton is not a destination you rush through. The Cabot Trail rewards those who stop. The Bras d&apos;Or Lake holds a particular magic in early morning light. The Fortress of Louisbourg is best explored without a crowd at your heels. We are here to give you that unhurried, personal experience.
                </p>
                <p>
                  Every tour we offer is private — your group, your vehicle, your day. We also handle practical transport needs, from airport arrivals to cruise-ship excursions, with the same personal attention.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-navy-deep">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <ScrollReveal className="mb-14">
            <SectionHeader
              eyebrow="What We Stand For"
              heading="Our Guiding Principles"
              light
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 80}>
                <div className="border border-white/10 p-8 hover:border-champagne/30 transition-colors duration-400">
                  <span className="divider-champagne mb-5" />
                  <h3 className="font-serif text-xl md:text-2xl text-white mb-3">{v.title}</h3>
                  <p className="font-sans text-sm md:text-base text-white/60 leading-relaxed">{v.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cape Breton region overview */}
      <section className="section-pad bg-ivory">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <span className="font-sans text-xs font-semibold tracking-[0.22em] uppercase text-teal block mb-4">
                The Region
              </span>
              <span className="divider-champagne mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl text-navy leading-tight mb-5">
                Cape Breton Island, Nova Scotia
              </h2>
              <div className="space-y-4 font-sans text-base text-muted leading-relaxed">
                <p>
                  Cape Breton is an island of extraordinary contrasts — rugged Atlantic cliffs rising from deep sea, highland plateaus sweeping down to sheltered inlets, and the vast Bras d&apos;Or Lake sitting like an inland ocean at the island&apos;s heart.
                </p>
                <p>
                  The Cabot Trail — one of the most celebrated coastal drives in the world — circles the island&apos;s northern reaches through Cape Breton Highlands National Park. To the south, the Fortress of Louisbourg stands as one of North America&apos;s great living history sites. Baddeck, on the shores of the Bras d&apos;Or, was home to Alexander Graham Bell and retains a civilised, unhurried character that draws visitors back year after year.
                </p>
                <p>
                  This is the landscape we work within every day. We know its seasons, its light, its hidden viewpoints, and its stories. We are ready to share all of it with you.
                </p>
              </div>
              <div className="mt-8 flex gap-4 flex-wrap">
                <Link href="/tours" className="btn-outline-navy inline-flex">Explore Tours</Link>
                <Link href="/contact" className="btn-primary">Plan Your Trip</Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
                  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
                  "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&q=80",
                  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
                ].map((src, i) => (
                  <div key={i} className="relative aspect-square overflow-hidden">
                    <Image
                      src={src}
                      alt={`Cape Breton landscape ${i + 1}`}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="bg-teal py-12 px-6">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-white">Questions? We would love to hear from you.</h2>
            <p className="font-sans text-sm text-white/75 mt-1">Reach out via email or phone — every message is answered personally.</p>
          </div>
          <div className="flex gap-4 flex-wrap flex-shrink-0">
            <a href="mailto:newscotlandcapetours@gmail.com" className="btn-primary">
              Send an Email
            </a>
            <a href="tel:+19025494542" className="btn-outline">
              +1 (902) 549-4542
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
