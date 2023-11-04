import React, { useState, useEffect } from "react";

type LoadingImagesProps = {
  finalSrc: string;
  alt: string;
};

const LoadingImage: React.FC<LoadingImagesProps> = ({ finalSrc, alt }) => {
  return (
    <div className="relative flex w-full max-w-lg items-center justify-center px-10">
      <img
        className={`loadingImageReveal flex h-full w-full items-center justify-center`}
        src={finalSrc}
        alt={alt}
      />
    </div>
  );
};

export default LoadingImage;
