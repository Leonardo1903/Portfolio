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
    title: "QuikNote",
    description:
      "A modern note-taking platform designed for effortless organization and productivity. It allows users to create, organize, and manage notes across multiple notebooks with favorites, and trash recovery",
    image: "/QuikNote.png",
    tags: ["React.js", "Appwrite", "TailwindCSS", "Vite"],
    github: "https://github.com/Leonardo1903/QuikNote",
    demo: "https://quiknote.leonardo1903.me/",
  },
  {
    title: "EchoVault",
    description:
      "An anonymous feedback platform designed to foster open communication and collaboration. It allows users to send and receive anonymous messages, leveraging AI-generated suggestions.",
    image: "/EchoVault.png",
    tags: ["Next.js", "Auth.js", "TailwindCSS", "MongoDB"],
    github: "https://github.com/Leonardo1903/EchoVault",
    demo: "https://echovault.leonardo1903.me/",
  },
  {
    title: "Arkive",
    description:
      "A secure cloud storage platform for managing, organizing, and sharing files effortlessly. Features intelligent file management, folder organization, advanced search, and seamless collaboration.",
    image: "/Arkive.png",
    tags: [
      "Next.js",
      "TailwindCSS",
      "Clerk",
      "Drizzle ORM",
      "PostgreSQL",
      "ImageKit",
    ],
    github: "https://github.com/Leonardo1903/Arkive",
    demo: "https://arkive.leonardo1903.me/",
  },
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
              className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-white/10 hover:border-red-400/50 transition-all duration-300 hover:shadow-red-400/20 hover:shadow-lg group flex flex-col h-full"
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

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 min-h-[60px] content-start">
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
