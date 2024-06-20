import React from "react";
import "./App.css";
import Logo from "./image/logo.svg";
import { VscAccount } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
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
          Shop
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
        <button>
          <BsCart3 />
        </button>
      </span>
    </div>
  );
};

export default Header;
