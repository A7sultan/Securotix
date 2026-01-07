import { useState } from "react";
import { NavLink } from "@/components/navigation/NavLink";

// LOGOS
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
  category: string;
  tagline: string;
};

const vendors: Vendor[] = [
  { name: "1Kosmos", path: "/1Kosmos", logo: logo1kosmos, category: "Identity", tagline: "Passwordless Identity Proofing" },
  { name: "MiniOrange", path: "/MiniOrange", logo: logoMiniOrange, category: "Identity", tagline: "SSO • MFA • Zero Trust" },
  { name: "Tufin", path: "/Tufin", logo: logoTufin, category: "Network", tagline: "Security Policy Automation" },
  { name: "Fudo", path: "/Fudo", logo: logoFudo, category: "Privileged Access", tagline: "Privileged Session Control" },
  { name: "Nucleus", path: "/Nucleus", logo: logoNucleus, category: "Threat", tagline: "Vulnerability Intelligence" },
  { name: "Maze Bolt", path: "/MazeBolt", logo: logoMazeBolt, category: "Threat", tagline: "DDoS Risk Validation" },
  { name: "Jizo AI", path: "/JizoAI", logo: logoJizoAI, category: "Threat", tagline: "AI-Driven Threat Analysis" },
];

// Filter Chips
const filters = ["All", "Identity", "Network", "Privileged Access", "Threat"];

export default function VendorsGallery() {

  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? vendors
    : vendors.filter(v => v.category === activeFilter);

  return (
    <section className="pt-36 pb-28">

      {/* PAGE HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          Our Vendors
        </h1>

        <div className="fancy-line mx-auto w-[200px]" />

        <p className="mt-5 text-muted-foreground text-lg">
          Partnering with the world’s leading cybersecurity innovators
        </p>
      </div>

      {/* FILTER CHIPS */}
      <div className="flex flex-wrap justify-center gap-4 mb-14">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`
              px-5 py-2 rounded-full border 
              transition-all text-sm font-medium
              ${activeFilter === f 
                ? "border-red-500 text-white shadow-[0_0_15px_rgba(255,0,0,.5)]" 
                : "border-white/20 text-muted-foreground hover:border-red-500 hover:text-white"
              }
            `}
          >
            {f}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="container mx-auto px-6">
        <div className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          gap-10
        ">
          {filtered.map(v => (
            <NavLink
              key={v.name}
              to={v.path}
              className="
                group
                block
                p-6
                rounded-2xl
                glass
                cyber-border
                hover-glow
                transition-all
                flex flex-col items-center text-center
                hover:-translate-y-1
              "
            >
              <img
                src={v.logo}
                alt={v.name}
                className="
                  max-h-16
                  object-contain
                  mb-4
                  opacity-80
                  group-hover:opacity-100
                  transition
                "
              />

              <div className="font-semibold">{v.name}</div>

              <div className="text-xs text-muted-foreground mt-1">
                {v.tagline}
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      {/* underline style */}
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
          box-shadow: 0 0 12px rgba(255,0,0,0.5);
        }
      `}</style>
    </section>
  );
}
