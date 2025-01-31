import React from "react";

const productImage = () => {
  return (
    <div className="flex-1 flex items-center justify-center bg-white p-8">
      <div className="max-w-lg">
        <img
          src="https://via.placeholder.com/500x500?text=Product+Image"
          alt="Product"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
        {/* Thumbnails */}
        <div className="flex gap-4 mt-4 justify-center">
          <img
            src="https://via.placeholder.com/100x100?text=Thumb1"
            alt="Thumbnail 1"
            className="w-20 h-20 object-cover border border-gray-200 rounded-lg cursor-pointer hover:border-gray-400"
          />
          <img
            src="https://via.placeholder.com/100x100?text=Thumb2"
            alt="Thumbnail 2"
            className="w-20 h-20 object-cover border border-gray-200 rounded-lg cursor-pointer hover:border-gray-400"
          />
          <img
            src="https://via.placeholder.com/100x100?text=Thumb3"
            alt="Thumbnail 3"
            className="w-20 h-20 object-cover border border-gray-200 rounded-lg cursor-pointer hover:border-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default productImage;
