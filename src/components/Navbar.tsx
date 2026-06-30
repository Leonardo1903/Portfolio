"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { AnimatePresence, motion, Variants } from "framer-motion";

import { Menu, X, ArrowUpRight, Github, Linkedin } from "lucide-react";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Work",
    href: "/projects",
  },
  {
    label: "Writings",
    href: "/blogs",
  },
];

const mobileMenuVariants: Variants = {
  closed: {
    x: "100%",
    transition: {
      duration: 0.45,
      ease: [0.76, 0, 0.24, 1],
    },
  },

  open: {
    x: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const menuItemVariants: Variants = {
  closed: {
    opacity: 0,
    x: 30,
  },

  open: {
    opacity: 1,
    x: 0,
  },
};

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`
    fixed
    inset-x-0
    top-0
    z-50
    transition-[background,border-color,backdrop-filter]
duration-300
ease-out

    ${
      isScrolled
        ? "border-b border-white/10 bg-black/60 backdrop-blur-xl"
        : "bg-transparent"
    }
  `}
      >
        <div
          className="
            mx-auto

            flex

            h-18

            max-w-7xl

            items-center

            justify-between

            px-6

            lg:px-10
          "
        >
          <nav className="hidden items-center gap-2 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  relative

                  rounded-xl

                  px-5
                  py-2.5

                  text-sm
                  font-medium

                  transition-colors

                  hover:text-white
                "
              >
                <span
                  className={
                    isActive(item.href) ? "text-white" : "text-zinc-400"
                  }
                >
                  {item.label}
                </span>

                {isActive(item.href) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="
                      absolute

                      inset-x-2
                      bottom-1

                      h-[2px]

                      rounded-full

                      bg-gradient-to-r
                      from-orange-500
                      to-amber-400
                    "
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 35,
                    }}
                  />
                )}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/Resume.pdf"
              target="_blank"
              className="
                rounded-xl

                border
                border-white/10

                px-5
                py-2.5

                text-sm
                font-medium

                text-zinc-300

                transition-all

                hover:border-orange-500/30
                hover:bg-white/[0.03]
                hover:text-white
              "
            >
              Resume
            </Link>
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
              flex

              h-11
              w-11

              items-center
              justify-center

              rounded-xl

              border
              border-white/10

              bg-white/[0.03]

              text-white

              transition

              hover:border-orange-500/30

              lg:hidden
            "
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="
                fixed
                inset-0
                z-40

                bg-black/70

                backdrop-blur-xl

                lg:hidden
              "
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu */}

            <motion.aside
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="
                fixed

                right-0
                top-0

                z-50

                flex

                h-screen
                w-full

                max-w-sm

                flex-col

                border-l
                border-white/10

                bg-[#09090C]

                px-8
                py-8

                shadow-2xl

                lg:hidden
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">Navigation</h2>

                  <p className="mt-1 text-sm text-zinc-500">
                    Explore the portfolio
                  </p>
                </div>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="
                    flex

                    h-11
                    w-11

                    items-center
                    justify-center

                    rounded-xl

                    border
                    border-white/10

                    bg-white/[0.03]

                    transition

                    hover:border-orange-500/30
                  "
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </div>

              {/* ========================================================== */}
              {/* Navigation Links */}
              {/* ========================================================== */}

              <motion.nav
                variants={mobileMenuVariants}
                className="mt-14 flex flex-col gap-3"
              >
                {navigation.map((item) => (
                  <motion.div key={item.href} variants={menuItemVariants}>
                    <Link
                      href={item.href}
                      className={`
                        flex

                        items-center

                        justify-between

                        rounded-2xl

                        px-5
                        py-4

                        text-lg
                        font-medium

                        transition-all

                        ${
                          isActive(item.href)
                            ? "border border-orange-500/20 bg-orange-500/10 text-orange-300"
                            : "border border-transparent text-zinc-300 hover:border-white/10 hover:bg-white/[0.03] hover:text-white"
                        }
                      `}
                    >
                      <span>{item.label}</span>

                      {isActive(item.href) && (
                        <div
                          className="
                            h-2
                            w-2

                            rounded-full

                            bg-orange-400
                          "
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
              {/* ========================================================== */}
              {/* Actions */}
              {/* ========================================================== */}

              <motion.div
                variants={menuItemVariants}
                className="mt-12 space-y-4"
              >
                <Link
                  href="/Resume.pdf"
                  target="_blank"
                  className="
                    inline-flex

                    w-full

                    items-center
                    justify-center

                    rounded-2xl

                    bg-orange-500

                    px-6
                    py-4

                    font-medium

                    text-white

                    transition-all

                    hover:bg-orange-400
                  "
                >
                  Download Resume
                </Link>
              </motion.div>

              {/* ========================================================== */}
              {/* Socials */}
              {/* ========================================================== */}

              <motion.div variants={menuItemVariants} className="mt-12">
                <p className="mb-5 text-xs uppercase tracking-[0.3em] text-zinc-500">
                  Connect
                </p>

                <div className="flex gap-4">
                  <Link
                    href="https://github.com/Leonardo1903"
                    target="_blank"
                    className="
                      flex

                      h-12
                      w-12

                      items-center
                      justify-center

                      rounded-xl

                      border
                      border-white/10

                      bg-white/[0.03]

                      transition-all

                      hover:border-orange-500/30
                      hover:bg-white/[0.05]
                    "
                  >
                    <Github className="h-5 w-5 text-white" />
                  </Link>

                  <Link
                    href="https://linkedin.com/in/leonardo1903"
                    target="_blank"
                    className="
                      flex

                      h-12
                      w-12

                      items-center
                      justify-center

                      rounded-xl

                      border
                      border-white/10

                      bg-white/[0.03]

                      transition-all

                      hover:border-orange-500/30
                      hover:bg-white/[0.05]
                    "
                  >
                    <Linkedin className="h-5 w-5 text-white" />
                  </Link>
                </div>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
