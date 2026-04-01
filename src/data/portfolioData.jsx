// ─────────────────────────────────────────────────────────────
//  portfolioData.js
//  Edit this file to customize your portfolio content.
//  No need to touch any component files.
// ─────────────────────────────────────────────────────────────

export const META = {
  
  name: "Joey Rocha-Perez",
  greeting: "Hello, I'm",
  location: "📍 San Francisco Bay Area",
  email: "jrochaperez123@gmail.com",
  phone: "510-479-6956",
  linkedin: {
    label: "Joey-Rocha",
    url: "https://www.linkedin.com/in/jrochaperez123/",
  },
  contactBlurb:
    "I'm always open to discussing new opportunities, Salesforce and Data challenges, or how we can collaborate on your next project.",
  footerCredit: "Joey Rocha",
};

export const HERO_TITLES = [
  "Salesforce Administrator",
  "Data Analyst",
  "Tableau Hero",
  "Salesforce Developer",
];

export const HERO_BADGES = ["Analytic Badass", "4+ Years SF", "3+ Tableau"];

export const ABOUT = {
  paragraphs: [
  <>
    A <strong>results-driven Salesforce Administrator and Data Professional</strong> with
    hands-on experience across the full data lifecycle — from management and
    governance to analysis and reporting.
  </>,
  <>
    Skilled across <strong>Sales Cloud, Service Cloud, NPSP, Pardot</strong>, with a
    proven ability to translate complex business requirements into clean,
    scalable Salesforce solutions. Proficient in{" "}
    <strong>Flows, process automation, and data integrity practices</strong>{" "}
    that keep organizations running efficiently from the ground up.
  </>,
  <>
    What sets me apart is the ability to bridge the gap between{" "}
    <strong>Salesforce administration and data work</strong> — not just
    configuring the platform, but understanding the data that flows through it.
    From pipeline hygiene to actionable insights, I bring an{" "}
    <strong>end-to-end perspective</strong> that most admins don't.
  </>,
],
  cards: [
    {
      icon: "🎯",
      label: "Current Role",
      value: "Salesforce Administrator",
    },
    { icon: "🌎", label: "Location", value: "San Francisco Bay Area, CA" },
  {
    icon: "🎓",
    label: "Education",
    value: (
      <>
        M.S. in Business Analytics, CSU Sacramento
        <br />
        B.Sc. in Management Information Technology, CSU East Bay
      </>
    ),
  },
    {
      icon: "🌐",
      label: "Languages",
      value: "English, Spanish",
    },
  ],
};

export const SKILLS = [
  {
    icon: "☁️",
    title: "Salesforce Applications",
    items: [
      "Sales Cloud",
      "Service Cloud",
      "Nonprofit Cloud",
      "NPSP",
      "Experience Cloud",
    ],
  },
  {
    icon: "⚡",
    title: "Salesforce Development",
    items: [
      "Record-Triggered Flows",
      "Scheduled Flows",
      "Process Automation",
      "Data Migration",
      "Integrations",
      "GAU Allocations",
    ],
  },
  {
    icon: "📊",
    title: "Data & Analytics",
    items: [
      "Tableau",
      "Salesforce Reports & Dashboards",
      "SQL / MySQL",
      "Python",
      "Logistic Regression",
      "Decision Trees",
    ],
  },
  {
    icon: "🛠",
    title: "Other Technologies",
    items: [
      "Java",
      "React JS",
      "HTML & CSS",
      "SQL",
      "Git",
      "AWS",
      "Jira",
      "SAP",
    ],
  },
  {
    icon: "🏆",
    title: "Certifications & Education",
    items: [
      "Administrator",
      "Tableau Data Analyst",
      "Google Project Management",
      "Google Data Analytics",
    ],
  },
];

export const EXPERIENCE = [
  {
    title: "Salesforce Administrator",
    company: "Bay Area Ridge Trail Council",
    period: "June 2024 - Present",
    location: "Berkley, CA",
    desc: "Salesforce Administrator responsible for fixing the General Accounting Units being assigned in salesforce to reflex accurately with our financial reports in addition to enhancing data collections in the organization and refining business processes.",
    bullets: [
      "Designed interactive dashboards and custom reports in Salesforce and Tableau, contributing to a 22% YoY increase in donation outreach effectiveness.",
      "Built scalable Flows to automate lead assignment and task creation, reducing manual data entry errors by 40% and improving lead response time by 25%.",
      "Maintained bi-directional data pipelines between Salesforce and internal systems, reducing duplicate records by 15% per quarter.",
      "Administered role-based access and permissions across Salesforce and Tableau, ensuring compliance with data privacy and governance standards.",
      "Built automated forecasting reports giving leadership real-time visibility into accounts receivable for strategic budget planning.",
    ],
    tags: ["Salesforce Administration", "Data Governance", "Tableau", "Process Automation"],
  },
  {
    title: "CRM/Salesforce Administrator",
    company: "Bayview Hunters Point Foundation",
    period: "Feb 2023 - Dec 2023",
    location: "San Francisco, CA",
    desc: "Responsible to implementing a new CRM Apricot to track programs metrics while maintaining other Systems such as Salesforce.",
    bullets: [
      "Built performance dashboards and custom reports with advanced filter logic to monitor program KPIs, fundraising benchmarks, and case outcomes.",
      "Gathered business requirements from stakeholders across programs and fundraising, translating them into technical documentation and SOPs.",
      "Cleaned and processed 20,000–150,000 donor and client records, improving data accuracy and automating mailing list generation.",
      "Created standardized SOPs and process documentation in Microsoft 365 with version control in SharePoint.",
    ],
    tags: ["Salesforce Administration", "Data Cleaning", "Reporting", "Documentation"],
  },
  {
    title: "Business Analyst",
    company: "CSU East Bay",
    period: "Aug 2022 - Feb 2023",
    location: "Hayward, CA",
    desc: "Responsible for generating reports, refining and enhancing Mysql quieries and refining campaigns and dollars given",
    bullets: [
        "Managed donor fundraising systems tracking over $50M in funds, ensuring data accuracy and integrity across reporting cycles.",
        "Built and maintained donation collection websites, improving the user-facing giving experience for alumni and community donors.",
        "Analyzed business processes across alumni, volunteer, and fundraising programs, identifying inefficiencies and recommending data-driven solutions.",
        "Generated recurring reports and refined MySQL queries to support leadership decision-making on campaign performance and donor engagement.",
        "Translated requirements from non-technical stakeholders into actionable system updates and documentation.",
      ],
      tags: ["Business Analysis", "MySQL", "Donor Management", "Fundraising Systems", "Web Development"],
    },
  {
    title: "Salesforce Instructor & Analyst",
    company: "ClimbHire",
    period: "Aug 2020 - Feb 2023",
    location: "",
    desc: "I have served both as a FTE and contract employee responsible for teaching new generations of salesforce proffessionals as well as produce my own analytices and metrice and present to CEO",
    bullets: [
      "Developed Salesforce NPSP training materials and onboarding guides, improving user proficiency and reducing data entry errors across teams.",
      "Built complex reports using row-level and aggregate formulas, and created dashboards to track fundraising KPIs.",
      "Led UAT and troubleshooting for new features, collaborating cross-functionally to improve data-driven tools for fundraising and engagement.",
      "Maintained Salesforce automations and integrations with Asana, Google Sheets, and Mailchimp, reducing manual updates and ensuring clean data flow.",
    ],
    tags: ["Salesforce NPSP", "Reporting", "Training", "Automation"],
  },

];

export const CERTIFICATIONS = {
  count: "Salesforce & Tableau Portfolio",
  items: [
    {
      icon: "📊",
      title: "Grants Pipeline & GAU Dashboard",
      issuer: "Salesforce NPSP · Tableau"
    },
    {
      icon: "💼",
      title: "Sales Performance Analytics App",
      issuer: "Sales Cloud · Tableau"
    },
    {
      icon: "🎓",
      title: "Scholarship Program Tracker",
      issuer: "NPSP · Service Cloud · Tableau"
    },
    {
      icon: "🎧",
      title: "Case Deflection & Support Ops Dashboard",
      issuer: "Service Cloud · Tableau"
    },
    {
      icon: "🎯",
      title: "Lead Scoring & Conversion Funnel Analysis",
      issuer: "Sales Cloud · Tableau"
    },
    {
      icon: "❤️",
      title: "Donor Retention & Major Gifts Intelligence",
      issuer: "NPSP · Tableau"
    },
  ],
};

export const NAV_LINKS = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Experience", href: "experience" },
  { label: "Certifications", href: "certifications" },
  { label: "Contact", href: "contact" },
];
