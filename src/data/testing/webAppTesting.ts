export const webAppTestingData = {
  title: "Web Application Security Testing",

  overview: `Web application security testing is the process of simulating real-world hacker-style attacks on a web application to identify and analyze security weaknesses that could be exploited by attackers. As web applications play a critical role in modern businesses, they are an attractive target for cybercriminals. Proactive testing helps uncover vulnerabilities that could otherwise lead to data breaches, financial loss, reputational damage, or regulatory non-compliance.`,

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

  sections: [
    {
      id: "info-gathering",
      title: "Information Gathering",
      content: `Reconnaissance, or information gathering, is one of the most critical phases of a web application penetration test. This stage focuses on understanding the target application, its technologies, exposed endpoints, and potential attack surfaces. Testing activities include search engine reconnaissance to identify information leaks, application enumeration, technology fingerprinting, and discovering entry points that could be leveraged during further testing.`,
    },
    {
      id: "config-management",
      title: "Configuration Management",
      content: `Understanding the server and infrastructure configuration that hosts the web application is nearly as important as testing the application itself. Misconfigurations such as insecure HTTP methods, exposed backup or temporary files, improper file permissions, and weak transport security can place applications at significant risk. Testing includes TLS configuration, application platform settings, file extension handling, cross-site tracing, and validation of secure transport mechanisms.`,
    },
    {
      id: "auth-testing",
      title: "Authentication Testing",
      content: `Authentication testing evaluates how effectively an application verifies the identity of users. This includes analyzing login mechanisms, password policies, and session establishment processes. Common issues tested include weak or missing account lockout mechanisms, authentication bypass techniques, browser cache weaknesses, and inconsistent authentication enforcement across different application channels.`,
    },
    {
      id: "session-management",
      title: "Session Management",
      content: `Session management controls govern how user interactions are maintained throughout their engagement with a web application. This phase tests how sessions are created, maintained, and terminated. Common attack scenarios include session fixation, cross-site request forgery (CSRF), insecure cookie attributes, improper session timeouts, and flaws in logout functionality that could allow session reuse or hijacking.`,
    },
    {
      id: "authorization-testing",
      title: "Authorization Testing",
      content: `Authorization testing validates whether authenticated users are correctly restricted to their assigned roles and privileges. Once valid credentials are obtained, penetration testers attempt to access unauthorized resources or perform restricted actions. Common issues include insecure direct object references (IDOR), privilege escalation, and bypassing access control checks by manipulating parameters or requests.`,
    },
    {
      id: "data-validation",
      title: "Data Input Validation",
      content: `Insufficient input validation is one of the most common and dangerous vulnerabilities in web applications. This testing phase focuses on how the application processes user-supplied data before it is handled by backend systems. Weak validation can lead to vulnerabilities such as SQL injection, cross-site scripting (XSS), command injection, buffer overflows, Unicode manipulation, and file system attacks.`,
    },
    {
      id: "error-handling",
      title: "Testing for Error Handling",
      content: `During penetration testing, applications often expose error messages or stack traces that reveal sensitive implementation details. These errors may disclose database structures, server configurations, or internal logic. Testing involves deliberately triggering error conditions to analyze how exceptions are handled and ensuring that error responses do not leak sensitive technical or security-related information.`,
    },
    {
      id: "business-logic",
      title: "Testing for Business Logic",
      content: `Business logic vulnerabilities arise from flaws in an application’s intended workflow rather than technical implementation errors. These vulnerabilities require deep understanding of how the application is meant to function and often cannot be detected by automated scanners. Examples include bypassing integrity checks, manipulating process timing, uploading unexpected file types, and forging or replaying requests to abuse application logic.`,
    },
    {
      id: "client-side",
      title: "Client-Side Testing",
      content: `Client-side testing focuses on vulnerabilities that exist within code executed in the user’s browser, such as JavaScript. Since client-side code can be inspected and manipulated, testing evaluates risks related to client-side validation, URL redirection, cross-origin resource sharing (CORS), DOM-based attacks, and other browser-based security weaknesses.`,
    },
    {
      id: "dos",
      title: "Denial of Service",
      content: `Denial of Service (DoS) testing evaluates an application’s resilience against attacks designed to disrupt availability. These attacks aim to overwhelm application resources, preventing legitimate users from accessing services. Testing focuses on application-layer DoS scenarios that can be executed by a single attacker or system, such as resource exhaustion, logic abuse, or improper rate-limiting.`,
    },
    {
      id: "reporting",
      title: "Reporting",
      content: `Reporting is one of the most critical stages of the penetration testing process. Findings are documented, ranked, and prioritized based on risk and business impact. A clear and actionable report is delivered to stakeholders, detailing vulnerabilities, exploitation scenarios, and remediation guidance. We place strong emphasis on ensuring that results are communicated effectively to support informed security decisions.`,
    },
  ],
};
