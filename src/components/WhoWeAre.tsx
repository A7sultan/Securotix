import { motion } from "framer-motion";
import Bgimg from "../assets/Glowing energy stream in cybernetic space.png";
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
    <section className="relative bg-black">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${Bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.8,
        }}
      />

      <div className="absolute inset-0" />

      <div className="relative z-10 container mx-auto px-6 py-24 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT PANEL */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-10 space-y-6"
          >
            <h2 className="font-bold text-5xl text-white">Who We Are</h2>

            <div className="space-y-5 text-lg text-neutral-200 leading-relaxed">
              <p>
                <span className="text-primary font-semibold">Securotix</span> is
                a cybersecurity-focused Value Added Distributor committed to
                empowering enterprises across the MENA region.
              </p>

              <p>
                We simplify the adoption of complex security technologies —
                helping organizations build resilience, accelerate
                transformation, and scale securely.
              </p>

              <p>
                Our partner-first ecosystem ensures seamless enablement,
                regional coverage, and access to next-generation cybersecurity
                innovation.
              </p>
            </div>

            {/* MISSION + VISION */}
            <div className="grid md:grid-cols-2 gap-6 pt-6">

              <motion.div
                variants={fadeUp}
                className="
                  bg-black/70 border border-white/15 rounded-xl p-6
                  shadow-[0_0_25px_rgba(0,0,0,.6)]
                  hover:border-primary/30
                  hover:shadow-[0_0_35px_rgba(255,0,0,.25)]
                  transition
                "
              >
                <h3 className="text-white font-semibold text-xl mb-2">
                  Our Mission
                </h3>

                <div className="fancy-line w-20 mb-4" />

                <p className="text-neutral-300 leading-relaxed text-sm">
                  Our mission is to empower organizations through technology,
                  consulting, and cybersecurity for digital growth and
                  resilience.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="
                  bg-black/70 border border-white/15 rounded-xl p-6
                  shadow-[0_0_25px_rgba(0,0,0,.6)]
                  hover:border-primary/30
                  hover:shadow-[0_0_35px_rgba(255,0,0,.25)]
                  transition
                "
              >
                <h3 className="text-white font-semibold text-xl mb-2">
                  Our Vision
                </h3>

                <div className="fancy-line w-20 mb-4" />

                <p className="text-neutral-300 leading-relaxed text-sm">
                  To be the global leader in providing innovative technology
                  solutions, expert consulting, and cybersecurity services.
                </p>
              </motion.div>

            </div>
          </motion.div>

          {/* RIGHT GRID CARD */}
<div className="grid grid-cols-2 gap-8">
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
        className="
          rounded-2xl 
          p-6 
          bg-black/70 
          backdrop-blur 
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

          <h3 className="text-white font-semibold text-lg">
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
