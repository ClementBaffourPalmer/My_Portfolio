import { Project, SkillCategory, ExperienceItem, EducationItem } from '../types';

export const personalInfo = {
  fullName: "Clement Kwesi Baffour Palmer",
  displayName: "Clement Palmer",
  title: "Full-Stack Developer | Software Engineer | Cybersecurity Enthusiast",
  headline: "Full-Stack Developer & Software Engineer",
  intro: "I'm a full-stack developer interested in building practical software solutions and exploring how technology can solve real-world problems. My interests include backend development, software engineering and cybersecurity.",
  aboutBio: [
    "I am a software developer with a Bachelor of Science in Information and Communication Technology Education from the University of Education, Winneba (UEW), Ghana. My journey into software development began with a fascination for computing systems and has evolved into engineering practical full-stack web applications that solve tangible real-world problems.",
    "My technical work centers on backend development, scalable REST APIs, and relational databases using Python, Django, and React. Alongside full-stack engineering, I have a growing focus on cybersecurity and ethical hacking—prioritizing defensible application architecture, secure authentication, and resilient software boundaries."
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
  "Cybersecurity Enthusiast"
];

export const projectsData: Project[] = [
  {
    id: "servora",
    title: "Servora",
    category: "Full-Stack Platform",
    tagline: "Service Booking & Management Platform",
    description: "An end-to-end service marketplace enabling verified providers to publish offerings and customers to discover, schedule, and pay for services with automated slot reservations and secure REST APIs.",
    longDescription: "Servora is a modular service marketplace engineered with Django and Django REST Framework. It features role-based access for providers and clients, automated slot reservation transactions to prevent double-booking, and payment verification gateways.",
    technologies: ["Python", "Django", "Django REST Framework", "MySQL", "JavaScript", "REST APIs"],
    featured: true,
    githubUrl: "https://github.com/ClementBaffourPalmer/Servora-",
    image: "/images/projects/project-2.png",
    architecture: {
      overview: "Modular monolithic Django architecture with dedicated domain apps for authentication, service catalogs, slot scheduling, and payment callbacks.",
      frontend: "Responsive Bootstrap and modern JavaScript interface communicating with token-authenticated REST endpoints.",
      backend: "Django 5 REST Framework featuring custom permissions, atomic transactions, and automated slot reservation logic.",
      database: "Normalized MySQL schema with referential constraints between providers, offerings, schedules, and booking records.",
      security: "Anti-CSRF protection, input validation serializers, role-based authorization (RBAC), and parameterized queries."
    },
    challenges: [
      "Preventing double-booking race conditions during concurrent slot selections using atomic database transactions.",
      "Structuring a clean REST API layer supporting both web clients and external consumers."
    ],
    highlights: [
      "Provider schedule and catalog management dashboard.",
      "Customer discovery portal with real-time slot filtering.",
      "Token-authenticated REST endpoints with payment gateway reconciliation."
    ]
  },
  {
    id: "stepease",
    title: "StepEase",
    category: "Web Application",
    tagline: "Accessible Task & Workflow Platform",
    description: "A daily task management application engineered with accessible ergonomics, sensory-friendly palettes, and low-stimulation principles to eliminate cognitive overload.",
    longDescription: "StepEase is a productivity application focused on digital accessibility (WCAG AA). It implements fluid drag-and-drop task prioritization, keyboard navigation, calm color contrast, and offline-first state synchronization.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "@dnd-kit", "Axios"],
    featured: true,
    githubUrl: "https://github.com/ClementBaffourPalmer",
    image: "/images/projects/Todo-img.png",
    architecture: {
      overview: "Single Page Application (SPA) built around strict WCAG accessibility guidelines and resilient client-side state.",
      frontend: "React with TypeScript strict typing, styled with Tailwind CSS, utilizing @dnd-kit for accessible drag-and-drop.",
      backend: "Modular API client with local persistence and REST synchronization.",
      database: "Client-side indexed cache paired with relational backend persistence.",
      security: "Client-side XSS sanitization on task markdown and privacy-first local data retention."
    },
    challenges: [
      "Building keyboard-accessible drag-and-drop reordering with live-region screen reader announcements.",
      "Maintaining high contrast compliance while preserving a soothing, low-stimulation color system."
    ],
    highlights: [
      "Sensory-friendly interface designed to minimize cognitive fatigue.",
      "Keyboard-accessible task prioritization powered by @dnd-kit.",
      "Offline-first state synchronization ensuring zero data loss."
    ]
  },
  {
    id: "smartlibrary-tracker",
    title: "SmartLibrary Tracker",
    category: "Computer Vision & Web",
    tagline: "Biometric Library Attendance System",
    description: "An automated library access system leveraging computer vision to identify enrolled students, record real-time entry and exit timestamps, and replace manual paper logs.",
    longDescription: "Developed at the University of Education, Winneba (UEW), SmartLibrary Tracker automates library gate monitoring. The platform enrolls student face vectors, monitors live camera feeds, and intelligently manages entry/exit toggles with debounce algorithms.",
    technologies: ["Django", "OpenCV", "React", "TypeScript", "Python", "MySQL"],
    featured: true,
    githubUrl: "https://github.com/ClementBaffourPalmer",
    image: "/images/projects/project-1.png",
    architecture: {
      overview: "Computer vision pipeline integrated with a Django REST backend and React analytics interface.",
      frontend: "React SPA with TypeScript featuring live attendance monitoring feeds and reporting metrics.",
      backend: "Django REST Framework coordinating facial enrollment, stream processing, and attendance logging.",
      database: "Relational schema storing student credentials, 128-dimensional facial embedding vectors, and access timestamps.",
      security: "15-second debounce filters preventing duplicate registrations; segregated biometric data storage."
    },
    challenges: [
      "Extracting facial encodings on standard camera feeds without dedicated GPU hardware.",
      "Managing entry-to-exit state transitions for return visits within the same calendar day."
    ],
    highlights: [
      "Automated entry vs. exit state detection based on daily chronological check-ins.",
      "Debounce filtering preventing duplicate registrations within a 15-second window.",
      "Administrative dashboard with occupancy statistics and attendance export."
    ]
  },
  {
    id: "python-utilities",
    title: "Python Utilities",
    category: "Desktop & CLI Tools",
    tagline: "Voice Recorder & Terminal Expense Tracker",
    description: "A compact suite of practical Python tools: a desktop voice recording utility for capturing and exporting microphone audio, and a console-based expense tracker for personal finance ledgers.",
    longDescription: "A collection of practical Python applications demonstrating system audio capture and CLI data handling. The Voice Recorder captures microphone buffers directly to disk in formatted audio with zero latency. The Py Expense Tracker is an interactive command-line application that records daily expenditures, calculates category totals, and maintains persistent financial logs.",
    technologies: ["Python", "Audio Processing", "CLI", "File Persistence", "OOP"],
    featured: true,
    codeAvailableOnRequest: true,
    image: "/images/projects/Voice-recorder-image.png",
    architecture: {
      overview: "Modular Python applications focused on local system I/O, device hardware interfaces, and terminal interactive workflows.",
      frontend: "Lightweight Tkinter desktop interface for audio capture; interactive ANSI terminal CLI for financial ledger operations.",
      backend: "Python audio buffer streaming routines and ledger calculation business logic.",
      database: "Local filesystem storage with structured serialization (WAV/MP3 audio and persistent ledger records).",
      security: "Strict file path sanitization preventing directory traversal during file read/write operations."
    },
    challenges: [
      "Managing memory buffer allocation during extended audio recording sessions.",
      "Validating numeric currency entries and parsing chronological dates in an interactive CLI."
    ],
    highlights: [
      "Desktop Voice Recorder with real-time timer and direct-to-disk audio export.",
      "Terminal Expense Tracker with daily, weekly, and monthly spending calculations.",
      "Completely self-contained; zero unnecessary third-party dependencies."
    ]
  }
];

export const skillsData: SkillCategory[] = [
  {
    title: "Programming",
    description: "Core languages for backend architecture and systems development.",
    iconName: "Code2",
    skills: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "C++" },
      { name: "Java" },
      { name: "PHP" }
    ]
  },
  {
    title: "Frontend",
    description: "Building responsive, accessible user interfaces and modern components.",
    iconName: "Layout",
    skills: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "HTML" },
      { name: "CSS" }
    ]
  },
  {
    title: "Backend",
    description: "Scalable server architectures, transactional logic, and secure APIs.",
    iconName: "Server",
    skills: [
      { name: "Django" },
      { name: "Django REST Framework" },
      { name: "ASP.NET" },
      { name: "REST APIs" }
    ]
  },
  {
    title: "Databases",
    description: "Relational data modeling, schema normalization, and storage.",
    iconName: "Database",
    skills: [
      { name: "MySQL" },
      { name: "PostgreSQL" }
    ]
  },
  {
    title: "Tools",
    description: "Modern engineering tooling, version control, and API testing.",
    iconName: "Wrench",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Swagger" }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "independent-engineering",
    role: "Independent Software Engineer",
    organization: "Personal & Academic Projects",
    location: "Ghana",
    period: "2024 – Present",
    type: "engineering",
    summary: "Architecting and implementing full-stack web applications, REST APIs, and database-driven digital solutions including Servora, StepEase, and SmartLibrary Tracker.",
    responsibilities: [],
    skillsGained: ["Full-Stack Architecture", "Python & Django", "React & TypeScript", "REST APIs", "Relational Databases"]
  },
  {
    id: "palisade-academy",
    role: "ICT Educator — Teaching Practice",
    organization: "Palisade Academy",
    location: "Ghana",
    period: "Approx. 6 Months",
    type: "teaching",
    summary: "Led ICT instruction and technical curriculum delivery for secondary students, teaching foundational computational logic, computer architecture, and digital literacy.",
    responsibilities: [],
    skillsGained: ["Technical Communication", "Instructional Design", "Mentorship"]
  },
  {
    id: "aim-high-academy",
    role: "ICT Instructor",
    organization: "Aim High Academy",
    location: "Ghana",
    period: "Previous Teaching Practice",
    type: "teaching",
    summary: "Conducted practical ICT instruction, software applications training, and digital literacy development to foster computational confidence among learners.",
    responsibilities: [],
    skillsGained: ["Technical Instruction", "Digital Literacy", "Classroom Communication"]
  },
  {
    id: "transformation-intl-school",
    role: "ICT Educator",
    organization: "Transformation International School",
    location: "Ghana",
    period: "Previous Teaching Practice",
    type: "teaching",
    summary: "Delivered technology coursework and practical problem-solving exercises, cultivating disciplined learning habits and digital responsibility.",
    responsibilities: [],
    skillsGained: ["Curriculum Delivery", "Technical Mentoring", "Student Engagement"]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Science in Information and Communication Technology Education",
    institution: "University of Education, Winneba (UEW)",
    location: "Winneba, Ghana",
    period: "Completed",
    description: "Academic program synthesizing computer science fundamentals, data structures, network systems, software engineering, and technical pedagogy.",
    coursework: [
      "Data Structures & Algorithms",
      "Database Systems",
      "Computer Networks",
      "OOP (Java, C++)",
      "Web Technologies"
    ]
  }
];
