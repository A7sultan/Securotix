export const secureCodeReviewData = {
  title: "Secure Code Review",

  overview:
    "A secure code review is a specialized procedure that entails manually and/or automatically examining the source code of an application to find weaknesses in the design, discover unsafe coding techniques, find backdoors, injection flaws, cross-site scripting problems, weak cryptography, etc. The goal of secure code review is to improve the code’s security and uncover any flaws before they may cause any harm. Insecure code that could potentially result in a vulnerability at a later stage of the software development process and ultimately result in an insecure application is found through a procedure called secure code review.",

  methodology: {
    title: "Methodology",
    description: [
      "The secure coding review process is divided into two different techniques –",
    ],
  },

  // MUST match TestingType[]
  typesOfTesting: [
    {
      id: "automated-tool-based",
      label: "Automated Tool Based",
      content:
        "This method employs a variety of open source/commercial tools for the secure code review. The majority of the time, developers utilize them while they are developing, however security analysts may also use them. When the safe SDLC process is implemented within the business and the developers are given the ability to undertake a “self-code” review while they are working, the tool is highly helpful for code review. Additionally, the tools are helpful for examining huge codebases (millions of lines).",
    },
    {
      id: "manual-tool-based",
      label: "Manual Tool Based",
      content: "This method involves performing a full code review on the entire code, which may be a highly time-consuming and difficult task. But throughout this procedure, logical errors such as business logic issues could be found that are impossible to find with automated techniques.",
    },
  ],

  benefits: [
    "Cost Saving",
    "Adherence To Compliance",
    "Risk Management",
  ],

  // MUST match NavItem[]
  nav: [
    { id: "reconnaissance", label: "Reconnaissance" },
    { id: "threat-assessment", label: "Threat Assessment" },
    { id: "automation", label: "Automation" },
    { id: "manual-code-review", label: "Manual Code Review" },
    { id: "confirmation", label: "Confirmation" },
    { id: "reporting", label: "Reporting" },
  ],

  sections: [
    {
      id: "reconnaissance",
      title: "Reconnaissance",
      content: "To offer the review team an understanding of how the programme is supposed to operate, a look at the real operating application is absolutely necessary. The review team can begin going with a quick rundown of the database’s structure and any libraries that are being used.",
    },
    {
      id: "threat-assessment",
      title: "Threat Assessment",
      content: "Carrying out a threat analysis to comprehend the architecture of the application. These threats need to be prioritized among the vulnerabilities during the code review. The organization’s essential applications must be identified, and a threat assessment must be done for that group of applications.",
    },
    {
      id: "automation",
      title: "Automation",
      content: "Code review is carried out during automation using a variety of paid/free technologies. Automated technologies are frequently used to analyze huge code bases with millions of lines of code, speeding up the code review process. They are capable of locating all the unsafe code packets in the database, which the developer or any security expert can then examine.",
    },
    {
      id: "manual-code-review",
      title: "Manual Code Review",
      content: "In order to verify access control, encryption, data protection, logging, and back-end system connections and usage, manual code review is the only method available. A manual inspection is crucial for tracking an application’s attack surface and figuring out how data moves through an application from sources to sinks. Although going line by line through the code is expensive, it improves code readability and also aids in reducing false positives.",
    },
    {
      id: "confirmation",
      title: "Confirmation",
      content: "Following the completion of the automated and manual reviews, we thoroughly verify any risks that may have been identified as well as any potential remedies for any known codebase vulnerabilities.",
    },
    {
      id: "reporting",
      title: "Reporting",
      content:
        "To offer the review team an understanding of how the programme is supposed to operate, a look at the real operating application is absolutely necessary. The review team can begin going with a quick rundown of the database’s structure and any libraries that are being used.",
    },
  ],
};
