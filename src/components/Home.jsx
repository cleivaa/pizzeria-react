import React from "react";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Cart } from "./Cart";
import { Products } from "./Products";


export const Home = () => {
	const [products, setProducts] = useState([]);

  const [cartContent, setCartContent] = useState([]);

  const consultarApi = async () => {
    const url = "http://localhost:5000/api/pizzas";
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data)
  }

  useEffect(() => {
    consultarApi()
  },[]) 


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
