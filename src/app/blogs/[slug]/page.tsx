import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import { ExternalLink } from "lucide-react";
import { getArticleMetadata } from "@/lib/blog";

import { ArrowLeft, ArrowRight, CalendarDays, Clock3 } from "lucide-react";

import {
  getAllPosts,
  getAdjacentPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";

import { loadPostContent, renderMDX } from "@/lib/mdx";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

function formatBlogDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* -------------------------------------------------------------------------- */
/*                              Static Generation                             */
/* -------------------------------------------------------------------------- */

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

/* -------------------------------------------------------------------------- */
/*                                  Metadata                                  */
/* -------------------------------------------------------------------------- */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Leonardo Fernandes`,

    description: post.description,

    keywords: post.tags,

    openGraph: {
      title: post.title,

      description: post.description,

      images: post.cover ? [post.cover] : [],

      type: "article",
    },

    twitter: {
      card: "summary_large_image",

      title: post.title,

      description: post.description,

      images: post.cover ? [post.cover] : [],
    },
  };
}

/* -------------------------------------------------------------------------- */
/*                                   Page                                     */
/* -------------------------------------------------------------------------- */

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const source = await loadPostContent(slug);

  const content = await renderMDX(source);

  const relatedPosts = getRelatedPosts(slug);

  const { previous, next } = getAdjacentPosts(slug);
  const previousMeta = previous ? getArticleMetadata(previous.slug) : undefined;

  const nextMeta = next ? getArticleMetadata(next.slug) : undefined;
  const articleMeta = getArticleMetadata(post.slug);

  return (
    <main className="bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]" />
        </div>

        <Container className="relative py-24">
          {/* Back */}

          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-zinc-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Articles
          </Link>

          {/* Category */}

          <div className="mt-10">
            <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
              {post.tags[0]}
            </span>
          </div>

          {/* Title */}

          <h1 className="mt-8 max-w-5xl text-5xl font-bold tracking-tight text-white md:text-6xl">
            {post.title}
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
            {articleMeta.subtitle ?? post.description}
          </p>

          {/* Tags */}

          <div className="mt-10 flex flex-wrap gap-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Meta */}

          <div className="mt-12 flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-3">
              <CalendarDays className="h-5 w-5 text-orange-400" />

              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Published
                </p>

                <p className="text-white">{formatBlogDate(post.published)}</p>
              </div>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <div className="flex items-center gap-3">
              <Clock3 className="h-5 w-5 text-orange-400" />

              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Reading Time
                </p>

                <p className="text-white">{post.readingTime}</p>
              </div>
            </div>
          </div>

          {/* External Links */}
          <div className="mt-12 flex flex-wrap gap-4">
            {articleMeta.hashnode && (
              <Link
                href={articleMeta.hashnode}
                target="_blank"
                rel="noopener noreferrer"
                className="
        group

        inline-flex
        items-center
        gap-2

        rounded-xl

        border
        border-white/10

        bg-white/[0.03]

        px-5
        py-3.5

        text-sm
        font-medium

        text-zinc-300

        transition-all
        duration-300

        hover:-translate-y-0.5
        hover:border-blue-500/40
        hover:bg-blue-500/10
        hover:text-white
      "
              >
                <span>Read on Hashnode</span>

                <ExternalLink
                  className="
          h-4
          w-4

          transition-transform

          group-hover:translate-x-0.5
          group-hover:-translate-y-0.5
        "
                />
              </Link>
            )}

            {articleMeta.medium && (
              <Link
                href={articleMeta.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="
        group

        inline-flex
        items-center
        gap-2

        rounded-xl

        border
        border-white/10

        bg-white/[0.03]

        px-5
        py-3.5

        text-sm
        font-medium

        text-zinc-300

        transition-all
        duration-300

        hover:-translate-y-0.5
        hover:border-green-500/40
        hover:bg-green-500/10
        hover:text-white
      "
              >
                <span>Read on Medium</span>

                <ExternalLink
                  className="
          h-4
          w-4

          transition-transform

          group-hover:translate-x-0.5
          group-hover:-translate-y-0.5
        "
                />
              </Link>
            )}
          </div>
          {post.cover && (
            <div className="mt-20 overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={post.cover}
                alt={post.title}
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          )}
        </Container>
      </section>
      <section className="relative py-28">
        <Container className="max-w-[1400px]">
          <div className="mx-auto flex max-w-[1400px] gap-24 px-6">
            <div className="min-w-0 flex-1">
              <div
                className="
            absolute
            left-0
            top-0
            h-full
            w-px
            bg-gradient-to-b
            from-orange-500/20
            via-transparent
            to-transparent
          "
              />

              <article className="mx-auto w-full max-w-[720px]">
                <div className="mb-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {content}
              </article>
            </div>
          </div>
        </Container>
      </section>
      <section className="mt-28 border-t border-white/10 pt-12">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {previous ? (
              <Link
                href={`/blogs/${previous.slug}`}
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
                  Previous Article
                </div>

                <h3 className="mt-6 text-2xl font-semibold leading-snug text-white transition-colors group-hover:text-orange-300">
                  {previous.title}
                </h3>

                <p className="mt-4 line-clamp-2 text-zinc-400">
                  {previousMeta?.subtitle ?? previous.description}
                </p>

                <div className="mt-6 flex items-center gap-3 text-sm text-zinc-500">
                  <Clock3 className="h-4 w-4" />

                  {previous.readingTime}
                </div>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/blogs/${next.slug}`}
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
                  Next Article
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold leading-snug text-white transition-colors group-hover:text-orange-300">
                  {next.title}
                </h3>

                <p className="mt-4 line-clamp-2 text-zinc-400">
                  {nextMeta?.subtitle ?? next.description}
                </p>

                <div className="mt-6 flex items-center justify-end gap-3 text-sm text-zinc-500">
                  {next.readingTime}

                  <Clock3 className="h-4 w-4" />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </Container>
      </section>
      <Container>
        {relatedPosts.length > 0 && (
          <section className="mt-32 border-t border-white/10 pt-20">
            <div className="mb-14">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
                Continue Reading
              </span>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">
                Related Articles
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
                More engineering write-ups exploring similar concepts,
                technologies and architectural decisions.
              </p>
            </div>

            <div className="space-y-8">
              {relatedPosts.map((article) => {
                const articleMeta = getArticleMetadata(article.slug);

                return (
                  <Link
                    key={article.slug}
                    href={`/blogs/${article.slug}`}
                    className="
            group
            grid
            items-center
            gap-8
            rounded-3xl
            border
            border-white/10
            bg-white/[0.02]
            p-6
            transition-all
            duration-300
            hover:border-orange-500/30
            hover:bg-white/[0.04]
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
                        {article.cover ? (
                          <Image
                            src={article.cover}
                            alt={article.title}
                            fill
                            className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent" />
                        )}
                      </div>
                    </div>

                    {/* Content */}

                    <div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                        <span>{article.readingTime}</span>

                        <span>•</span>

                        <span>{formatBlogDate(article.published)}</span>
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
                        {article.title}
                      </h3>

                      <p
                        className="
                mt-4
                line-clamp-2
                leading-8
                text-zinc-400
              "
                      >
                        {articleMeta.subtitle ?? article.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
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
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div
                        className="
                mt-7
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
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </Container>

      <section className="mt-28 border-t border-white/10 py-16">
        <Container className="max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
            Thanks for Reading
          </p>

          <h2 className="mt-5 text-3xl font-bold text-white">
            Every article starts with a real engineering problem.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            I write about the systems I build, the architectural decisions I
            make, and the lessons learned while shipping production software.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/projects"
              className="rounded-xl bg-orange-500 px-6 py-3 font-medium text-white"
            >
              Explore Projects
            </Link>

            <Link
              href="/blogs"
              className="rounded-xl border border-white/10 px-6 py-3 text-zinc-300"
            >
              Browse Articles
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
