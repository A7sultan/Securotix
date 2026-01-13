import { VendorLayout } from "@/components/partners/VendorLayout";
import JizoAILogo from "@/assets/jizoai.png";

const JizoAI = () => {
  return (
    <VendorLayout
      name="Jizo AI"
      logo={JizoAILogo}
      overview="AI-powered Network Detection & Response (NDR) platform for real-time threat detection across IT, OT, cloud, and hybrid networks."
      solutions={[
        "Real-time network threat detection & monitoring",
        "AI-based anomaly detection & threat intelligence",
        "Full visibility across IT & OT networks",
        "Threat deception and automated alerting",
      ]}
      differentiators={[
        "AI-first detection for zero-day & unknown threats",
        "Supports OT & critical infrastructure networks",
        "Actionable alerts with clear threat context",
        "Proactive, explainable, and enterprise-ready",
      ]}
    />
  );
};

export default JizoAI;
