import { SITE_URL } from "@/app/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "@id": `${SITE_URL}/#studio`,
    name: "Fragrance Studios",
    alternateName: "Fragrance Studios Abuja",
    url: SITE_URL,
    description:
      "A recording, production, mixing and mastering studio in Abuja, Nigeria.",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Abuja",
        addressRegion: "FCT",
        addressCountry: "NG",
      },
    },
    sameAs: [
      "https://www.instagram.com/fragrancestudios/",
      "https://www.tiktok.com/@fragrancestudios",
      "https://www.facebook.com/fragrancestudios/",
      "https://www.deezer.com/us/artist/63278562",
    ],
    email: "fragrancestudios@gmail.com",
    telephone: "+2347066272462",
    member: [
      {
        "@type": "Person",
        name: "Godwin Owulo",
        jobTitle: "Producer · Mixing & Mastering Engineer",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50",
      bestRating: "5",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
