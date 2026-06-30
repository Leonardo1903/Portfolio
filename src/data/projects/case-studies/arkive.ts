import type {Project} from "@/types/projects";

export const arkive: Project = {
  slug: "arkive",

  featured: true,

  status: "Production",

  title: "Arkive",

  category: "Web Development",

  tagline:
    "A secure cloud storage platform built for seamless file management, organization and collaboration.",

  description:
    "Arkive is a modern cloud storage platform that enables users to securely upload, organize and share files through an intuitive interface. Built with a focus on security, performance and developer-friendly architecture, it combines authentication, cloud storage and optimized media delivery into a cohesive experience.",

  image: "/projects/arkive.png",

  github: "https://github.com/Leonardo1903/Arkive",

  live: "https://arkive.leonardo1903.me",

  technologies: [
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "Clerk",
    "Drizzle ORM",
    "PostgreSQL",
    "ImageKit",
  ],

  overview:
    "Arkive was built to explore the architecture behind modern cloud storage applications. The project focuses on secure authentication, efficient file uploads, structured file organization and optimized asset delivery while maintaining an intuitive user experience.",

  problem:
    "Managing files across multiple devices should be simple, fast and secure. Many cloud storage applications either become cluttered as content grows or lack features that make organization and sharing intuitive.",

  goals: [
    "Build a secure authentication system.",
    "Create a responsive file management interface.",
    "Support high-performance media uploads.",
    "Organize files using folders.",
    "Implement search for quick file discovery.",
    "Provide a clean user experience across devices.",
  ],

  solution:
    "Arkive combines Clerk authentication, PostgreSQL, Drizzle ORM and ImageKit to deliver a secure cloud storage experience. Files are uploaded through ImageKit while metadata is managed within PostgreSQL, allowing efficient organization, searching and retrieval without compromising performance.",

  features: [
    "Secure Authentication",
    "File Uploads",
    "Folder Management",
    "File Search",
    "Image Optimization",
    "Responsive Dashboard",
  ],

  architecture: {
    title: "Cloud Storage Architecture",

    description:
      "The application separates file storage from application data. ImageKit handles media storage and optimization while PostgreSQL stores metadata and folder structures. Clerk manages authentication and authorization, allowing the frontend to remain focused on delivering a responsive user experience.",

    diagram: "/projects/arkive/architecture.png",
  },

  techStack: [
    {
      category: "Frontend",
      items: [
        "Next.js",
        "React",
        "TailwindCSS",
      ],
    },

    {
      category: "Backend",
      items: [
        "Next.js Server Actions",
        "Drizzle ORM",
      ],
    },

    {
      category: "Database",
      items: [
        "PostgreSQL",
      ],
    },

    {
      category: "Authentication",
      items: [
        "Clerk",
      ],
    },

    {
      category: "Cloud Storage",
      items: [
        "ImageKit",
      ],
    },

    {
      category: "Deployment",
      items: [
        "Vercel",
      ],
    },
  ],

  engineeringDecisions: [
    {
      title: "Why Clerk?",

      description:
        "Authentication is a critical part of any cloud storage platform. Clerk provided production-ready authentication with user management, session handling and route protection while significantly reducing development complexity.",
    },

    {
      title: "Why Drizzle ORM with PostgreSQL?",

      description:
        "File metadata benefits from a relational database where folders, ownership and relationships can be modeled efficiently. Drizzle provides end-to-end type safety while keeping database queries straightforward and maintainable.",
    },

    {
      title: "Why ImageKit Instead of Local Storage?",

      description:
        "Separating media storage from the application simplifies deployment and provides optimized image delivery, CDN support and transformation capabilities without requiring additional infrastructure.",

    },

    {
      title: "Metadata Separate from File Storage",

      description:
        "Rather than storing everything together, Arkive stores only metadata inside PostgreSQL while delegating media storage to ImageKit. This separation keeps the application scalable and easier to maintain.",
    },
  ],

  challenges: [
    "Designing folder relationships within a relational database.",
    "Synchronizing uploaded files with stored metadata.",
    "Managing secure file access.",
    "Keeping the dashboard responsive while rendering large numbers of files.",
    "Designing a clean navigation experience for nested content.",
  ],

  lessons: [
    "Separating storage concerns greatly simplifies application architecture.",
    "Authentication should be considered early when designing cloud applications.",
    "Type-safe database access reduces development errors.",
    "Good file organization is primarily a UX challenge rather than a technical one.",
    "Cloud services such as ImageKit allow developers to focus on product functionality instead of infrastructure management.",
  ],

  futureImprovements: [
  {
    title: "Shared Workspaces",
    description:
      "Allow users to create collaborative workspaces where teams can securely manage and organize files together with shared ownership."
  },

  {
    title: "Role-Based Access Control",
    description:
      "Introduce granular permissions such as Owner, Editor and Viewer to enable secure collaboration while protecting sensitive files."
  },

  {
    title: "File Version History",
    description:
      "Maintain previous versions of uploaded files, allowing users to restore older revisions and track document changes over time."
  },

  {
    title: "Background Upload Pipeline",
    description:
      "Move uploads to background workers with resumable transfers, progress tracking and retry mechanisms for large files."
  },

  {
    title: "AI Semantic Search",
    description:
      "Index file names, metadata and document contents using embeddings to enable natural language search instead of relying solely on keywords."
  },

  {
    title: "Observability & Monitoring",
    description:
      "Integrate OpenTelemetry, Prometheus and centralized logging to monitor uploads, API performance and storage operations in production."
  }
],
};