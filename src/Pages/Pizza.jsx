import React from "react";
import { Cardpizza } from "../components/Cardpizza";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const [pizza,setPizza] = useState();
  const { id } = useParams();
  
  const consultarApi = async () => {
    const url = "http://localhost:5000/api/pizzas/" + id;
    const response = await fetch(url);
    const data = await response.json();
    setPizza(data);
  };

  useEffect(() => {
    consultarApi();
  }, []);

  if (pizza) {
    return (
      <>
        <div className="container">
          <div className="pizza-grid">
            <Cardpizza {...pizza} />
          </div>
        </div>
      </>
    );
  }
};

export default Pizza;
