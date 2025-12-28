import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

interface PartnerLayoutProps {
  name: string;
  logo: string;
  overview: string;
  solutions: string[];
  differentiators: string[];
}

export const PartnerLayout = ({
  name,
  logo,
  overview,
  solutions,
  differentiators,
}: PartnerLayoutProps) => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />

      {/* Ambient glow */}
      <div
        className="absolute top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px]
                      bg-primary/20 blur-[200px] rounded-full pointer-events-none"
      />

      <main className="pt-36 pb-28 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24 flex flex-col md:flex-row gap-12 items-center"
          >
            {/* Logo */}
            <div
              className="
                rounded-2xl p-10
                bg-white/5 backdrop-blur-xl border border-white/10
                shadow-[0_0_90px_rgba(255,0,0,0.35)]
              "
            >
              <img
                src={logo}
                alt={`${name} logo`}
                className="h-20 object-contain"
              />
            </div>

            {/* Text */}
            <div>
              <h1 className="text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-cyber-red-glow bg-clip-text text-transparent">
                  {name}
                </span>
              </h1>
              <p className="text-2xl text-muted-foreground max-w-3xl">
                {overview}
              </p>
            </div>
          </motion.div>

          {/* Solution Offering */}
          <section className="mb-28">
            <h2 className="text-4xl font-bold mb-12 text-primary">
              Solution Offering
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              {solutions.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="
                    rounded-xl p-8
                    bg-white/5 backdrop-blur-xl border border-white/10
                    shadow-[0_0_60px_rgba(255,0,0,0.18)]
                  "
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent mb-24" />

          {/* Key Differentiators */}
          <section>
            <h2 className="text-4xl font-bold mb-12 text-primary">
              Key Differentiators
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              {differentiators.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="
                    rounded-xl p-8
                    bg-gradient-to-br from-white/10 to-white/0
                    border border-white/10 backdrop-blur-xl
                    shadow-[0_0_70px_rgba(255,0,0,0.25)]
                  "
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};
