export interface Project {
  slug: string;

  title: string;

  tagline: string;

  description: string;

  category: "Web Development" | "App Development" | "Gen AI" | "Web3";

  status: "Production" | "In Development";

  featured: boolean;

  image: string;

  cover?: string;

  github?: string;

  live?: string;

  demo?: string;

  technologies: string[];

  published: string;

  updated?: string;

  readingTime?: string;

  keywords?: string[];

  excerpt?: string;
}