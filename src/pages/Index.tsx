import { Navigation } from "../components/navigation/Navigation";
import { HeroSection } from "../components/HeroSection";
import { IntroLoader } from "../components/ui/IntroLoader";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import WhoWeAre from "@/components/WhoWeAre";
import  ValueProposition  from "@/components/ValueProposition";
import VendorsOrbit from "@/components/VendorsOrbit";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      {showIntro && <IntroLoader onFinish={() => setShowIntro(false)} />}
      <HeroSection />
      <WhoWeAre />
      <ValueProposition />
      <VendorsOrbit />
      <Footer />
    </div>
  );
};

export default Index;
