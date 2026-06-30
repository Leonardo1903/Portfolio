"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

type FloatingNavItem = {
  name: string;
  link: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
};

type FloatingNavAction = {
  label: string;
  href?: string;
  onClick?: () => void;
  download?: boolean;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
};

export const FloatingNav = ({
  navItems,
  actions,
  activeLink,
  className,
}: {
  navItems: FloatingNavItem[];
  actions?: FloatingNavAction[];
  activeLink?: string;
  className?: string;
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const mainContent = document.querySelector("main");
    if (!mainContent) return;

    let previousScrollTop = mainContent.scrollTop;

    const handleScroll = () => {
      const currentScrollTop = mainContent.scrollTop;
      const direction = currentScrollTop - previousScrollTop;

      if (currentScrollTop <= 24) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }

      previousScrollTop = currentScrollTop;
    };

    handleScroll();
    mainContent.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      mainContent.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed left-1/2 top-4 z-[5000] flex w-[min(96vw,980px)] max-w-fit -translate-x-1/2 items-center justify-center",
          className,
        )}
      >
        <div className="flex w-full flex-col gap-3 rounded-full border border-white/10 bg-[#09090C]/85 px-3 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.4)] backdrop-blur-2xl lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {navItems.map((navItem, idx: number) => {
              const isActive =
                navItem.active ?? activeLink === navItem.link.replace("#", "");

              return (
                <button
                  key={`link-${idx}`}
                  type="button"
                  onClick={navItem.onClick}
                  className={cn(
                    "relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    "border border-transparent hover:border-red-400/30 hover:bg-gradient-to-r hover:from-red-500/20 hover:to-amber-500/20 hover:text-red-200",
                    isActive
                      ? "border-red-400/30 bg-white/10 text-red-200"
                      : "bg-white/5 text-white/80",
                  )}
                >
                  <span className="block sm:hidden">{navItem.icon}</span>
                  <span className="hidden sm:block">{navItem.name}</span>
                </button>
              );
            })}
          </div>

          <div className="relative z-10 flex items-center justify-center gap-2">
            {(actions ?? []).map((action, idx) => {
              const baseClassName =
                action.variant === "secondary"
                  ? "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 transition hover:border-amber-400/30 hover:bg-white/10 hover:text-white"
                  : "rounded-full bg-gradient-to-r from-red-600 to-amber-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-950/30 transition duration-300 hover:from-red-700 hover:to-amber-700";

              if (action.href) {
                return (
                  <a
                    key={`action-${idx}`}
                    href={action.href}
                    download={action.download}
                    className={baseClassName}
                  >
                    {action.icon}
                    <span className={action.icon ? "ml-2" : ""}>
                      {action.label}
                    </span>
                  </a>
                );
              }

              return (
                <button
                  key={`action-${idx}`}
                  type="button"
                  onClick={action.onClick}
                  className={baseClassName}
                >
                  {action.icon}
                  <span className={action.icon ? "ml-2" : ""}>
                    {action.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
