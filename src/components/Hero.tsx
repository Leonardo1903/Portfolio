"use client";
import { useEffect, useState } from "react";
import Blob from "@/components/Blob";
import SocialLinks from "@/components/SocialLinks";
import { motion } from "framer-motion";
import content from "../../public/Data.json";

type TypingText = string;

export default function Hero() {
  const [currentText, setCurrentText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [typing, setTyping] = useState<boolean>(true);
  const [charIndex, setCharIndex] = useState<number>(0);

  const typingTexts: TypingText[] = content.hero.roles;

  const handleTypingEffect = (): (() => void) => {
    let timeout: NodeJS.Timeout;

    if (typing) {
      if (charIndex < typingTexts[currentIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(
            (prev: string) => prev + typingTexts[currentIndex][charIndex],
          );
          setCharIndex((prev: number) => prev + 1);
        }, 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      timeout = setTimeout(() => {
        setCurrentText("");
        setCharIndex(0);
        setCurrentIndex((prev: number) => (prev + 1) % typingTexts.length);
        setTyping(true);
      }, 600);
    }

    return (): void => clearTimeout(timeout);
  };

  useEffect(() => {
    const cleanup = handleTypingEffect();
    return cleanup;
  }, [charIndex, typing, currentIndex]);

  return (
    <div className="w-full min-h-screen flex items-center bg-[#09090C] relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl" />
        <div className="absolute top-1/4 left-1/3 w-2/3 h-1/3 bg-gradient-to-r from-red-400/20 via-orange-400/10 to-amber-400/10 blur-3xl rounded-full opacity-40" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/4 bg-gradient-to-tl from-amber-400/15 to-transparent blur-2xl rounded-full opacity-20" />
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full px-4 z-10 gap-10 md:gap-0 pb-10 md:pb-0">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-4 md:mt-0 bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/10">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {content.hero.title}
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              {content.hero.subtitle}
            </p>
            <span className="inline-block h-10 md:h-14">
              <span className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                {currentText}
                <span className="animate-pulse text-white">|</span>
              </span>
            </span>
          </motion.div>
          <div className="w-full flex justify-center md:justify-start mt-6">
            <SocialLinks />
          </div>
        </div>
        <div className="flex justify-center w-full md:w-auto">
          <div className="w-[250px] h-[250px] xs:w-[300px] xs:h-[300px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px]">
            <Blob />
          </div>
        </div>
      </div>
    </div>
  );
}
