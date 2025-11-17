"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const blobShapes1 = [
  "M418.5,308Q393,366,334,386.5Q275,407,217.5,393Q160,379,110.5,339.5Q61,300,74,225Q87,150,150,116.5Q213,83,274.5,97Q336,111,393.5,155.5Q451,200,418.5,308Z",
  "M400,320Q380,400,300,420Q220,440,150,400Q80,360,90,260Q100,160,180,120Q260,80,340,120Q420,160,410,240Q400,320,400,320Z",
  "M430,300Q400,370,320,400Q240,430,160,400Q80,370,90,260Q100,150,200,110Q300,70,370,130Q440,190,430,300Z",
  "M410,320Q390,390,320,410Q250,430,180,410Q110,390,90,260Q70,130,200,100Q330,70,390,150Q450,230,410,320Z",
  "M418.5,308Q393,366,334,386.5Q275,407,217.5,393Q160,379,110.5,339.5Q61,300,74,225Q87,150,150,116.5Q213,83,274.5,97Q336,111,393.5,155.5Q451,200,418.5,308Z",
];

const blobShapes2 = [
  "M440.5,293.5Q392,337,359,379Q326,421,259,425.5Q192,430,143.5,380Q95,330,71.5,259.5Q48,189,101,133.5Q154,78,229.5,75Q305,72,362,119.5Q419,167,454,208.5Q489,250,440.5,293.5Z",
  "M423,303.5Q386,357,335.5,387Q285,417,221,417.5Q157,418,115.5,369Q74,320,60,245Q46,170,108.5,122Q171,74,241,74Q311,74,365,119.5Q419,165,439.5,207.5Q460,250,423,303.5Z",
  "M456.5,310Q406,370,346,406Q286,442,218,431Q150,420,105,365Q60,310,60.5,240Q61,170,111.5,119.5Q162,69,232,69Q302,69,372,99.5Q442,130,474.5,190Q507,250,456.5,310Z",
  "M435.5,303.5Q391,357,337,380Q283,403,220.5,403.5Q158,404,108,361Q58,318,58,244Q58,170,108,120Q158,70,229,70Q300,70,365.5,105Q431,140,455.5,195Q480,250,435.5,303.5Z",
  "M440.5,293.5Q392,337,359,379Q326,421,259,425.5Q192,430,143.5,380Q95,330,71.5,259.5Q48,189,101,133.5Q154,78,229.5,75Q305,72,362,119.5Q419,167,454,208.5Q489,250,440.5,293.5Z",
];

const blobShapes3 = [
  "M409,303.5Q384,357,330,391Q276,425,212,416.5Q148,408,99.5,361Q51,314,50.5,242Q50,170,99.5,119.5Q149,69,220.5,69Q292,69,346.5,105Q401,141,417.5,195.5Q434,250,409,303.5Z",
  "M421.5,303.5Q386,357,332,380Q278,403,214,416.5Q150,430,105,375Q60,320,60,245Q60,170,105,115Q150,60,225,60Q300,60,365,95Q430,130,443.5,190Q457,250,421.5,303.5Z",
  "M456.5,310Q406,370,346,406Q286,442,218,431Q150,420,105,365Q60,310,60.5,240Q61,170,111.5,119.5Q162,69,232,69Q302,69,372,99.5Q442,130,474.5,190Q507,250,456.5,310Z",
  "M435.5,303.5Q391,357,337,380Q283,403,220.5,403.5Q158,404,108,361Q58,318,58,244Q58,170,108,120Q158,70,229,70Q300,70,365.5,105Q431,140,455.5,195Q480,250,435.5,303.5Z",
  "M409,303.5Q384,357,330,391Q276,425,212,416.5Q148,408,99.5,361Q51,314,50.5,242Q50,170,99.5,119.5Q149,69,220.5,69Q292,69,346.5,105Q401,141,417.5,195.5Q434,250,409,303.5Z",
];

export default function Blob() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <motion.svg
        viewBox="0 0 500 500"
        className="absolute w-full h-full"
        style={{ zIndex: 0 }}
        initial={false}
        animate={{
          scale: [1, 1.05, 0.95, 1],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <defs>
          <radialGradient id="blob-gradient-base" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stopColor="#FF6B6B" />
            <stop offset="70%" stopColor="#FFB86B" />
            <stop offset="100%" stopColor="#18181F" />
          </radialGradient>
        </defs>
        <motion.path
          fill="url(#blob-gradient-base)"
          style={{ filter: "blur(24px)", opacity: 0.4 }}
          d={blobShapes3[0] || "M0,0"}
          animate={{
            d: blobShapes3.length ? blobShapes3 : [blobShapes3[0] || "M0,0"],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      </motion.svg>

      <motion.svg
        viewBox="0 0 500 500"
        className="absolute w-full h-full"
        style={{ zIndex: 1 }}
        initial={false}
        animate={{
          scale: [1.05, 1, 1.05],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <defs>
          <radialGradient id="blob-gradient-2" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stopColor="#FF6B6B" />
            <stop offset="60%" stopColor="#FFB86B" />
            <stop offset="100%" stopColor="#18181F" />
          </radialGradient>
        </defs>
        <motion.path
          fill="url(#blob-gradient-2)"
          style={{ filter: "blur(16px)", opacity: 0.5 }}
          d={blobShapes2[0] || "M0,0"}
          animate={{
            d: blobShapes2.length ? blobShapes2 : [blobShapes2[0] || "M0,0"],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      </motion.svg>

      <motion.svg
        viewBox="0 0 500 500"
        className="absolute w-full h-full"
        style={{ zIndex: 2 }}
        initial={false}
        animate={{
          scale: [1, 1.08, 1],
          rotate: [0, 8, -8, 0],
        }}
        transition={{
          duration: 14,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <defs>
          <radialGradient id="blob-gradient-1" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stopColor="#FF4C29" />
            <stop offset="50%" stopColor="#FF6B6B" />
            <stop offset="100%" stopColor="#18181F" />
          </radialGradient>
        </defs>
        <motion.path
          fill="url(#blob-gradient-1)"
          style={{ filter: "blur(8px)", opacity: 0.7 }}
          d={blobShapes1[0] || "M0,0"}
          animate={{
            d: blobShapes1.length ? blobShapes1 : [blobShapes1[0] || "M0,0"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      </motion.svg>

      <div className="absolute z-[5] w-[calc(100%-20px)] h-[calc(100%-20px)] rounded-full bg-gradient-to-r from-red-500/20 to-amber-500/20 blur-xl"></div>

      <div className="relative z-10 flex items-center justify-center">
        <div className="relative">
          <Image
            src="/Leonardo.jpg"
            alt="Profile"
            width={400}
            height={400}
            className="relative w-40 h-40 xs:w-56 xs:h-56 md:w-[400px] md:h-[400px] rounded-full object-cover border-2 border-[#FF4C29] shadow-[0_0_32px_0_rgba(255,76,41,0.25)]"
            priority
          />
        </div>
      </div>
    </div>
  );
}
