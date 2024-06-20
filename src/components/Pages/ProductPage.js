import React, { useState } from "react";
import "./ProductPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faTh, faBars } from "@fortawesome/free-solid-svg-icons";
import ProductImage1 from "./images/Product/product1.png";
import ProductImage2 from "./images/Product/product2.png";
import ProductImage3 from "./images/Product/product3.png";
import ProductImage4 from "./images/Product/product4.png";
import ProductImage5 from "./images/Product/product5.png";
import ProductImage6 from "./images/Product/product6.png";
import ProductImage7 from "./images/Product/product7.png";
import ProductImage8 from "./images/Product/product8.png";
import PageInfoImage from "./images/Pageinfo.png";
// import Breadcrumb from "./Breadcrumb";

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
  {
    id: 9,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    discount: "30%",
    image: ProductImage1,
  },
  {
    id: 10,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image: ProductImage2,
  },
  {
    id: 11,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    discount: "50%",
    image: ProductImage3,
  },
  {
    id: 12,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    new: true,
    image: ProductImage4,
  },
  {
    id: 13,
    name: "Grifo",
    description: "Night lamp",
    price: "Rp 1.500.000",
    image: ProductImage5,
  },
  {
    id: 14,
    name: "Muggo",
    description: "Small mug",
    price: "Rp 150.000",
    new: true,
    image: ProductImage6,
  },
  {
    id: 15,
    name: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    discount: "50%",
    image: ProductImage7,
  },
  {
    id: 16,
    name: "Potty",
    description: "Minimalist flower pot",
    price: "Rp 500.000",
    new: true,
    image: ProductImage8,
  },
];

const ProductPage = () => {
  const [displayedProducts, setDisplayedProducts] = useState(products);
  const [sortOrder, setSortOrder] = useState("default");
  const [showAmount, setShowAmount] = useState(16);
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: "all",
    isNew: false,
    hasDiscount: false,
  });
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFilters((prevFilters) => {
      const newFilters = {
        ...prevFilters,
        [name]: type === "checkbox" ? checked : value,
      };
      applyFilters(newFilters);
      return newFilters;
    });
  };

  const applyFilters = (filtersToApply = filters) => {
    let filteredProducts = products;

    if (filtersToApply.category !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filtersToApply.category
      );
    }

    if (filtersToApply.priceRange !== "all") {
      filteredProducts = filteredProducts.filter((product) => {
        const price = parseFloat(
          product.price.replace("Rp ", "").replace(".", "")
        );
        if (filtersToApply.priceRange === "low") return price < 1000000;
        if (filtersToApply.priceRange === "medium")
          return price >= 1000000 && price < 5000000;
        if (filtersToApply.priceRange === "high") return price >= 5000000;
        return true;
      });
    }

    if (filtersToApply.isNew) {
      filteredProducts = filteredProducts.filter((product) => product.new);
    }

    if (filtersToApply.hasDiscount) {
      filteredProducts = filteredProducts.filter((product) => product.discount);
    }

    setDisplayedProducts(filteredProducts);
  };

  const handleSort = (order) => {
    let sortedProducts = [...displayedProducts];
    if (order === "price-asc") {
      sortedProducts.sort(
        (a, b) =>
          parseFloat(a.price.replace("Rp ", "").replace(".", "")) -
          parseFloat(b.price.replace("Rp ", "").replace(".", ""))
      );
    } else if (order === "price-desc") {
      sortedProducts.sort(
        (a, b) =>
          parseFloat(b.price.replace("Rp ", "").replace(".", "")) -
          parseFloat(a.price.replace("Rp ", "").replace(".", ""))
      );
    }
    setDisplayedProducts(sortedProducts);
    setSortOrder(order);
  };

  return (
    <div className="shop-page">
      <div className="page-info">
        <img src={PageInfoImage} alt="Page Info" />
        <h2>Shop</h2>
        {/* <Breadcrumb /> */}
      </div>
      <div className="filter-sort-container">
        <div className="filter-tab">
          <div className="filter-tab-left">
            <button onClick={() => setShowFilters(!showFilters)}>
              <FontAwesomeIcon icon={faFilter} /> Filter
            </button>
            <FontAwesomeIcon icon={faTh} className="icon" />
            <FontAwesomeIcon icon={faBars} className="icon" />
          </div>
          <span>
            Showing 1–{showAmount} of {products.length} results
          </span>
          <div className="show-sort-tab">
            <div className="show-tab">
              <label>Show:</label>
              <select
                value={showAmount}
                onChange={(e) => setShowAmount(parseInt(e.target.value))}
              >
                <option value={4}>4</option>
                <option value={8}>8</option>
                <option value={12}>12</option>
                <option value={16}>16</option>
              </select>
            </div>
            <div className="sort-tab">
              <label>Sort by:</label>
              <select
                value={sortOrder}
                onChange={(e) => handleSort(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
              </select>
            </div>
          </div>
        </div>
        {showFilters && (
          <div className="filter-options">
            <div>
              <label>Category:</label>
              <select name="category" onChange={handleFilterChange}>
                <option value="all">All</option>
                <option value="furniture">Furniture</option>
                <option value="decor">Decor</option>
                <option value="outdoor">Outdoor</option>
              </select>
            </div>
            <div>
              <label>Price Range:</label>
              <select name="priceRange" onChange={handleFilterChange}>
                <option value="all">All</option>
                <option value="low">Below Rp 1,000,000</option>
                <option value="medium">Rp 1,000,000 - Rp 5,000,000</option>
                <option value="high">Above Rp 5,000,000</option>
              </select>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="isNew"
                  onChange={handleFilterChange}
                />
                New Products
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="hasDiscount"
                  onChange={handleFilterChange}
                />
                Discounted Products
              </label>
            </div>
          </div>
        )}
      </div>

      <div
        className="products-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h3>Our Products</h3>
        <div className="products-grid">
          {displayedProducts.slice(0, showAmount).map((product) => (
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
  );
};

export default ProductPage;
