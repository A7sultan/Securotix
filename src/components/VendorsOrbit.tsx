import { useEffect, useRef } from "react";
import { NavLink } from "@/components/navigation/NavLink";

import logo1kosmos from "@/assets/1kosmos.png";
import logoMiniOrange from "@/assets/miniorange.png";
import logoTufin from "@/assets/tufin.png";
import logoFudo from "@/assets/fudo.png";
import logoNucleus from "@/assets/nucleus.png";
import logoMazeBolt from "@/assets/mazebolt.png";
import logoJizoAI from "@/assets/jizoai.png";

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

  useEffect(() => {
    let frame = 0;

    const animate = () => {
      frame += 0.005;

      cardsRef.current.forEach((el, i) => {
        if (!el) return;

        const angle = (i / vendors.length) * Math.PI * 2 + frame;

        // ⭐ slightly reduced radius
        const radius = 320;

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        el.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="pt-36 pb-28 relative overflow-hidden">
      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Our Vendors</h1>

        <div className="fancy-line mx-auto w-[200px]" />
      </div>

      {/* ORBIT */}
      <div className="flex justify-center">
        <div className="relative w-[760px] h-[760px]">
          {/* RED GLOW RINGS – slightly smaller */}
          <div className="absolute inset-2 rounded-full border border-red-500/25 shadow-[0_0_40px_rgba(255,0,0,0.35)]" />
          <div className="absolute inset-12 rounded-full border border-red-500/15 shadow-[0_0_30px_rgba(255,0,0,0.25)]" />
          <div className="absolute inset-20 rounded-full border border-red-500/10 shadow-[0_0_20px_rgba(255,0,0,0.20)]" />

          {/* CORE */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="
              px-9 py-5 rounded-2xl
              bg-black/70 border border-red-400/60
              shadow-[0_0_45px_rgba(255,0,0,.7)]
            "
            >
              <span className="text-3xl font-bold tracking-wide">
                Securotix
              </span>
            </div>
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
                  w-28 h-28
                  rounded-2xl glass cyber-border
                  flex items-center justify-center
                  transition-all
                  hover:shadow-[0_0_30px_rgba(255,0,0,.6)]
                  hover:scale-[1.08]
                "
              >
                <img src={v.logo} className="max-h-14 opacity-90" />
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
