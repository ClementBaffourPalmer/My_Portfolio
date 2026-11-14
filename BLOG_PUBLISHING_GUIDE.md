# ✍️ Clement Palmer — Journal & Blog Publishing Guide

Welcome to your personal journal publishing system: **CLEMENT PALMER — JOURNAL** (*"Beyond the Code"*).

This guide explains how to write, manage, and publish articles quickly without modifying any core website components.

---

## 📁 Where Articles Live

All articles are managed in:
[`src/content/blog/articles.ts`](file:///Users/kavanalabsuser/Developments/Portfolio_update/src/content/blog/articles.ts)

This file exports an array of `BlogPost` objects using strict TypeScript typing.

---

## 📝 How to Create & Publish a New Article

### Step 1: Open `src/content/blog/articles.ts`

Add a new object to the `blogArticles` array:

```typescript
{
  title: "My New Article Title",
  slug: "my-new-article-title", // Becomes /blog/my-new-article-title
  subtitle: "A short, engaging sub-headline explaining the core theme.",
  excerpt: "A concise 2-3 sentence overview that appears on preview cards and in SEO search results.",
  category: "Software Engineering", // Select one of the 5 categories below
  tags: ["Django", "Architecture", "Python"],
  publishedAt: "2026-11-15",
  updatedAt: "2026-11-15", // Optional
  featuredImage: "/images/projects/project-1.png", // Optional
  status: "published", // Set to 'published' to make public, or 'draft' to keep private
  featured: false, // Set to true if this should be the hero article on /blog
  content: `
## Introduction

Write your article in standard Markdown format here.

You can use:
- **Bold text** and *italics*
- Bullet points and numbered lists
- Inline \`code\` blocks

### Code Blocks with Language Syntax

\`\`\`python
def secure_verify(token):
    return True
\`\`\`

> *"A great quote or reflective thought that emphasizes your point."*

## Section Heading

Wrap up your essay or technical deep dive with clear conclusions.
`
}
```

---

## 🏷️ Supported Categories

You can assign each article to any of the following 5 supported categories:

1. `My Journey` (Personal reflections, life milestones, UEW experiences, stepping into tech)
2. `Software Engineering` (Architecture, backend systems, Django, React, databases, code lessons)
3. `Cybersecurity` (Application security, OWASP Top 10, penetration testing insights, secure design)
4. `Career & Growth` (ICT teaching pedagogy, technical communication, mentoring, interviews)
5. `Thoughts & Reflections` (Accessibility, UI/UX philosophy, digital productivity, books)

---

## 🔒 Managing Drafts

- To keep an article private while writing:
  ```typescript
  status: "draft"
  ```
- **Drafts are strictly hidden**: They are automatically excluded from the homepage preview, the `/blog` index, and search results.
- When you are ready to publish, change `status: "draft"` to `status: "published"`.

---

## ⏱️ Automatic Features

- **Reading Time**: Automatically calculated at ~200 words per minute (e.g., "5 min read") if not specified.
- **Related Articles**: Automatically suggests related articles based on category.
- **Previous & Next**: Automatically links the chronological previous and next articles.
- **Search & Filters**: Instantly searchable on `/blog` by title, excerpt, content, and tags.
- **Social Sharing**: Visitors can share your article to LinkedIn, Twitter/X, or copy the direct link.

---

## 🚀 Publishing Changes to Cloudflare Pages

Whenever you add or edit an article:

1. In your terminal, build the project:
   ```bash
   npm run build
   ```
2. Drag and drop the updated `dist` folder into your Cloudflare Pages dashboard (or run `npx wrangler pages deploy dist`).
3. Your new article is instantly live!
