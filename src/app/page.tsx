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

const assets = [
  "/Profile.jpeg",
  "/Leonardo.jpg",
  "/EchoVault.png",
  "/QuikNote.png",
  "/Concise.png",
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

  useEffect(() => {
    let isMounted = true;
    let loaded = 0;
    const total = assets.length + 1;

    const fontPromise = document.fonts
      ? document.fonts.ready.then(() => {
          loaded += 1;
          if (isMounted) setProgress(Math.round((loaded / total) * 100));
        })
      : Promise.resolve();

    Promise.all([
      ...assets.map((src) =>
        preloadImage(src).then(() => {
          loaded += 1;
          if (isMounted) setProgress(Math.round((loaded / total) * 100));
        })
      ),
      fontPromise,
    ]).then(() => {
      if (isMounted) setProgress(100);
      setTimeout(() => {
        if (isMounted) setLoader(false);
      }, 400);
    });

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
