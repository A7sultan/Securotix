import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Shield, Target, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="text-glow">About</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-cyber-red-glow bg-clip-text text-transparent">
                CyberGuard
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Leading the future of cyber security with innovative AI-powered solutions
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="cyber-border rounded-lg p-8 glass hover-lift">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To protect organizations from evolving cyber threats through cutting-edge
                technology, proactive defense strategies, and unwavering commitment to security excellence.
              </p>
            </div>
            
            <div className="cyber-border rounded-lg p-8 glass hover-lift">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To create a cyber-safe world where businesses can innovate fearlessly,
                protected by the most advanced security infrastructure and threat intelligence.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "500+", label: "Clients Protected" },
              { value: "50+", label: "Security Experts" },
              { value: "99.9%", label: "Threat Detection" },
            ].map((stat, index) => (
              <div key={index} className="cyber-border rounded-lg p-6 glass text-center hover-lift">
                <div className="text-4xl font-bold text-primary text-glow mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-glow">Leadership</span> Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Sarah Chen", role: "CEO & Founder", image: "SC" },
                { name: "Marcus Rodriguez", role: "CTO", image: "MR" },
                { name: "Emily Thompson", role: "Head of Security", image: "ET" },
              ].map((member, index) => (
                <div key={index} className="cyber-border rounded-lg p-6 glass hover-lift group">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl font-bold text-primary">{member.image}</span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                  <p className="text-muted-foreground text-center">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-12">
              Our <span className="text-primary">Values</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "Security First", desc: "Every decision prioritizes protection" },
                { icon: Users, title: "Client Focus", desc: "Your success is our mission" },
                { icon: Award, title: "Excellence", desc: "Uncompromising quality standards" },
                { icon: Target, title: "Innovation", desc: "Leading edge technology" },
              ].map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="cyber-border rounded-lg p-6 glass hover-lift text-center">
                    <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
