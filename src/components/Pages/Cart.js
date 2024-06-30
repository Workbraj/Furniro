import React from "react";
import PageInfoImage from "./images/Pageinfo.png";
import Breadcrumb from "./Breadcrumb";
import ProductImage1 from "./images/SingleProduct/img1.png";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const items = [
  {
    id: 1,
    name: "Asgard Sofa",
    description: "Stylish cafe chair",
    price: 2500000,
    oldPrice: 3500000,
    discount: "30%",
    image: ProductImage1,
    quantity: 1,
  },
];

const Cart = () => {
  const navigate = useNavigate();

  const gotoCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-page">
      <div className="page-info">
        <img src={PageInfoImage} alt="Page Info" />
        <h2>Cart</h2>
        <Breadcrumb />
      </div>
      <div className="shopping-cart-details">
        <div className="shopping-cart-item-wrapper">
          <div className="shopping-cart-item-header">
            <div className="shopping-header-item">Product</div>
            <div className="shopping-header-item">Price</div>
            <div className="shopping-header-item">Quantity</div>
            <div className="shopping-header-item">Subtotal</div>
          </div>
          {items.map((item) => (
            <div className="shopping-cart-item-container" key={item.id}>
              <div className="shopping-cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="shopping-cart-item-details">
                <p className="shopping-item-name">{item.name}</p>
                <p className="shopping-item-price">
                  Rs. {item.price.toFixed(2)}
                </p>
                <div className="shopping-item-quantity">
                  <input type="number" value={item.quantity} readOnly />
                </div>
                <p className="shopping-item-subtotal">
                  Rs. {(item.price * item.quantity).toFixed(2)}
                </p>
                <div className="shopping-item-remove">
                  <button>
                    <AiFillDelete />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>{" "}
        <div className="shopping-cart-total">
          <h2>Cart Totals</h2>
          <div className="shopping-cart-subtotal">
            <p className="sub">
              Subtotal <span>Rs. 250.000</span>
            </p>
            <p className="total">
              Total <span>Rs 250.000</span>
            </p>
          </div>
          <button className="shopping-cart-button" onClick={gotoCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
