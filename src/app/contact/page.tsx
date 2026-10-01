import type {Metadata} from "next";
import ScenicArtwork from "@/components/ui/ScenicArtwork";
import Link from "next/link";
import {Suspense} from "react";
import EnquiryForm from "@/components/forms/EnquiryForm";
import {SITE} from "@/lib/config";
export const metadata:Metadata={title:"Plan Your Trip — Contact",description:"Tell us about your Cape Breton plans. Connect with our local team for a private tour and personalised quote.",alternates:{canonical:"/contact"}};
export default function ContactPage() {
  return <section className="contact-experience">
    <div className="contact-shell">
      <Link href="/tours" className="contact-back">← Back to experiences</Link>
      <div className="contact-heading"><p className="eyebrow-coastal">A LITTLE PLANNING. A GREAT ADVENTURE.</p><h1>Your island story{" "}<br/>starts <em>here.</em></h1><p>Share a few details. We’ll help turn your wishlist into a day worth remembering.</p></div>
      <div className="contact-layout"><div className="contact-form-card"><div className="contact-form-top"><span>LET’S MAKE A DAY OF IT</span><p>Private, personal, and planned with you.</p></div><Suspense fallback={<p className="p-8">Loading your trip details…</p>}><EnquiryForm/></Suspense></div>
      <aside className="contact-companion"><div className="companion-image"><ScenicArtwork name="harbour" label="Illustration of a peaceful coastal harbour"/><span>A little more Cape Breton.</span><small>Destination illustration</small></div><div className="companion-content"><span className="eyebrow-coastal">GOOD JOURNEYS BEGIN WITH A HELLO</span><h2>Real people.<br/>Local knowledge.</h2><p>From your first question to your final stop, plan directly with our team.</p><ol><li><b>01</b><span><strong>Tell us what you love.</strong>Coastal views, local stories or a day of discovery.</span></li><li><b>02</b><span><strong>We’ll shape your day.</strong>Discuss your route, availability and personal quote.</span></li><li><b>03</b><span><strong>Then make it yours.</strong>Confirm the details directly before you travel.</span></li></ol><div className="companion-contact"><span>PREFER A CONVERSATION?</span><a href={"tel:"+SITE.phone}>{SITE.phoneDisplay} ↗</a><a href={"mailto:"+SITE.email}>{SITE.email}</a></div><p className="companion-note">No payment at enquiry.<br/>Just a great place to start.</p></div></aside></div>
    </div>
  </section>;
}
