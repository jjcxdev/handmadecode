import React from "react";

export default function Services() {
  return (
    <>
      <div>
        <div>
          <div
            className="h-screen bg-cover bg-no-repeat md:hidden"
            style={{ backgroundImage: "url('/images/services_sm.webp')" }}
          >
            <ServicesContent />
          </div>
          <div
            className="hidden h-screen bg-cover bg-center bg-no-repeat md:block"
            style={{ backgroundImage: "url('/images/services.webp')" }}
          >
            <ServicesContent />
          </div>
        </div>
      </div>
    </>
  );
}

const ServicesContent = () => (
  <div className="flex h-full w-full flex-col items-start justify-end p-4 md:justify-center md:p-24">
    <div className="font-aurora h-fit w-full text-[9vw] leading-none text-neutral-100 shadow-sm md:max-w-4xl md:text-[4vw]">
      Need a digital solution?
    </div>
    <div className="font-deco hidden h-fit w-full py-8 leading-none text-neutral-100 shadow-sm md:max-w-4xl md:text-[1.5vw]">
      We&apos;ve got the perfect punch card for that!
    </div>
  </div>
);
