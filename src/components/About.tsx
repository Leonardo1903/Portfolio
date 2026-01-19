"use client";
import { motion } from "framer-motion";
import {
  Code,
  Cpu,
  Database,
  Layers,
  Palette,
  ChevronRight,
} from "lucide-react";
import content from "../../public/Data.json";

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
      staggerChildren: 0.08,
    },
  },
};

interface Skill {
  name: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: content.about.skills.core.title,
    icon: <Code className="w-6 h-6 text-amber-400" />,
    skills: content.about.skills.core.skills.map((skill) => ({ name: skill })),
  },
  {
    title: content.about.skills.frontend.title,
    icon: <Palette className="w-6 h-6 text-red-400" />,
    skills: content.about.skills.frontend.skills.map((skill) => ({
      name: skill,
    })),
  },
  {
    title: content.about.skills.backend.title,
    icon: <Database className="w-6 h-6 text-orange-400" />,
    skills: content.about.skills.backend.skills.map((skill) => ({
      name: skill,
    })),
  },
  {
    title: content.about.skills.devops.title,
    icon: <Layers className="w-6 h-6 text-orange-400" />,
    skills: content.about.skills.devops.skills.map((skill) => ({
      name: skill,
    })),
  },
  {
    title: content.about.skills.others.title,
    icon: <Cpu className="w-6 h-6 text-amber-400" />,
    skills: content.about.skills.others.skills.map((skill) => ({
      name: skill,
    })),
  },
];

export default function About() {
  return (
    <div className="w-full min-h-screen bg-[#09090C] py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl" />
        <div className="absolute top-1/4 right-1/4 w-1/2 h-1/3 bg-gradient-to-r from-red-400/20 via-orange-400/10 to-amber-400/10 blur-3xl rounded-full opacity-40" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/4 bg-gradient-to-tr from-amber-400/15 to-transparent blur-2xl rounded-full opacity-20" />
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
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
            {content.about.title}
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
            <p className="text-gray-300 text-justify">{content.about.bio}</p>
          </motion.div>
        </div>

        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-2xl md:text-3xl font-semibold text-white mb-10 text-center"
        >
          My Skills & Technologies
        </motion.h3>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-white/10"
            >
              <div className="flex items-center mb-4 pb-3 border-b border-white/10">
                <div className="p-2 rounded-full bg-gradient-to-br from-red-500/20 to-amber-500/20 mr-3">
                  {category.icon}
                </div>
                <h4 className="text-lg font-semibold text-white">
                  {category.title}
                </h4>
              </div>

              <motion.div variants={staggerContainer} className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center group cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-red-400 mr-2" />
                    <span className="text-gray-300 font-medium text-sm">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
