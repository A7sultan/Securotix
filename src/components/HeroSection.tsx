import { Button } from "./ui/button";
import { Shield, Lock, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Animated shield */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <Shield className="w-[800px] h-[800px] text-primary animate-float" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 animate-fade-in-up">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Next-Gen Cyber Defense</span>
          </div> */}

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mt-4">
            <span className="text-glow block mb-4">Secure Your</span>
            <span className="bg-gradient-to-r from-primary via-cyber-red-glow to-primary bg-clip-text text-transparent">
              Digital Fortress
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Elite cyber security solutions protecting organizations from advanced threats
            with AI-powered defense systems and real-time threat intelligence.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 neon-pulse text-lg px-8 py-6"
            >
              <Lock className="w-5 h-5 mr-2" />
              Get Protected Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 hover-glow"
            >
              Request Assessment
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            {[
              { value: "99.9%", label: "Uptime" },
              { value: "10M+", label: "Threats Blocked" },
              { value: "500+", label: "Clients Secured" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="cyber-border p-6 rounded-lg holographic hover-lift"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary text-glow">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 scan-line pointer-events-none" />
    </section>
  );
};
