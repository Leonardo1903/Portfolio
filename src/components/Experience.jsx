"use client";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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
      staggerChildren: 0.2,
    },
  },
};

const experiences = [
  {
    title: "Senior Full Stack Engineer",
    company: "TechNova Solutions",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Leading the development of a next-generation SaaS platform using Next.js, TypeScript, and AWS. Implemented CI/CD pipelines and mentored junior developers.",
    achievements: [
      "Reduced page load time by 40% through performance optimizations",
      "Implemented a microservices architecture that improved scalability",
      "Led a team of 5 developers to deliver projects on time and within budget",
    ],
  },
];

const education = [
  {
    degree: "Int Mtech in Computer Science Specialization in Cyber Security",
    school: "Vellore Institute of Technology",
    location: "Bhopal, Madhya Pradesh",
    period: "2022 - 2027",
    description:
      "Focused on software engineering, algorithms, and distributed systems. Graduated with honors.",
    achievements: [
      "Dean’s List all semesters",
      "President of the Coding Club",
      "Capstone project on scalable web architectures",
    ],
  },
];

export default function Experience() {
  return (
    <div className="w-full min-h-screen bg-[#09090C] py-16 px-4 md:px-8 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl" />
        <div className="absolute top-1/3 left-1/4 w-1/2 h-1/3 bg-gradient-to-r from-red-400/20 via-orange-400/10 to-amber-400/10 blur-3xl rounded-full opacity-40" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/4 bg-gradient-to-tl from-amber-400/15 to-transparent blur-2xl rounded-full opacity-20" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
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
            Experience & Education
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-24 h-1 bg-gradient-to-r from-red-500 to-amber-500 mx-auto mb-8 rounded-full"
          />
        </motion.div>

        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="mx-auto mb-8 flex justify-center gap-2 bg-white/5 backdrop-blur-xl">
            <TabsTrigger
              value="experience"
              className="text-lg font-semibold px-6 py-2 rounded-lg transition
      bg-white/10 backdrop-blur-md text-white
      data-[state=active]:bg-white/20
      data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-400 data-[state=active]:via-orange-400 data-[state=active]:to-amber-400
      data-[state=active]:bg-clip-text data-[state=active]:text-transparent
      focus:outline-none"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="text-lg font-semibold px-6 py-2 rounded-lg transition
      bg-white/10 backdrop-blur-md text-white
      data-[state=active]:bg-white/20
      data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-400 data-[state=active]:via-orange-400 data-[state=active]:to-amber-400
      data-[state=active]:bg-clip-text data-[state=active]:text-transparent
      focus:outline-none"
            >
              Education
            </TabsTrigger>
          </TabsList>
          <TabsContent value="experience">
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-500 via-orange-500 to-amber-500 transform md:translate-x-[-50%] z-0"></div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="relative z-10"
              >
                {experiences.map((exp, index) => (
                  <ExperienceCard
                    key={index}
                    exp={exp}
                    fadeIn={fadeIn}
                    index={index}
                  />
                ))}
              </motion.div>
            </div>
          </TabsContent>
          <TabsContent value="education">
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-500 via-orange-500 to-amber-500 transform md:translate-x-[-50%] z-0"></div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="relative z-10"
              >
                {education.map((edu, index) => (
                  <ExperienceCard
                    key={index}
                    exp={{
                      title: edu.degree,
                      company: edu.school,
                      location: edu.location,
                      period: edu.period,
                      description: edu.description,
                      achievements: edu.achievements,
                    }}
                    fadeIn={fadeIn}
                    index={index}
                  />
                ))}
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
