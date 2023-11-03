import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { handleScroll } from "@/utils/scrollUtils";

import Head from "next/head";
import About from "@/pages/About";
import Clients from "@/pages/Clients";
import Services from "@/pages/Services";
import CTA from "@/pages/Cta";
import Hero from "@/pages/Hero";
import NavBar from "@/pages/NavBar";

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollHandler = handleScroll(containerRef);

    if (containerRef.current) {
      containerRef.current.addEventListener(
        "wheel",
        scrollHandler as unknown as EventListener,
        { passive: false },
      );

      return () => {
        if (containerRef.current) {
          containerRef.current.removeEventListener(
            "wheel",
            scrollHandler as unknown as EventListener,
          );
        }
      };
    }
  }, []);

  return (
    <>
      <Head>
        <title>Handmade Code</title>
        <meta name="description" content="powered by jjcx" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/aurora/Aurora.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/aurora/Aurora.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </Head>
      <main className="relative min-h-screen">
        <NavBar />
        <div ref={containerRef}>
          <Hero />
          <About />
          <Services />
          <Clients />
          <CTA />
        </div>
      </main>
    </>
  );
};

export default Home;
