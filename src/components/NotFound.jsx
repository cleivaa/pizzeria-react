import React from "react";
import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="pt-5 text-center">
      <h1 className="mb-4">Not Found :/</h1>
      <div className="d-flex justify-content-center align-items-center">
        <img
          src="/img/404-2.jpg"
          alt="Página no encontrada"
          className="img-fluid"
        />
      </div>
    </Container>
  );
};

export default NotFound;