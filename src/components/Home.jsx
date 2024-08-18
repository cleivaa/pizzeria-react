import React from "react";
import { useState } from "react";
import { Header } from "./Header";
import { datapizza } from "./pizzas";
import { Cart } from "./Cart";
import { Products } from "./Products";

export const Home = () => {
	const [products, setProducts] = useState(datapizza);

  const [cartContent, setCartContent] = useState([]);

  const handleAddToCart = (pizza) => {
		if (cartContent.find((productCart) => productCart.id === pizza.id)) {
			setCartContent(cartContent.map((productCart) => 
        productCart.id == pizza.id ? {
          ...productCart,
          cantidad: productCart.cantidad + 1
        } : productCart
      ));
		} else {
			setCartContent([
				...cartContent,
				{
					...pizza,
					cantidad: 1,
				},
			]);
		}
	};

  const handleRemoveFromCart = (product) => {
    if (cartContent.find((productCart) => productCart.id === product.id)) {
      const updated = cartContent
        .map((productCart) =>
          productCart.id === product.id
            ? { ...productCart, cantidad: productCart.cantidad - 1 }
            : productCart
        )
        .filter((productCart) => productCart.cantidad > 0);

      setCartContent(updated);
    }
  };
  

  return (
    <>
      <Header />
      <Cart cartContent={cartContent} />
      <Products products={products} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} />
    </>
  );
};
