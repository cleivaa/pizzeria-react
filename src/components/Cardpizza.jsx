import React from "react";

export const Cardpizza = ({
  title,
  ingredients,
  price,
  img,
  id,
  addToCart,
  removeFromCart,
}) => {
  return (
    <>
      <div className="card mx-2" key={id}>
        <img src={img} className="card-img-top" alt="pizza" />
        <div className="card-body">
          <h5 className="card-title fw-light mb-3">{title}</h5>
          <ul>
            {ingredients.map((ingredient, idx) => (
              <li key={`id-${idx}`}>{ingredient}</li>
            ))}
          </ul>
          <hr />
          <ul className="list-group list-group-flush text-right">
            <span className="h5 fw-bold green ms-3">{price}</span>
          </ul>
          <button className="btn btn-light">Ver más </button>

          <button
            className="btn btn-dark"
            id="btn-add"
            onClick={() => addToCart({
              title,
              ingredients,
              price,
              img,
              id,
            })}
          >
            Agregar
          </button>

          <button
            className="btn btn-dark"
            id="btn-add"
            onClick={() => removeFromCart({
              title,
              ingredients,
              price,
              img,
              id,
            })}
          >
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
};
