import React from "react";
import { Button } from "@/components/button";

export default function About() {
  return (
    <>
      <div>
        <div
          className="h-screen bg-cover bg-center bg-no-repeat md:hidden"
          style={{ backgroundImage: "url('/images/about_sm.webp')" }}
        >
          <AboutContent />
        </div>
        <div
          className="hidden h-screen bg-cover bg-center bg-no-repeat md:block"
          style={{ backgroundImage: "url('/images/about.webp')" }}
        >
          <AboutContent />
        </div>
      </div>
    </>
  );
}

const AboutContent = () => (
  <div className="flex h-full w-full flex-col items-end justify-between p-4 pt-20 md:justify-center md:p-24">
    <div>
      <div className="h-fit w-full font-aurora text-[9vw] leading-none text-neutral-100 md:max-w-4xl md:text-[4vw]">
        Who&apos;s dropping the needle?
      </div>
      <div className="h-fit w-full font-glock text-[9vw] uppercase leading-none text-neutral-50 md:max-w-4xl md:pt-8 md:text-[5vw]">
        Handmade Code
      </div>
      <div className="hidden h-fit w-full py-8 font-deco leading-none text-neutral-100 md:block md:max-w-4xl md:text-[1.5vw]">
        Your trailblazers in the odyssey of ones and zeros
      </div>
    </div>
    <div className="flex h-full w-full items-end justify-center pb-10">
      <Button title="Meet the Dorks" />
    </div>
  </div>
);
