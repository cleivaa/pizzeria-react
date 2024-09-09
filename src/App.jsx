import "./App.css";
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Pizza from "./Pages/Pizza";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Home } from "./Pages/Home";
import { Cart } from "./Pages/Cart";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import { Header } from "./components/Header";
import PizzaProvider from "./context/PizzaContext";

function App() {
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
    setShowLogin(false);
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
    setShowLogin(true);
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
      <PizzaProvider>
        <Navbar />
        <Header />
        {/* {showLogin? 
        ( <Login
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
        />) : 
        ( <Register
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmitRegister}
        /> )}*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
        <Footer />
      </PizzaProvider>
    </>
  );
}

export default App;
