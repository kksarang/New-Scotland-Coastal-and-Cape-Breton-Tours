import { NextRequest, NextResponse } from "next/server";

interface EnquiryPayload {
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  tourInterest?: unknown;
  preferredDate?: unknown;
  guests?: unknown;
  pickupPreference?: unknown;
  message?: unknown;
}

// Simple in-memory rate limiter (per IP, resets on server restart)
const RATE_MAP = new Map<string, { count: number; windowStart: number }>();
const RATE_LIMIT = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = RATE_MAP.get(ip);
  if (!entry || now - entry.windowStart > WINDOW_MS) {
    RATE_MAP.set(ip, { count: 1, windowStart: now });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count += 1;
  return false;
}

function sanitize(v: unknown): string {
  if (typeof v !== "string") return "";
  return v.replace(/[\x00-\x09\x0b\x0c\x0e-\x1f\x7f]/g, "").trim().slice(0, 2000);
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ message: "Too many requests. Please try again later." }, { status: 429 });
  }

  let body: EnquiryPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const fullName = sanitize(body.fullName);
  const email = sanitize(body.email);
  const phone = sanitize(body.phone);
  const tourInterest = sanitize(body.tourInterest);
  const preferredDate = sanitize(body.preferredDate);
  const guests = sanitize(body.guests);
  const pickupPreference = sanitize(body.pickupPreference);
  const message = sanitize(body.message);

  // Validate required
  if (!fullName || !email || !tourInterest) {
    return NextResponse.json({ message: "Missing required fields." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: "Invalid email address." }, { status: 400 });
  }

  // Honeypot — if _hp field is present, silently drop
  // (added to form via hidden field in a future enhancement)

  // Email delivery — requires SMTP env vars
  const SMTP_HOST = process.env.SMTP_HOST;
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;
  const TO_EMAIL = process.env.ENQUIRY_TO_EMAIL ?? "newscotlandcapetours@gmail.com";

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    // No SMTP configured — return fallback signal to client
    return NextResponse.json(
      {
        fallback: true,
        message:
          "Email delivery is not configured on this server. Please use the mailto fallback.",
      },
      { status: 503 }
    );
  }

  try {
    // Dynamic import of nodemailer (optional dependency — add with: npm i nodemailer @types/nodemailer)
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const nodemailer = require("nodemailer") as typeof import("nodemailer");
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const html = `
      <h2>New Tour Enquiry — New Scotland Coastal</h2>
      <table cellpadding="6" style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
        <tr><th align="left">Name</th><td>${fullName}</td></tr>
        <tr><th align="left">Email</th><td><a href="mailto:${email}">${email}</a></td></tr>
        <tr><th align="left">Phone</th><td>${phone || "—"}</td></tr>
        <tr><th align="left">Tour / Service</th><td>${tourInterest}</td></tr>
        <tr><th align="left">Preferred Date</th><td>${preferredDate || "—"}</td></tr>
        <tr><th align="left">Guests</th><td>${guests || "—"}</td></tr>
        <tr><th align="left">Pickup Preference</th><td>${pickupPreference || "—"}</td></tr>
        <tr><th align="left" valign="top">Message</th><td>${message.replace(/\n/g, "<br>") || "—"}</td></tr>
      </table>
    `;

    await transporter.sendMail({
      from: `"New Scotland Coastal Website" <${SMTP_USER}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Tour Enquiry from ${fullName} — ${tourInterest}`,
      html,
      text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nTour: ${tourInterest}\nDate: ${preferredDate}\nGuests: ${guests}\nPickup: ${pickupPreference}\n\n${message}`,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Enquiry email error:", err);
    return NextResponse.json({ fallback: true, message: "Email delivery failed." }, { status: 503 });
  }
}
