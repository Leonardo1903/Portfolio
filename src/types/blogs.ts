/* -------------------------------------------------------------------------- */
/*                               Frontmatter                                  */
/* -------------------------------------------------------------------------- */

export interface BlogFrontmatter {
  title: string;

  slug: string;

  cuid: string;

  datePublished: string;

  cover: string;

  tags: string[];

  featured?: boolean;

  draft?: boolean;

  medium?: string;

  hashnode?: string;
}

/* -------------------------------------------------------------------------- */
/*                              Blog Metadata                                 */
/* -------------------------------------------------------------------------- */

export interface BlogMetadata {
  title: string;

  slug: string;

  cuid: string;

  published: string;

  cover: string;

  tags: string[];

  featured: boolean;

  category: string;

  draft: boolean;

  medium?: string;

  hashnode?: string;

  readingTime: string;

  description: string;
}

/* -------------------------------------------------------------------------- */
/*                                Blog Page                                   */
/* -------------------------------------------------------------------------- */

export interface BlogPage extends BlogMetadata {
  content: string;
}

/* -------------------------------------------------------------------------- */
/*                                 Topics                                     */
/* -------------------------------------------------------------------------- */

export interface BlogTopic {
  name: string;

  slug: string;

  count: number;
}

export interface ArticleMetadata {
  subtitle: string;

  medium?: string;

  hashnode?: string;

  featured?: boolean;

  series?: string;

  canonical?: string;
}