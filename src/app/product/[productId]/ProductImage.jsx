"use client";

import CustomCarousel from "@/components/Generic/Carousel/CarouselMainImage";
import { useProductContext } from "@/context/ProductContext";
import React from "react";

const productImage = ({ media }) => {
  return (
    <div className="flex-1 flex items-center justify-center  p-2 bg-gray-100">
      <CustomCarousel media={media} />
    </div>
  );
};

export default productImage;
