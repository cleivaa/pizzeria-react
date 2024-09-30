import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { UserContext } from "../context/UserContext";

export const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { doRegister } = useContext(UserContext);

  const handleOnChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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

  const handleOnSubmit = async (event) => {
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
      try {
        await doRegister(form);
        navigate("/profile");
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <div className="login">
      <h2>Registrate</h2>
      <Form onChange={handleOnChange} onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formViteUsername">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu correo"
            name="email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirma tu contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirma tu contraseña"
            name="passwordconfirm"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
    </div>
  );
};
