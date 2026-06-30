import path from "path";

export const BLOG_CONFIG = {
  source: path.resolve(process.cwd(), "../Blogs"),

  destination: path.resolve(
    process.cwd(),
    "src/data/blogs"
  ),

  requiredFields: [
    "title",
    "slug",
    "datePublished",
    "tags",
  ],
} as const;