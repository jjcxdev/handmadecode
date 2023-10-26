import React from "react";

export default function CTA() {
  return (
    <>
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
        {" "}
        <Content />
      </div>
    </>
  );
}

const Content = () => (
  <div className="flex h-full w-full flex-col items-end justify-start px-4 pt-24 md:px-24 md:pt-48">
    <div className="font-aurora flex h-fit w-full max-w-[100rem] flex-wrap text-center text-[9vw] leading-none text-neutral-50 md:text-[4vw]">
      Contact us for Web Design that's ahead of its time.
    </div>
    <div className="font-deco flex  h-fit w-full max-w-4xl justify-center py-8 leading-none text-neutral-100 md:text-[1.5vw]">
      hello@backintime.ca
    </div>
  </div>
);
