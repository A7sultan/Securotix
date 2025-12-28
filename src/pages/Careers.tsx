import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Users, Globe, TrendingUp, Sparkles, Upload } from "lucide-react";
import { CyberParticles } from "@/components/CyberParticles";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Careers = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <CyberParticles />
      <Navigation />

      <main className="pt-32 pb-24 relative">
        {/* Ambient glow */}
        <div className="absolute top-48 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 blur-[180px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Hero */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center mb-28 space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-glow">Join Our</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-cyber-red-glow bg-clip-text text-transparent">
                Dynamic Team at Securotix
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Driving innovation and excellence in cybersecurity and technology
              consultancy—together.
            </p>
          </motion.div>

          {/* Intro Content */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto mb-32"
          >
            <div className="rounded-2xl p-12 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_80px_rgba(255,0,0,0.15)]">
              <p className="text-lg text-muted-foreground leading-relaxed space-y-6">
                At <span className="text-primary font-semibold">Securotix</span>
                , we are committed to driving innovation and excellence in the
                field of cybersecurity and technology consultancy. Our diverse
                team of professionals is united by a shared passion for
                delivering cutting-edge solutions and unparalleled service to
                clients worldwide.
                <br />
                <br />
                As we continue to expand our global footprint, we are seeking
                talented and motivated individuals to join us on our journey
                towards shaping the future of secure technology management.
              </p>
            </div>
          </motion.section>

          {/* Why Work With Us */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-32"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Why <span className="text-primary">Work With Us</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  icon: Sparkles,
                  title: "Innovative Environment",
                  desc: "A dynamic workplace that encourages creativity, collaboration, and continuous learning.",
                },
                {
                  icon: Globe,
                  title: "Global Impact",
                  desc: "Secure the digital landscape and deliver cybersecurity and IT consultancy worldwide.",
                },
                {
                  icon: TrendingUp,
                  title: "Professional Growth",
                  desc: "Challenging projects, mentorship, and ongoing training to accelerate your career.",
                },
                {
                  icon: Users,
                  title: "Diverse Team",
                  desc: "An inclusive culture built on respect, collaboration, and diverse perspectives.",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{ y: -6 }}
                    className="relative rounded-2xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(255,0,0,0.12)] hover:shadow-[0_0_80px_rgba(255,0,0,0.25)] transition-all"
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

          {/* Careers Form */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="rounded-2xl p-12 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 shadow-[0_0_100px_rgba(255,0,0,0.2)]">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Careers <span className="text-primary">Form</span>
              </h2>

              <form className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name *"
                  className="w-full rounded-lg bg-background/60 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  className="w-full rounded-lg bg-background/60 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full rounded-lg bg-background/60 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="tel"
                  placeholder="Phone *"
                  className="w-full rounded-lg bg-background/60 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <div className="md:col-span-2">
                  <label className="flex flex-col items-center justify-center border border-dashed border-white/20 rounded-lg p-6 cursor-pointer hover:border-primary transition-colors">
                    <Upload className="w-6 h-6 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground text-center">
                      Upload Resume * (Up to 2 files)
                    </span>
                    <input type="file" multiple className="hidden" />
                  </label>
                </div>

                <textarea
                  placeholder="Comment or Message *"
                  rows={4}
                  className="md:col-span-2 w-full rounded-lg bg-background/60 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <div className="md:col-span-2 text-center">
                  <Button className="bg-primary text-primary-foreground px-10 py-6 text-lg hover:bg-primary/90 neon-pulse">
                    Submit
                  </Button>
                </div>
              </form>

              <p className="text-center text-muted-foreground mt-8">
                Join us at Securotix and be part of a team shaping the future of
                secure technology management.
              </p>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
