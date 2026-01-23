import { useNavigate } from "react-router-dom";
import { VendorLayout } from "@/components/partners/VendorLayout";
import FudoLogo from "@/assets/fudo.png";
import { FancyLine } from "@/components/ui/FancyLine";
import solutionImg from "@/assets/red-lock.jpg";
import differentiatorImg from "@/assets/Fudo Bg 2.webp";
import { motion } from "framer-motion";
import { PeerInsightsCardFudo } from "@/components/vendors/PeerInsightsCardFudo";
import {
  Brain,
  Plug,
  Video,
  Layers3,
  KeyRound,
  GlobeLock,
  Radar,
  UsersRound,
} from "lucide-react";
import { CyberWebDataFlowRedBG } from "@/components/CyberWebDataFlowRedBG";

const Fudo = () => {
  const navigate = useNavigate();

  return (
    <VendorLayout
      name="Fudo"
      logo={FudoLogo}
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
        <CyberWebDataFlowRedBG nodes={130} maxLinksPerNode={3} packetRate={0.18} />
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="flex justify-center lg:justify-start lg:ml-14">
              <a
                href="https://www.fudosecurity.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Fudo Security website"
                className="inline-block hover:opacity-90 transition-opacity"
              >
                <img
                  src={FudoLogo}
                  alt="Fudo logo"
                  className="max-h-28 sm:max-h-32 object-contain cursor-pointer"
                />
              </a>
            </div>

            <div className="max-w-xl text-center lg:text-left">
              <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed">
                Secure, monitor, and control privileged access without
                credentials or VPNs.
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
              About Fudo
            </h2>

            <FancyLine width="w-24" className="mb-8" />

            <p className="text-base sm:text-lg leading-relaxed text-white/80 max-w-xl mb-10">
              Fudo is a next-generation Privileged Access Management (PAM)
              platform that secures remote privileged access through
              credential-less connectivity, real-time session control, and
              advanced behavioral analytics.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
              {[
                {
                  title: "What We Solve",
                  text: "Stop credential theft, insider abuse, and privilege escalation by eliminating standing privileges and fully monitoring privileged activity.",
                },
                {
                  title: "How We Do It",
                  text: "A credential-less PAM platform that controls, records, and audits every privileged session in real time, without requiring VPNs.",
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
            <PeerInsightsCardFudo />
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
                <KeyRound className="w-5 h-5 text-red-600 mt-[2px]" />
                <span>Privileged Access Management (vaulting & rotation)</span>
              </li>

              <li className="flex items-start gap-3">
                <GlobeLock className="w-5 h-5 text-red-600 mt-[2px]" />
                <span>Secure remote access without VPN</span>
              </li>

              <li className="flex items-start gap-3">
                <Video className="w-5 h-5 text-red-600 mt-[2px]" />
                <span>Live session monitoring & full video recording</span>
              </li>

              <li className="flex items-start gap-3">
                <Radar className="w-5 h-5 text-red-600 mt-[2px]" />
                <span>Behavior analytics & anomaly detection</span>
              </li>

              <li className="flex items-start gap-3">
                <UsersRound className="w-5 h-5 text-red-600 mt-[2px]" />
                <span>Just-in-Time access & approval workflows</span>
              </li>

              <li className="flex items-start gap-3">
                <Plug className="w-5 h-5 text-red-600 mt-[2px]" />
                <span>Integrations with AD, ITSM, SIEM, and firewalls</span>
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
                  <Brain className="w-5 h-5" />
                </span>

                <p className="leading-relaxed">
                  <span className="text-white font-semibold">
                    AI-Powered Behavioral Analysis
                  </span>
                  <br />
                  Proprietary AI learns user patterns, analyzing 1,400+ features
                  to detect deviations
                </p>
              </li>

              <li className="flex gap-4">
                <span className="mt-1 text-red-600">
                  <Plug className="w-5 h-5" />
                </span>

                <p className="leading-relaxed">
                  <span className="text-white font-semibold">
                    Agentless Deployment
                  </span>
                  <br />
                  Seamless integration without agents, enabling rapid setup and
                  user flexibility
                </p>
              </li>

              <li className="flex gap-4">
                <span className="mt-1 text-red-600">
                  <Video className="w-5 h-5" />
                </span>

                <p className="leading-relaxed">
                  <span className="text-white font-semibold">
                    Session Monitoring & Recording
                  </span>
                  <br />
                  Detailed recordings, real-time monitoring, and extensive
                  logging for forensic capabilities
                </p>
              </li>

              <li className="flex gap-4">
                <span className="mt-1 text-red-600">
                  <Layers3 className="w-5 h-5" />
                </span>

                <p className="leading-relaxed">
                  <span className="text-white font-semibold">
                    Unified Platform
                  </span>
                  <br />
                  All-in-one solution for security, compliance, and productivity
                  across hybrid environments
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </VendorLayout>
  );
};

export default Fudo;
