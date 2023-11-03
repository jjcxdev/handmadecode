"use client";

import React, { MouseEventHandler } from "react";

type MenuToggleProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isOpen: boolean;
};

export default function MenuToggle({ onClick, isOpen }: MenuToggleProps) {
  const commonStyles = {
    transition: isOpen ? "all 0.3s ease" : "all 0.3s ease",
    stroke: "white",
    strokeWidth: "2",
  };

  return (
    <button onClick={onClick} aria-label="Toggle Menu">
      <svg width="20" height="18" viewBox="0 0 18 20">
        <line
          x1="0"
          y1="4"
          x2="18"
          y2="4"
          strokeLinecap="round"
          style={{
            ...commonStyles,
            transformOrigin: "10px 4px",
            transform: isOpen ? "translateY(6.5px) rotate(25deg)" : "rotate(0)",
          }}
        />
        <line
          x1="0"
          y1="10"
          x2="18"
          y2="10"
          strokeLinecap="round"
          style={{ ...commonStyles, opacity: isOpen ? 0 : 1 }}
        />
        <line
          x1="0"
          y1="16"
          x2="18"
          y2="16"
          strokeLinecap="round"
          style={{
            ...commonStyles,
            transformOrigin: "10px 16px",
            transform: isOpen
              ? "translateY(-6.5px) rotate(-25deg)"
              : "rotate(0)",
          }}
        />
      </svg>
    </button>
  );
}
