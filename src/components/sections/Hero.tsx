"use client";
import {useState} from "react";
import ScenicArtwork from "@/components/ui/ScenicArtwork";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {TOURS} from "@/lib/tours";
import {localDate} from "@/lib/enquiry";

export default function Hero() {
  const router=useRouter();
  const [tour,setTour]=useState("");
  const [date,setDate]=useState("");
  const [guests,setGuests]=useState("2");
  return <section className="coastal-hero" aria-label="Discover Cape Breton">
    <div className="coastal-hero-main">
      <div className="coastal-hero-copy"><p className="eyebrow-coastal"><span/>CAPE BRETON ISLAND · NOVA SCOTIA</p><h1>Some places<br/>stay with you.<br/><em>This is one.</em></h1><p className="hero-intro">Ocean roads. Unhurried moments. A little local magic. Discover your side of Cape Breton on a private journey made around you.</p><div className="hero-buttons"><Link href="/tours" className="btn-primary">Find your experience <span aria-hidden="true">↗</span></Link><Link href="/about" className="hero-story">Meet your local team <span aria-hidden="true">→</span></Link></div><div className="hero-signature"><span aria-hidden="true">✧</span><span>Private journeys.<br/><strong>Extraordinary little moments.</strong></span></div></div>
      <div className="coastal-hero-image"><ScenicArtwork label="Illustrated coastal road winding through green highlands beside the ocean"/><div className="hero-image-caption"><span>THE SCENIC ROUTE IS CALLING</span><p>Follow the coast.<br/>Find your Cape Breton.</p></div><span className="hero-art-note">Destination illustration</span><span className="hero-coordinate">46° N / 60° W</span></div>
    </div>
    <div className="coastal-planner"><div className="planner-heading"><span>YOUR NEXT GOOD DAY</span><h2>Where shall we take you?</h2></div><form aria-label="Quick enquiry" onSubmit={e=>{e.preventDefault();router.push("/contact?"+new URLSearchParams({tour,date,guests}));}}>
      <label htmlFor="quick-tour">The experience<select id="quick-tour" value={tour} onChange={e=>setTour(e.target.value)}><option value="">Help me choose</option>{TOURS.map(t=><option key={t.slug} value={t.slug}>{t.title}</option>)}</select></label>
      <label htmlFor="quick-date">Your travel date<input id="quick-date" type="date" min={localDate()} value={date} onChange={e=>setDate(e.target.value)}/></label>
      <label htmlFor="quick-guests">Travellers<input id="quick-guests" type="number" min="1" max="50" step="1" required value={guests} onChange={e=>setGuests(e.target.value)}/></label>
      <button className="btn-primary" type="submit">Plan my day <span aria-hidden="true">↗</span></button>
    </form></div>
    <div className="coastal-values"><span><b>01</b> Your own private group</span><span><b>02</b> A local perspective</span><span><b>03</b> A pace that feels like you</span><span><b>04</b> Pickup by arrangement</span></div>
  </section>;
}
