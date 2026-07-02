"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

import { getAllProjects, getFeaturedProject } from "@/lib/projects";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const hero = {
  label: "Projects",
  title: "Building software,\n from idea to \nproduction.",
  description: `
Every project starts with a problem worth solving. I enjoy designing,
building and shipping production-ready software—from SaaS products and
AI-powered applications to developer tools and mobile experiences.

Below are some of the products I've built, the engineering decisions
behind them and the technologies that power them.
`,
};

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const featuredProject = getFeaturedProject();

  if (!featuredProject) {
    return null;
  }
  const projects = getAllProjects();

  const projectCategories = useMemo(
    () => ["All", ...new Set(projects.map((project) => project.category))],
    [],
  );

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090C]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl" />

        <div className="absolute left-1/4 top-40 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-500/10 blur-[140px]" />
      </div>
      <section className="relative z-10 py-28">
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-5xl"
          >
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-orange-400">
              {hero.label}
            </p>

            <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl whitespace-pre-line">
              {hero.title}
            </h1>

            <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-zinc-400">
              <p>
                Every project starts with a problem worth solving. I enjoy
                designing, building and shipping production-ready software—from
                SaaS products and AI-powered applications to developer tools and
                mobile experiences.
              </p>

              <p>
                Below are some of the products I've built, the engineering
                decisions behind them and the technologies that power them.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="https://github.com/Leonardo1903"
                target="_blank"
                className="
            rounded-xl
            bg-gradient-to-r
            from-red-500
            to-orange-500
            px-7
            py-3
            font-medium
            text-white
            transition-all
            duration-300
            hover:scale-105
          "
              >
                View GitHub
              </Link>

              <Link
                href="/resume.pdf"
                target="_blank"
                className="
            rounded-xl
            border
            border-white/10
            px-7
            py-3
            font-medium
            text-white
            transition-all
            duration-300
            hover:border-orange-500/30
            hover:bg-white/5
          "
              >
                Download Resume
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="relative py-28">
        <Container>
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <span
              className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.35em]
          text-orange-400
        "
            >
              Featured Project
            </span>

            <h2
              className="
          mt-5
          text-5xl
          font-bold
          tracking-tight
          text-white
        "
            >
              Building Production Software
            </h2>

            <p
              className="
          mx-auto
          mt-6
          max-w-2xl
          text-lg
          leading-8
          text-zinc-400
        "
            >
              Every product begins with a real problem, evolves through
              countless engineering decisions and ends as production-ready
              software. Here's one project I'm particularly proud of.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="
        relative

        overflow-hidden

        rounded-[32px]

        border
        border-white/10

        bg-gradient-to-br
        from-white/[0.03]
        via-white/[0.015]
        to-transparent

        p-8

        lg:p-12
      "
          >
            {/* Ambient Glow */}

            <div
              className="
          absolute
          -right-24
          -top-24

          h-80
          w-80

          rounded-full

          bg-orange-500/10

          blur-[120px]
        "
            />

            <div
              className="
          relative

          grid

          items-center

          gap-20

          lg:grid-cols-[0.9fr_1.1fr]
        "
            >
              <div>
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

              tracking-[0.25em]

              text-orange-300
            "
                >
                  {featuredProject.status}
                </span>

                <p
                  className="
              mt-8

              text-xs

              uppercase

              tracking-[0.3em]

              text-orange-400
            "
                >
                  {featuredProject.category}
                </p>

                <h3
                  className="
              mt-4

              text-5xl

              font-bold

              leading-tight

              tracking-tight

              text-white
            "
                >
                  {featuredProject.title}
                </h3>

                <p
                  className="
              mt-6

              text-xl

              leading-9

              text-zinc-300
            "
                >
                  {featuredProject.tagline}
                </p>

                <p
                  className="
              mt-8

              max-w-xl

              text-lg

              leading-9

              text-zinc-400
            "
                >
                  {featuredProject.description}
                </p>

                {/* Technologies */}

                <div className="mt-10 flex flex-wrap gap-3">
                  {featuredProject.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                  rounded-full

                  border
                  border-white/10

                  bg-white/[0.03]

                  px-3.5
                  py-2

                  text-sm

                  text-zinc-300

                  transition

                  hover:border-orange-500/30
                "
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                {/* ========================================================== */}
                {/* Actions */}
                {/* ========================================================== */}

                <div className="mt-12 flex flex-wrap gap-4">
                  <Link
                    href={`/projects/${featuredProject.slug}`}
                    className="
                inline-flex
                items-center
                gap-3

                rounded-xl

                bg-orange-500

                px-6
                py-3.5

                font-medium

                text-white

                transition-all
                duration-300

                hover:bg-orange-400
                hover:gap-4
              "
                  >
                    View Case Study
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  {featuredProject.github && (
                    <Link
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-xl

                  border
                  border-white/10

                  bg-white/[0.03]

                  px-5
                  py-3.5

                  font-medium

                  text-zinc-300

                  transition-all
                  duration-300

                  hover:border-orange-500/40
                  hover:bg-white/[0.05]
                  hover:text-white
                "
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </Link>
                  )}

                  {featuredProject.live && (
                    <Link
                      href={featuredProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-xl

                  border
                  border-white/10

                  bg-white/[0.03]

                  px-5
                  py-3.5

                  font-medium

                  text-zinc-300

                  transition-all
                  duration-300

                  hover:border-orange-500/40
                  hover:bg-white/[0.05]
                  hover:text-white
                "
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Link>
                  )}
                </div>
                <div
                  className="
              mt-12

              flex
              flex-wrap
              items-center

              gap-10

              border-t
              border-white/10

              pt-8
            "
                >
                  <div>
                    <p
                      className="
                  text-xs

                  uppercase

                  tracking-[0.25em]

                  text-zinc-500
                "
                    >
                      Status
                    </p>

                    <p className="mt-2 font-semibold text-white">
                      {featuredProject.status}
                    </p>
                  </div>

                  <div className="h-10 w-px bg-white/10" />

                  <div>
                    <p
                      className="
                  text-xs

                  uppercase

                  tracking-[0.25em]

                  text-zinc-500
                "
                    >
                      Category
                    </p>

                    <p className="mt-2 font-semibold text-white">
                      {featuredProject.category}
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div
                  className="
              absolute

              left-1/2
              top-1/2

              h-80
              w-80

              -translate-x-1/2
              -translate-y-1/2

              rounded-full

              bg-orange-500/10

              blur-[140px]
            "
                />
                <div
                  className="
              relative

              overflow-hidden

              rounded-[32px]

              border
              border-white/10

              bg-zinc-950

              shadow-[0_35px_80px_rgba(0,0,0,0.45)]
            "
                >
                  <div
                    className="
                flex
                items-center
                justify-between

                border-b
                border-white/10

                bg-zinc-900/80

                px-5
                py-3
              "
                  >
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-400/70" />
                      <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
                      <div className="h-3 w-3 rounded-full bg-green-400/70" />
                    </div>
                    <div
                      className="
                  max-w-[280px]

                  truncate

                  rounded-full

                  border
                  border-white/10

                  bg-black/30

                  px-4
                  py-1.5

                  text-xs

                  text-zinc-500
                "
                    >
                      {featuredProject.live
                        ? new URL(featuredProject.live).hostname
                        : `projects/${featuredProject.slug}`}
                    </div>

                    <div className="w-12" />
                  </div>
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      fill
                      priority
                      className="
                  object-cover

                  transition-transform
                  duration-700

                  group-hover:scale-[1.02]
                "
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="relative py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span
              className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.35em]
          text-orange-400
        "
            >
              Project Archive
            </span>

            <h2
              className="
          mt-5
          text-5xl
          font-bold
          tracking-tight
          text-white
        "
            >
              More Things I've Built
            </h2>

            <p
              className="
          mx-auto
          mt-6
          max-w-2xl
          text-lg
          leading-8
          text-zinc-400
        "
            >
              From AI systems and SaaS platforms to developer tools, cloud
              infrastructure and mobile applications, each project represents a
              different engineering challenge and the lessons learned while
              building production software.
            </p>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-3">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
            rounded-full
            border
            px-5
            py-2.5
            text-sm
            font-medium
            transition-all
            duration-300

            ${
              selectedCategory === category
                ? "border-orange-500 bg-orange-500 text-white"
                : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-orange-500/40 hover:bg-white/[0.05] hover:text-white"
            }
          `}
              >
                {category}
              </button>
            ))}
          </div>

          <div
            className="
        mt-16

        flex
        flex-col

        gap-6

        border-b
        border-white/10

        pb-8

        md:flex-row
        md:items-end
        md:justify-between
      "
          >
            <div>
              <h3 className="text-3xl font-bold text-white">
                {selectedCategory === "All" ? "All Projects" : selectedCategory}
              </h3>

              <p className="mt-2 text-zinc-500">
                {filteredProjects.length}{" "}
                {filteredProjects.length === 1 ? "Project" : "Projects"}
              </p>
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div layout className="mt-4 divide-y divide-white/10">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.25 }}
                >
                  <motion.article
                    
                    className="
    group
    grid
    cursor-pointer
    items-center
    gap-8
    py-10
    transition-all
    duration-300
    lg:grid-cols-[320px_1fr]
  "
                  >
                    <div
                      className="
          relative

          overflow-hidden

          rounded-2xl

          border
          border-white/10

          bg-white/[0.03]

          shadow-lg
        "
                    >
                      <div className="relative aspect-[16/10]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="
              object-cover

              transition-transform
              duration-700

              group-hover:scale-105
            "
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500">
                        <span
                          className="
              rounded-full

              border
              border-orange-500/20

              bg-orange-500/10

              px-3
              py-1

              text-[11px]
              font-semibold

              uppercase

              tracking-[0.15em]

              text-orange-300
            "
                        >
                          {project.category}
                        </span>

                        <span>•</span>

                        <span>{project.status}</span>
                      </div>

                      <h3
                        className="
            mt-4

            text-3xl

            font-bold

            tracking-tight

            text-white

            transition-colors

            group-hover:text-orange-300
          "
                      >
                        {project.title}
                      </h3>
                      <p
                        className="
            mt-5

            max-w-3xl

            text-lg

            leading-8

            text-zinc-400

            line-clamp-2
          "
                      >
                        {project.tagline}
                      </p>
                      <div className="mt-7 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="
                rounded-full

                border
                border-white/10

                bg-white/[0.03]

                px-3
                py-1.5

                text-xs

                text-zinc-400

                transition

                group-hover:border-orange-500/30
              "
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                      <div className="mt-8 flex flex-wrap items-center gap-6">
                        <Link
                        href={`/projects/${project.slug}`}
                          className="
              inline-flex

              items-center

              gap-2

              font-medium

              text-orange-400

              transition-all
              duration-300

              group-hover:gap-3
            "
                        >
                          View Case Study
                          <ArrowRight className="h-4 w-4" />
                        </Link>

                        {project.github && (
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                inline-flex

                items-center

                gap-2

                text-sm

                text-zinc-500

                transition-colors

                hover:text-white
              "
                          >
                            <Github className="h-4 w-4" />
                            GitHub
                          </Link>
                        )}

                        {project.live && (
                          <Link
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                inline-flex

                items-center

                gap-2

                text-sm

                text-zinc-500

                transition-colors

                hover:text-white
              "
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.article>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-28 text-center"
            >
              <h3 className="text-3xl font-bold text-white">
                No Projects Found
              </h3>

              <p
                className="
            mx-auto
            mt-5
            max-w-xl

            text-lg
            leading-8

            text-zinc-500
          "
              >
                There aren't any projects in this category yet. Try selecting
                another category.
              </p>
            </motion.div>
          )}
        </Container>
      </section>

      <section className="relative z-10 py-28">
        <Container>
          <div
            className="
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.04]
        px-10
        py-20
        text-center
      "
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
              Beyond the Code
            </p>

            <h2 className="text-5xl font-bold text-white">
              Engineering doesn't stop
              <br />
              when the code ships.
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
              Every project teaches something beyond the implementation. I
              document the engineering decisions, trade-offs and lessons learned
              while building production software, AI systems and developer
              tools.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link
                href="/blogs"
                className="rounded-xl bg-gradient-to-r from-red-500 to-orange-500 px-8 py-3 font-medium text-white transition hover:scale-105"
              >
                Read My Articles
              </Link>

              <Link
                href="https://github.com/Leonardo1903"
                target="_blank"
                className="rounded-xl border border-white/10 px-8 py-3 text-white transition hover:border-orange-500/30 hover:bg-white/5"
              >
                Explore GitHub
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
