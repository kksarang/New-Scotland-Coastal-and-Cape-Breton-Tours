// Centralized JSON-LD. Only factual data: no ratings, reviews, prices or availability until real data exists.
import {business,sameAs,googleProfile} from '../data/business';
import {ogImage} from '../data/images';
const url=path=>business.website+path;
const orgId=url('/#organization');
const siteId=url('/#website');
export function organization(){return {'@type':'TravelAgency','@id':orgId,name:business.name,alternateName:business.alternateNames,url:url('/'),logo:{'@type':'ImageObject',url:url(business.logo)},image:url(ogImage('coast')),description:business.description,telephone:'+1-902-549-4542',email:business.email,address:{'@type':'PostalAddress',streetAddress:business.street,addressLocality:business.city,addressRegion:business.regionCode,postalCode:business.postalCode,addressCountry:business.countryCode},areaServed:[{'@type':'City',name:'Sydney, Nova Scotia'},{'@type':'Place',name:'Cape Breton Island'},{'@type':'AdministrativeArea',name:'Nova Scotia'}],hasMap:googleProfile,...(sameAs.length?{sameAs}:{})}}
function breadcrumb(route){if(!route.crumbs.length)return null;const items=[['Home','/'],...route.crumbs.map(([name,path])=>[name,path||route.path])];return {'@type':'BreadcrumbList','@id':url(route.path)+'#breadcrumb',itemListElement:items.map(([name,path],i)=>({'@type':'ListItem',position:i+1,name,item:url(path)}))}}
function mainEntity(route){
const ref={'@id':orgId};
if(route.tour){const t=route.tour;return {'@type':'TouristTrip','@id':url(t.path)+'#tour',name:t.name,description:t.metaDescription,url:url(t.path),image:url(ogImage(t.image)),provider:ref,itinerary:{'@type':'ItemList',itemListElement:t.places.map(([name],i)=>({'@type':'ListItem',position:i+1,item:{'@type':'Place',name}}))}}}
if(route.service?.serviceType){const s=route.service;return {'@type':'Service','@id':url(s.path)+'#service',name:s.h1,serviceType:s.serviceType,description:s.metaDescription,url:url(s.path),provider:ref,areaServed:[{'@type':'City',name:'Sydney, Nova Scotia'},{'@type':'Place',name:'Cape Breton Island'}]}}
if(route.destination){const d=route.destination;return {'@type':d.schemaType,'@id':url(d.path)+'#place',name:d.name,description:d.metaDescription,url:url(d.path),image:url(ogImage(d.image)),containedInPlace:{'@type':'Place',name:'Cape Breton Island, Nova Scotia, Canada'}}}
if(route.guide){const g=route.guide;return {'@type':'Article','@id':url(g.path)+'#article',headline:g.title,description:g.metaDescription,image:url(ogImage(g.image)),datePublished:g.published,dateModified:g.updated,author:ref,publisher:ref,mainEntityOfPage:url(g.path),inLanguage:'en-CA'}}
return null}
export function schemaFor(route){
const crumbs=breadcrumb(route);const entity=mainEntity(route);
const webpage={'@type':route.type==='home'?'WebPage':route.path==='/contact/'?'ContactPage':route.path==='/about/'?'AboutPage':'WebPage','@id':url(route.path)+'#webpage',url:url(route.path),name:route.title,description:route.description,isPartOf:{'@id':siteId},about:{'@id':orgId},inLanguage:'en-CA',...(crumbs?{breadcrumb:{'@id':crumbs['@id']}}:{}),...(entity?{mainEntity:{'@id':entity['@id']}}:{})};
const website={'@type':'WebSite','@id':siteId,url:url('/'),name:business.name,alternateName:business.alternateNames,publisher:{'@id':orgId},inLanguage:'en-CA'};
return {'@context':'https://schema.org','@graph':[organization(),website,webpage,crumbs,entity].filter(Boolean)}}
