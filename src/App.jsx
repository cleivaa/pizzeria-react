import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Cardpizza } from "./components/Cardpizza";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { useState } from "react";

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

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showLogin, setShowLogin] = useState(false);

  const handleOnChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const [email, password] = event.target;

    const form = {
      email: email.value,
      password: password.value,
    };

    let formError = handleValidateForm(form);

    if (formError) {
      alert(formError);
    }
    setShowLogin(false)
  };

  const handleOnSubmitRegister = (event) => {
    event.preventDefault();
    const [email, password, passwordconfirm] = event.target;

    const form = {
      email: email.value,
      password: password.value,
      passwordconfirm: passwordconfirm.value,
    };

    let formError = handleRegisterForm(form);

    if (formError) {
      alert(formError);
    } else {
      alert("Registro exitoso");
    }
    setShowLogin(true)
  };

  const handleValidateForm = (form) => {
    if (form.email === "") {
      return "Escribe el email";
    }
    if (form.password === "") {
      return "Escribe la contraseña";
    }
    if (form.password.length < 6) {
      return "La contraseña debe contener al menos 6 caracteres";
    }
    return "Autenticación exitosa";
  };

  const handleRegisterForm = (form) => {
    if (form.email === "") {
      return "Escribe el email";
    }
    if (form.password === "") {
      return "Escribe la contraseña";
    }
    if (form.password.length < 6) {
      return "La contraseña debe contener al menos 6 caracteres";
    }
    if (form.passwordconfirm !== form.password) {
      return "Las contraseñas deben coincidir";
    }
    return "";
  };

  return (
    <>
      <Navbar />
      {/*<Home />
      <div className="container">
        <div className="card-grid p-4">
          {data.map((pizza) => (
            <Cardpizza {...pizza} key={pizza.key} />
          ))}
        </div>
      </div>*/}
      {showLogin ? (
        <Login
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
        />
      ) : (
        <Register
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmitRegister}
        />
      )}
      <Footer />
    </>
  );
}

export default App;
