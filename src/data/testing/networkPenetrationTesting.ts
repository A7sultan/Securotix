export const networkPenetrationTestingData = {
  title: "Network Penetration Testing",

  overview:
    "A network vulnerability assessment and penetration test, or network VAPT, is a technical security assessment that goes beyond the usual port scanning and vulnerability enumeration to pinpoint security risks and their business ramifications on your network, whether it be wireless, internal, or external. Network Security testing is a crucial procedure that helps identify security flaws, network weaknesses, and threats that could damage any organization’s networks, website servers, and other applications if they are attacked by hackers. It’s a crucial step in determining how secure your network is by simulating attacks to gain unauthorized access to the target network thereby assessing the current state network security.",

  methodology: {
    title: "Overview : Network Penetration Testing",
    description: [
      "A network vulnerability assessment and penetration test, or network VAPT, is a technical security assessment that goes beyond the usual port scanning and vulnerability enumeration to pinpoint security risks and their business ramifications on your network, whether it be wireless, internal, or external.",
      "Network Security testing is a crucial procedure that helps identify security flaws, network weaknesses, and threats that could damage any organization’s networks, website servers, and other applications if they are attacked by hackers.",
      "It’s a crucial step in determining how secure your network is by simulating attacks to gain unauthorized access to the target network thereby assessing the current state network security.",
    ],
  },

  typesOfTesting: [
    {
      id: "black-box",
      label: "Black Box",
      content:
        "Black Box, often referred to as behavioral testing or external testing, is a form of software testing technique wherein no prior knowledge of the internal code structure, implementation specifics, or internal routes of an application is necessary. It focuses on the application’s input and output and is entirely dependent on the specifications and requirements for the software.",
    },
    {
      id: "grey-box",
      label: "Grey Box",
      content:
        "Gray box testing, which combines black box and white box testing, is a software testing approach used to test an application while only having a general understanding of its core code. It searches for and identifies context-specific faults that the application’s poor code structure has produced.",
    },
    {
      id: "white-box",
      label: "White Box",
      content:
        "White Box testing examines a software’s underlying structure, coding, and architecture in order to validate the input-output flow and improve the application’s design, security, and utility. Internal testing, Clear box testing, Open box testing, and Glass box testing are other names for this sort of testing because the testers can see the code.",
    },
  ],

  benefits: [
    "Cost Saving",
    "Adherence To Compliance",
    "Risk Management",
  ],

  // MUST match NavItem[]
  nav: [
    { id: "define-scope", label: "Define Scope" },
    { id: "information-gathering", label: "Information Gathering" },
    { id: "identifying-and-inspect", label: "Identifying and Inspect" },
    { id: "attack-and-penetration", label: "Attack and Penetration" },
    { id: "reporting", label: "Reporting" },
  ],

  // MUST match section.id values above
  sections: [
    {
      id: "define-scope",
      title: "Define Scope",
      content:
        "The client’s scope must be clearly defined before an application assessment can be conducted. At this point, open dialogue between the company and the client is recommended in order to build a secure platform upon which to conduct assessments.",
    },
    {
      id: "information-gathering",
      title: "Information Gathering",
      content: "At this step, a variety of OSINT (Open Source Intelligence) tools is used and tactics to gather as much data as they can on the target. The gathered data will help us comprehend how the relationship functions, which will enable us to precisely assess the risk as the engagement develops.",
    },
    {
      id: "identifying-and-inspect",
      title: "Identifying and Inspect",
      content: "At this point, we combine computerized resources and tools with various data collection methods to create more advanced data. Any potential attack vectors are carefully examined by our experts. In the following step, the acquired data from this stage will serve as the foundation for its application.",
    },
    {
      id: "attack-and-penetration",
      title: "Attack and Penetration",
      content: "To uncover all potential attack paths and vulnerabilities, we launch both a manual and an automated security scan in this step. In order to assess the application’s security, we then execute exploits against it. For a high degree of penetration, we employ several techniques, open-source scripts, and internal tools. To secure your application and its data, all of these are carefully carried out.",
    },
    {
      id: "reporting",
      title: "Reporting",
      content: "This is the last step in the entire assessment procedure. This stage involves gathering all acquired data, analyzing it, and providing the client with a complete, comprehensive breakdown of our results. A comprehensive analysis of all the hazards will be included in the full report, and the final report will also list all the application’s strengths and shortcomings.",
    },
  ],
};
