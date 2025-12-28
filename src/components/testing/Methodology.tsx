import { motion } from "framer-motion";
import MethodologyImg from "@/assets/webapp.png";
import { TypesOfTesting } from "@/components/testing/TypesOfTesting";

export const MethodologyAndTesting = () => {
  return (
    <section className="relative py-16">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/20 blur-[180px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            {/* Methodology */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-primary">Methodology</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                A comprehensive approach to performing penetration tests that
                not only finds security vulnerabilities but also business logic
                vulnerabilities, as well as security checklists based on
                industry standards such as OWASP10, SANS25, OSSTMM, and more.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Securotix provides on-premises and off-premises application
                security services with a proven roadmap, built on years of
                experience across application threat surfaces such as online,
                mobile, and cloud.
              </p>
            </div>

            {/* Types of Testing (same column) */}
            <TypesOfTesting />
          </motion.div>

          {/* RIGHT COLUMN — SHARED IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative flex flex-col items-center md:sticky md:top-32"
          >
            {/* Glow */}
            <div className="absolute w-[520px] h-[520px] rounded-full bg-primary/30 blur-[160px]" />

            {/* Image */}
            <div className="relative">
              <img
                src={MethodologyImg}
                alt="Security Testing"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CTA — NOW RIGHT BELOW IMAGE */}
            <button
              className="
      mt-10
      px-8 py-4
      rounded-lg
      bg-primary text-primary-foreground
      font-semibold
      hover:bg-primary/90
      transition
      shadow-[0_0_30px_rgba(255,0,0,0.45)]
    "
            >
              Get Free Consultation
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
