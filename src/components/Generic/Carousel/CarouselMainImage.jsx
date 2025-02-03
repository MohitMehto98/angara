"use client";

import React, { useState } from "react";
import { ThumbnailCarousel } from "./ThumbnailCarousel";

const CustomCarousel = ({ media }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const handlePrevious = () =>
    setSelectedIndex(
      (prevIndex) => (prevIndex - 1 + media.length) % media.length
    );

  const handleNext = () =>
    setSelectedIndex((prevIndex) => (prevIndex + 1) % media.length);

  const handleZoom = () => setIsZoomed(!isZoomed);

  return (
    <div className="carousel-container flex flex-col items-center relative group w-full overflow-hidden">
      <div className="main-display w-full max-w-full sm:max-w-lg bg-gray-200 rounded-lg overflow-hidden shadow relative">
        {media.length > 0 ? (
          <img
            src={media[selectedIndex]}
            alt={media[selectedIndex] || "Selected"}
            className={`w-full h-auto object-contain transition-transform duration-300 ${
              isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
            }`}
            onClick={handleZoom}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <p className="text-gray-500">No media available</p>
          </div>
        )}
      </div>
      <div className="w-full mt-4">
        <ThumbnailCarousel
          media={media}
          setSelectedIndex={setSelectedIndex}
          selectedIndex={selectedIndex}
        />
      </div>
      <button
        onClick={handlePrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 border border-gray-500 text-gray-500 w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:text-gray-700 hover:border-gray-700 bg-white rounded-full"
        aria-label="Previous Image"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 border border-gray-500 text-gray-500 w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:text-gray-700 hover:border-gray-700 bg-white rounded-full"
        aria-label="Next Image"
      >
        &gt;
      </button>
    </div>
  );
};

export default CustomCarousel;
