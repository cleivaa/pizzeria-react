import { useContext } from "react";
import { Link } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import { UserContext } from "../context/UserContext";

export const Navbar = () => {
  const { cartContent } = useContext(PizzaContext);
  const { getToken, logout} = useContext(UserContext);
  const tokenContext = getToken()
  var total = 0;
  cartContent.map((e) => {
    total = total + e.cantidad * e.price;
  });
  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-white bg-grey">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          PIZZERIA MAMA MIA!
        </a>
        <Link to="/" className="text-white ms-3 text-decoration-none">
          Home
        </Link>
       
        <Link to="/cart" className="text-white ms-3 text-decoration-none">
          Cart
        </Link>
    

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
            {tokenContext ? (
              <>
                <Link to="/profile" className="text-white ms-3 text-decoration-none">
               🔓profile
                </Link>
                <a className="nav-item nav-link" onClick={()=> {logout()}} href="#">
                  🔒Logout
                </a>
              </>
            ) : (
              <>
                <Link to="/login" className="text-white ms-3 text-decoration-none">
                🔐Login
                </Link>
                <Link to="/register" className="text-white ms-3 text-decoration-none">
                🔐Register
                </Link>
              </>
            )}
          </div>
          <span className="navbar-text">
            <button type="button" className="btn btn-dark">
              <Link to="/cart" className="text-white ms-3 text-decoration-none">
                Cart
              </Link>
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
