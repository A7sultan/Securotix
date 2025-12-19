import { PartnerLayout } from "../../components/partners/PartnerLayout";
import OneKosmosLogo from "@/assets/1kosmos.png";

const OneKosmos = () => {
  return (
    <PartnerLayout
      name="1Kosmos"
      logo={OneKosmosLogo}
      overview="A unified password less identity platform that provides verified digital identities, secure authentication, and zero-trust access using biometrics and decentralized identity."
      solutions={[
        "Identity Proofing & Verification (Biometrics, ID documents, liveness)",
        "Password less Workforce Login (FIDO2, desktop login, MFA)",
        "Customer Digital Onboarding (KYC, fraud prevention)",
        "Decentralized Identity Wallet (Blockchain-based, user-owned)",
        "Zero Trust Access (Continuous identity assurance)",
      ]}
      differentiators={[
        "NIST-certified high-assurance digital identity",
        "True password less for all systems (desktop, VPN, apps)",
        "Decentralized identity with no central credential store",
        "IAM + KYC in one platform",
        "Strong privacy & compliance (GDPR, PDPL, ISO)",
      ]}
    />
  );
};

export default OneKosmos;
