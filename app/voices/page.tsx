import type { Metadata } from "next";
import { VoicesPageContent } from "../components/VoicesPage";

export const metadata: Metadata = {
  title: "Voices",
  description:
    "Selected reviews of Fragrance Studios — verbatim, unedited, collected from Google. 4.9 stars across 50+ ratings.",
  alternates: { canonical: "/voices" },
  openGraph: {
    title: "Voices · Fragrance Studios",
    description:
      "What artists say about recording at Fragrance Studios in Abuja.",
    url: "/voices",
    images: ["/brand/logo-wall.jpg"],
  },
};

export default function VoicesPage() {
  return <VoicesPageContent />;
}
