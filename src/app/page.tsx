
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import TechStack from "@/components/TechStack/TechStack";
import Footer from "@/components/Footer/Footer";
import {CarouselDemo} from "@/components/Carousel/Carousel";
import ParticlesBackground from "@/components/Particles/ParticlesBackground";
import Contact from "@/components/Contact/Contact";
import Loading from "@/components/Loading/Loading";


export default function Home() {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Loading />
      <Navbar />
      <ParticlesBackground />
      <div className="relative z-10">
        <Hero />
        <TechStack />
        {/* <CarouselDemo /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
