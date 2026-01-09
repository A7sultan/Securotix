import { NavLink } from "@/components/navigation/NavLink";

// LOGO IMPORTS
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
  description?: string;
};

const vendors: Vendor[] = [
  { name: "1Kosmos", path: "/1Kosmos", logo: logo1kosmos, description: "Identity Proofing & Passwordless IAM" },
  { name: "Mini Orange", path: "/MiniOrange", logo: logoMiniOrange, description: "SSO • MFA • Zero Trust" },
  { name: "Tufin", path: "/Tufin", logo: logoTufin, description: "Security Policy Automation" },
  { name: "Fudo", path: "/Fudo", logo: logoFudo, description: "Privileged Access & Session Monitoring" },
  { name: "Nucleus", path: "/Nucleus", logo: logoNucleus, description: "Vulnerability Intelligence Platform" },
  { name: "Maze Bolt", path: "/MazeBolt", logo: logoMazeBolt, description: "DDOS Risk Validation" },
  { name: "Jizo AI", path: "/JizoAI", logo: logoJizoAI, description: "AI-Driven Threat Detection" },
];

const Vendors = () => {
  return (
    <div className="min-h-screen bg-background">

      <main className="pt-36 pb-24 container mx-auto px-4">

        {/* PAGE TITLE */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-4">
            Our Vendors
          </h1>

          <div className="fancy-line mx-auto w-[200px]" />
        </div>

        {/* VENDOR GRID */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            gap-12
          "
        >
          {vendors.map(vendor => (
            <NavLink
              key={vendor.name}
              to={vendor.path}
              className="
                group
                text-center
                flex flex-col items-center
                p-8
                rounded-2xl
                glass cyber-border
                hover-glow
                transition-all
              "
            >
              <img
                src={vendor.logo}
                alt={vendor.name}
                className="
                  max-h-20
                  md:max-h-24
                  object-contain
                  opacity-90
                  group-hover:opacity-100
                  transition
                "
              />

              {vendor.description && (
                <p className="mt-5 text-sm text-muted-foreground leading-snug">
                  {vendor.description}
                </p>
              )}
            </NavLink>
          ))}
        </div>
      </main>

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
    </div>
  );
};

export default Vendors;
