import {homeHero, homeHeroJpegSrcSet, homeHeroSrc, homeHeroSrcSet} from '../data/images';
import {Search, MapPin, CalendarDays} from 'lucide-react';
import {Link, useNavigate} from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="market-hero market-hero-photo">
      <picture className="hero-picture">
        <source type="image/webp" srcSet={homeHeroSrcSet()} sizes="100vw"/>
        <source type="image/jpeg" srcSet={homeHeroJpegSrcSet()} sizes="100vw"/>
        <img
          className="scene hero-photo"
          src={homeHeroSrc()}
          width={homeHero.width}
          height={homeHero.height}
          alt={homeHero.alt}
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />
      </picture>
      <div className="market-hero-shade" aria-hidden="true"/>
      <div className="market-hero-content wrap">
        <p>CAPE BRETON IN AUTUMN COLOUR</p>
        <h1>Private Cape Breton Tours & Taxi Service in Sydney, Nova Scotia</h1>
        <p>
          Explore the Cabot Trail, Fortress of Louisbourg, Cape Breton Highlands, coastal communities and private shore
          excursions, with flexible pickup from Sydney, Nova Scotia.
        </p>
        <div className="hero-actions">
          <Link className="button navy" to="/cape-breton-tours/">Explore tours</Link>
          <Link className="button light" to="/book/">Send an enquiry</Link>
        </div>
        <form
          className="experience-search"
          role="search"
          onSubmit={e => {
            e.preventDefault();
            navigate('/cape-breton-tours/?' + new URLSearchParams(new FormData(e.currentTarget)));
          }}
        >
          <label>
            <MapPin size={23}/>
            <span>
              Where to?
              <input name="q" placeholder="Cabot Trail, coastal tours, history…" aria-label="Search destinations or experiences"/>
            </span>
          </label>
          <label className="search-date">
            <CalendarDays size={23}/>
            <span>
              When?
              <input name="date" type="date" min={new Date().toLocaleDateString('en-CA')} aria-label="Travel date"/>
            </span>
          </label>
          <button aria-label="Search experiences">
            <Search size={23}/>
            <span>Search</span>
          </button>
        </form>
      </div>
      <small>{homeHero.credit}</small>
    </section>
  );
}
