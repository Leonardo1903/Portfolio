import type {Project} from "@/types/projects";

export const quiknote: Project = {
  slug: "quiknote",

  featured: false,

  status: "Production",

  title: "QuikNote",

  category: "Web Development",

  tagline:
    "A modern note-taking application focused on simplicity, organization and productivity.",

  description:
    "QuikNote is a modern note-taking application that enables users to create, organize and manage notes across multiple notebooks. It focuses on providing a clean writing experience while offering practical productivity features such as favorites and trash recovery.",

  image: "/projects/quiknote.png",

  github: "https://github.com/Leonardo1903/QuikNote",

  live: "https://quiknote.leonardo1903.me",

  technologies: [
    "React.js",
    "Vite",
    "TailwindCSS",
    "Appwrite",
  ],

  overview:
    "QuikNote was built to explore what a modern note-taking application should feel like. Rather than simply creating CRUD functionality, the focus was on designing a responsive user experience with intuitive organization, fast interactions and clean information architecture.",

  problem:
    "Many simple note-taking applications become difficult to manage as the number of notes increases. Users need better organization, quick access to important notes and a safe way to recover accidentally deleted content.",

  goals: [
    "Create a distraction-free writing experience.",
    "Organize notes into notebooks.",
    "Allow users to quickly access important notes.",
    "Implement soft deletion with trash recovery.",
    "Build a responsive interface for desktop and mobile devices.",
  ],

  solution:
    "QuikNote combines notebook-based organization with features such as favorites, trash recovery and a clean interface to provide a more structured note-taking workflow. Appwrite handles authentication and backend services while React provides a fast and responsive frontend experience.",

  features: [
    "Authentication",
    "Notebook Management",
    "Rich Note Editor",
    "Favorites",
    "Trash Recovery",
    "Responsive UI",
  ],

  architecture: {
    title: "Client-First Architecture",

    description:
      "The application uses React with Vite for a lightweight frontend while Appwrite provides authentication, database operations and backend services. This approach reduced backend complexity while allowing focus on frontend experience.",
  },

  techStack: [
    {
      category: "Frontend",
      items: [
        "React.js",
        "Vite",
        "TailwindCSS",
      ],
    },

    {
      category: "Backend",
      items: [
        "Appwrite",
      ],
    },

    {
      category: "Authentication",
      items: [
        "Appwrite Auth",
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
      title: "Why React + Vite?",

      description:
        "Vite provides an extremely fast development experience with instant hot module replacement, making it ideal for rapidly iterating on frontend features while keeping the build lightweight.",
    },

    {
      title: "Why Appwrite?",

      description:
        "Appwrite provided authentication, database and backend services out of the box, allowing development to focus on user experience rather than backend infrastructure.",
    },

    {
      title: "Soft Delete Instead of Permanent Delete",

      description:
        "Rather than permanently deleting notes immediately, deleted notes are moved to a trash section, allowing accidental deletions to be recovered without data loss.",
    },

    {
      title: "Notebook-Based Organization",

      description:
        "Grouping notes into notebooks provides a scalable organization system as the number of notes grows while keeping navigation intuitive.",
    },
  ],

  challenges: [
    "Designing an intuitive notebook hierarchy.",
    "Managing application state across notebooks and notes.",
    "Implementing trash recovery without duplicating data.",
    "Maintaining a responsive interface across different screen sizes.",
  ],

  lessons: [
    "Good user experience depends more on thoughtful interactions than on adding numerous features.",
    "Simple organizational patterns significantly improve usability.",
    "State management becomes increasingly important as application complexity grows.",
    "Backend-as-a-Service platforms can accelerate development for product-focused applications.",
  ],

futureImprovements: [
  {
    title: "Markdown & Rich Text Editor",
    description:
      "Support Markdown syntax alongside a rich text editor, allowing users to create well-structured technical documentation, meeting notes and personal knowledge bases."
  },

  {
    title: "Offline-First Experience",
    description:
      "Implement local caching and background synchronization so users can continue creating and editing notes even without an internet connection."
  },

  {
    title: "Real-Time Collaboration",
    description:
      "Enable multiple users to edit notes simultaneously with live cursors, conflict resolution and collaborative workspaces."
  },

  {
    title: "AI-Powered Knowledge Search",
    description:
      "Introduce semantic search using vector embeddings, allowing users to find notes through natural language queries instead of relying solely on keyword matching."
  },

  {
    title: "Version History",
    description:
      "Track changes made to notes over time, allowing users to review previous revisions and restore earlier versions whenever required."
  },

  {
    title: "Observability & Performance Monitoring",
    description:
      "Integrate OpenTelemetry, Prometheus and structured logging to monitor frontend performance, backend requests and application reliability in production."
  }
],
};