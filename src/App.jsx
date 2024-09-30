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
import { UserContext } from "./context/UserContext";
import { useContext } from "react";

function App() {
  const { getToken } = useContext(UserContext);
  const tokenContext = getToken()

  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={tokenContext ? <Navigate to="/" replace /> : <Register />} />
        <Route path="/login" element={tokenContext ? <Navigate to="/" replace /> : <Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route
          path="/profile"
          element={tokenContext ? <Profile /> : <Navigate to="/login" />}
        />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
