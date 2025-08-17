"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface Dimension {
  width: number;
  height: number;
}

interface PreloaderProps {
  progress?: number;
}

const slideUp: Variants = {
  initial: { top: 0 },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export default function Preloader({ progress = 0 }: PreloaderProps) {
  const [dimension, setDimension] = useState<Dimension>({ width: 0, height: 0 });
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => setShow(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  const initialPath: string = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  
  const targetPath: string = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve: Variants = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          variants={slideUp}
          initial="initial"
          exit="exit"
          className="h-[100vh] w-[100vw] flex flex-col items-center justify-center fixed top-0 left-0 z-[99] bg-[#09090C] backdrop-blur-xl"
          style={{
            background: "linear-gradient(120deg, #09090C 80%, #FF4C29 120%)",
            borderBottom: "1px solid #23232D",
          }}
        >
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl" />
            <div className="absolute top-1/6 left-1/8 w-1/3 h-1/4 bg-gradient-to-br from-red-400/50 via-orange-400/30 to-amber-400/20 blur-3xl rounded-full opacity-60" />
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-amber-400/40 to-transparent blur-2xl rounded-full opacity-50" />
            <div className="absolute top-0 right-0 w-1/4 h-1/5 bg-gradient-to-bl from-orange-400/40 to-red-400/10 blur-2xl rounded-full opacity-40" />
            <div className="absolute bottom-10 left-0 w-1/4 h-1/5 bg-gradient-to-tr from-red-400/30 to-amber-400/10 blur-2xl rounded-full opacity-40" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/6 bg-gradient-to-r from-red-400/20 via-orange-400/20 to-amber-400/20 blur-2xl rounded-full opacity-30" />
            <div className="absolute top-10 right-1/3 w-1/4 h-1/6 bg-gradient-to-tr from-orange-400/30 to-red-400/20 blur-2xl rounded-full opacity-30" />
          </div>

          <div className="mb-6 flex flex-col items-center z-20">
            <span className="text-6xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_2px_24px_rgba(255,76,41,0.25)]">
              Leonardo Fernandes
            </span>
            <span className="mt-2 text-lg text-[#F3F4F6] font-medium tracking-wide">
              Now Loading...
            </span>
          </div>
          <div className="w-2/3 max-w-md mx-auto mt-8 h-2 bg-[#23232D] rounded-full overflow-hidden z-20">
            <div
              className="h-full bg-gradient-to-r from-[#FF4C29] to-[#FFB86B] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 text-[#FFB86B] font-mono text-xs tracking-widest z-20">
            {progress < 100 ? `${progress}% loaded` : "100% loaded"}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}