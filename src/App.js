import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/header";
import HomePage from "./components/home";
import Footer from "./components/footer";
import ProductPage from "./components/Pages/ProductPage";
import AboutPage from "./components/Pages/AboutPage";
import ContactPage from "./components/Pages/ContactPage";
import SingleProductPage from "./components/Pages/SingleProductPage";
import CartPage from "./components/Pages/Cart";
import Checkout from "./components/Pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />{" "}
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
