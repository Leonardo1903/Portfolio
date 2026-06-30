import type {Project} from "@/types/projects";

export const echovault: Project = {
  slug: "echovault",

  featured: false,

  status: "Production",

  title: "EchoVault",

  category: "Web Development",

  tagline:
    "An anonymous feedback platform designed to encourage honest communication through AI-powered assistance.",

  description:
    "EchoVault is an anonymous feedback platform that enables individuals and teams to communicate openly in a safe environment. By combining anonymous messaging with AI-generated suggestions, it encourages constructive conversations while maintaining user privacy.",

  image: "/projects/echovault.png",

  github: "https://github.com/Leonardo1903/EchoVault",

  live: "https://echovault.leonardo1903.me",

  technologies: [
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "MongoDB",
    "Auth.js",
    "Google Gemini API",
  ],

  overview:
    "EchoVault was built to explore how AI can improve digital communication rather than replace it. The platform allows users to send anonymous feedback while providing AI-generated message suggestions that encourage respectful, constructive and meaningful conversations.",

  problem:
    "People often hesitate to provide honest feedback because they fear judgment or confrontation. Existing anonymous feedback tools typically offer limited user experience and lack guidance for writing constructive messages.",

  goals: [
    "Enable completely anonymous messaging.",
    "Create a clean and intuitive user experience.",
    "Integrate AI to improve message quality.",
    "Provide secure authentication for message recipients.",
    "Build a responsive application accessible across devices.",
  ],

  solution:
    "EchoVault combines anonymous messaging with AI-generated suggestions to make communication easier and more thoughtful. Users can generate message ideas with AI while maintaining complete anonymity, creating a safer environment for honest conversations.",

  features: [
    "Anonymous Messaging",
    "AI Message Suggestions",
    "Authentication",
    "Personal Dashboard",
    "Unique Public Profile",
    "Responsive Design",
  ],

  architecture: {
    title: "Modern Full-Stack Architecture",

    description:
      "The application uses Next.js as a full-stack framework with server actions and API routes. MongoDB stores user and message data, while Auth.js manages authentication. AI-generated suggestions are produced using the Google Gemini API and returned to the client in real time.",
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
        "Next.js API Routes",
      ],
    },

    {
      category: "Database",
      items: [
        "MongoDB",
        "Mongoose",
      ],
    },

    {
      category: "Authentication",
      items: [
        "Auth.js",
      ],
    },

    {
      category: "Artificial Intelligence",
      items: [
        "Google Gemini API",
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
      title: "Why Next.js?",

      description:
        "Next.js provided a unified full-stack development experience, allowing frontend components, API routes and deployment to exist within a single framework while simplifying project structure.",
    },

    {
      title: "Why MongoDB?",

      description:
        "The application's data model consists primarily of users and messages with flexible relationships, making MongoDB a natural fit for rapid development and iterative schema evolution.",
    },

    {
      title: "Why Auth.js?",

      description:
        "Authentication was separated from anonymous messaging so that message recipients remain authenticated while senders can communicate anonymously without exposing personal information.",
    },

    {
      title: "AI as an Assistant Instead of an Author",

      description:
        "Instead of automatically generating complete messages, AI provides suggestions that users can modify. This keeps users in control while encouraging more constructive communication.",
    },
  ],

  challenges: [
    "Balancing anonymity with platform security.",
    "Designing a clean messaging workflow.",
    "Integrating AI responses without slowing the user experience.",
    "Managing authentication separately from anonymous interactions.",
    "Handling prompt engineering for useful AI-generated suggestions.",
  ],

  lessons: [
    "AI features should enhance user workflows rather than replace user decisions.",
    "Thoughtful UX design is just as important as technical implementation.",
    "Authentication and anonymity can coexist when responsibilities are clearly separated.",
    "Prompt engineering requires continuous iteration to improve output quality.",
    "Building AI-powered products involves designing around user trust as much as model capabilities.",
  ],

  futureImprovements: [
  {
    title: "Conversation Threads",
    description:
      "Allow recipients to respond anonymously and organize messages into threaded conversations, enabling meaningful two-way discussions while preserving privacy."
  },

  {
    title: "AI Sentiment & Toxicity Analysis",
    description:
      "Analyze incoming messages for sentiment and potentially harmful content, helping recipients prioritize feedback while maintaining a healthy communication environment."
  },

  {
    title: "Custom AI Writing Personas",
    description:
      "Provide multiple AI writing styles such as professional, constructive, empathetic and concise, allowing users to tailor message suggestions to different contexts."
  },

  {
    title: "Content Moderation Pipeline",
    description:
      "Introduce automated moderation using AI and rule-based validation to detect spam, abusive language and malicious content before delivery."
  },

  {
    title: "Team Workspaces",
    description:
      "Enable organizations to create private workspaces where employees can exchange anonymous feedback with structured access control and shared administration."
  },

  {
    title: "Observability & AI Analytics",
    description:
      "Integrate OpenTelemetry, Prometheus and structured logging to monitor API performance, AI response times, message delivery metrics and overall system health."
  }
],
};