import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Locations from "@/components/Locations";
import WorkModel from "@/components/WorkModel";
import Production from "@/components/Production";
import MediaGear from "@/components/MediaGear";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Overview />
      <Locations />
      <WorkModel />
      <Production />
      <MediaGear />
      <FinalCta />
      <Footer />
    </main>
  );
}
