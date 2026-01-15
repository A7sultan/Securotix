export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export const navData: NavItem[] = [
  {
    label: "Corporate",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
    ],
  },
{
  label: "Vendors",
  children: [
    {
      label: "Identity & Access Security",
      href: "/vendors#identity-access-security-zero-trust-core",
    },
    {
      label: "Network & Infrastructure Control Layer",
      href: "/vendors#network-infrastructure-control-layer",
    },
    {
      label: "Vulnerability & Exposure Intelligence",
      href: "/vendors#vulnerability-exposure-intelligence",
    },
    {
      label: "Detection, Threat Hunting & AI Defense",
      href: "/vendors#detection-threat-hunting-ai-defense",
    },
  ],
},

  {
    label: "Services",
    children: [
      { label: "IT Consultancy", href: "/services/it-consultancy" },
      { label: "Professional Services", href: "/services/professional-services" },
      { label: "Cybersecurity Advisory and Training", children: [{ label: "VAPT Services", href: "/services/vapt-services" }, {label: "Web Application Security Testing", href: "/services/web-application-security-testing"}, {label: "Mobile Application Security Testing", href: "/services/mobile-application-security-testing"}, {label: "Network Penetration Testing", href: "/services/network-penetration-testing"}, {label: "Cloud Penetration Testing", href: "/services/cloud-penetration-testing"}, {label: "IoT Security testing", href: "/services/iot-security-testing"}, {label: "Secure Code Review", href: "/services/secure-code-review"}, {label: "Medical Device Security Testing", href: "/services/medical-device-security-testing"}] },
        { label: "Support Services", href: "/services/support-services" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
