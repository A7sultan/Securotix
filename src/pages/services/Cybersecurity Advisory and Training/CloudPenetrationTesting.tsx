import { Navigation } from "@/components/navigation/Navigation";
import { MethodologyAndTesting } from "@/components/testing/Methodology";
import { Benefits } from "@/components/testing/Benefits";
import { OurApproach } from "@/components/testing/OurApproach";
import { cloudPenetrationTestingData } from "@/data/testing/cloudPenetrationTesting";
import CloudImg from "@/assets/cloud penetration.png";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function CloudPenetrationTesting() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-background overflow-hidden"
    >
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
              {cloudPenetrationTestingData.title}
            </h1>

            <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
              {cloudPenetrationTestingData.overview}
            </p>
          </motion.section>

          {/* TYPES OF TESTING ONLY (same behavior as Network page) */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <MethodologyAndTesting
              title={cloudPenetrationTestingData.methodology.title}
              paragraphs={cloudPenetrationTestingData.methodology.description.slice(
                0,
                2
              )}
              image={CloudImg}
              showTypesOfTesting
              types={cloudPenetrationTestingData.typesOfTesting}
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
              nav={cloudPenetrationTestingData.nav}
              sections={cloudPenetrationTestingData.sections}
            />
          </motion.div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
}
