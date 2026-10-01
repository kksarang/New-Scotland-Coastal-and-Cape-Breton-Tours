"use client";

import {useId, useRef, useState} from "react";
import {useSearchParams} from "next/navigation";
import {TOURS} from "@/lib/tours";
import {SITE} from "@/lib/config";
import {EMPTY_ENQUIRY, deliverEnquiry, enquiryText, formEndpoint, localDate, validateEnquiry, type EnquiryData, type EnquiryErrors} from "@/lib/enquiry";

const OPTIONS = [...TOURS.map(t => ({value:t.slug,label:t.title})), {value:"private-sightseeing",label:"A custom private journey"}, {value:"airport-transfer",label:"Airport transfer"}, {value:"cruise-excursion",label:"Cruise shore excursion"}, {value:"general",label:"Help me choose"}];
const endpoint = formEndpoint(process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT);

export default function EnquiryForm({prefilledTour,compact=false}:{prefilledTour?:string;compact?:boolean}) {
  const params = useSearchParams();
  return <EnquiryFormContent key={(prefilledTour || "")+params.toString()} prefilledTour={prefilledTour} compact={compact} params={params}/>;
}

function EnquiryFormContent({prefilledTour,compact,params}:{prefilledTour?:string;compact:boolean;params:Pick<URLSearchParams,"get">}) {
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const feedback = useRef<HTMLDivElement>(null);
  const sending = useRef(false);
  const [form,setForm] = useState<EnquiryData>(() => {
    const slug = prefilledTour || params.get("tour") || "";
    const count = Number(params.get("guests") || 2);
    return {...EMPTY_ENQUIRY, tourInterest:OPTIONS.some(t => t.value === slug) ? slug : "", guests:Number.isInteger(count) && count>=1 && count<=50 ? String(count) : "2", preferredDate:/^\d{4}-\d{2}-\d{2}$/.test(params.get("date") || "") ? params.get("date")! : ""};
  });
  const [errors,setErrors] = useState<EnquiryErrors>({});
  const [status,setStatus] = useState<"idle"|"sending"|"sent"|"error"|"draft">("idle");
  const [error,setError] = useState("");
  const title = OPTIONS.find(t => t.value===form.tourInterest)?.label || "My Cape Breton journey";
  const selected = TOURS.find(t => t.slug===form.tourInterest);
  const draft = "mailto:"+SITE.email+"?subject="+encodeURIComponent("Website enquiry — "+title)+"&body="+encodeURIComponent(enquiryText(form,title));

  function update(field:keyof EnquiryData,value:string) {
    setForm(previous=>({...previous,[field]:value}));
    setErrors(previous=>({...previous,[field]:undefined}));
    if (status !== "sending") {setStatus("idle");setError("");}
  }
  function focusFeedback() { requestAnimationFrame(()=>feedback.current?.focus()); }
  async function submit(event:React.FormEvent) {
    event.preventDefault();
    if(sending.current) return;
    const problems=validateEnquiry(form);
    if(Object.keys(problems).length) {
      setErrors(problems);
      requestAnimationFrame(()=>formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
      return;
    }
    if(form.website) {setStatus("error");setError("Please contact our team directly.");focusFeedback();return;}
    if(!endpoint) {setStatus("draft");focusFeedback();return;}
    sending.current=true;setStatus("sending");setError("");
    try {
      await deliverEnquiry(endpoint, {...form, email:form.email.trim(), tourInterest:title, _gotcha:form.website, subject:"Cape Breton enquiry — "+title});
      setStatus("sent");focusFeedback();
    } catch(error) {
      setStatus("error");setError(error instanceof Error && error.name!=="TimeoutError" ? error.message : "We could not confirm delivery in time. Please check before retrying, or contact our team directly.");focusFeedback();
    } finally {sending.current=false;}
  }
  const field = (name:keyof EnquiryData,label:string,type="text",placeholder="",required=false) => <div className="enquiry-field">
    <label htmlFor={id+name}>{label}{required && <span aria-hidden="true"> *</span>}</label>
    <input id={id+name} name={name} type={type} value={form[name]} onChange={e=>update(name,e.target.value)} placeholder={placeholder}
      required={required} min={type==="date"?localDate():undefined}
      autoComplete={name==="fullName"?"name":name==="email"?"email":name==="phone"?"tel":undefined}
      maxLength={name==="fullName"?100:name==="email"?254:name==="phone"?40:250}
      aria-invalid={!!errors[name]} aria-describedby={errors[name]?id+name+"-error":undefined}/>
    {errors[name] && <p id={id+name+"-error"} className="field-error">{errors[name]}</p>}
  </div>;
  return <form ref={formRef} onSubmit={submit} noValidate className={"journey-form "+(compact?"journey-form-compact":"")} aria-label="Tour enquiry form" aria-busy={status==="sending"}>
    <fieldset disabled={status==="sending" || status==="sent"}>
      <div className="form-section-heading"><span>01</span><div><small>YOUR ISLAND ESCAPE</small><h3>A day that feels like you.</h3></div></div>
      <div className="enquiry-field">
        <label htmlFor={id+"tour"}>Choose your experience <span aria-hidden="true">*</span></label>
        <select id={id+"tour"} name="tourInterest" value={form.tourInterest} onChange={e=>update("tourInterest",e.target.value)} required aria-invalid={!!errors.tourInterest} aria-describedby={errors.tourInterest?id+"tour-error":undefined}>
          <option value="">Where would you like to explore?</option>{OPTIONS.map(t=><option key={t.value} value={t.value}>{t.label}</option>)}
        </select>
        {errors.tourInterest && <p id={id+"tour-error"} className="field-error">{errors.tourInterest}</p>}
      </div>
      <div className="enquiry-grid">
        {field("preferredDate","Preferred date","date")}
        <div className="enquiry-field">
          <label htmlFor={id+"guests"}>Travellers <span aria-hidden="true">*</span></label>
          <div className="traveller-stepper">
            <button type="button" aria-label="Remove one traveller" disabled={Number(form.guests)<=1} onClick={()=>update("guests",String(Math.max(1,Number(form.guests)-1)))}>−</button>
            <input id={id+"guests"} name="guests" type="number" min="1" max="50" step="1" required value={form.guests} onChange={e=>update("guests",e.target.value)} aria-invalid={!!errors.guests} aria-describedby={errors.guests?id+"guest-error":undefined}/>
            <button type="button" aria-label="Add one traveller" disabled={Number(form.guests)>=50} onClick={()=>update("guests",String(Math.min(50,Number(form.guests)+1)))}>+</button>
          </div>{errors.guests && <p id={id+"guest-error"} className="field-error">{errors.guests}</p>}
        </div>
      </div>
      <div className="selected-journey" aria-live="polite"><span>{title}<small>{form.guests || "—"} travellers · {form.preferredDate || "Flexible dates"}</small></span><strong>{selected?.priceFrom ? "From "+selected.priceFrom : "Personalised quote"}</strong></div>
      <div className="form-section-heading"><span>02</span><div><small>THE DETAILS THAT MATTER</small><h3>Make yourself at home.</h3></div></div>
      {field("pickupPreference","Your pickup location","text","Hotel, cruise terminal, airport or address")}
      <div className="enquiry-field"><label htmlFor={id+"message"}>Your wishlist <small>optional</small></label><textarea id={id+"message"} name="message" rows={3} maxLength={4000} value={form.message} onChange={e=>update("message",e.target.value)} placeholder="Must-see places, flight or ship details, children, luggage or accessibility needs…" aria-invalid={!!errors.message}/></div>
      <div className="form-section-heading"><span>03</span><div><small>A PERSONAL CONNECTION</small><h3>Let’s start with a hello.</h3></div></div>
      {field("fullName","Your name","text","First and last name",true)}
      <div className="enquiry-grid">{field("email","Email address","email","you@example.com",true)}{field("phone","Phone number","tel","Country code + number")}</div>
      <div className="enquiry-honeypot" aria-hidden="true"><label htmlFor={id+"website"}>Leave this field empty</label><input id={id+"website"} name="_gotcha" value={form.website} onChange={e=>update("website",e.target.value)} tabIndex={-1} autoComplete="off"/></div>
      <p className="enquiry-privacy">* Required. Your details are used to respond to your travel enquiry{endpoint?.includes("formspree.io")?" and are processed by Formspree":""}. No payment is taken and your booking is confirmed separately.</p>
      <button className="enquiry-submit" type="submit" disabled={status==="sending" || status==="sent"}>{status==="sending"?"Sending your enquiry…":status==="sent"?"Request submitted":endpoint?"Send to our team":"Prepare email enquiry"}<span aria-hidden="true">↗</span></button>
    </fieldset>
    {(status==="error" || status==="draft" || status==="sent") && <div className={"enquiry-feedback "+status} ref={feedback} tabIndex={-1} role={status==="error"?"alert":"status"}>
      <h3>{status==="sent"?"Your request has been submitted.":status==="draft"?"Your email is ready to send.":"Let’s get your enquiry to the team."}</h3>
      <p>{status==="sent"?"Thank you. Your enquiry was accepted for delivery. Our team will reply with availability and your personal quote.":status==="draft"?"Nothing has been sent yet. Open your email app below, review your request, and press Send.":error}</p>
      {status!=="sent" && <a className="btn-outline-navy" href={draft}>Open email to our team ↗</a>}
      {status==="sent" && <button type="button" className="btn-outline-navy" onClick={()=>{setForm({...EMPTY_ENQUIRY});setStatus("idle");}}>Plan another journey</button>}
    </div>}
  </form>;
}
