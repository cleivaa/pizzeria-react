import React from "react";
import { useContext } from "react";
import { Products } from "../components/Products";
import { PizzaContext } from "../context/PizzaContext";

export const Home = () => {
  const { products } = useContext(PizzaContext);

  return <Products products={products} />;
};
