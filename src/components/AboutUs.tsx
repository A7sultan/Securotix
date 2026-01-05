import { Navigation } from "@/components/navigation/Navigation";
import {
  Users,
  Award,
  Settings,
  Layers,
  TrendingUp,
  HeartHandshake,
} from "lucide-react";
import { motion } from "framer-motion";
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
      <Navigation />

      <main className="pt-24 pb-24 relative">
        <div className="container mx-auto px-4 relative z-10">

          {/* HERO (LEFT ALIGNED LIKE MAIN HERO) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-24"
          >
            <h1 className="text-5xl font-bold leading-tight mb-4">
              <span className="text-glow">About</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-cyber-red-glow bg-clip-text text-transparent">
                Securotix
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Delivering advanced cybersecurity and technology solutions
              designed for digital-first enterprises.
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mt-10" />
          </motion.div>

          {/* WHO WE ARE */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">

              <div>
                <h2 className="text-3xl font-bold mb-6 text-glow">
                  Who We Are
                </h2>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
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
                    regional coverage, and access to next-generation
                    cybersecurity innovation.
                  </p>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/about/cyber-team.jpg"
                  alt="Securotix Cybersecurity"
                  className="rounded-2xl shadow-lg object-cover w-full h-[420px]"
                />
                <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-2xl pointer-events-none" />
              </div>

            </div>
          </motion.section>

          {/* WHY CHOOSE US */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-12">

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
