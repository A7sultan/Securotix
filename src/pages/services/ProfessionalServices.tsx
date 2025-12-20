import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CyberParticles } from "@/components/CyberParticles";
import { motion } from "framer-motion";
import ProfessionalServicesImg from "@/assets/Professional Services.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const ProfessionalServices = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <CyberParticles />
      <Navigation />

      <main className="pt-32 pb-24 relative">

        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-primary/20 blur-[180px] rounded-full pointer-events-none" />

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
              <span className="text-glow">Professional</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-cyber-red-glow bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              End-to-end expertise to design, implement, optimize, and support
              enterprise networking and security solutions.
            </p>
          </motion.section>

          {/* OVERVIEW */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto mb-24"
          >
            <div className="relative rounded-2xl p-12 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_100px_rgba(255,0,0,0.15)]">
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
                <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-8 
               text-white 
               drop-shadow-[0_0_20px_rgba(255,0,0,0.65)]"
                  >
                    Professional Services
                  </h2>

                  <p>
                    Securotix will provide you with a the complete range of
                    installation services including scoping, implementation,
                    operational training, classroom training and on-going help
                    desk support.
                  </p>

                  <p>
                    All projects can be delivered under the auspices of a PMP
                    certified project manager.
                  </p>

                  <p>
                    The Securotix Professional Services team provides a
                    comprehensive range of services throughout the project
                    lifecycle and has a well-regarded history in the design,
                    implementation and support of Enterprise Networking and
                    Security solutions.
                  </p>
                </div>

                <motion.div
                  variants={fadeUp}
                  className="relative hidden lg:block"
                >
                  <div className="absolute inset-0 bg-primary/25 blur-[120px] rounded-full" />

                  <img
                    src={ProfessionalServicesImg}
                    alt="Professional Services"
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
              Our <span className="text-primary">Professional Services</span>
            </h2>

            <div className="space-y-10">
              {[
                "Project Management: Our skilled project managers will work closely with your team to ensure the successful planning, execution, and delivery of your projects. We provide comprehensive project management services to keep your initiatives on track and within budget.",
                "Implementation Support: Implementing new technologies or systems can be complex. Our experts provide hands-on support during the implementation phase, ensuring a seamless transition and minimal disruption to your business operations.",
                "Training and Knowledge Transfer: To fully leverage the potential of your technology investments, it’s essential to empower your team with the necessary skills and knowledge. We offer customized training programs tailored to your specific needs, equipping your workforce with the expertise required for optimal performance.",
                "Solution Optimization: Our professionals conduct thorough assessments of your existing solutions, identifying areas for improvement and optimization. We then provide recommendations and implement enhancements to maximize the efficiency and effectiveness of your systems.",
                "Technical Deployments: Our skilled professionals ensure smooth and efficient technical deployments, facilitating the seamless integration of new technologies within your existing infrastructure.",
                "System Migrations: We facilitate hassle-free system migrations, ensuring minimal disruption to your business operations while upgrading to advanced and secure systems.",
                "System Integrations: Our experts specialize in system integrations, enabling the seamless collaboration of different systems and technologies to optimize your business processes.",
                "Project Management: With our effective project management services, we oversee the entire project lifecycle, ensuring timely delivery and successful execution of your technology initiatives.",
                "Solution Architecting: Our solution architects develop comprehensive and scalable solutions tailored to your specific business needs, ensuring optimal performance and security.",
                "WLAN Site Surveys: We conduct detailed WLAN site surveys, providing you with critical insights to optimize your wireless network infrastructure for maximum efficiency and coverage.",
                "PAC/CAT: Our professionals provide PAC (Post-Access Control) and CAT (Captive-Aire Testing) services, ensuring the safety and compliance of your controlled environment systems.",
              ].map((service, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ scale: 1.02 }}
                  className="relative p-8 rounded-xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-lg"
                >
                  <div className="absolute inset-0 bg-primary/10 opacity-0 hover:opacity-100 blur-xl transition pointer-events-none" />
                  <p className="relative z-10 text-lg text-muted-foreground leading-relaxed">
                    <span className="text-primary font-bold mr-3">
                      {i + 1}.
                    </span>

                    <span className="text-white font-semibold">
                      {service.split(":")[0]}:
                    </span>

                    <span className="ml-2">
                      {service.split(":").slice(1).join(":")}
                    </span>
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
                Your Trusted Professional Services Partner
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                With Securotix as your Professional Services partner, you can
                focus on your core business while leveraging our expertise to
                drive success. Our team is dedicated to delivering top-quality
                services that align with your goals and help you stay ahead of
                the competition.
              </p>
              <p className="text-lg font-medium">
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

export default ProfessionalServices;
