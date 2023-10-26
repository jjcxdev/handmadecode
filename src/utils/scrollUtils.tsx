import { RefObject } from "react";

export const handleScroll = (containerRef: RefObject<HTMLDivElement>) => {
  let currentElementIndex = 0;
  let lastScrollTime = 0;

  return (e: WheelEvent) => {
    const currentTime = new Date().getTime();

    if (currentTime - lastScrollTime < 400) {
      console.log("Dampened scroll event");
      return;
    }

    lastScrollTime = currentTime;

    e.preventDefault();

    if (!containerRef.current) {
      console.log("No container ref available");
      return;
    }

    const container = containerRef.current;
    const children = Array.from(container.children) as HTMLElement[];

    console.log(`Current index before scroll: ${currentElementIndex}`);

    const delta = Math.sign(e.deltaY);
    currentElementIndex += delta === 1 ? 1 : -1;
    currentElementIndex = Math.max(
      0,
      Math.min(currentElementIndex, children.length - 1),
    );

    const nextElement = children[currentElementIndex];

    if (nextElement) {
      console.log(
        `Scrolling to element at index ${currentElementIndex} with offsetTop: ${nextElement.offsetTop}`,
      );
      window.scrollTo({
        top: nextElement.offsetTop,
        behavior: "smooth",
      });
    } else {
      console.log("Next element not found");
    }
  };
};
