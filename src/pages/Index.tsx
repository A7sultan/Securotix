import { Navigation } from "../components/navigation/Navigation";
import { CyberParticles } from "../components/CyberParticles";
import { HeroSection } from "../components/HeroSection";
import { IntroLoader } from "../components/ui/IntroLoader";
import { useState } from "react";
import Partners from "./../components/Partners";
import AboutUs from "@/components/AboutUs";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  return (
    <div className="min-h-screen bg-background relative">
      <CyberParticles />
      <Navigation />
      {showIntro && <IntroLoader onFinish={() => setShowIntro(false)} />}
      <HeroSection />
      <AboutUs />
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;
