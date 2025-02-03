export const ThumbnailCarousel = ({
  media,
  setSelectedIndex,
  selectedIndex,
}) => {
  return (
    <div className="flex mt-4 gap-3 w-full max-w-full justify-center px-2 sm:px-0">
      {media.map((item, index) => (
        <button
          key={index}
          className={`w-16 h-16 sm:w-20 sm:h-20 border-2 rounded-md overflow-hidden transition-transform ${
            selectedIndex === index
              ? " scale-105 opacity-50"
              : " hover:border-gray-300 opacity-100"
          }`}
          onClick={() => setSelectedIndex(index)}
          aria-label={`Select thumbnail ${index + 1}`}
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
