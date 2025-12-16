"use client";
import { useState, useEffect } from "react";
import Preloader from "@/components/ui/preloader";
import { AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";

const staticAssets = [
  "/Profile.jpeg",
  "/Leonardo.jpg",
  "/EchoVault.png",
  "/OgImage.png",
  "/QuikNote.png",
  "/Arkive.png",
  "/Resume.pdf",
];

function preloadImage(src: string) {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.onload = resolve;
    img.onerror = resolve;
    img.src = src;
  });
}

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [loader, setLoader] = useState(true);
  const [blogImages, setBlogImages] = useState<string[]>([]);

  useEffect(() => {
    let isMounted = true;
    let loaded = 0;
    let blogCovers: string[] = [];

    async function fetchBlogImages() {
      try {
        type HashnodeEdge = {
          node?: {
            coverImage?: { url?: string } | null;
          } | null;
        };
        type HashnodeResponse = {
          data?: {
            publication?: {
              posts?: {
                edges?: HashnodeEdge[] | null;
              } | null;
            } | null;
          } | null;
        };

        const query = `
          query Publication {
            publication(host: "${process.env.NEXT_PUBLIC_HASHNODE_USERNAME}") {
              posts(first: 6) {
                edges {
                  node {
                    coverImage { url }
                  }
                }
              }
            }
          }
        `;
        const endpoint = process.env.NEXT_PUBLIC_HASHNODE_API || "";
        if (!endpoint) return [];
        const json = (await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query }),
        }).then((res) => res.json())) as HashnodeResponse;
        const edges = json?.data?.publication?.posts?.edges ?? [];
        blogCovers =
          edges
            .map((edge) => edge?.node?.coverImage?.url)
            .filter(Boolean) as string[] || [];
        if (isMounted) setBlogImages(blogCovers);
        return blogCovers;
      } catch {
        return [];
      }
    }

    async function preloadAll() {
      const covers = await fetchBlogImages();
      const allAssets = [...staticAssets, ...covers];
      const total = allAssets.length + 1;

      const fontPromise = document.fonts
        ? document.fonts.ready.then(() => {
            loaded += 1;
            if (isMounted) setProgress(Math.round((loaded / total) * 100));
          })
        : Promise.resolve();

      await Promise.all([
        ...allAssets.map((src) =>
          preloadImage(src).then(() => {
            loaded += 1;
            if (isMounted) setProgress(Math.round((loaded / total) * 100));
          })
        ),
        fontPromise,
      ]);
      if (isMounted) setProgress(100);
      setTimeout(() => {
        if (isMounted) setLoader(false);
      }, 400);
    }

    preloadAll();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loader && <Preloader progress={progress} />}
      </AnimatePresence>
      {!loader && (
        <>
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="blogs">
            <Blogs />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </>
      )}
    </>
  );
}
