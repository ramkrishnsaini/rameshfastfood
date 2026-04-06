import { About } from "@/components/About";
import { ContactCTA } from "@/components/ContactCTA";
import { FeaturedItems } from "@/components/FeaturedItems";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { MenuSection } from "@/components/MenuSection";
import { Navbar } from "@/components/Navbar";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <FeaturedItems />
        <About />
        <Location />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
