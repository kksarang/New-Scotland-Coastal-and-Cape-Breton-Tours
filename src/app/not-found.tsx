import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
};

export default function NotFoundPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80"
        alt="Cape Breton lighthouse"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative z-10 text-center px-6 max-w-lg mx-auto">
        <span className="font-serif text-8xl text-champagne block mb-4">404</span>
        <h1 className="font-serif text-3xl md:text-4xl text-white mb-4">
          This Horizon Doesn&apos;t Exist
        </h1>
        <p className="font-sans text-base text-white/70 leading-relaxed mb-8">
          The page you are looking for couldn&apos;t be found — but Cape Breton is full of roads worth taking. Let us point you somewhere beautiful.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">Back to Home</Link>
          <Link href="/tours" className="btn-outline">Explore Tours</Link>
        </div>
      </div>
    </div>
  );
}
