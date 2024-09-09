import React from "react";
import { useState, useEffect } from "react";
import { Products } from "../components/Products";

export const Home = () => {
  const [products, setProducts] = useState([]);

  const consultarApi = async () => {
    const url = "http://localhost:5000/api/pizzas";
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    consultarApi();
  }, []);

  return <Products products={products} />;
};
