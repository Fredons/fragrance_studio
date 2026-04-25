import type { Metadata } from "next";
import { StudioPageContent } from "../components/StudioPage";

export const metadata: Metadata = {
  title: "The Studio",
  description:
    "A visual tour of Fragrance Studios — the control room, the live room, and the carefully chosen instruments inside both.",
  alternates: { canonical: "/studio" },
  openGraph: {
    title: "The Studio · Fragrance Studios",
    description:
      "A visual tour of the rooms and instruments inside Fragrance Studios, Abuja.",
    url: "/studio",
    images: ["/studio/control-room.jpg"],
  },
};

export default function StudioPage() {
  return <StudioPageContent />;
}
