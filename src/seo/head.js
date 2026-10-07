// Builds <head> metadata for a route. renderHead() is used when pre-rendering, applyHead() on client navigation.
import {business} from '../data/business';
import {ogImage,imageMeta} from '../data/images';
import {schemaFor} from './schema';
export function headTags(route){
const pageUrl=business.website+route.path;const image=business.website+ogImage(route.image);const indexable=route.type!=='404';
const meta=(key,content,property=key.startsWith('og:')||key.startsWith('article:'))=>['meta',{[property?'property':'name']:key,content}];
const tags=[meta('description',route.description),indexable&&['link',{rel:'canonical',href:pageUrl}],route.noindex&&meta('robots','noindex, follow'),
meta('og:site_name',business.name),meta('og:locale','en_CA'),meta('og:type',route.type==='article'?'article':'website'),meta('og:title',route.title),meta('og:description',route.description),indexable&&meta('og:url',pageUrl),meta('og:image',image),meta('og:image:width','1200'),meta('og:image:height','630'),meta('og:image:alt',imageMeta(route.image).alt),
meta('twitter:card','summary_large_image'),meta('twitter:title',route.title),meta('twitter:description',route.description),meta('twitter:image',image),
...(route.guide?[meta('article:published_time',route.guide.published),meta('article:modified_time',route.guide.updated)]:[])].filter(Boolean);
return {title:route.title,tags,schema:indexable?schemaFor(route):null}}
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
export function renderHead(route){const {title,tags,schema}=headTags(route);return `<title>${esc(title)}</title>`+tags.map(([tag,attrs])=>`<${tag} data-head ${Object.entries(attrs).map(([k,v])=>`${k}="${esc(v)}"`).join(' ')}/>`).join('')+(schema?`<script type="application/ld+json" data-head>${JSON.stringify(schema).replaceAll('<','\\u003c')}</script>`:'')}
export function applyHead(route){const {title,tags,schema}=headTags(route);document.title=title;document.head.querySelectorAll('[data-head]').forEach(node=>node.remove());for(const [tag,attrs] of tags){const node=document.createElement(tag);node.setAttribute('data-head','');for(const [k,v] of Object.entries(attrs))node.setAttribute(k,v);document.head.append(node)}if(schema){const node=document.createElement('script');node.type='application/ld+json';node.setAttribute('data-head','');node.textContent=JSON.stringify(schema);document.head.append(node)}}
