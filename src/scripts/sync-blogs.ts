import fs from "fs-extra";
import path from "path";

import fg from "fast-glob";
import matter from "gray-matter";
import readingTime from "reading-time";

import { BLOG_CONFIG } from "../blog-config";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

interface Frontmatter {
  title?: string;

  slug?: string;

  cuid?: string;

  datePublished?: string;

  cover?: string;

  tags?: string | string[];

  featured?: boolean;

    category?: string;

  draft?: boolean;

  medium?: string;

  hashnode?: string;
}

interface BlogMetadata {
  title: string;

  slug: string;

  cuid: string;

  published: string;

  cover?: string;

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
/*                                  Helpers                                   */
/* -------------------------------------------------------------------------- */

function stripMarkdown(markdown: string) {
  return markdown
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\!\[.*?\]\(.*?\)/g, "")
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")
    .replace(/^#+\s+/gm, "")
    .replace(/^>\s?/gm, "")
    .replace(/[*_~]/g, "")
    .replace(/\r?\n/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function generateDescription(content: string) {
  const plain = stripMarkdown(content);

  if (plain.length <= 180) {
    return plain;
  }

  return plain.slice(0, 177).trim() + "...";
}

function createMetadata(
  frontmatter: Frontmatter,
  content: string
): BlogMetadata {
  return {
    title: frontmatter.title!,

    slug: frontmatter.slug!,

    cuid: frontmatter.cuid!,

    published: frontmatter.datePublished!,

    cover: frontmatter.cover,

    tags: Array.isArray(frontmatter.tags)
  ? frontmatter.tags
  : typeof frontmatter.tags === "string"
    ? frontmatter.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)
    : [],

    featured: frontmatter.featured ?? false,

    category:
      frontmatter.category ??
      "Web Development",

    draft: frontmatter.draft ?? false,

    medium: frontmatter.medium,

    hashnode: frontmatter.hashnode,

    readingTime: readingTime(content).text,

    description: generateDescription(content),
  };
}

async function syncBlogs() {
  console.log("\n📚 Syncing Hashnode Blogs...\n");

  const postsDirectory = path.join(
    BLOG_CONFIG.destination,
    "posts"
  );

  await fs.ensureDir(postsDirectory);

  const sourceFiles = await fg("*.md", {
    cwd: BLOG_CONFIG.source,
    onlyFiles: true,
  });

  const metadata: BlogMetadata[] = [];

  const syncedFiles = new Set<string>();
  const usedSlugs = new Set<string>();

  let added = 0;
  let updated = 0;
  let skipped = 0;
  let drafts = 0;
  let invalid = 0;
  let deleted = 0;

  /* -------------------------------------------------------------------------- */
  /*                               Process Posts                                */
  /* -------------------------------------------------------------------------- */

  for (const file of sourceFiles) {
    if (file.startsWith("draft-")) {
      drafts++;
      continue;
    }

    const sourcePath = path.join(
      BLOG_CONFIG.source,
      file
    );

    const raw = await fs.readFile(
      sourcePath,
      "utf8"
    );

    const { data, content } = matter(raw);

    const frontmatter = data as Frontmatter;

    /* ------------------------------ Validation ------------------------------ */

    const missing =
      BLOG_CONFIG.requiredFields.filter(
        (field) =>
          frontmatter[
            field as keyof Frontmatter
          ] === undefined
      );

    if (missing.length > 0) {
      console.log(
        `⚠️  ${file} skipped`
      );

      console.log(
        `    Missing: ${missing.join(", ")}`
      );

      invalid++;

      continue;
    }

    /* ---------------------------- Duplicate Slugs --------------------------- */

    if (
      usedSlugs.has(frontmatter.slug!)
    ) {
      console.log(
        `⚠️  Duplicate slug "${frontmatter.slug}"`
      );

      invalid++;

      continue;
    }

    usedSlugs.add(frontmatter.slug!);

    /* -------------------------- Build Metadata -------------------------- */

    metadata.push(
      createMetadata(
        frontmatter,
        content
      )
    );

    /* ----------------------------- Copy MDX ----------------------------- */

    const destinationFile =
      `${frontmatter.slug}.mdx`;

    syncedFiles.add(destinationFile);

    const destinationPath =
      path.join(
        postsDirectory,
        destinationFile
      );

    if (
      !(await fs.pathExists(
        destinationPath
      ))
    ) {
      await fs.writeFile(
        destinationPath,
        raw
      );

      added++;

      console.log(
        `✓ Added      ${destinationFile}`
      );

      continue;
    }

    const existing =
      await fs.readFile(
        destinationPath,
        "utf8"
      );

    if (existing !== raw) {
      await fs.writeFile(
        destinationPath,
        raw
      );

      updated++;

      console.log(
        `↺ Updated    ${destinationFile}`
      );
    } else {
      skipped++;

      console.log(
        `⏭ Skipped    ${destinationFile}`
      );
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                               Sort Metadata                                */
  /* -------------------------------------------------------------------------- */

  metadata.sort(
    (a, b) =>
      new Date(
        b.published
      ).getTime() -
      new Date(
        a.published
      ).getTime()
  );

    /* -------------------------------------------------------------------------- */
  /*                           Delete Removed Posts                             */
  /* -------------------------------------------------------------------------- */

  const existingPosts = await fg("*.mdx", {
    cwd: postsDirectory,
    onlyFiles: true,
  });

  for (const file of existingPosts) {
    if (!syncedFiles.has(file)) {
      await fs.remove(path.join(postsDirectory, file));

      deleted++;

      console.log(`🗑 Deleted    ${file}`);
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                           Generate index.json                              */
  /* -------------------------------------------------------------------------- */

  const indexPath = path.join(
    BLOG_CONFIG.destination,
    "index.json"
  );

  await fs.writeJson(indexPath, metadata, {
    spaces: 2,
  });

  console.log(
    `\n📄 Generated index.json (${metadata.length} posts)`
  );

  /* -------------------------------------------------------------------------- */
  /*                                  Summary                                   */
  /* -------------------------------------------------------------------------- */

  console.log("\n──────────────────────────────────────────────");

  console.log(`Published : ${metadata.length}`);
  console.log(`Added     : ${added}`);
  console.log(`Updated   : ${updated}`);
  console.log(`Skipped   : ${skipped}`);
  console.log(`Deleted   : ${deleted}`);
  console.log(`Drafts    : ${drafts}`);
  console.log(`Invalid   : ${invalid}`);

  console.log("──────────────────────────────────────────────");

  console.log("\n✅ Blog synchronization completed.\n");
}

syncBlogs().catch((error) => {
  console.error(error);

  process.exit(1);
});