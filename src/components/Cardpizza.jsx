import React from "react";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { Link } from "react-router-dom";

export const Cardpizza = ({ desc, id, img, ingredients, name, price }) => {
  const { cartContent, setCartContent } = useContext(PizzaContext);

  const handleAddToCart = (pizza) => {
    if (cartContent.find((productCart) => productCart.id === pizza.id)) {
      setCartContent(
        cartContent.map((productCart) =>
          productCart.id == pizza.id
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

  return (
    <>
      <div className="card mx-2" key={id}>
        <Link to={`pizza/${id}`}>
          <img src={img} className="card-img-top" alt="pizza" />
        </Link>
        <div className="card-body">
          <h3 className="card-title fw-bold text-dark mb-3">{name}</h3>
          <h6 className="card-title fw-light mb-3">{desc}</h6>
          <ul>
            {ingredients.map((ingredient, idx) => (
              <li key={`id-${idx}`}>{ingredient}</li>
            ))}
          </ul>
          <hr />
          <ul className="list-group list-group-flush text-right">
            <span className="h5 fw-bold green ms-3">{price}</span>
          </ul>
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-light">Ver más</button>

            <button
              className="btn btn-dark me-2"
              id="btn-add"
              onClick={() =>
                handleAddToCart({
                  name,
                  ingredients,
                  price,
                  img,
                  id,
                })
              }
            >
              Agregar
            </button>

            <button
              className="btn btn-dark"
              id="btn-remove"
              onClick={() =>
                handleRemoveFromCart({
                  name,
                  ingredients,
                  price,
                  img,
                  id,
                })
              }
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
