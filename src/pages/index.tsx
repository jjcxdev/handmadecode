import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { handleScroll } from "@/utils/scrollUtils";

import Head from "next/head";
import About from "./about";
import Clients from "./clients";
import Services from "./services";
import CTA from "./cta";
import Hero from "./hero";

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
        <title>Homemade Code</title>
        <meta name="description" content="powered by jjcx" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative min-h-screen">
        <nav className="fixed top-0 z-50 flex h-14 w-full flex-row justify-between bg-transparent px-4 md:h-36 md:px-24">
          <div className="flex h-full w-1/3 items-center">
            <Image
              src="/images/hc_logo.svg"
              alt="Homemade Code Logo"
              width="300"
              height="100"
              className="h-auto w-auto"
            />
          </div>
          <div className="h-full w-1/3"></div>
          <div className="flex h-full w-1/3 items-center justify-end text-neutral-100">
            <div className="font-deco hidden flex-col md:flex md:text-[1.2vw]">
              <span className="flex justify-end leading-none">Enter the</span>
              <span className="flex justify-end leading-none">Mainframe</span>
            </div>
          </div>
        </nav>
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
