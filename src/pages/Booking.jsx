import {useRef, useState} from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import {ArrowLeft, ArrowRight, CalendarDays, Check, CheckCircle2, Compass, Mail, MapPin, MessageCircle, MessageSquareText, Phone, UserRound} from 'lucide-react';
import {business, whatsapp, sms} from '../data/business';
import {tours} from '../data/tours';
import {track} from '../lib/analytics';
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
  const [prepared, setPrepared] = useState(null);
  const preparedRef = useRef(null);
  const today = localToday();
  const tourService = ['Cape Breton Tour', 'Private Tour', 'Cruise Pickup'].includes(service);
  const tour = tourService ? tours.find(t => t.slug === slug) : null;
  const total = calculatePrice(packageRates[tour?.slug], guests);

  function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.elements.date.value < localToday()) {
      form.elements.date.setCustomValidity('Please choose today or a future date.');
      form.elements.date.reportValidity();
      return;
    }
    const data = Object.fromEntries(new FormData(form));
    data.Tour = tour?.title || 'Tailored itinerary / no tour selected';
    if (tour) data.Destination = tour.title;
    data.Estimated_total = total === null ? 'Quote requested' : money(total) + ' — subject to confirmation; taxes and admission to be confirmed';
    const message = 'Hello ' + business.name + ', I would like to enquire about:\n\n' + Object.entries(data).filter(([, value]) => value).map(([key, value]) => key.replaceAll('_', ' ') + ': ' + value).join('\n');
    setPrepared(message);
    track(service === 'Cruise Pickup' ? 'cruise_inquiry_submit' : 'quote_submit', {form: 'booking', service, tour: tour?.slug || ''});
    requestAnimationFrame(() => preparedRef.current?.focus());
  }

  return <div className="booking-experience">
    <div className="wrap booking-shell">
      {!embedded && <Link to={tour ? tour.path : '/cape-breton-tours/'} className="booking-back"><ArrowLeft size={16}/>Back to experiences</Link>}
      <header className="booking-heading"><div><span className="booking-kicker">A LITTLE PLANNING. A GREAT ADVENTURE.</span><Heading>Make it your kind of journey.</Heading><p>The scenic route starts here. Share your plans and we’ll take care of the details.</p></div><span className="booking-reassurance"><CheckCircle2 size={18}/>No payment required</span></header>
      <div className="booking-layout">
        <form id="trip-details" className="booking-form" onSubmit={submit} onChange={() => setPrepared(null)} onFocus={() => { if (!started.current) { started.current = true; track('quote_start', {form: 'booking'}); } }}>
          <section className="booking-section" aria-labelledby="experience-heading">
            <div className="booking-section-heading"><span><Compass size={21}/></span><div><small>01 / YOUR EXPERIENCE</small><h2 id="experience-heading">Where will your story begin?</h2></div></div>
            <div className="booking-fields">
              <label className="field-wide">Service type<select name="Service" value={service} onChange={e => setService(e.target.value)}>{services.map(value => <option key={value}>{value}</option>)}</select></label>
              {tourService && <label className="field-wide">Choose your package<select name="Tour" value={slug} onChange={e => setSlug(e.target.value)}><option value="">Help me choose an experience</option>{tours.map(t => <option key={t.slug} value={t.slug}>{t.title} — {rateLabel(t.slug)}</option>)}</select></label>}
              <label>Travel date <span aria-hidden="true">*</span><input name="date" type="date" min={today} required value={date} onChange={e => {e.target.setCustomValidity(''); setDate(e.target.value);}}/></label>
              <label>Pickup time <span className="field-optional">optional</span><input name="Pickup_time" type="time"/></label>
            </div>
            <GuestControl value={guests} onChange={value => {setGuests(value); setPrepared(null);}}/>
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
          <div className="booking-submit"><p>Fields marked * are required. Your request opens in WhatsApp, your text messages or email for you to review and send. We’ll confirm availability and the final quote directly.</p><button className="button navy" type="submit">Prepare my trip request<ArrowRight size={18}/></button><span><Check size={15}/>No charge. No commitment. Just a great place to start.</span></div>
          {prepared && <section className="booking-prepared" tabIndex="-1" ref={preparedRef} aria-labelledby="prepared-heading"><CheckCircle2 size={30}/><h2 id="prepared-heading">Your next adventure is one hello away.</h2><p>Your enquiry is ready. Nothing has been sent yet. Review your details and choose how to send them.</p><details><summary>Review your request</summary><pre>{prepared}</pre></details><div className="actions"><a className="button navy" href={whatsapp(prepared)} target="_blank" rel="noreferrer"><MessageCircle size={18}/>Send via WhatsApp</a><a className="text-link" href={sms(prepared)}><MessageSquareText size={17}/>Send as text (SMS)</a><a className="text-link" href={'mailto:' + business.email + '?subject=' + encodeURIComponent('Cape Breton booking enquiry') + '&body=' + encodeURIComponent(prepared)}><Mail size={17}/>Open email</a></div></section>}
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
