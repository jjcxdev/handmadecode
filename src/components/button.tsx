import React from "react";

interface ButtonProps {
  title?: string;
}

export const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <div className="flex h-8 w-fit items-center justify-center rounded-lg border-4 border-orange-700 bg-[#3E2C2B] px-4 py-6 font-aurora text-[6vw] text-neutral-100">
      {title}
    </div>
  );
};
