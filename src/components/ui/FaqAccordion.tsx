"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  light?: boolean;
}

export default function FaqAccordion({ items, light = false }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  const questionColor = light ? "text-ivory" : "text-navy";
  const answerColor = light ? "text-ivory/75" : "text-muted";
  const iconColor = light ? "text-champagne" : "text-teal";

  return (
    <div className="divide-y divide-opacity-20" style={{ borderTop: `1px solid`, borderColor: light ? "rgba(255,255,255,0.2)" : "#e8e0d4" }}>
      {items.map((item, i) => (
        <div key={i} style={{ borderBottom: `1px solid`, borderColor: light ? "rgba(255,255,255,0.2)" : "#e8e0d4" }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className={`w-full flex items-start justify-between gap-4 py-5 text-left ${questionColor} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne`}
            aria-expanded={open === i}
          >
            <span className="font-serif text-base md:text-lg leading-snug">{item.question}</span>
            <span className={`flex-shrink-0 mt-0.5 transition-transform duration-300 ${iconColor} ${open === i ? "rotate-180" : ""}`}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
          <div
            hidden={open !== i}
            style={{
              maxHeight: open === i ? "400px" : "0",
              overflow: "hidden",
              transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            <p className={`font-sans text-sm md:text-base leading-relaxed pb-5 ${answerColor}`}>
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
