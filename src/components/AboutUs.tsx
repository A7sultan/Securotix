import { motion } from "framer-motion";
import honeycomb from "../assets/honey6.jpg";
import  {SecurotixOrbit}  from "./SecurotixOrbit";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const AboutUs = () => {
  return (
    <section className="relative overflow-hidden bg-black">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${honeycomb})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 100%",
          backgroundPosition: "left center",
          opacity: 0.55,
          maskImage: "linear-gradient(to right, black 40%, transparent 95%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 40%, transparent 95%)",
        }}
      />

      {/* ALIGN WITH HERO */}
      <div className="relative z-10 container mx-auto px-4 pt-16 pb-20">
        <div className="max-w-4xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >

            {/* LEFT CONTENT */}
            <div>
              <h2 className="font-bold leading-tight text-[clamp(2.2rem,5vw,3.5rem)] mb-6 text-glow">
                Who We Are
              </h2>

              <div className="space-y-5 leading-relaxed text-xl md:text-2xl text-white">
                <p>
                  <span className="text-primary font-semibold">Securotix</span>{" "}
                  is a cybersecurity-focused Value Added Distributor committed
                  to empowering enterprises across the MENA region.
                </p>

                <p>
                  We simplify the adoption of complex security technologies —
                  helping organizations build resilience, accelerate
                  transformation, and scale securely.
                </p>

                <p>
                  Our partner-first ecosystem ensures seamless enablement,
                  regional coverage, and access to next-generation
                  cybersecurity innovation.
                </p>
              </div>
            </div>

            {/* RIGHT — ORBIT */}
            <div className="hidden md:flex justify-center">
              <SecurotixOrbit />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
