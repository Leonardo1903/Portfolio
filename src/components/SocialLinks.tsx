import { Github, Linkedin, Twitter } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { ReactElement } from "react";

interface SocialLink {
  href: string;
  icon: ReactElement;
  title: string;
}

const links: SocialLink[] = [
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
      <div className="flex gap-4 items-center mt-3">
        {links.map((link: SocialLink) => (
          <Tooltip key={link.title}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black/70 border border-[#23232D] shadow-lg hover:bg-gradient-to-r hover:from-red-500/20 hover:to-amber-500/20 transition"
                asChild
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.title}
                >
                  <span className="text-red-400 group-hover:text-white group-hover:scale-110 transition-colors">
                    {link.icon}
                  </span>
                </a>
              </Button>
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