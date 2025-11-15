
import Hero from "@/components/hero/Hero";
import TechStack from "@/components/tecstack/TechStack";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <Navbar /> */}
      <Hero />
      <TechStack />
      <Footer />
    </div>
  );
}
