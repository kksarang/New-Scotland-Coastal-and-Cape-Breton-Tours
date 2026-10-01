import { SITE } from "@/lib/config";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristInformationCenter",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    description: SITE.description,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Nova Scotia",
      addressCountry: "CA",
    },
    areaServed: {
      "@type": "Place",
      name: "Cape Breton Island, Nova Scotia, Canada",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
