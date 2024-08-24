import React from "react";

export const Cardpizza = ({
  desc, id, img, ingredients, name, price
}) => {
  return (
    <>
      <div className="card mx-2" key={id}>
        <img src={img} className="card-img-top" alt="pizza" />
        <div className="card-body">
          <h5 className="card-title fw-light mb-3">{name}</h5>
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
          <button className="btn btn-light">Ver más </button>

          <button
            className="btn btn-dark"
            id="btn-add"
            onClick={() => addToCart({
              name,
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
