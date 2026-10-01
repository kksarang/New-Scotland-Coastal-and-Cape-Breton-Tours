import test from 'node:test';
import assert from 'node:assert/strict';
import {EMPTY_ENQUIRY, validateEnquiry, formEndpoint, deliverEnquiry, enquiryText} from '../src/lib/enquiry.ts';
const valid = {...EMPTY_ENQUIRY, fullName:'Test Traveller', email:'traveller@example.com', tourInterest:'cabot-trail-coastal', preferredDate:'2026-10-02'};
test('accepts today and flexible dates, rejects past and impossible dates',()=>{
  assert.deepEqual(validateEnquiry(valid,'2026-10-02'),{});
  assert.deepEqual(validateEnquiry({...valid,preferredDate:''},'2026-10-02'),{});
  for(const date of ['2026-10-01','2026-02-30','not-a-date']) assert.ok(validateEnquiry({...valid,preferredDate:date},'2026-10-02').preferredDate);
});
test('requires a name, email and experience; validates party size and field limits',()=>{
  assert.ok(validateEnquiry(EMPTY_ENQUIRY).email);
  assert.ok(validateEnquiry({...valid,email:'bad-address'}).email);
  for(const guests of ['','0','-1','2.5','51','NaN']) assert.ok(validateEnquiry({...valid,guests}).guests);
  assert.ok(validateEnquiry({...valid,message:'x'.repeat(4001)}).message);
});
test('delivery endpoints must be explicitly configured, secure and credential-free',()=>{
  for(const value of ['',undefined,'/api/enquiry','http://example.com','https://user:secret@example.com','javascript:alert(1)']) assert.equal(formEndpoint(value),null);
  assert.equal(formEndpoint('https://formspree.io/f/example'),'https://formspree.io/f/example');
});
test('posts enquiry fields and requires confirmed acceptance',async()=>{
  let sent;
  await deliverEnquiry('https://forms.example.com/enquiry',{email:valid.email},async(url,options)=>{
    sent=options;
    return Response.json({ok:true});
  });
  assert.equal(sent.method,'POST');
  assert.equal(JSON.parse(sent.body).email,valid.email);
  for(const response of [Response.json({ok:false}),Response.json({}),new Response('<html>Missing endpoint</html>'),Response.json({ok:true},{status:503})]){
    await assert.rejects(deliverEnquiry('https://forms.example.com/enquiry',{},async()=>response));
  }
});
test('supports Formspree JSON acceptance; rejects provider errors and impostor hosts',async()=>{
  await deliverEnquiry('https://formspree.io/f/example',{},async()=>Response.json({next:'/thanks'}));
  await assert.rejects(deliverEnquiry('https://formspree.io/f/example',{},async()=>Response.json({errors:[{message:'Invalid'}]})));
  await assert.rejects(deliverEnquiry('https://formspree.io.example.com/f/example',{},async()=>Response.json({next:'/thanks'})));
});
test('rate limits and network failures never become success',async()=>{
  await assert.rejects(deliverEnquiry('https://forms.example.com',{},async()=>Response.json({},{status:429})),/Too many attempts/);
  await assert.rejects(deliverEnquiry('https://forms.example.com',{},async()=>{throw new TypeError('Network error');}),/Network error/);
});
test('email draft includes readable tour title and all relevant details',()=>{
  const text=enquiryText({...valid,guests:'4',pickupPreference:'Test hotel'},'Cabot Trail Coastal Tour');
  assert.ok(text.includes('Experience: Cabot Trail Coastal Tour'));
  assert.ok(text.includes('Travellers: 4'));
  assert.ok(text.includes('Pickup: Test hotel'));
});
