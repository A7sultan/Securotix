import { Navigation } from "@/components/navigation/Navigation";
import { Benefits } from "@/components/testing/Benefits";
import { OurApproach } from "@/components/testing/OurApproach";
import { webAppTestingData } from "@/data/testing/webAppTesting";
import { CyberParticles } from "@/components/CyberParticles";
import { MethodologyAndTesting } from "@/components/testing/Methodology";
import { Footer } from "@/components/Footer";

export default function WebAppSecurityTesting() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <CyberParticles />
      <Navigation />

      <main className="pt-32 pb-24 relative">
        {/* Ambient red glow */}
        <div
          className="
            absolute top-40 left-1/2 -translate-x-1/2
            w-[720px] h-[720px]
            bg-primary/20 blur-[160px]
            rounded-full pointer-events-none
          "
        />

        {/* SAME CONTAINER AS VAPT PAGE */}
        <div className="container mx-auto px-4 relative z-10 space-y-28">
          {/* HERO */}
          <section className="max-w-5xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-glow">
              {webAppTestingData.title}
            </h1>

            <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
              {webAppTestingData.overview}
            </p>
          </section>
          
          <MethodologyAndTesting />
          <Benefits />
          <OurApproach
            nav={webAppTestingData.nav}
            sections={webAppTestingData.sections}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
