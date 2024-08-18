import React from "react";

export const Cart = ({ cartContent }) => {
  const items = Array.isArray(cartContent) ? cartContent : [];

  const handleCount = (items) => {
    const counter = items.reduce((acumulador, producto) => {
      return (acumulador += producto.cantidad);
    }, 0);

    return counter;
  };

  const handleTotalPrice = (items) => {
    return items.reduce((acumulador, producto) => {
      return acumulador += producto.price * producto.cantidad;
    }, 0);
  };

  const totalQuantity = handleCount(items);
  const totalPrice = handleTotalPrice(items);

  return (
    <>
      <div className="container">
        <div>
          <h1 className="text-info">Carrito</h1>
        </div>
        <hr />
        <div>
          <h2 className="text-info">Cantidad: {totalQuantity}</h2>
        </div>
        <div>
          <h2 className="text-info">Precio Total: ${totalPrice}</h2>
        </div>
      </div>
    </>
  );
};
