import fs from "fs/promises";
import path from "path";

import Image from "next/image";
import Link from "next/link";

import { compileMDX } from "next-mdx-remote/rsc";

import matter from "gray-matter";

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

import remarkGfm from "remark-gfm";

import type { ComponentPropsWithoutRef } from "react";

const BLOGS_DIR = path.join(process.cwd(), "src/data/blogs/posts");

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

type HeadingProps = ComponentPropsWithoutRef<"h1">;

type ParagraphProps = ComponentPropsWithoutRef<"p">;

type AnchorProps = ComponentPropsWithoutRef<"a">;

type ListProps = ComponentPropsWithoutRef<"ul">;

type OrderedListProps = ComponentPropsWithoutRef<"ol">;

type ListItemProps = ComponentPropsWithoutRef<"li">;

interface ImageProps {
  src: string;
  alt?: string;
}

type CodeProps = ComponentPropsWithoutRef<"code">;

type PreProps = ComponentPropsWithoutRef<"pre">;

type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

type TableProps = ComponentPropsWithoutRef<"table">;

type TableSectionProps = ComponentPropsWithoutRef<"thead">;

type TableRowProps = ComponentPropsWithoutRef<"tr">;

type TableCellProps = ComponentPropsWithoutRef<"td">;

type TableHeaderProps = ComponentPropsWithoutRef<"th">;

/* -------------------------------------------------------------------------- */
/*                                 Helpers                                    */
/* -------------------------------------------------------------------------- */

function linkClasses() {
  return `
    font-medium
    text-orange-400
    underline
    underline-offset-4
    decoration-orange-500/30
    transition-all
    duration-300
    hover:text-orange-300
    hover:decoration-orange-300
  `;
}

function headingClasses(size: string) {
  return `
    scroll-mt-32
    font-bold
    tracking-tight
    text-white
    ${size}
  `;
}

/* -------------------------------------------------------------------------- */
/*                              MDX Components                                */
/* -------------------------------------------------------------------------- */

const mdxComponents = {
  /* -------------------------------- Headings ------------------------------- */

  h1: ({ className = "", ...props }: HeadingProps) => (
    <h1
      className={`${headingClasses("mt-16 mb-8 text-5xl")} ${className}`}
      {...props}
    />
  ),

  h2: ({ className = "", ...props }: HeadingProps) => (
    <h2
      className={`${headingClasses("mt-24 mb-8 text-4xl")} ${className}`}
      {...props}
    />
  ),

  h3: ({ className = "", ...props }: HeadingProps) => (
    <h3
      className={`${headingClasses("mt-16 mb-6 text-2xl")} ${className}`}
      {...props}
    />
  ),

  h4: ({ className = "", ...props }: HeadingProps) => (
    <h4
      className={`
        mt-12
        mb-5
        text-xl
        font-semibold
        tracking-tight
        text-white
        ${className}
      `}
      {...props}
    />
  ),

  h5: ({ className = "", ...props }: HeadingProps) => (
    <h5
      className={`
        mt-10
        mb-4
        text-lg
        font-semibold
        text-white
        ${className}
      `}
      {...props}
    />
  ),

  h6: ({ className = "", ...props }: HeadingProps) => (
    <h6
      className={`
        mt-8
        mb-4
        text-base
        font-semibold
        uppercase
        tracking-[0.2em]
        text-orange-400
        ${className}
      `}
      {...props}
    />
  ),

  /* ------------------------------- Paragraph ------------------------------- */

  p: ({ className = "", ...props }: ParagraphProps) => (
    <p
      className={`
        my-8
        text-[18px]
        leading-[1.9]
        font-normal
        tracking-[0.005em]
        text-zinc-300
        ${className}
      `}
      {...props}
    />
  ),

  /* -------------------------------- Emphasis ------------------------------- */

  strong: ({
    className = "",
    ...props
  }: ComponentPropsWithoutRef<"strong">) => (
    <strong className={`font-semibold text-white ${className}`} {...props} />
  ),

  em: ({ className = "", ...props }: ComponentPropsWithoutRef<"em">) => (
    <em className={`italic text-zinc-200 ${className}`} {...props} />
  ),

  /* ---------------------------------- Link --------------------------------- */

  a: ({ href = "", className = "", children, ...props }: AnchorProps) => {
    const external = href.startsWith("http://") || href.startsWith("https://");

    if (external) {
      return (
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkClasses()} ${className}`}
          {...props}
        >
          {children}
        </Link>
      );
    }

    return (
      <Link href={href} className={`${linkClasses()} ${className}`} {...props}>
        {children}
      </Link>
    );
  },

  /* ---------------------------------- Lists -------------------------------- */

  ul: ({ className = "", ...props }: ListProps) => (
    <ul
      className={`
        my-8
        ml-6
        list-disc
        space-y-4
        text-zinc-300
        ${className}
      `}
      {...props}
    />
  ),

  ol: ({ className = "", ...props }: OrderedListProps) => (
    <ol
      className={`
        my-8
        ml-6
        list-decimal
        space-y-4
        text-zinc-300
        ${className}
      `}
      {...props}
    />
  ),

  li: ({ className = "", ...props }: ListItemProps) => (
    <li
      className={`
        pl-2
        leading-8
        marker:text-orange-400
        ${className}
      `}
      {...props}
    />
  ),
  /* ------------------------------- Blockquote ------------------------------ */

  blockquote: ({ className = "", ...props }: BlockquoteProps) => (
    <blockquote
      className={`
        my-12
        rounded-r-2xl
        border-l-4
        border-orange-500
        bg-orange-500/5
        px-8
        py-5
        text-lg
        italic
        leading-9
        text-zinc-200
        ${className}
      `}
      {...props}
    />
  ),

  /* -------------------------------- Divider ------------------------------- */

  hr: () => (
    <div className="my-20">
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  ),

  /* -------------------------------- Images -------------------------------- */

  img: ({ src, alt = "" }: ImageProps) => (
    <figure className="my-14 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] shadow-xl">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        className="h-auto w-full object-cover"
      />

      {alt && (
        <figcaption className="border-t border-white/10 px-6 py-4 text-center text-sm text-zinc-500">
          {alt}
        </figcaption>
      )}
    </figure>
  ),

  /* ------------------------------ Inline Code ----------------------------- */

  code: ({ className = "", children, ...props }: CodeProps) => {
    if (className) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }

    return (
      <code
        className="
          rounded-md
          border
          border-white/10
          bg-zinc-900
          px-1.5
          py-1
          font-mono
          text-[0.9em]
          font-medium
          text-orange-300
        "
        {...props}
      >
        {children}
      </code>
    );
  },

  /* ------------------------------ Code Block ------------------------------ */

  pre: ({ className = "", ...props }: PreProps) => (
    <div className="my-12 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
      {/* VS Code Header */}

      <div className="flex items-center gap-2 border-b border-white/10 bg-zinc-900 px-5 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500" />

        <span className="h-3 w-3 rounded-full bg-yellow-500" />

        <span className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      <pre
        className={`
          overflow-x-auto
          bg-zinc-950
          p-6
          text-[15px]
          leading-7
          ${className}
        `}
        {...props}
      />
    </div>
  ),

  /* ------------------------------- Keyboard ------------------------------- */

  kbd: ({ className = "", ...props }: ComponentPropsWithoutRef<"kbd">) => (
    <kbd
      className={`
        rounded-md
        border
        border-white/10
        bg-zinc-900
        px-2
        py-1
        text-sm
        font-medium
        text-zinc-200
        ${className}
      `}
      {...props}
    />
  ),

  /* -------------------------------- Tables -------------------------------- */

  table: ({ className = "", ...props }: TableProps) => (
    <div className="my-12 overflow-x-auto rounded-2xl border border-white/10">
      <table className={`w-full border-collapse ${className}`} {...props} />
    </div>
  ),

  thead: ({ className = "", ...props }: TableSectionProps) => (
    <thead
      className={`border-b border-white/10 bg-white/[0.03] ${className}`}
      {...props}
    />
  ),

  tbody: ({ className = "", ...props }: ComponentPropsWithoutRef<"tbody">) => (
    <tbody className={`divide-y divide-white/10 ${className}`} {...props} />
  ),

  tr: ({ className = "", ...props }: TableRowProps) => (
    <tr
      className={`transition-colors hover:bg-white/[0.02] ${className}`}
      {...props}
    />
  ),

  th: ({ className = "", ...props }: TableHeaderProps) => (
    <th
      className={`
        px-6
        py-4
        text-left
        text-sm
        font-semibold
        uppercase
        tracking-wide
        text-white
        ${className}
      `}
      {...props}
    />
  ),

  td: ({ className = "", ...props }: TableCellProps) => (
    <td
      className={`
        px-6
        py-4
        leading-7
        text-zinc-300
        ${className}
      `}
      {...props}
    />
  ),
};

/* -------------------------------------------------------------------------- */
/*                               MDX Renderer                                 */
/* -------------------------------------------------------------------------- */

export async function renderMDX(source: string) {
  const { content } = await compileMDX({
    source,

    components: mdxComponents,

    options: {
      parseFrontmatter: true,

      mdxOptions: {
        remarkPlugins: [remarkGfm],

        rehypePlugins: [
          rehypeSlug,

          [
            rehypeAutolinkHeadings,
            {
              behavior: "append",

              properties: {
                className: ["anchor"],
              },
            },
          ],

          [
            rehypePrettyCode,
            {
              theme: "github-dark",

              keepBackground: false,

              defaultLang: "plaintext",
            },
          ],
        ],
      },
    },
  });

  return content;
}

/* -------------------------------------------------------------------------- */
/*                              Blog File Loader                              */
/* -------------------------------------------------------------------------- */

export async function loadPostContent(slug: string) {
  const filePath = path.join(BLOGS_DIR, `${slug}.mdx`);

  const file = await fs.readFile(filePath, "utf8");

  const { content } = matter(file);

  return content;
}
