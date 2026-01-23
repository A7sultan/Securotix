import { useNavigate } from "react-router-dom";
import { VendorLayout } from "../../components/partners/VendorLayout";
import OneKosmosLogo from "@/assets/1K-Wordmark-White.png";
import { FancyLine } from "@/components/ui/FancyLine";
import solutionImg from "@/assets/points.jpg";
import differentiatorImg from "@/assets/earth.jpg";
import { motion } from "framer-motion";
import { PeerInsightsCard1Kosmos } from "@/components/vendors/PeerInsightsCard1Kosmos";
import {
  UserCheck,
  KeyRound,
  UserPlus,
  Wallet,
  ShieldCheck,
} from "lucide-react";
import { CyberWebDataFlowRedBG } from "@/components/CyberWebDataFlowRedBG";

const OneKosmos = () => {
  const navigate = useNavigate();

  return (
    <VendorLayout
      name="1Kosmos"
      logo={OneKosmosLogo}
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
        {/* Content */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="flex justify-center lg:justify-start">
              <a
                href="https://www.1kosmos.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit 1Kosmos website"
                className="inline-block hover:opacity-90 transition-opacity"
              >
                <img
                  src={OneKosmosLogo}
                  alt="1Kosmos logo"
                  className="max-h-28 sm:max-h-32 object-contain cursor-pointer"
                />
              </a>
            </div>

            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-xl sm:text-xl text-white/90 mb-10 leading-relaxed">
                Passwordless identity verification and authentication built on
                high-assurance biometrics.
              </h2>

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
      {/* ABOUT + CARDS (BACKGROUND IMAGE) */}
      {/* ================================================= */}
      <section className="relative px-6 sm:px-10 lg:px-24 py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              About 1Kosmos
            </h2>

            <FancyLine width="w-24" className="mb-8" />

            <p className="text-base sm:text-lg leading-relaxed text-white/80 max-w-xl mb-10">
              1Kosmos is a leader in identity-based security, delivering a
              unified platform that eliminates passwords while providing strong
              identity assurance through biometric verification and
              decentralized identity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
              {[
                {
                  title: "What We Solve",
                  text: "Eliminate stolen passwords, identity fraud, and account takeover. Verify users once and authenticate them for life.",
                },
                {
                  title: "How We Do It",
                  text: "A biometric-verified digital identity platform enabling passwordless login and continuous authentication.",
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
            <PeerInsightsCard1Kosmos />
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
                <UserCheck className="w-5 h-5 text-red-600 mt-[2px]" />
                <span>Identity Proofing & Verification</span>
              </li>

              <li className="flex items-start gap-3">
                <KeyRound className="w-5 h-5 text-red-600 mt-[2px]" />
                <span>Passwordless Workforce Login (FIDO2, MFA)</span>
              </li>

              <li className="flex items-start gap-3">
                <UserPlus className="w-5 h-5 text-red-600 mt-[2px]" />
                <span>Customer Digital Onboarding</span>
              </li>

              <li className="flex items-start gap-3">
                <Wallet className="w-5 h-5 text-red-600 mt-[2px]" />
                <span>Decentralized Identity Wallet</span>
              </li>

              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-red-600 mt-[2px]" />
                <span>Zero Trust Continuous Authentication</span>
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
            <div className="absolute inset-0 " />
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

            <div className="">
              <ul className="space-y-6 text-white/80 max-w-xl">
                <li className="flex gap-4">
                  <span className="mt-1 text-red-600">
                    {/* Shield Icon */}
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-90"
                    >
                      <path
                        d="M12 2L20 6V12C20 16.418 16.418 20 12 22C7.582 20 4 16.418 4 12V6L12 2Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <p className="leading-relaxed">
                    <span className="text-white font-semibold">
                      FedRAMP High Authorization:
                    </span>{" "}
                    Highest security compliance level, making it the only vendor
                    with this authorization
                  </p>
                </li>

                <li className="flex gap-4">
                  <span className="mt-1 text-red-600">
                    {/* Fingerprint Icon */}
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-90"
                    >
                      <path
                        d="M12 12V14C12 16.209 10.209 18 8 18"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M16 12V14C16 18.418 12.418 22 8 22"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M8 12V11C8 8.791 9.791 7 12 7C14.209 7 16 8.791 16 11V12"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6.2 13.2V11C6.2 7.134 9.334 4 13.2 4C17.066 4 20.2 7.134 20.2 11V12.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>

                  <p className="leading-relaxed">
                    <span className="text-white font-semibold">
                      Advanced Biometric Authentication:
                    </span>{" "}
                    Extensive face biometrics experience for continuous,
                    adaptive authentication
                  </p>
                </li>

                <li className="flex gap-4">
                  <span className="mt-1 text-red-600">
                    {/* Trust / Badge Icon */}
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-90"
                    >
                      <path
                        d="M12 3L20 7V12C20 16.418 16.418 20 12 21C7.582 20 4 16.418 4 12V7L12 3Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 12L11 14L15 10"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <p className="leading-relaxed">
                    <span className="text-white font-semibold">
                      “Trifecta of Trust”:
                    </span>{" "}
                    Combines identity verification, passwordless authentication,
                    and user-controlled privacy
                  </p>
                </li>

                <li className="flex gap-4">
                  <span className="mt-1 text-red-600">
                    {/* Plug / Integration Icon */}
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-90"
                    >
                      <path
                        d="M9 7V4M15 7V4"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7 7H17V11C17 14.314 14.314 17 11 17H13C9.686 17 7 14.314 7 11V7Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 17V20"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>

                  <p className="leading-relaxed">
                    <span className="text-white font-semibold">
                      Comprehensive Integration:
                    </span>{" "}
                    Deep, prebuilt connectors across the identity and access
                    management stack
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </VendorLayout>
  );
};

export default OneKosmos;
