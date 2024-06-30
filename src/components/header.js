import React, { useState, useEffect } from "react";
import "./App.css";
import Logo from "./image/logo.svg";
import { VscAccount } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import CartOverlay from "./Pages/CartOverlay";
import img1 from "./Pages/images/SingleProduct/img1.png";
import img2 from "./Pages/images/SingleProduct/cartimg2.png";

const Header = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  const cartItems = [
    {
      name: "Asgaard Sofa",
      price: 250000,
      quantity: 1,
      image: img1,
    },
    {
      name: "Casaliving Wood",
      price: 270000,
      quantity: 1,
      image: img2,
    },
  ];

  // Close the cart overlay when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".cart-overlay") &&
        !event.target.closest(".cart-button-icon")
      ) {
        setIsCartVisible(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="header-container">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="nav-bar">
        <Link className="hvr-link" to="/">
          Home
        </Link>
        <Link className="hvr-link" to="/product">
          Products
        </Link>
        <Link className="hvr-link" to="/about">
          About
        </Link>
        <Link className="hvr-link" to="/contact">
          Contact
        </Link>
      </div>
      <span className="icons">
        <button>
          <VscAccount />
        </button>
        <button>
          <CiSearch />
        </button>
        <button>
          <CiHeart />
        </button>
        <button className="cart-button-icon" onClick={toggleCartVisibility}>
          <BsCart3 />
        </button>
      </span>
      {isCartVisible && (
        <CartOverlay
          isVisible={isCartVisible}
          items={cartItems}
          onClose={toggleCartVisibility}
        />
      )}
    </div>
  );
};

export default Header;
