import { NavLink } from "@/components/navigation/NavLink";

// LOGOS
import logo1kosmos from "@/assets/1K-Wordmark-White.png";
import logoMiniOrange from "@/assets/Full Logo white@3x.png";
import logoTufin from "@/assets/tufin.png";
import logoFudo from "@/assets/fudo.png";
import logoNucleus from "@/assets/nucleus.png";
import logoMazeBolt from "@/assets/mazebolt.png";
import logoJizoAI from "@/assets/Jizô-AI-blanc-et-jaune-square-800-px.png";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type Vendor = {
  name: string;
  path: string;
  logo: string;
  title: string;
  subtext: string;
};

type VendorGroup = {
  heading: string;
  description: string;
  vendors: Vendor[];
};

const vendorGroups: VendorGroup[] = [
  {
    heading: "Identity & Access Security (Zero-Trust Core)",
    description:
      "Who is allowed in, and under what conditions. This layer establishes digital trust and identity assurance.",
    vendors: [
      {
        name: "1Kosmos",
        path: "/1Kosmos",
        logo: logo1kosmos,
        title: "Passwordless Identity Verification & Digital Trust",
        subtext:
          "Biometric-verified identity for zero-trust access, fraud prevention and secure onboarding.",
      },
      {
        name: "miniOrange",
        path: "/MiniOrange",
        logo: logoMiniOrange,
        title: "SSO, MFA & Zero-Trust Access",
        subtext:
          "Unified identity control across cloud, SaaS, VPNs and on-prem environments.",
      },
      {
        name: "FUDO Security",
        path: "/Fudo",
        logo: logoFudo,
        title: "Privileged Access Management & Session Monitoring",
        subtext:
          "Secure, monitor and record every administrative session without exposing credentials.",
      },
    ],
  },
  {
    heading: "Network & Infrastructure Control Layer",
    description:
      "What traffic is allowed to move inside your environment, across data centers and cloud.",
    vendors: [
      {
        name: "Tufin",
        path: "/Tufin",
        logo: logoTufin,
        title: "Security Policy Automation & Network Risk Control",
        subtext:
          "Orchestrate firewall, cloud and hybrid network security policies with compliance and visibility.",
      },
      {
        name: "MazeBolt",
        path: "/MazeBolt",
        logo: logoMazeBolt,
        title: "DDoS Risk Validation & Attack Surface Testing",
        subtext:
          "Safely simulate real-world attacks to uncover hidden exposure before attackers do.",
      },
    ],
  },
  {
    heading: "Vulnerability & Exposure Intelligence",
    description:
      "Where you are weak right now — and what attackers are most likely to exploit.",
    vendors: [
      {
        name: "Nucleus Security",
        path: "/Nucleus",
        logo: logoNucleus,
        title: "Vulnerability Intelligence & Risk-Based Prioritization",
        subtext:
          "Turn scanner data and exploit intelligence into clear, business-driven remediation decisions.",
      },
    ],
  },
  {
    heading: "Detection, Threat Hunting & AI Defense",
    description:
      "When attackers bypass defenses — detect, investigate and respond at machine speed.",
    vendors: [
      {
        name: "Jizō AI",
        path: "/JizoAI",
        logo: logoJizoAI,
        title: "AI-Driven Threat Detection & SOC Automation",
        subtext:
          "Continuously detect, investigate and respond to threats using artificial intelligence.",
      },
    ],
  },
];

const Vendors = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const target = document.querySelector(hash);
    if (!target) return;

    const yOffset = -140;
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: Math.max(y, 0),
      behavior: "smooth",
    });
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-36 pb-28 container mx-auto px-6 max-w-7xl">
        {/* PAGE TITLE */}
        <div className="text-center mb-24">
          <h1 className="text-5xl font-bold mb-4">Vendors</h1>
          <div className="fancy-line mx-auto w-[220px]" />
        </div>

        {/* VENDOR GROUPS */}
        <div className="space-y-28">
          {vendorGroups.map((group, gi) => (
            <section
              key={gi}
              id={group.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
            >
              <div className="mb-12 max-w-3xl">
                <h2 className="text-3xl font-bold mb-3">{group.heading}</h2>
                <div className="fancy-line w-38 mb-6" />
                <p className="text-muted-foreground text-lg">
                  {group.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {group.vendors.map((vendor) => (
                  <NavLink
                    key={vendor.name}
                    to={vendor.path}
                    className="
                      group
                      p-8
                      rounded-2xl
                      glass cyber-border
                      hover-glow
                      transition-all
                      flex flex-col
                    "
                  >
                    <img
                      src={vendor.logo}
                      alt={vendor.name}
                      className="max-h-20 object-contain mb-6"
                    />

                    <h3 className="text-lg font-semibold mb-2">
                      {vendor.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {vendor.subtext}
                    </p>
                  </NavLink>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* fancy line style */}
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
