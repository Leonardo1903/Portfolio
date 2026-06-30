"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Download,
  MapPin,
} from "lucide-react";
import Container from "@/components/ui/Container";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const focusAreas = [
  "SaaS Products",
  "AI Systems",
  "Mobile Applications",
  "Developer Tools",
];

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-[#09090C] py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl" />

        <div className="absolute right-1/3 top-1/3 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-red-500/10 blur-[120px]" />
      </div>

      <Container>
        <div className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <motion.p
              variants={fadeIn}
              className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400"
            >
              Contact
            </motion.p>

            <motion.h2
              variants={fadeIn}
              className="text-3xl font-bold text-white md:text-4xl"
            >
              Let's Build Something Together
            </motion.h2>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-[60%_40%]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={fadeIn}>
                <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                  Open to Collaborations & Opportunities
                </div>
              </motion.div>

              <motion.div variants={fadeIn}>
                <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">
                  Whether you're building a SaaS product, exploring AI systems,
                  launching a mobile application, or looking for an engineer to
                  help bring an idea to production, I'd love to hear about it.
                </p>
              </motion.div>
              <motion.div variants={fadeIn} className="flex flex-wrap gap-3">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-3 py-1.5
                      text-sm
                      text-zinc-300
                    "
                  >
                    {area}
                  </span>
                ))}
              </motion.div>
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <a
                  href="mailto:leonardofernandes3419@gmail.com"
                  className="
                    inline-flex
                    items-center
                    rounded-xl
                    bg-gradient-to-r
                    from-red-500
                    to-orange-500
                    px-6
                    py-3
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    rounded-xl
                    border
                    border-white/10
                    px-6
                    py-3
                    text-white
                    transition-all
                    duration-300
                    hover:border-orange-500/30
                    hover:bg-white/5
                  "
                >
                  <Download className="mr-2 h-4 w-4" />
                  View Resume
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="
    rounded-3xl
    border
    border-orange-500/10
    bg-white/[0.04]
    p-8
    backdrop-blur-xl
  "
            >
              <h3 className="mb-6 text-2xl font-semibold text-white">
                Connect With Me
              </h3>

              <div className="mb-8 flex items-center gap-3 text-zinc-400">
                <MapPin className="h-5 w-5 text-orange-400" />
                <span>India • Open to Remote Opportunities</span>
              </div>

              <div className="space-y-5">
                <a
                  href="https://github.com/Leonardo1903"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
        flex
        items-center
        gap-4
        text-zinc-300
        transition-colors
        hover:text-white
      "
                >
                  <Github className="h-5 w-5 text-orange-400" />
                  <div>
                    <p className="text-sm text-zinc-500">GitHub</p>
                    <p>github.com/Leonardo1903</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/leonardofernandes1903/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
        flex
        items-center
        gap-4
        text-zinc-300
        transition-colors
        hover:text-white
      "
                >
                  <Linkedin className="h-5 w-5 text-orange-400" />
                  <div>
                    <p className="text-sm text-zinc-500">LinkedIn</p>
                    <p>leonardofernandes1903</p>
                  </div>
                </a>

                <a
                  href="https://x.com/Leonardo_3419"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
        flex
        items-center
        gap-4
        text-zinc-300
        transition-colors
        hover:text-white
      "
                >
                  <Twitter className="h-5 w-5 text-orange-400" />
                  <div>
                    <p className="text-sm text-zinc-500">Twitter / X</p>
                    <p>@Leonardo_3419</p>
                  </div>
                </a>

                <a
                  href="mailto:leonardofernandes3419@gmail.com"
                  className="
        flex
        items-center
        gap-4
        text-zinc-300
        transition-colors
        hover:text-white
      "
                >
                  <Mail className="h-5 w-5 text-orange-400" />
                  <div>
                    <p className="text-sm text-zinc-500">Email</p>
                    <p>leonardofernandes3419@gmail.com</p>
                  </div>
                </a>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm text-zinc-500">
                  Typically respond within 24 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
