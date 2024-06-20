import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/header";
import HomePage from "./components/home";
import Footer from "./components/footer";
import ProductPage from "./components/Pages/ProductPage";
// import AboutPage from "./Pages/AboutPage";
// import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        {/* <Route path="/" element={<AboutPage />} />
<Route path="/" element={<ContactPage />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
