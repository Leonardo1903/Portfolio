"use client";

import { useMemo, useState } from "react";
import Container from "@/components/ui/Container";

import Image from "next/image";
import Link from "next/link";

import { ArrowRight, CalendarDays, Clock3, ExternalLink } from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";

import {
  getAllPosts,
  getFeaturedPost,
  getBlogCategories,
  getTotalPosts,
  getTotalTopics,
  getArticleMetadata,
} from "@/lib/blog";

export default function Page() {
  const featuredPost = getFeaturedPost();
  const featuredArticleMeta = featuredPost
    ? getArticleMetadata(featuredPost.slug)
    : undefined;

  if (!featuredPost) {
    throw new Error(
      "No featured blog post found. Mark one article with featured: true.",
    );
  }

  const posts = getAllPosts();

  const categories = getBlogCategories();

  const totalPosts = getTotalPosts();

  const totalTopics = getTotalTopics();

  const [selectedTopic, setSelectedTopic] = useState("All");

  const activeCategory =
    categories.find((category) => category === selectedTopic) ?? categories[0];

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  function formatBlogDate(dateString: string) {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090C]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl" />

        <div className="absolute left-1/4 top-40 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-500/10 blur-[140px]" />
      </div>
      <section className="relative z-10 py-28">
        <Container>
          <div className="grid items-center gap-20 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
                Technical Writing
              </p>

              <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl">
                Sharing What I Learn
                <br />
                While Building Software.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                I write about full-stack development, AI systems, distributed
                architecture and the engineering decisions behind the products I
                build. Every article begins with something I learned while
                building real software.
              </p>
              <div className="mt-12 flex flex-wrap gap-10">
                <div>
                  <h3 className="text-3xl font-bold text-white">
                    {totalPosts}+
                  </h3>

                  <p className="mt-2 text-zinc-400">Technical Articles</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white">
                    {totalTopics}
                  </h3>

                  <p className="mt-2 text-zinc-400">Engineering Domains</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white">100%</h3>

                  <p className="mt-2 text-zinc-400">Open Source</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {featuredPost && (
        <Container>
          <section className="relative py-28">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
                Featured Article
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
                Latest Engineering Deep Dive
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                Detailed breakdowns of architecture decisions, implementation
                strategies and engineering trade-offs from real projects.
              </p>
            </div>
            <div
              className="
        relative
        overflow-hidden
        rounded-3xl
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
              <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
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
                    ★ Featured
                  </span>

                  <h3
                    className="
              mt-8
              max-w-3xl
              text-5xl
              font-bold
              leading-tight
              tracking-tight
              text-white
            "
                  >
                    {featuredPost.title}
                  </h3>

                  <p
                    className="
              mt-8
              max-w-2xl
              text-lg
              leading-9
              text-zinc-400
            "
                  >
                    {featuredArticleMeta?.subtitle ?? featuredPost.description}
                  </p>
                  <div className="mt-10 flex flex-wrap gap-3">
                    {featuredPost.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-3.5
                  py-2
                  text-sm
                  text-zinc-300
                  transition-colors
                  hover:border-orange-500/30
                  hover:text-white
                "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-10 flex flex-wrap items-center gap-8">
                    <div className="flex items-center gap-3 text-zinc-400">
                      <Clock3 className="h-5 w-5 text-orange-400" />

                      <div>
                        <p className="text-xs uppercase tracking-wider text-zinc-500">
                          Reading Time
                        </p>

                        <p className="mt-1 text-sm font-medium text-white">
                          {featuredPost.readingTime}
                        </p>
                      </div>
                    </div>

                    <div className="h-10 w-px bg-white/10" />

                    <div className="flex items-center gap-3 text-zinc-400">
                      <CalendarDays className="h-5 w-5 text-orange-400" />

                      <div>
                        <p className="text-xs uppercase tracking-wider text-zinc-500">
                          Published
                        </p>

                        <p className="mt-1 text-sm font-medium text-white">
                          {new Date(featuredPost.published).toLocaleDateString(
                            "en-US",
                            {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            },
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 flex flex-wrap gap-4">
                    <Link
                      href={`/blogs/${featuredPost.slug}`}
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
                      Read Article
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    {featuredPost.hashnode && (
                      <Link
                        href={featuredPost.hashnode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-white/10
                  px-5
                  py-3.5
                  text-zinc-300
                  transition
                  hover:border-orange-500/40
                  hover:bg-white/[0.03]
                  hover:text-white
                "
                      >
                        Hashnode
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    )}

                    {featuredPost.medium && (
                      <Link
                        href={featuredPost.medium}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-white/10
                  px-5
                  py-3.5
                  text-zinc-300
                  transition
                  hover:border-orange-500/40
                  hover:bg-white/[0.03]
                  hover:text-white
                "
                      >
                        Medium
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
                <div className="relative">
                  {/* Decorative Glow */}

                  <div
                    className="
              absolute
              -left-8
              -top-8
              h-48
              w-48
              rounded-full
              bg-orange-500/10
              blur-3xl
            "
                  />

                  {/* Image Container */}

                  <div
                    className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              shadow-2xl
            "
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={featuredPost.cover}
                        alt={featuredPost.title}
                        fill
                        priority
                        className="
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
                      />

                      {/* Image Overlay */}

                      <div
                        className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/20
                  to-transparent
                "
                      />

                      {/* Floating Badge */}

                      <div
                        className="
                  absolute
                  left-5
                  top-5
                  rounded-full
                  border
                  border-orange-500/30
                  bg-black/70
                  px-3
                  py-1.5
                  backdrop-blur-md
                "
                      >
                        <span
                          className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-orange-300
                  "
                        >
                          Latest Article
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Stats */}

                  <div
                    className="
              absolute
              -bottom-8
              left-8
              right-8
              rounded-2xl
              border
              border-white/10
              bg-black/70
              backdrop-blur-xl
              px-6
              py-5
            "
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-zinc-500">
                          Reading Time
                        </p>

                        <p className="mt-1 font-semibold text-white">
                          {featuredPost.readingTime}
                        </p>
                      </div>

                      <div className="h-10 w-px bg-white/10" />

                      <div>
                        <p className="text-xs uppercase tracking-wider text-zinc-500">
                          Published
                        </p>

                        <p className="mt-1 font-semibold text-white">
                          {new Date(featuredPost.published).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            },
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      )}

      <section className="relative py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
              Engineering Journal
            </span>

            <h2 className="mt-5 text-5xl font-bold tracking-tight text-white">
              Latest Articles
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Practical engineering articles covering architecture, distributed
              systems, AI, backend engineering, TypeScript, mobile development
              and everything I learn while building production software.
            </p>
          </div>
          <div className="mt-20 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedTopic(category)}
                className={`
            rounded-full
            border
            px-5
            py-2.5
            text-sm
            transition-all
            duration-300

            ${
              selectedTopic === category
                ? "border-orange-500 bg-orange-500 text-white"
                : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-orange-500/40 hover:text-white"
            }
          `}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-16 flex items-center justify-between border-b border-white/10 pb-8">
            <div>
              <h3 className="text-3xl font-bold text-white">
                {selectedTopic === "All" ? "All Articles" : selectedTopic}
              </h3>

              <p className="mt-2 text-zinc-500">
                {filteredPosts.length} article
                {filteredPosts.length !== 1 && "s"}
              </p>
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div layout className="mt-4 divide-y divide-white/10">
              {filteredPosts.map((post) => {
                const articleMeta = getArticleMetadata(post.slug);

                return (
                  <motion.div
                    key={post.slug}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div
                      className="
                group
                grid
                items-center
                gap-8
                py-10
                transition-all
                duration-300
                lg:grid-cols-[280px_1fr]
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
                "
                      >
                        <div className="relative aspect-[16/10]">
                          {post.cover ? (
                            <Image
                              src={post.cover}
                              alt={post.title}
                              fill
                              className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                            />
                          ) : (
                            <div
                              className="
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-orange-500/20
                        via-red-500/10
                        to-transparent
                      "
                            />
                          )}
                        </div>
                      </div>

                      <div>
                        {/* Meta */}

                        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                          <span>{post.readingTime}</span>

                          <span>•</span>

                          <span>{formatBlogDate(post.published)}</span>
                        </div>

                        {/* Title */}

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
                          {post.title}
                        </h3>

                        {/* Description */}

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
                          {articleMeta.subtitle ?? post.description}
                        </p>

                        {/* Tags */}

                        <div className="mt-7 flex flex-wrap gap-2">
                          {post.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
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
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* CTA */}

                        <Link
                          href={`/blogs/${post.slug}`}
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
                          Continue Reading
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-28 text-center"
            >
              <h3 className="text-3xl font-bold text-white">
                No Articles Found
              </h3>

              <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-zinc-500">
                There aren't any articles in this topic yet. Try selecting
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
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
      "
          >
            <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
              {/* Left */}

              <div className="p-12 lg:p-16">
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
                  Why I Write
                </p>

                <h2 className="text-4xl font-bold leading-tight text-white">
                  Every Article Starts
                  <br />
                  With Something I Built.
                </h2>

                <p className="mt-8 text-lg leading-9 text-zinc-400">
                  Most of my articles begin while building a product rather than
                  planning a blog. Whether it's designing APIs, integrating AI
                  systems, or scaling a backend, I document the challenges I
                  encounter and the solutions I arrive at.
                </p>

                <p className="mt-8 text-lg leading-9 text-zinc-400">
                  Writing forces me to think more clearly about architecture,
                  trade-offs and implementation details. It helps me organize my
                  thoughts while hopefully helping other developers facing
                  similar problems.
                </p>

                <p className="mt-8 text-lg leading-9 text-zinc-400">
                  This blog has become a public engineering journal—a place
                  where I share what I learn while building production software.
                </p>
              </div>

              {/* Right */}

              <div className="border-t border-white/10 bg-gradient-to-br from-orange-500/5 to-transparent p-12 lg:border-l lg:border-t-0 lg:p-16">
                <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
                  What You'll Find Here
                </p>

                <div className="mt-10 space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Real Projects
                    </h3>

                    <p className="mt-3 leading-7 text-zinc-400">
                      Every article is inspired by something I've actually
                      built, experimented with or shipped—not hypothetical
                      examples.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Engineering Decisions
                    </h3>

                    <p className="mt-3 leading-7 text-zinc-400">
                      I enjoy explaining the reasoning behind architectural
                      choices, trade-offs and implementation details rather than
                      only showing the final solution.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Continuous Learning
                    </h3>

                    <p className="mt-3 leading-7 text-zinc-400">
                      My interests evolve over time, so you'll find articles
                      ranging from full-stack development and AI systems to
                      distributed architectures, developer tools and mobile
                      engineering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative z-10 py-20">
        <Container>
          <div className="border-t border-white/10 pt-16">
            <div className="flex flex-col items-center text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
                What's Next?
              </p>

              <h2 className="mt-5 text-3xl font-bold text-white">
                Explore The Software Behind The Writing
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                Every article is backed by a real project, experiment or
                engineering challenge. If you'd like to see the software behind
                the writing, continue exploring my portfolio.
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <Link
                  href="/projects"
                  className="
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-6
              py-3
              text-white
              transition-all
              hover:border-orange-500/30
              hover:bg-white/10
            "
                >
                  ← Explore Projects
                </Link>

                <Link
                  href="/about"
                  className="
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-6
              py-3
              text-white
              transition-all
              hover:border-orange-500/30
              hover:bg-white/10
            "
                >
                  Learn About Me →
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-zinc-500">
                <Link
                  href="https://github.com/yourusername"
                  target="_blank"
                  className="transition hover:text-white"
                >
                  GitHub
                </Link>

                <Link
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  className="transition hover:text-white"
                >
                  LinkedIn
                </Link>

                <Link
                  href="https://x.com/yourusername"
                  target="_blank"
                  className="transition hover:text-white"
                >
                  X
                </Link>

                <Link
                  href="https://hashnode.com/@yourusername"
                  target="_blank"
                  className="transition hover:text-white"
                >
                  Hashnode
                </Link>

                <Link
                  href="https://medium.com/@yourusername"
                  target="_blank"
                  className="transition hover:text-white"
                >
                  Medium
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
