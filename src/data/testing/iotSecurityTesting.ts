export const iotSecurityTestingData = {
  title: "IoT Security Testing",

  overview:
    "The protection techniques used to secure network-based or internet-connected devices are referred to as “IoT security.” IoT security is the area of technology concerned with defending the networks and linked devices in the internet of things (IoT). Internet connectivity is added to a network of connected computers, mechanical and digital machinery, items, animals, and/or humans. A key feature of an IoT device is its ability to connect to the internet and communicate with its surroundings by gathering and exchanging data.",

  methodology: {
    title: "Methodology",
    description: [
      "IoT security testing is crucial to ensure that your device is not involved in the major hack.",
      "The development of IoT applications includes a large amount of IoT security testing. The following are some of the most typical IoT security testing types:",
    ],
  },

  // MUST match TestingType[]
  typesOfTesting: [
    {
      id: "iot-penetration-testing",
      label: "IoT Penetration Testing",
      content:
        "In IoT penetration testing, a sort of IoT security testing methodology, security experts identify and take advantage of security flaws in IoT devices. The security of your IoT devices is checked in the real world with IoT penetration testing. Under this, specifically, we mean evaluating the complete IoT system, not just the device or the software.",
    },
    {
      id: "threat-modeling",
      label: "Threat Modeling",
      content: "Threat modeling is a systematic method for identifying and listing potential dangers, such as holes in defenses or a lack of them, and for prioritizing security mitigations. It seeks to give the defense force and security team an analysis of the security controls required based on the current information systems and threat environment, the most likely attacks, their methodology, and the target system.",
    },
    {
      id: "firmware-analysis",
      label: "Firmware Analysis",
      content: "Understanding that firmware is software, just like a computer programme or application, is among the most crucial concepts to grasp. The usage of firmware on embedded devices, which are tiny computers with specialized uses, is the only distinction. a smartphone, router, or even a heart monitor, as examples. The process of extracting and testing firmware for backdoors, buffer overflows, and other security flaws is known as firmware analysis.",
    },
  ],

  benefits: [
    "Cost Saving",
    "Adherence To Compliance",
    "Risk Management",
  ],

  // MUST match NavItem[]
  nav: [
    { id: "understanding-scope", label: "Understanding Scope" },
    { id: "attack-surface-mapping", label: "Attack surface mapping" },
    {
      id: "vulnerability-assessment",
      label: "Vulnerability Assessment and Exploitation",
    },
    { id: "documentation-reporting", label: "Documentation and Reporting" },
  ],

  sections: [
    {
      id: "understanding-scope",
      title: "Understanding Scope",
      content:
        "Pentesters must comprehend the size of the target. Constraints and limits make up the scope. The prerequisites for penetration testing differ from product to product. As a result, the tester must comprehend the scope and develop preparations in accordance with it in the initial step of an IoT pentest.",
    },
    {
      id: "attack-surface-mapping",
      title: "Attack surface mapping",
      content: "An IoT device’s attack surface is mapped out by the tester to show every point of entry that an attacker might use to access the system. In addition to identifying all potential entry points for an attacker, the attack surface mapping process also entails drawing a very thorough architecture diagram.",
    },
    {
      id: "vulnerability-assessment",
      title: "Vulnerability Assessment and Exploitation",
      content: "In this stage, the tester tries to break the IoT device by exploiting all the flaws discovered in earlier steps. Again, there are countless ways a hacker may take advantage of the target. Among them are: exploitation with I2C, SPI, and JTAG Reverse Engineering for Firmware Bug Fixing Sensitive values are hard-coded, etc.",
    },
    {
      id: "documentation-reporting",
      title: "Documentation and Reporting",
      content: "The tester must create a thorough, full report of all the technical and non-technical summary information in this step. The tester must also provide all the proof of concepts, demos, code snippets, and other materials that they used during the process. Sometimes after a bug has been fixed, the tester must reevaluate it.",
    },
  ],
};
