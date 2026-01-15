import { motion } from "framer-motion";
import NeonAtomicOrbit from "./NeonAtomicOrbit";

type CardKey = "Partners" | "Customers" | "Vendors";

const cards: { title: CardKey; points: string[] }[] = [
  {
    title: "Partners",
    points: [
      "We effectively pool our resources for account mapping and lead generation to ensure a two-way flow of information and maximum market penetration.",
      "Thorough support for sales enablement and post-sales activities (pre-sales, demos, PoCs, etc).",
      "End-to-end portfolio of cybersecurity solutions to securely meet all client needs.",
      "Comprehensive incentive program including cash rebates for partners.",
      "Dedicated marketing fund for greater market reach and visibility.",
    ],
  },
  {
    title: "Customers",
    points: [
      "Expert-led consultation services providing holistic solutions driven by compliance and industry trends.",
      "Alignment with the most-suited and trusted System Integrators.",
      "Access to industry-leading cybersecurity solutions that help set—not just follow—industry standards.",
      "Continuous support from PoC stage through project completion.",
      "ROI-focused technology propositions.",
    ],
  },
  {
    title: "Vendors",
    points: [
      "On-ground resources acting as the vendor’s face in the market.",
      "Simultaneous pipeline and channel development to prevent backlog.",
      "Market-specific marketing initiatives to boost customer acquisition.",
      "Leveraging our market reputation for lead generation and deployable GTM strategies.",
    ],
  },
];

export default function ValueProposition() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-white">
        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Securotix Ecosystem
          </h2>
          <div className="fancy-line mx-auto w-[180px]" />

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Our edge in distribution is earned by ingraining ourselves in every
            step of our channel — enabling customers, partners, and vendors to
            complement each other through transparency, trust, and innovation.
          </p>
        </div>

        {/* ORBIT CENTERPIECE */}
        <div className="relative flex justify-center items-center my-12 sm:my-16">
          <div className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[520px] aspect-square">
            <NeonAtomicOrbit />
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {cards.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="
            bg-black/70
            backdrop-blur-md
            border border-white/15
            rounded-2xl
            p-6 sm:p-7
            shadow-[0_0_25px_rgba(0,0,0,.6)]
            hover:border-primary/40
            hover:shadow-[0_0_35px_rgba(255,0,0,.25)]
            transition
            flex flex-col
          "
            >
              <h3 className="text-white font-semibold text-xl mb-2">
                {card.title}
              </h3>

              <div className="fancy-line w-14 mb-4" />

              <ul className="space-y-3 list-disc pl-5 text-neutral-300 text-sm sm:text-base leading-relaxed">
                {card.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* DECORATIVE LINE */}
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
