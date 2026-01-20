import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Users, Globe, TrendingUp, Sparkles} from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Careers = () => {
  const [form, setForm] = useState({
    firstName: "",

    lastName: "",

    email: "",

    phone: "",

    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/careers", {
        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      alert("Application submitted successfully.");

      setForm({
        firstName: "",

        lastName: "",

        email: "",

        phone: "",

        message: "",
      });
    } catch {
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />

      <main className="pt-36 pb-24 relative">
        {/* Ambient glow */}
        <div className="absolute top-48 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 blur-[180px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Hero */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center mb-28 space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-glow">Join Our</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-cyber-red-glow bg-clip-text text-transparent">
                Dynamic Team at Securotix
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Driving innovation and excellence in cybersecurity and technology
              consultancy—together.
            </p>
          </motion.div>

          {/* Intro Content */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto mb-32"
          >
            <div className="rounded-2xl p-12 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_80px_rgba(255,0,0,0.15)]">
              <p className="text-lg text-muted-foreground leading-relaxed space-y-6">
                At <span className="text-primary font-semibold">Securotix</span>
                , we are committed to driving innovation and excellence in the
                field of cybersecurity and technology consultancy. Our diverse
                team of professionals is united by a shared passion for
                delivering cutting-edge solutions and unparalleled service to
                clients worldwide.
                <br />
                <br />
                As we continue to expand our global footprint, we are seeking
                talented and motivated individuals to join us on our journey
                towards shaping the future of secure technology management.
              </p>
            </div>
          </motion.section>

          {/* Why Work With Us */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-32"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Why <span className="text-primary">Work With Us</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  icon: Sparkles,
                  title: "Innovative Environment",
                  desc: "A dynamic workplace that encourages creativity, collaboration, and continuous learning.",
                },
                {
                  icon: Globe,
                  title: "Global Impact",
                  desc: "Secure the digital landscape and deliver cybersecurity and IT consultancy worldwide.",
                },
                {
                  icon: TrendingUp,
                  title: "Professional Growth",
                  desc: "Challenging projects, mentorship, and ongoing training to accelerate your career.",
                },
                {
                  icon: Users,
                  title: "Diverse Team",
                  desc: "An inclusive culture built on respect, collaboration, and diverse perspectives.",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{ y: -6 }}
                    className="relative rounded-2xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(255,0,0,0.12)] hover:shadow-[0_0_80px_rgba(255,0,0,0.25)] transition-all"
                  >
                    <Icon className="w-10 h-10 text-primary mb-5" />
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Careers Form */}
          <motion.section className="max-w-4xl mx-auto">
            <div className="rounded-2xl p-12 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Careers <span className="text-primary">Form</span>
              </h2>

              <form
                className="grid md:grid-cols-2 gap-6"
                onSubmit={handleSubmit}
              >
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First Name *"
                  className="w-full rounded-lg bg-background/60 border border-white/10 px-4 py-3"
                />

                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last Name *"
                  className="w-full rounded-lg bg-background/60 border border-white/10 px-4 py-3"
                />

                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  className="w-full rounded-lg bg-background/60 border border-white/10 px-4 py-3"
                />

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone *"
                  className="w-full rounded-lg bg-background/60 border border-white/10 px-4 py-3"
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Comment or Message *"
                  className="md:col-span-2 w-full rounded-lg bg-background/60 border border-white/10 px-4 py-3"
                />

                <div className="md:col-span-2 text-center">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-primary text-primary-foreground px-10 py-6 text-lg hover:bg-primary/90 neon-pulse"
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              </form>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
