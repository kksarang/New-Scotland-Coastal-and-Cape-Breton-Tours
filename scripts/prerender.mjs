import fs from 'node:fs/promises';
import path from 'node:path';
import {render} from '../.ssr/entry-server.js';
import {tours,business} from '../src/data/tours.js';
const pages={'/':'Cape Breton Tours & Taxi Service','/about':'Our Story','/tours':'Private Cape Breton Tours','/taxi-service':'Cape Breton Taxi & Airport Transfers','/gallery':'Cape Breton Travel Gallery','/book':'Plan Your Cape Breton Journey','/contact':'Contact Us','/privacy':'Privacy','/terms':'Booking Information'};
for(const tour of tours)pages['/tours/'+tour.slug]=tour.title+' Private Tour';
const template=await fs.readFile('dist/index.html','utf8');
const esc=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
for(const [route,title] of Object.entries(pages)){
 const tour=tours.find(t=>route==='/tours/'+t.slug);const description=tour?.description||'Discover Cape Breton with private scenic tours, Cabot Trail journeys and comfortable taxi transportation from Sydney, Nova Scotia.';const fullTitle=title+' | New Scotland Coastal Tours';
 const schema={'@context':'https://schema.org','@type':'LocalBusiness',name:business.name,url:business.website,telephone:business.phone,email:business.email,address:{'@type':'PostalAddress',streetAddress:'193 Henry St',addressLocality:'Sydney',addressRegion:'NS',postalCode:'B1N 2H4',addressCountry:'CA'}};
 const metadata=`<link rel="canonical" href="${business.website}${route}"/><meta property="og:title" content="${esc(fullTitle)}"/><meta property="og:description" content="${esc(description)}"/><meta property="og:type" content="website"/><meta property="og:url" content="${business.website}${route}"/><meta name="twitter:card" content="summary"/><meta name="twitter:title" content="${esc(fullTitle)}"/><meta name="twitter:description" content="${esc(description)}"/><script type="application/ld+json" id="business-schema">${JSON.stringify(schema).replaceAll('<','\\u003c')}</script>`;
 const html=template.replace(/<title>.*?<\/title>/,`<title>${esc(fullTitle)}</title>`).replace(/<meta name="description"[^>]*>/,`<meta name="description" content="${esc(description)}"/>`).replace('</head>',metadata+'</head>').replace('<div id="root"></div>',`<div id="root">${render(route)}</div>`);
 const file=route==='/'?'dist/index.html':path.join('dist',route,'index.html');await fs.mkdir(path.dirname(file),{recursive:true});await fs.writeFile(file,html);
}
console.log(`Pre-rendered ${Object.keys(pages).length} pages with individual metadata.`);
