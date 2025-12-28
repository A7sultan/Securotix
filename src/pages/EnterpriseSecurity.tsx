import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Eye, Server, Database, Network } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Shield,
    title: "Identity & Access Management",
    description:
      "Zero-trust architecture with multi-factor authentication, privileged access management, and single sign-on solutions.",
  },
  {
    icon: Eye,
    title: "SIEM & Log Management",
    description:
      "Advanced security information and event management with real-time threat detection and automated response.",
  },
  {
    icon: Lock,
    title: "Endpoint Protection",
    description:
      "Next-gen antivirus, EDR, and XDR solutions protecting all endpoints with AI-powered threat prevention.",
  },
  {
    icon: Server,
    title: "Cloud Security",
    description:
      "Comprehensive cloud security posture management for AWS, Azure, and Google Cloud platforms.",
  },
  {
    icon: Database,
    title: "Data Loss Prevention",
    description:
      "Protect sensitive data with encryption, monitoring, and policy enforcement across all channels.",
  },
  {
    icon: Network,
    title: "Network Security",
    description:
      "Next-generation firewalls, IPS/IDS, and network segmentation for comprehensive protection.",
  },
];

const EnterpriseSecurity = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="text-glow">Enterprise</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-cyber-red-glow bg-clip-text text-transparent">
                Security Solutions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive security framework designed for large-scale
              organizations
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 neon-pulse mt-6"
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={index}
                  className="cyber-border rounded-lg p-8 glass hover-lift hover-glow transition-all scan-line"
                >
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Security Layers Visualization */}
          <div className="max-w-5xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-primary">Defense</span> in Depth
            </h2>
            <div className="space-y-4">
              {[
                {
                  layer: "Perimeter Security",
                  desc: "Firewall, IPS/IDS, DDoS Protection",
                },
                {
                  layer: "Network Security",
                  desc: "Segmentation, Zero Trust, VPN",
                },
                {
                  layer: "Application Security",
                  desc: "WAF, API Gateway, Code Scanning",
                },
                { layer: "Data Security", desc: "Encryption, DLP, Backup" },
                {
                  layer: "Endpoint Security",
                  desc: "EDR, Antivirus, Device Management",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="cyber-border rounded-lg p-6 glass hover-lift"
                  style={{ marginLeft: `${index * 20}px` }}
                >
                  <h3 className="text-xl font-bold mb-2 text-primary">
                    {item.layer}
                  </h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="cyber-border rounded-lg p-12 glass text-center space-y-6 holographic">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Secure Your Enterprise?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let our security experts assess your current infrastructure and
              design a customized protection strategy.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 neon-pulse"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EnterpriseSecurity;
