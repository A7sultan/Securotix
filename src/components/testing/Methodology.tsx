import { motion } from "framer-motion";
import {
  TypesOfTesting,
  type TestingType,
} from "@/components/testing/TypesOfTesting";

interface MethodologyAndTestingProps {
  title?: string;
  paragraphs: string[];
  image: string;
  showTypesOfTesting?: boolean;
  hideTypesTitle?: boolean;
  types?: TestingType[];
  ctaText?: string;
}

/* Animation presets */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export const MethodologyAndTesting = ({
  title,
  paragraphs,
  image,
  showTypesOfTesting = true,
   hideTypesTitle = false,
  types,
  ctaText = "Get Free Consultation",
}: MethodologyAndTestingProps) => {
  const hasMethodologyContent = Boolean(title) && paragraphs.length > 0;

  return (
    <section className="relative py-16">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* LEFT COLUMN */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={hasMethodologyContent ? "space-y-16" : "space-y-0"}
          >
            {/* Methodology (ONLY when content exists) */}
            {hasMethodologyContent && (
              <div className="space-y-6">
                <motion.h2
                  variants={fadeUp}
                  className="text-4xl md:text-5xl font-bold"
                >
                  <span className="text-primary">{title}</span>
                </motion.h2>

                {paragraphs.map((text, i) => (
                  <motion.p
                    key={i}
                    variants={fadeUp}
                    transition={{ delay: i * 0.08 }}
                    className="text-lg text-muted-foreground leading-relaxed"
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            )}

            {/* Types of Testing */}
            {showTypesOfTesting && types && (
              <motion.div
                variants={fadeUp}
                transition={{ delay: hasMethodologyContent ? 0.2 : 0 }}
              >
                <TypesOfTesting types={types} showTitle={!hideTypesTitle} />
              </motion.div>
            )}
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            variants={fadeScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative flex flex-col items-center md:sticky md:top-32"
          >
            {/* Glow */}
            <div className="absolute w-[520px] h-[520px] rounded-full bg-primary/30 blur-[160px] pointer-events-none" />

            {/* Image */}
            <img
              src={image}
              alt={title ?? "Testing illustration"}
              className="relative z-10 max-w-[480px]"
            />

            {/* CTA */}
            {ctaText && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="
                  mt-10
                  px-8 py-4
                  bg-primary text-white
                  rounded-lg
                  font-semibold
                  shadow-[0_0_30px_rgba(255,0,0,0.45)]
                "
              >
                {ctaText}
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
