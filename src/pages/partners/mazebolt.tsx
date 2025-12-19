import { PartnerLayout } from "@/components/partners/PartnerLayout";
import MazeBoltLogo from "@/assets/mazebolt.png";

const MazeBolt = () => {
  return (
    <PartnerLayout
      name="Maze Bolt"
      logo={MazeBoltLogo}
      overview="Maze Bolt provides proactive DDoS security through continuous attack surface testing and validation, helping organizations eliminate blind spots before real attacks happen."
      solutions={[
        "DDoS Testing & Simulation (non-disruptive)",
        "RADAR Attack Surface Management",
        "Continuous DDoS Gap Detection",
        "Mitigation Validation for all DDoS providers",
        "Actionable remediation guidance",
      ]}
      differentiators={[
        "Non-disruptive, always-on DDoS testing",
        "Identifies hidden vulnerabilities missed by SOC/tools",
        "Vendor-agnostic validation for any DDoS solution",
        "Proactive reduction of DDoS exposure",
        "High accuracy with automated remediation insights",
      ]}
    />
  );
};

export default MazeBolt;
