"use client";

import Blob from "@/components/Blob";
import SocialLinks from "@/components/SocialLinks";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex items-center min-h-[85vh] overflow-hidden bg-[#09090C] py-30">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-2xl" />

        <div className="absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-red-500/10 blur-[120px]" />
      </div>

      <Container>
        <div className="relative z-10 flex flex-col-reverse items-center justify-between gap-10 lg:flex-row">
          <motion.div
            className="w-full lg:w-[52%]"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-orange-400">
              FULL-STACK ENGINEER • TYPESCRIPT + PYTHON
            </p>
            <h1 className="max-w-3xl text-3xl font-bold leading-[1.1] text-white md:text-4xl lg:text-5xl">
              Full-Stack Engineer Building
              <br />
              SaaS Products, AI Systems
              <br />& Mobile Applications
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-400 md:text-lg">
              I'm Leonardo Fernandes, a Full-Stack Engineer building
              production-grade SaaS products, AI systems and mobile applications
              with TypeScript and Python.
              <br />
              My interests lie at the intersection of software engineering,
              distributed systems and intelligent applications.
            </p>
            <div className="mt-8">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-zinc-500">
                Current Focus
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
                  SaaS Architecture
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
                  AI Systems
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
                  Mobile Applications
                </span>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="rounded-xl bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105"
              >
                View Projects
              </Link>

              <Link
                href="/blog"
                className="rounded-xl border border-zinc-700 px-6 py-3 font-medium text-white transition-all duration-300 hover:border-orange-500 hover:bg-white/5"
              >
                Read Blog
              </Link>

              <div className="ml-2 flex items-center">
                <SocialLinks />
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-8 text-sm text-zinc-400">
              <div>
                <span className="font-semibold text-white">10+</span> Technical
                Articles
              </div>

              <div>
                <span className="font-semibold text-white">Open Source</span>{" "}
                Contributor
              </div>

              <div>
                <span className="font-semibold text-white">
                  Production-Focused Engineer
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex w-full justify-center lg:w-[48%]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="
                w-[280px]
                h-[280px]
                md:w-[340px]
                md:h-[340px]
                lg:w-[420px]
                lg:h-[420px]
              "
            >
              <Blob />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
