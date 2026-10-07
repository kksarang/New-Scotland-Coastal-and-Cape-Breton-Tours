import {Link} from 'react-router-dom';
import {servicePage} from '../data/services';
import {business} from '../data/business';
import {PageHero,ContentSections,Faqs,RelatedTours,Services,ContactCard} from '../components/Shared';
import InquiryForm from '../components/InquiryForm';
const formHeadings={cruise:'Send a shore excursion enquiry',airport:'Send an airport transfer enquiry',taxi:'Send a ride enquiry'};
export default function ServicePage({slug}){const s=servicePage(slug);return <><PageHero eyebrow={s.eyebrow} title={s.h1} text={s.intro} image={s.image} crumbs={[[s.name]]}><div className="hero-actions">{s.form?<a className="button navy" href="#quote">{formHeadings[s.form]}</a>:<Link className="button navy" to="/cape-breton-tours/">Explore Cape Breton tours</Link>}<a className="button light" href={'tel:'+business.tel}>Call us</a></div></PageHero>
<section className="wrap market-detail"><div>{slug==='taxi'&&<section className="detail-block"><h2>Ways we can help</h2><Services all/></section>}<ContentSections sections={s.sections}/>{slug==='taxi'&&<div className="vehicle-feature"><img loading="lazy" src="/images/scenes/private-tour-vehicle-cape-breton-800.webp" width="800" height="492" alt="Illustration of a white SUV used for Cape Breton tours and taxi service"/><div><h3>Settle in. Enjoy the ride.</h3><p>Actual vehicle, capacity and luggage space are confirmed for your journey.</p><a className="button navy" href="#quote">Send an enquiry</a></div></div>}<Faqs items={s.faqs}/>{s.form&&<InquiryForm mode={s.form} service={s.formService} heading={formHeadings[s.form]}/>}</div><ContactCard/></section>
<RelatedTours slugs={s.tours} title={s.form==='cruise'?'Popular shore excursions':'Popular Cape Breton tours'}/></>}
