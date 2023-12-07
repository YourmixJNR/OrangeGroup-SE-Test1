import React from "react";
import AppContext from "../Context/AppContext";
import { useState, useEffect } from "react";
import './ProductList.css'

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/products");
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      // Handle any errors that occur during the data fetching process
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <AppContext.Provider value={{products}}>
        {children}
    </AppContext.Provider>
  )
};

export default AppProvider;
