import React from "react";

export const Navbar = () => {
  const total = 25000;
  const token = false;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-white bg-grey">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          PIZZERIA MAMA MIA!
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <div className="navbar-nav me-auto mb-2 mb-lg-0">
            {token ? (
              <>
                <a className="nav-item nav-link" href="#">
                  🔓profile
                </a>
                <a className="nav-item nav-link" href="#">
                  🔒Logout
                </a>
              </>
            ) : (
              <>
                <a className="nav-item nav-link" href="#">
                  🔐Login
                </a>
                <a className="nav-item nav-link" href="#">
                  🔐Register
                </a>
              </>
            )}
          </div>
          <span className="navbar-text">
            <button type="button" className="btn btn-dark">
              🛒 Total:{" "}
              {total.toLocaleString("es-cl", {
                style: "currency",
                currency: "CLP",
              })}
            </button>
          </span>
        </div>
      </div>
    </nav>
  );
};
