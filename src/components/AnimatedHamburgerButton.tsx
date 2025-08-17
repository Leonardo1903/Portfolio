import { MotionConfig, motion, Variants } from "framer-motion";

interface AnimatedHamburgerButtonProps {
  active: boolean;
  onClick: () => void;
}

interface VariantConfig {
  top: Variants;
  middle: Variants;
  bottom: Variants;
}

const VARIANTS: VariantConfig = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};

export default function AnimatedHamburgerButton({ 
  active, 
  onClick 
}: AnimatedHamburgerButtonProps){
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        type="button"
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={onClick}
        aria-label={active ? "Close navigation" : "Open navigation"}
        className="h-16 w-16 rounded-full bg-[#18181F]/70 backdrop-blur-lg border border-[#23232D] shadow-lg transition-colors hover:bg-gradient-to-br hover:from-[#FF4C29]/30 hover:to-[#FFB86B]/30 hover:border-[#FF4C29] relative"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-10 bg-gradient-to-r from-[#FF4C29] via-[#FF6B6B] to-[#FFB86B] shadow-[0_0_8px_0_#FF4C29] rounded"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-10 bg-[#F3F4F6] rounded"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-5 bg-gradient-to-r from-[#FFB86B] via-[#FF6B6B] to-[#FF4C29] shadow-[0_0_8px_0_#FFB86B] rounded"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
}