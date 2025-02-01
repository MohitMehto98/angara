import react from "react";

export const ThumbnailCarousel = ({
  media,
  setSelectedIndex,
  selectedIndex,
}) => {
  return (
    <div className="flex mt-4 gap-3 overflow-x-auto w-full max-w-2xl justify-center">
      {media.map((item, index) => (
        <button
          key={index}
          className={`w-16 h-16 border-2 rounded-md overflow-hidden transition-transform ${
            selectedIndex === index
              ? "border-blue-500 scale-105"
              : "border-gray-300"
          }`}
          onClick={() => setSelectedIndex(index)}
        >
          <img
            src={item}
            alt={`Thumbnail ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </button>
      ))}
    </div>
  );
};
