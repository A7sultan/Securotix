import { useEffect, useState } from "react";
import { CyberParticles } from "./CyberParticles";

const rotatingWords = [
  "Adds Value",
  "Enables Security",
  "Showcases Compliance",
];

export const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % rotatingWords.length);
    }, 4800); // SLOWER change
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20">
      <CyberParticles />

      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl space-y-8">

          {/* HERO TITLE */}
          <h1 className="font-bold leading-tight text-left text-[clamp(2.2rem,5vw,3.5rem)]">
            <span className="block mb-1">
              A distributor that
            </span>

            {/* MORE HEIGHT + SMOOTH MASK */}
            <span className="relative inline-flex overflow-hidden h-[78px] md:h-[92px]">
              <span
                key={index}
                className="
                  bg-gradient-to-r
                  from-primary via-cyber-red-glow to-primary
                  bg-clip-text text-transparent
                  font-semibold
                  text-[clamp(2.2rem,5vw,3.5rem)]
                  leading-[1.15]
                  flip-anim
                "
              >
                {rotatingWords[index]}
              </span>
            </span>
          </h1>

          {/* LOCATION */}
          <p className="text-left text-[clamp(1.05rem,1.5vw,1.25rem)] text-muted-foreground">
            Securotix Networks Technology<br />
            Dubai, United Arab Emirates
          </p>

          {/* DESCRIPTION */}
          <p className="text-left text-[clamp(1rem,1.4vw,1.2rem)] text-muted-foreground max-w-2xl">
            Securotix is a UAE-based value-added distributor specializing in
            cybersecurity and technology solutions across the Middle East. We
            partner with leading global vendors to deliver advanced, integrated,
            and scalable security technologies.
          </p>
        </div>
      </div>

      <div className="absolute inset-0 scan-line pointer-events-none" />

      <style>{`
        .flip-anim {
          display: inline-block;
          animation: flip 2.6s cubic-bezier(.22,.68,.2,1);
          transform-origin: center;
        }

        @keyframes flip {
          0%   { transform: rotateX(90deg); opacity: 0; }
          18%  { opacity: 1; }
          45%  { transform: rotateX(-10deg); }
          75%  { transform: rotateX(4deg); }
          100% { transform: rotateX(0deg); opacity: 1; }
        }
      `}</style>
    </section>
  );
};
