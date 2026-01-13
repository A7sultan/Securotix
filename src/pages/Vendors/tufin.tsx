import { VendorLayout } from "@/components/partners/VendorLayout";
import TufinLogo from "@/assets/tufin.png";

const Tufin = () => {
  return (
    <VendorLayout
      name="Tufin"
      logo={TufinLogo}
      overview="A leading network security policy management (NSPM) platform that automates and centralizes firewall, network segmentation, and security policy control across hybrid and multi-cloud environments."
      solutions={[
        "Network Security Policy Management",
        "Automated Firewall Rule Analysis & Cleanup",
        "Zero-Trust Segmentation & Access Control",
        "Change Automation & Compliance Enforcement",
        "Multi-cloud Security Management (AWS, Azure, GCP)",
        "Risk & Exposure Visibility across the network",
      ]}
      differentiators={[
        "End-to-end visibility across on-prem, cloud, and SDN",
        "Automated rule lifecycle (design → validate → deploy)",
        "Built-in compliance (PCI, NERC, GDPR, internal standards)",
        "Drastic reduction in change time & human errors",
        "Deep integration with firewalls & network vendors (Fortinet, Palo Alto, Check Point, Cisco, etc.)",
      ]}
    />
  );
};

export default Tufin;
