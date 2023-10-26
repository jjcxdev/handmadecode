import React from "react";

export default function Hero() {
  return (
    <>
      <div
        className="h-screen bg-cover bg-no-repeat md:hidden md:bg-center"
        style={{ backgroundImage: "url('/images/hero_sm.webp')" }}
      >
        <HeroContent />
      </div>
      <div
        className="hidden h-screen bg-cover bg-center bg-no-repeat md:block"
        style={{ backgroundImage: "url('/images/hero.webp')" }}
      >
        <HeroContent />
      </div>
    </>
  );
}
const HeroContent = () => (
  <div className="flex h-full w-full flex-col items-start justify-end p-4 md:justify-center md:p-24">
    <div className="font-aurora h-fit w-full text-[9vw] leading-none text-neutral-100 shadow-sm md:max-w-4xl md:text-[4vw]">
      Where tomorrow&apos;s dreams are built with today’s high-tech tools.
    </div>
    <div className="font-deco hidden h-fit w-full py-8 leading-none text-neutral-100 shadow-sm md:max-w-4xl md:text-[1.5vw]">
      Like 8-bits and floppy disks!
    </div>
  </div>
);
