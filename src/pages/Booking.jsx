import {useRef, useState, useCallback} from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import {ArrowLeft, ArrowRight, CalendarDays, Check, CheckCircle2, Compass, Loader2, Mail, MapPin, MessageCircle, MessageSquareText, Phone, UserRound} from 'lucide-react';
import {business, whatsapp, sms} from '../data/business';
import {tours} from '../data/tours';
import {track} from '../lib/analytics';
import {buildBookingEnquiryPayload, isEnquirySubmitConfigured} from '../lib/enquirySubmit';
import {useEnquirySubmit} from '../hooks/useEnquirySubmit';
import {calculatePrice, initialGuests, localToday, money, packageRates, rateLabel} from '../data/pricing';
import TripPrice, {GuestControl} from '../components/TripPrice';
import Scene from '../components/Scene';
import './booking.css';

const services = ['Cape Breton Tour', 'Taxi Service', 'Airport Transfer', 'Cruise Pickup', 'Private Tour', 'Other'];
const serviceMap = {'Airport transfers':'Airport Transfer','Cruise port pickup':'Cruise Pickup','Hotel transportation':'Taxi Service','Local taxi service':'Taxi Service','Long-distance rides':'Taxi Service','Private transportation':'Private Tour','Tour transportation':'Cape Breton Tour','Custom transfers':'Other'};

export default function Booking({embedded = false}) {
  const Heading = embedded ? 'h2' : 'h1';
  const started = useRef(false);
  const [params] = useSearchParams();
  const requestedService = serviceMap[params.get('service')] || params.get('service');
  const [service, setService] = useState(services.includes(requestedService) ? requestedService : services[0]);
  const [slug, setSlug] = useState(tours.some(t => t.slug === params.get('tour')) ? params.get('tour') : '');
  const [guests, setGuests] = useState(initialGuests(params.get('guests')));
  const [date, setDate] = useState(params.get('date') || '');
  const today = localToday();
  const tourService = ['Cape Breton Tour', 'Private Tour', 'Cruise Pickup'].includes(service);
  const tour = tourService ? tours.find(t => t.slug === slug) : null;
  const total = calculatePrice(packageRates[tour?.slug], guests);

  const getAnalyticsMeta = useCallback(
    () => ({
      form: 'booking',
      service,
      tourSlug: tour?.slug || '',
      cruise: service === 'Cruise Pickup',
    }),
    [service, tour?.slug]
  );

  const {phase, errorMessage, alternatives, statusRef, reset, send, isSubmitting} = useEnquirySubmit({
    formKey: 'booking',
    getAnalyticsMeta,
  });

  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.elements.date.value < localToday()) {
      form.elements.date.setCustomValidity('Please choose today or a future date.');
      form.elements.date.reportValidity();
      return;
    }
    const guestCount = Number(guests);
    if (!Number.isInteger(guestCount) || guestCount < 1 || guestCount > 50) {
      form.reportValidity?.();
      return;
    }

    const estimatedTotalLabel =
      total === null ? 'Quote requested' : money(total) + ' — subject to confirmation; taxes and admission to be confirmed';

    await send(() => {
      const formData = Object.fromEntries(new FormData(form));
      formData.Guests = String(guests);
      if (tour && !formData.Destination) formData.Destination = tour.title;
      return buildBookingEnquiryPayload({
        formData,
        tourTitle: tour?.title,
        tourSlug: tour?.slug,
        service,
        estimatedTotalLabel,
        sourcePage: typeof location !== 'undefined' ? location.pathname : '/book/',
      });
    });
  }

  const configured = isEnquirySubmitConfigured();

  return <div className="booking-experience">
    <div className="wrap booking-shell">
      {!embedded && <Link to={tour ? tour.path : '/cape-breton-tours/'} className="booking-back"><ArrowLeft size={16}/>Back to experiences</Link>}
      <header className="booking-heading"><div><span className="booking-kicker">A LITTLE PLANNING. A GREAT ADVENTURE.</span><Heading>Make it your kind of journey.</Heading><p>The scenic route starts here. Share your plans and we’ll take care of the details.</p></div><span className="booking-reassurance"><CheckCircle2 size={18}/>No payment required</span></header>
      <div className="booking-layout">
        <form id="trip-details" className="booking-form" onSubmit={submit} onChange={() => { if (phase !== 'submitting') reset(); }} onFocus={() => { if (!started.current) { started.current = true; track('quote_start', {form: 'booking'}); } }}>
          <section className="booking-section" aria-labelledby="experience-heading">
            <div className="booking-section-heading"><span><Compass size={21}/></span><div><small>01 / YOUR EXPERIENCE</small><h2 id="experience-heading">Where will your story begin?</h2></div></div>
            <div className="booking-fields">
              <label className="field-wide">Service type<select name="Service" value={service} onChange={e => setService(e.target.value)}>{services.map(value => <option key={value}>{value}</option>)}</select></label>
              {tourService && <label className="field-wide">Choose your package<select name="Tour" value={slug} onChange={e => setSlug(e.target.value)}><option value="">Help me choose an experience</option>{tours.map(t => <option key={t.slug} value={t.slug}>{t.title} — {rateLabel(t.slug)}</option>)}</select></label>}
              <label>Travel date <span aria-hidden="true">*</span><input name="date" type="date" min={today} required value={date} onChange={e => {e.target.setCustomValidity(''); setDate(e.target.value);}}/></label>
              <label>Pickup time <span className="field-optional">optional</span><input name="Pickup_time" type="time"/></label>
            </div>
            <GuestControl value={guests} onChange={value => {setGuests(value); if (phase !== 'submitting') reset();}}/>
            <p className="field-hint">Include all adults and children. We’ll confirm vehicle capacity for your group.</p>
            <div className="mobile-trip-price"><TripPrice slug={tour?.slug} guests={guests}/></div>
          </section>
          <section className="booking-section" aria-labelledby="pickup-heading">
            <div className="booking-section-heading"><span><MapPin size={21}/></span><div><small>02 / THE MEETING POINT</small><h2 id="pickup-heading">Let’s meet you along the way.</h2></div></div>
            <div className="booking-fields">
              <label className="field-wide">Pickup location <span aria-hidden="true">*</span><input name="Pickup_location" required maxLength="200" defaultValue={params.get('pickup') || ''} placeholder="Hotel, airport, cruise terminal or address"/></label>
              {!tour && <label className="field-wide">Where would you like to go? <span aria-hidden="true">*</span><input name="Destination" required maxLength="200" placeholder="Destination or places you’d love to explore"/></label>}
              {service === 'Cruise Pickup' && <>
                <label className="field-wide">Cruise ship name <span aria-hidden="true">*</span><input name="Cruise_ship" required maxLength="100"/></label>
                <label>Time ashore (arrival) <span className="field-optional">optional</span><input name="Ship_arrival_time" type="time"/></label>
                <label>All-aboard / departure time <span aria-hidden="true">*</span><input name="All_aboard_time" type="time" required/></label>
              </>}
              {service === 'Airport Transfer' && <label className="field-wide">Flight number <span className="field-optional">optional</span><input name="Flight_number" maxLength="20"/></label>}
              <label className="field-wide">Anything we should know? <span className="field-optional">optional</span><textarea name="Notes" rows="3" maxLength="2500" defaultValue={params.get('notes') || ''} placeholder="Flight or ship details, children, luggage, accessibility needs, special stops…"/></label>
            </div>
          </section>
          <section className="booking-section" aria-labelledby="contact-heading">
            <div className="booking-section-heading"><span><UserRound size={21}/></span><div><small>03 / A WARM HELLO</small><h2 id="contact-heading">How can we reach you?</h2></div></div>
            <div className="booking-fields">
              <label className="field-wide">Full name <span aria-hidden="true">*</span><input name="Full_name" required autoComplete="name" maxLength="100" placeholder="Your first and last name"/></label>
              <label>Email address <span aria-hidden="true">*</span><input name="Email" type="email" required autoComplete="email" maxLength="150" placeholder="you@example.com"/></label>
              <label>Phone number <span aria-hidden="true">*</span><input name="Phone" type="tel" required autoComplete="tel" minLength="7" maxLength="30" placeholder="Include country code"/></label>
            </div>
          </section>
          <div className="booking-submit">
            <p>Fields marked * are required. <strong>Send enquiry</strong> submits your request to {business.name}; it is not a confirmed booking until we reply. You can also reach us on WhatsApp, text or phone.</p>
            {!configured && phase !== 'success' && <p className="form-config-warning" role="status">Online enquiry delivery is not configured on this build. Use WhatsApp, text or call below until the site is updated.</p>}
            <button className="button navy" type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
              {isSubmitting ? <><Loader2 size={18} className="spin"/>Sending enquiry…</> : <>Send enquiry<ArrowRight size={18}/></>}
            </button>
            <span><Check size={15}/>No charge. No commitment. Just a great place to start.</span>
          </div>
          {phase === 'error' && <section className="booking-prepared booking-feedback booking-feedback-error" tabIndex="-1" ref={statusRef} role="alert" aria-labelledby="booking-error-heading"><h2 id="booking-error-heading">We couldn’t send your enquiry</h2><p>{errorMessage}</p><div className="actions"><a className="button navy" href={whatsapp()} target="_blank" rel="noreferrer"><MessageCircle size={18}/>WhatsApp (opens app)</a><a className="text-link" href={sms()}><MessageSquareText size={17}/>Text message (opens app)</a><a className="text-link" href={'tel:' + business.tel}><Phone size={17}/>Call us</a></div></section>}
          {phase === 'success' && alternatives && <section className="booking-prepared booking-feedback" tabIndex="-1" ref={statusRef} role="status" aria-labelledby="prepared-heading"><CheckCircle2 size={30}/><h2 id="prepared-heading">Thank you — your enquiry was submitted</h2><p>Our team will confirm availability and pricing. This is not a confirmed booking until you hear back from us.</p><p className="form-alt-label">Prefer another channel? These open your phone or email app separately (they do not send your form again):</p><div className="actions"><a className="button navy" href={alternatives.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18}/>Open WhatsApp</a><a className="text-link" href={alternatives.sms}><MessageSquareText size={17}/>Open text messages</a><a className="text-link" href={alternatives.mailto}><Mail size={17}/>Open email app</a></div></section>}
        </form>
        <aside className="booking-sidebar" aria-label="Your trip summary">
          <div className="trip-summary">
            <div className="summary-image"><Scene name={tour?.image || 'coast'}/><span>Your island escape</span><small>Scenic illustration</small></div>
            <div className="summary-content"><span className="booking-kicker">YOUR JOURNEY, AT A GLANCE</span><h2>{tour?.title || (tourService ? 'A day, made for you.' : service)}</h2><p className="summary-location"><MapPin size={14}/>Cape Breton Island, Nova Scotia</p><div className="summary-facts"><span><CalendarDays size={18}/>{date ? new Date(date + 'T12:00:00').toLocaleDateString('en-CA', {day:'numeric',month:'long',year:'numeric'}) : 'Your travel date'}</span><span><Compass size={18}/>{tour?.category || service}</span></div><TripPrice slug={tour?.slug} guests={guests}/><div className="summary-inclusions"><span><Check size={16}/>Your own private group</span><span><Check size={16}/>Plans made with a local team</span><span><Check size={16}/>Pickup agreed around your plans</span></div></div>
          </div>
          <div className="booking-help"><span className="help-icon"><MessageCircle size={22}/></span><div><h3>A real person. A little local advice.</h3><p>Need a hand planning your day? We’re a conversation away.</p><a href={'tel:' + business.tel}><Phone size={14}/>{business.phone}</a><a href={whatsapp()} target="_blank" rel="noreferrer">Chat on WhatsApp <ArrowRight size={14}/></a><a href={sms()}>Send a text <ArrowRight size={14}/></a></div></div>
        </aside>
      </div>
    </div>
  </div>;
}
