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
  "Data Analyst",
  "Tableau Hero",
  "Salesforce Admin",
];

export const HERO_BADGES = ["Analytic Badass", "4+ Years SF", "3+ Tableau"];

export const ABOUT = {
  paragraphs: [
  <>
    A <strong>results-driven Salesforce Analyst and well rounded Data Professional</strong> with
    hands-on experience across the full data lifecycle — from data management and
    governance to analysis and reporting.
  </>,
  <>
    Skilled across <strong>Nonprofit Cloud, Sales Cloud, Service Cloud, NPSP</strong>, with a
    proven ability to translate complex business requirements into clean,
    scalable Salesforce solutions. Proficient in{" "}
    <strong>Flows, process automation, and data integrity practices</strong>{" "}
    that keep organizations and programs running efficiently from the ground up.
  </>,
  <>
    What sets me apart is the ability to bridge the gap between{" "}
    <strong> Analytics and data operations</strong> and translate that to tangible results for programs and fundraising teams. 
    From pipeline hygiene to actionable insights, I bring an{" "}
    <strong>end-to-end perspective</strong> that most admins and analysts don't.
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
    title: "Salesforce Automation Ops",
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
    title: "CRM Data Administrator",
    company: "Bayview Hunters Point Foundation",
    period: "Feb 2023 - Dec 2023",
    location: "San Francisco, CA",
    desc: "Responsible to implementing a new CRM Apricot to track programs metrics while maintaining other Systems such as Salesforce.",
    bullets: [
      "Conducted systems analysis using SQL and Excel on internal case management data to surface process inefficiencies, translating findings into actionable insights that improved client retention and program outcomes for an underserved community.",
      "Partnered with program managers, therapists, and leadership to gather requirements and translate them into data models and visualizations and reports enabling data-driven decisions in case management and service delivery.",
      "Built customized reports and dashboards tracking fundraising goals, program outcomes, and case management KPIs using advanced filter logic and aggregate reporting, ensuring accurate and timely delivery to internal and external stakeholders. The result was live touchpoint tracking from homeless shelters and visualizing the demographics of served individuals. In addition to incoming donations tracking. ",
      "Led modernization effort to enhance systems and processes by interviewing the end user collecting intake forms and program outcomes translating them into a spreadsheet to help model the data and relationships between departments and potential KPI indicators. ",
    ],
    tags: ["System Implementation", "Data Cleaning", "Reporting", "Documentation"],
  },

  {
    title: "Salesforce Instructor & Analyst",
    company: "ClimbHire",
    period: "Aug 2020 - Feb 2023",
    location: "",
    desc: "I have served both as a FTE and contract employee responsible for teaching new generations of salesforce proffessionals as well as manage my own program and produce my own analytices and metrics and present to CEO",
    bullets: [
      "Developed and delivered comprehensive training documentation to onboard new users and staff, emphasizing data fundamentals, processes, and Salesforce best practices, while also showcasing custom reporting techniques to enhance user proficiency and efficiency within the Salesforce ecosystem.",
      "Applied advanced knowledge of data modeling and reporting to create complex reports using row-level and aggregate formulas, and built dashboards with various visualizations to support decision-making and track key performance indicators (KPIs). This resulted in live feed of program metrics into a dashboard that management was able to see to correlate mentor touchpoints with student success.",
      "Conducted troubleshooting for new software by utilizing User Acceptance Testing (UAT) documents, collaborating with diverse internal users to identify bugs, enhance user documentation, and refine processes for improved software performance and user experience.",
      "Collaborated with internal and external IT teams to gather user feedback and design innovative solutions, focusing on adhering to best practices, and quality techniques to deliver superior support and strengthen the fundraising capabilities for the team.",
    ],
    tags: ["Salesforce", "Reporting", "Training", "Managing"],
  },

];

export const CERTIFICATIONS = {
  count: "Salesforce & Tableau Portfolio",
  items: [
    {
      icon: "📊",
      title: "Grants Pipeline & GAU Dashboard",
      issuer: "Salesforce · Tableau"
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
