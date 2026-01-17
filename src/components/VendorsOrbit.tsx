import { useEffect, useRef } from "react";
import { NavLink } from "@/components/navigation/NavLink";

import logo1kosmos from "@/assets/1K-Wordmark-White.png";
import logoMiniOrange from "@/assets/Full Logo white@3x.png";
import logoTufin from "@/assets/tufin.png";
import logoFudo from "@/assets/fudo.png";
import logoNucleus from "@/assets/nucleus.png";
import logoMazeBolt from "@/assets/mazebolt.png";
import logoJizoAI from "@/assets/Jizô-AI-blanc-et-jaune-square-800-px.png";
import coreLogo from "@/assets/logo_transparent.png";

type Vendor = {
  name: string;
  path: string;
  logo: string;
};

const vendors: Vendor[] = [
  { name: "1Kosmos", path: "/1Kosmos", logo: logo1kosmos },
  { name: "Mini Orange", path: "/MiniOrange", logo: logoMiniOrange },
  { name: "Tufin", path: "/Tufin", logo: logoTufin },
  { name: "Fudo", path: "/Fudo", logo: logoFudo },
  { name: "Nucleus", path: "/Nucleus", logo: logoNucleus },
  { name: "Maze Bolt", path: "/MazeBolt", logo: logoMazeBolt },
  { name: "Jizo AI", path: "/JizoAI", logo: logoJizoAI },
];

export default function VendorsOrbit() {
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const orbitRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let frame = 0;

    const animate = () => {
      frame += 0.005;

      const orbit = orbitRef.current;
      if (!orbit) return;

      const size = orbit.offsetWidth;
      const radius = size * 0.38; // 🔑 responsive radius

      cardsRef.current.forEach((el, i) => {
        if (!el) return;

        const angle = (i / vendors.length) * Math.PI * 2 + frame;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        el.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
      {/* HEADER */}
      <div className="text-center mb-14 sm:mb-16 px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Our Vendors
        </h1>
        <div className="fancy-line mx-auto w-[160px] sm:w-[200px]" />
      </div>

      {/* ORBIT */}
      <div className="flex justify-center px-4">
        <div
          ref={orbitRef}
          className="
            relative
            w-[320px] h-[320px]
            sm:w-[520px] sm:h-[520px]
            lg:w-[760px] lg:h-[760px]
          "
        >
          {/* RINGS */}
          <div className="absolute inset-[8%] rounded-full border border-red-500/15 shadow-[0_0_30px_rgba(255,0,0,0.25)]" />
          <div className="absolute inset-[14%] rounded-full border border-red-500/10 shadow-[0_0_20px_rgba(255,0,0,0.20)]" />

          {/* CORE */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <img
              src={coreLogo}
              alt="Securotix"
              className="
      h-20 sm:h-28 lg:h-36
      w-auto
      object-contain
    "
            />
          </div>

          {/* ORBITING VENDORS */}
          {vendors.map((v, i) => (
            <NavLink
              key={v.name}
              to={v.path}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="
                absolute left-1/2 top-1/2
                -translate-x-1/2 -translate-y-1/2
              "
            >
              <div
                className="
                  w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28
                  rounded-2xl glass cyber-border
                  flex items-center justify-center
                  transition-all duration-300
                  hover:shadow-[0_0_30px_rgba(255,0,0,.6)]
                  hover:scale-[1.08]
                "
              >
                <img
                  src={v.logo}
                  alt={v.name}
                  className="max-h-10 sm:max-h-12 lg:max-h-14 opacity-90"
                />
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <style>{`
        .fancy-line {
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
        }
      `}</style>
    </section>
  );
}
