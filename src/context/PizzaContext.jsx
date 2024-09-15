import { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [cartContent, setCartContent] = useState([]);
  const [products, setProducts] = useState([]);

  const consultarApi = async () => {
    const url = "http://localhost:5000/api/pizzas";
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    consultarApi();
  }, []);

  return (
    <PizzaContext.Provider value={{ cartContent, setCartContent, products }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
