import {useRef,useState} from 'react';
import {CheckCircle2,Mail,MessageCircle,MessageSquareText,Phone} from 'lucide-react';
import {business,whatsapp,sms} from '../data/business';
import {tours} from '../data/tours';
import {localToday} from '../data/pricing';
import {track} from '../lib/analytics';
// Prepares an enquiry for the visitor to send by WhatsApp, text message or email. Nothing is submitted to a server.
// mode: 'tour' (optional cruise details), 'cruise', 'airport' or 'taxi'.
export default function InquiryForm({tour,mode='tour',service,heading='Request a quote',id='quote'}){
const [cruise,setCruise]=useState(mode==='cruise');const [prepared,setPrepared]=useState(null);const started=useRef(false);const preparedRef=useRef(null);const today=localToday();const isRide=mode==='taxi'||mode==='airport';
function start(){if(!started.current){started.current=true;track('quote_start',{form:mode,tour:tour?.slug})}}
function submit(e){e.preventDefault();const form=e.currentTarget;if(form.elements.website.value)return;// honeypot: bots fill hidden fields
if(form.elements.Date.value<localToday()){form.elements.Date.setCustomValidity('Please choose today or a future date.');form.elements.Date.reportValidity();return}
const data=Object.fromEntries(new FormData(form));delete data.website;const message=`Hello ${business.name},\n\nI would like to enquire about: ${data.Service}\n\n`+Object.entries(data).filter(([key,value])=>value&&key!=='Service').map(([key,value])=>key.replaceAll('_',' ')+': '+value).join('\n')+'\n\nCould you please confirm availability and pricing?';
setPrepared(message);track(cruise?'cruise_inquiry_submit':'quote_submit',{form:mode,tour:data.Tour||'',service:data.Service});requestAnimationFrame(()=>preparedRef.current?.focus())}
return <section id={id} className="inquiry" aria-labelledby={id+'-heading'}><h2 id={id+'-heading'}>{heading}</h2><p className="inquiry-intro">Tell us a little about your plans. We’ll reply with availability and a personalised quote. No payment is taken here.</p>
<form className="enquiry-form" onSubmit={submit} onFocus={start} onChange={()=>setPrepared(null)}>
<div className="form-grid">
<input type="hidden" name="Service" value={service||(cruise?'Cruise shore excursion':tour?'Cape Breton tour':'Tour or transportation')}/>
{!isRide&&<label className="full">Tour of interest<select name="Tour" defaultValue={tour?.name||''}><option value="">Help me choose</option>{tours.map(t=><option key={t.slug} value={t.name}>{t.name}</option>)}</select></label>}
<label>{mode==='airport'?'Flight date':'Preferred date'} *<input name="Date" type="date" min={today} required onChange={e=>e.target.setCustomValidity('')}/></label>
<label>{isRide?'Passengers':'Number of guests'} *<input name="Guests" type="number" min="1" max="50" defaultValue="2" required/></label>
{mode==='airport'?<><label>Flight number<input name="Flight_number" maxLength="20" placeholder="e.g. AC 8880"/></label><label>Arrival time<input name="Arrival_time" type="time"/></label><label className="full">Drop-off destination *<input name="Destination" required maxLength="200" placeholder="Hotel, cruise terminal or address"/></label></>
:<><label className="full">Pickup location *<input name="Pickup_location" required maxLength="200" placeholder={mode==='cruise'?'Sydney cruise terminal':'Hotel, cruise terminal or address'} defaultValue={mode==='cruise'?'Sydney cruise terminal':''}/></label>{mode==='taxi'&&<><label>Pickup time<input name="Pickup_time" type="time"/></label><label>Destination *<input name="Destination" required maxLength="200"/></label></>}</>}
{mode==='tour'&&<label className="full check-field"><input type="checkbox" checked={cruise} onChange={e=>setCruise(e.target.checked)}/> We’re arriving by cruise ship</label>}
{cruise&&<><label className="full">Cruise ship name *<input name="Cruise_ship" required maxLength="100"/></label><label>Time ashore (arrival)<input name="Ship_arrival_time" type="time"/></label><label>All-aboard / departure time *<input name="All_aboard_time" type="time" required/></label><label className="full">Mobility requirements<input name="Mobility_requirements" maxLength="200" placeholder="Optional: walkers, wheelchairs, limited walking…"/></label></>}
<label>Full name *<input name="Name" required autoComplete="name" maxLength="100"/></label>
<label>Phone *<input name="Phone" type="tel" required autoComplete="tel" minLength="7" maxLength="30" placeholder="Include country code"/></label>
<label className="full">Email *<input name="Email" type="email" required autoComplete="email" maxLength="150"/></label>
<label className="full">Message<textarea name="Message" rows="3" maxLength="2000" placeholder="Interests, must-see places, children, luggage or accessibility needs…"/></label>
<label className="hp" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off"/></label>
</div>
<button className="button navy" type="submit">Prepare my request</button>
<p className="fine-print">Your request opens in WhatsApp, your text messages or email for you to review and send. Prefer to talk? Call <a href={'tel:'+business.tel}>{business.phone}</a>.</p>
{prepared&&<div className="prepared" tabIndex="-1" ref={preparedRef} role="status"><CheckCircle2 size={26}/><h3>Your request is ready to send</h3><p>Nothing has been sent yet. Choose how you’d like to send it:</p><div className="actions"><a className="button navy" href={whatsapp(prepared)} target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/>Send via WhatsApp</a><a className="button outline" href={sms(prepared)}><MessageSquareText size={18}/>Send as text (SMS)</a><a className="text-link" href={'mailto:'+business.email+'?subject='+encodeURIComponent((tour?tour.name+' ':'')+'enquiry')+'&body='+encodeURIComponent(prepared)}><Mail size={17}/>Send by email</a><a className="text-link" href={'tel:'+business.tel}><Phone size={17}/>Call us</a></div></div>}
</form></section>}
