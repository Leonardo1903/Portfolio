import { projects } from "@/data/projects";
import type { Project } from "@/types/projects";

/* ========================================================================== */
/* Getters */
/* ========================================================================== */

export function getProjects(): Project[] {
  return projects;
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getFeaturedProject(): Project | undefined {
  return projects.find((project) => project.featured);
}

export function getArchiveProjects(): Project[] {
  return projects.filter((project) => !project.featured);
}

export function getProjectCategories(): string[] {
  return [
    "All",
    "Web Development",
    "App Development",
    "Gen AI",
    "Web3",
  ];
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") {
    return getProjects();
  }

  return getProjects().filter(
    (project) => project.category === category
  );
}

/* ========================================================================== */
/* Technologies */
/* ========================================================================== */

export function getProjectTechnologies(): string[] {
  return [...new Set(projects.flatMap((project) => project.technologies))].sort();
}

export function getProjectsByTechnology(
  technology: string
): Project[] {
  return projects.filter((project) =>
    project.technologies.includes(technology)
  );
}

/* ========================================================================== */
/* Related Projects */
/* ========================================================================== */

export function getRelatedProjects(
  slug: string,
  limit = 3
): Project[] {
  const current = getProject(slug);

  if (!current) return [];

  return projects
    .filter(
      (project) =>
        project.slug !== slug &&
        project.category === current.category
    )
    .slice(0, limit);
}

/* ========================================================================== */
/* Navigation */
/* ========================================================================== */

export function getAdjacentProjects(slug: string): {
  previous?: Project;
  next?: Project;
} {
  const index = projects.findIndex(
    (project) => project.slug === slug
  );

  if (index === -1) {
    return {};
  }

  return {
    previous: index > 0 ? projects[index - 1] : undefined,

    next:
      index < projects.length - 1
        ? projects[index + 1]
        : undefined,
  };
}

/* ========================================================================== */
/* Search */
/* ========================================================================== */

export function searchProjects(query: string): Project[] {
  const q = query.trim().toLowerCase();

  if (!q) return projects;

  return projects.filter((project) => {
    return (
      project.title.toLowerCase().includes(q) ||
      project.category.toLowerCase().includes(q) ||
      project.tagline.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.overview.toLowerCase().includes(q) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(q)
      )
    );
  });
}