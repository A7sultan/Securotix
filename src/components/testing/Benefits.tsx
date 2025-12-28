import { motion } from "framer-motion";
import { DollarSign, ShieldCheck, AlertTriangle } from "lucide-react";

const items = [
  { icon: DollarSign, label: "Cost Saving" },
  { icon: ShieldCheck, label: "Adherence To Compliance" },
  { icon: AlertTriangle, label: "Risk Management" },
];

export const Benefits = () => {
  return (
    <section className="py-4 relative">
      {/* Ambient red glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-primary/20 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-20">
          <span className="text-primary">Benefits</span>
        </h2>

        {/* Benefits Row */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-20">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-12 left-1/2 -translate-x-1/2 w-[70%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Icon wrapper */}
              <div className="relative mb-6">
                {/* Glow */}
                <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full" />

                <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-black/60 border border-primary/30 shadow-[0_0_40px_rgba(255,0,0,0.4)]">
                  <item.icon size={36} className="text-primary" />
                </div>
              </div>

              {/* Label */}
              <p className="text-lg font-semibold text-foreground">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
