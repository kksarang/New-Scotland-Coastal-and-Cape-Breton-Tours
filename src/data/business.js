// Single source of truth for the business entity (NAP), profiles and booking platforms.
// Keep name, address and phone identical to Google Business Profile, Tripadvisor, Viator and directories.
export const business={name:'New Scotland Coastal & Cape Breton Tours',shortName:'New Scotland Cape Tours',alternateNames:['New Scotland Cape Tours','New Scotland Coastal and Cape Breton Tours'],phone:'+1 902-549-4542',tel:'+19025494542',email:'newscotlandcapetours@gmail.com',street:'193 Henry St',city:'Sydney',region:'Nova Scotia',regionCode:'NS',postalCode:'B1N 2H4',country:'Canada',countryCode:'CA',address:'193 Henry St, Sydney, Nova Scotia B1N 2H4, Canada',website:'https://newscotlandcapetours.com',logo:'/images/new-scotland-cape-tours-logo.webp',description:'Private Cape Breton tours, Cabot Trail sightseeing, Sydney cruise shore excursions and local taxi and airport transportation from Sydney, Nova Scotia, Canada.'};
// Only add a URL once the listing exists and belongs to the business. Null entries are hidden everywhere.
export const profiles={facebook:'https://www.facebook.com/profile.php?id=61594573120247',instagram:'https://www.instagram.com/newscotlandcapetours/',tripadvisor:null,viator:null};
export const googleProfile='https://www.google.com/maps?cid=15156368611349364133';
export const reviewUrl=googleProfile;
export const maps='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(business.name+' '+business.address);
export const directions='https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent(business.address);
export const whatsappNumber='19025494542';
export const whatsapp=(message='Hello New Scotland Coastal & Cape Breton Tours! I would like to enquire about your tours or taxi service.')=>'https://wa.me/'+whatsappNumber+'?text='+encodeURIComponent(message);
// "?&body=" is understood by both iOS and Android messaging apps.
export const sms=(message='Hello New Scotland Coastal & Cape Breton Tours! I would like to enquire about your tours or taxi service.')=>'sms:'+business.tel+'?&body='+encodeURIComponent(message);
const tourMessage=title=>`Hello New Scotland Coastal & Cape Breton Tours,\n\nI'm interested in the ${title}.\n\nDate:\nGuests:\nPickup location:\nCruise ship (if applicable):\n\nCould you please confirm availability and pricing?`;
export const tourSms=title=>sms(tourMessage(title));
export const tourWhatsapp=title=>whatsapp(tourMessage(title));
export function withUtm(url,campaign){if(!url)return null;try{const link=new URL(url);link.searchParams.set('utm_source','website');link.searchParams.set('utm_medium','referral');link.searchParams.set('utm_campaign',campaign);return link.toString()}catch{return url}}
export const sameAs=[profiles.facebook,profiles.instagram,profiles.tripadvisor,profiles.viator].filter(Boolean);
