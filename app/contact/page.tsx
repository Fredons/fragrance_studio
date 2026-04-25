import type { Metadata } from "next";
import { ContactPageContent } from "../components/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Begin a recording, production, mixing or mastering session at Fragrance Studios in Abuja. Reach us via WhatsApp or email — we reply within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact · Fragrance Studios",
    description: "Book a session at Fragrance Studios, Abuja.",
    url: "/contact",
    images: ["/brand/logo-wall.jpg"],
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
