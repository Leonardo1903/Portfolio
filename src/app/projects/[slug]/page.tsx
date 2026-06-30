import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Github,
} from "lucide-react";

import Container from "@/components/ui/Container";

import {
  getProjects,
  getProject,
  getRelatedProjects,
  getAdjacentProjects,
} from "@/lib/projects";

import type { Project } from "@/types/projects";

/* ========================================================================== */
/* Static Generation */
/* ========================================================================== */

export async function generateStaticParams() {
  return getProjects().map((project) => ({
    slug: project.slug,
  }));
}

/* ========================================================================== */
/* Metadata */
/* ========================================================================== */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Leonardo Fernandes`,
    description: project.description,

    openGraph: {
      title: project.title,
      description: project.description,

      images: [
        {
          url: project.image,
        },
      ],
    },
  };
}

/* ========================================================================== */
/* Page */
/* ========================================================================== */

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(slug);

  const { previous, next } = getAdjacentProjects(slug);

  return (
    <main className="bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]" />
        </div>

        <section className="relative pt-24">
          <Container>
            <div
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
              {/* Background Glow */}

              <div
                className="
                absolute

                -right-24
                -top-24

                h-96
                w-96

                rounded-full

                bg-orange-500/10

                blur-[140px]
              "
              />

              <div
                className="
                relative

                grid

                items-center

                gap-16

                lg:grid-cols-[0.95fr_1.05fr]
              "
              >
                {/* ========================================================== */}
                {/* Left */}
                {/* ========================================================== */}

                <div>
                  {/* Breadcrumb */}

                  <Link
                    href="/projects"
                    className="
                    inline-flex
                    items-center
                    gap-2

                    text-sm

                    text-zinc-500

                    transition

                    hover:text-white
                  "
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Projects
                  </Link>

                  {/* Status */}

                  <div className="mt-8 flex flex-wrap items-center gap-3">
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
                      {project.category}
                    </span>

                    <span
                      className={`
                      rounded-full

                      border

                      px-4
                      py-2

                      text-xs

                      font-semibold

                      uppercase

                      tracking-[0.25em]

                      ${
                        project.status === "Production"
                          ? "border-green-500/20 bg-green-500/10 text-green-400"
                          : "border-orange-500/20 bg-orange-500/10 text-orange-400"
                      }
                    `}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Title */}

                  <h1
                    className="
                    mt-8

                    text-5xl

                    font-bold

                    leading-tight

                    tracking-tight

                    text-white

                    lg:text-6xl
                  "
                  >
                    {project.title}
                  </h1>

                  {/* Tagline */}

                  <p
                    className="
                    mt-6

                    text-xl

                    leading-9

                    text-zinc-300
                  "
                  >
                    {project.tagline}
                  </p>

                  {/* Description */}

                  <p
                    className="
                    mt-8

                    max-w-2xl

                    text-lg

                    leading-9

                    text-zinc-400
                  "
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}

                  <div className="mt-10 flex flex-wrap gap-3">
                    {project.technologies.map((technology) => (
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

                  {/* CTA */}

                  <div className="mt-12 flex flex-wrap gap-4">
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
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
                        Live Demo
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    )}

                    {project.github && (
                      <Link
                        href={project.github}
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
                  </div>
                </div>
                {/* ========================================================== */}
                {/* Right */}
                {/* ========================================================== */}

                <div className="relative">
                  {/* Ambient Glow */}

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

                  {/* Browser Window */}

                  <div
                    className="
                    relative

                    overflow-hidden

                    rounded-[30px]

                    border
                    border-white/10

                    bg-zinc-950

                    shadow-[0_35px_80px_rgba(0,0,0,0.45)]
                  "
                  >
                    {/* Browser Header */}

                    <div
                      className="
                      flex
                      items-center
                      justify-between

                      border-b
                      border-white/10

                      bg-zinc-900/90

                      px-5
                      py-3
                    "
                    >
                      {/* Traffic Lights */}

                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-400/70" />
                        <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
                        <div className="h-3 w-3 rounded-full bg-green-400/70" />
                      </div>

                      {/* Address Bar */}

                      <div
                        className="
                        max-w-[260px]

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
                        {project.live
                          ? new URL(project.live).hostname
                          : `projects/${project.slug}`}
                      </div>

                      <div className="w-12" />
                    </div>

                    {/* Screenshot */}

                    <div className="relative aspect-[16/10]">
                      <Image
                        src={project.image}
                        alt={project.title}
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

                  {/* Stats */}

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div
                      className="
                      rounded-2xl

                      border
                      border-white/10

                      bg-white/[0.03]

                      p-5
                    "
                    >
                      <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                        Technologies
                      </p>

                      <p className="mt-3 text-3xl font-bold text-white">
                        {project.technologies.length}
                      </p>
                    </div>

                    <div
                      className="
                      rounded-2xl

                      border
                      border-white/10

                      bg-white/[0.03]

                      p-5
                    "
                    >
                      <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                        Features
                      </p>

                      <p className="mt-3 text-3xl font-bold text-white">
                        {project.features.length}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        {/* ========================================================================== */}
        {/* Project Story */}
        {/* ========================================================================== */}

        <section className="py-28">
          <Container>
            <div className="grid gap-20 lg:grid-cols-[1fr_340px]">
              {/* ========================================================== */}
              {/* Main Content */}
              {/* ========================================================== */}

              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
                  Case Study
                </span>

                <h2 className="mt-5 text-5xl font-bold tracking-tight text-white">
                  From Idea to Production
                </h2>

                {/* Overview */}

                <div className="mt-12">
                  <h3 className="text-2xl font-semibold text-white">
                    Overview
                  </h3>

                  <p className="mt-6 text-lg leading-9 text-zinc-400">
                    {project.overview}
                  </p>
                </div>

                {/* Problem */}

                <div className="mt-16">
                  <h3 className="text-2xl font-semibold text-white">
                    The Problem
                  </h3>

                  <p className="mt-6 text-lg leading-9 text-zinc-400">
                    {project.problem}
                  </p>
                </div>

                {/* Goals */}

                <div className="mt-16">
                  <h3 className="text-2xl font-semibold text-white">Goals</h3>

                  <div className="mt-8 space-y-5">
                    {project.goals.map((goal) => (
                      <div key={goal} className="flex items-start gap-4">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-orange-400" />

                        <p className="leading-8 text-zinc-300">{goal}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solution */}

                <div className="mt-16">
                  <h3 className="text-2xl font-semibold text-white">
                    The Solution
                  </h3>

                  <p className="mt-6 text-lg leading-9 text-zinc-400">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* ========================================================== */}
              {/* Sidebar */}
              {/* ========================================================== */}

              <aside className="h-fit lg:sticky lg:top-28">
                <div
                  className="
            rounded-3xl

            border
            border-white/10

            bg-white/[0.03]

            p-8
          "
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-orange-400">
                    Quick Facts
                  </p>

                  <div className="mt-8 space-y-8">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-zinc-500">
                        Category
                      </p>

                      <p className="mt-2 font-medium text-white">
                        {project.category}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-zinc-500">
                        Status
                      </p>

                      <p className="mt-2 font-medium text-white">
                        {project.status}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-zinc-500">
                        Technologies
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="
                      rounded-full

                      border
                      border-white/10

                      bg-white/[0.03]

                      px-3
                      py-1

                      text-xs

                      text-zinc-400
                    "
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {(project.github || project.live) && (
                      <div>
                        <p className="text-xs uppercase tracking-wider text-zinc-500">
                          Links
                        </p>

                        <div className="mt-4 flex flex-col gap-3">
                          {project.github && (
                            <Link
                              href={project.github}
                              target="_blank"
                              className="inline-flex items-center gap-2 text-zinc-300 transition hover:text-white"
                            >
                              <Github className="h-4 w-4" />
                              GitHub
                            </Link>
                          )}

                          {project.live && (
                            <Link
                              href={project.live}
                              target="_blank"
                              className="inline-flex items-center gap-2 text-zinc-300 transition hover:text-white"
                            >
                              <ExternalLink className="h-4 w-4" />
                              Live Demo
                            </Link>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </aside>
            </div>
          </Container>
        </section>
        {/* ========================================================================== */}
        {/* Features */}
        {/* ========================================================================== */}

        <section className="py-28">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
                Key Features
              </span>

              <h2 className="mt-5 text-5xl font-bold tracking-tight text-white">
                Built Around Real Use Cases
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                Every feature was implemented to solve a practical problem while
                maintaining a clean developer experience and intuitive user
                interface.
              </p>
            </div>

            <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.features.map((feature, index) => (
                <div
                  key={feature}
                  className="
            rounded-3xl

            border
            border-white/10

            bg-white/[0.03]

            p-8

            transition-all
            duration-300

            hover:border-orange-500/30
            hover:bg-white/[0.05]
          "
                >
                  <div
                    className="
              flex

              h-12
              w-12

              items-center
              justify-center

              rounded-2xl

              bg-orange-500/10

              font-bold

              text-orange-400
            "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {feature}
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-400">
                    A core capability designed to improve usability, performance
                    and overall product experience.
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ========================================================================== */}
        {/* Architecture */}
        {/* ========================================================================== */}

        <section className="py-28">
          <Container>
            <div className="grid items-center gap-20 lg:grid-cols-[1fr_420px]">
              {/* ========================================================== */}
              {/* Left */}
              {/* ========================================================== */}

              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
                  Architecture
                </span>

                <h2 className="mt-5 text-5xl font-bold tracking-tight text-white">
                  {project.architecture.title}
                </h2>

                <p className="mt-8 text-lg leading-9 text-zinc-400">
                  {project.architecture.description}
                </p>

                <div
                  className="
            mt-10

            rounded-3xl

            border
            border-orange-500/20

            bg-orange-500/5

            p-6
          "
                >
                  <h3 className="text-lg font-semibold text-orange-300">
                    Design Philosophy
                  </h3>

                  <p className="mt-4 leading-8 text-zinc-300">
                    The architecture emphasizes separation of concerns,
                    maintainability and scalability. Individual services have
                    clearly defined responsibilities, making the application
                    easier to evolve as new features are introduced.
                  </p>
                </div>
              </div>

              {/* ========================================================== */}
              {/* Right */}
              {/* ========================================================== */}

              <div>
                <div
                  className="
            overflow-hidden

            rounded-[30px]

            border
            border-white/10

            bg-zinc-950

            shadow-[0_25px_70px_rgba(0,0,0,0.35)]
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

                  <div className="relative aspect-square">
                    {project.architecture.diagram ? (
                      <Image
                        src={project.architecture.diagram}
                        alt={`${project.title} Architecture`}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center p-10 text-center text-zinc-500">
                        Architecture diagram coming soon.
                      </div>
                    )}
                  </div>
                </div>

                <p className="mt-5 text-center text-sm text-zinc-500">
                  High-level architecture illustrating the major components of
                  the system.
                </p>
              </div>
            </div>
          </Container>
        </section>
        {/* ========================================================================== */}
        {/* Technology Stack */}
        {/* ========================================================================== */}

        <section className="py-28">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
                Technology Stack
              </span>

              <h2 className="mt-5 text-5xl font-bold tracking-tight text-white">
                Technologies Used
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                Every technology was selected based on the project's
                requirements, developer experience and long-term maintainability
                rather than simply using the newest tools available.
              </p>
            </div>

            <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {project.techStack.map((section) => (
                <div
                  key={section.category}
                  className="
            rounded-3xl

            border
            border-white/10

            bg-white/[0.03]

            p-8

            transition-all
            duration-300

            hover:border-orange-500/30
            hover:bg-white/[0.05]
          "
                >
                  <h3 className="text-xl font-semibold text-white">
                    {section.category}
                  </h3>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {section.items.map((item) => (
                      <span
                        key={item}
                        className="
                  rounded-full

                  border
                  border-white/10

                  bg-white/[0.03]

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

        {/* ========================================================================== */}
        {/* Engineering Decisions */}
        {/* ========================================================================== */}

        <section className="py-28">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
                Engineering Decisions
              </span>

              <h2 className="mt-5 text-5xl font-bold tracking-tight text-white">
                Architectural Trade-offs
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                Every project is a series of trade-offs. These decisions explain
                why certain technologies and architectural patterns were chosen
                during development.
              </p>
            </div>

            <div className="mt-20 space-y-8">
              {project.engineeringDecisions.map((decision, index) => (
                <div
                  key={decision.title}
                  className="
            rounded-3xl

            border
            border-white/10

            bg-white/[0.03]

            p-8

            transition-all
            duration-300

            hover:border-orange-500/30
          "
                >
                  <div className="flex gap-6">
                    <div
                      className="
                flex

                h-12
                w-12

                shrink-0

                items-center
                justify-center

                rounded-2xl

                bg-orange-500/10

                font-bold

                text-orange-400
              "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        {decision.title}
                      </h3>

                      <p className="mt-5 leading-8 text-zinc-400">
                        {decision.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
        {/* ========================================================================== */}
        {/* Challenges */}
        {/* ========================================================================== */}

        <section className="py-28">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
                Challenges
              </span>

              <h2 className="mt-5 text-5xl font-bold tracking-tight text-white">
                Engineering Challenges
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                Every meaningful project comes with technical challenges. These
                are some of the problems encountered while building the
                application.
              </p>
            </div>

            <div className="mt-20 grid gap-6 md:grid-cols-2">
              {project.challenges.map((challenge, index) => (
                <div
                  key={challenge}
                  className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-8
          "
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-orange-500/10
                font-bold
                text-orange-400
              "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3 className="text-xl font-semibold text-white">
                      Challenge {index + 1}
                    </h3>
                  </div>

                  <p className="mt-6 leading-8 text-zinc-400">{challenge}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ========================================================================== */}
        {/* Lessons Learned */}
        {/* ========================================================================== */}

        <section className="py-28">
          <Container>
            <div className="grid gap-16 lg:grid-cols-[340px_1fr]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
                  Lessons Learned
                </span>

                <h2 className="mt-5 text-5xl font-bold tracking-tight text-white">
                  Key Takeaways
                </h2>

                <p className="mt-8 text-lg leading-9 text-zinc-400">
                  Every project influences how I approach the next one. These
                  are the biggest lessons learned while building this
                  application.
                </p>
              </div>

              <div className="space-y-6">
                {project.lessons.map((lesson, index) => (
                  <div
                    key={lesson}
                    className="
              flex
              gap-5

              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-6
            "
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-orange-400" />

                    <div>
                      <span className="text-sm font-semibold text-orange-300">
                        Lesson {index + 1}
                      </span>

                      <p className="mt-2 leading-8 text-zinc-300">{lesson}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
        
        <section className="py-28">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
                Future Vision
              </span>

              <h2 className="mt-5 text-5xl font-bold tracking-tight text-white">
                How I'd Continue Building This
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                Shipping the first version is only the beginning. These are the
                improvements and engineering initiatives I'd prioritize to make
                the product more scalable, reliable and production-ready.
              </p>
            </div>

            <div className="mt-20 grid gap-8 md:grid-cols-2">
              {project.futureImprovements.map((item, index) => (
                <div
                  key={item.title}
                  className="
            group

            rounded-3xl

            border
            border-white/10

            bg-white/[0.03]

            p-8

            transition-all
            duration-300

            hover:border-orange-500/30
            hover:bg-white/[0.05]
          "
                >
                  {/* Number */}

                  <div
                    className="
              flex

              h-12
              w-12

              items-center
              justify-center

              rounded-2xl

              bg-orange-500/10

              font-bold

              text-orange-400
            "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Title */}

                  <h3 className="mt-8 text-2xl font-semibold text-white transition-colors group-hover:text-orange-300">
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-5 leading-8 text-zinc-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Closing Card */}

            <div
              className="
        mt-16

        rounded-[32px]

        border
        border-orange-500/20

        bg-gradient-to-br
        from-orange-500/10
        via-orange-500/5
        to-transparent

        p-10

        text-center
      "
            >
              <h3 className="text-2xl font-semibold text-white">
                Building software is an iterative process.
              </h3>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
                Every project highlights what was shipped today while
                identifying opportunities for future growth. Thinking beyond the
                MVP is an important part of building production-ready software
                and continuously improving both the product and the engineering
                behind it.
              </p>
            </div>
          </Container>
        </section>

        {relatedProjects.length > 0 && (
          <section className="py-28">
            <Container>
              <div className="mx-auto max-w-3xl text-center">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
                  Explore More
                </span>

                <h2 className="mt-5 text-5xl font-bold tracking-tight text-white">
                  Related Projects
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                  Explore other projects solving similar engineering problems
                  using modern web technologies, cloud infrastructure and AI.
                </p>
              </div>

              <div className="mt-20 space-y-8">
                {relatedProjects.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/projects/${related.slug}`}
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
              md:grid-cols-[240px_1fr]
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
                          src={related.image}
                          alt={related.title}
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
                      <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500">
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
                    tracking-wider
                    text-orange-300
                  "
                        >
                          {related.category}
                        </span>

                        <span>•</span>

                        <span>{related.status}</span>
                      </div>

                      <h3
                        className="
                  mt-4
                  text-2xl
                  font-bold
                  tracking-tight
                  text-white
                  transition-colors
                  group-hover:text-orange-300
                "
                      >
                        {related.title}
                      </h3>

                      <p className="mt-5 leading-8 text-zinc-400 line-clamp-2">
                        {related.tagline}
                      </p>

                      <div className="mt-7 flex flex-wrap gap-2">
                        {related.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-3
                      py-1
                      text-xs
                      text-zinc-400
                    "
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div
                        className="
                  mt-8
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
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        )}
      </section>
    </main>
  );
}
