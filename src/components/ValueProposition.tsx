import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NeonAtomicOrbit from "./NeonAtomicOrbit";

type Tab = "Partners" | "Customers" | "Vendors";

const tabs: Tab[] = ["Partners", "Customers", "Vendors"];

const content: Record<Tab, string[]> = {
  Partners: [
    "We effectively pool our resources for account mapping and lead generation to ensure a two-way flow of information and maximum market penetration.",
    "Thorough support for sales enablement and post-sales activities (pre-sales, demos, PoCs, etc).",
    "End-to-end portfolio of cybersecurity solutions to securely meet all client needs.",
    "Comprehensive incentive program including cash rebates for partners.",
    "Dedicated marketing fund for greater market reach and visibility.",
  ],
  Customers: [
    "Expert-led consultation services providing holistic solutions driven by compliance and industry trends.",
    "Alignment with the most-suited and trusted System Integrators.",
    "Access to industry-leading cybersecurity solutions that help set—not just follow—industry standards.",
    "Continuous support from PoC stage through project completion.",
    "ROI-focused technology propositions.",
  ],
  Vendors: [
    "On-ground resources acting as the vendor’s face in the market.",
    "Simultaneous pipeline and channel development to prevent backlog.",
    "Market-specific marketing initiatives to boost customer acquisition.",
    "Leveraging our market reputation for lead generation and deployable GTM strategies.",
  ],
};

export default function ValueProposition() {
  const [active, setActive] = useState<Tab>("Partners");

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => {
        const index = tabs.indexOf(prev);
        return tabs[(index + 1) % tabs.length];
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-white">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.3fr] gap-16 xl:gap-28 items-start">
          {/* LEFT */}
          <div className="text-left space-y-6 sm:space-y-8 max-w-5xl">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-bold">
                Securotix Ecosystem
              </h2>
              <div className="fancy-line mt-3 w-[140px] sm:w-[180px]" />
            </div>

            <p className="text-base sm:text-lg lg:text-[19px] leading-relaxed">
              Our edge in distribution is earned by ingraining ourselves in
              every step of our channel, to facilitate and nurture our
              customers, partners & vendors. Through complete transparency,
              trust and innovation, we enable each stakeholder to complement
              each other for a value-driven experience throughout.
            </p>

            {/* TABS */}
            <div className="flex flex-wrap gap-6 sm:gap-10">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  className={`text-lg sm:text-xl font-semibold pb-1 transition ${
                    active === tab
                      ? "border-b-2 border-red-500 text-white"
                      : "text-neutral-300 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* BULLETS */}
            <AnimatePresence mode="wait">
              <motion.ul
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="
                  mt-4 sm:mt-6
                  space-y-3 sm:space-y-4
                  list-disc pl-5 sm:pl-6
                  text-base sm:text-lg lg:text-[19px]
                  leading-relaxed
                  text-neutral-100
                "
              >
                {content[active].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>

          {/* RIGHT */}
          {/* RIGHT — ORBIT */}
<div className="relative w-full flex justify-center">

  {/* MOBILE: HIDDEN */}
  <div className="hidden sm:block">

    {/* TABLET */}
<div className="block xl:hidden mx-auto w-full max-w-[380px] aspect-square">
  <NeonAtomicOrbit mode="tablet" />
</div>

{/* DESKTOP */}
<div className="hidden xl:block w-[720px] h-[720px] ml-auto">
  <NeonAtomicOrbit mode="desktop" />
</div>


  </div>
</div>
</div>
      </div>

      <style>{`
        .fancy-line {
          height: 3px;
          background: linear-gradient(
            90deg,
            rgba(255,0,0,0) 0%,
            rgba(220,0,0,1) 25%,
            rgba(255,0,0,1) 50%,
            rgba(220,0,0,1) 75%,
            rgba(255,0,0,0) 100%
          );
          border-radius: 999px;
          box-shadow: 0 0 12px rgba(255,0,0,0.6);
        }
      `}</style>
    </section>
  );
}
