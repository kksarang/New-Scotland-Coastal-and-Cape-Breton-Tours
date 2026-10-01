import SectionHeader from "@/components/ui/SectionHeader";
import FaqAccordion from "@/components/ui/FaqAccordion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const FAQ_ITEMS = [
  {
    question: "Are all tours completely private?",
    answer:
      "Yes. Every tour we offer is private — your vehicle and guide are exclusively for your group. You will never share a tour with strangers.",
  },
  {
    question: "Do you offer airport and cruise-ship transfers?",
    answer:
      "We accept enquiries for airport arrivals/departures and cruise-ship excursions. These services are subject to availability confirmation. Please send an enquiry with your details and we will respond personally.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend sending an enquiry as early as possible, particularly for peak summer dates. We will always do our best to accommodate last-minute requests — simply reach out and we will confirm what is available.",
  },
  {
    question: "Can I customise the tour route?",
    answer:
      "Absolutely. All of our tours can be adjusted to your interests. Share your preferences in the enquiry form and we will tailor the itinerary for you. We also offer fully custom tours for those who prefer complete flexibility.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Our cancellation terms will be confirmed when we respond to your enquiry. We are happy to discuss any concerns about flexibility in advance.",
  },
  {
    question: "Do you accommodate travellers with accessibility requirements?",
    answer:
      "We encourage anyone with accessibility requirements to include them in their enquiry. We will do our best to accommodate every guest and will be transparent about what is and is not possible for each experience.",
  },
  {
    question: "What should I expect after sending an enquiry?",
    answer:
      "We review every enquiry personally and aim to respond as quickly as possible with availability, pricing, and any relevant details. There is no automated booking — every response comes directly from us.",
  },
];

export default function HomeFAQ() {
  return (
    <section className="section-pad bg-ivory-warm">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Questions & Answers"
              heading="Frequently Asked Questions"
              body="Everything you need to know before reaching out."
              align="left"
            />
          </ScrollReveal>

          <ScrollReveal delay={100} className="lg:col-span-2">
            <FaqAccordion items={FAQ_ITEMS} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
