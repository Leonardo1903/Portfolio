"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Home,
  Folder,
  Briefcase,
  Mail,
  User,
  SquarePen,
  Download,
  ExternalLink,
  LucideIcon,
} from "lucide-react";
import AnimatedHamburgerButton from "@/components/AnimatedHamburgerButton";

interface NavItem {
  title: string;
  url: string;
  icon: LucideIcon;
  external?: boolean;
}

const navItems: NavItem[] = [
  { title: "Home", url: "#home", icon: Home },
  { title: "About", url: "#about", icon: User },
  { title: "Experience", url: "#experience", icon: Briefcase },
  { title: "Projects", url: "#projects", icon: Folder },
  { title: "Blog", url: "#blogs", icon: SquarePen },
  { title: "Contact", url: "#contact", icon: Mail },
];

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const scrollToSection = (sectionId: string): void => {
    setOpenMobile(false);
    const section = document.getElementById(sectionId);
    if (section) {
      const mainContent = document.querySelector("main");
      if (mainContent) {
        mainContent.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const mainContent = document.querySelector("main");
      if (!mainContent) return;

      const scrollPosition = mainContent.scrollTop;

      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (
          scrollPosition >= sectionTop - 100 &&
          scrollPosition < sectionTop + sectionHeight - 100
        ) {
          const sectionId = section.getAttribute("id");
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const mainContent = document.querySelector("main");
    if (mainContent) {
      mainContent.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (mainContent) {
        mainContent.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const gradientText: string =
    "bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_2px_24px_rgba(255,76,41,0.25)]";
  const gradientNavItem: string =
    "hover:bg-gradient-to-r hover:from-red-500/20 hover:to-amber-500/20 hover:text-red-400";
  const gradientButton: string =
    "px-6 py-3 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white rounded-3xl shadow-lg transition duration-300";

  return (
    <>
      <div className="md:hidden">
        <div className="fixed top-4 right-4 z-50">
          <AnimatedHamburgerButton
            active={openMobile}
            onClick={() => setOpenMobile((prev: boolean) => !prev)}
          />
        </div>
        {openMobile && (
          <div className="fixed inset-0 z-40 flex">
            <nav className="w-4/5 max-w-xs min-w-[250px] h-full relative flex flex-col overflow-hidden border-r border-[#23232D] shadow-2xl bg-black/70 backdrop-blur-2xl">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl" />
                <div className="absolute top-1/4 left-1/3 w-2/3 h-1/3 bg-gradient-to-r from-red-400/20 via-orange-400/10 to-amber-400/10 blur-3xl rounded-full opacity-40" />
                <div className="absolute bottom-0 right-0 w-1/3 h-1/4 bg-gradient-to-tl from-amber-400/15 to-transparent blur-2xl rounded-full opacity-20" />
              </div>
              <div className="flex flex-col items-center justify-center py-10 z-10">
                <Avatar className="mb-4 w-10 h-10">
                  <AvatarImage src="/Profile.jpeg" alt="Leonardo Fernandes" />
                  <AvatarFallback>LF</AvatarFallback>
                </Avatar>
                <h1 className={`text-2xl font-bold ${gradientText}`}>
                  Leonardo Fernandes
                </h1>
              </div>
              <Separator />
              <div className="flex flex-col items-center space-y-4 w-full mt-8 z-10 max-h-[60vh] overflow-y-auto">
                {navItems.map(({ title, url, icon: Icon }: NavItem) => (
                  <button
                    key={title}
                    onClick={() => scrollToSection(url.substring(1))}
                    className={`flex items-center justify-start w-4/5 p-2 text-[#F3F4F6] rounded-md transition ${gradientNavItem} ${
                      activeSection === url.substring(1)
                        ? "bg-gradient-to-r from-red-500/20 to-amber-500/20 text-red-400"
                        : ""
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3 text-red-400" />
                    <span className="text-base">{title}</span>
                  </button>
                ))}
              </div>
              <div className="mt-auto mb-20 flex justify-center z-10">
                <Button
                  asChild
                  className={`flex items-center px-4 w-1/2 justify-center rounded-2xl shadow-lg ${gradientButton}`}
                  onClick={() => setOpenMobile(false)}
                >
                  <a href="/Resume.pdf" download>
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </a>
                </Button>
              </div>
            </nav>
            <div
              className="flex-1 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpenMobile(false)}
            />
          </div>
        )}
      </div>

      <nav className="hidden md:flex flex-col w-1/4 h-screen top-0 relative overflow-hidden border-r border-[#23232D] bg-black/70 backdrop-blur-2xl">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl" />
          <div className="absolute top-1/4 left-1/3 w-2/3 h-1/3 bg-gradient-to-r from-red-400/20 via-orange-400/10 to-amber-400/10 blur-3xl rounded-full opacity-40" />
          <div className="absolute bottom-0 right-0 w-1/3 h-1/4 bg-gradient-to-tl from-amber-400/15 to-transparent blur-2xl rounded-full opacity-20" />
        </div>
        <div className="flex flex-col items-center justify-center py-10 z-10">
          <Avatar className="mb-4 w-10 h-10">
            <AvatarImage src="/Profile.jpeg" alt="Leonardo Fernandes" />
            <AvatarFallback>LF</AvatarFallback>
          </Avatar>
          <h1 className={`text-2xl font-bold ${gradientText}`}>
            Leonardo Fernandes
          </h1>
        </div>
        <Separator />
        <div className="flex flex-col items-center space-y-4 w-full mt-8 z-10 max-h-[60vh] overflow-y-auto">
          {navItems.map(({ title, url, icon: Icon, external }: NavItem) => (
            <button
              key={title}
              onClick={() => {
                if (external) {
                  window.open(url, "_blank", "noopener,noreferrer");
                  setOpenMobile(false);
                } else {
                  scrollToSection(url.substring(1));
                }
              }}
              className={`flex items-center justify-start w-4/5 p-2 text-[#F3F4F6] rounded-md transition ${gradientNavItem} ${
                activeSection === url.substring(1)
                  ? "bg-gradient-to-r from-red-500/20 to-amber-500/20 text-red-400"
                  : ""
              } group`}
            >
              <Icon className="w-5 h-5 mr-3 text-red-400" />
              <span className="text-base">{title}</span>
              {external && (
                <ExternalLink
                  className="w-4 h-4 ml-2 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  aria-label="External link"
                />
              )}
            </button>
          ))}
        </div>
        <div className="mt-auto mb-20 flex justify-center z-10">
          <Button
            asChild
            className={`flex items-center px-4 w-1/2 justify-center rounded-2xl shadow-lg ${gradientButton}`}
          >
            <a href="/Resume.pdf" download>
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </Button>
        </div>
      </nav>
    </>
  );
}
