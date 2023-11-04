import React from "react";

interface ButtonProps {
  title?: string;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <div className="flex w-fit max-w-xs items-center justify-center rounded-lg border-2 border-neutral-100 bg-transparent px-4 py-2 font-aurora text-xl text-neutral-50 transition  duration-300 hover:border-orange-400 hover:bg-orange-400/50 ">
      {title}
    </div>
  );
};
