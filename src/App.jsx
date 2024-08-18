import "./App.css";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
// import { Login } from "./components/Login";
// import { Register } from "./components/Register";
import { Home } from "./components/Home";

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
      <Home />
      {/* {showLogin ? (
        <Login
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
        />
      ) : (
        <Register
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmitRegister}
        />
      )} */}
      <Footer />
    </>
  );
}


export default App;
