// Every public URL, with its metadata. Used by the client, the pre-renderer and the sitemap.
// Paths end in a slash because the static host redirects /page to /page/.
import {tours} from '../data/tours';
import {destinations} from '../data/destinations';
import {guides} from '../data/guides';
import {servicePages} from '../data/services';
import {business} from '../data/business';
const brand=business.name;
const page=(path,title,description,extra={})=>({path,title,description,image:'coast',type:'page',crumbs:[],priority:0.6,...extra});
export const routes=[
page('/','Cape Breton Tours & Taxi Service in Sydney, NS | '+brand,'Explore Cape Breton with private tours from Sydney, Nova Scotia. Cabot Trail tours, Louisbourg, cruise shore excursions, coastal sightseeing and local taxi service. Call +1 902-549-4542.',{type:'home',image:'homeHero',priority:1}),
page('/cape-breton-tours/','Cape Breton Tours from Sydney, Nova Scotia | Private Tours','Private Cape Breton tours from Sydney, Nova Scotia: the Cabot Trail, Fortress of Louisbourg, Highlands, Highland Village and coastal sightseeing, planned around your group.',{crumbs:[['Cape Breton tours']],priority:0.9}),
...tours.map(t=>page(t.path,t.seoTitle,t.metaDescription,{type:'tour',image:t.image,crumbs:[['Tours','/cape-breton-tours/'],[t.name]],tour:t,priority:0.9})),
...servicePages.map(s=>page(s.path,s.seoTitle,s.metaDescription,{type:'service',image:s.image,crumbs:[[s.name]],service:s,priority:s.slug==='things-to-do'?0.7:0.9})),
page('/destinations/','Cape Breton Destinations: Cabot Trail, Louisbourg & More','Explore Cape Breton Island destinations near Sydney, Nova Scotia, including the Cabot Trail, Fortress of Louisbourg, Highlands, Baddeck, Iona and the Bras d’Or Lake.',{crumbs:[['Destinations']],priority:0.7}),
...destinations.map(d=>page(d.path,d.seoTitle,d.metaDescription,{type:'destination',image:d.image,crumbs:[['Destinations','/destinations/'],[d.name]],destination:d,priority:0.7})),
page('/guides/','Cape Breton Travel Guides | Local Tips from Sydney, NS','Practical Cape Breton travel guides from a Sydney, Nova Scotia tour operator: the Cabot Trail, cruise port days, fall colours and one-day itineraries.',{crumbs:[['Travel guides']],priority:0.6}),
...guides.map(g=>page(g.path,g.seoTitle,g.metaDescription,{type:'article',image:g.image,crumbs:[['Travel guides','/guides/'],[g.title]],guide:g,priority:0.6})),
page('/about/','About Us | New Scotland Coastal & Cape Breton Tours, Sydney NS','Meet New Scotland Coastal & Cape Breton Tours, a local tour and transportation business in Sydney, Nova Scotia offering private Cape Breton tours and taxi service.',{crumbs:[['About']],priority:0.5}),
page('/contact/','Contact Us | '+brand,'Contact New Scotland Coastal & Cape Breton Tours at 193 Henry St, Sydney, Nova Scotia. Call +1 902-549-4542, email or WhatsApp to plan a tour or send an enquiry.',{crumbs:[['Contact']],priority:0.6}),
page('/gallery/','Cape Breton Travel Gallery | '+brand,'Scenic artwork and travel inspiration from Cape Breton Island and Nova Scotia: the Cabot Trail, Louisbourg, coastal villages and autumn colours.',{crumbs:[['Gallery']],priority:0.3}),
page('/book/','Request a Tour or Ride | '+brand,'Send a tour, taxi, airport transfer or cruise pickup request to New Scotland Coastal & Cape Breton Tours in Sydney, Nova Scotia.',{crumbs:[['Book']],noindex:true}),
page('/privacy/','Privacy Policy | '+brand,'How New Scotland Coastal & Cape Breton Tours handles the information you share through this website.',{crumbs:[['Privacy policy']],priority:0.2}),
page('/terms/','Booking Information & Terms | '+brand,'Booking information for New Scotland Coastal & Cape Breton Tours: enquiries, confirmation, itineraries and travel requirements.',{crumbs:[['Booking information']],priority:0.2})
];
export const notFound=page('/404/','Page Not Found | '+brand,'The page you were looking for could not be found.',{type:'404',noindex:true});
// Old URLs that are already indexed. The pre-renderer writes a redirect page for each.
export const redirects={'/tours/':'/cape-breton-tours/','/taxi-service/':'/taxi-sydney-nova-scotia/','/cruise-excursions/':'/sydney-cruise-port-tours/',...Object.fromEntries(tours.map(t=>['/tours/'+t.slug+'/',t.path]))};
export const normalizePath=pathname=>!pathname||pathname==='/'?'/':pathname.endsWith('/')?pathname:pathname+'/';
export const findRoute=pathname=>routes.find(r=>r.path===normalizePath(pathname))||notFound;
