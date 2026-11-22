import { Project, ExperienceItem, EducationItem } from '../types';

export const personalInfo = {
  fullName: "Clement Kwesi Baffour Palmer",
  displayName: "Clement Palmer",
  title: "Full-Stack Developer | Software Engineer | Cybersecurity Enthusiast",
  headline: "Full-Stack Developer and Software Engineer",
  intro: "I'm a full-stack developer who enjoys building practical software solutions and exploring how technology can solve real-world problems. My interests include backend development, software engineering and cybersecurity.",
  aboutBio: [
    "I am a software developer holding a Bachelor of Science in Information and Communication Technology Education from the University of Education, Winneba (UEW), Ghana, and currently studying a Bachelor's Degree in Computer Science at the University of the People. My journey into software development began with a fascination for computing systems and has since grown into building practical full-stack web applications that solve real-world problems.",
    "My technical work centres on backend development, scalable REST APIs, and relational databases using Python, Django, and React. Alongside full-stack engineering, I have a growing interest in cybersecurity and ethical hacking, with a focus on defensible application architecture, secure authentication, and resilient software design."
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
    description: "A service marketplace I built where providers can list their services and customers can browse, book time slots, and pay. I designed the booking system to prevent double bookings using database transactions and built secure REST APIs for all workflows.",
    longDescription: "Servora is a modular service marketplace built with Django and Django REST Framework. It supports role-based access for providers and clients, uses atomic transactions to prevent duplicate bookings, and includes payment verification gateways.",
    technologies: ["Python", "Django", "Django REST Framework", "MySQL", "JavaScript", "REST APIs"],
    featured: true,
    githubUrl: "https://github.com/ClementBaffourPalmer/Servora-",
    image: "/images/projects/project-2.png",
    architecture: {
      overview: "Modular monolithic Django architecture with dedicated domain apps for authentication, service catalogs, slot scheduling, and payment callbacks.",
      frontend: "Responsive Bootstrap and modern JavaScript interface communicating with token-authenticated REST endpoints.",
      backend: "Django 5 REST Framework featuring custom permissions, atomic transactions, and automated slot reservation logic.",
      database: "Normalized MySQL schema with referential constraints between providers, offerings, schedules, and booking records.",
      security: "Anti-CSRF protection, input validation serializers, role-based authorization (RBAC), and parameterised queries."
    },
    challenges: [
      "Preventing duplicate booking conflicts during concurrent slot selections using atomic database transactions.",
      "Structuring a clean REST API layer that works for both web clients and external consumers."
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
    description: "A task management app I designed with accessibility at its core. It features drag-and-drop task ordering that works fully with a keyboard and screen readers, using calm colours and a low-stimulation layout to help users stay focused without feeling overwhelmed.",
    longDescription: "StepEase is a productivity application built with accessibility in mind (WCAG AA). It includes drag-and-drop task prioritisation, full keyboard navigation, calm colour contrast, and state synchronisation that works offline.",
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
      "Building keyboard-accessible drag-and-drop reordering with screen reader announcements using live regions.",
      "Maintaining high contrast compliance while keeping a calm, low-stimulation colour palette."
    ],
    highlights: [
      "Sensory-friendly interface designed to reduce cognitive fatigue.",
      "Keyboard-accessible task prioritisation powered by @dnd-kit.",
      "State synchronisation that continues working even without a network connection."
    ]
  },
  {
    id: "smartlibrary-tracker",
    title: "SmartLibrary Tracker",
    category: "Computer Vision & Web",
    tagline: "Biometric Library Attendance System",
    description: "A library attendance system I developed at UEW that uses facial recognition to automatically log when students enter and leave. It replaces manual sign-in sheets with a live camera feed and a web dashboard showing real-time occupancy data.",
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
    description: "Two standalone Python projects: a desktop voice recorder that captures microphone audio and saves it directly to disk, and a terminal expense tracker for logging daily spending and viewing weekly and monthly summaries.",
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
      "Desktop Voice Recorder with a real-time timer and audio saved directly to disk.",
      "Terminal Expense Tracker with daily, weekly, and monthly spending summaries.",
      "Completely self-contained with no unnecessary third-party dependencies."
    ]
  },
  {
    id: "beatmantra",
    title: "BeatMantra",
    category: "Audio Plugin",
    tagline: "Precision Equaliser for Music Production",
    description: "A parametric equaliser plugin I am developing for music producers and audio engineers. BeatMantra (Mantra EQ) runs inside DAWs like GarageBand and provides a real-time spectrum analyser, five fully adjustable filter bands, and preset management for mastering workflows.",
    longDescription: "BeatMantra is an audio plugin built to give producers and mixing engineers precise control over their frequency spectrum. It features a five-band parametric EQ with adjustable filter types (Low Cut, Bell, High Shelf), a live spectrum analyser showing pre and post EQ curves, and a preset system for saving and recalling mastering chains.",
    technologies: ["C++", "JUCE Framework", "DSP", "Audio Plugin (AU/VST)", "macOS"],
    featured: true,
    codeAvailableOnRequest: true,
    image: "/images/projects/mantra-eq-poster.jpg",
    demoVideo: "/videos/mantra-eq-demo.mp4",
    architecture: {
      overview: "Real-time audio processing plugin built with JUCE, compiled as AU and VST3 for DAW integration.",
      frontend: "Custom GUI with interactive frequency response curve, draggable band nodes, and live spectrum visualisation.",
      backend: "DSP engine processing audio buffers in real-time with cascaded biquad filters and FFT-based spectrum analysis.",
      database: "XML-based preset storage for saving and recalling equaliser configurations.",
      security: "Sandboxed plugin architecture running within the host DAW's process boundary."
    },
    challenges: [
      "Processing audio in real-time without introducing latency or artefacts in the signal chain.",
      "Building a responsive GUI that updates the spectrum analyser at 60fps while the DSP engine processes audio on a separate thread."
    ],
    highlights: [
      "Five-band parametric EQ with Low Cut, Bell, and High Shelf filter types.",
      "Live spectrum analyser with pre and post EQ visualisation.",
      "Preset management for mastering and mixing workflows.",
      "Tested and verified in GarageBand on macOS."
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "independent-engineering",
    role: "Independent Software Engineer",
    organization: "Personal & Academic Projects",
    location: "Ghana",
    period: "2024 to Present",
    type: "engineering",
    summary: "Building full-stack web applications, REST APIs, and database-driven solutions including Servora, StepEase, and SmartLibrary Tracker.",
    responsibilities: [],
    skillsGained: ["Full-Stack Architecture", "Python & Django", "React & TypeScript", "REST APIs", "Relational Databases"]
  },
  {
    id: "palisade-academy",
    role: "ICT Educator (Teaching Practice)",
    organization: "Palisade Academy",
    location: "Ghana",
    period: "Approx. 6 Months",
    type: "teaching",
    summary: "Led ICT instruction and curriculum delivery for secondary students, teaching foundational computational logic, computer architecture, and digital literacy.",
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
    summary: "Taught practical ICT skills, software applications, and digital literacy to help learners build confidence with technology.",
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
    summary: "Delivered technology coursework and practical problem-solving exercises, building disciplined learning habits and digital responsibility among students.",
    responsibilities: [],
    skillsGained: ["Curriculum Delivery", "Technical Mentoring", "Student Engagement"]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: "University of the People",
    location: "Pasadena, CA (Online)",
    period: "In Progress",
    description: "A thorough undergraduate computer science programme covering software engineering, algorithmic problem solving, operating systems, and computer architecture.",
    coursework: [
      "Computer Science Fundamentals",
      "Data Structures & Algorithms",
      "Software Engineering",
      "Operating Systems"
    ]
  },
  {
    degree: "Bachelor of Science in Information and Communication Technology Education",
    institution: "University of Education, Winneba (UEW)",
    location: "Winneba, Ghana",
    period: "Completed",
    description: "An academic programme combining computer science fundamentals, data structures, network systems, software engineering, and technical pedagogy.",
    coursework: [
      "Data Structures & Algorithms",
      "Database Systems",
      "Computer Networks",
      "OOP (Java, C++)",
      "Web Technologies"
    ]
  }
];
