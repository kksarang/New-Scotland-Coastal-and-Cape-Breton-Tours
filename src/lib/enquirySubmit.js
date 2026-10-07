import {business, whatsappNumber} from '../data/business';
import {track} from './analytics';

export const formspreeFormId = (import.meta.env.VITE_FORMSPREE_FORM_ID || '').trim();

export function isEnquirySubmitConfigured() {
  return Boolean(formspreeFormId);
}

export function normalizeVisitorEmail(value) {
  return String(value || '').trim().toLowerCase();
}

/** Human-readable summary for email body and optional follow-up channels. */
export function formatEnquirySummary(entries) {
  return Object.entries(entries)
    .filter(([, value]) => value !== undefined && value !== null && String(value).trim() !== '')
    .map(([key, value]) => key.replaceAll('_', ' ') + ': ' + value)
    .join('\n');
}

export function alternativeContactLinks(subject = 'Website enquiry follow-up') {
  const short =
    'Hello ' +
    business.name +
    ', I just submitted an enquiry on your website and would like to follow up if needed.';
  return {
    whatsapp: 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(short),
    sms: 'sms:' + business.tel + '?&body=' + encodeURIComponent(short),
    mailto: 'mailto:' + business.email + '?subject=' + encodeURIComponent(subject),
  };
}

const USER_MESSAGES = {
  missing_config:
    'Online enquiry delivery is not set up on this site yet. Please call, text or WhatsApp us instead.',
  network: 'We could not reach the enquiry service. Check your connection and try again, or contact us by phone.',
  timeout: 'The enquiry service took too long to respond. Please try again in a moment or contact us directly.',
  rate_limit: 'Too many enquiries were sent in a short time. Please wait a few minutes or contact us by phone.',
  validation: 'Some details could not be accepted. Please check the highlighted fields and try again.',
  server: 'Something went wrong while sending your enquiry. Please try again or contact us directly.',
};

function userMessageFor(code, providerDetail) {
  if (code === 'validation' && providerDetail) return providerDetail;
  return USER_MESSAGES[code] || USER_MESSAGES.server;
}

/**
 * POST JSON to Formspree. `payload` must include lowercase `email` for Reply-To.
 * Never include secrets or recipient override fields controlled by the visitor.
 */
export async function submitEnquiryToProvider(payload) {
  if (!formspreeFormId) {
    return {ok: false, code: 'missing_config', message: USER_MESSAGES.missing_config};
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000);

  try {
    const response = await fetch('https://formspree.io/f/' + encodeURIComponent(formspreeFormId), {
      method: 'POST',
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({_replyto: payload.email, ...payload}),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    let body = {};
    try {
      body = await response.json();
    } catch {
      body = {};
    }

    if (response.ok) {
      return {ok: true};
    }

    if (response.status === 429) {
      return {ok: false, code: 'rate_limit', message: USER_MESSAGES.rate_limit};
    }
    if (response.status === 422) {
      const detail =
        typeof body.error === 'string'
          ? body.error
          : Array.isArray(body.errors)
            ? body.errors.map(e => e.message || e).join(' ')
            : '';
      return {ok: false, code: 'validation', message: userMessageFor('validation', detail)};
    }

    return {ok: false, code: 'server', message: USER_MESSAGES.server};
  } catch (error) {
    clearTimeout(timeoutId);
    if (error?.name === 'AbortError') {
      return {ok: false, code: 'timeout', message: USER_MESSAGES.timeout};
    }
    return {ok: false, code: 'network', message: USER_MESSAGES.network};
  }
}

export function trackEnquiryAttempt(meta) {
  track('enquiry_submit_attempt', meta);
}

export function trackEnquiryError(meta) {
  track('enquiry_submit_error', meta);
}

export function trackEnquiryAccepted({form, service, tourSlug, cruise}) {
  const event = cruise ? 'cruise_inquiry_submit' : 'quote_submit';
  track(event, {form, service: service || '', tour: tourSlug || ''});
}

export function buildBookingEnquiryPayload({
  formData,
  tourTitle,
  tourSlug,
  service,
  estimatedTotalLabel,
  sourcePage,
}) {
  const email = normalizeVisitorEmail(formData.Email);
  const summaryEntries = {
    Service: formData.Service,
    Tour: tourTitle || formData.Tour || 'Tailored itinerary / no tour selected',
    Date: formData.date,
    Pickup_time: formData.Pickup_time,
    Guests: formData.Guests,
    Pickup_location: formData.Pickup_location,
    Destination: formData.Destination,
    Cruise_ship: formData.Cruise_ship,
    Ship_arrival_time: formData.Ship_arrival_time,
    All_aboard_time: formData.All_aboard_time,
    Flight_number: formData.Flight_number,
    Notes: formData.Notes,
    Estimated_total: estimatedTotalLabel,
    Full_name: formData.Full_name,
    Email: email,
    Phone: formData.Phone,
  };

  const message =
    'Hello ' +
    business.name +
    ', I would like to enquire about:\n\n' +
    formatEnquirySummary(summaryEntries);

  return {
    email,
    name: formData.Full_name,
    phone: formData.Phone,
    service: formData.Service,
    tour: tourTitle || formData.Tour || '',
    tour_slug: tourSlug || formData.Tour || '',
    date: formData.date,
    pickup_time: formData.Pickup_time || '',
    pickup_location: formData.Pickup_location,
    destination: formData.Destination || '',
    guests: formData.Guests,
    cruise_ship: formData.Cruise_ship || '',
    ship_arrival_time: formData.Ship_arrival_time || '',
    all_aboard_time: formData.All_aboard_time || '',
    flight_number: formData.Flight_number || '',
    notes: formData.Notes || '',
    price_estimate: estimatedTotalLabel,
    source_page: sourcePage,
    form: 'booking',
    _subject: business.name + ' — booking enquiry (' + formData.Service + ')',
    message,
  };
}

export function buildInquiryFormPayload({formData, mode, tourSlug, sourcePage}) {
  const email = normalizeVisitorEmail(formData.Email);
  const cruise =
    mode === 'cruise' ||
    Boolean(formData.Cruise_ship || formData.All_aboard_time || formData.Ship_arrival_time);

  const summaryEntries = {...formData, Email: email};
  delete summaryEntries.website;

  const message =
    `Hello ${business.name},\n\nI would like to enquire about: ${formData.Service}\n\n` +
    formatEnquirySummary(
      Object.fromEntries(Object.entries(summaryEntries).filter(([key]) => key !== 'Service'))
    ) +
    '\n\nCould you please confirm availability and pricing?';

  return {
    email,
    name: formData.Name,
    phone: formData.Phone,
    service: formData.Service,
    tour: formData.Tour || '',
    tour_slug: tourSlug || '',
    date: formData.Date,
    guests: formData.Guests,
    pickup_location: formData.Pickup_location || '',
    pickup_time: formData.Pickup_time || '',
    destination: formData.Destination || '',
    flight_number: formData.Flight_number || '',
    arrival_time: formData.Arrival_time || '',
    cruise_ship: formData.Cruise_ship || '',
    ship_arrival_time: formData.Ship_arrival_time || '',
    all_aboard_time: formData.All_aboard_time || '',
    mobility_requirements: formData.Mobility_requirements || '',
    visitor_message: formData.Message || '',
    source_page: sourcePage,
    form: mode,
    _subject: business.name + ' — enquiry (' + (formData.Service || mode) + ')',
    message,
    _cruise: cruise ? 'yes' : 'no',
  };
}
