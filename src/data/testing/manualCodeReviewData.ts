export const manualCodeReviewData = {
  title: "Medical Device Security Testing",

  overview:
    "Medical Device Penetration Testing identifies potential design weaknesses in the hardware, software, and communication techniques that could compromise the device’s security. It aids businesses in comprehending the security implications of their devices and how to raise their level of security maturity. A component of the security testing procedure for medical equipment involves looking at every possible software flaw. Modern security testing methods make it possible to analyze the online safety of medical and healthcare items with accuracy.",


  typesOfTesting: [
    {
      id: "Black Box",
      label: "Black Box",
      content:
        "Black Box testing is a type of software testing where no prior understanding of the underlying code structure, implementation details, or internal paths of an application is required. It is also sometimes referred to as behavioral testing or external testing. It concentrates on the input and output of the application and depends fully on the requirements and standards for the software.",
    },
      {
      id: "Grey Box",
      label: "Grey Box",
      content:
        "A software testing strategy called gray box testing, which mixes black box and white box testing, is used to test an application without having a complete grasp of its source code. It looks for and locates context-specific errors that the application’s shoddy coding has caused.",
    },
      {
      id: "White Box",
      label: "White Box",
      content:
        "In order to verify the input-output flow and enhance the application’s design, security, and utility, white box testing looks at the underlying structure, coding, and architecture of a piece of software. Because the testers can view the code, this kind of testing is also known as internal testing, Clear box testing, Open box testing, and Glass box testing.",
    },
  ],

  benefits: [
    "Cost Saving",
    "Adherence To Compliance",
    "Risk Management",
  ],

  nav: [
    { id: "information-gathering", label: "Information Gathering" },
    { id: "planning", label: "Planning" },
    { id: "vulnerability-detection", label: "Vulnerability Detection" },
    { id: "reporting", label: "Reporting" },
  ],

  sections: [
    {
      id: "information-gathering",
      title: "Information Gathering",
      content:
        "The information gathering phase of the medical security testing approach is crucial. Document reviews and team talks will make up the preparation. The goal is for us to become familiar with the product and create a strategy in advance. This enables us to make the most of our time on location.",
    },
    {
      id: "planning",
      title: "Planning",
      content:
        "The following stage necessitates careful planning and research after information has been gathered through various informational technologies or by manual browsing. Defining the goals of penetration testing serves as the starting point for planning. Then, in order to ensure that everyone involved has the same knowledge of and goals, the tester and client collaboratively establish the goals.",
    },
    {
      id: "vulnerability-detection",
      title: "Vulnerability Detection",
      content: "The cybersecurity assessment and penetration test against your equipment will be carried out at the client’s premises. Our testing will involve locating all points of entry into the system, including Ethernet (LAN), Fiber, WiFi, USB, Serial Port, HDMI, and other points (we’ll also look for others), as well as identifying the vulnerabilities related to each point of entry and carrying out initial and subsequent exploits of those vulnerabilities.",
    },
    {
      id: "reporting",
      title: "Reporting",
      content:
        "The goal of the reporting step is to present, rank, and prioritize findings as well as produce a concise, actionable report that includes all relevant supporting data for the project stakeholders. The most effective way to communicate results is through an in-person presentation of the findings. At Kratikal, we prioritize this stage and take great effort to ensure that we have effectively communicated the value of our service and findings. Upon completion,the report is delivered for evaluation via a web conference.",
    },
  ],
};
