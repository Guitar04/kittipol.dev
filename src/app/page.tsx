import Backdrop from "@/components/Backdrop/Backdrop";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import TechStack from "@/components/TechStack/TechStack";
import Work from "@/components/Work/Work";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import ParticlesBackground from "@/components/Particles/ParticlesBackground";
import Loading from "@/components/Loading/Loading";

export default function Home() {
  return (
    <div className="relative min-h-svh overflow-x-clip">
      <Loading />
      <Backdrop />
      <ParticlesBackground />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-[#06070a]"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Work />
        <Contact />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
