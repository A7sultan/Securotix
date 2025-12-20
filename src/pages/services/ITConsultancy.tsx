import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { CyberParticles } from "@/components/CyberParticles";
import ItConsultancyImg from "@/assets/IT Consultancy service.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const ITConsultancy = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <CyberParticles />
      <Navigation />

      <main className="pt-32 pb-24 relative">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/20 blur-[160px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Hero */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16 space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-glow">IT</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-cyber-red-glow bg-clip-text text-transparent">
                Consultancy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Strategic IT consulting designed to strengthen performance,
              security, and scalability across your digital ecosystem.
            </p>
          </motion.div>

          {/* What We Do */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto mb-20"
          >
            <div className="relative rounded-2xl p-12 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_80px_rgba(255,0,0,0.15)]">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-glow">
                What We Do
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  At{" "}
                  <span className="text-primary font-semibold">Securotix</span>,
                  we offer comprehensive IT consultancy services designed to
                  empower businesses to navigate the complexities of the digital
                  landscape with confidence.
                </p>
                <p>
                  Our team of seasoned IT consultants delivers tailored
                  solutions aligned with your business objectives—ensuring
                  optimal performance, robust security, and operational
                  efficiency across your entire technology infrastructure.
                </p>
                <p>
                  As a leading global information technology and consulting
                  services company, we combine deep industry knowledge with
                  hands-on technical expertise to help organizations modernize,
                  scale, and innovate securely.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-6xl mx-auto mb-32"
          >

            <motion.div
              variants={fadeUp}
              className="
                float-none lg:float-right
                w-full lg:w-[480px]
                mb-12 lg:mb-6 lg:ml-12
                relative
              "
            >
              <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full" />
              <img
                src={ItConsultancyImg}
                alt="IT Consultancy"
                className="relative z-10 rounded-2xl border border-white/10 shadow-2xl"
              />
            </motion.div>

            {/* Intro text */}
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Comprehensive <span className="text-primary">IT Consultancy</span>
              </h2>

              <p>
                Whether you’re looking to optimize your existing IT
                infrastructure, implement new technologies, enhance
                cybersecurity measures, or streamline business processes,{" "}
                <span className="text-primary font-semibold">Securotix</span> is
                your trusted partner.
              </p>

              <p>
                Our IT Consultancy services help organizations stay ahead of the
                technological curve, drive innovation, and gain a competitive
                edge in today’s digital landscape.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-16 space-y-20 clear-both">
              {[
                {
                  number: "01",
                  title: "Network Architecture & Development",
                  desc: "Our expert consultants offer in-depth guidance and strategic planning for network architecture and development, ensuring that your network infrastructure aligns with your business goals and requirements.",
                },
                {
                  number: "02",
                  title: "Network Optimization",
                  desc: "We optimize your network infrastructure to enhance performance, reliability, and efficiency—enabling seamless, uninterrupted communication across your organization.",
                },
                {
                  number: "03",
                  title: "Legacy Platform Migration",
                  desc: "Our consultants facilitate smooth and secure transitions from legacy platforms to modern, advanced systems, minimizing disruptions and ensuring data integrity throughout the migration process.",
                },
                {
                  number: "04",
                  title: "Network Infrastructure Security",
                  desc: "With a focus on comprehensive network infrastructure security, we assess, plan, and implement robust security measures to safeguard your network from potential threats and vulnerabilities",
                },
              ].map((item, i, arr) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="relative flex gap-14 items-start"
                >
                  {/* Connector */}
                  {i !== arr.length - 1 && (
                    <div className="absolute left-[78px] top-[78px] h-[calc(100%-78px)] w-px bg-gradient-to-b from-primary/50 via-primary/25 to-transparent" />
                  )}

                  {/* Number */}
                  <div className="w-[80px] text-right flex-shrink-0">
                    <span className="text-5xl font-bold text-primary/80">
                      {item.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="max-w-3xl">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                      {item.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="relative rounded-2xl p-14 bg-gradient-to-br from-primary/25 to-transparent border border-primary/30 shadow-[0_0_120px_rgba(255,0,0,0.3)]">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let’s Build a Secure & Scalable Future
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Partner with Securotix to accelerate growth, strengthen
                security, and transform your IT landscape with confidence.
              </p>
              <p className="text-lg font-medium">
                Contact us at{" "}
                <a
                  href="mailto:info@securotix.com"
                  className="text-primary hover:underline"
                >
                  info@securotix.com
                </a>
              </p>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ITConsultancy;
