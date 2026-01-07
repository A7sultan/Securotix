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

export default function VendorsGrid() {
  return (
    <section className="pt-36 pb-28">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          Our Vendors
        </h1>

        <div className="fancy-line mx-auto w-[200px]" />

        <p className="mt-5 text-muted-foreground text-lg max-w-3xl mx-auto">
          Trusted global cybersecurity innovators delivering secure, resilient, and scalable technology.
        </p>
      </div>

      {/* GRID */}
      <div className="container mx-auto px-6">
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            gap-10
          "
        >
          {vendors.map(v => (
            <NavLink
              key={v.name}
              to={v.path}
              className="
                group
                block
                rounded-2xl
                glass
                cyber-border
                hover-glow
                p-8
                h-40
                flex
                items-center
                justify-center
                hover:-translate-y-1
                transition-all
              "
            >
              <img
                src={v.logo}
                alt={v.name}
                loading="lazy"
                className="
                  max-h-16
                  w-auto
                  object-contain
                  opacity-80
                  group-hover:opacity-100
                  transition
                "
              />
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
