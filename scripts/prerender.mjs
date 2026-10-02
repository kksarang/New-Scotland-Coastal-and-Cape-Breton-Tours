// Pre-renders every route with its own metadata, then writes the 404 page, redirect pages for old URLs and sitemap.xml.
import fs from 'node:fs/promises';
import path from 'node:path';
import {render,routes,notFound,redirects,renderHead,business,ogImage} from '../.ssr/entry-server.js';
const template=await fs.readFile('dist/index.html','utf8');
if(!template.includes('<!--app-head-->'))throw new Error('index.html is missing the <!--app-head--> placeholder');
const page=(route,location)=>template.replace('<!--app-head-->',renderHead(route)).replace('<div id="root"></div>',`<div id="root">${render(location)}</div>`);
const write=async(file,html)=>{await fs.mkdir(path.dirname(file),{recursive:true});await fs.writeFile(file,html)};
for(const route of routes)await write(route.path==='/'?'dist/index.html':path.join('dist',route.path,'index.html'),page(route,route.path));
// GitHub Pages serves 404.html with a 404 status for unknown URLs.
await write('dist/404.html',page(notFound,'/this-page-does-not-exist/'));
// Static hosts can't send 301s, so old URLs get an instant redirect page with a canonical to the new URL.
const esc=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;');
for(const [from,to] of Object.entries(redirects)){const target=business.website+to;await write(path.join('dist',from,'index.html'),`<!doctype html><html lang="en-CA"><head><meta charset="UTF-8"/><title>Moved</title><link rel="canonical" href="${esc(target)}"/><meta http-equiv="refresh" content="0; url=${esc(to)}"/><script>location.replace(${JSON.stringify(to)}+location.search+location.hash)</script></head><body><p>This page has moved to <a href="${esc(to)}">${esc(target)}</a>.</p></body></html>`)}
const today=new Date().toISOString().slice(0,10);
const indexable=routes.filter(r=>!r.noindex);
const sitemap=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`+indexable.map(r=>`<url><loc>${business.website}${r.path}</loc><lastmod>${r.guide?.updated||today}</lastmod><image:image><image:loc>${business.website}${ogImage(r.image)}</image:loc></image:image></url>`).join('\n')+'\n</urlset>\n';
await fs.writeFile('dist/sitemap.xml',sitemap);
console.log(`Pre-rendered ${routes.length} pages, a 404 page and ${Object.keys(redirects).length} redirects. Sitemap lists ${indexable.length} URLs.`);
