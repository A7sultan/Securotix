import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Shield, Lock } from "lucide-react";


// Counter animation hook
const useCounter = (target: string, active: boolean, duration = 2000) => {
  const [value, setValue] = useState("0");

  useEffect(() => {
    if (!active) return; // runs only when visible

    const numberMatch = target.match(/[\d.]+/);
    if (!numberMatch) return;

    const number = parseFloat(numberMatch[0]);
    const suffix = target.replace(numberMatch[0], "");

    let start = 0;
    const step = number / (duration / 16);

    const interval = setInterval(() => {
      start += step;
      if (start >= number) {
        clearInterval(interval);
        setValue(target);
      } else {
        setValue(Math.floor(start).toString() + suffix);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [active, target, duration]);

  return value;
};

export const HeroSection = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Trigger when stats come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "100%", label: "On-time Delivery" },
    { value: "24/7", label: "Support Availability" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "10+", label: "Years of Experience" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* Floating Shield */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <Shield className="w-[500px] md:w-[650px] lg:w-[750px] h-auto text-primary animate-float" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Heading */}
          <h1 className="font-bold leading-tight mt-12 text-[clamp(2rem,6vw,4rem)]">
            <span className="text-glow block mb-2">Value Added Distributor</span>
            <span className="bg-gradient-to-r from-primary via-cyber-red-glow to-primary bg-clip-text text-transparent block text-[clamp(1.8rem,5vw,3.5rem)] leading-tight">
              Securotix Networks Technology,<br />Dubai United Arab Emirates
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-[clamp(1rem,1.8vw,1.25rem)] text-muted-foreground max-w-2xl mx-auto">
            Securotix is a UAE-based value-added distributor specializing in
            cybersecurity and technology solutions across the Middle East. We
            partner with leading global vendors to deliver advanced, integrated,
            and scalable security technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 neon-pulse text-lg px-8 py-6">
              <Lock className="w-5 h-5 mr-2" />
              Get Protected Now
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 hover-glow">
              Request Assessment
            </Button>
          </div>

          {/* Stats Section (Scroll triggered) */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-5xl mx-auto text-center">
            {stats.map((s, i) => {
              const animatedValue = useCounter(s.value, visible);

              return (
                <div key={i} className="group hover:scale-105 transition-all duration-300">
                  <div className="text-[clamp(2rem,4vw,3rem)] font-bold text-primary text-glow">
                    {animatedValue}
                  </div>
                  <div className="h-[2px] w-10 bg-primary/40 mx-auto my-3 group-hover:bg-primary transition-all" />
                  <div className="text-sm md:text-base text-muted-foreground font-medium">
                    {s.label}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Scanline Effect */}
      <div className="absolute inset-0 scan-line pointer-events-none" />
    </section>
  );
};
