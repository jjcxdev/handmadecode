import LoadingImage from "@/components/LoadingImage";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { handleScroll } from "@/utils/scrollUtils";
import NavBar from "./NavBar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Clients from "./Clients";
import CTA from "./Cta";

import Head from "next/head";

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

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
  });

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 8000);
    return () => clearTimeout(loadingTimeout);
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
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-orange-900">
          <LoadingImage
            finalSrc="/images/loadingFinal.png"
            alt="Handmade Code Loading"
          />
        </div>
      )}
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
