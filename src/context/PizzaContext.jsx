import { createContext, useState } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [cartContent, setCartContent] = useState([]);

  return (
    <PizzaContext.Provider value={{ cartContent, setCartContent }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
