import React from "react";
import { Button } from "@/components/button";

export default function CTA() {
  return (
    <>
      <div>
        <div
          className="h-screen bg-cover bg-center bg-no-repeat md:hidden"
          style={{ backgroundImage: "url('/images/cta_sm.webp')" }}
        >
          <Content />
        </div>
        <div
          className="hidden h-screen bg-cover bg-center bg-no-repeat md:block"
          style={{ backgroundImage: "url('/images/cta.webp')" }}
        >
          <Content />
        </div>
      </div>
    </>
  );
}

const Content = () => (
  <div className="flex h-full w-full flex-col items-end justify-between px-4 pt-20 md:px-24 md:pt-48">
    <div className="flex h-fit w-full max-w-[100rem] flex-wrap text-center font-aurora text-[9vw] leading-none text-neutral-50 md:text-[4vw]">
      Contact us for Web Design that&apos;s ahead of its time.
    </div>
    <div className="flex h-full w-full items-end justify-center pb-10 md:hidden">
      <Button title="Send us a fax" />
    </div>
  </div>
);
