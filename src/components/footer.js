import React from "react";
import "./App.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <div className="footer-brand">
          <h2>Furniro.</h2>
          <address>
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </address>
        </div>
        <div className="footer-links">
          <h3>Links</h3>
          <a className="hver-link" href="/">
            Home
          </a>
          <a className="hver-link" href="/">
            Shop
          </a>
          <a className="hver-link" href="/">
            About
          </a>
          <a className="hver-link" href="/">
            Contact
          </a>
        </div>
        <div className="footer-help">
          <h3>Help</h3>
          <a className="hver-link" href="/">
            Payment Options
          </a>
          <a className="hver-link" href="/">
            Returns
          </a>
          <a className="hver-link" href="/">
            Privacy Policies
          </a>
        </div>
        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <input type="email" placeholder="Enter Your Email Address" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>2024 Furniro. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
