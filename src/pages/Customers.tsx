import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/Footer";
import Partners from "@/components/Partners";
import { CyberParticles } from "@/components/CyberParticles";

const Customers = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-hidden relative">
      <Navigation />
      <CyberParticles />
      <main className="pt-24 pb-24 relative z-10">
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default Customers;
