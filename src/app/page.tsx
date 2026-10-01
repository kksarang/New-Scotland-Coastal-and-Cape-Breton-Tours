import type { Metadata } from "next";
import { Suspense } from "react";
import Hero from "@/components/sections/Hero";
import FeaturedTours from "@/components/sections/FeaturedTours";
import EditorialFeature from "@/components/sections/EditorialFeature";
import DestinationHighlights from "@/components/sections/DestinationHighlights";
import PrivateToursBanner from "@/components/sections/PrivateToursBanner";
import HowItWorks from "@/components/sections/HowItWorks";
import HomeGalleryPreview from "@/components/sections/HomeGalleryPreview";
import HomeFAQ from "@/components/sections/HomeFAQ";
import HomeCTA from "@/components/sections/HomeCTA";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: `${SITE.name} | ${SITE.tagline}`,
  description: SITE.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Suspense>
        <Hero />
      </Suspense>
      <FeaturedTours />
      <EditorialFeature />
      <DestinationHighlights />
      <PrivateToursBanner />
      <HowItWorks />
      <HomeGalleryPreview />
      <HomeFAQ />
      <HomeCTA />
    </>
  );
}
