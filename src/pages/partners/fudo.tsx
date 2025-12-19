import { PartnerLayout } from "@/components/partners/PartnerLayout";
import FudoLogo from "@/assets/fudo.png";

const Fudo = () => {
  return (
    <PartnerLayout
      name="Fudo"
      logo={FudoLogo}
      overview="A next-generation Privileged Access Management (PAM) solution focused on secure remote access, session monitoring, and insider threat protection with powerful session recording and behaviour analytics."
      solutions={[
        "Privileged Access Management (vaulting, credential rotation)",
        "Secure Remote Access without VPN",
        "Live Session Monitoring & Full Video Recording",
        "Behaviour Analytics & Anomaly Detection",
        "Just-in-Time Access & Workflow Approvals",
        "Integrations with AD, ITSM, SIEM, Firewalls",
      ]}
      differentiators={[
        "Best-in-class session recording (keystrokes, screen, metadata)",
        "Real-time session takeover to stop threats instantly",
        "No VPN needed – lightweight, browser-based access",
        "Fast deployment, minimal infrastructure",
        "Strong insider threat detection via AI-based analytics",
        "User-friendly interface with quick adoption",
      ]}
    />
  );
};

export default Fudo;
