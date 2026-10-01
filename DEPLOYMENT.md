# Publish the polished website

This repository builds a static Next.js website for **GitHub Pages**. Run `npm ci`, `npm test`, `npm run lint`, and `npm run build`. Upload/publish the resulting **out/** directory, not the source repository root.

## GitHub Pages

1. Merge these changes into main.
2. In Settings → Pages → Build and deployment, change Source from **Deploy from a branch** to **GitHub Actions**.
3. The included workflow builds the site and deploys the generated Pages artifact. Keep the custom domain set to `newscotlandcapetours.com`.
4. Once GitHub’s certificate is ready, enable Enforce HTTPS. Verify the homepage, /tours/, /contact/ and a direct tour-detail URL.

No DNS changes are made by this code. The exported CNAME retains the existing domain. Destination illustrations are existing project artwork, not photographs of the actual tour.

## Direct enquiry email — account setup still required

GitHub Pages cannot run a Node.js SMTP endpoint. The form must use an external HTTPS form endpoint. It currently prepares an email draft when no endpoint is configured and explicitly tells the visitor that nothing has been sent. It never silently launches an email app or labels a draft as delivered.

### Formspree

1. In the business’s Formspree account, create a form and verify **newscotlandcapetours@gmail.com** as the recipient (or use the owner’s confirmed team address).
2. Enable spam protection and restrict allowed domains to the actual website domain. Check the service’s submission allowance before going live.
3. Copy the public endpoint, such as `https://formspree.io/f/YOUR_FORM_ID`.
4. In GitHub Settings → Secrets and variables → Actions → **Variables**, add `NEXT_PUBLIC_ENQUIRY_ENDPOINT` with that endpoint. It is a public URL, not a secret.
5. Re-run the build/deployment workflow. Public Next.js variables are baked in at build time.
6. Send one clearly labelled test enquiry from the live contact page. Confirm the success message, inbox receipt, spam folder and Reply-To behavior. Provider acceptance is not proof of inbox arrival.

Locally, set the same variable in .env.local and restart the development server. Never put SMTP credentials or private API keys in NEXT_PUBLIC_ variables, GitHub source, or browser code.

### Existing custom backend

A custom endpoint must accept a JSON POST, validate inputs, limit abuse, deliver the email securely, and return `{ "ok": true }` **only after its email provider accepts the request**. It must allow the website origin through CORS. The browser retains form details on failure, limits requests to 20 seconds, prevents double-click duplicates, and offers an explicit email draft fallback.

The previous SMTP route is preserved as `server/next-enquiry-route.ts` for a separately hosted Next.js backend. It is not executed or deployed by GitHub Pages. On a Node-hosted Next.js app, install its nodemailer dependencies and place the handler at src/app/api/enquiry/route.ts; configure SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS and ENQUIRY_TO_EMAIL on that backend. Use TLS and a verified sender. Adapt allowed origins to your actual deployment and use shared rate limiting if scaling across instances.

## Release checks

- Confirm the deployment artifact and the custom-domain HTTPS certificate.
- Check phone navigation, mobile menu, tour links and direct page reloads.
- Check required fields, invalid guest counts, today’s date, error recovery and email fallback.
- With the real endpoint configured, verify one complete enquiry in the team mailbox.
- Confirm the owner’s tour rates and replace any illustrative/stock imagery as appropriate.

Until the endpoint and recipient are verified, **automatic email delivery is not live**.
