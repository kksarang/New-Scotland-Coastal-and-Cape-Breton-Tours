import {Minus, Plus, Users} from 'lucide-react';
import {calculatePrice, money, packageRates} from '../data/pricing';
export function GuestControl({value, onChange, name = 'Guests'}) {
  return <div className="guest-control"><div><Users size={20}/><label htmlFor={`guests-${name}`}>Travellers<small>Include everyone in your group</small></label></div><div className="guest-stepper">
    <button type="button" aria-label="Remove one guest" disabled={Number(value) <= 1 || value === ''} onClick={() => onChange(Number(value)-1)}><Minus size={17}/></button>
    <input id={`guests-${name}`} aria-label="Number of guests" name={name} type="number" min="1" max="50" step="1" required value={value} onChange={e => onChange(e.target.value)}/>
    <button type="button" aria-label="Add one guest" disabled={Number(value) >= 50} onClick={() => onChange(Math.max(1, Number(value)+1))}><Plus size={17}/></button>
  </div></div>;
}
export default function TripPrice({slug, guests}) {
  const rate = packageRates[slug];
  const total = calculatePrice(rate, guests);
  const count = Number(guests);
  const validGuests = Number.isInteger(count) && count >= 1 && count <= 50;
  return <div className="trip-price" aria-live="polite" aria-atomic="true">
    {total !== null && <div className="price-breakdown">{rate.perPerson != null ? <span>{money(rate.perPerson)} × {count} {count === 1 ? 'guest' : 'guests'}</span> : <><span>Private group · up to {rate.includedGuests} guests <b>{money(rate.base)}</b></span>{count > rate.includedGuests && <span>{count-rate.includedGuests} extra guests × {money(rate.extraGuest)}</span>}</>}</div>}
    <div className="price-total"><span>Estimated total<small>{validGuests ? `For ${count} ${count === 1 ? 'traveller' : 'travellers'}` : 'Choose 1–50 travellers'}</small></span><strong>{total !== null ? money(total) : validGuests ? 'Quote on request' : '—'}</strong></div>
    <p>{total !== null ? 'CAD estimate. Taxes, admission, availability and final price confirmed with your quote.' : !validGuests ? 'Enter a valid group size to calculate your estimate.' : slug ? 'Contact our team for the rate for this experience.' : 'Choose an experience or request a tailored quote.'}</p>
  </div>;
}
