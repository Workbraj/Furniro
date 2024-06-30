import React, { useState } from "react";
import "./Checkout.css";
import PageInfoImage from "./images/Pageinfo.png";
import Breadcrumb from "./Breadcrumb";

const products = [
  { id: 1, name: "Syltherine", price: "Rs 2.500.000" },
  { id: 2, name: "Leviosa", price: "Rs 2.500.000" },
  { id: 3, name: "Lolito", price: "Rs 7.000.000" },
  { id: 4, name: "Respira", price: "Rs 500.000" },
  { id: 5, name: "Grifo", price: "Rs 1.500.000" },
  { id: 6, name: "Muggo", price: "Rs 150.000" },
];

const BillingDetails = ({ products }) => {
  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "Nepal",
    address: "",
    city: "",
    province: "",
    zipCode: "",
    phone: "",
    email: "",
    additionalInfo: "",
    paymentMethod: "Bank Transfer",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Billing Information:", billingInfo);
  };

  const parsePrice = (price) => parseInt(price.replace(/[Rs,.]/g, ""));
  const total =
    products?.reduce((acc, product) => acc + parsePrice(product.price), 0) || 0;

  return (
    <div className="checkout-page">
      <div className="page-info">
        <img src={PageInfoImage} alt="Page Info" />
        <h2>Checkout</h2>
        <Breadcrumb />
      </div>
      <div className="checkout-container">
        <div className="billing-details">
          <h2>Billing Details</h2>
          <div className="name">
            <label>
              First Name
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={billingInfo.firstName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Last Name
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={billingInfo.lastName}
                onChange={handleChange}
                required
              />
            </label>
          </div>{" "}
          <label>
            Company Name
            <input
              type="text"
              name="companyName"
              placeholder="Optional"
              value={billingInfo.companyName}
              onChange={handleChange}
            />
          </label>
          <label>
            Country / Region
            <select
              name="country"
              value={billingInfo.country}
              onChange={handleChange}
              required
            >
              <option value="">Select Country</option>
              <option value="Nepal">Nepal</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="India">India</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
            </select>
          </label>
          <label>
            Street Address
            <input
              type="text"
              name="address"
              placeholder="Street Address"
              value={billingInfo.address}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Town / City
            <input
              type="text"
              name="city"
              placeholder="City"
              value={billingInfo.city}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Province
            <select
              name="province"
              value={billingInfo.province}
              onChange={handleChange}
              required
            >
              <option value="">Select Province</option>
              <option value="Eastern Province">Eastern Province</option>
              <option value="Western Province">Western Province</option>
              <option value="Central Province">Central Province</option>
              <option value="North Central Province">
                North Central Province
              </option>
              <opiton value="Others">Others</opiton>
            </select>
          </label>
          <label>
            ZIP Code
            <input
              type="text"
              name="zipCode"
              placeholder="ZIP Code"
              value={billingInfo.zipCode}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={billingInfo.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Email address
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={billingInfo.email}
              onChange={handleChange}
            />
          </label>
          <input
            type="text"
            name="additionalInfo"
            placeholder="Additional Information"
            value={billingInfo.additionalInfo}
            onChange={handleChange}
          />
        </div>
        <div className="order-summary">
          <div className="product-total">
            <h1>Products</h1>
            <h1>Subtotal</h1>
          </div>

          {products.map((product) => (
            <div className="product-item" key={product.id}>
              <span>{product.name}</span>
              <span>{product.price}</span>
            </div>
          ))}
          <div className="total-price">
            <p>Total</p>
            <span>Rs {total.toLocaleString()}</span>
          </div>

          <div className="labels-radio">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Bank Transfer"
                checked={billingInfo.paymentMethod === "Bank Transfer"}
                onChange={handleChange}
              />
              Direct Bank Transfer
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Cash on Delivery"
                checked={billingInfo.paymentMethod === "Cash on Delivery"}
                onChange={handleChange}
              />
              Cash on Delivery
            </label>
          </div>
          <div className="submit-button">
            <button type="submit" onClick={handleSubmit}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckoutPage = () => {
  return <BillingDetails products={products} />;
};

export default CheckoutPage;
