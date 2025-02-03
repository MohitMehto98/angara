"use client";

import { fetchingRecommandationAPIData } from "@/app/api/products/ProductApi";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const RecommendProduct = ({ products }) => {
  const [recommendedData, setRecommendedData] = useState([]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchingRecommandationAPIData();
        setRecommendedData(response);
      } catch (error) {
        console.error("Failed to fetch product data:", error);
      }
    };

    fetchData();
  }, []);

  const CustomDot = ({ onClick, active }) => (
    <button
      className={`w-3 h-3 rounded-full mx-1 ${
        active ? "bg-blue-500" : "bg-gray-300"
      }`}
      onClick={onClick}
      style={{
        outline: "none",
        border: "none",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
    ></button>
  );

  return (
    <Carousel
      responsive={responsive}
      //   infinite
      showDots
      customDot={<CustomDot />}
      className="py-6 bg-gray-50"
    >
      {recommendedData.map((product) => (
        <div
          key={product.id}
          className="p-4 transition-transform transform hover:scale-105"
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
            <img
              src={product.image}
              alt={product.name}
              className="h-[15rem] w-[15rem] object-cover rounded-t-md"
            />

            <div className="p-4 text-center flex flex-col justify-between h-36">
              <h3
                className="text font-semibold text-gray-800 line-clamp-2 cursor-pointer"
                title={product.name}
              >
                {product.name}
              </h3>
              <p className="text-gray-600 mt-2">₹{product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default RecommendProduct;
