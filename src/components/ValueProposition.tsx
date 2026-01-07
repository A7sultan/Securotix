import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OrbitAnimation } from "./OrbitAnimation";

type Tab = "Partners" | "Customers" | "Vendors";

const tabs: Tab[] = ["Partners", "Customers", "Vendors"];

const content: Record<Tab, string> = {
  Partners: `
Empowering Growth & Market Expansion
At Securotix, we work as a strategic growth enabler for our channel partners.
We help partners accelerate revenue, build stronger pipelines, and win high-value cybersecurity projects through:
• Shared and qualified business opportunities
• Joint go-to-market & co-branding initiatives
• Access to rebates, incentive programs, and MDF support
• Pre-sales guidance, solution positioning, and bid support
• Technical enablement and hands-on deployment assistance
Our goal is to build long-term, trust-driven partnerships where success is mutually earned.
`,

  Customers: `
Delivering Secure, Scalable & Future-Ready Solutions
For our customers, Securotix acts as a cybersecurity innovation partner — not just a solutions provider.
We focus on delivering measurable outcomes across security, resilience, and business value through:
• Tailored cybersecurity solutions aligned to business objectives
• Access to leading global security technologies
• Architecture design, deployment, and optimization support
• Post-sales assistance, health checks, and advisory services
• Continuous enablement and knowledge sharing
We help customers strengthen security posture, reduce risk, and maximize ROI across their cybersecurity investments.
`,

  Vendors: `
Building Market Presence & Regional Adoption
For our technology vendors, Securotix functions as an extension of their team — driving market reach, brand visibility, and solution adoption across the region through:
• Go-to-market execution and channel development
• Demand generation, lead qualification, and pipeline acceleration
• Certified pre-sales & post-sales engineering support
• Local market intelligence and opportunity mapping
• Strong, trusted partner ecosystem access
We ensure vendors gain meaningful, sustained growth and stronger regional market presence.
`,
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
    <section className="relative py-28 overflow-hidden">

      <div className="container mx-auto px-6 z-10">

        {/* ⭐ Wider layout so animation gets more space */}
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-24 items-start">

          {/* LEFT SIDE */}
          <div className="text-left space-y-8 max-w-5xl">

            <div>
              <h2 className="text-[3.2rem] font-bold">
                Value Proposition
              </h2>

              <div className="fancy-line mt-3 w-[180px]" />
            </div>

            <p className="text-[19px] leading-[1.65]">
              At Securotix, value-creation is at the core of who we are. Our
              next-generation distribution approach is built around strengthening
              every link in the ecosystem — customers, partners, and vendors —
              fostering long-term trust, loyalty, and collaboration. Through our
              specialized value-added services, we support the full lifecycle —
              from consultation and sales to deployment, enablement, and ongoing
              support.
            </p>

            {/* TAB BUTTONS */}
            <div className="flex gap-10">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  className={`text-xl font-semibold pb-1 ${
                    active === tab
                      ? "border-b-2 border-red-500"
                      : "text-neutral-400"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* TAB CONTENT */}
            <AnimatePresence mode="wait">
              <motion.pre
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="whitespace-pre-wrap text-[19px] leading-[1.55]"
              >
                {content[active]}
              </motion.pre>
            </AnimatePresence>

          </div>

          {/* RIGHT — LARGE ANIMATION */}
          <div className="relative h-[720px] md:h-[880px] w-full">
            <OrbitAnimation />
          </div>

        </div>
      </div>

      {/* underline styling */}
      <style>{`
        .fancy-line {
          position: relative;
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
