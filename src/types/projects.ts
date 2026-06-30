export interface TechStackSection {
  category: string;
  items: string[];
}

export interface EngineeringDecision {
  title: string;
  description: string;
}

export interface Architecture {
  title: string;
  description: string;
  diagram?: string;
}

export interface Project {
  slug: string;

  featured: boolean;

  status: "Production" | "In Development";

  title: string;

  category: string;

  tagline: string;

  description: string;

  image: string;

  github?: string;

  live?: string;

  technologies: string[];

  overview: string;

  problem: string;

  goals: string[];

  solution: string;

  features: string[];

  architecture: Architecture;

  techStack: TechStackSection[];

  engineeringDecisions: EngineeringDecision[];

  challenges: string[];

  lessons: string[];

  futureImprovements: {
  title: string;
  description: string;
}[];
}