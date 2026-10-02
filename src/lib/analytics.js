// GA4-ready event tracking. GA loads only when VITE_GA_ID is set at build time; otherwise events go to window.dataLayer
// (harmless, and picked up by Google Tag Manager if it is added later).
export const GA_ID=import.meta.env.VITE_GA_ID||'';
export function track(name,params={}){if(typeof window==='undefined')return;window.dataLayer=window.dataLayer||[];if(window.gtag)window.gtag('event',name,params);else window.dataLayer.push({event:name,...params})}
export function trackPageView(path,title){if(window.gtag&&GA_ID)window.gtag('event','page_view',{page_path:path,page_title:title,page_location:location.href})}
// Classifies outbound and contact links so individual components don't need tracking code.
function linkEvent(a){const href=a.getAttribute('href')||'';if(a.dataset.track)return a.dataset.track;if(href.startsWith('tel:'))return 'call_click';if(href.startsWith('mailto:'))return 'email_click';if(href.startsWith('sms:'))return 'sms_click';if(href.includes('wa.me/'))return 'whatsapp_click';if(href.includes('google.com/maps'))return 'google_maps_click';if(href.includes('tripadvisor.'))return 'tripadvisor_click';if(href.includes('viator.com'))return 'viator_click';if(href.startsWith('/book'))return 'book_tour_click';return null}
let started=false;
export function initAnalytics(){if(started||typeof window==='undefined')return;started=true;
if(GA_ID){window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments)};window.gtag('js',new Date());window.gtag('config',GA_ID,{send_page_view:false});const script=document.createElement('script');script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id='+GA_ID;document.head.append(script)}
document.addEventListener('click',e=>{const a=e.target.closest?.('a[href]');if(!a)return;const name=linkEvent(a);if(name)track(name,{link_url:a.href,page_path:location.pathname,...(a.dataset.tour?{tour:a.dataset.tour}:{})})},{capture:true})}
