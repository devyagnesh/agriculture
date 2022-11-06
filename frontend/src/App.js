import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import { Home } from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Product from "./Pages/Product/Product";
import Signup from "./Pages/Signup/Signup";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AuthContext from "./Context/AuthContext";

function App() {
  const authContext = useContext(AuthContext);
  return (
    <Routes>
      {!authContext.isLoggedIn && <Route path="/" element={<Home />} />}
      {!authContext.isLoggedIn && <Route path="/login" element={<Login />} />}
      {!authContext.isLoggedIn && <Route path="/signup" element={<Signup />} />}
      {!authContext.isLoggedIn && <Route path="/about" element={<AboutUs />} />}
      {!authContext.isLoggedIn && (
        <Route path="/contact" element={<ContactUs />} />
      )}
      {!authContext.isLoggedIn && (
        <Route path="/products" element={<Product />} />
      )}

      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
