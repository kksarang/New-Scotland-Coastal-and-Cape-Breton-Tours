import {useRef, useState, useCallback} from 'react';
import {CheckCircle2, Loader2, Mail, MessageCircle, MessageSquareText, Phone} from 'lucide-react';
import {business, whatsapp, sms} from '../data/business';
import {tours} from '../data/tours';
import {localToday} from '../data/pricing';
import {track} from '../lib/analytics';
import {buildInquiryFormPayload, isEnquirySubmitConfigured} from '../lib/enquirySubmit';
import {useEnquirySubmit} from '../hooks/useEnquirySubmit';

// mode: 'tour' (optional cruise details), 'cruise', 'airport' or 'taxi'.
export default function InquiryForm({tour, mode = 'tour', service, heading = 'Request a quote', id = 'quote'}) {
  const [cruise, setCruise] = useState(mode === 'cruise');
  const started = useRef(false);
  const today = localToday();
  const isRide = mode === 'taxi' || mode === 'airport';

  const getAnalyticsMeta = useCallback(
    () => ({
      form: mode,
      service: service || '',
      tourSlug: tour?.slug || '',
      cruise: cruise || mode === 'cruise',
    }),
    [mode, service, tour?.slug, cruise]
  );

  const {phase, errorMessage, alternatives, statusRef, reset, send, isSubmitting} = useEnquirySubmit({
    formKey: mode,
    getAnalyticsMeta,
  });

  function start() {
    if (!started.current) {
      started.current = true;
      track('quote_start', {form: mode, tour: tour?.slug || ''});
    }
  }

  async function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.elements.website.value) return;
    if (form.elements.Date.value < localToday()) {
      form.elements.Date.setCustomValidity('Please choose today or a future date.');
      form.elements.Date.reportValidity();
      return;
    }
    const guests = Number(form.elements.Guests.value);
    if (!Number.isInteger(guests) || guests < 1 || guests > 50) {
      form.elements.Guests.setCustomValidity('Enter a number of guests between 1 and 50.');
      form.elements.Guests.reportValidity();
      return;
    }
    form.elements.Guests.setCustomValidity('');

    await send(() => {
      const formData = Object.fromEntries(new FormData(form));
      delete formData.website;
      return buildInquiryFormPayload({
        formData,
        mode,
        tourSlug: tour?.slug || '',
        sourcePage: typeof location !== 'undefined' ? location.pathname : '',
      });
    });
  }

  const configured = isEnquirySubmitConfigured();

  return (
    <section id={id} className="inquiry" aria-labelledby={id + '-heading'}>
      <h2 id={id + '-heading'}>{heading}</h2>
      <p className="inquiry-intro">Tell us a little about your plans. <strong>Send enquiry</strong> submits your request to {business.name} (not a confirmed booking). We’ll reply with availability and a personalised quote. No payment is taken here.</p>
      <form className="enquiry-form" onSubmit={submit} onFocus={start} onChange={() => { if (phase !== 'submitting') reset(); }}>
        <div className="form-grid">
          <input type="hidden" name="Service" value={service || (cruise ? 'Cruise shore excursion' : tour ? 'Cape Breton tour' : 'Tour or transportation')}/>
          {!isRide && (
            <label className="full">
              Tour of interest
              <select name="Tour" defaultValue={tour?.name || ''}>
                <option value="">Help me choose</option>
                {tours.map(t => (
                  <option key={t.slug} value={t.name}>{t.name}</option>
                ))}
              </select>
            </label>
          )}
          <label>{mode === 'airport' ? 'Flight date' : 'Preferred date'} *<input name="Date" type="date" min={today} required onChange={e => e.target.setCustomValidity('')}/></label>
          <label>{isRide ? 'Passengers' : 'Number of guests'} *<input name="Guests" type="number" min="1" max="50" defaultValue="2" required/></label>
          {mode === 'airport' ? (
            <>
              <label>Flight number<input name="Flight_number" maxLength="20" placeholder="e.g. AC 8880"/></label>
              <label>Arrival time<input name="Arrival_time" type="time"/></label>
              <label className="full">Drop-off destination *<input name="Destination" required maxLength="200" placeholder="Hotel, cruise terminal or address"/></label>
            </>
          ) : (
            <>
              <label className="full">Pickup location *<input name="Pickup_location" required maxLength="200" placeholder={mode === 'cruise' ? 'Sydney cruise terminal' : 'Hotel, cruise terminal or address'} defaultValue={mode === 'cruise' ? 'Sydney cruise terminal' : ''}/></label>
              {mode === 'taxi' && (
                <>
                  <label>Pickup time<input name="Pickup_time" type="time"/></label>
                  <label>Destination *<input name="Destination" required maxLength="200"/></label>
                </>
              )}
            </>
          )}
          {mode === 'tour' && (
            <label className="full check-field">
              <input type="checkbox" checked={cruise} onChange={e => setCruise(e.target.checked)}/> We’re arriving by cruise ship
            </label>
          )}
          {cruise && (
            <>
              <label className="full">Cruise ship name *<input name="Cruise_ship" required maxLength="100"/></label>
              <label>Time ashore (arrival)<input name="Ship_arrival_time" type="time"/></label>
              <label>All-aboard / departure time *<input name="All_aboard_time" type="time" required/></label>
              <label className="full">Mobility requirements<input name="Mobility_requirements" maxLength="200" placeholder="Optional: walkers, wheelchairs, limited walking…"/></label>
            </>
          )}
          <label>Full name *<input name="Name" required autoComplete="name" maxLength="100"/></label>
          <label>Phone *<input name="Phone" type="tel" required autoComplete="tel" minLength="7" maxLength="30" placeholder="Include country code"/></label>
          <label className="full">Email *<input name="Email" type="email" required autoComplete="email" maxLength="150"/></label>
          <label className="full">Message<textarea name="Message" rows="3" maxLength="2000" placeholder="Interests, must-see places, children, luggage or accessibility needs…"/></label>
          <label className="hp" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off"/></label>
        </div>
        {!configured && phase !== 'success' && <p className="form-config-warning" role="status">Online enquiry delivery is not configured on this build. Use WhatsApp, text or call below until the site is updated.</p>}
        <button className="button navy" type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
          {isSubmitting ? <><Loader2 size={18} className="spin"/>Sending enquiry…</> : 'Send enquiry'}
        </button>
        <p className="fine-print">Sending submits your details to our team. You can also reach us on WhatsApp, text or phone. Prefer to talk? Call <a href={'tel:' + business.tel}>{business.phone}</a>.</p>
        {phase === 'error' && (
          <div className="prepared form-feedback-error" tabIndex="-1" ref={statusRef} role="alert">
            <h3>We couldn’t send your enquiry</h3>
            <p>{errorMessage}</p>
            <div className="actions">
              <a className="button navy" href={whatsapp()} target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/>WhatsApp (opens app)</a>
              <a className="button outline" href={sms()}><MessageSquareText size={18}/>Text message (opens app)</a>
              <a className="text-link" href={'tel:' + business.tel}><Phone size={17}/>Call us</a>
            </div>
          </div>
        )}
        {phase === 'success' && alternatives && (
          <div className="prepared" tabIndex="-1" ref={statusRef} role="status">
            <CheckCircle2 size={26}/>
            <h3>Your enquiry was submitted</h3>
            <p>Our team will confirm availability and pricing. This is not a confirmed booking until you hear back from us.</p>
            <p className="form-alt-label">Prefer another channel? These open your phone or email app separately:</p>
            <div className="actions">
              <a className="button navy" href={alternatives.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/>Open WhatsApp</a>
              <a className="button outline" href={alternatives.sms}><MessageSquareText size={18}/>Open text messages</a>
              <a className="text-link" href={alternatives.mailto}><Mail size={17}/>Send by email app</a>
              <a className="text-link" href={'tel:' + business.tel}><Phone size={17}/>Call us</a>
            </div>
          </div>
        )}
      </form>
    </section>
  );
}
