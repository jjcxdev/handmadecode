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
  <div className="flex h-full w-full flex-col items-start justify-start p-4 pt-20 md:justify-center md:p-24">
    <div className="h-fit w-full font-aurora text-[9vw] leading-none text-neutral-100 md:max-w-4xl md:text-[4vw]">
      Need a digital solution?
    </div>
    <div className="h-fit w-full py-2 font-deco text-[4vw] leading-none text-neutral-100 md:block md:max-w-4xl md:text-[1.5vw]">
      We&apos;ve got the perfect punch card for that!
    </div>
  </div>
);
