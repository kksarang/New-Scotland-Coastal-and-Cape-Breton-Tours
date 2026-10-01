export interface EnquiryData {
  fullName: string;
  email: string;
  phone: string;
  tourInterest: string;
  preferredDate: string;
  guests: string;
  pickupPreference: string;
  message: string;
  website: string;
}
export type EnquiryErrors = Partial<Record<keyof EnquiryData, string>>;
export const EMPTY_ENQUIRY: EnquiryData = {fullName: '', email: '', phone: '', tourInterest: '', preferredDate: '', guests: '2', pickupPreference: '', message: '', website: ''};
export function localDate() {
  const now = new Date();
  return [now.getFullYear(), String(now.getMonth()+1).padStart(2,'0'), String(now.getDate()).padStart(2,'0')].join('-');
}
export function validateEnquiry(data: EnquiryData, today = localDate()): EnquiryErrors {
  const errors: EnquiryErrors = {};
  if (!data.fullName.trim() || data.fullName.length > 100) errors.fullName = 'Enter your name (up to 100 characters).';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()) || data.email.length > 254) errors.email = 'Enter a valid email address.';
  if (!data.tourInterest || data.tourInterest.length > 150) errors.tourInterest = 'Choose a tour or service.';
  const guests = Number(data.guests);
  if (!Number.isInteger(guests) || guests < 1 || guests > 50) errors.guests = 'Choose a whole number between 1 and 50.';
  if (data.preferredDate) {
    const parsed = new Date(data.preferredDate + 'T12:00:00Z');
    if (!/^\d{4}-\d{2}-\d{2}$/.test(data.preferredDate) || Number.isNaN(parsed.getTime()) || parsed.toISOString().slice(0,10) !== data.preferredDate || data.preferredDate < today) errors.preferredDate = 'Choose today or a future date.';
  }
  if (data.phone.length > 40) errors.phone = 'Use 40 characters or fewer.';
  if (data.pickupPreference.length > 250) errors.pickupPreference = 'Use 250 characters or fewer.';
  if (data.message.length > 4000) errors.message = 'Use 4,000 characters or fewer.';
  return errors;
}
export function enquiryText(data: EnquiryData, title: string) {
  return ['New Cape Breton tour enquiry', '', 'Name: '+data.fullName, 'Email: '+data.email, 'Phone: '+(data.phone || 'Not provided'), 'Experience: '+title, 'Date: '+(data.preferredDate || 'Flexible'), 'Travellers: '+data.guests, 'Pickup: '+(data.pickupPreference || 'To be arranged'), '', data.message].join('\n');
}
export function formEndpoint(value: string | undefined) {
  if (!value) return null;
  try {
    const url = new URL(value);
    // Only an explicitly configured HTTPS endpoint can receive enquiry data.
    return url.protocol === 'https:' && !url.username && !url.password ? url.href : null;
  } catch { return null; }
}
export async function deliverEnquiry(endpoint: string, payload: Record<string,string>, fetcher: typeof fetch = fetch) {
  const response = await fetcher(endpoint, {
    method: 'POST', headers: {'Content-Type':'application/json', Accept:'application/json'},
    body: JSON.stringify(payload), signal: AbortSignal.timeout(20000),
  });
  const result = await response.json().catch(() => null);
  // Never treat an HTML page, mailto draft or unacknowledged response as delivery.
  const provider = new URL(endpoint);
  const formspreeAccepted = provider.hostname === 'formspree.io' && /^\/f\/[a-zA-Z0-9]+$/.test(provider.pathname) && result && typeof result === 'object' && !result.errors && result.ok !== false;
  if (!response.ok || (!formspreeAccepted && result?.ok !== true)) throw new Error(response.status === 429 ? 'Too many attempts. Please wait a little before trying again.' : 'We could not confirm your request was sent. Your details are saved below; you can retry or email us directly.');
}
