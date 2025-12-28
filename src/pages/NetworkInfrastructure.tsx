import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/Footer";
import { Network, Server, Cloud, Zap, Lock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Network,
    title: "Network Architecture",
    description:
      "Design and implement secure, scalable network infrastructure with zero-trust principles.",
  },
  {
    icon: Server,
    title: "Infrastructure Security",
    description:
      "Harden servers, databases, and applications with industry-leading security practices.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Build and secure multi-cloud environments with automated compliance and monitoring.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Maximize network efficiency while maintaining top-tier security standards.",
  },
  {
    icon: Lock,
    title: "Access Control",
    description:
      "Implement granular access policies and network segmentation strategies.",
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description:
      "Advanced mitigation systems protecting against sophisticated distributed attacks.",
  },
];

const NetworkInfrastructure = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="text-glow">Network</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-cyber-red-glow bg-clip-text text-transparent">
                Infrastructure
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Build resilient, secure, and high-performance network foundations
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 neon-pulse mt-6"
            >
              Request Assessment
            </Button>
          </div>

          {/* Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="cyber-border rounded-lg p-8 glass hover-lift hover-glow transition-all"
                >
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Network Topology */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-primary">Secure</span> Network Topology
            </h2>
            <div className="cyber-border rounded-lg p-12 glass relative overflow-hidden">
              <div className="relative z-10">
                <svg className="w-full h-96" viewBox="0 0 800 400">
                  {/* Center node */}
                  <circle
                    cx="400"
                    cy="200"
                    r="40"
                    fill="hsl(0 100% 30%)"
                    opacity="0.2"
                  />
                  <circle
                    cx="400"
                    cy="200"
                    r="30"
                    fill="hsl(0 100% 30%)"
                    className="animate-pulse"
                  />
                  <text
                    x="400"
                    y="205"
                    textAnchor="middle"
                    fill="white"
                    fontSize="12"
                  >
                    Core
                  </text>

                  {/* Outer nodes */}
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = 400 + Math.cos(rad) * 150;
                    const y = 200 + Math.sin(rad) * 150;
                    return (
                      <g key={i}>
                        <line
                          x1="400"
                          y1="200"
                          x2={x}
                          y2={y}
                          stroke="hsl(0 100% 30%)"
                          strokeWidth="2"
                          opacity="0.5"
                        />
                        <circle
                          cx={x}
                          cy={y}
                          r="20"
                          fill="hsl(0 100% 30%)"
                          opacity="0.3"
                          className="animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                        <circle cx={x} cy={y} r="15" fill="hsl(0 100% 30%)" />
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>

          {/* Infrastructure Layers */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              Infrastructure <span className="text-primary">Layers</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Physical Layer",
                  desc: "Hardware security, data center protection",
                },
                {
                  title: "Network Layer",
                  desc: "Traffic filtering, segmentation, monitoring",
                },
                {
                  title: "Application Layer",
                  desc: "API security, authentication, encryption",
                },
              ].map((layer, index) => (
                <div
                  key={index}
                  className="cyber-border rounded-lg p-8 glass hover-lift text-center"
                >
                  <div className="text-4xl font-bold text-primary mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{layer.title}</h3>
                  <p className="text-muted-foreground">{layer.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="cyber-border rounded-lg p-12 glass text-center space-y-6 holographic">
            <h2 className="text-3xl md:text-4xl font-bold">
              Transform Your Network Infrastructure
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our experts will analyze your current setup and architect a
              secure, scalable solution tailored to your needs.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 neon-pulse"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NetworkInfrastructure;
