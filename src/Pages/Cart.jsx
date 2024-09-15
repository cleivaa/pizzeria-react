import React from "react";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { UserContext } from "../context/UserContext";


export const Cart = () => {
  const { cartContent } = useContext(PizzaContext);
  const { tokenContext, logout} = useContext(UserContext);

  var total = 0;
  var cantidad = 0;
  cartContent.map((e) => {
    cantidad = cantidad + e.cantidad;
    total = total + e.cantidad * e.price;
  });

  return (
    <>
      <div className="container">
        <div>
          <h1>Carrito</h1>
        </div>
        <hr />
        <ul>
        {cartContent.map((e)=> {
          return <li>nombre: {e.name} cantidad: {e.cantidad}</li>
          
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
          <button className="btn btn-dark me-2" disabled={!tokenContext} >Pagar</button>
          
        </div>
      </div>
    </>
  );
};
