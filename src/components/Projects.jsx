"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const projects = [
  {
    title: "EchoVault",
    description:
      "An anonymous feedback platform designed to foster open communication and collaboration. It allows users to send and receive anonymous messages, leveraging AI-generated suggestions to enhance engagement.",
    image: "/EchoVault.png",
    tags: ["Nextjs", "Authjs", "TailwindCSS", "MongoDB"],
    github: "https://github.com/Leonardo1903/EchoVault",
    demo: "https://echovault.leonardo1903.me/",
  },
  {
    title: "QuikNote",
    description:
      "A full-stack sticky notes application designed to provide users with a seamless and intuitive note-taking experience. It allows users to securely authenticate, create, organize, and manage their notes with advanced features like drag-and-drop functionality and personalized dashboards.",
    image: "/QuikNote.png",
    tags: ["React.Js", "TailwindCSS", "Appwrite", "Framer Motion"],
    github: "https://github.com/Leonardo1903/QuikNote",
    demo: "https://quiknote.leonardo1903.me/",
  },
  {
    title: "Concise",
    description:
      "A web application and Chrome extension designed to help users quickly summarize articles by providing a URL. It streamlines the process of extracting key information from lengthy articles, making content consumption more efficient and accessible.",
    image: "/Concise.png",
    tags: ["React", "TailwindCSS", "Redux", "Shadcn-UI"],
    github: "https://github.com/Leonardo1903/Concise",
    demo: "https://concise.leonardo1903.me/",
  },
  {
    title: "ClipIt",
    description:
      "A full-stack URL shortener application designed to simplify the process of creating, managing, and analyzing shortened URLs. It provides a user-friendly interface for generating short links, sharing them, and tracking their performance through detailed analytics.",
    image: "/ClipIt.png",
    tags: ["ReactJs", "TailwindCSS", "Supabase", "Shadcn-UI"],
    github: "https://github.com/Leonardo1903/ClipIt",
    demo: "https://clipit.leonardo1903.me/",
  },
  // {
  //   title: "PropertyPulse",
  //   description:
  //     "A collaborative task management application with real-time updates, team workspaces, and productivity analytics.",
  //   image: "/placeholder.svg?height=600&width=800",
  //   tags: ["React", "Firebase", "TailwindCSS", "Redux"],
  //   github: "https://github.com/username/task-management",
  //   demo: "https://tasks.example.com",
  // },
  // {
  //   title: "Portfolio Website",
  //   description:
  //     "A modern, responsive portfolio website showcasing projects and skills with animations and interactive elements.",
  //   image: "/placeholder.svg?height=600&width=800",
  //   tags: ["Next.js", "Framer Motion", "TailwindCSS", "Vercel"],
  //   github: "https://github.com/username/portfolio",
  //   demo: "https://portfolio.example.com",
  // },
];

export default function Projects() {
  return (
    <div className="w-full min-h-screen bg-[#09090C] py-16 px-4 md:px-8 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl" />
        <div className="absolute top-1/4 left-1/3 w-1/2 h-1/3 bg-gradient-to-r from-red-400/20 via-orange-400/10 to-amber-400/10 blur-3xl rounded-full opacity-40" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/4 bg-gradient-to-tl from-amber-400/15 to-transparent blur-2xl rounded-full opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent"
          >
            My Projects
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-24 h-1 bg-gradient-to-r from-red-500 to-amber-500 mx-auto mb-8 rounded-full"
          />
          <motion.p
            variants={fadeIn}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Here are some of my recent projects that showcase my skills and
            expertise in various technologies.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-white/10 hover:border-red-400/50 transition-all duration-300 hover:shadow-red-400/20 hover:shadow-lg group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-black/30 text-gray-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-300 hover:text-red-400 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-300 hover:text-red-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
