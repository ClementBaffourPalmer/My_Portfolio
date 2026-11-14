# Clement Palmer — Professional Software Engineering Portfolio & Journal

> **Full-Stack Developer | Software Engineer | Aspiring Cybersecurity Specialist**  
> *"Building digital products. Engineering practical solutions across full-stack architectures, backend APIs, and cybersecurity."*

[![Built with React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-Direct_Upload-F38020?logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)

---

## 🏛️ Overview

This repository contains the complete production source code for **Clement Palmer (Clement Kwesi Baffour Palmer)**'s professional software engineering portfolio, architectural project dossiers, and personal publication journal.

Engineered with an engineering-first design language inspired by modern technology companies and clean editorial publications, it features dark and light modes, motion design with reduced-motion support, WCAG AA accessibility compliance, and an integrated markdown-driven technical journal.

---

## ✨ Key Features & Architecture

- **Editorial & Contemporary Design System**:
  - Semantic dual-theme (Dark `#111318` Deep Charcoal / Light `#FFFFFF` Pure White) with high-contrast text ratios conforming to WCAG AA/AAA.
  - Distinctive typography hierarchy: **Archivo** (UI/Interface), **Newsreader** (Editorial Serif), and **JetBrains Mono** (Code/Technical).
  - Electric Blue (`#2878FF`) brand accents and subtle glowing mesh gradients.
- **Hero & Advanced Motion**:
  - Restrained typewriter animation dynamically cycling across technical specialties without layout shifts.
  - Cinematic hero background video with automated fallbacks to technology-inspired dark mesh posters on mobile or low-power devices.
  - Respects `@media (prefers-reduced-motion: reduce)` across all animated interactions.
- **Architectural Case Studies & Project Dossiers**:
  - Deep-dive technical breakdowns (Frontend, Backend, Database, Security, and Engineering Challenges) for flagship systems:
    * **Servora**: Multi-service marketplace with Django, DRF, and transaction-safe booking reservations.
    * **StepEase**: Sensory-friendly task platform with `@dnd-kit` accessible drag-and-drop ergonomics.
    * **SmartLibrary Tracker**: Biometric facial recognition attendance system with OpenCV and debounce tracking.
    * **Python Voice Recorder**: Desktop audio signal capture utility.
    * **Py Expense Tracker**: Interactive CLI personal finance manager.
    * **Palisade e-LMS**: Academic portal built with ASP.NET Core & Entity Framework Core.
- **Cybersecurity & Defensible Systems Focus**:
  - OWASP Top 10 mitigation strategies, secure token authentication, API rate limiting, and ethical penetration testing exploration.
- **Personal Journal & Publication Hub**:
  - Routing under `/blog` and `/blog/:slug`.
  - Category filtering, real-time search, tag cloud, reading time calculation, and social sharing.
  - Modular publishing system powered by TypeScript and Markdown rendering with zero backend overhead.
- **Verified Direct Communication**:
  - Asynchronous contact form wired to verified API endpoints with instant validation and status indicators.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | React 18 (Strict Mode) |
| **Language** | TypeScript 5 (Strict Type Checking) |
| **Routing** | React Router v7 (Client-side SPA with Cloudflare `_redirects`) |
| **Bundler & Build Tool** | Vite 5 |
| **Styling & Design System** | Tailwind CSS 3 with custom semantic tokens |
| **Markdown Engine** | Marked 18 |
| **Icons** | Lucide React |
| **Deployment Target** | Cloudflare Pages (Direct Upload / Git CI) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.0.0` or higher (verified on Node 20, 22, and 26)
- **NPM**: `v9.0.0` or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/ClementBaffourPalmer/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start local development server with hot-module replacement
npm run dev
```

Visit `http://localhost:5173/` in your browser.

### Production Build

```bash
# Typecheck and compile optimized static assets
npm run build
```

The production output will be generated inside the `dist/` directory, including the `_redirects` file configured for Cloudflare Pages SPA client-side routing.

### Preview Production Build

```bash
# Preview the production build locally
npm run preview
```

---

## 📁 Repository Structure

```
├── dist/                      # Production build output
├── public/
│   ├── _redirects             # Cloudflare Pages SPA fallback rule (/* /index.html 200)
│   ├── favicon.svg            # Custom CP monogram SVG
│   ├── documents/
│   │   └── Clement_Palmer_CV.pdf     # Downloadable CV
│   ├── images/
│   │   ├── clement-palmer-profile.jpg # Hero portrait in suit
│   │   ├── clement-palmer-headshot.jpg# Editorial headshot
│   │   ├── hero-video-poster.jpg      # Background video fallback poster
│   │   └── projects/                  # System screenshots
│   └── videos/
│       └── hero-background.mp4        # Subtle technology background video
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                 # Header with navigation & theme toggle
│   │   ├── Hero.tsx                   # Hero section with typewriter & media
│   │   ├── Typewriter.tsx             # Restrained typewriter effect
│   │   ├── HeroBackgroundVideo.tsx    # Cinematic background video component
│   │   ├── About.tsx                  # Biography & academic pedigree
│   │   ├── Skills.tsx                 # Technical arsenal & tools
│   │   ├── Projects.tsx               # Projects grid with category tabs
│   │   ├── ProjectModal.tsx           # Comprehensive case study dossier
│   │   ├── Experience.tsx             # Teaching practice & software engineering
│   │   ├── Cybersecurity.tsx          # Defensive engineering specialization
│   │   ├── PersonalInterests.tsx      # Music, athletics & security dimensions
│   │   ├── HomeBlogSection.tsx        # Journal highlights on homepage
│   │   ├── Contact.tsx                # Validated inquiry form & direct channels
│   │   ├── Footer.tsx                 # Footer hierarchy & back-to-top
│   │   └── blog/                      # Journal components (cards, sharing, markdown)
│   ├── content/
│   │   └── blog/
│   │       └── articles.ts            # Blog articles content repository
│   ├── data/
│   │   └── portfolioData.ts           # Central data source for projects & credentials
│   ├── pages/
│   │   ├── HomePage.tsx               # Primary portfolio single page
│   │   ├── BlogPage.tsx               # Journal index with search & filters
│   │   └── BlogPostPage.tsx           # Individual article reading view
│   ├── types/
│   │   ├── index.ts                   # Core data models
│   │   └── blog.ts                    # Article & category models
│   ├── utils/
│   │   └── blog.ts                    # Reading time, search, filter utilities
│   ├── App.tsx                        # Root layout & route configuration
│   ├── main.tsx                       # React DOM entrypoint
│   └── index.css                      # Semantic CSS variables & utility classes
├── BLOG_PUBLISHING_GUIDE.md           # Instructions for drafting & publishing essays
├── DEPLOYMENT.md                      # Cloudflare Pages deployment walkthrough
├── tailwind.config.js                 # Design system theme configuration
├── vite.config.ts                     # Vite build & chunking setup
└── package.json
```

---

## 🌐 Deployment to Cloudflare Pages

This site is pre-configured for direct, zero-config deployment on Cloudflare Pages:

- **Build Command**: `npm run build`
- **Build Output Directory**: `dist`
- **Node.js Version**: `18` or `20`
- **SPA Routing**: Handled automatically via `public/_redirects`.

Refer to [DEPLOYMENT.md](file:///Users/kavanalabsuser/Developments/Portfolio_update/DEPLOYMENT.md) for detailed deployment methods (Dashboard Direct Upload, Git Integration, or Wrangler CLI).

---

## 👤 Contact & Verification

- **Developer**: Clement Palmer (Clement Kwesi Baffour Palmer)
- **Role**: Full-Stack Developer & Software Engineer
- **GitHub**: [github.com/ClementBaffourPalmer](https://github.com/ClementBaffourPalmer)
- **LinkedIn**: [linkedin.com/in/kwesi-baffour-598ba83a9](https://www.linkedin.com/in/kwesi-baffour-598ba83a9/)
- **Email**: `clementpalmer84@gmail.com`
- **Location**: Accra, Ghana

---

## 📄 License
© 2026 Clement Palmer. All rights reserved.
