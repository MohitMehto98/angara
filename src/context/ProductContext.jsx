"use client";

import React, { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productOptions, setProductOptions] = useState({
    gemstoneType: "",
    gemstoneQuality: "",
    metalType: "",
    caratWeight: "",
    ringSize: "",
  });

  const updateOption = (option, value) => {
    setProductOptions({ ...productOptions, [option]: value });
  };

  return (
    <ProductContext.Provider value={{ productOptions, updateOption }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
