// Approved CAD rates only. Null means the business has not supplied a rate.
// Models: { perPerson: 100 } or { base: 300, includedGuests: 2, extraGuest: 75 }.
export const packageRates = {
  'cabot-trail': null,
  'fortress-of-louisbourg': null,
  'skyline-trail': null,
  'highland-village': null,
  'cape-breton-coastal': null,
  'sydney-cape-breton': null,
  'private-tour': null,
};
export const money = value => new Intl.NumberFormat('en-CA', {style: 'currency', currency: 'CAD', currencyDisplay: 'code', maximumFractionDigits: 2}).format(value);
export function initialGuests(value) {
  const count = Number(value);
  return Number.isInteger(count) && count >= 1 && count <= 50 ? count : 2;
}
export function localToday() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
}
export function calculatePrice(rate, guests) {
  const count = Number(guests);
  if (!rate || !Number.isInteger(count) || count < 1 || count > 50) return null;
  const valid = value => typeof value === 'number' && Number.isFinite(value) && value >= 0;
  if (valid(rate.perPerson)) return Math.round(rate.perPerson * count * 100) / 100;
  if (valid(rate.base) && valid(rate.extraGuest) && Number.isInteger(rate.includedGuests) && rate.includedGuests >= 1) {
    return Math.round((rate.base + Math.max(0, count-rate.includedGuests) * rate.extraGuest) * 100) / 100;
  }
  return null;
}
export function rateLabel(slug) {
  const rate = packageRates[slug];
  if (calculatePrice(rate, 1) === null) return 'Quote on request';
  return rate.perPerson != null ? `${money(rate.perPerson)} / person` : `From ${money(rate.base)} / group`;
}
