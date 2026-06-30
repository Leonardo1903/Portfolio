"use client";

import { motion } from "framer-motion";
import ExperienceCard from "@/components/ExperienceCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Container from "@/components/ui/Container";

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
}

interface ExperienceProps {
  experiences: ExperienceItem[];
  education: EducationItem[];
}

const fadeIn = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const staggerContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Experience({
  experiences,
  education,
}: ExperienceProps) {
  return (
    <section className="relative z-10 py-24">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            Journey & Experience
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            My Journey So Far
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-zinc-400">
            The experiences and education that have shaped my journey as a
            software engineer and product builder.
          </p>
        </motion.div>

        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="mx-auto mb-10 flex justify-center gap-2 bg-white/5 backdrop-blur-xl">
            <TabsTrigger
              value="experience"
              className="
                rounded-lg
                bg-white/10
                px-6
                py-2
                text-lg
                font-semibold
                text-white
                transition
                backdrop-blur-md
                data-[state=active]:bg-gradient-to-r
                data-[state=active]:from-red-400
                data-[state=active]:via-orange-400
                data-[state=active]:to-amber-400
                data-[state=active]:bg-clip-text
                data-[state=active]:text-transparent
              "
            >
              Professional Experience
            </TabsTrigger>

            <TabsTrigger
              value="education"
              className="
                rounded-lg
                bg-white/10
                px-6
                py-2
                text-lg
                font-semibold
                text-white
                transition
                backdrop-blur-md
                data-[state=active]:bg-gradient-to-r
                data-[state=active]:from-red-400
                data-[state=active]:via-orange-400
                data-[state=active]:to-amber-400
                data-[state=active]:bg-clip-text
                data-[state=active]:text-transparent
              "
            >
              Education
            </TabsTrigger>
          </TabsList>

          {/* EXPERIENCE */}

          <TabsContent value="experience">
            <div className="relative">
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  top-0
                  w-px
                  bg-gradient-to-b
                  from-red-500
                  via-orange-500
                  to-amber-500
                  md:left-1/2
                  md:-translate-x-1/2
                "
              />

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="relative z-10"
              >
                {experiences.map((experience, index) => (
                  <ExperienceCard
                    key={`${experience.company}-${index}`}
                    exp={experience}
                    fadeIn={fadeIn}
                    index={index}
                    align={index % 2 === 0 ? "right" : "left"}
                  />
                ))}
              </motion.div>
            </div>
          </TabsContent>

          {/* EDUCATION */}

          <TabsContent value="education">
            <div className="relative">
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  top-0
                  w-px
                  bg-gradient-to-b
                  from-red-500
                  via-orange-500
                  to-amber-500
                  md:left-1/2
                  md:-translate-x-1/2
                "
              />

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="relative z-10"
              >
                {education.map((item, index) => (
                  <ExperienceCard
                    key={`${item.school}-${index}`}
                    exp={{
                      title: item.degree,
                      company: item.school,
                      location: item.location,
                      period: item.period,
                      description: item.description,
                      achievements: item.achievements,
                    }}
                    fadeIn={fadeIn}
                    index={index}
                    align={index % 2 === 0 ? "left" : "right"}
                  />
                ))}
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </Container>
    </section>
  );
}