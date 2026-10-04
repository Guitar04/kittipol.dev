import Navbar from "@/components/Navbar/Navbar";
import Intro from "@/components/Intro/Intro";
import Experience from "@/components/Experience/Experience";
import TechStack from "@/components/TechStack/TechStack";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div aria-hidden className="top-wash" />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-canvas"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main" className="relative z-10">
        <Intro />
        <Experience />
        <TechStack />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
