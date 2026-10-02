import {Link} from 'react-router-dom';
import {Clock3} from 'lucide-react';
import Scene from '../components/Scene';
import {PageHero,ContentSections,RelatedTours,ContactCard} from '../components/Shared';
import {guides,guideBySlug} from '../data/guides';
import {business} from '../data/business';
const formatDate=iso=>new Date(iso+'T12:00:00').toLocaleDateString('en-CA',{day:'numeric',month:'long',year:'numeric'});
export function GuideCard({guide,as:Heading='h3'}){return <article className="guide-card"><Link to={guide.path} tabIndex={-1} aria-hidden="true" className="guide-image"><Scene name={guide.image} sizes="(max-width: 760px) 100vw, 25vw" decorative/></Link><div><p className="card-category"><Clock3 size={13}/> {guide.minutes} min read</p><Heading><Link to={guide.path}>{guide.title}</Link></Heading><p>{guide.summary}</p></div></article>}
export function Guides(){return <><PageHero eyebrow="LOCAL KNOWLEDGE" title="Cape Breton Travel Guides" text="Practical advice for planning your days on Cape Breton Island, written from Sydney, Nova Scotia." image="autumn" crumbs={[['Travel guides']]}/><section className="wrap market-section"><div className="guide-grid">{guides.map(g=><GuideCard key={g.slug} guide={g} as="h2"/>)}</div><p className="inline-links"><Link to="/things-to-do-cape-breton/">Things to do in Cape Breton</Link><Link to="/destinations/">Destinations</Link></p></section></>}
export function GuidePage({slug}){const g=guideBySlug(slug);return <><PageHero eyebrow="CAPE BRETON TRAVEL GUIDE" title={g.title} text={g.summary} image={g.image} crumbs={[['Travel guides','/guides/'],[g.title]]}><p className="article-meta">By {business.name} · Updated <time dateTime={g.updated}>{formatDate(g.updated)}</time> · {g.minutes} min read</p></PageHero>
<section className="wrap market-detail"><article className="article-body"><ContentSections sections={g.sections}/></article><ContactCard title="Plan it with a local" text="Prefer someone else to do the driving? We run private tours from Sydney to every place in this guide."/></section>
<RelatedTours slugs={g.tours} title="Tours mentioned in this guide"/></>}
