"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Badge } from "@/components/ui/badge";
import { Brain, Boxes, Rocket } from "lucide-react";

const technologies = [
  "TypeScript",
  "Python",
  "Next.js",
  "React",
  "Node.js",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Redis",
  "LangGraph",
  "Qdrant",
  "TailwindCSS",
  "React Native",
];

const focusAreas = [
  {
    title: "SaaS Products",
    icon: <Rocket className="w-6 h-6 text-orange-400" />,
    description:
      "Building scalable applications, multi-tenant platforms and developer tools.",
  },
  {
    title: "AI Systems",
    icon: <Brain className="w-6 h-6 text-orange-400" />,
    description: "Building with LLMs, RAG pipelines and agentic workflows.",
  },
  {
    title: "Backend Systems",
    icon: <Boxes className="w-6 h-6 text-orange-400" />,
    description:
      "Designing scalable services, APIs and distributed architectures.",
  },
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#09090C] py-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl" />

        <div className="absolute right-1/4 top-1/4 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-red-500/10 blur-[120px]" />
      </div>

      <Container>
        <div className="relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
              About
            </p>

            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              Building software that scales
              <br />
              from idea to production.
            </h2>

            <div className="mx-auto mt-8 max-w-3xl">
              <p className="text-lg leading-relaxed text-zinc-400">
                I build software across the stack—from modern user experiences
                to scalable backend systems. My interests lie at the
                intersection of SaaS, AI systems and backend architecture, where
                product thinking meets engineering execution.
              </p>
            </div>
          </motion.div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {focusAreas.map((area) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="
        flex
        flex-col
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        p-8
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-orange-500/30
        hover:bg-white/[0.07]
      "
              >
                <div className="mb-5 flex items-center gap-3">
                  {area.icon}

                  <h3 className="text-xl font-bold leading-tight text-white">
                    {area.title}
                  </h3>
                </div>

                <p className="leading-relaxed text-zinc-400">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h3 className="mb-8 text-center text-2xl font-bold text-white">
              Toolbox
            </h3>

            <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="
                    border-white/10
                    bg-white/5
                    px-4
                    py-2
                    text-zinc-300
                    transition-all
                    duration-300
                    hover:border-orange-500/30
                    hover:bg-white/10
                  "
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
