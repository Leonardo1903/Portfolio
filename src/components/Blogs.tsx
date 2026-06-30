import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import {
  getLatestPosts,
  getArticleMetadata,
} from "@/lib/blog";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export default function Blogs() {
  const posts = getLatestPosts(3);

  return (
    <section
      id="blogs"
      className="
        relative

        overflow-hidden

        py-28
      "
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#09090B]" />

        <div
          className="
            absolute

            left-1/2
            top-0

            h-[520px]
            w-[520px]

            -translate-x-1/2

            rounded-full

            bg-orange-500/5

            blur-[140px]
          "
        />
      </div>

      <Container>
        <div
          className="
            mb-16

            flex
            flex-col

            gap-8

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="max-w-2xl">
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
              Latest Writing
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
              Thoughts from building production software.
            </h2>

            <p
              className="
                mt-6

                max-w-2xl

                text-lg

                leading-8

                text-zinc-400
              "
            >
              I write about backend engineering, distributed systems, AI, mobile
              development, cloud infrastructure, and the lessons learned while
              shipping production software.
            </p>
          </div>

          <Link
            href="/blogs"
            className="
              group

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
            Browse all articles
            <ArrowRight
              className="
                h-4
                w-4

                transition-transform

                duration-300

                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
        <div
          className="
            divide-y

            divide-white/10

            rounded-3xl

            border
            border-white/10

            bg-white/[0.02]

            backdrop-blur-sm
          "
        >
          {posts.map((post, index) => {
            const articleMeta = getArticleMetadata(post.slug);

            return (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="
                  group

                  block

                  transition-colors

                  hover:bg-white/[0.03]
                "
              >
                <article
                  className="
                    grid

                    gap-8

                    p-8

                    lg:grid-cols-[280px_1fr]
                    lg:items-center
                  "
                >
                  <div
                    className="
                      relative

                      aspect-video

                      overflow-hidden

                      rounded-2xl

                      bg-zinc-900
                    "
                  >
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      sizes="280px"
                      className="
                        object-cover

                        transition-transform
                        duration-500

                        group-hover:scale-105
                      "
                    />
                  </div>
                  <div>
                    <div
                      className="
                        flex
                        flex-wrap
                        items-center

                        gap-3

                        text-sm
                      "
                    >
                      <span
                        className="
                          rounded-full

                          border
                          border-orange-500/25

                          bg-orange-500/5

                          px-3
                          py-1

                          text-xs
                          font-medium

                          uppercase

                          tracking-wide

                          text-orange-300
                        "
                      >
                        {post.category}
                      </span>

                      <span className="text-zinc-700">•</span>

                      <span className="text-zinc-500">
                        {formatDate(post.published)}
                      </span>

                      <span className="text-zinc-700">•</span>

                      <span
                        className="
                          inline-flex
                          items-center

                          gap-1.5

                          text-zinc-500
                        "
                      >
                        <Clock className="h-4 w-4" />

                        {post.readingTime}
                      </span>
                    </div>

                    <h3
                      className="
                        mt-5

                        text-3xl

                        font-semibold

                        tracking-tight

                        text-white

                        transition-colors
                        duration-300

                        group-hover:text-orange-300
                      "
                    >
                      {post.title}
                    </h3>

                    <p
                      className="
                        mt-5

                        max-w-3xl

                        text-[15px]

                        leading-8

                        text-zinc-400
                      "
                    >
                      {articleMeta.subtitle ?? post.description}
                    </p>

                    <div
                      className="
                        mt-8

                        inline-flex

                        items-center

                        gap-2

                        font-medium

                        text-orange-400

                        transition-transform
                        duration-300

                        group-hover:translate-x-1
                      "
                    >
                      Read article
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* ------------------------------------------------ */}
        {/* Bottom CTA */}
        {/* ------------------------------------------------ */}

        <div
          className="
            mt-12

            flex

            justify-center
          "
        >
          <Link
            href="/blogs"
            className="
              group

              inline-flex

              items-center

              gap-3

              rounded-full

              border
              border-white/10

              bg-white/[0.02]

              px-7
              py-3.5

              text-sm
              font-medium

              text-zinc-300

              transition-all
              duration-300

              hover:border-orange-500/40
              hover:bg-orange-500/5
              hover:text-white
            "
          >
            Explore all articles
            <ArrowRight
              className="
                h-4
                w-4

                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}
