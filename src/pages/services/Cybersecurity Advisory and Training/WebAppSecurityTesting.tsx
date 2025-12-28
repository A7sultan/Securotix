import { Navigation } from "@/components/navigation/Navigation";
import { Benefits } from "@/components/testing/Benefits";
import { OurApproach } from "@/components/testing/OurApproach";
import { webAppTestingData } from "@/data/testing/webAppTesting";
import { CyberParticles } from "@/components/CyberParticles";
import { MethodologyAndTesting } from "@/components/testing/Methodology";
import { Footer } from "@/components/Footer";
import WebAppImg from "@/assets/webapp.png";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function WebAppSecurityTesting() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-background overflow-hidden"
    >
      <CyberParticles />
      <Navigation />

      <main className="pt-36 pb-24 relative">
        {/* Ambient glow */}
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[720px] h-[720px] bg-primary/20 blur-[160px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 space-y-28">
          {/* HERO */}
          <motion.section
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-glow">
              {webAppTestingData.title}
            </h1>

            <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
              {webAppTestingData.overview}
            </p>
          </motion.section>

          {/* Methodology */}
          <motion.div
            variants={fadeUp}
            viewport={{ once: true }}
            whileInView="visible"
            transition={{ duration: 0.8 }}
          >
            <MethodologyAndTesting
              title={webAppTestingData.methodology.title}
              paragraphs={webAppTestingData.methodology.description}
              image={WebAppImg}
              showTypesOfTesting
              types={webAppTestingData.typesOfTesting}
              ctaText="Get Free Consultation"
            />
          </motion.div>

          {/* Benefits */}
          <motion.div
            variants={fadeUp}
            viewport={{ once: true }}
            whileInView="visible"
            transition={{ duration: 0.8 }}
          >
            <Benefits />
          </motion.div>

          {/* Our Approach */}
          <motion.div
            variants={fadeUp}
            viewport={{ once: true }}
            whileInView="visible"
            transition={{ duration: 0.8 }}
          >
            <OurApproach
              nav={webAppTestingData.nav}
              sections={webAppTestingData.sections}
            />
          </motion.div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
}
