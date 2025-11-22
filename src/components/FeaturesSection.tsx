import { Shield, Eye, Cpu, Lock, Network, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Advanced Threat Protection",
    description: "AI-powered defense against zero-day attacks and APTs with real-time threat intelligence.",
  },
  {
    icon: Eye,
    title: "24/7 Security Monitoring",
    description: "Round-the-clock surveillance with automated incident response and threat hunting.",
  },
  {
    icon: Cpu,
    title: "AI-Driven Analytics",
    description: "Machine learning algorithms detect anomalies and predict potential security breaches.",
  },
  {
    icon: Lock,
    title: "Data Encryption",
    description: "Military-grade encryption for data at rest and in transit with quantum-resistant algorithms.",
  },
  {
    icon: Network,
    title: "Network Security",
    description: "Comprehensive network protection with next-gen firewalls and intrusion prevention.",
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description: "Automated incident response with our elite security operations center.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-glow">Elite Security</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-cyber-red-glow bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive protection powered by cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group cyber-border rounded-lg p-8 glass hover-lift hover-glow transition-all duration-300 scan-line"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
