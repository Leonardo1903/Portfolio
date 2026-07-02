import projects from "@/data/projects/index.json";

import type { Project } from "@/types/projects";

/* -------------------------------------------------------------------------- */
/*                                   Data                                     */
/* -------------------------------------------------------------------------- */

const projectList = [...(projects as Project[])].sort(
  (a, b) =>
    Number(b.featured) - Number(a.featured) ||
    new Date(b.published).getTime() -
      new Date(a.published).getTime()
);

/* -------------------------------------------------------------------------- */
/*                                  Projects                                  */
/* -------------------------------------------------------------------------- */

export function getAllProjects(): Project[] {
  return projectList;
}

export function getProjectBySlug(
  slug: string
): Project | undefined {
  return projectList.find(
    (project) => project.slug === slug
  );
}

export function getFeaturedProject():
  | Project
  | undefined {
  return projectList.find(
    (project) => project.featured
  );
}

export function getFeaturedProjects(): Project[] {
  return projectList.filter(
    (project) => project.featured
  );
}

export function getArchiveProjects(): Project[] {
  return projectList.filter(
    (project) => !project.featured
  );
}

export function getLatestProjects(
  count = 3
): Project[] {
  return projectList.slice(0, count);
}

export function getTotalProjects(): number {
  return projectList.length;
}

/* -------------------------------------------------------------------------- */
/*                                Categories                                  */
/* -------------------------------------------------------------------------- */

export function getProjectCategories(): string[] {
  return [
    "All",
    "Web Development",
    "App Development",
    "Gen AI",
    "Web3",
  ];
}

export function getProjectsByCategory(
  category: string
): Project[] {
  if (category === "All") {
    return getAllProjects();
  }

  return projectList.filter(
    (project) => project.category === category
  );
}

/* -------------------------------------------------------------------------- */
/*                               Technologies                                 */
/* -------------------------------------------------------------------------- */

export function getProjectTechnologies(): string[] {
  return [
    ...new Set(
      projectList.flatMap(
        (project) => project.technologies
      )
    ),
  ].sort();
}

export function getProjectsByTechnology(
  technology: string
): Project[] {
  return projectList.filter((project) =>
    project.technologies.includes(
      technology
    )
  );
}

/* -------------------------------------------------------------------------- */
/*                               Related Projects                             */
/* -------------------------------------------------------------------------- */

export function getRelatedProjects(
  slug: string,
  limit = 3
): Project[] {
  const current = getProjectBySlug(slug);

  if (!current) {
    return [];
  }

  return projectList
    .map((project) => {
      if (project.slug === slug) {
        return null;
      }

      const sharedTech = project.technologies.filter(
        (tech) =>
          current.technologies.includes(tech)
      ).length;

      const categoryBonus =
        project.category === current.category
          ? 3
          : 0;

      return {
        ...project,
        score:
          sharedTech + categoryBonus,
      };
    })
    .filter(
      (
        project
      ): project is Project & {
        score: number;
      } =>
        project !== null &&
        project.score > 0
    )
    .sort(
      (a, b) =>
        b.score - a.score
    )
    .slice(0, limit)
    .map(
      ({ score, ...project }) =>
        project
    );
}

/* -------------------------------------------------------------------------- */
/*                               Navigation                                   */
/* -------------------------------------------------------------------------- */

export function getAdjacentProjects(
  slug: string
): {
  previous?: Project;
  next?: Project;
} {
  const index =
    projectList.findIndex(
      (project) =>
        project.slug === slug
    );

  if (index === -1) {
    return {};
  }

  return {
    previous:
      index < projectList.length - 1
        ? projectList[index + 1]
        : undefined,

    next:
      index > 0
        ? projectList[index - 1]
        : undefined,
  };
}

/* -------------------------------------------------------------------------- */
/*                                   Search                                   */
/* -------------------------------------------------------------------------- */

export function searchProjects(
  query: string
): Project[] {
  const q =
    query.trim().toLowerCase();

  if (!q) {
    return projectList;
  }

  return projectList.filter(
    (project) =>
      project.title
        .toLowerCase()
        .includes(q) ||
      project.tagline
        .toLowerCase()
        .includes(q) ||
      project.description
        .toLowerCase()
        .includes(q) ||
      project.category
        .toLowerCase()
        .includes(q) ||
      project.technologies.some(
        (tech) =>
          tech
            .toLowerCase()
            .includes(q)
      )
  );
}