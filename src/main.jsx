import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import PizzaProvider from "./context/PizzaContext";
import UserProvider from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PizzaProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </PizzaProvider>
    </BrowserRouter>
  </React.StrictMode>
);
