import fs from "fs/promises";
import path from "path";

import fg from "fast-glob";
import matter from "gray-matter";
import readingTime from "reading-time";

import { PROJECT_CONFIG } from "../project-config";

interface Frontmatter {
  title: string;
  slug: string;

  featured?: boolean;

  status?: "Production" | "In Development";

  category: string;

  tagline: string;

  description: string;

  image: string;

  github?: string;

  live?: string;

  technologies?: string[];

  published: string;

  updated?: string;

  keywords?: string[];
}

interface ProjectMetadata extends Frontmatter {
  readingTime: string;
}

async function syncProjects() {
  console.log("\n📦 Generating Project Index...\n");

  const files = await fg("*.mdx", {
    cwd: PROJECT_CONFIG.source,
    onlyFiles: true,
  });

  const projects: ProjectMetadata[] = [];

  const slugs = new Set<string>();

  for (const file of files) {
    const source = await fs.readFile(
      path.join(PROJECT_CONFIG.source, file),
      "utf8"
    );

    const { data, content } = matter(source);

    const frontmatter = data as Frontmatter;

    /* -------------------------------- */
    /* Validate required fields         */
    /* -------------------------------- */

    const missing = PROJECT_CONFIG.requiredFields.filter(
      (field) =>
        frontmatter[field as keyof Frontmatter] === undefined
    );

    if (missing.length > 0) {
      console.warn(
        `⚠ ${file} skipped (missing: ${missing.join(", ")})`
      );
      continue;
    }

    if (slugs.has(frontmatter.slug)) {
      throw new Error(
        `Duplicate slug "${frontmatter.slug}" found in ${file}`
      );
    }

    slugs.add(frontmatter.slug);

    projects.push({
      ...frontmatter,

      featured: frontmatter.featured ?? false,

      status:
        frontmatter.status ??
        "Production",

      technologies:
        frontmatter.technologies ?? [],

      readingTime:
        readingTime(content).text,
    });
  }

  /* -------------------------------- */
  /* Sort Featured First              */
  /* -------------------------------- */

  projects.sort((a, b) => {
    if (a.featured !== b.featured) {
      return Number(b.featured) - Number(a.featured);
    }

    return (
      new Date(b.published).getTime() -
      new Date(a.published).getTime()
    );
  });

  /* -------------------------------- */
  /* Write index.json                 */
  /* -------------------------------- */

  await fs.writeFile(
    path.join(
      PROJECT_CONFIG.destination,
      "index.json"
    ),
    JSON.stringify(projects, null, 2),
    "utf8"
  );

  console.log(
    `✓ Generated index.json (${projects.length} projects)`
  );
}

syncProjects().catch((error) => {
  console.error(error);
  process.exit(1);
});