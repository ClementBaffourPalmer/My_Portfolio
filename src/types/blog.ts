export type BlogCategory = 
  | 'My Journey'
  | 'Software Engineering'
  | 'Cybersecurity'
  | 'Career & Growth'
  | 'Thoughts & Reflections';

export interface BlogPost {
  title: string;
  slug: string;
  subtitle?: string;
  excerpt: string;
  category: BlogCategory;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  featuredImage?: string;
  status: 'published' | 'draft';
  featured?: boolean;
  readingTime?: string;
  content: string; // Markdown formatted content
}

export interface BlogFilterOptions {
  category?: BlogCategory | 'All';
  searchQuery?: string;
  tag?: string;
}
