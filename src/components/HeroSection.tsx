import { useEffect, useState } from "react";
import { CyberParticles } from "./CyberParticles";

const rotatingWords = [
  "Adds Value",
  "Enables Security",
  "Creates synergy",
  "Drives innovation",
];

export const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 4800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <CyberParticles />

      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl space-y-10">
          {/* HERO TITLE */}
          <h1 className="font-bold leading-tight text-left text-[clamp(2.2rem,5vw,3.5rem)]">
            {/* push this line slightly down */}
            <span className="block mb-3">A Distributor That</span>

            {/* flipping text block */}
            <span className="relative inline-flex flex-col">
              <span className="overflow-hidden h-[78px] md:h-[92px]">
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

              {/* FANCY RED LINE */}
              <span className="fancy-line mt-4" />
            </span>
          </h1>

          {/* PARAGRAPH BELOW */}
          <p className="text-xl md:text-2xl font-medium">
            A valued added distributor with an{" "}
            <span className="text-cyber-red-glow">EDGE</span>
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
          .fancy-line {
  position: relative;
  width: 180px;         /* LENGTH */
  height: 3px;
  background: linear-gradient(
    90deg,
    rgba(255,0,0,0) 0%,
    rgba(220,0,0,1) 25%,
    rgba(255,0,0,1) 50%,
    rgba(220,0,0,1) 75%,
    rgba(255,0,0,0) 100%
  );
  border-radius: 999px;
  box-shadow: 0 0 12px rgba(255,0,0,0.6);
  overflow: hidden;
}

/* Shine effect */
.fancy-line::after {
  content: "";
  position: absolute;
  top: 0;
  left: -40%;
  width: 40%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255,255,255,0.8),
    transparent
  );
  animation: shimmer 2.8s infinite ease-in-out;
}

@keyframes shimmer {
  0%   { left: -40%; opacity: 0; }
  30%  { opacity: .9; }
  60%  { left: 100%; opacity: .9; }
  100% { opacity: 0; }
}

      `}</style>
    </section>
  );
};
