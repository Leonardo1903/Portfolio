"use client";
import { motion } from "framer-motion";
import { Code, Cpu, Database, Globe, Layers, Palette } from "lucide-react";
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

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="w-6 h-6 text-amber-400" />,
    skills: ["JavaScript/TypeScript", "C++", "Python", "Solidity", "Rust"],
  },
  {
    title: "Frontend",
    icon: <Palette className="w-6 h-6 text-red-400" />,
    skills: ["React", "Next.js", "Redux", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: <Database className="w-6 h-6 text-orange-400" />,
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Appwrite"],
  },
  {
    title: "DevOps",
    icon: <Layers className="w-6 h-6 text-orange-400" />,
    skills: ["Docker", "AWS", "Terraform", "Kubernetes", "GitHub Actions"],
  },
  {
    title: "Web3",
    icon: <Globe className="w-6 h-6 text-amber-400" />,
    skills: ["Ethereum", "Solana", "Hardhat", "Foundry", "Anchor"],
  },
  {
    title: "AI-Agents",
    icon: <Cpu className="w-6 h-6 text-red-400" />,
    skills: [
      "OpenAI/Gemini API",
      "LangChain",
      "Langraph",
      "Langsmith",
      "QuadrantDB",
    ],
  },
];

export default function About() {
  return (
    <div className="w-full min-h-screen bg-[#09090C] py-16 px-4 md:px-8 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl" />
        <div className="absolute top-1/4 right-1/4 w-1/2 h-1/3 bg-gradient-to-r from-red-400/20 via-orange-400/10 to-amber-400/10 blur-3xl rounded-full opacity-40" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/4 bg-gradient-to-tr from-amber-400/15 to-transparent blur-2xl rounded-full opacity-20" />
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
            About Me
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-24 h-1 bg-gradient-to-r from-red-500 to-amber-500 mx-auto mb-8 rounded-full"
          />
        </motion.div>

        <div className="flex flex-col items-center justify-center mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/10 max-w-2xl w-full text-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Who I Am</h3>
            <p className="text-gray-300 mb-4">
              I'm a passionate Full Stack Engineer with expertise in modern web
              technologies, Web3, and AI development. With a strong foundation
              in both frontend and backend development, I create seamless,
              user-centric applications that solve real-world problems.
            </p>
            <p className="text-gray-300 mb-4">
              My journey in software development began 5 years ago, and since
              then, I've worked on a diverse range of projects from e-commerce
              platforms to decentralized applications. I'm constantly exploring
              new technologies and methodologies to enhance my skill set.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you can find me contributing to open-source
              projects, writing technical articles, or exploring the latest
              advancements in blockchain and artificial intelligence.
            </p>
          </motion.div>
        </div>

        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-2xl md:text-3xl font-semibold text-white mb-10 text-center"
        >
          My Skills
        </motion.h3>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/10 hover:border-red-400/50 transition-all duration-300 hover:shadow-red-400/20 hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-black/30 mr-4">
                  {category.icon}
                </div>
                <h4 className="text-xl font-semibold text-white">
                  {category.title}
                </h4>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-red-400 to-amber-400 mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
