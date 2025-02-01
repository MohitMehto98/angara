import React, { useState } from "react";
import { ThumbnailCarousel } from "./ThumbnailCarousel";

const CustomCarousel = ({ media }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrevious = () =>
    setSelectedIndex(
      (prevIndex) => (prevIndex - 1 + media.length) % media.length
    );

  const handleNext = () =>
    setSelectedIndex((prevIndex) => (prevIndex + 1) % media.length);

  return (
    <div className="carousel-container flex flex-col items-center relative group">
      <div className="main-display w-full max-w-lg bg-gray-200 rounded-lg overflow-hidden shadow">
        {media.length > 0 ? (
          <img
            src={media[selectedIndex]}
            alt={media[selectedIndex] || "Selected"}
            className="w-full h-full object-cover transition-all duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <p className="text-gray-500">No media available</p>
          </div>
        )}
      </div>

      <ThumbnailCarousel
        media={media}
        setSelectedIndex={setSelectedIndex}
        selectedIndex={selectedIndex}
      />
      <button
        onClick={handlePrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 border border-gray-500 text-gray-500 w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:text-gray-700 hover:border-gray-700"
      >
        &lt;
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 border border-gray-500 text-gray-500 w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:text-gray-700 hover:border-gray-700"
      >
        &gt;
      </button>
    </div>
  );
};

export default CustomCarousel;
