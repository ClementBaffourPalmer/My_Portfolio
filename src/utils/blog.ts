import { BlogPost, BlogCategory } from '../types/blog';
import { blogArticles } from '../content/blog/articles';

export const calculateReadingTime = (content: string): string => {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  return `${minutes} min read`;
};

export const getPublishedArticles = (): BlogPost[] => {
  return blogArticles
    .filter(article => article.status === 'published')
    .map(article => ({
      ...article,
      readingTime: article.readingTime || calculateReadingTime(article.content)
    }))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
};

export const getFeaturedArticle = (): BlogPost | undefined => {
  const published = getPublishedArticles();
  return published.find(article => article.featured) || published[0];
};

export const getRecentArticles = (limit: number = 3): BlogPost[] => {
  return getPublishedArticles().slice(0, limit);
};

export const getArticleBySlug = (slug: string): BlogPost | undefined => {
  const published = getPublishedArticles();
  return published.find(article => article.slug === slug);
};

export const getAllCategories = (): BlogCategory[] => {
  return [
    'My Journey',
    'Software Engineering',
    'Cybersecurity',
    'Career & Growth',
    'Thoughts & Reflections'
  ];
};

export const getAllTags = (): string[] => {
  const published = getPublishedArticles();
  const tagsSet = new Set<string>();
  published.forEach(article => {
    article.tags.forEach(tag => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
};

export const getRelatedArticles = (currentSlug: string, category: BlogCategory, limit: number = 2): BlogPost[] => {
  const published = getPublishedArticles();
  const sameCategory = published.filter(
    article => article.slug !== currentSlug && article.category === category
  );
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }
  const others = published.filter(
    article => article.slug !== currentSlug && article.category !== category
  );
  return [...sameCategory, ...others].slice(0, limit);
};

export const getAdjacentArticles = (currentSlug: string): { previous?: BlogPost; next?: BlogPost } => {
  const published = getPublishedArticles();
  const index = published.findIndex(article => article.slug === currentSlug);
  if (index === -1) return {};

  return {
    next: index > 0 ? published[index - 1] : undefined, // Newer article
    previous: index < published.length - 1 ? published[index + 1] : undefined // Older article
  };
};

export const filterArticles = (
  articles: BlogPost[],
  category?: BlogCategory | 'All',
  searchQuery?: string
): BlogPost[] => {
  return articles.filter(article => {
    const matchesCategory = !category || category === 'All' || article.category === category;
    
    if (!matchesCategory) return false;

    if (!searchQuery || !searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase().trim();
    const matchesTitle = article.title.toLowerCase().includes(query);
    const matchesSubtitle = article.subtitle?.toLowerCase().includes(query) || false;
    const matchesExcerpt = article.excerpt.toLowerCase().includes(query);
    const matchesTags = article.tags.some(tag => tag.toLowerCase().includes(query));
    const matchesContent = article.content.toLowerCase().includes(query);

    return matchesTitle || matchesSubtitle || matchesExcerpt || matchesTags || matchesContent;
  });
};
