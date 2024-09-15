import React from "react";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { UserContext } from "../context/UserContext";

export const Cart = () => {
  const { cartContent, setCartContent } = useContext(PizzaContext);
  const { tokenContext, logout } = useContext(UserContext);

  const handleAddToCart = (pizza) => {
    if (cartContent.find((productCart) => productCart.id === pizza.id)) {
      setCartContent(
        cartContent.map((productCart) =>
          productCart.id === pizza.id
            ? {
                ...productCart,
                cantidad: productCart.cantidad + 1,
              }
            : productCart
        )
      );
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

  let total = 0;
  let cantidad = 0;
  cartContent.forEach((e) => {
    cantidad += e.cantidad;
    total += e.cantidad * e.price;
  });

  return (
    <>
      {cartContent.length > 0 ? (
        <>
          <div className="container">
            <div>
              <h1>Carrito</h1>
            </div>
            <hr />
            <ul>
              {cartContent.map((e) => {
                return (
                  <li>
                    {e.name} - cantidad: {e.cantidad}{" "}
                    <button
                      className="btn btn-success"
                      onClick={() =>
                        handleAddToCart({
                          id: e.id,
                          name: e.name,
                          price: e.price,
                          img: e.img,
                          cantidad: e.cantidad,
                        })
                      }
                    >
                      Agregar
                    </button>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={() =>
                        handleRemoveFromCart({
                          id: e.id,
                          name: e.name,
                          price: e.price,
                          img: e.img,
                          cantidad: e.cantidad,
                        })
                      }
                    >Eliminar</button>
                  </li>
                );
              })}
            </ul>
            <div>
              <h2>Cantidad total: {cantidad}</h2>
            </div>
            <div>
              <h2>
                Precio Total:{" "}
                {total.toLocaleString("es-cl", {
                  style: "currency",
                  currency: "CLP",
                })}
              </h2>
              <button className="btn btn-dark me-2" disabled={!tokenContext}>
                Pagar
              </button>
            </div>
          </div>
        </>
      ) : (
        <p>Tu carrito está vacío</p>
      )}
    </>
  );
};
