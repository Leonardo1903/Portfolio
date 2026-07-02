import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

import { ArrowLeft, ExternalLink, Github, ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";

import {
  getAdjacentProjects,
  getAllProjects,
  getProjectBySlug,
  getRelatedProjects,
} from "@/lib/projects";

import { loadProjectContent, renderMDX } from "@/lib/mdx";

/* ========================================================================== */
/* Static Generation */
/* ========================================================================== */

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({
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

  const project = getProjectBySlug(slug);

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
      images: [{ url: project.image }],
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

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const source = await loadProjectContent(slug);

  const content = await renderMDX(source);

  const relatedProjects = getRelatedProjects(slug);

  const { previous, next } = getAdjacentProjects(slug);

  return (
    <main className="bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]" />
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
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-28">
          <Container>
            <div className="mx-auto max-w-4xl">
              <article
                className="
          prose
          prose-invert

          max-w-none

          prose-headings:font-bold
          prose-headings:tracking-tight

          prose-h1:text-5xl
          prose-h2:text-3xl
          prose-h3:text-2xl

          prose-p:text-zinc-400
          prose-p:leading-8

          prose-li:text-zinc-400

          prose-strong:text-white

          prose-code:text-orange-300

          prose-pre:border
          prose-pre:border-white/10
          prose-pre:bg-[#0D0D10]

          prose-blockquote:border-orange-500
          prose-blockquote:text-zinc-300

          prose-a:text-orange-400
          prose-a:no-underline
          hover:prose-a:text-orange-300

          prose-img:rounded-2xl
        "
              >
                {content}
              </article>
            </div>
          </Container>
        </section>

        <section className="mt-28 border-t border-white/10 pt-12">
          <Container className="relative z-10">
            <div className="grid gap-8 md:grid-cols-2">
              {previous ? (
                <Link
                  href={`/projects/${previous.slug}`}
                  className="
            group
            rounded-2xl
            border
            border-white/10
            bg-white/[0.02]
            p-8
            transition-all
            duration-300
            hover:border-orange-500/30
            hover:bg-white/[0.04]
          "
                >
                  <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                    Previous Project
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold leading-snug text-white transition-colors group-hover:text-orange-300">
                    {previous.title}
                  </h3>

                  <p className="mt-4 line-clamp-2 text-zinc-400">
                    {previous.tagline ?? previous.description}
                  </p>

                  <div className="mt-6 flex items-center gap-3 text-sm text-zinc-500">
                    <span>{previous.category}</span>

                    <span>•</span>

                    <span>{previous.readingTime}</span>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {next ? (
                <Link
                  href={`/projects/${next.slug}`}
                  className="
            group
            rounded-2xl
            border
            border-white/10
            bg-white/[0.02]
            p-8
            text-right
            transition-all
            duration-300
            hover:border-orange-500/30
            hover:bg-white/[0.04]
          "
                >
                  <div className="flex items-center justify-end gap-2 text-sm text-zinc-500">
                    Next Project
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold leading-snug text-white transition-colors group-hover:text-orange-300">
                    {next.title}
                  </h3>

                  <p className="mt-4 line-clamp-2 text-zinc-400">
                    {next.tagline ?? next.description}
                  </p>

                  <div className="mt-6 flex items-center justify-end gap-3 text-sm text-zinc-500">
                    <span>{next.category}</span>

                    <span>•</span>

                    <span>{next.readingTime}</span>
                  </div>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </Container>
        </section>

        {relatedProjects.length > 0 && (
          <section className="py-28">
            <Container className="relative z-10">
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
                  <div
                    key={related.slug}
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
    "
                      >
                        {related.title}
                      </h3>

                      <p className="mt-5 line-clamp-2 leading-8 text-zinc-400">
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

                      <div className="mt-8">
                        <Link
                          href={`/projects/${related.slug}`}
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
                          View Case Study
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        )}
      </section>
    </main>
  );
}
