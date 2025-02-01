"use client";

import { fetchingAPIData } from "@/app/api/products/ProductApi";
import React, { createContext, useContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productOptions, setProductOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchingAPIData();
        setProductOptions(response);
      } catch (error) {
        console.error("Failed to fetch product data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const updateOption = (option, value) => {
    setProductOptions((prevOptions) => ({
      ...prevOptions,
      [option]: value,
    }));
  };

  return (
    <ProductContext.Provider value={{ productOptions, updateOption, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
