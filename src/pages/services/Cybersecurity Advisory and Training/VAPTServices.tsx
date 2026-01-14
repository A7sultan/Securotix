import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/Footer";
import { CyberParticles } from "@/components/CyberParticles";
import { motion } from "framer-motion";
import VAPTImg from "@/assets/Professional Services.jpg";
import { NavLink } from "@/components/navigation/NavLink";


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

const VAPTServices = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <CyberParticles />
      <Navigation />

      <main className="pt-36 pb-24 relative">
        {/* Ambient glow */}
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[720px] h-[720px] bg-primary/20 blur-[160px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Hero */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center mb-20 space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-glow">VAPT</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-cyber-red-glow bg-clip-text text-transparent">
                Services
              </span>
            </h1>
          </motion.div>

          {/* What is VAPT */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto mb-20"
          >
            <div className="relative rounded-2xl p-12 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_80px_rgba(255,0,0,0.15)]">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-glow">
                What is VAPT?
              </h2>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  VAPT stands for Vulnerability Assessment and Penetration
                  Testing. Vulnerability Assessment examines digital assets for
                  weaknesses and identifies security vulnerabilities.
                </p>

                <p>
                  A method for identifying security holes in software or a
                  computer network is a vulnerability assessment and penetration
                  testing (VAPT Testing). Penetration testing exploits system
                  flaws and alerts companies.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Why VAPT */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto mb-24"
          >
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Why do organizations need{" "}
                  <span className="text-primary">VAPT?</span>
                </h2>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Regardless of the size of the Organization, vulnerabilities
                    exist at all levels of the IT Infrastructure (Applications,
                    Network devices & Cloud Infrastructure).
                  </p>

                  <p>
                    Small and medium-sized enterprises are frequently overlooked
                    by cybercriminals is a myth as small businesses’ security is
                    typically low, attackers gravitate towards them.
                  </p>

                  <p>
                    In fact, 93 percent of small and medium businesses (SMEs)
                    who have been harmed by a cyberattack say it was a serious
                    problem.Their business will be impacted. Nearly every money
                    and savings were reported lost.
                  </p>

                  <p>
                    Damage was reported by 31% of people resulting in a loss of
                    reputation clients, as well as challenges in obtaining new
                    ones, employee retention and new business acquisition.
                  </p>

                  <p>
                    VAPT assists in the protection of your company by exposing
                    security vulnerabilities in advance and providing advice on
                    how to mitigate them.
                  </p>

                  <p>
                    The purpose of VAPT services is to provide your company with
                    improved security and increased financial value.
                  </p>

                  <p>
                    For businesses aiming to comply with regulations such as the
                    GDPR, ISO 27001, and the PCI DSS, VAPT has always been
                    critical in providing evidence of the organization’s
                    technology’s Security.
                  </p>
                </div>
              </div>

              {/* Callout */}
              <div className="relative rounded-2xl p-10 bg-gradient-to-br from-primary/25 to-transparent border border-primary/30 shadow-[0_0_100px_rgba(255,0,0,0.25)] h-fit overflow-hidden">
                {/* Glow */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/30 blur-[120px] rounded-full pointer-events-none" />

                {/* Image */}
                <img
                  src={VAPTImg}
                  alt="VAPT Services"
                  className="w-full h-56 object-cover rounded-xl mb-6 border border-white/10 shadow-lg"
                />

                <h3 className="text-2xl font-bold mb-4">Get Proposal</h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Take proactive steps towards safeguarding your digital assets
                  with professional VAPT services.
                </p>

                <NavLink
                  to="/contact"
                  className="
      inline-flex items-center justify-center
      px-6 py-3
      rounded-lg
      bg-primary text-primary-foreground
      font-semibold
      hover:bg-primary/90
      transition
      shadow-[0_0_30px_rgba(255,0,0,0.45)]
    "
                >
                  Get Proposal
                </NavLink>
              </div>
            </div>
          </motion.section>

          {/* Benefits */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-6xl mx-auto mb-28"
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold mb-12 text-center"
            >
              Benefits of <span className="text-primary">VAPT</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-10">
              {[
                "Protects confidential data and information from unauthorized access, theft, or data breach.",
                "Follows a methodical approach to detecting critical vulnerabilities and strengthening risk management.",
                "VAPT Testing provides a comprehensive analysis and evaluation of web/mobile applications and networking infrastructure.",
                "Find the gaps and errors in the infrastructure that could lead to cyber-attacks.",
                "Improves the company's reputation by providing a secure data network.",
                "Protects businesses from financial and reputational harm.",
                "Helps in achieving and maintaining compliance with national codes and regulations.",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="
  relative
  rounded-xl
  p-8
  bg-white/5
  backdrop-blur-xl
  border border-white/10
  shadow-[0_0_40px_rgba(255,0,0,0.15)]
  hover:border-primary/50
  hover:shadow-[0_0_70px_rgba(255,0,0,0.35)]
  transition-all
  duration-300
"
                >
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="relative rounded-2xl p-14 bg-gradient-to-br from-primary/25 to-transparent border border-primary/30 shadow-[0_0_120px_rgba(255,0,0,0.3)]">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Take proactive steps towards safeguarding your digital assets
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Contact us today to schedule a consultation.
              </p>
              <p className="text-lg font-medium">
                Contact us today at{" "}
                <a
                  href="mailto:info@securotix.com"
                  className="text-primary hover:underline"
                >
                  info@securotix.com
                </a>{" "}
                to schedule a consultation and take proactive steps towards
                safeguarding your digital assets.
              </p>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VAPTServices;
