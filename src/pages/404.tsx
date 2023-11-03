import Image from "next/image";

export default function BadRoute() {
  return (
    <>
      <div className="flex h-screen w-full items-center  justify-center bg-black px-2">
        <div className="flex w-full flex-row justify-center gap-1 md:gap-4 lg:gap-4">
          <div className="flex w-1/2 items-center justify-end">
            <div className="max-w-[200px]">
              <Image
                src="./images/hc_logo.svg"
                alt="Homemade Code Logo"
                width={310}
                height={70}
                className="h-auto w-auto "
              />
            </div>
          </div>
          <div>
            <svg width="5" height="70" viewBox="0 0 5 70">
              <line
                x1="2.5"
                y1="2"
                x2="2.5"
                y2="68"
                stroke="white"
                strokeWidth={1}
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="text-3xs flex w-1/2 flex-col items-start justify-center text-white sm:text-xs md:text-base">
            <h1>This page is still under construction</h1>
            <h2>The devs will definitely get to it eventually, probably</h2>
          </div>
        </div>
      </div>
    </>
  );
}
