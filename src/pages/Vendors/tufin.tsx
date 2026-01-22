import { useNavigate } from "react-router-dom";
import { VendorLayout } from "@/components/partners/VendorLayout";
import TufinLogo from "@/assets/tufin.png";
import { FancyLine } from "@/components/ui/FancyLine";
import solutionImg from "@/assets/tufin solutions.png";
import differentiatorImg from "@/assets/tufin diff.png";
import { motion } from "framer-motion";
import { PeerInsightsCardTufin } from "@/components/vendors/PeerInsightsCardTufin";
import {
  CheckCircle2,
  Shield,
  Filter,
  Split,
  Repeat,
  Cloud,
  Radar,
} from "lucide-react";

const Tufin = () => {
  const navigate = useNavigate();

  return (
    <VendorLayout
      name="Tufin"
      logo={TufinLogo}
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
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="flex justify-center lg:justify-start">
              <a
                href="https://www.tufin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Tufin website"
                className="inline-block hover:opacity-90 transition-opacity"
              >
                <img
                  src={TufinLogo}
                  alt="Tufin logo"
                  className="max-h-28 sm:max-h-32 object-contain cursor-pointer"
                />
              </a>
            </div>

            <div className="max-w-xl text-center lg:text-left">
              <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed">
                Automating network security policies across hybrid and
                multi-cloud environments.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button
                  onClick={() => navigate("/contact")}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary to-cyber-red-glow text-white font-medium shadow-[0_0_30px_rgba(255,0,0,0.45)] hover:shadow-[0_0_50px_rgba(255,0,0,0.75)] transition-all"
                >
                  Automate Network Security
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
              About Tufin
            </h2>

            <FancyLine width="w-24" className="mb-8" />

            <p className="text-base sm:text-lg leading-relaxed text-white/80 max-w-xl mb-10">
              Tufin is a leader in Network Security Policy Management (NSPM),
              enabling organizations to centrally manage, automate, and enforce
              firewall and network security policies across on-prem, cloud, and
              hybrid environments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
              {[
                {
                  title: "What We Solve",
                  text: "Eliminate firewall misconfigurations, shadow rules, and risky network exposures that increase attack surfaces and compliance risk.",
                },
                {
                  title: "How We Do It",
                  text: "An automated security policy orchestration platform that manages firewall, cloud, and network rules consistently across hybrid environments.",
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
          <div className="hidden lg:flex justify-center lg:justify-end">
            <PeerInsightsCardTufin />
          </div>
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
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-red-600 mt-[2px]" />
                <span>Network Security Policy Management (NSPM)</span>
              </li>

              <li className="flex items-start gap-3">
                <Filter className="w-5 h-5 text-red-600 mt-[2px]" />
                <span>Automated firewall rule analysis & cleanup</span>
              </li>

              <li className="flex items-start gap-3">
                <Split className="w-5 h-5 text-red-600 mt-[2px]" />
                <span>Zero-Trust segmentation & access control</span>
              </li>

              <li className="flex items-start gap-3">
                <Repeat className="w-5 h-5 text-red-600 mt-[2px]" />
                <span>Change automation & compliance enforcement</span>
              </li>

              <li className="flex items-start gap-3">
                <Cloud className="w-5 h-5 text-red-600 mt-[2px]" />
                <span>Multi-cloud security management (AWS, Azure, GCP)</span>
              </li>

              <li className="flex items-start gap-3">
                <Radar className="w-5 h-5 text-red-600 mt-[2px]" />
                <span>Risk & exposure visibility across the network</span>
              </li>
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

            <ul className="space-y-6 text-white/80 max-w-xl">
              <li className="flex gap-4">
                <span className="mt-1 text-red-600">
                  <CheckCircle2 className="w-5 h-5" />
                </span>

                <p className="leading-relaxed">
                  <span className="text-white font-semibold">
                    Automated Rule Change Management:
                  </span>{" "}
                  Reduces time from days to minutes, minimizing errors
                </p>
              </li>

              <li className="flex gap-4">
                <span className="mt-1 text-red-600">
                  <CheckCircle2 className="w-5 h-5" />
                </span>

                <p className="leading-relaxed">
                  <span className="text-white font-semibold">
                    Compliance Assurance:
                  </span>{" "}
                  Visibility into network topology for policy design and
                  enforcement
                </p>
              </li>

              <li className="flex gap-4">
                <span className="mt-1 text-red-600">
                  <CheckCircle2 className="w-5 h-5" />
                </span>

                <p className="leading-relaxed">
                  <span className="text-white font-semibold">
                    Centralized Policy Management:
                  </span>{" "}
                  Improves auditing and streamlines change management
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </VendorLayout>
  );
};

export default Tufin;
