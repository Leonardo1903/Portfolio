"use client";

import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Brain, Boxes, Rocket } from "lucide-react";
import Link from "next/link";
import ExperienceCard from "@/components/ExperienceCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const highlights = [
  {
    title: "Building",
    description:
      "Production-grade SaaS products, AI-powered applications and modern web & mobile experiences.",
  },
  {
    title: "Exploring",
    description:
      "Distributed systems, AI engineering, developer tooling and scalable architectures.",
  },
  {
    title: "Working Towards",
    description:
      "Building impactful products, contributing to engineering teams and eventually leading product development.",
  },
];

const focusAreas = [
  {
    title: "SaaS Products",
    icon: <Rocket className="h-6 w-6 text-orange-400" />,
    description:
      "Building production-ready applications, developer tools and multi-tenant systems.",
  },
  {
    title: "AI Systems",
    icon: <Brain className="h-6 w-6 text-orange-400" />,
    description:
      "Working with LLMs, RAG pipelines, agentic workflows and AI integrations.",
  },
  {
    title: "Backend Systems",
    icon: <Boxes className="h-6 w-6 text-orange-400" />,
    description:
      "Designing scalable APIs, distributed architectures and reliable services.",
  },
];

const principles = [
  "Product-first thinking",
  "Developer experience matters",
  "Maintainability over cleverness",
  "Ship. Learn. Improve.",
];

const experiences = [
  {
    title: "Software Development Engineer Intern",
    company: "New Opportunity (NOCPL)",
    location: "India · Onsite",
    period: "Nov 2025 – Dec 2025",
    description:
      "Worked across the software development lifecycle, contributing to planning, development, testing and documentation of production applications.",
    achievements: [
      "Contributed to feature development and application enhancements",
      "Collaborated on software testing and quality assurance processes",
      "Created technical documentation to improve maintainability and knowledge sharing",
      "Gained hands-on experience working with production software systems",
    ],
  },
  {
    title: "Software Development Engineer Intern",
    company: "myresQR.life",
    location: "India · Remote",
    period: "Nov 2024 – Feb 2025",
    description:
      "Focused on frontend engineering and user-facing experiences while contributing to multiple business-critical platforms.",
    achievements: [
      "Built and maintained the Admin Portal, Dealer Portal and Post-Scan Portal",
      "Developed user registration workflows and core website functionality",
      "Implemented state management using Recoil and API integration using Axios",
      "Enhanced UI/UX with React, TailwindCSS and ShadCN",
    ],
  },
];

const education = [
  {
    degree:
      "Integrated M.Tech in Computer Science (Cyber Security Specialization)",
    school: "VIT Bhopal University",
    location: "Bhopal, Madhya Pradesh",
    period: "2022 – 2027",
    description:
      "Pursuing an integrated master's degree focused on cybersecurity, software engineering, distributed systems and modern application development.",
    achievements: [
      "Specialization in Cyber Security & Digital Forensics",
      "Built multiple production-grade full-stack applications",
      "Actively exploring AI systems and distributed architectures",
      "Focused on software engineering, system design and product development",
    ],
  },
  {
    degree: "Higher Secondary Education (XII)",
    school: "Pace Junior Science College",
    location: "Mumbai, Maharashtra",
    period: "2020 – 2022",
    description:
      "Completed higher secondary education with a focus on science and mathematics.",
  },
  {
    degree: "Secondary Education (X)",
    school: "Vibgyor High School",
    location: "Mumbai, Maharashtra",
    period: "2010 – 2020",
    description:
      "Completed foundational schooling with an emphasis on academics, science and technology.",
  },
];

const leadership = [
  {
    title: "Technical Co-Lead",
    organization: "Blockchain Club VIT Bhopal",
    description:
      "Led technical initiatives, workshops and community learning around blockchain development, decentralized technologies and software engineering.",
  },
  {
    title: "Technical Team Member",
    organization: "AdVITya'25",
    description:
      "Contributed to the technical planning and execution of one of the university's flagship events.",
  },
];

const toolbox = {
  Frontend: [
    "TypeScript",
    "React",
    "Next.js",
    "TailwindCSS",
    "React Native",
    "Expo",
  ],

  Backend: ["Node.js", "Python", "FastAPI", "PostgreSQL", "MongoDB", "GraphQL"],

  Infrastructure: [
    "Docker",
    "AWS",
    "GitHub Actions",
    "Terraform",
    "Kubernetes",
  ],

  AI: ["LangChain", "LangGraph", "Qdrant", "CrewAI", "Vercel AI SDK"],
};

const currentFocus = [
  "AI Systems",
  "Developer Platforms",
  "SaaS Products",
  "Distributed Systems",
  "Product Engineering",
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-[#09090C]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl" />

        <div className="absolute left-1/4 top-40 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-500/10 blur-[140px]" />
      </div>

      {/* HERO */}
      <section className="relative z-10 py-28">
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-5xl"
          >
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-orange-400">
              About
            </p>

            <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Building software,
              <br />
              products and systems
              <br />
              that scale.
            </h1>

            <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-zinc-400">
              <p>
                I build production-grade SaaS products, AI-powered applications,
                mobile experiences and backend systems using TypeScript and
                Python.
              </p>

              <p>
                My interests lie at the intersection of software engineering,
                product development, distributed systems and emerging
                technologies.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

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
              AT A GLANCE
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              A Quick Snapshot
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
              I'm passionate about building production-grade software, solving
              challenging engineering problems and continuously learning through
              building.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeIn}
                className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.04]
            p-8
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-orange-500/30
            hover:-translate-y-1
          "
              >
                <h3 className="text-xl font-bold text-white">{item.title}</h3>

                <p className="mt-4 leading-relaxed text-zinc-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* JOURNEY */}
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
              The experiences, education and leadership opportunities that have
              shaped my journey as a software engineer and product builder.
            </p>
          </motion.div>
          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="mx-auto mb-10 flex justify-center gap-2 bg-white/5 backdrop-blur-xl">
              <TabsTrigger
                value="experience"
                className="
            text-lg font-semibold px-6 py-2 rounded-lg transition
            bg-white/10 backdrop-blur-md text-white
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
            text-lg font-semibold px-6 py-2 rounded-lg transition
            bg-white/10 backdrop-blur-md text-white
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
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-500 via-orange-500 to-amber-500 transform md:-translate-x-1/2" />

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="relative z-10"
                >
                  {experiences.map((exp, index) => (
                    <ExperienceCard
                      key={index}
                      exp={exp}
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
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-500 via-orange-500 to-amber-500 transform md:-translate-x-1/2" />

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
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
                      align={index % 2 === 0 ? "left" : "right"}
                    />
                  ))}
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </Container>
      </section>

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
              Leadership & Community
            </p>

            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Beyond Building Software
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-zinc-400">
              Experiences that helped me grow as a leader, collaborator and
              community contributor.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {leadership.map((item) => (
              <div
                key={item.title}
                className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.04]
            p-8
            backdrop-blur-xl
          "
              >
                <h3 className="text-xl font-bold text-white">{item.title}</h3>

                <p className="mt-2 text-orange-400">{item.organization}</p>

                <p className="mt-4 text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* WHAT I BUILD */}
      <section className="relative z-10 py-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-14"
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
              What I Build
            </p>

            <h2 className="text-3xl font-bold text-white md:text-4xl">
              What I Love Building
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {focusAreas.map((area) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="
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
                "
              >
                <div className="mb-5 flex items-center gap-3">
                  {area.icon}

                  <h3 className="text-xl font-bold text-white">{area.title}</h3>
                </div>

                <p className="leading-relaxed text-zinc-400">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative z-10 py-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        p-10
        backdrop-blur-xl
      "
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
              Engineering Philosophy
            </p>

            <h2 className="text-3xl font-bold text-white md:text-4xl">
              How I Approach Building Software
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
              I believe good software is built through iteration, thoughtful
              engineering and a deep understanding of the problem. My focus is
              on shipping reliable products that are easy to maintain, enjoyable
              to use and designed to evolve over time.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {principles.map((item) => (
                <div
                  key={item}
                  className="
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-4
              py-4
              text-zinc-300
            "
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="relative z-10 py-24">
        <Container>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            Toolbox
          </p>

          <h2 className="mb-14 text-3xl font-bold text-white md:text-4xl">
            My Technical Toolbox
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            {Object.entries(toolbox).map(([category, items]) => (
              <div key={category}>
                <h3 className="mb-5 text-xl font-semibold text-white">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-3
                  py-1.5
                  text-sm
                  text-zinc-300
                "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-28">
        <Container>
          <div className="max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-400">
              Looking Ahead
            </p>

            <h2 className="mt-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
              Building software that
              <br />
              solves meaningful problems.
            </h2>

            <div className="mt-10 grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
              <div className="space-y-6 text-lg leading-9 text-zinc-400">
                <p>
                  I'm fascinated by the intersection of engineering, product and
                  business. Beyond writing code, I enjoy understanding why
                  products succeed, how technology creates leverage and how
                  exceptional software teams build products that scale.
                </p>

                <p>
                  My long-term goal is to build production software that solves
                  meaningful problems while continuously growing as an engineer,
                  product builder and entrepreneur.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
                  Current Focus
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {currentFocus.map((item) => (
                    <span
                      key={item}
                      className="
                  rounded-full

                  border
                  border-white/10

                  px-4
                  py-2

                  text-sm
                  font-medium

                  text-zinc-300

                  transition-all
                  duration-300

                  hover:border-orange-500/30
                  hover:text-white
                "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-20 border-t border-white/10" />
          </div>
        </Container>
      </section>

      <section className="relative py-28">
        <Container>
          <div
            className="
        relative

        overflow-hidden

        rounded-[32px]

        border
        border-white/10

        bg-gradient-to-br
        from-white/[0.04]
        via-white/[0.02]
        to-transparent

        px-8
        py-20

        md:px-16
      "
          >
            <div
              className="
          pointer-events-none

          absolute
          left-1/2
          top-1/2

          h-[420px]
          w-[420px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-orange-500/10

          blur-[140px]
        "
            />

            <div className="relative mx-auto max-w-4xl text-center">
              <span
                className="
            inline-flex
            items-center

            rounded-full

            border
            border-orange-500/20

            bg-orange-500/10

            px-4
            py-2

            text-xs
            font-semibold

            uppercase

            tracking-[0.3em]

            text-orange-300
          "
              >
                Keep Exploring
              </span>

              <h2
                className="
            mt-8

            text-5xl
            font-bold

            tracking-tight

            text-white

            md:text-6xl
          "
              >
                Turning ideas into
                <br />
                production software.
              </h2>

              <p
                className="
            mx-auto

            mt-8

            max-w-3xl

            text-lg

            leading-9

            text-zinc-400
          "
              >
                Thanks for taking the time to learn about my journey. If you're
                curious about how I apply these ideas in practice, explore the
                products I've built and the engineering decisions behind them.
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <Link
                  href="/projects"
                  className="
              inline-flex
              items-center
              gap-2

              rounded-xl

              bg-gradient-to-r
              from-red-500
              to-orange-500

              px-8
              py-3.5

              font-medium

              text-white

              transition-all
              duration-300

              hover:scale-105
            "
                >
                  Explore Projects
                </Link>

                <Link
                  href="/blogs"
                  className="
              inline-flex
              items-center
              gap-2

              rounded-xl

              border
              border-white/10

              bg-white/[0.03]

              px-8
              py-3.5

              font-medium

              text-zinc-300

              transition-all
              duration-300

              hover:border-orange-500/30
              hover:bg-white/[0.05]
              hover:text-white
            "
                >
                  Read Articles
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
