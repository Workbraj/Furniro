import React from "react";
import "./App.css";
import Logo from "./image/logo.svg";
import { VscAccount } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="nav-bar">
        <a className="hvr-link" href="/">
          Home
        </a>
        <a className="hvr-link" href="/">
          Shop
        </a>
        <a className="hvr-link" href="/">
          About
        </a>
        <a className="hvr-link" href="/">
          Contact
        </a>{" "}
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
