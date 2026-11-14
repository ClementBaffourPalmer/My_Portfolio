# Clement Palmer — Professional Engineering Portfolio

> **Full-Stack Developer | Software Engineer | Aspiring Cybersecurity Specialist**

This repository contains the source code for the professional portfolio of **Clement Palmer (Clement Kwesi Baffour Palmer)**, engineered with React 18, TypeScript, Vite, and Tailwind CSS.

---

## 🛠️ Technology Stack

- **Framework**: React 18 with TypeScript (Strict Mode)
- **Bundler & Dev Server**: Vite 5
- **Styling**: Tailwind CSS with custom design system tokens
- **Icons**: Lucide React
- **Typography**: Inter & JetBrains Mono

---

## 🚀 Quick Start

### 1. Development Server
```bash
npm install
npm run dev
```
Open `http://localhost:5173/` in your browser.

### 2. Production Build
```bash
npm run build
```
Generates an optimized static distribution in the `dist/` directory.

### 3. Local Production Preview
```bash
npm run preview
```

---

## 📁 Project Structure

```
Portfolio_update/
├── dist/                      # Production build output (ready for Cloudflare)
├── public/
│   ├── documents/
│   │   └── Clement_Palmer_CV.pdf     # Downloadable CV
│   ├── images/
│   │   ├── clement-palmer-profile.jpg # Main Hero Suit Portrait
│   │   ├── clement-palmer-headshot.jpg# About Headshot
│   │   └── projects/                  # Project screenshots
│   └── favicon.svg                    # Custom CP monogram SVG
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Responsive navbar with theme toggle
│   │   ├── Hero.tsx           # Two-column hero with suit portrait
│   │   ├── About.tsx          # Editorial biography & UEW credentials
│   │   ├── Skills.tsx         # Classified technical capabilities
│   │   ├── Projects.tsx       # Featured project showcase
│   │   ├── ProjectModal.tsx   # Detailed architectural case studies
│   │   ├── Experience.tsx     # Teaching pedagogy & software engineering
│   │   ├── Cybersecurity.tsx  # Defensible engineering & AppSec focus
│   │   ├── Contact.tsx        # Validated contact form & direct channels
│   │   └── Footer.tsx         # Quick links & engineering tags
│   ├── data/
│   │   └── portfolioData.ts   # Centralized data model for projects/skills
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces & types
│   ├── App.tsx                # Main application layout & theme management
│   ├── main.tsx               # DOM entry point
│   └── index.css              # Custom design system CSS tokens
├── tailwind.config.js         # Theme color definitions & design system
├── vite.config.ts             # Vite build & chunking configuration
├── DEPLOYMENT.md              # Complete Cloudflare Pages deployment guide
└── package.json
```

---

## 📄 License & Attribution
Designed and engineered for Clement Palmer. All rights reserved.
