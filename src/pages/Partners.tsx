import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { NavLink } from "@/components/NavLink";

const partners = [
  { name: "1Kosmos", path: "/1Kosmos", tag: "Passwordless Identity" },
  { name: "Mini Orange", path: "/MiniOrange", tag: "IAM & Zero Trust" },
  { name: "Tufin", path: "/Tufin", tag: "Network Policy Control" },
  { name: "Fudo", path: "/Fudo", tag: "Privileged Access Security" },
  { name: "Filigran", path: "/Filigran", tag: "Threat Management Platform" },
  { name: "Nucleus", path: "/Nucleus", tag: "Vulnerability Orchestration" },
  { name: "Maze Bolt", path: "/MazeBolt", tag: "Proactive DDoS Security" },
  { name: "Jizo AI", path: "/JizoAI", tag: "AI-driven NDR" },
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />

      {/* Moving background glows */}
      <div className="absolute top-40 left-1/4 w-[600px] h-[600px] bg-primary/20 blur-[180px] rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-cyber-red-glow/20 blur-[160px] rounded-full animate-pulse delay-1000" />

      <main className="pt-36 pb-28 relative z-10">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-5xl mx-auto text-center mb-28"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-glow">Our</span><br />
              <span className="bg-gradient-to-r from-primary via-cyber-red-glow to-primary bg-clip-text text-transparent">
                Technology Ecosystem
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Curated cybersecurity leaders powering modern enterprises.
            </p>
          </motion.div>

          {/* Partner Panels */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                viewport={{ once: true }}
              >
                <NavLink
                  to={p.path}
                  className="
                    relative group block rounded-2xl p-10
                    bg-gradient-to-br from-white/10 to-white/0
                    border border-white/10 backdrop-blur-xl
                    shadow-[0_0_60px_rgba(255,0,0,0.15)]
                    hover:shadow-[0_0_120px_rgba(255,0,0,0.45)]
                    transition-all duration-500
                    hover:-translate-y-3
                  "
                >
                  {/* Neon edge */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                  bg-gradient-to-r from-primary/40 via-transparent to-primary/40 blur-xl" />

                  <h3 className="relative z-10 text-2xl font-bold mb-3">
                    {p.name}
                  </h3>
                  <p className="relative z-10 text-muted-foreground">
                    {p.tag}
                  </p>
                </NavLink>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Partners;
