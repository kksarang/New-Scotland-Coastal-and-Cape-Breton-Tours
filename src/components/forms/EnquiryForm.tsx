"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { TOURS } from "@/lib/tours";
import { SITE } from "@/lib/config";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  tourInterest: string;
  preferredDate: string;
  guests: string;
  pickupPreference: string;
  message: string;
}

interface FieldErrors {
  fullName?: string;
  email?: string;
  tourInterest?: string;
  preferredDate?: string;
  guests?: string;
}

const INITIAL: FormData = {
  fullName: "",
  email: "",
  phone: "",
  tourInterest: "",
  preferredDate: "",
  guests: "",
  pickupPreference: "",
  message: "",
};

const TOUR_OPTIONS = [
  { value: "", label: "— Select a tour or service —" },
  ...TOURS.map((t) => ({ value: t.slug, label: t.title })),
  { value: "private-sightseeing", label: "Private Sightseeing Tour" },
  { value: "airport-transfer", label: "Airport Transfer (subject to availability)" },
  { value: "cruise-excursion", label: "Cruise Port Excursion (subject to availability)" },
  { value: "general", label: "General Enquiry" },
];

function validate(data: FormData): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.fullName.trim()) errors.fullName = "Please enter your name.";
  if (!data.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.tourInterest) errors.tourInterest = "Please select a tour or service.";
  if (data.guests && (isNaN(Number(data.guests)) || Number(data.guests) < 1)) {
    errors.guests = "Please enter a valid number of guests.";
  }
  if (data.preferredDate) {
    const d = new Date(data.preferredDate);
    if (isNaN(d.getTime()) || d < new Date()) {
      errors.preferredDate = "Please enter a future date.";
    }
  }
  return errors;
}

interface EnquiryFormProps {
  prefilledTour?: string;
  compact?: boolean;
}

export default function EnquiryForm({ prefilledTour, compact = false }: EnquiryFormProps) {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormData>({ ...INITIAL });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const tour = prefilledTour ?? searchParams.get("tour") ?? "";
    if (tour) {
      setForm((f) => ({ ...f, tourInterest: tour }));
    }
    const guests = searchParams.get("guests") ?? "";
    const date = searchParams.get("date") ?? "";
    if (guests) setForm((f) => ({ ...f, guests }));
    if (date) setForm((f) => ({ ...f, preferredDate: date }));
  }, [prefilledTour, searchParams]);

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field as keyof FieldErrors]) {
      setErrors((er) => ({ ...er, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm(INITIAL);
      } else {
        const data = await res.json().catch(() => ({}));
        if (data.fallback) {
          // Server unavailable — open mailto fallback
          const subject = encodeURIComponent("Tour Enquiry — New Scotland Coastal");
          const body = encodeURIComponent(
            `Name: ${form.fullName}\nEmail: ${form.email}\nPhone: ${form.phone}\nTour: ${form.tourInterest}\nDate: ${form.preferredDate}\nGuests: ${form.guests}\nPickup: ${form.pickupPreference}\n\n${form.message}`
          );
          window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
        } else {
          setStatus("error");
          setErrorMsg(data.message ?? "Something went wrong. Please try again.");
        }
      }
    } catch {
      // Network error — open mailto fallback
      const subject = encodeURIComponent("Tour Enquiry — New Scotland Coastal");
      const body = encodeURIComponent(
        `Name: ${form.fullName}\nEmail: ${form.email}\nPhone: ${form.phone}\nTour: ${form.tourInterest}\nDate: ${form.preferredDate}\nGuests: ${form.guests}\nPickup: ${form.pickupPreference}\n\n${form.message}`
      );
      window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    }
  };

  if (status === "success") {
    return (
      <div className="bg-teal-pale border border-teal/30 p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-teal flex items-center justify-center mx-auto mb-4">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M5 11l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-serif text-xl text-navy mb-2">Enquiry Received</h3>
        <p className="font-sans text-sm text-muted leading-relaxed">
          Thank you for reaching out. We will review your request and respond with availability and pricing as soon as possible.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 font-sans text-xs font-semibold tracking-widest uppercase text-teal hover:text-navy transition-colors"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  const inputClass = (field?: string) =>
    `form-input ${field && errors[field as keyof FieldErrors] ? "error" : ""}`;

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Tour enquiry form">
      <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
        {/* Full Name */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs font-semibold tracking-wider uppercase text-navy" htmlFor="fullName">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            value={form.fullName}
            onChange={set("fullName")}
            className={inputClass("fullName")}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
          {errors.fullName && <p id="fullName-error" className="font-sans text-xs text-red-600">{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs font-semibold tracking-wider uppercase text-navy" htmlFor="email">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={set("email")}
            className={inputClass("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && <p id="email-error" className="font-sans text-xs text-red-600">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs font-semibold tracking-wider uppercase text-navy" htmlFor="phone">
            Phone <span className="font-normal normal-case text-muted">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 (000) 000-0000"
            value={form.phone}
            onChange={set("phone")}
            className={inputClass()}
          />
        </div>

        {/* Tour Interest */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs font-semibold tracking-wider uppercase text-navy" htmlFor="tourInterest">
            Tour / Service <span className="text-red-500">*</span>
          </label>
          <select
            id="tourInterest"
            value={form.tourInterest}
            onChange={set("tourInterest")}
            className={`${inputClass("tourInterest")} bg-white`}
            aria-invalid={!!errors.tourInterest}
            aria-describedby={errors.tourInterest ? "tour-error" : undefined}
          >
            {TOUR_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          {errors.tourInterest && <p id="tour-error" className="font-sans text-xs text-red-600">{errors.tourInterest}</p>}
        </div>

        {/* Date */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs font-semibold tracking-wider uppercase text-navy" htmlFor="preferredDate">
            Preferred Date
          </label>
          <input
            id="preferredDate"
            type="date"
            value={form.preferredDate}
            onChange={set("preferredDate")}
            className={inputClass("preferredDate")}
            aria-invalid={!!errors.preferredDate}
            aria-describedby={errors.preferredDate ? "date-error" : undefined}
          />
          {errors.preferredDate && <p id="date-error" className="font-sans text-xs text-red-600">{errors.preferredDate}</p>}
        </div>

        {/* Guests */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs font-semibold tracking-wider uppercase text-navy" htmlFor="guests">
            Number of Guests
          </label>
          <input
            id="guests"
            type="number"
            min="1"
            placeholder="e.g. 2"
            value={form.guests}
            onChange={set("guests")}
            className={inputClass("guests")}
            aria-invalid={!!errors.guests}
            aria-describedby={errors.guests ? "guests-error" : undefined}
          />
          {errors.guests && <p id="guests-error" className="font-sans text-xs text-red-600">{errors.guests}</p>}
        </div>

        {/* Pickup Preference */}
        <div className={`flex flex-col gap-1.5 ${compact ? "" : "md:col-span-2"}`}>
          <label className="font-sans text-xs font-semibold tracking-wider uppercase text-navy" htmlFor="pickup">
            Pickup Preference
          </label>
          <input
            id="pickup"
            type="text"
            placeholder="Hotel name, area, or cruise ship terminal"
            value={form.pickupPreference}
            onChange={set("pickupPreference")}
            className={inputClass()}
          />
        </div>

        {/* Message */}
        <div className={`flex flex-col gap-1.5 ${compact ? "" : "md:col-span-2"}`}>
          <label className="font-sans text-xs font-semibold tracking-wider uppercase text-navy" htmlFor="message">
            Message / Special Requests
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Tell us about your travel interests, accessibility needs, or any special occasions..."
            value={form.message}
            onChange={set("message")}
            className={`${inputClass()} resize-none`}
          />
        </div>
      </div>

      {status === "error" && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200">
          <p className="font-sans text-sm text-red-700">{errorMsg}</p>
        </div>
      )}

      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending…
            </>
          ) : (
            "Send Enquiry"
          )}
        </button>
        <p className="font-sans text-xs text-muted leading-relaxed">
          No payment required. We will respond with availability and pricing.
        </p>
      </div>
    </form>
  );
}
