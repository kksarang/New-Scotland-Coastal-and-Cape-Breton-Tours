"use client";
import {useEffect,useRef} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {SITE} from "@/lib/config";
const LINKS=[{href:"/",label:"Home"},{href:"/tours",label:"Experiences"},{href:"/private-tours",label:"Private journeys"},{href:"/about",label:"Our story"},{href:"/gallery",label:"Gallery"}];
export default function Header(){
  const pathname=usePathname();
  const dialog=useRef<HTMLDialogElement>(null);
  const toggle=useRef<HTMLButtonElement>(null);
  useEffect(()=>{dialog.current?.close();document.body.style.overflow="";},[pathname]);
  function close(){dialog.current?.close();document.body.style.overflow="";toggle.current?.focus();}
  return <><header className="site-header fixed top-0 left-0 right-0 z-50 bg-navy-deep/95 backdrop-blur-md">
    <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px] md:h-20 gap-5">
      <Link href="/" className="flex flex-col leading-none" aria-label="New Scotland Coastal Home"><span className="font-serif text-xl text-white">New Scotland</span><span className="brand-sub text-champagne uppercase">Coastal & Cape Breton Tours</span></Link>
      <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">{LINKS.map(link=><Link key={link.href} href={link.href} className="nav-link text-white/80" aria-current={pathname===link.href?"page":undefined}>{link.label}</Link>)}</nav>
      <div className="flex items-center gap-3"><Link href="/contact" className="header-trip hidden md:inline-flex">Plan your journey ↗</Link><button ref={toggle} type="button" className="menu-toggle lg:hidden" aria-label="Open menu" onClick={()=>{dialog.current?.showModal();document.body.style.overflow="hidden";}}>☰</button></div>
    </div>
  </header><dialog ref={dialog} className="mobile-nav-dialog" aria-label="Navigation menu" onClose={()=>{document.body.style.overflow="";}} onCancel={()=>{document.body.style.overflow="";}}>
    <button type="button" className="menu-close" aria-label="Close menu" onClick={close}>×</button><nav aria-label="Mobile navigation">{[...LINKS,{href:"/contact",label:"Plan your journey"}].map(link=><Link href={link.href} key={link.href} onClick={close} aria-current={pathname===link.href?"page":undefined}>{link.label}</Link>)}</nav><div className="mobile-nav-contact"><a href={"tel:"+SITE.phone}>{SITE.phoneDisplay}</a><a href={"mailto:"+SITE.email}>{SITE.email}</a></div>
  </dialog></>;
}
