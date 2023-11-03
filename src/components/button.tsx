import React from "react";

interface ButtonProps {
  title?: string;
}

export const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <div className="flex w-fit max-w-xs items-center justify-center rounded-lg border-2 border-neutral-100 bg-neutral-50/20 px-4 py-2 font-aurora text-2xl text-neutral-100 transition  duration-300 hover:border-orange-500/50 hover:text-neutral-700 ">
      {title}
    </div>
  );
};
