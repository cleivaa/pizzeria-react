import React from "react";
import { Cardpizza } from "./Cardpizza";

export const Products = ({ products, addToCart, removeFromCart }) => {
  return(
    <>
      <div className="container">
        <div className="card-grid p-4">
          {products?.length && products.map((pizza) => (
            <Cardpizza {...pizza} key={pizza.id} addToCart={addToCart} removeFromCart={removeFromCart}/>
          ))}
        </div>
      </div>
    </>
  );
};
