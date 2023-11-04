import React from "react";
import "@fontsource/press-start-2p";

export default function Hero() {
  return (
    <>
      <div>
        <div
          className="h-screen bg-cover bg-center bg-no-repeat md:hidden"
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
      </div>
    </>
  );
}
const HeroContent = () => (
  <div className="flex h-full w-full flex-col items-start justify-start p-4 pt-20 md:justify-center md:p-24">
    <div className=" h-fit w-full font-aurora text-[9vw] leading-none text-neutral-100  md:max-w-4xl md:text-[4vw]">
      Where tomorrow&apos;s dreams are built with today’s high-tech tools.
    </div>
    <div className="hidden h-fit w-full py-8 font-deco leading-none text-neutral-100 md:block md:max-w-4xl md:text-[1.5vw]">
      Like 8-bits and floppy disks!
    </div>
  </div>
);
