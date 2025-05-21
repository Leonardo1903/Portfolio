'use client';
import React, { useState, useEffect } from 'react';
import Preloader from '@/components/ui/preloader';
import { AnimatePresence } from 'framer-motion';
import Hero from "@/components/Hero";


const assets = [
  '/_next/static/media/Profile.jpeg',
  // Add more image/font URLs here if needed
];

function preloadImage(src) {
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
      {!loader && <Hero />}
    </>
  );
}