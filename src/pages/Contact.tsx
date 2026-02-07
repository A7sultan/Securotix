import { useState } from "react";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { API_BASE_URL } from "@/lib/api";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      setSuccess(true);
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Navigation should NOT block page */}
      <Navigation />

      {/* 🔑 Interaction-safe layer */}
      <main className="relative z-10 pt-36 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="text-glow">Get In</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-cyber-red-glow bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Let's discuss how we can protect your organization
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="cyber-border rounded-lg p-8 glass">
  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

  <form className="space-y-6" onSubmit={handleSubmit}>
    <Input
      name="name"
      value={form.name}
      onChange={handleChange}
      placeholder="John Doe"
    />

    <Input
      name="email"
      type="email"
      value={form.email}
      onChange={handleChange}
      placeholder="john@company.com"
    />

    <Input
      name="company"
      value={form.company}
      onChange={handleChange}
      placeholder="Your Company"
    />

    <Textarea
      name="message"
      value={form.message}
      onChange={handleChange}
      rows={6}
      placeholder="Tell us about your security needs..."
    />

    <Button type="submit" disabled={loading} className="w-full">
      <Send className="w-4 h-4 mr-2" />
      {loading ? "Sending..." : "Send Message"}
    </Button>
  </form>
</div>


            {/* Contact Info */}
            <div className="space-y-8">
              <InfoCard
                icon={<Mail className="w-6 h-6 text-primary" />}
                title="Email"
                content="info@securotix.com"
              />

              <InfoCard
                icon={<Phone className="w-6 h-6 text-primary" />}
                title="Phone"
                content={
                  <>
                    +971 55 651 2218 <br />
                    +971 56 310 4135 <br />
                    +971 55 640 8872
                  </>
                }
                footer="Mon–Fri, 9AM–6PM PST"
              />

              <InfoCard
                icon={<MapPin className="w-6 h-6 text-primary" />}
                title="Office"
                content={
                  <>
                    167, Shaikha Mahara Al Qusais BLDG,
                    <br />
                    Al Qusais Second
                  </>
                }
              />

              <div className="cyber-border rounded-lg p-8 holographic text-center">
                <h3 className="text-2xl font-bold mb-2 text-primary text-glow">
                  24/7 SOC Support
                </h3>
                <p className="text-muted-foreground mb-4">
                  Emergency security incidents? Our SOC is always available.
                </p>
                <Button className="bg-destructive text-destructive-foreground hover:bg-destructive/90 animate-pulse">
                  Emergency Hotline
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

/* ---------- Helper ---------- */

const InfoCard = ({
  icon,
  title,
  content,
  footer,
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  footer?: string;
}) => (
  <div className="cyber-border rounded-lg p-8 hover-lift bg-background">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{content}</p>
        {footer && (
          <p className="text-sm text-muted-foreground mt-1">{footer}</p>
        )}
      </div>
    </div>
  </div>
);
