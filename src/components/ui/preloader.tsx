"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

interface Dimension {
  width: number;
  height: number;
}

interface PreloaderProps {
  progress?: number;
}

const slideUp: Variants = {
  initial: {
    top: 0,
  },

  exit: {
    top: "-100vh",

    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.2,
    },
  },
};

export default function Preloader({
  progress = 0,
}: PreloaderProps) {
  const [dimension, setDimension] = useState<Dimension>({
    width: 0,
    height: 0,
  });

  const [show, setShow] = useState(false);

  const [shouldAnimate, setShouldAnimate] =
    useState(false);

  useEffect(() => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const hasVisited = sessionStorage.getItem(
      "portfolio-loaded"
    );

    if (hasVisited) {
      setShow(false);
      return;
    }

    sessionStorage.setItem(
      "portfolio-loaded",
      "true"
    );

    setShow(true);
    setShouldAnimate(true);
  }, []);

  useEffect(() => {
    if (!shouldAnimate) return;

    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setShow(false);
      }, 400);

      return () => clearTimeout(timeout);
    }
  }, [progress, shouldAnimate]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${
    dimension.height + 300
  } 0 ${dimension.height} L0 0`;

  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${
    dimension.height
  } 0 ${dimension.height} L0 0`;

  const curve: Variants = {
    initial: {
      d: initialPath,

      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1],
      },
    },

    exit: {
      d: targetPath,

      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.3,
      },
    },
  };

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        variants={slideUp}
        initial="initial"
        exit="exit"
        className="
          fixed
          left-0
          top-0
          z-[999]

          flex
          h-screen
          w-screen
          flex-col
          items-center
          justify-center

          overflow-hidden

          bg-[#09090C]
        "
        style={{
          background:
            "linear-gradient(120deg,#09090C 80%,#FF4C29 120%)",

          borderBottom:
            "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Background */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl" />

          <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-orange-500/20 blur-[120px]" />

          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-500/20 blur-[120px]" />

          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400/10 blur-[100px]" />
        </div>

        {/* Logo */}

        <div className="relative z-20 text-center">
          <motion.h1
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              bg-gradient-to-r
              from-red-400
              via-orange-400
              to-amber-400
              bg-clip-text

              text-6xl
              font-bold

              text-transparent
            "
          >
            Leonardo Fernandes
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
            }}
            className="
              mt-3

              text-lg

              tracking-wide

              text-zinc-300
            "
          >
            Building Production Software
          </motion.p>
        </div>

        {/* Progress */}

        <div className="relative z-20 mt-12 w-72">
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400"
              animate={{
                width: `${progress}%`,
              }}
            />
          </div>

          <div className="mt-3 text-center font-mono text-xs tracking-[0.3em] text-orange-300">
            {progress}%
          </div>
        </div>
        <svg
          className="absolute bottom-[-299px] left-0 h-[300px] w-full"
        >
          <motion.path
            variants={curve}
            initial="initial"
            exit="exit"
            fill="#09090C"
          />
        </svg>
      </motion.div>
    </AnimatePresence>
  );
}