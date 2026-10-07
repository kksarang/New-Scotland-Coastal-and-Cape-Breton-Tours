# Connect newscotlandcapetours.com

The supplied Hostinger screenshot shows `A @ → 2.57.91.91` and `CNAME www → newscotlandcapetours.com`. These are a screenshot of the existing setup, not verified deployment targets for the new website. A GitHub push by itself does not publish the website or connect the domain.

## If you have Hostinger Web or Cloud Hosting

1. In hPanel, open **Websites**, choose this website and open its dashboard. Ensure the hosting website is assigned to `newscotlandcapetours.com`.
2. Back up the current `public_html` folder before replacing the old website.
3. Open **Files → File Manager → public_html**. Upload and extract the provided `hostinger-website.zip`. Its contents must be directly inside `public_html`, so the entry point is `public_html/index.html`, not `public_html/dist/index.html`.
4. The archive includes the assets, images, pre-rendered page directories, sitemap, robots.txt and `.htaccess`. Preserve all of these, including the hidden `.htaccess` file. Remove or rename an old `index.php` only after backing up the previous site, if it takes precedence over the new index.
5. Find the assigned website IP in Hostinger’s hosting dashboard. If the domain uses Hostinger nameservers and is assigned to the same account, the hosting IP may be detected automatically. Otherwise set `A @` to the **actual hosting IP**. Keep `CNAME www → newscotlandcapetours.com` for this configuration. Do not reuse the screenshot’s IP without checking it against your hosting plan.
6. Keep email-related MX, SPF, DKIM and DMARC records. Do not use “Reset DNS records.”
7. Activate SSL for the domain and `www` in the hosting dashboard. After the certificate is active, enable HTTPS redirection and choose the apex domain as canonical.
8. Verify the homepage and a direct visit to `/tours/cabot-trail/`, then test mobile navigation and send a test enquiry from `/book/` or `/contact/`. With Formspree configured (`FORMSPREE_FORM_ID` in GitHub Actions or Hostinger build env), the form should show success after the provider accepts the submission; confirm the notification at `newscotlandcapetours@gmail.com`. WhatsApp/SMS links are optional follow-ups and open the visitor’s apps separately.
9. Check both `https://newscotlandcapetours.com` and `https://www.newscotlandcapetours.com`, then submit `/sitemap.xml` to Google Search Console.

## If you own only the domain

A web hosting destination must be selected before changing DNS. The private Sites URL supplied with this project is a review version, not automatically a public replacement for the client’s domain. A Hostinger Web/Cloud Hosting plan can serve the supplied static archive. Hostinger Website Builder-only plans do not provide the same file-upload workflow.

Once the hosting destination is known, use its exact assigned DNS targets. Do not guess an IP or point the domain to a GitHub repository URL.

## Official Hostinger instructions

- DNS editor: https://www.hostinger.com/support/how-to-use-hostingers-dns-zone-editor/
- File manager and public_html: https://support.hostinger.com/en/articles/4548688-basic-actions-in-the-file-manager
- Pointing a domain to Hostinger: https://support.hostinger.com/en/articles/1863967-how-to-point-a-domain-to-hostinger

## Before public client handover

Confirm tour availability, operational details, image approval, vehicle capacity, admission handling, cancellation/payment terms and the preferred enquiry channel with the business. No payment processing or server-side booking database is included in this version.
