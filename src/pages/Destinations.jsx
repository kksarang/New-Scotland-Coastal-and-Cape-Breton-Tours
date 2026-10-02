import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Check,MapPin} from 'lucide-react';
import Scene from '../components/Scene';
import {PageHero,Faqs,RelatedTours,ContactCard,SmartLink} from '../components/Shared';
import {destinations,destinationBySlug} from '../data/destinations';
const kinds=['All','Scenic drives','History & culture','Nature & outdoors','Towns & villages'];
export function Destinations(){const [kind,setKind]=useState('All');const shown=destinations.filter(d=>kind==='All'||d.kind===kind);return <><PageHero eyebrow="CAPE BRETON ISLAND, NOVA SCOTIA" title="Cape Breton Destinations" text="The places our guests ask about most, from the Cabot Trail and Louisbourg to Baddeck, Iona and the Bras d’Or Lake, with tips on reaching each one from Sydney." image="coast" crumbs={[['Destinations']]}/>
<section className="wrap market-section"><div className="filters" role="group" aria-label="Filter destinations">{kinds.map(k=><button key={k} aria-pressed={kind===k} className={kind===k?'selected':''} onClick={()=>setKind(k)}>{k}</button>)}</div><div className="destination-grid">{shown.map(d=><Link className="destination-card" key={d.slug} to={d.path}><Scene name={d.image} sizes="(max-width: 760px) 50vw, 33vw" decorative/><div><h2>{d.name}</h2><p>{d.tagline}</p></div><small>Illustration</small></Link>)}</div><p className="inline-links"><Link to="/things-to-do-cape-breton/">Things to do in Cape Breton</Link><Link to="/guides/">Travel guides</Link><Link to="/cape-breton-tours/">Cape Breton tours</Link></p></section></>}
export function DestinationPage({slug}){const d=destinationBySlug(slug);return <><PageHero eyebrow={d.kind.toUpperCase()+' · CAPE BRETON'} title={d.h1} text={d.intro} image={d.image} crumbs={[['Destinations','/destinations/'],[d.name]]}/>
<section className="wrap market-detail"><div>
<section className="detail-block"><h2>Why visit {d.name}</h2><p>{d.why}</p></section>
<section className="detail-block"><h2>Things to see</h2><ul className="see-list">{d.see.map(([name,text])=><li key={name}><MapPin size={18}/><div><h3>{name}</h3><p>{text}</p></div></li>)}</ul></section>
<section className="detail-block"><h2>Travel tips</h2><ul className="check-list">{d.tips.map(tip=><li key={tip}><Check size={18}/>{tip}</li>)}</ul></section>
<section className="detail-block"><h2>{d.slug==='sydney-nova-scotia'?'Getting around':'Getting there from Sydney'}</h2><p>{d.fromSydney}</p></section>
<section className="detail-block"><h2>Official visitor information</h2><p>Opening dates, fees and conditions change, so check the official source before you travel.</p><p className="inline-links">{d.official.map(([label,url])=><SmartLink key={url} to={url}>{label}</SmartLink>)}</p></section>
<Faqs items={d.faqs}/></div><ContactCard title={'Visit '+d.name+' with us'} text="We plan private tours from Sydney around the places you want to see."/></section>
<RelatedTours slugs={d.tours} title={'Tours that visit '+d.name}/></>}
