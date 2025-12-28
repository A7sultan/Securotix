export const webAppTestingData = {
  title: "Web Application Security Testing",

  overview: `Web application security testing is the process of simulating real-world hacker-style attacks on a web application to identify and analyze security weaknesses that could be exploited by attackers. As web applications play a critical role in modern businesses, they are an attractive target for cybercriminals. Proactive testing helps uncover vulnerabilities that could otherwise lead to data breaches, financial loss, reputational damage, or regulatory non-compliance.`,

  /* -------------------------
     Methodology Section
  -------------------------- */
  methodology: {
    title: "Methodology",
    description: [
      `A comprehensive approach to performing penetration tests that not only identifies technical security vulnerabilities but also uncovers business logic flaws and systemic weaknesses.`,
      `Our methodology aligns with globally recognized standards such as OWASP Top 10, SANS 25, and OSSTMM, ensuring structured, repeatable, and effective testing.`,
      `Securotix delivers both on-premises and off-premises application security services using a proven roadmap built on years of experience across web, mobile, and cloud threat surfaces.`,
    ],
  },

  /* -------------------------
     Types of Testing (Page-Specific)
  -------------------------- */
  typesOfTesting: [
    {
      id: "black",
      label: "Black Box",
      content: `Black Box testing evaluates a web application without any prior knowledge of its internal code, architecture, or implementation details. The application is tested from an external attacker’s perspective, focusing entirely on inputs and outputs to identify exploitable vulnerabilities based on observed behavior.`,
    },
    {
      id: "grey",
      label: "Grey Box",
      content: `Grey Box testing combines elements of both Black Box and White Box testing. Testers possess partial knowledge of the application’s internal logic or architecture, allowing for deeper analysis of attack paths, authorization controls, and logic-based vulnerabilities.`,
    },
    {
      id: "white",
      label: "White Box",
      content: `White Box testing involves a thorough examination of the application’s internal structure, source code, logic, and architecture. This approach helps validate secure coding practices, identify hidden vulnerabilities, and improve overall application security, design, and maintainability.`,
    },
  ],

  /* -------------------------
     Side Navigation (Our Approach)
  -------------------------- */
  nav: [
    { id: "info-gathering", label: "Information Gathering" },
    { id: "config-management", label: "Configuration Management" },
    { id: "auth-testing", label: "Authentication Testing" },
    { id: "session-management", label: "Session Management" },
    { id: "authorization-testing", label: "Authorization Testing" },
    { id: "data-validation", label: "Data Input Validation" },
    { id: "error-handling", label: "Error Handling" },
    { id: "business-logic", label: "Business Logic Testing" },
    { id: "client-side", label: "Client-Side Testing" },
    { id: "dos", label: "Denial of Service" },
    { id: "reporting", label: "Reporting" },
  ],

  /* -------------------------
     Our Approach Content
  -------------------------- */
  sections: [
    {
      id: "info-gathering",
      title: "Information Gathering",
      content: `Reconnaissance, or information gathering, is one of the most critical phases of a web application penetration test. This stage focuses on understanding the target application, its technologies, exposed endpoints, and potential attack surfaces. Activities include search engine reconnaissance, application enumeration, technology fingerprinting, and identifying entry points for further testing.`,
    },
    {
      id: "config-management",
      title: "Configuration Management",
      content: `Configuration management testing evaluates the security posture of the server and infrastructure hosting the web application. Misconfigurations such as insecure HTTP methods, exposed backup files, improper permissions, and weak transport security can significantly increase risk. Testing covers TLS security, platform configuration, file handling, and secure transport enforcement.`,
    },
    {
      id: "auth-testing",
      title: "Authentication Testing",
      content: `Authentication testing assesses how effectively an application verifies user identities. This includes evaluating login workflows, password policies, session creation, and authentication enforcement. Common issues include weak lockout mechanisms, authentication bypasses, browser cache weaknesses, and inconsistent authentication controls.`,
    },
    {
      id: "session-management",
      title: "Session Management",
      content: `Session management testing focuses on how user sessions are created, maintained, and terminated. Test scenarios include session fixation, CSRF, insecure cookie attributes, improper session expiration, and flaws in logout mechanisms that may enable session hijacking or reuse.`,
    },
    {
      id: "authorization-testing",
      title: "Authorization Testing",
      content: `Authorization testing verifies that authenticated users are restricted to permitted roles and actions. After obtaining valid credentials, testers attempt to access unauthorized resources. Common vulnerabilities include IDOR, privilege escalation, and bypassing access controls through request manipulation.`,
    },
    {
      id: "data-validation",
      title: "Data Input Validation",
      content: `Data input validation testing identifies weaknesses in how applications handle user-supplied data. Insufficient validation can result in SQL injection, XSS, command injection, file inclusion, buffer overflows, and other critical vulnerabilities affecting application integrity and security.`,
    },
    {
      id: "error-handling",
      title: "Testing for Error Handling",
      content: `Error handling tests examine how applications respond to unexpected conditions. Improper error messages or stack traces may disclose sensitive information about databases, server configurations, or internal logic. Testing ensures errors are handled securely without leaking actionable data.`,
    },
    {
      id: "business-logic",
      title: "Testing for Business Logic",
      content: `Business logic testing identifies vulnerabilities arising from flawed workflows rather than technical defects. These issues often require manual analysis and cannot be detected by automated tools. Examples include bypassing process steps, abusing timing dependencies, and manipulating transaction flows.`,
    },
    {
      id: "client-side",
      title: "Client-Side Testing",
      content: `Client-side testing focuses on vulnerabilities in browser-executed code such as JavaScript. Since this code is exposed to users, testing evaluates risks related to DOM manipulation, client-side validation bypasses, insecure redirects, CORS misconfigurations, and other browser-based attacks.`,
    },
    {
      id: "dos",
      title: "Denial of Service",
      content: `Denial of Service testing assesses the application’s ability to withstand attacks that target availability. Testing focuses on application-layer DoS scenarios such as resource exhaustion, rate-limiting bypasses, and logic abuse that could disrupt services for legitimate users.`,
    },
    {
      id: "reporting",
      title: "Reporting",
      content: `Reporting is a critical phase where findings are analyzed, prioritized, and documented. A comprehensive report is delivered outlining vulnerabilities, exploitation impact, and remediation guidance. Clear communication ensures stakeholders can make informed decisions to strengthen security posture.`,
    },
  ],
};
