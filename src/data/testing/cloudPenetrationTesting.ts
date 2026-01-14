export const cloudPenetrationTestingData = {
  title: "Cloud Penetration Testing",

  overview:
    "This assessment’s goals are to evaluate your cloud-based environment’s cyber security posture using simulated attacks and to find and use weaknesses in your cloud security services. Our cloud security testing methodology prioritize the most vulnerable areas of your cloud Application and recommend actionable solutions. The results of the cloud Security Testing will be used by the organization, to enhance the security feature of organization. The principal examples include Amazon Web Services(AWS), Microsoft Azure, Google Cloud Platform, and others. A concept of shared accountability is necessary for cloud penetration testing.",

  methodology: {
    title: "Methodology",
    description: [
      "Examining attack, breach, operability, and recovery issues inside a cloud environment is the goal of cloud security testing.",
      "Our Cloud Testing Methodology is based upon Best Practices and uses both automated cloud security testing tools and manual techniques to identify security vulnerabilities that may threaten the security integrity of your cloud platform such as configurations flaws, excess builds etc.",
      "There are various kinds of cloud penetration testing, such as:",
      "Attack simulating a situation where the cloud penetration testers are unfamiliar with your cloud systems and do not have access to them.",
    ],
  },

  // MUST match TestingType[]
  typesOfTesting: [
    {
      id: "black-box",
      label: "Black Box",
      content:
        "Attack simulating a situation where the cloud penetration testers are unfamiliar with your cloud systems and do not have access to them.",
    },
    {
      id: "grey-box",
      label: "Grey Box",
      content: "Cloud penetration testers may be given some restricted administrative rights and have some limited user and system expertise.",
    },
    {
      id: "white-box",
      label: "White Box",
      content: "Access to cloud systems at the admin or root level is granted to cloud penetration testers.",
    },
  ],

  benefits: [
    "Cost Saving",
    "Adherence To Compliance",
    "Risk Management",
  ],

  // MUST match NavItem[]
  nav: [
    { id: "understand-policies", label: "Understand the Policies" },
    { id: "plan-penetration", label: "Plan for Cloud Penetration" },
    { id: "select-tools", label: "Select Cloud Penetration Tools" },
    { id: "response-analysis", label: "Response Analysis" },
    { id: "eliminate-vulnerabilities", label: "Eliminate the Vulnerabilities" },
  ],

  sections: [
    {
      id: "understand-policies",
      title: "Understand the Policies",
      content:
        "Each cloud service provider has a pentesting policy that outlines the services and testing methods that are allowed and not allowed. To begin, we must confirm which cloud services are utilized in the customer’s environment and which services can be put to the test by cloud pentesters.",
    },
    {
  id: "plan-penetration",
  title: "Plan for Cloud Penetration",
  content: [
    "In order to establish the start and finish dates of the pentest, our first priority is to get in touch with the customer.",
    "Pentesters require time to understand the system after receiving the information, so they can examine it – look into its source code, software versions, potential access points to see if any keys have been released.",
  ],
}
,
    {
      id: "select-tools",
      title: "Select Cloud Penetration Tools",
      content: "Tools for cloud pentesting should resemble a real attack. Numerous hackers employ automated techniques to identify security holes, such as constantly attempting to guess passwords or searching for APIs that give them direct access to the data.",
    },
    {
      id: "response-analysis",
      title: "Response Analysis",
      content: "Cloud security would be useless without assessing the results and answers. We must assess the results after using the automated tools and running manual testing. Documentation of each response is required. One of the steps involves the use of our knowledge and experience with the cloud.",
    },
    {
      id: "eliminate-vulnerabilities",
      title: "Eliminate the Vulnerabilities",
      content: "The cloud security methodology ends with this stage. The severity and effect of vulnerabilities should be reviewed and looked into with the cloud pentesting team once all cloud tests and inspections have been completed. A final report on cloud vulnerabilities should be created with suggestions and fixes.",
    },
  ],
};
