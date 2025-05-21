import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const links = [
  {
    href: "https://github.com/Leonardo1903",
    icon: <Github size={24} />,
    title: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/leonardofernandes1903/",
    icon: <Linkedin size={24} />,
    title: "LinkedIn",
  },
  {
    href: "https://x.com/Leonardo_3419",
    icon: <Twitter size={24} />,
    title: "Twitter",
  },
];

export default function SocialLinks() {
  return (
    <TooltipProvider>
      <div
        className="
          flex gap-4
          items-center
          mt-6
        "
      >
        {links.map((link) => (
          <Tooltip key={link.title}>
            <TooltipTrigger asChild>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-colors"
                aria-label={link.title}
              >
                <span
                  className="
                    flex items-center justify-center
                    w-12 h-12
                    rounded-full
                    bg-black/70
                    backdrop-blur-2xl
                    border border-[#23232D]
                    shadow-lg
                    transition
                    hover:scale-105
                  "
                >
                  <span className="transition-colors transform text-red-400 group-hover:text-white group-hover:scale-110">
                    {link.icon}
                  </span>
                </span>
              </a>
            </TooltipTrigger>
            <TooltipContent
              side="top"
              className="bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded shadow-lg border border-white/20"
            >
              {link.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
