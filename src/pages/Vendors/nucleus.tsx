import { useNavigate } from "react-router-dom";
import { VendorLayout } from "@/components/partners/VendorLayout";
import NucleusLogo from "@/assets/nucleus.png";
import { FancyLine } from "@/components/ui/FancyLine";
import nucleusHeroBg from "@/assets/Glowing energy stream in cybernetic space.png";
import solutionImg from "@/assets/points.jpg";
import differentiatorImg from "@/assets/earth.jpg";
import { motion } from "framer-motion";

const Nucleus = () => {
  const navigate = useNavigate();

  return (
    <VendorLayout
      name="Nucleus"
      logo={NucleusLogo}
      overview=""
      solutions={[]}
      differentiators={[]}
      hideHero
      hideSolutions
      hideDifferentiators
      disableAmbient
    >
      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}
      <section className="relative min-h-screen w-full flex items-center overflow-hidden">
        <img
          src={nucleusHeroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/40 to-black/70" />

        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="flex justify-center lg:justify-start">
              <img
                src={NucleusLogo}
                alt="Nucleus logo"
                className="max-h-28 sm:max-h-32 object-contain"
              />
            </div>

            <div className="max-w-xl text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Nucleus
              </h1>

              <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed">
                Vulnerability Management Orchestration built to cut through noise
                and focus on what actually matters.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button
                  onClick={() => navigate("/contact")}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary to-cyber-red-glow text-white font-medium shadow-[0_0_30px_rgba(255,0,0,0.45)] hover:shadow-[0_0_50px_rgba(255,0,0,0.75)] transition-all"
                >
                  Request a Demo
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="px-7 py-3.5 rounded-xl border border-white/30 text-white font-medium hover:bg-white/10 transition-all"
                >
                  Request Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* ABOUT + CARDS */}
      {/* ================================================= */}
      <section className="relative px-6 sm:px-10 lg:px-24 py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              About Nucleus
            </h2>

            <FancyLine width="w-24" className="mb-8" />

            <p className="text-base sm:text-lg leading-relaxed text-white/80 max-w-xl mb-10">
              Nucleus is a unified Vulnerability Management Orchestration platform
              that centralizes vulnerability data, prioritizes risk, and
              automates remediation workflows across the entire security stack.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
              {[
                {
                  title: "What We Solve",
                  text:
                    "Too many vulnerabilities, no clear priorities. Security teams drown in findings without knowing what truly puts the business at risk.",
                },
                {
                  title: "How We Do It",
                  text:
                    "A centralized vulnerability intelligence hub that aggregates scanner data and ranks risk based on exploitability and business impact.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-black/70 border border-white/10 rounded-xl p-6 backdrop-blur hover:border-primary/30 transition"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <FancyLine width="w-14" className="mb-4" />
                  <p className="text-sm text-white/75 leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </section>

      {/* ================================================= */}
      {/* SOLUTION OFFERING */}
      {/* ================================================= */}
      <section className="px-6 sm:px-10 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Solution Offering
            </h2>

            <FancyLine width="w-24" className="mb-10" />

            <ul className="space-y-5 text-white/80 max-w-xl">
              <li>Centralized vulnerability data from all scanners</li>
              <li>Risk-based prioritization using threat intelligence</li>
              <li>Asset context & exposure-based scoring</li>
              <li>Automated remediation workflows & ticketing</li>
              <li>Integrations with VM, SIEM, ITSM, cloud & CI/CD tools</li>
            </ul>
          </div>

          <div className="relative h-[420px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0" />
            <img
              src={solutionImg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* KEY DIFFERENTIATORS */}
      {/* ================================================= */}
      <section className="px-6 sm:px-10 lg:px-24 pb-40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[420px] rounded-2xl overflow-hidden order-last lg:order-first">
            <div className="absolute inset-0" />
            <img
              src={differentiatorImg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Key Differentiators
            </h2>

            <FancyLine width="w-24" className="mb-10" />

            <ul className="space-y-5 text-white/80 max-w-xl">
              <li>Single pane of glass for all vulnerability sources</li>
              <li>Exploitability + business impact–driven prioritization</li>
              <li>Massive automation reduces manual triage</li>
              <li>150+ integrations with security and IT tools</li>
              <li>Visual threat heat-maps across assets</li>
            </ul>
          </div>
        </div>
      </section>
    </VendorLayout>
  );
};

export default Nucleus;
