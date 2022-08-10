import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="container d-flex justify-content-between align-items-center py-3">
      <div className="logo">
        <Link to="/">
          <img src="images/logo.svg" alt="logo" />
        </Link>
      </div>
      <div className="links d-flex gap-5 fs-5">
        <Link to="/" className="text-dark text-decoration-none">
          Home
        </Link>
        <Link to="/about" className="text-dark text-decoration-none">
          About
        </Link>
        <Link to="/products" className="text-dark text-decoration-none">
          Products
        </Link>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <Link to="/cart" className="text-dark text-decoration-none"><div className="cart d-flex justify-content-between align-items-center px-2 mx-1">
          <p className="fs-4 m-0">Cart</p>
          <span className="fs-3 shoppingCart d-flex justify-content-center align-items-center mx-1">
            <FaShoppingCart/> 
            <span className="cartTotal text-light fs-5 d-flex justify-content-center align-items-center">1</span>
          </span>
        </div></Link>

        <Link to="login" className="text-dark text-decoration-none"><div className="login d-flex justify-content-between align-items-center px-2 mx-1">
          <p className="fs-4 m-0">Login</p>
          <span className="fs-3 d-flex justify-content-center align-items-center mx-1">
            <FaUserPlus />
          </span>
        </div></Link>
        
        
      </div>
    </nav>
  );
};

export default Navbar;
