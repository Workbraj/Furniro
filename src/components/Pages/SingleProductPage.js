import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleProductPage.css";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import ProductImage1 from "./images/SingleProduct/img1.png";
import ProductImage2 from "./images/SingleProduct/img1.png";
import ProductImage3 from "./images/SingleProduct/img1.png";
import ProductImage4 from "./images/SingleProduct/img1.png";
import ProductImage5 from "./images/SingleProduct/img1.png";
import ProductImage6 from "./images/SingleProduct/img1.png";
import ProductImage7 from "./images/SingleProduct/img1.png";
import ProductImage8 from "./images/SingleProduct/img1.png";
import extraImg1 from "./images/SingleProduct/img2.png";
import extraImg2 from "./images/SingleProduct/img3.png";
import extraImg3 from "./images/SingleProduct/img4.png";
import extraImg4 from "./images/SingleProduct/img5.png";
import MainImg1 from "./images/SingleProduct/mainImg1.png";
import MainImg2 from "./images/SingleProduct/mainImg2.png";

const products = [
  {
    id: 1,
    name: "Syltherine",
    description:
      "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    discount: "30%",
    image: ProductImage1,
    totalreviews: 10,
    mainImage1: MainImg1,
    mainImage2: MainImg2,
    extraImages: [extraImg1, extraImg2, extraImg3, extraImg4],
    Dimensions: "80 W x 35 D x 30 H",
    Color: ["Neutral", "Beige fabric"],
    Material: "High-quality polyester upholstery with sturdy wooden frame.",
    Features: "Removable cushions, easy-to-clean fabric, spacious seating",
    Warranty: "3 years limited warranty",
  },
  {
    id: 2,
    name: "Leviosa",
    description:
      "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp 2.500.000",
    image: ProductImage2,
    totalreviews: 1,
    mainImage1: MainImg1,
    mainImage2: MainImg2,
    extraImages: [extraImg1, extraImg2, extraImg3, extraImg4],
    Dimensions: "40 W x 30 D x 30 H",
    Color: ["Gray", "Dark Charcoal"],
    Material: "Durable microfiber and high-density foam with solid wood legs.",
    Features:
      "Built-in recliners, adjustable headrests, and deep plush seating",
    Warranty: "5 years limited warranty",
  },
  {
    id: 3,
    name: "Lolito",
    description:
      "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    discount: "50%",
    image: ProductImage3,
    totalreviews: 8,
    mainImage1: MainImg1,
    mainImage2: MainImg2,
    extraImages: [extraImg1, extraImg2, extraImg3, extraImg4],
    Dimensions: "70 W x 35 D x 40 H",
    Color: ["Ivory", "Off-White Leather"],
    Material: "Genuine leather with a polished metal base.",
    Features: "Modern design, supportive back, spill-resistant",
    Warranty: "2 years limited warranty",
  },
  {
    id: 4,
    name: "Respira",
    description:
      "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp 500.000",
    new: true,
    image: ProductImage4,
    totalreviews: 5,
    mainImage1: MainImg1,
    mainImage2: MainImg2,
    extraImages: [extraImg1, extraImg2, extraImg3, extraImg4],
    Dimensions: "40 W x 40 D x 20 H",
    Color: ["Midnight Blue", "Navy Velvet"],
    Material:
      "Luxurious velvet upholstery with eco-friendly wood construction.",
    Features: "Tufted back, Victorian legs, includes two matching pillows",
    Warranty: "7 years limited warranty",
  },
  {
    id: 5,
    name: "Grifo",
    description:
      "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp 1.500.000",
    image: ProductImage5,
    totalreviews: 15,
    mainImage1: MainImg1,
    mainImage2: MainImg2,
    extraImages: [extraImg1, extraImg2, extraImg3, extraImg4],
    Dimensions: "60 W x 30 D x 60 H",
    Color: ["Moss Green", "Forest"],
    Material: "Stain-resistant linen blend with antique wooden feet.",
    Features:
      "Space-saving sectional, convertible into a bed, storage underneath",
    Warranty: "1 year limited warranty",
  },
  {
    id: 6,
    name: "Muggo",
    description:
      "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp 150.000",
    new: true,
    image: ProductImage6,
    totalreviews: 10,
    mainImage1: MainImg1,
    mainImage2: MainImg2,
    extraImages: [extraImg1, extraImg2, extraImg3, extraImg4],
    Dimensions: "40 W x 35 D x 20 H",
    Color: ["Burnt Orange", "Copper"],
    Material: "Microsuede fabric with robust steel frame.",
    Features: "Ergonomic design, includes ottoman, perfect for small spaces",
    Warranty: "10 years limited warranty",
  },
  {
    id: 7,
    name: "Pingky",
    description:
      "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    discount: "50%",
    image: ProductImage7,
    totalreviews: 11,
    mainImage1: MainImg1,
    mainImage2: MainImg2,
    extraImages: [extraImg1, extraImg2, extraImg3, extraImg4],
    Dimensions: "90 W x 35 D x 40 H",
    Color: ["Bright Yellow", "Sunflower"],
    Material: "Waterproof cotton canvas with lightweight aluminum legs.",
    Features: "Outdoor use, easy to fold and store, UV protection",
    Warranty: "3 months limited warranty",
  },
  {
    id: 8,
    name: "Potty",
    description:
      "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp 500.000",
    new: true,
    image: ProductImage8,
    totalreviews: 10,
    mainImage1: MainImg1,
    mainImage2: MainImg2,
    extraImages: [extraImg1, extraImg2, extraImg3, extraImg4],
    Dimensions: "80 W x 35 D x 20 H",
    Color: ["Espresso", "Dark Brown Leather"],
    Material: "Top grain leather with hardwood construction.",
    Features: "Heated seats, USB charging ports, cup holders",
    Warranty: "5 years limited warranty",
  },
];

const SingleProductPage = () => {
  const { id } = useParams();
  const [value, setValue] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const navigate = useNavigate();

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }
  const handleDecrement = () => {
    setValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
  };

  const handleIncrement = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const goToProductPage = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      {" "}
      <Breadcrumb />
      <div className="singleproductpage">
        <div className="product-info">
          <div className="product-img">
            <div className="detail-img">
              <img src={product.extraImages[0]} alt="Product Detail" />
              <img src={product.extraImages[1]} alt="Product Detail" />
              <img src={product.extraImages[2]} alt="Product Detail" />
              <img src={product.extraImages[3]} alt="Product Detail" />
            </div>
            <div className="main-img">
              <img src={product.image} alt={product.name} />
            </div>
          </div>
        </div>

        <div className="product-details">
          <h1>{product.name}</h1>
          <p className="Price">{product.price}</p>
          <span className="rating">★★★★☆</span>
          <p className="description">{product.description}</p>

          <div className="sizes">
            <p className="label">Size</p>
            <span className="size size-selected">L</span>
            <span className="size">XL</span>
            <span className="size">XS</span>
          </div>

          <div className="colors">
            <p className="label">Color</p>
            <span className="color color-purple"></span>
            <span className="color color-black"></span>
            <span className="color color-gold"></span>
          </div>

          <div className="checkout">
            <div className="button-container">
              <button className="button" onClick={handleDecrement}>
                -
              </button>
              <span className="button-value">{value}</span>
              <button className="button" onClick={handleIncrement}>
                +
              </button>
            </div>

            <button className="add-cart">Add To Cart</button>
            <button className="compare">Compare</button>
          </div>
          {/* <div className="product-short-details">
          <p>ProductCode: {product.id}</p>
          <p>Category: {product.category}</p>
          <p>Tags: {product.tags.join(", ")}</p>
          <p>Share: {product.share}</p>
        </div> */}
        </div>
      </div>
      <section className="Main-Description">
        <div className="tabs">
          <button
            className={activeTab === "description" ? "active" : ""}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={activeTab === "additionalInfo" ? "active" : ""}
            onClick={() => setActiveTab("additionalInfo")}
          >
            Additional Information
          </button>
          <button
            className={activeTab === "reviews" ? "active" : ""}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews [{product.totalreviews}]
          </button>
        </div>
        <div className={`tab-content ${activeTab}`}>
          {activeTab === "description" && (
            <div>
              <p>
                Embodying the raw, wayward spirit of rock ’n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road.
              </p>
              <p>
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </p>
            </div>
          )}
          {activeTab === "additionalInfo" && (
            <div className="add-info-content">
              <h3>Additional Information</h3>

              <div className="info-row">
                <b>Feature</b>
                <span>{product.Features}</span>
              </div>

              <div className="info-row">
                <b>Dimension</b>
                <span>{product.Dimensions}</span>
              </div>

              <div className="info-row">
                <b>Color</b>
                <span>{product.Color.join(" / ")}</span>
              </div>

              <div className="info-row">
                <b>Material</b>
                <span>{product.Material}</span>
              </div>

              <div className="info-row">
                <b>Warranty</b>
                <span>{product.Warranty}</span>
              </div>
            </div>
          )}
          {activeTab === "reviews" && (
            <div>
              <p>This Product has {product.totalreviews} reviews till now!</p>
            </div>
          )}
        </div>
        <div className="mainProduct-img">
          <div className="main-product-img1">
            <img src={product.mainImage1} alt="Main Product" />
          </div>
          <div className="main-product-img2">
            <img src={product.mainImage2} alt="Main Product" />
          </div>
        </div>
      </section>
      <section>
        <div
          id="Product"
          className="products-container"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <h3>Our Products</h3>
          <div className="products-grid">
            {products.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="product-card"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                onClick={() => goToProductPage(product.id)}
              >
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
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
                <p className="product-price">{product.price}</p>
              </div>
            ))}
          </div>
          <button className="show-more">Show More</button>
        </div>
      </section>
    </>
  );
};

export default SingleProductPage;
