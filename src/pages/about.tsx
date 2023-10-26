import React from "react";

export default function About() {
  return (
    <>
      <div
        className="h-screen bg-cover bg-no-repeat md:hidden"
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
    </>
  );
}

const AboutContent = () => (
  <div className="flex h-full w-full flex-col items-end justify-end p-4 md:justify-center md:p-24">
    <div className="font-aurora h-fit w-full text-[9vw] leading-none text-neutral-100 shadow-sm md:max-w-4xl md:text-[4vw]">
      Who's dropping the needle?
    </div>
    <div className="font-glock h-fit w-full text-[9vw] uppercase leading-none text-neutral-50 md:max-w-4xl md:pt-8 md:text-[5vw]">
      Handmade Code
    </div>
    <div className="font-deco hidden h-fit w-full py-8 leading-none text-neutral-100 shadow-sm md:max-w-4xl md:text-[1.5vw]">
      Your trailblazers in the odyssey of ones and zeros
    </div>
  </div>
);
