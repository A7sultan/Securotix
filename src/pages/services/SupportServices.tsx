import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import SupportServicesImg from "@/assets/Support Services.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const SupportServices = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />

      <main className="pt-36 pb-24 relative">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-primary/20 blur-[180px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          {/* HERO */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.9 }}
            className="max-w-5xl mx-auto text-center mb-28"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-glow">Support </span>
              <span className="bg-gradient-to-r from-primary to-cyber-red-glow bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <br />
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Reliable, expert-driven support designed to keep your systems
              secure, stable, and operational.
            </p>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-6xl mx-auto mb-32"
          >
            <div className="relative rounded-2xl p-12 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_100px_rgba(255,0,0,0.15)]">
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-8 
               text-white 
               drop-shadow-[0_0_20px_rgba(255,0,0,0.65)]"
                  >
                    Supprt Services
                  </h2>

                  <p>Welcome to our Support Services</p>

                  <p>
                    On average most of the Securotix helpdesk calls are resolved
                    during the initial call. This is attributed to the fact that
                    all Securotix helpdesk operators are Computer Engineers with
                    a Minimum of a BS Degree in Computer Engineering and are
                    trained & certified on all the products to diagnose and
                    resolve the most common types of issues.
                  </p>
                </div>

                <motion.div
                  variants={fadeUp}
                  className="relative hidden lg:block"
                >
                  <div className="absolute inset-0 bg-primary/25 blur-[120px] rounded-full" />
                  <img
                    src={SupportServicesImg}
                    alt="Support Services"
                    className="relative z-10 rounded-2xl border border-white/10 shadow-2xl"
                  />
                </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
              Post-Installation{" "}
              <span className="text-primary">Support services</span>
            </h2>

            <div className="space-y-10">
              {[
                {
                  title: "Post-Installation Support Services",
                  content:
                    "In order to protect a customer’s investment, Securotix offers a post installation support service that is available to customers who take out a support and maintenance agreement. This provides software updates, new releases, database updates, telephone support via our help desk and, if necessary, free on-site support to resolve problems that have been caused directly by the software and/or appliance provided.",
                },
                {
                  title: "Support Desk Availability",
                  content:
                    "Our support desk is available as standard from 8:30 AM to 6:00 PM, Sunday to Thursday excluding Official Holidays for technical problems. It is not a substitute for formal product training. Support calls can be logged by phone, email or by the web. The support desk is manned by a team of well trained professionals who are able to resolve the problem in many cases without reference to our second line engineers or the manufacturer. Calls are escalated in accordance with the urgency of the problem. Customers are kept informed regarding the progress of a support call. There is no Service Level Agreement for the standard service.",
                },
                {
                  title: "Service Level Agreement",
                  content:
                    "If the customer requires a Service Level Agreement, Securotix can provide this as a chargeable service. The agreement will define exactly what the service will provide including call categorization and the escalation procedure that is essential to ensuring that calla are resolved in the shortest possible time.",
                },
                {
                  title: "Extended Hours Support",
                  content:
                    "We are able to provide a chargeable technical support service for extended hours. This service will be governed by a Service level Agreement. On-site support can be provided, if necessary, as part of this service.",
                },
                {
                  title: "Remote Access Support Service",
                  content:
                    "We are able to resolve calls using secure remote access technology. If a customer would like us to have access to their systems as a standard part of the support service we can provide this as a chargeable service under the auspices of a Service Level Agreement.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ scale: 1.02 }}
                  className="relative p-10 rounded-xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-lg"
                >
                  <div className="absolute inset-0 bg-primary/10 opacity-0 hover:opacity-100 blur-xl transition pointer-events-none" />
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {item.content}
                  </p>
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
            <div className="relative rounded-2xl p-16 bg-gradient-to-br from-primary/30 to-transparent border border-primary/40 shadow-[0_0_140px_rgba(255,0,0,0.4)]">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Always-On Support You Can Trust
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Contact us today at{" "}
                <a
                  href="mailto:info@securotix.com"
                  className="text-primary hover:underline"
                >
                  info@securotix.com
                </a>{" "}
                to schedule a consultation and take proactive steps towards
                safeguarding your digital assets.
              </p>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SupportServices;
