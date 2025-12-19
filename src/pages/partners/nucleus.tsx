import { PartnerLayout } from "@/components/partners/PartnerLayout";
import NucleusLogo from "@/assets/nucleus.png";

const Nucleus = () => {
  return (
    <PartnerLayout
      name="Nucleus"
      logo={NucleusLogo}
      overview="A unified Vulnerability Management Orchestration platform that centralizes, prioritizes, and automates vulnerability workflows across the entire security stack."
      solutions={[
        "Centralized Vulnerability Data Management (all scanners in one place)",
        "Risk-Based Prioritization",
        "Workflow Automation & Ticketing",
        "Asset Intelligence & Exposure Insights",
        "Integrations with scanners, SIEM, ITSM, cloud & CI/CD",
      ]}
      differentiators={[
        "Unifies all vulnerability sources into one single platform",
        "Massive automation reduces manual triage & false positives",
        "Risk-based remediation driven by threat intel & asset criticality",
        "Fast deployment with 150+ integrations",
        "Designed for enterprise-scale VM programs",
      ]}
    />
  );
};

export default Nucleus;
