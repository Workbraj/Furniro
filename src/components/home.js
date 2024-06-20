import React, { useEffect } from "react";
import "./App.css";

import CarouselSection from "./CarouselSection";
import SetupSection from "./SetupSection";
import HomePage from "./image/homepage.png";
import DiningImage from "./image/dinning.png";
import LivingImage from "./image/living-room.png";
import BedroomImage from "./image/bedroom.png";
import ProductImage1 from "./image/product1.png";
import ProductImage2 from "./image/product2.png";
import ProductImage3 from "./image/product3.png";
import ProductImage4 from "./image/product4.png";
import ProductImage5 from "./image/product5.png";
import ProductImage6 from "./image/product6.png";
import ProductImage7 from "./image/product7.png";
import ProductImage8 from "./image/product8.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const products = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    discount: "30%",
    image: ProductImage1,
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image: ProductImage2,
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    discount: "50%",
    image: ProductImage3,
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    new: true,
    image: ProductImage4,
  },
  {
    id: 5,
    name: "Grifo",
    description: "Night lamp",
    price: "Rp 1.500.000",
    image: ProductImage5,
  },
  {
    id: 6,
    name: "Muggo",
    description: "Small mug",
    price: "Rp 150.000",
    new: true,
    image: ProductImage6,
  },
  {
    id: 7,
    name: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    discount: "50%",
    image: ProductImage7,
  },
  {
    id: 8,
    name: "Potty",
    description: "Minimalist flower pot",
    price: "Rp 500.000",
    new: true,
    image: ProductImage8,
  },
];

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
      mirror: false,
      offset: 100,
    });
  }, []);

  const handleBuyNow = () =>
    toast.success("Thankyou For Buying!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return (
    <>
      <div className="home-container">
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="dark"
        />
        <img src={HomePage} alt="Home Page" className="background-image" />
        <div
          className="homeInfo"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <h3>New Arrival</h3>
          <h1>
            Discover Our
            <br />
            New Collection
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>

      <div
        className="browse-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="browse">
          <h3>Browse The Range</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="category-container">
          <div className="category">
            <img src={DiningImage} alt="Dining" />
            <h4>Dining</h4>
          </div>
          <div className="category">
            <img src={LivingImage} alt="Living" />
            <h4>Living</h4>
          </div>
          <div className="category">
            <img src={BedroomImage} alt="Bedroom" />
            <h4>Bedroom</h4>
          </div>
        </div>
        {/* Our Products Section */}
        <div
          id="Product"
          className="products-container"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <h3>Our Products</h3>
          <div className="products-grid">
            {products.map((product) => (
              <div
                key={product.id}
                className="product-card"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  {product.discount && (
                    <span className="discount-badge">{product.discount}</span>
                  )}
                  {product.new && <span className="new-badge">New</span>}
                  <div className="product-hover">
                    <button className="add-to-cart">Add to cart</button>
                    <div className="hover-actions">
                      <span data-icon="🔗">Share</span>
                      <span data-icon="⇆">Compare</span>
                      <span data-icon="🤍">Like</span>
                    </div>
                  </div>
                </div>
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <p className="product-price">
                  {product.price}
                  {product.oldPrice && (
                    <span className="old-price">{product.oldPrice}</span>
                  )}
                </p>
              </div>
            ))}
          </div>
          <button className="show-more">Show More</button>
        </div>
      </div>
      <CarouselSection />
      <SetupSection />
    </>
  );
};

export default Home;
