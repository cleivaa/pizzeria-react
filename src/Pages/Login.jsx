import React from "react";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { doLogin } = useContext(UserContext);
  const navigate = useNavigate();
  
  const handleOnChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (event) => {
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
    //hacer el login real
    try {
      await doLogin(form)
      navigate("/profile");
    } catch(e) {
      alert(e)
    }
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
  };

  return (
    <>
      <div className="login">
        <h2>Login</h2>

        <Form onChange={handleOnChange} onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3" controlId="formViteUsername">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              name="password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </>
  );
};

