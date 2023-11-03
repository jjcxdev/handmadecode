"use client";
import React, { useState } from "react";
import Image from "next/image";
import MenuToggle from "@/components/MenuToggle";

export default function NavBar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLAnchorElement>,
    href: string,
    newTab: boolean = false,
  ) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      if (newTab) {
        window.open(href, "_blank", "noopener noreferrer");
      } else {
        window.location.href = href;
      }
    }
  };

  const toggleMenuVisibility = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  const handleLinkClicked = () => {
    setIsMenuVisible(false);
  };

  return (
    <>
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
          <div className="flex flex-row items-center justify-center gap-2">
            <div className="flex-col font-deco md:flex md:text-[1.2vw]">
              <span className="flex justify-end leading-none">Enter the</span>
              <span className="flex justify-end leading-none">Mainframe</span>
            </div>
            <div className="flex items-center justify-center text-5xl leading-none">
              <svg width="5" height="40" viewBox="0 0 5 40">
                <line
                  x1="2.5"
                  y1="2"
                  x2="2.5"
                  y2="38"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex items-center justify-center">
              <MenuToggle
                isOpen={isMenuVisible}
                onClick={toggleMenuVisibility}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
