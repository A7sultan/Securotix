import { motion } from "framer-motion";
import {
  Settings,
  Layers,
  Award,
  TrendingUp,
  HeartHandshake,
  Users,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const WhoWeAre = () => {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* DARK BASE */}
      <div className="absolute inset-0 bg-black/90" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20 sm:py-24 lg:py-28 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-start">
          {/* LEFT PANEL */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="
              bg-black/60 backdrop-blur-md
              border border-white/10
              rounded-2xl shadow-2xl
              p-6 sm:p-8 lg:p-10
              space-y-6
            "
          >
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
              Who We Are
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-neutral-200 leading-relaxed">
              <p>
                <span className="text-primary font-semibold">At Securotix</span>{" "}
                <br></br> We believe that cybersecurity is an ever evolving
                marketplace and we aim to deliver this innovation where it makes
                a difference. Our mantra is to focus on continuously simplifying
                access to intricate cybersecurity solutions that are
                impenetrable and straightforward.
              </p>

              <p>
                We are a cybersecurity focused Value Added Distributor based in
                the UAE. Our expertise molded by experience of the MENA region
                allows us to deliver unmatched visibility for cutting edge
                technologies. Bringing a smooth distribution ecosystem to our
                partners for empowered relationships and greater synergy.
              </p>
            </div>

            {/* MISSION + VISION */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              <motion.div
                variants={fadeUp}
                className="
                  bg-black/70 border border-white/15
                  rounded-xl p-5 sm:p-6
                  shadow-[0_0_25px_rgba(0,0,0,.6)]
                  hover:border-primary/30
                  hover:shadow-[0_0_35px_rgba(255,0,0,.25)]
                  transition
                "
              >
                <h3 className="text-white font-semibold text-lg sm:text-xl mb-2">
                  Our Mission
                </h3>
                <div className="fancy-line w-16 sm:w-20 mb-3" />
                <p className="text-neutral-300 leading-relaxed text-sm">
                  We aim to generate awareness about cybersecurity, which is one
                  of the fastest growing industries in the world. We endeavour
                  to empower local organizations to compete with the rapidly
                  evolving security ecosystem around them so that they can gain
                  an edge in their market.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="
                  bg-black/70 border border-white/15
                  rounded-xl p-5 sm:p-6
                  shadow-[0_0_25px_rgba(0,0,0,.6)]
                  hover:border-primary/30
                  hover:shadow-[0_0_35px_rgba(255,0,0,.25)]
                  transition
                "
              >
                <h3 className="text-white font-semibold text-lg sm:text-xl mb-2">
                  Our Vision
                </h3>
                <div className="fancy-line w-16 sm:w-20 mb-3" />
                <p className="text-neutral-300 leading-relaxed text-sm">
                  To be one of the regional leaders in the Cybersecurity
                  domain.Our objective is to provide comprehensive solutions,
                  services and consulting to guard again any potential threats
                  whilst complying with to the local and industry standards.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                icon: Settings,
                title: "Tailored Solutions",
                desc: "Built around your business outcomes.",
              },
              {
                icon: Layers,
                title: "Full-Stack Expertise",
                desc: "Infrastructure through cyber defense.",
              },
              {
                icon: Award,
                title: "Regional Knowledge",
                desc: "Deep understanding of the MENA market.",
              },
              {
                icon: TrendingUp,
                title: "Forward-Thinking",
                desc: "Proactive resilience, not firefighting.",
              },
              {
                icon: HeartHandshake,
                title: "Partnership-Driven",
                desc: "Relationships built on trust and value.",
              },
              {
                icon: Users,
                title: "Quality Assured",
                desc: "Precision delivery every time.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="
                    rounded-2xl p-5 sm:p-6
                    bg-black/70 backdrop-blur
                    border border-white/10
                    shadow-[0_0_25px_rgba(0,0,0,.6)]
                    hover:border-primary/40
                    hover:shadow-[0_0_35px_rgba(255,0,0,.25)]
                    transition
                    space-y-3
                  "
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-white font-semibold text-base sm:text-lg">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-neutral-300 text-sm leading-relaxed pl-14">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
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
          box-shadow: 0 0 12px rgba(255,0,0,0.5);
        }
      `}</style>
    </section>
  );
};

export default WhoWeAre;
