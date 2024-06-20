import React, { useState } from "react";
import "./App.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    console.log("Email submitted:", email);
    alert(`Email submitted: ${email}`);
    setEmail("");
  };
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
          <a className="link" href="/">
            Home
          </a>
          <a className="link" href="/">
            Shop
          </a>
          <a className="link" href="/">
            About
          </a>
          <a className="link" href="/">
            Contact
          </a>
        </div>
        <div className="footer-help">
          <h3>Help</h3>
          <a className="link" href="/">
            Payment Options
          </a>
          <a className="link" href="/">
            Returns
          </a>
          <a className="link" href="/">
            Privacy Policies
          </a>
        </div>
        <div className="footer-newsletter">
          <form onSubmit={handleEmailSubmit}>
            <h3>Newsletter</h3>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>2024 Furniro. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
