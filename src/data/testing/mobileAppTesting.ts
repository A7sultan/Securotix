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
      content: `The scope of the mobile application involves identifying the security measures that were employed, testing goals, and sensitive information. In essence, this step entails complete client synchronization, during which the client and the examiner come to an agreement to defend from legal actions.`,
    },
    {
      id: "intelligence",
      title: "Intelligence Gathering",
      content: `It is the process of acquiring information about threats to people, or organizations and using that information to defend them. In order to gain a general understanding of the application, this stage involves analyzing the application’s design and scope.`,
      cta: true,
    },
    {
      id: "mapping",
      title: "Application To Be Mapped",
      content: `The next phase is mapping the application, which involves manually and automatically scanning programmes to finish the previous stage. Maps can give testers a better knowledge of the programme under test, including entry points, data held, and other potential serious flaws.`,
      cta: true,
    },
    {
      id: "exploitation",
      title: "Exploitation",
      content: `It is the phase in which security testers get into an application by taking advantage of the flaws found in the earlier procedure. At this point, it is also necessary to identify real flaws and real strengths.`,
    },
    {
      id: "reporting",
      title: "Reporting",
      content: `The primary output of the reporting and analysis phase as well as the entire assessment process is the final evaluation report. A crucial stage for the customer is when security testers provide findings on applications’ weaknesses that are found and explain the negative consequences of those weaknesses.`,
    },
  ],
};
