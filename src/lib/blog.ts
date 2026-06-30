import posts from "@/data/blogs/index.json";
import { ARTICLE_METADATA } from "@/data/blogs/article-metadata";

import type {
  BlogMetadata,
  ArticleMetadata
} from "@/types/blogs";

/* -------------------------------------------------------------------------- */
/*                                   Data                                     */
/* -------------------------------------------------------------------------- */

const blogPosts = [...(posts as BlogMetadata[])].sort(
  (a, b) =>
    new Date(b.published).getTime() -
    new Date(a.published).getTime()
);

/* -------------------------------------------------------------------------- */
/*                                  Posts                                     */
/* -------------------------------------------------------------------------- */

export function getAllPosts(): BlogMetadata[] {
  return blogPosts;
}

export function getPostBySlug(
  slug: string
): BlogMetadata | undefined {
  return blogPosts.find(
    (post) => post.slug === slug
  );
}

export function getFeaturedPost():
  | BlogMetadata
  | undefined {
  return blogPosts.find(
    (post) => post.featured
  );
}

export function getLatestPosts(
  count = 3
): BlogMetadata[] {
  return blogPosts.slice(0, count);
}

export function getTotalPosts(): number {
  return blogPosts.length;
}

/* -------------------------------------------------------------------------- */
/*                                   Topics                                   */
/* -------------------------------------------------------------------------- */

export function getBlogCategories(): string[] {
  return [
    "All",
    "Web Development",
    "App Development",
    "Gen AI",
    "Web3",
    "System Design",
  ];
}

export function getPostsByCategory(
  category: string
): BlogMetadata[] {
  if (category === "All") {
    return getAllPosts();
  }

  return getAllPosts().filter(
    (post) => post.category === category
  );
}

export function getTotalTopics() {
  return getBlogCategories().length - 1;
}



export function getArticleMetadata(
  slug: string
): ArticleMetadata {
  return ARTICLE_METADATA[slug] ?? {};
}
/* -------------------------------------------------------------------------- */
/*                               Related Posts                                */
/* -------------------------------------------------------------------------- */

export function getRelatedPosts(
  slug: string,
  limit = 3
): BlogMetadata[] {
  const current = getPostBySlug(slug);

  if (!current) {
    return [];
  }

  return blogPosts
    .map((post) => {
      if (post.slug === slug) {
        return null;
      }

      const sharedTags = post.tags.filter((tag) =>
        current.tags.includes(tag)
      ).length;

      return {
        ...post,
        score: sharedTags,
      };
    })
    .filter(
      (
        post
      ): post is BlogMetadata & { score: number } =>
        post !== null && post.score > 0
    )
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ score, ...post }) => post);
}

/* -------------------------------------------------------------------------- */
/*                               Navigation                                   */
/* -------------------------------------------------------------------------- */

export function getAdjacentPosts(
  slug: string
): {
  previous?: BlogMetadata;
  next?: BlogMetadata;
} {
  const index = blogPosts.findIndex(
    (post) => post.slug === slug
  );

  if (index === -1) {
    return {};
  }

  return {
    previous:
      index < blogPosts.length - 1
        ? blogPosts[index + 1]
        : undefined,

    next:
      index > 0
        ? blogPosts[index - 1]
        : undefined,
  };
}

