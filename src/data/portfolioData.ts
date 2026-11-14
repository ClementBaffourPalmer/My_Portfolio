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
  linkedin: "https://www.linkedin.com/in/kwesi-baffour-598ba83a9/",
  cvPath: "/documents/Clement_Palmer_CV.pdf",
  profileImage: "/images/clement-palmer-profile.jpg",
  headshotImage: "/images/clement-palmer-headshot.jpg"
};

export const typewriterRoles = [
  "Full-Stack Developer",
  "Software Engineer",
  "Backend Developer",
  "Cybersecurity Enthusiast",
  "Ethical Hacking Explorer"
];

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
    id: "python-voice-recorder",
    title: "Python Voice Recorder",
    category: "Python Application / Desktop Utility",
    tagline: "Desktop Audio Recording & Signal Capture Utility",
    description: "A desktop voice recording utility engineered in Python for capturing, processing, and exporting microphone audio inputs with low latency and clean fidelity.",
    longDescription: "Developed as an independent software utility in Python, this application allows users to interface directly with local audio hardware, capture vocal streams, monitor recording states, and save structured WAV and MP3 audio files to local storage with robust error handling.",
    technologies: ["Python", "Audio Processing", "Wave Format", "Desktop Utility"],
    featured: false,
    badge: "Python Desktop Utility",
    codeAvailableOnRequest: true,
    image: "/images/projects/Voice-recorder-image.png",
    architecture: {
      overview: "Desktop audio buffer pipeline implementing multi-threaded audio chunk streaming and binary serialization.",
      frontend: "Lightweight graphical user interface with real-time recording timer and state triggers.",
      backend: "Python audio capture routines managing input buffer streams and device polling.",
      database: "Local file system directory management with automated timestamped naming conventions.",
      security: "Safe file I/O operations with path sanitization preventing directory traversal."
    },
    challenges: [
      "Managing buffer memory allocation to prevent audio clipping during long-session recordings.",
      "Abstracting audio driver differences between different operating system hardware setups."
    ],
    highlights: [
      "High-fidelity microphone input capture and buffer sampling.",
      "Direct-to-disk formatted audio export.",
      "Simple, distraction-free desktop user interface.",
      "Zero external internet requirement; runs 100% locally on device."
    ]
  },
  {
    id: "py-expense-tracker",
    title: "Py Expense Tracker",
    category: "Python / Console-Based Application",
    tagline: "Command-Line Personal Finance & Daily Expense Manager",
    description: "A fully console-based personal expense tracking application developed using Python to help users record, categorize, and monitor daily financial transactions via the terminal.",
    longDescription: "A command-line software tool built in Python focused on practical data handling and personal expense tracking. The program allows users to record daily expenditures, assign spending categories, generate chronological ledgers, and compute aggregated summaries directly through an interactive CLI.",
    technologies: ["Python", "CLI Interface", "Data Persistence", "Financial Modeling"],
    featured: false,
    badge: "Console Application",
    codeAvailableOnRequest: true,
    image: "/images/projects/project-3.png",
    architecture: {
      overview: "Modular CLI architecture separating argument parsing, ledger data management, and tabular summary reports.",
      frontend: "Terminal-based interactive CLI with ANSI formatting and clean tabular text presentation.",
      backend: "Python business logic executing calculation routines, balance updates, and categorical breakdowns.",
      database: "Persistent structured file storage ensuring transactional record retention across terminal sessions.",
      security: "Robust input sanitization preventing command injection and data corruption."
    },
    challenges: [
      "Validating decimal transaction amounts and robust parsing of chronological date inputs in an interactive command-line environment.",
      "Generating readable, aligned tabular summaries directly in the terminal without external UI frameworks."
    ],
    highlights: [
      "Interactive CLI commands for logging, viewing, and categorizing expenses.",
      "Daily, weekly, and monthly spending summaries.",
      "Persistent file-based data storage ensuring records survive restarts.",
      "Zero external dependencies; completely self-contained Python script."
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
    role: "ICT Educator — Teaching Practice",
    organization: "Palisade Academy",
    location: "Ghana",
    period: "Approx. 6 Months",
    type: "teaching",
    summary: "Led ICT instruction, curriculum delivery, and technical mentorship for secondary-level students, bridging foundational computing concepts with practical digital literacy.",
    responsibilities: [
      "Structured and delivered learner-centred lesson modules covering computer architecture, productivity software, and introductory computational logic.",
      "Mentored students through hands-on technical problem-solving exercises, cultivating analytical and algorithmic thinking.",
      "Demystified complex technological concepts into accessible, actionable mental models for non-technical learners.",
      "Managed academic laboratory equipment and guided students in responsible digital ethics and cybersecurity awareness."
    ],
    skillsGained: ["Technical Communication", "Instructional Design", "Mentorship", "Problem Solving", "Digital Literacy"]
  },
  {
    id: "aim-high-academy",
    role: "ICT Educator",
    organization: "Aim High Academy",
    location: "Ghana",
    period: "Previous Teaching Experience",
    type: "teaching",
    summary: "Conducted ICT instruction and digital literacy training, fostering practical technological skills and computational confidence among learners.",
    responsibilities: [
      "Delivered structured lessons in computer literacy, information technology fundamentals, and software applications.",
      "Engaged students in interactive technology sessions emphasizing technical problem-solving and foundational digital skills.",
      "Communicated core computing principles clearly to support learner development across diverse academic levels."
    ],
    skillsGained: ["Technical Instruction", "Digital Literacy", "Learner Development", "Classroom Communication"]
  },
  {
    id: "transformation-intl-school",
    role: "ICT & Technical Educator",
    organization: "Transformation International School",
    location: "Ghana",
    period: "Previous Teaching Experience",
    type: "teaching",
    summary: "Delivered ICT and technical coursework, guiding students in understanding technology concepts, problem-solving, and practical computer applications.",
    responsibilities: [
      "Taught ICT curriculum and related technical subjects with an emphasis on hands-on application and analytical understanding.",
      "Guided learners through technology coursework and problem-solving exercises.",
      "Fostered a positive, disciplined learning environment centered on technological curiosity and digital responsibility."
    ],
    skillsGained: ["Curriculum Delivery", "Technical Mentoring", "Problem Solving", "Student Engagement"]
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

export interface PersonalInterest {
  category: string;
  title: string;
  iconName: 'Music' | 'Activity' | 'ShieldAlert';
  description: string;
  tags: string[];
}

export const personalInterests: PersonalInterest[] = [
  {
    category: "Music & Artistry",
    title: "Musician, Drummer & Vocalist",
    iconName: "Music",
    description: "Music is a foundational part of my personal life. As a multi-talented instrumentalist, active drummer, and vocalist, musical rhythm has trained my sense of timing, patience, and creative expression.",
    tags: ["Drumming", "Singing", "Multi-Instrumentalist", "Rhythm & Harmony"]
  },
  {
    category: "Athletics & Fitness",
    title: "Athletics & Physical Training",
    iconName: "Activity",
    description: "I enjoy athletics and active sporting pursuits. Physical conditioning instills discipline, mental clarity, and resilience—qualities that directly reinforce stamina during complex technical debugging and software architecture sprints.",
    tags: ["Athletics", "Physical Discipline", "Endurance", "Mental Focus"]
  },
  {
    category: "Cybersecurity Exploration",
    title: "Ethical Hacking & Penetration Testing",
    iconName: "ShieldAlert",
    description: "What began as an insatiable childhood curiosity about how networks function has matured into an active exploration of ethical hacking, vulnerability research, and defensive software hardening.",
    tags: ["Network Security", "Vulnerability Research", "Ethical Hacking", "Exploration"]
  }
];
