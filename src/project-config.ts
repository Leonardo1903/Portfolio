import path from "path";

export const PROJECT_CONFIG = {
  source: path.resolve(
    process.cwd(),
    "src/data/projects/case-studies"
  ),

  destination: path.resolve(
    process.cwd(),
    "src/data/projects"
  ),

  requiredFields: [
    "title",
    "slug",
    "published",
    "tagline",
    "description",
    "category",
    "image",
  ],
} as const;