import { VendorLayout } from "../../components/partners/VendorLayout";
import MiniOrangeLogo from "@/assets/miniorange.png";

const MiniOrange = () => {
  return (
    <VendorLayout
      name="Mini Orange"
      logo={MiniOrangeLogo}
      overview="A flexible Identity & Access Management (IAM) platform providing Single Sign-On, MFA, Zero Trust security, and privileged access for cloud, on-prem, and hybrid environments."
      solutions={[
        "Single Sign-On (SSO) for cloud & on-prem apps",
        "Multi-Factor Authentication (MFA) with 15+ authenticators",
        "Identity Governance & Administration (IGA)",
        "Privileged Access Management (PAM)",
        "Access Control & Adaptive Policies",
        "Directory Services & User Lifecycle Management",
      ]}
      differentiators={[
        "Cost-effective IAM & PAM in one platform",
        "Wide integration support (4,500+ apps)",
        "Highly customizable authentication workflows",
        "Supports legacy & modern systems (SAML, OIDC, RADIUS, LDAP)",
        "Fast deployment with minimal complexity",
        "Strong value proposition for SMEs and enterprises",
      ]}
    />
  );
};

export default MiniOrange;
