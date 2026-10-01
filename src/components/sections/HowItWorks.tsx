import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

const STEPS = [
  {
    number: "01",
    title: "Choose Your Experience",
    body: "Browse our curated tour catalogue or tell us your dream Cape Breton day. Private, cultural, coastal — or a combination of all three.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 14l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Send Your Preferences",
    body: "Share your travel dates, group size, pickup preference, and any special interests. Our simple enquiry form takes less than two minutes.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 10l10 7 10-7" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Receive Availability & Pricing",
    body: "We respond personally with availability, pricing, and a detailed proposal. No automated quotes — every enquiry gets our genuine attention.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4v8l5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="section-pad bg-navy">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <ScrollReveal className="mb-14">
          <SectionHeader
            eyebrow="Simple Process"
            heading="Planning Your Cape Breton Trip"
            body="No complex booking systems. Just a straightforward conversation and a personalised response."
            light
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 120}>
              <div className="relative flex flex-col gap-5 p-8 border border-white/10 hover:border-champagne/40 transition-colors duration-400">
                {/* Step number background */}
                <span className="font-serif text-7xl font-bold text-white/5 absolute top-4 right-5 select-none pointer-events-none leading-none">
                  {step.number}
                </span>
                <div className="text-champagne">{step.icon}</div>
                <div>
                  <span className="font-sans text-xs font-semibold tracking-widest uppercase text-champagne block mb-2">
                    Step {step.number}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-white mb-3">{step.title}</h3>
                  <p className="font-sans text-sm md:text-base text-white/65 leading-relaxed">{step.body}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact" className="btn-primary">
            Start Your Enquiry
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
