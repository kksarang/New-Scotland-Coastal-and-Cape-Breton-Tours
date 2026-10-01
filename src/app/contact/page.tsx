import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Plan Your Trip — Contact",
  description:
    "Send a tour enquiry to New Scotland Coastal & Cape Breton Tours. We respond personally with availability, pricing, and a tailored proposal.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[420px] md:h-[500px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=85"
          alt="Bras d'Or Lake — the heart of Cape Breton"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 h-full flex items-end pb-16 md:pb-20">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10 w-full">
            <span className="font-sans text-xs font-semibold tracking-[0.22em] uppercase text-champagne block mb-3">
              Get in Touch
            </span>
            <span className="divider-champagne mb-5" />
            <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight">
              Plan Your Trip
            </h1>
            <p className="font-sans text-base md:text-xl text-white/75 mt-3 max-w-xl">
              Tell us your travel dates, interests, and group size. We will respond with a personal proposal.
            </p>
          </div>
        </div>
      </div>

      {/* Main section */}
      <section className="section-pad bg-ivory">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left: info */}
            <ScrollReveal className="lg:col-span-1">
              <div className="space-y-10">
                <div>
                  <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-teal block mb-3">
                    How It Works
                  </span>
                  <span className="divider-champagne mb-5" />
                  <div className="space-y-5">
                    {[
                      ["01", "Fill out the form with your travel details and any questions."],
                      ["02", "We review every enquiry personally and reply with availability and pricing."],
                      ["03", "Once confirmed, your Cape Breton adventure is arranged — no payment is taken at the enquiry stage."],
                    ].map(([num, text]) => (
                      <div key={num} className="flex gap-3">
                        <span className="font-serif text-xl text-champagne leading-none flex-shrink-0">{num}</span>
                        <p className="font-sans text-sm text-muted leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct contact */}
                <div>
                  <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-teal block mb-3">
                    Prefer Direct Contact?
                  </span>
                  <span className="divider-champagne mb-5" />
                  <div className="space-y-4">
                    <a
                      href={`tel:${SITE.phone}`}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-10 h-10 bg-navy flex items-center justify-center flex-shrink-0 group-hover:bg-teal transition-colors duration-300">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <path d="M3 3.5C3 10.956 7.044 15 14.5 15L15 14.5V11.5L12.5 11l-.5.5c-.5.5-1.5-.5-2.5-1.5S8 7.5 8.5 7l.5-.5L8.5 4H4.5L3 3.5z" stroke="white" strokeWidth="1.4" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-sans text-xs text-muted tracking-wider uppercase">Phone</p>
                        <p className="font-sans text-base font-semibold text-navy group-hover:text-teal transition-colors">
                          {SITE.phoneDisplay}
                        </p>
                      </div>
                    </a>

                    <a
                      href={`mailto:${SITE.email}`}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-10 h-10 bg-navy flex items-center justify-center flex-shrink-0 group-hover:bg-teal transition-colors duration-300">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="white" strokeWidth="1.4" />
                          <path d="M2 6l7 5 7-5" stroke="white" strokeWidth="1.4" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-sans text-xs text-muted tracking-wider uppercase">Email</p>
                        <p className="font-sans text-sm font-semibold text-navy group-hover:text-teal transition-colors break-all">
                          {SITE.email}
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-navy flex items-center justify-center flex-shrink-0">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <circle cx="9" cy="7" r="3" stroke="white" strokeWidth="1.4" />
                          <path d="M4 15c0-2.761 2.239-5 5-5s5 2.239 5 5" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-sans text-xs text-muted tracking-wider uppercase">Location</p>
                        <p className="font-sans text-sm text-navy">{SITE.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email fallback note */}
                <div className="bg-champagne-pale border border-champagne/30 p-5">
                  <p className="font-sans text-xs text-charcoal leading-relaxed">
                    <strong className="font-semibold">Note:</strong> If the enquiry form is unavailable, you can always reach us directly by email or phone. We respond to all enquiries personally.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: form */}
            <ScrollReveal delay={100} className="lg:col-span-2">
              <div>
                <SectionHeader
                  eyebrow="Enquiry Form"
                  heading="Send Your Enquiry"
                  body="No payment required. We will respond with a tailored proposal for your review."
                  align="left"
                />
                <div className="mt-8 bg-white border border-ivory-warm p-6 md:p-10">
                  <Suspense>
                    <EnquiryForm />
                  </Suspense>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bottom strip */}
      <div className="bg-navy py-10 px-6 text-center">
        <p className="font-sans text-sm text-white/60 max-w-xl mx-auto leading-relaxed">
          New Scotland Coastal &amp; Cape Breton Tours operates in Cape Breton Island, Nova Scotia, Canada. All tours and services are private and subject to availability confirmation. Pricing and itinerary details are provided in our personal response to your enquiry.
        </p>
      </div>
    </>
  );
}
