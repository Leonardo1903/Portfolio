"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import { ArrowRight, ExternalLink, Github, Clock } from "lucide-react";

import Container from "@/components/ui/Container";

import { getFeaturedProjects } from "@/lib/projects";

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

const stagger = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const featuredProjects = getFeaturedProjects();

const featuredProject = featuredProjects[0];

const secondaryProjects = featuredProjects.slice(1, 3);

export default function Projects() {
  return (
    <section
      className="
        relative
        overflow-hidden

        bg-gradient-to-b
        from-black
        via-[#090909]
        to-black

        py-32
      "
    >
      {/* ---------------------------------------------------------------- */}
      {/* Background */}
      {/* ---------------------------------------------------------------- */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute

            left-1/2
            top-40

            h-[700px]
            w-[700px]

            -translate-x-1/2

            rounded-full

            bg-orange-500/8

            blur-[180px]
          "
        />

        <div
          className="
            absolute

            bottom-0
            right-0

            h-[500px]
            w-[500px]

            rounded-full

            bg-red-500/6

            blur-[180px]
          "
        />

        <div
          className="
            absolute

            left-0
            top-0

            h-[420px]
            w-[420px]

            rounded-full

            bg-orange-400/5

            blur-[160px]
          "
        />
      </div>

      <Container className="relative">
        {/* ---------------------------------------------------------------- */}
        {/* Section Header */}
        {/* ---------------------------------------------------------------- */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-20"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span
                className="
                  inline-flex
                  items-center

                  rounded-full

                  border
                  border-orange-500/20

                  bg-orange-500/5

                  px-3
                  py-1

                  text-xs
                  font-medium

                  uppercase

                  tracking-[0.3em]

                  text-orange-400
                "
              >
                Featured Work
              </span>

              <h2
                className="
                  mt-6

                  text-5xl
                  font-bold

                  tracking-tight

                  text-white

                  lg:text-6xl
                "
              >
                Building software that
                <br />
                solves real problems.
              </h2>

              <p
                className="
                  mt-8

                  max-w-2xl

                  text-lg

                  leading-9

                  text-zinc-400
                "
              >
                A collection of production-focused SaaS products, developer
                tools and AI-powered applications. Every project includes a
                detailed engineering case study documenting architecture,
                technical decisions and lessons learned throughout development.
              </p>
            </div>

            <Link
              href="/projects"
              className="
                inline-flex

                items-center

                gap-2

                text-sm
                font-medium

                text-orange-400

                transition-colors

                hover:text-orange-300
              "
            >
              View all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {/* ---------------------------------------------------------------- */}
          {/* Featured Project */}
          {/* ---------------------------------------------------------------- */}

          <motion.div variants={fadeIn}>
            <article
              className="
                grid

                items-center

                gap-10

                rounded-[32px]

                border
                border-white/10

                bg-white/[0.03]

                p-8

                transition-all
                duration-300

                hover:border-orange-500/30
                hover:bg-white/[0.05]

                lg:grid-cols-[1.1fr_0.9fr]
              "
            >
              {/* ========================================================== */}
              {/* Image */}
              {/* ========================================================== */}

              <Link
                href={`/projects/${featuredProject.slug}`}
                className="group block"
              >
                <div
                  className="
                    relative

                    overflow-hidden

                    rounded-[28px]

                    border
                    border-white/10

                    bg-zinc-950
                  "
                >
                  {/* Browser Header */}

                  <div
                    className="
                      flex
                      items-center
                      gap-2

                      border-b
                      border-white/10

                      bg-zinc-900

                      px-5
                      py-3
                    "
                  >
                    <div className="h-3 w-3 rounded-full bg-red-400/70" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <div className="h-3 w-3 rounded-full bg-green-400/70" />
                  </div>

                  <div className="relative aspect-[16/10]">
                    <Image
                      src={featuredProject.image}
                      alt={featuredProject.title}
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
              </Link>

              {/* ========================================================== */}
              {/* Content */}
              {/* ========================================================== */}

              <div>
                {/* Meta */}

                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="
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
                    {featuredProject.category}
                  </span>

                  <span
                    className="
                      rounded-full

                      border
                      border-emerald-500/20

                      bg-emerald-500/10

                      px-4
                      py-2

                      text-xs
                      font-semibold

                      uppercase

                      tracking-[0.25em]

                      text-emerald-300
                    "
                  >
                    {featuredProject.status}
                  </span>

                  <span
                    className="
                      inline-flex
                      items-center

                      gap-2

                      text-sm

                      text-zinc-500
                    "
                  >
                    <Clock className="h-4 w-4" />

                    {featuredProject.readingTime}
                  </span>
                </div>

                {/* Title */}

                <Link
                  href={`/projects/${featuredProject.slug}`}
                  className="group inline-block"
                >
                  <h3
                    className="
                      mt-8

                      text-4xl

                      font-bold

                      tracking-tight

                      text-white

                      transition-colors

                      group-hover:text-orange-300
                    "
                  >
                    {featuredProject.title}
                  </h3>
                </Link>

                {/* Tagline */}

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

                {/* Description */}

                <p
                  className="
                    mt-6

                    leading-8

                    text-zinc-400
                  "
                >
                  {featuredProject.description}
                </p>

                {/* Technologies */}

                <div className="mt-8 flex flex-wrap gap-2">
                  {featuredProject.technologies
                    .slice(0, 5)
                    .map((technology) => (
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

                          text-zinc-300
                        "
                      >
                        {technology}
                      </span>
                    ))}
                </div>

                {/* Actions */}

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/projects/${featuredProject.slug}`}
                    className="
                      inline-flex

                      items-center

                      gap-2

                      rounded-xl

                      bg-orange-500

                      px-6
                      py-3.5

                      font-medium

                      text-white

                      transition-all
                      duration-300

                      hover:bg-orange-400
                    "
                  >
                    Read Case Study
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

                        hover:border-orange-500/30
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

                        hover:border-orange-500/30
                        hover:text-white
                      "
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </article>
          </motion.div>
          {/* ---------------------------------------------------------------- */}
          {/* Secondary Featured Projects */}
          {/* ---------------------------------------------------------------- */}

          <motion.div
            variants={stagger}
            className="mt-14 grid gap-8 lg:grid-cols-2"
          >
            {secondaryProjects.map((project) => (
              <motion.article
                key={project.slug}
                variants={fadeIn}
                className="
                  group

                  overflow-hidden

                  rounded-[28px]

                  border
                  border-white/10

                  bg-white/[0.02]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-orange-500/30
                  hover:bg-white/[0.04]
                "
              >
                {/* ---------------------------------------------------------- */}
                {/* Image */}
                {/* ---------------------------------------------------------- */}

                <Link href={`/projects/${project.slug}`} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden">
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

                    <div
                      className="
                        absolute
                        inset-0

                        bg-gradient-to-t
                        from-black/70
                        via-black/10
                        to-transparent
                      "
                    />
                  </div>
                </Link>

                {/* ---------------------------------------------------------- */}
                {/* Content */}
                {/* ---------------------------------------------------------- */}

                <div className="p-7">
                  {/* Meta */}

                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="
                        rounded-full

                        border
                        border-orange-500/20

                        bg-orange-500/10

                        px-3
                        py-1

                        text-xs
                        font-medium

                        uppercase

                        tracking-wide

                        text-orange-300
                      "
                    >
                      {project.category}
                    </span>

                    <span
                      className="
                        rounded-full

                        border
                        border-emerald-500/20

                        bg-emerald-500/10

                        px-3
                        py-1

                        text-xs
                        font-medium

                        uppercase

                        tracking-wide

                        text-emerald-300
                      "
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Title */}

                  <Link
                    href={`/projects/${project.slug}`}
                    className="group/title inline-block"
                  >
                    <h3
                      className="
                        mt-6

                        text-2xl

                        font-bold

                        tracking-tight

                        text-white

                        transition-colors
                        duration-300

                        group-hover/title:text-orange-300
                      "
                    >
                      {project.title}
                    </h3>
                  </Link>

                  {/* Tagline */}

                  <p className="mt-4 text-zinc-300">{project.tagline}</p>

                  {/* Description */}

                  <p
                    className="
                      mt-5

                      leading-7

                      text-zinc-400
                    "
                  >
                    {project.description}
                  </p>

                  {/* Reading Time */}

                  <div
                    className="
                      mt-6

                      flex
                      items-center

                      gap-2

                      text-sm

                      text-zinc-500
                    "
                  >
                    <Clock className="h-4 w-4" />

                    {project.readingTime}
                  </div>

                  {/* Technologies */}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="
                            rounded-full

                            border
                            border-white/10

                            bg-white/[0.03]

                            px-3
                            py-1.5

                            text-xs

                            text-zinc-300
                          "
                      >
                        {tech}
                      </span>
                    ))}

                    {project.technologies.length > 4 && (
                      <span
                        className="
                          rounded-full

                          border
                          border-white/10

                          bg-white/[0.03]

                          px-3
                          py-1.5

                          text-xs

                          text-zinc-500
                        "
                      >
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Footer */}

                  <div
                    className="
                      mt-8

                      flex
                      items-center
                      justify-between

                      border-t
                      border-white/10

                      pt-6
                    "
                  >
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

                        hover:gap-3
                        hover:text-orange-300
                      "
                    >
                      Read Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <div className="flex items-center gap-3">
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            rounded-lg

                            border
                            border-white/10

                            p-2.5

                            text-zinc-400

                            transition-all
                            duration-300

                            hover:border-orange-500/40
                            hover:text-white
                          "
                        >
                          <Github className="h-4 w-4" />
                        </Link>
                      )}

                      {project.live && (
                        <Link
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            rounded-lg

                            border
                            border-white/10

                            p-2.5

                            text-zinc-400

                            transition-all
                            duration-300

                            hover:border-orange-500/40
                            hover:text-white
                          "
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
          {/* ---------------------------------------------------------------- */}
          {/* Bottom CTA */}
          {/* ---------------------------------------------------------------- */}

          <motion.div
            variants={fadeIn}
            className="
              mt-24

              border-t
              border-white/10

              pt-20

              text-center
            "
          >
            <span
              className="
                inline-flex
                items-center

                rounded-full

                border
                border-orange-500/20

                bg-orange-500/5

                px-3
                py-1

                text-xs
                font-medium

                uppercase

                tracking-[0.25em]

                text-orange-400
              "
            >
              Explore More
            </span>

            <h2
              className="
                mt-6

                text-4xl
                font-bold

                tracking-tight

                text-white

                md:text-5xl
              "
            >
              Every project has a story.
            </h2>

            <p
              className="
                mx-auto
                mt-6

                max-w-3xl

                text-lg

                leading-8

                text-zinc-400
              "
            >
              Each project includes a complete engineering case study covering
              the problem, architecture, implementation, trade-offs and lessons
              learned while building production software.
            </p>

            <div
              className="
                mt-12

                flex
                flex-wrap

                justify-center

                gap-4
              "
            >
              <Link
                href="/projects"
                className="
                  inline-flex

                  items-center

                  gap-2

                  rounded-xl

                  bg-orange-500

                  px-7
                  py-3.5

                  font-medium

                  text-white

                  transition-all
                  duration-300

                  hover:bg-orange-400
                "
              >
                Browse All Projects
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/blogs"
                className="
                  inline-flex

                  items-center

                  rounded-xl

                  border
                  border-white/10

                  bg-white/[0.03]

                  px-7
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
                Read Engineering Articles
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
