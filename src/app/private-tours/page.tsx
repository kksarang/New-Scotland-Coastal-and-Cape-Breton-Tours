import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import EnquiryForm from "@/components/forms/EnquiryForm";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Private Tours & Transport",
  description:
    "Bespoke private sightseeing tours, airport transfers, and cruise-port excursions across Cape Breton and Nova Scotia. All services subject to availability confirmation.",
  alternates: { canonical: "/private-tours" },
};

const SERVICES = [
  {
    title: "Private Sightseeing",
    body: "Design your perfect Cape Breton day — your destinations, your pace, your guide. Whether you want to trace the Cabot Trail in full, focus on a single breathtaking stretch of coast, or combine cultural and natural highlights, we will build the itinerary around you.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    value: "private-sightseeing",
  },
  {
    title: "Airport Transfers",
    body: "Travel from J.A. Douglas McCurdy Sydney Airport, Halifax Stanfield International, or other regional airports to your accommodation in comfort. Subject to availability — please include your flight details in your enquiry.",
    image: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80",
    value: "airport-transfer",
  },
  {
    title: "Cruise Port Excursions",
    body: "Make the most of your time ashore. We accept enquiries for private excursions from the Sydney Marine Terminal and other regional ports. All excursions are subject to availability and we cannot guarantee return-to-ship times — we will discuss timing openly with you in advance.",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    value: "cruise-excursion",
  },
];

const PRIVATE_FAQS = [
  {
    question: "What does 'private' mean?",
    answer:
      "Your vehicle and guide are exclusively for your party. You will never be placed on a shared tour with other travellers.",
  },
  {
    question: "Can you accommodate special occasions?",
    answer:
      "Absolutely. Anniversary drives, proposal settings, birthday experiences — please mention any special occasion in your enquiry and we will do everything possible to make it extraordinary.",
  },
  {
    question: "What vehicle types are available?",
    answer:
      "Vehicle capacity and specifications will be confirmed when we respond to your enquiry. Please include your group size and any luggage requirements so we can match you with the most suitable option.",
  },
  {
    question: "Do you offer multi-day itineraries?",
    answer:
      "Yes — we can arrange multi-day private experiences across Cape Breton and Nova Scotia. Include your preferred dates and interests in your enquiry and we will put together a proposal.",
  },
  {
    question: "Are cruise-port excursions guaranteed to be back in time?",
    answer:
      "We take departure times extremely seriously and work to ensure you are back with ample time. However, we cannot guarantee return times due to factors outside our control. We will discuss all timing considerations transparently when you enquire.",
  },
];

export default function PrivateToursPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[480px] md:h-[560px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=85"
          alt="Private coastal road through Cape Breton forest"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 h-full flex items-end pb-16 md:pb-20">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10 w-full">
            <span className="font-sans text-xs font-semibold tracking-[0.22em] uppercase text-champagne block mb-3">
              Entirely Private
            </span>
            <span className="divider-champagne mb-5" />
            <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight">
              Private Tours &amp;<br />Transport
            </h1>
            <p className="font-sans text-base md:text-xl text-white/75 mt-3 max-w-xl">
              Bespoke experiences, comfortable transfers, and unhurried coastal sightseeing — entirely for your group.
            </p>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="section-pad bg-ivory">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <ScrollReveal className="mb-14">
            <SectionHeader
              eyebrow="Our Services"
              heading="Travel Cape Breton on Your Terms"
              body="From bespoke sightseeing to practical transport — every service is private, personal, and confirmed by response to your enquiry."
            />
          </ScrollReveal>

          <div className="space-y-14 lg:space-y-20">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 80}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  <div className={`relative aspect-[4/3] overflow-hidden ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="divider-champagne mb-5" />
                    <h2 className="font-serif text-3xl md:text-4xl text-navy mb-4">{service.title}</h2>
                    <p className="font-sans text-base md:text-lg text-muted leading-relaxed mb-7">
                      {service.body}
                    </p>
                    <Link
                      href={`/contact?tour=${service.value}`}
                      className="btn-outline-navy inline-flex"
                    >
                      Enquire About This Service
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section className="section-pad bg-navy-deep" id="enquire">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ScrollReveal>
              <span className="font-sans text-xs font-semibold tracking-[0.22em] uppercase text-champagne block mb-4">
                Send an Enquiry
              </span>
              <span className="divider-champagne mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-5">
                Tell Us What You Have in Mind
              </h2>
              <p className="font-sans text-base md:text-lg text-white/65 leading-relaxed mb-8">
                Every enquiry receives a personal response. Share your travel dates, group size, and the kind of experience you are hoping for — we will reply with a tailored proposal.
              </p>
              <div className="space-y-4">
                {[
                  "All services are private — your group only",
                  "No payment required to enquire",
                  "We respond personally — no automated quotes",
                  "Airport and cruise services subject to confirmation",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-champagne flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="#07132a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="font-sans text-sm text-white/75 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="bg-ivory p-7 md:p-10">
                <Suspense>
                  <EnquiryForm prefilledTour="private-sightseeing" />
                </Suspense>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-pad bg-ivory-warm">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Questions"
                heading="Private Tour FAQs"
                body="Common questions about our private and transport services."
                align="left"
              />
            </ScrollReveal>
            <ScrollReveal delay={100} className="lg:col-span-2">
              <FaqAccordion items={PRIVATE_FAQS} />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
