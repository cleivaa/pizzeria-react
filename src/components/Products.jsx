import React from "react";
import { useContext } from "react";
import { Cardpizza } from "./Cardpizza";
import { PizzaContext } from "../context/PizzaContext";

export const Products = ({ products }) => {
  const { setCart } = useContext(PizzaContext);
  return (
    <>
      <div className="container">
        <div className="card-grid p-4">
          {products?.length &&
            products.map((pizza) => <Cardpizza {...pizza} key={pizza.id} />)}
        </div>
      </div>
    </>
  );
};
