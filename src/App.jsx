import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Cardpizza } from "./components/Cardpizza";

function App() {
  const data = [
    {
      title: "Pizza Napolitana",
      ingredients: "Ingredientes Mozzarella, tomate, jamon, oregano",
      price: "Precio: $5.950",
      more: "Ver mas",
      add: "Agregar",
      img: "img/napolitana.png",
      key: "pizza-01",
    },
    {
      title: "Pizza Española",
      ingredients: "Ingredientes Mozzarella, gorgonzola, parmesano, provolone",
      price: "Precio: $6.950",
      more: "Ver mas",
      add: "Agregar",
      img: "img/española.png",
      key: "pizza-02",
    },
    {
      title: "Pizza Pepperoni",
      ingredients: "Ingredientes Mozzarella, pepperoni, oregano",
      price: "Precio: $6.950",
      more: "Ver mas",
      add: "Agregar",
      img: "img/pepperoni.png",
      key: "pizza-03",
    },
  ];

  return (
    <>
      <Navbar />
      <Home />
      <div className="container">
        <div className="card-grid p-4">
          {data.map((pizza) => (
            <Cardpizza {...pizza} key={pizza.key} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
