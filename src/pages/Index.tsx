import { Navigation } from "../components/navigation/Navigation";
import { CyberParticles } from "../components/CyberParticles";
import { HeroSection } from "../components/HeroSection";
import { FloatingBadges } from "../components/FeaturesSection";
import { AttackSimulation } from "../components/AttackSimulation";
import { PartnersCarousel } from "../components/PartnersCarousel";
import { Footer } from "../components/Footer";
import { IntroLoader } from "../components/ui/IntroLoader";
import { useState } from "react";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  return (
    <div className="min-h-screen bg-background relative">
      <CyberParticles />
      <Navigation />
      {showIntro && <IntroLoader onFinish={() => setShowIntro(false)} />}
      <HeroSection />
      <FloatingBadges />
      <AttackSimulation />
      <PartnersCarousel />
      <Footer />
    </div>
  );
};

export default Index;
