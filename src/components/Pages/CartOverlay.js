import React from "react";
import { useNavigate } from "react-router-dom";

const CartOverlay = ({ isVisible, items, onClose }) => {
  const navigate = useNavigate();

  const total = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleOverlayClick = (e) => {
    e.stopPropagation(); // Prevent click event from bubbling up
  };

  const handleCartClick = () => {
    navigate("/cart");
    onClose();
  };

  const gotoCheckout = () => {
    navigate("/checkout");
    onClose();
  };

  return (
    <>
      <div
        className={`cart-backdrop ${isVisible ? "visible" : ""}`}
        onClick={onClose}
      ></div>
      <div
        className={`cart-overlay ${isVisible ? "visible" : ""}`}
        onClick={handleOverlayClick}
      >
        <div className="cart-overlay-content">
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
          <h2>Shopping Cart</h2>
          <div className="cart-items">
            {items.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <p className="item-name">{item.name}</p>
                  <div className="item-cost-details">
                    <span className="item-quantity">{item.quantity}</span>
                    &#10005;
                    <p className="item-price">
                      Rs {item.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-subtotal">
            Subtotal{" "}
            <span className="totalPrice">Rs {total.toLocaleString()}</span>
          </div>
          <div className="cart-actions">
            <button className="cart-button" onClick={handleCartClick}>
              Cart
            </button>
            <button className="cart-button2" onClick={gotoCheckout}>
              Checkout
            </button>
            <button className="cart-button3">Compare</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartOverlay;
