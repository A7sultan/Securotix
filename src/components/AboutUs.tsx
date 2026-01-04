import { Navigation } from "@/components/navigation/Navigation";
import {
  Shield,
  Target,
  Users,
  Award,
  Settings,
  Layers,
  TrendingUp,
  HeartHandshake,
} from "lucide-react";
import { motion } from "framer-motion";
import { CyberParticles } from "@/components/CyberParticles";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <CyberParticles />
      <Navigation />

      <main className="pt-24 pb-24 relative">
        {/* Soft Aura */}
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-primary/20 blur-[160px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          {/* HERO */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-5xl mx-auto text-center mb-24"
          >
            <h1 className="text-5xl font-bold leading-tight mb-4">
              <span className="text-glow">About</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-cyber-red-glow bg-clip-text text-transparent">
                Securotix
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Delivering advanced cybersecurity and technology solutions
              designed for digital-first enterprises.
            </p>

            {/* Subtle Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mt-10" />
          </motion.div>

          {/* WHO WE ARE — GRADIENT PANEL */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mb-24"
          >
            <div className="rounded-3xl bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl border border-white/10 p-10">
              <h2 className="text-3xl font-bold mb-6 text-glow">Who We Are</h2>

              <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>
                  <span className="text-primary font-semibold">Securotix</span>{" "}
                  is a cybersecurity-focused Value Added Distributor committed
                  to empowering enterprises across the MENA region.
                </p>

                <p>
                  We simplify the adoption of complex security technologies —
                  helping organizations build resilience, accelerate
                  transformation, and scale securely.
                </p>

                <p>
                  Our partner-first ecosystem ensures seamless enablement,
                  regional coverage, and unmatched access to next-generation
                  cybersecurity innovation.
                </p>
              </div>
            </div>
          </motion.section>

          {/* MISSION + VISION — SPLIT W/ GRADIENT LINES */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto mb-24"
          >
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "To build secure and sustainable digital ecosystems for modern enterprises.",
              },
              {
                icon: Shield,
                title: "Our Vision",
                text: "To be the trusted cybersecurity innovation hub across global emerging markets.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} variants={fadeUp}>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                  </div>

                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {item.text}
                  </p>

                  <div className="h-px bg-gradient-to-r from-primary/40 to-transparent mt-6" />
                </motion.div>
              );
            })}
          </motion.section>

          {/* WHY CHOOSE US — TWO COLUMN LAYOUT */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-14">
              Why <span className="text-primary">Choose Us</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* LEFT COLUMN */}
              <div className="space-y-10">
                {[
                  {
                    icon: Settings,
                    title: "Tailored Solutions",
                    desc: "Strategic design built around your business outcomes.",
                  },
                  {
                    icon: Layers,
                    title: "Full-Stack Expertise",
                    desc: "From infrastructure to cyber defense — fully aligned.",
                  },
                  {
                    icon: Award,
                    title: "Deep Regional Knowledge",
                    desc: "Understanding the MENA market like no one else.",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="flex items-start gap-5"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-1">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-10">
                {[
                  {
                    icon: TrendingUp,
                    title: "Forward-Thinking Approach",
                    desc: "Proactive resilience, not reactive fire-fighting.",
                  },
                  {
                    icon: HeartHandshake,
                    title: "Partnership-Driven",
                    desc: "Relationships built on trust, value, and results.",
                  },
                  {
                    icon: Users,
                    title: "Quality Without Compromise",
                    desc: "Precision delivery across every engagement.",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="flex items-start gap-5"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-1">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
