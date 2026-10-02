import AgentTools from './components/AgentTools';
import {useEffect} from 'react';
import {Routes,Route,Navigate,useLocation} from 'react-router-dom';
import Header from './components/Header';
import {Footer} from './components/Shared';
import Home from './pages/Home';
import {Tours,TourDetails} from './pages/Tours';
import ServicePage from './pages/Landing';
import {Destinations,DestinationPage} from './pages/Destinations';
import {Guides,GuidePage} from './pages/Guides';
import Booking from './pages/Booking';
import Gallery from './pages/Gallery';
import {About,Contact,Legal,NotFound} from './pages/Other';
import {tours} from './data/tours';
import {servicePages} from './data/services';
import {destinations} from './data/destinations';
import {guides} from './data/guides';
import {findRoute,redirects} from './seo/routes';
import {applyHead} from './seo/head';
import {initAnalytics,track,trackPageView} from './lib/analytics';
function PageMetadata(){const {pathname,hash}=useLocation();useEffect(()=>{initAnalytics()},[]);useEffect(()=>{if(!hash)window.scrollTo(0,0);const route=findRoute(pathname);applyHead(route);trackPageView(route.path,route.title);if(route.tour)track('tour_view',{tour:route.tour.slug});if(route.destination)track('destination_view',{destination:route.destination.slug})},[pathname]);return null}
export default function App(){return <><a className="skip-link" href="#main">Skip to content</a><PageMetadata/><AgentTools/><Header/><main id="main"><Routes>
<Route path="/" element={<Home/>}/>
<Route path="/cape-breton-tours/" element={<Tours/>}/>
{tours.map(t=><Route key={t.slug} path={t.path} element={<TourDetails slug={t.slug}/>}/>)}
{servicePages.map(s=><Route key={s.slug} path={s.path} element={<ServicePage slug={s.slug}/>}/>)}
<Route path="/destinations/" element={<Destinations/>}/>
{destinations.map(d=><Route key={d.slug} path={d.path} element={<DestinationPage slug={d.slug}/>}/>)}
<Route path="/guides/" element={<Guides/>}/>
{guides.map(g=><Route key={g.slug} path={g.path} element={<GuidePage slug={g.slug}/>}/>)}
<Route path="/about/" element={<About/>}/>
<Route path="/gallery/" element={<Gallery/>}/>
<Route path="/book/" element={<Booking/>}/>
<Route path="/contact/" element={<Contact/>}/>
<Route path="/privacy/" element={<Legal privacy/>}/>
<Route path="/terms/" element={<Legal/>}/>
{Object.entries(redirects).map(([from,to])=><Route key={from} path={from} element={<Navigate to={to} replace/>}/>)}
<Route path="*" element={<NotFound/>}/></Routes></main><Footer/></>}
