import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
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
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const About = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <CyberParticles />
      <Navigation />

      <main className="pt-32 pb-24 relative">
        {/* Ambient red glow */}
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/20 blur-[160px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Hero */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-28 space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-glow">About</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-cyber-red-glow bg-clip-text text-transparent">
                Securotix
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Empowering secure digital growth through innovation,
              expertise, and next-generation cybersecurity.
            </p>
          </motion.div>

          {/* Who We Are */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto mb-32"
          >
            <div className="relative rounded-2xl p-12 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_80px_rgba(255,0,0,0.15)]">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-glow">
                Who We Are
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  At <span className="text-primary font-semibold">Securotix</span>,
                  we believe cybersecurity is an ever-evolving marketplace.
                  Our purpose is to deliver innovation where it creates
                  meaningful impact.
                </p>
                <p>
                  We simplify access to complex cybersecurity solutions—making
                  them powerful, resilient, and easy to adopt in modern
                  enterprise environments.
                </p>
                <p>
                  As a UAE-based, cybersecurity-focused Value Added Distributor,
                  our deep MENA expertise enables unmatched visibility into
                  cutting-edge technologies while fostering a seamless,
                  partner-first distribution ecosystem.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Mission & Vision */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-12 mb-32"
          >
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "To empower organizations through technology, consulting, and cybersecurity—driving digital resilience and sustainable growth.",
              },
              {
                icon: Shield,
                title: "Our Vision",
                text: "To be the global leader in innovative technology solutions, expert consulting, and world-class cybersecurity services.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="relative p-10 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl shadow-[0_0_60px_rgba(255,0,0,0.12)]"
                >
                  <Icon className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.section>

          {/* Why Choose Us */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-32"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Why <span className="text-primary">Choose Us</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  icon: Settings,
                  title: "Tailored Solutions",
                  desc: "Customized strategies aligned precisely with your business objectives.",
                },
                {
                  icon: Layers,
                  title: "Comprehensive Services",
                  desc: "End-to-end technology, consulting, and cybersecurity under one roof.",
                },
                {
                  icon: Award,
                  title: "Expertise & Experience",
                  desc: "Proven delivery backed by deep regional and industry knowledge.",
                },
                {
                  icon: TrendingUp,
                  title: "Proactive Approach",
                  desc: "Anticipating risks and optimizing systems before challenges arise.",
                },
                {
                  icon: HeartHandshake,
                  title: "Client Satisfaction",
                  desc: "Long-term partnerships built on trust and consistent value.",
                },
                {
                  icon: Users,
                  title: "Commitment to Quality",
                  desc: "Uncompromising standards across every engagement.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ y: -6 }}
                    className="group relative rounded-2xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 transition-shadow duration-300 shadow-[0_0_40px_rgba(255,0,0,0.1)] hover:shadow-[0_0_70px_rgba(255,0,0,0.25)]"
                  >
                    <Icon className="w-10 h-10 text-primary mb-5" />
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
