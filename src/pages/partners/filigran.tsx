import { PartnerLayout } from "@/components/partners/PartnerLayout";
import FiligranLogo from "@/assets/filigran.png";

const Filigran = () => {
  return (
    <PartnerLayout
      name="Filigran"
      logo={FiligranLogo}
      overview="An open-source Extended Threat Management (XTM) platform that helps organizations proactively analyse threats, simulate attacks, and reduce cyber risk."
      solutions={[
        "Threat Intelligence Platform (centralized threat data & analytics)",
        "Attack Simulation & Exposure Validation",
        "Continuous Exposure Management",
        "Open-source ecosystem & integrations",
      ]}
      differentiators={[
        "Proactive threat-driven security",
        "Open-source, highly customizable",
        "Full lifecycle: intel → simulate → remediate",
        "Fast deployment & strong community support",
      ]}
    />
  );
};

export default Filigran;
