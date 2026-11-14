export interface ProjectArchitecture {
  overview: string;
  frontend?: string;
  backend?: string;
  database?: string;
  security?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Full-stack Web Application' | 'Accessible Application' | 'Academic Software Project' | 'Educational Platform';
  tagline: string;
  description: string;
  longDescription: string;
  technologies: string[];
  architecture: ProjectArchitecture;
  challenges: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  image?: string;
  badge?: string;
}

export interface SkillItem {
  name: string;
  context?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'teaching' | 'engineering';
  summary: string;
  responsibilities: string[];
  skillsGained: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  coursework: string[];
}

export interface SecurityArea {
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  focusPoints: string[];
}
