export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "@id": "https://fragrancestudios.ng/#studio",
    name: "Fragrance Studios",
    alternateName: "Fragrance Studios Abuja",
    url: "https://fragrancestudios.ng",
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
      "https://www.facebook.com/fragrancestudios/",
      "https://www.deezer.com/us/artist/63278562",
    ],
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
