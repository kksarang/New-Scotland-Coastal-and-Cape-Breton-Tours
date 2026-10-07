import {useCallback, useRef, useState} from 'react';
import {
  alternativeContactLinks,
  submitEnquiryToProvider,
  trackEnquiryAccepted,
  trackEnquiryAttempt,
  trackEnquiryError,
} from '../lib/enquirySubmit';

export function useEnquirySubmit({formKey, getAnalyticsMeta}) {
  const [phase, setPhase] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [alternatives, setAlternatives] = useState(null);
  const inFlight = useRef(false);
  const statusRef = useRef(null);

  const reset = useCallback(() => {
    if (phase === 'submitting') return;
    setPhase('idle');
    setErrorMessage('');
    setAlternatives(null);
  }, [phase]);

  const send = useCallback(
    async buildPayload => {
      if (inFlight.current) return;
      const meta = getAnalyticsMeta?.() || {form: formKey};
      trackEnquiryAttempt({
        form: meta.form || formKey,
        service: meta.service || '',
        tour: meta.tourSlug || meta.tour || '',
      });

      inFlight.current = true;
      setPhase('submitting');
      setErrorMessage('');
      setAlternatives(null);

      const payload = buildPayload();
      const result = await submitEnquiryToProvider(payload);

      inFlight.current = false;

      if (result.ok) {
        setPhase('success');
        setAlternatives(
          alternativeContactLinks(
            payload._subject || 'Website enquiry follow-up'
          )
        );
        trackEnquiryAccepted({
          form: meta.form || formKey,
          service: meta.service || payload.service || '',
          tourSlug: meta.tourSlug || payload.tour_slug || '',
          cruise: meta.cruise ?? payload._cruise === 'yes',
        });
        requestAnimationFrame(() => statusRef.current?.focus());
        return;
      }

      setPhase('error');
      setErrorMessage(result.message);
      trackEnquiryError({
        form: meta.form || formKey,
        code: result.code || 'unknown',
        service: meta.service || '',
        tour: meta.tourSlug || '',
      });
      requestAnimationFrame(() => statusRef.current?.focus());
    },
    [formKey, getAnalyticsMeta]
  );

  return {
    phase,
    errorMessage,
    alternatives,
    statusRef,
    reset,
    send,
    isSubmitting: phase === 'submitting',
  };
}
