import { Project, SkillCategory, ExperienceItem, EducationItem, SecurityArea } from '../types';

export const personalInfo = {
  fullName: "Clement Kwesi Baffour Palmer",
  displayName: "Clement Palmer",
  title: "Full-Stack Developer | Software Engineer | Aspiring Cybersecurity Specialist",
  headline: "Building Digital Products. Engineering Practical Solutions.",
  intro: "I'm Clement Palmer, a full-stack developer passionate about building scalable web applications, engineering practical solutions and exploring the intersection of software development and cybersecurity.",
  aboutBio: [
    "I am Clement Kwesi Baffour Palmer, a software developer and ICT educator holding a Bachelor of Science in Information and Communication Technology Education from the University of Education, Winneba (UEW), Ghana.",
    "My engineering focus centers on building reliable full-stack applications with clean architectural patterns, robust backend APIs, and accessible frontend interfaces. With deep hands-on experience across Python, Django, React, TypeScript, and relational databases, I build practical software systems that resolve tangible real-world workflows.",
    "Beyond general software development, I actively invest in secure software engineering and cybersecurity principles — prioritizing defensible API designs, OWASP security standards, and resilient system boundaries. My background in technical education has further shaped my capacity to articulate complex systems, mentor learners, and collaborate with precision across engineering teams."
  ],
  status: "Available for Software Engineering Opportunities",
  email: "clementpalmer84@gmail.com",
  phone: "+233 240441107",
  location: "Accra, Ghana",
  github: "https://github.com/ClementBaffourPalmer",
  linkedin: "https://www.linkedin.com/in/clement-palmer-867679219",
  cvPath: "/documents/Clement_Palmer_CV.pdf",
  profileImage: "/images/clement-palmer-profile.jpg",
  headshotImage: "/images/clement-palmer-headshot.jpg"
};

export const projectsData: Project[] = [
  {
    id: "servora",
    title: "Servora",
    category: "Full-stack Web Application",
    tagline: "Multi-Service Marketplace & Booking Platform",
    description: "A full-scale service booking platform enabling verified service providers to publish offerings and customers to discover, schedule, and pay for services through structured workflows.",
    longDescription: "Servora is an enterprise-grade service marketplace designed to streamline service discovery and end-to-end booking workflows. The platform features role-based access for service providers and clients, automated slot availability calculation, token-authenticated REST endpoints, and integrated payment processing.",
    technologies: ["Python", "Django", "Django REST Framework", "MySQL", "JavaScript", "Bootstrap", "Payment APIs"],
    featured: true,
    badge: "Flagship Project",
    githubUrl: "https://github.com/ClementBaffourPalmer/Servora-",
    image: "/images/projects/project-2.png",
    architecture: {
      overview: "Modular monolithic Django architecture decoupled into discrete domain apps: accounts, services, bookings, and external API gateways.",
      frontend: "Responsive Bootstrap and vanilla JavaScript interface communicating via asynchronous fetch requests and structured JSON endpoints.",
      backend: "Django 5 paired with Django REST Framework (DRF), featuring custom permission classes, token authentication, and transaction-safe booking reservations.",
      database: "Relational schema designed for MySQL with normalized tables for providers, services, time slots, bookings, and audit records.",
      security: "Strict CSRF protection, secure cookie flags, input validation serializers, role-based access control (RBAC), and parameterized SQL operations."
    },
    challenges: [
      "Preventing double-booking race conditions during simultaneous slot selections by implementing atomic database transactions.",
      "Structuring a clean REST API layer that supports both web-based UI views and external API consumers seamlessly.",
      "Integrating payment verification callbacks with asynchronous booking status transitions."
    ],
    highlights: [
      "Complete provider dashboard with real-time schedule management.",
      "Customer booking portal with dynamic filtering by service category.",
      "Full REST API documentation ready for third-party client integrations.",
      "Payment integration with verified transaction reconciliation."
    ]
  },
  {
    id: "stepease",
    title: "StepEase",
    category: "Accessible Application",
    tagline: "Low-Stimulation Daily Task & Workflow Platform",
    description: "A daily task management application intentionally engineered with accessible ergonomics, sensory-friendly palettes, and low-stimulation user experience principles.",
    longDescription: "StepEase tackles cognitive overload in productivity tools. Built for users who need focused, uncluttered task organization, StepEase implements fluid drag-and-drop workflows, keyboard-accessible interaction targets, and calm contrast ratios that reduce visual fatigue.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "@dnd-kit", "Axios"],
    featured: true,
    badge: "Accessibility Focused",
    githubUrl: "https://github.com/ClementBaffourPalmer",
    image: "/images/projects/Todo-img.png",
    architecture: {
      overview: "Single Page Application (SPA) structured around strict accessibility standards (WCAG 2.1 AA) and fluid local-first state handling.",
      frontend: "React 18 with TypeScript strict typing, styled with Tailwind CSS, utilizing Framer Motion for non-jarring micro-transitions and @dnd-kit for accessible drag-and-drop.",
      backend: "Modular API client with resilient local storage synchronization and REST endpoint connectors.",
      database: "IndexedDB / local storage client cache paired with relational backend persistence.",
      security: "Client-side XSS sanitization on task markdown, zero tracking scripts, and privacy-first local data retention."
    },
    challenges: [
      "Architecting drag-and-drop reordering with full keyboard accessibility and screen reader live-region announcements.",
      "Maintaining high accessibility contrast scores across both dark and light modes while adhering to a soothing, low-stimulation color system.",
      "Managing responsive touch targets on mobile viewports without cluttering the screen."
    ],
    highlights: [
      "Sensory-friendly UI engineered to minimize cognitive fatigue.",
      "Fluid drag-and-drop task prioritization powered by @dnd-kit.",
      "Full keyboard navigation and ARIA-compliant milestone tracking.",
      "Offline-first state synchronization ensuring zero data loss."
    ]
  },
  {
    id: "smartlibrary-tracker",
    title: "SmartLibrary Tracker",
    category: "Academic Software Project",
    tagline: "Biometric Facial-Recognition Attendance System",
    description: "An automated library attendance and access system leveraging computer vision to identify enrolled students and record real-time entry and exit timestamps.",
    longDescription: "Engineered in the context of Clement's ICT studies at the University of Education, Winneba (UEW), SmartLibrary Tracker replaces manual sign-in sheets with automated facial verification at library gates. The platform enrolls student face vectors, monitors live camera feeds, and intelligently manages entry/exit toggles with debounce algorithms.",
    technologies: ["Django 5", "Django REST Framework", "OpenCV", "face_recognition", "React", "TypeScript", "Vite", "Tailwind CSS", "SQLite/MySQL"],
    featured: true,
    badge: "Computer Vision & AI",
    githubUrl: "https://github.com/ClementBaffourPalmer",
    image: "/images/projects/project-1.png",
    architecture: {
      overview: "Hybrid computer vision pipeline and web application with dedicated REST APIs for facial enrollment, live stream verification, and attendance reporting.",
      frontend: "React 19 SPA built with TypeScript, Vite, and Tailwind CSS, featuring live attendance feeds and analytics charts.",
      backend: "Django 5 REST Framework serving JWT-authenticated endpoints and coordinating background face vector calculations.",
      database: "Relational schema storing student credentials, 128-dimensional facial embedding vectors, and timestamped entry/exit logs.",
      security: "Debounce rate-limiting preventing duplicate registrations within 15 seconds; segregated storage of biometric embedding arrays."
    },
    challenges: [
      "Optimizing face encoding extraction on standard camera inputs without requiring expensive GPU compute clusters.",
      "Implementing stateful entry-to-exit toggles that correctly distinguish return visits on the same calendar day.",
      "Safeguarding biometric feature representations in compliance with educational data privacy considerations."
    ],
    highlights: [
      "Automated entry vs exit detection based on daily chronological detection states.",
      "15-second debounce window preventing frame-by-frame duplicate attendance records.",
      "Admin dashboard with occupancy statistics, daily traffic logs, and CSV export capabilities.",
      "Graceful logging of unrecognized visitors without interrupting gate surveillance."
    ]
  },
  {
    id: "palisade-elms",
    title: "Palisade e-LMS",
    category: "Educational Platform",
    tagline: "Academic Management & Learning Portal",
    description: "An enterprise educational management portal developed in connection with teaching practice at Palisade Academy to manage courses, attendance, and student performance.",
    longDescription: "Developed using ASP.NET Core and Entity Framework Core, Palisade e-LMS provides a centralized platform for teachers and administrators to manage class rosters, distribute digital learning resources, track attendance, and record evaluation grades.",
    technologies: ["ASP.NET Core", "C#", "Entity Framework Core", "SQL Server", "MVC Architecture", "Bootstrap"],
    featured: false,
    badge: "Enterprise .NET",
    githubUrl: "https://github.com/ClementBaffourPalmer",
    image: "/images/projects/project-3.png",
    architecture: {
      overview: "Model-View-Controller (MVC) architecture utilizing ASP.NET Core with Entity Framework Core code-first migrations.",
      frontend: "Server-rendered Razor views with responsive Bootstrap grid components.",
      backend: "C# ASP.NET Core backend with dependency injection, repository pattern, and role-based controllers.",
      database: "Normalized SQL database with foreign key constraints between courses, instructors, students, and submissions.",
      security: "ASP.NET Core Identity with password hashing, anti-forgery request verification, and strict role authorization."
    },
    challenges: [
      "Designing a flexible grading rubric model capable of handling diverse academic assessment criteria.",
      "Enforcing strict data boundary separation so students can only access their own academic records and coursework."
    ],
    highlights: [
      "Role-based access for Administrators, Teachers, and Students.",
      "Course syllabus distribution and digital assignment submission.",
      "Automated grade calculation and student attendance tracking."
    ]
  }
];

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used for backend logic, systems development, and dynamic frontend applications.",
    iconName: "Code2",
    skills: [
      { name: "Python", context: "Django, DRF, Scripting, Automation" },
      { name: "JavaScript", context: "ES6+, Async, DOM, Modern Web APIs" },
      { name: "TypeScript", context: "Type Safety, Interfaces, Generics" },
      { name: "C++", context: "Systems Fundamentals, Memory Concepts" },
      { name: "Java", context: "OOP Architecture, Data Structures" },
      { name: "PHP", context: "Server Scripting, Web Fundamentals" }
    ]
  },
  {
    title: "Frontend Development",
    description: "Architecting responsive, high-performance user interfaces and accessible component hierarchies.",
    iconName: "Layout",
    skills: [
      { name: "React", context: "Hooks, Component Architecture, State" },
      { name: "TypeScript", context: "Strict Frontend Typing, Props" },
      { name: "HTML5", context: "Semantic Markup, Accessibility (a11y)" },
      { name: "CSS3", context: "Flexbox, CSS Grid, Transitions" },
      { name: "Tailwind CSS", context: "Design Systems, Utility-First" }
    ]
  },
  {
    title: "Backend Development",
    description: "Engineering scalable server architectures, secure APIs, and transactional business logic.",
    iconName: "Server",
    skills: [
      { name: "Django", context: "Model Architecture, ORM, Auth" },
      { name: "Django REST Framework", context: "Serializers, ViewSets, Token Auth" },
      { name: "ASP.NET Core", context: "C#, MVC, Entity Framework" },
      { name: "REST APIs", context: "API Design, HTTP Status, JSON" },
      { name: "CRUD Operations", context: "Transactional Integrity, Verification" }
    ]
  },
  {
    title: "Databases & Storage",
    description: "Relational database modeling, query optimization, and structured persistence.",
    iconName: "Database",
    skills: [
      { name: "MySQL", context: "Relational Modeling, Foreign Keys, Indexes" },
      { name: "PostgreSQL", context: "ACID Transactions, Production Schemas" },
      { name: "SQLite", context: "Lightweight Persistence, Local Dev" },
      { name: "Relational Design", context: "Normalization, Entity Relationships" }
    ]
  },
  {
    title: "Development Tools & Ecosystem",
    description: "Modern engineering workflows, version control, and API testing tools.",
    iconName: "Wrench",
    skills: [
      { name: "Git", context: "Branching, Merging, Version Control" },
      { name: "GitHub", context: "Repositories, Code Reviews, Collaboration" },
      { name: "Swagger / OpenAPI", context: "API Specification & Documentation" },
      { name: "Visual Studio Code", context: "Primary Development IDE" },
      { name: "Cursor", context: "AI-Augmented Engineering Workflows" }
    ]
  }
];

export const cybersecurityFocus: SecurityArea[] = [
  {
    title: "Web Application Security",
    subtitle: "OWASP Top 10 Mitigation",
    icon: "ShieldAlert",
    description: "Proactive engineering against prevalent web application vulnerabilities including SQL Injection, Cross-Site Scripting (XSS), and Cross-Site Request Forgery (CSRF).",
    focusPoints: [
      "Strict input sanitization, type validation, and serialized schemas.",
      "Anti-CSRF tokens and SameSite cookie policies across all session states.",
      "Parameterized SQL queries via modern ORM mechanisms to preclude injection vectors."
    ]
  },
  {
    title: "Secure API Architecture",
    subtitle: "Authentication & Authorization",
    icon: "KeyRound",
    description: "Designing defensible REST endpoints with least-privilege access rules, secure token handling, and robust request throttling.",
    focusPoints: [
      "Token-based authentication patterns (JWT, Bearer token verification).",
      "Granular role-based access control (RBAC) across sensitive resources.",
      "Rate-limiting and request throttling to prevent brute-force attacks."
    ]
  },
  {
    title: "Defensive Engineering & Hardening",
    subtitle: "System Resilience",
    icon: "Lock",
    description: "Applying defense-in-depth principles to application architectures, environment configurations, and network communication.",
    focusPoints: [
      "Implementation of security headers (CSP, HSTS, X-Frame-Options).",
      "Safe storage of sensitive environment secrets and credentials.",
      "Audit logging and error handling that prevents system information leakage."
    ]
  },
  {
    title: "Vulnerability Assessment",
    subtitle: "Ethical Testing Methodology",
    icon: "SearchCode",
    description: "Developing systematic testing workflows to identify software flaws and misconfigurations prior to production deployment.",
    focusPoints: [
      "Static code analysis and dependency vulnerability auditing.",
      "Endpoint reconnaissance and parameter boundary testing.",
      "Continuous study of modern exploit techniques and remediation strategies."
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "palisade-academy",
    role: "ICT Educator (Teaching Practice)",
    organization: "Palisade Academy",
    location: "Ghana",
    period: "Approx. 6 Months",
    type: "teaching",
    summary: "Led ICT instruction, curriculum delivery, and technical mentorship for secondary-level students, bridging foundational computing concepts with practical digital literacy.",
    responsibilities: [
      "Structured and delivered comprehensive lesson modules covering computer architecture, productivity software, and introductory programming logic.",
      "Mentored students through hands-on technical problem-solving exercises, cultivating analytical and algorithmic thinking.",
      "Demystified complex technological concepts into accessible, actionable mental models for non-technical learners.",
      "Managed academic laboratory equipment and guided students in responsible digital ethics and cybersecurity awareness."
    ],
    skillsGained: ["Technical Communication", "Instructional Design", "Mentorship", "Problem Solving", "Digital Literacy"]
  },
  {
    id: "independent-engineering",
    role: "Independent Software Engineer & Developer",
    organization: "Personal & Academic Projects",
    location: "Ghana",
    period: "Ongoing",
    type: "engineering",
    summary: "Architecting, implementing, and deploying end-to-end full-stack applications, REST APIs, and database-driven digital solutions.",
    responsibilities: [
      "Architected full-stack web applications including Servora (Django marketplace), StepEase (accessible React SPA), and SmartLibrary Tracker.",
      "Engineered clean RESTful APIs utilizing Django REST Framework and ASP.NET Core with strict validation schemas and token authentication.",
      "Modeled relational database schemas in MySQL, PostgreSQL, and SQLite with referential integrity and normalization.",
      "Implemented accessibility-first frontend interfaces with React, TypeScript, and modern styling libraries."
    ],
    skillsGained: ["Full-Stack Architecture", "API Design", "Database Modeling", "Clean Code Practices", "Secure Software Development"]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Science in Information and Communication Technology Education",
    institution: "University of Education, Winneba (UEW)",
    location: "Winneba, Ghana",
    period: "Completed",
    description: "Rigorous academic program synthesizing core computer science, software development, data structures, network systems, and technical pedagogy.",
    coursework: [
      "Data Structures & Algorithms",
      "Database Design & Management Systems",
      "Computer Networks & Data Communication",
      "Object-Oriented Programming (Java, C++)",
      "Web Technologies & Systems Architecture",
      "Educational Technology & Technical Pedagogy"
    ]
  }
];
