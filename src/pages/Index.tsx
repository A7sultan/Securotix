import { Navigation } from "../components/Navigation";
import { CyberParticles } from "../components/CyberParticles";
import { HeroSection } from "../components/HeroSection";
import { FloatingBadges } from "../components/FeaturesSection";
import { AttackSimulation } from "../components/AttackSimulation";
import { PartnersCarousel } from "../components/PartnersCarousel";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <CyberParticles />
      <Navigation />
      <HeroSection />
      <FloatingBadges />
      <AttackSimulation />
      <PartnersCarousel />
      <Footer />
    </div>
  );
};

export default Index;
