
import Hero from "@/components/Hero/Hero";
import TechStack from "@/components/Tecstack/TechStack";
import Footer from "@/components/Footer/Footer";
import {CarouselDemo} from "@/components/Carousel/Carousel";
import ParticlesBackground from "@/components/Particles/ParticlesBackground";


export default function Home() {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <ParticlesBackground />
      <div className="relative z-10">
        <Hero />
        <TechStack />
        <CarouselDemo />
        <Footer />
      </div>
    </div>
  );
}
