import React from "react";
import { Shield, Eye, Cpu, Network, Zap } from "lucide-react";

const vendors = [
  { name: "Nucleus Security", subtitle: "Risk & Vulnerability", icon: Shield },
  { name: "miniOrange", subtitle: "Identity Access", icon: Eye },
  { name: "Tufin", subtitle: "Network Security", icon: Network },
  { name: "Filigran", subtitle: "Threat Intelligence", icon: Cpu },
  { name: "Sesame-IT", subtitle: "NDR Platform", icon: Zap },
];

export const FloatingBadges = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Glow Background Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,70,0.15),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-glow mb-4">
          Key Cybersecurity
          <br />
          <span className="bg-gradient-to-r from-primary to-cyber-red-glow bg-clip-text text-transparent">
            Innovators
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground mb-16">
          Leading Companies in Cybersecurity Solutions
        </p>

        {/* Vendors */}
        <div className="flex flex-wrap justify-center gap-14">
          {vendors.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="
                  flex flex-col items-center gap-3
                  transition-all duration-300
                  hover:-translate-y-4
                "
              >
                {/* Icon Badge */}
                <div
                  className="
                    w-24 h-24 rounded-full flex items-center justify-center
                    bg-black/30 backdrop-blur-md
                    ring-2 ring-primary/40
                    shadow-[0_0_25px_rgba(255,0,80,0.4)]
                    hover:shadow-[0_0_45px_rgba(255,0,80,0.8)]
                    transition-shadow
                  "
                >
                  <Icon className="w-12 h-12 text-primary drop-shadow-[0_0_10px_rgba(255,0,120,0.6)]" />
                </div>

                {/* Vendor Name */}
                <div className="text-lg font-semibold text-white">
                  {v.name}
                </div>

                {/* Vendor Subtitle */}
                <div className="text-sm text-muted-foreground">
                  {v.subtitle}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
