export const mobileAppTestingData = {
  title: "Mobile Application Penetration Testing",

  overview: `The process of mobile application testing involves analysing applications for required levels of quality, functionality, compatibility, usability, and performance. Mobile devices are no longer just communication tools but part of a wider ecosystem including servers, data centers, network infrastructure, and mobile devices. VAPT for mobile applications is a critical step in reducing risks from fraud, malware infection, data leakage, and other security vulnerabilities.`,

  /* -------------------------
     Methodology
  -------------------------- */
  methodology: {
    title: "Methodology",
    description: [
      `Mobile application security testing is the technique of checking application code and characteristics for vulnerabilities.`,
      `This process combines static analysis, secure code review, and penetration testing to identify security weaknesses.`,
      `Due to the increasing sophistication of cyberattacks, organizations actively engage mobile security testing services to protect applications that simplify daily life.`,
    ],
  },

  /* -------------------------
     Types of Testing (ARRAY – REQUIRED)
  -------------------------- */
  typesOfTesting: [
    {
      id: "black",
      label: "Black Box",
      content: `Black Box testing, also known as behavioral or external testing, is performed without prior knowledge of internal code structure or routes. It focuses entirely on input-output behavior and application specifications.`,
    },
    {
      id: "grey",
      label: "Grey Box",
      content: `Grey Box testing combines elements of both black box and white box testing. Testers have partial knowledge of the application's internal structure and identify context-specific vulnerabilities caused by poor code design.`,
    },
  ],

  /* -------------------------
     Side Navigation (Our Approach)
  -------------------------- */
  nav: [
    { id: "scope", label: "Scope of Work" },
    { id: "intelligence", label: "Intelligence Gathering" },
    { id: "mapping", label: "Application To Be Mapped" },
    { id: "exploitation", label: "Exploitation" },
    { id: "reporting", label: "Reporting" },
  ],

  /* -------------------------
     Our Approach Sections
  -------------------------- */
  sections: [
    {
      id: "scope",
      title: "Scope of Work",
      content: `The scope of mobile application security testing involves identifying implemented security controls, testing objectives, and sensitive information. This stage ensures full synchronization between the client and examiner to avoid legal or compliance issues.`,
    },
    {
      id: "intelligence",
      title: "Intelligence Gathering",
      content: `This stage focuses on acquiring information about potential threats and application design. Testers analyze application architecture, workflows, and data handling to gain a comprehensive understanding of the attack surface.`,
      cta: true,
    },
    {
      id: "mapping",
      title: "Application To Be Mapped",
      content: `During this phase, applications are manually and automatically scanned to map entry points, data storage locations, and potential vulnerabilities. Mapping helps testers better understand application behavior and risk areas.`,
      cta: true,
    },
    {
      id: "exploitation",
      title: "Exploitation",
      content: `Exploitation involves actively leveraging identified vulnerabilities to determine real-world impact. Testers validate weaknesses and assess the severity of potential attacks.`,
    },
    {
      id: "reporting",
      title: "Reporting",
      content: `The reporting phase delivers a comprehensive assessment report detailing discovered vulnerabilities, risk rankings, and remediation recommendations. This is a critical phase for stakeholders to understand security posture.`,
    },
  ],
};
