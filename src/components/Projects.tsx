"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import { ArrowRight, ExternalLink, Github } from "lucide-react";

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
  const router = useRouter();

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
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        {/* Large orange glow */}

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

        {/* Bottom right glow */}

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

        {/* Top left subtle glow */}

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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-20"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
                Selected Work
              </span>

              <h2 className="mt-6 text-5xl font-bold tracking-tight text-white lg:text-6xl">
                Building products that
                <br />
                solve real problems.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-9 text-zinc-400">
                A collection of production-grade SaaS applications, AI systems,
                developer tooling and mobile experiences. Every project includes
                an in-depth engineering case study covering architecture,
                trade-offs and implementation.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeIn}>
            <motion.article
              onClick={() => router.push(`/projects/${featuredProject.slug}`)}
              className="
                group

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

              {/* ========================================================== */}
              {/* Content */}
              {/* ========================================================== */}

              <div>
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

                    tracking-[0.3em]

                    text-orange-300
                  "
                >
                  {featuredProject.category}
                </span>

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
                    mt-6

                    leading-8

                    text-zinc-400

                    line-clamp-3
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

                          transition

                          group-hover:border-orange-500/30
                        "
                      >
                        {technology}
                      </span>
                    ))}
                </div>

                {/* Actions */}

                <div className="mt-10 flex flex-wrap items-center gap-6">
                  {featuredProject.github && (
                    <Link
                      href={featuredProject.github}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="
                        inline-flex
                        items-center
                        gap-2

                        text-zinc-300

                        transition

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
                      onClick={(e) => e.stopPropagation()}
                      className="
                        inline-flex
                        items-center
                        gap-2

                        text-zinc-300

                        transition

                        hover:text-white
                      "
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Link>
                  )}

                  <div
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
                  </div>
                </div>
              </div>
            </motion.article>
          </motion.div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {secondaryProjects.map((project) => (
              <motion.div key={project.slug} variants={fadeIn}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="
                    group

                    grid

                    items-center

                    gap-8

                    rounded-3xl

                    border
                    border-white/10

                    bg-white/[0.03]

                    p-6

                    transition-all
                    duration-300

                    hover:border-orange-500/30
                    hover:bg-white/[0.05]

                    md:grid-cols-[220px_1fr]
                  "
                >
                  {/* Image */}

                  <div
                    className="
                      relative

                      overflow-hidden

                      rounded-2xl

                      border
                      border-white/10
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

                  {/* Content */}

                  <div>
                    <span
                      className="
                        rounded-full

                        border
                        border-orange-500/20

                        bg-orange-500/10

                        px-3
                        py-1

                        text-xs

                        uppercase

                        tracking-[0.25em]

                        text-orange-300
                      "
                    >
                      {project.category}
                    </span>

                    <h3
                      className="
                        mt-5

                        text-2xl

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
                        mt-4

                        leading-8

                        text-zinc-400

                        line-clamp-2
                      "
                    >
                      {project.tagline}
                    </p>
                    {/* Technologies */}

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((technology) => (
                        <span
                          key={technology}
                          className="
                              rounded-full

                              border
                              border-white/10

                              bg-white/[0.03]

                              px-3
                              py-1

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
                      <div className="flex items-center gap-5">
                        {project.github && (
                          <Link
                            href={project.github}
                            target="_blank"
                            onClick={(e) => e.stopPropagation()}
                            className="
                              inline-flex
                              items-center
                              gap-2

                              text-sm

                              text-zinc-400

                              transition

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
                            onClick={(e) => e.stopPropagation()}
                            className="
                              inline-flex
                              items-center
                              gap-2

                              text-sm

                              text-zinc-400

                              transition

                              hover:text-white
                            "
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live
                          </Link>
                        )}
                      </div>

                      <div
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
                        Case Study
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* ========================================================== */}
          {/* Footer CTA */}
          {/* ========================================================== */}

          <motion.div variants={fadeIn} className="mt-16 flex justify-center">
            <Link
              href="/projects"
              className="
                inline-flex

                items-center

                gap-3

                rounded-xl

                border
                border-white/10

                bg-white/[0.03]

                px-8
                py-4

                font-medium

                text-zinc-300

                transition-all
                duration-300

                hover:border-orange-500/30
                hover:bg-white/[0.05]
                hover:text-white
                hover:gap-4
              "
            >
              Explore All Case Studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
