import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-36 pb-20">
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
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input
                    placeholder="John Doe"
                    className="glass border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    className="glass border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Company</label>
                  <Input
                    placeholder="Your Company"
                    className="glass border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    placeholder="Tell us about your security needs..."
                    rows={6}
                    className="glass border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 neon-pulse"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="cyber-border rounded-lg p-8 glass hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Email</h3>
                    <p className="text-muted-foreground">info@securotix.com</p>
                  </div>
                </div>
              </div>

              <div className="cyber-border rounded-lg p-8 glass hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      +971 55 651 2218 <br />
                      +971 56 310 4135 <br />
                      +971 55 640 8872
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Mon-Fri, 9AM-6PM PST
                    </p>
                  </div>
                </div>
              </div>

              <div className="cyber-border rounded-lg p-8 glass hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Office</h3>
                    <p className="text-muted-foreground">
                      167, Shaikha Mahara Al Qusais BLDG, 
                    </p>
                    <p className="text-muted-foreground">
                      Al Qusais Second
                    </p>
                  </div>
                </div>
              </div>

              {/* 24/7 Support */}
              <div className="cyber-border rounded-lg p-8 glass holographic text-center">
                <h3 className="text-2xl font-bold mb-2 text-primary text-glow">
                  24/7 SOC Support
                </h3>
                <p className="text-muted-foreground mb-4">
                  Emergency security incidents? Our Security Operations Center
                  is always available.
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
