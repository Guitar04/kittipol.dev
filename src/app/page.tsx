
import Hero from "@/components/hero/Hero";
import TechStack from "@/components/tecstack/TechStack";
import Footer from "@/components/Footer/Footer";
import ParticlesBackground from "@/components/Particles/ParticlesBackground";

export default function Home() {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <ParticlesBackground />
      <div className="relative z-10">
        <Hero />
        <TechStack />
        <Footer />
      </div>
    </div>
  );
}
