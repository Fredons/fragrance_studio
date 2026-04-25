import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Philosophy } from "./components/Philosophy";
import { RoomsTeaser } from "./components/RoomsTeaser";
import { Producer } from "./components/Producer";
import { VoicesTeaser } from "./components/VoicesTeaser";
import { ContactCTA } from "./components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Philosophy />
      <RoomsTeaser />
      <Producer />
      <VoicesTeaser />
      <ContactCTA />
    </>
  );
}
