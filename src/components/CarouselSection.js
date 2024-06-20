import React, { useState } from "react";
import Slider from "react-slick";
import "./CarouselSection.css";
import Image1 from "./image/room-inspiration/roomImage1.png";
import Image2 from "./image/room-inspiration/roomImage2.png";
import Image3 from "./image/room-inspiration/roomImage2.png";
import Image4 from "./image/room-inspiration/roomImage2.png";
import Image5 from "./image/room-inspiration/roomImage2.png";
import Image6 from "./image/room-inspiration/roomImage2.png";

const CarouselSection = () => {
  const images = [
    { id: 1, src: Image1, alt: "Room 1" },
    { id: 2, src: Image2, alt: "Room 2" },
    { id: 3, src: Image3, alt: "Room 3" },
    { id: 4, src: Image4, alt: "Room 4" },
    { id: 5, src: Image5, alt: "Room 5" },
    { id: 6, src: Image6, alt: "Room 6" },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  let sliderRef = React.createRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
    autoplay: true,
    autoplaySpeed: 2000,
    swipe: true,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  const nextSlide = () => {
    sliderRef.slickNext();
  };

  return (
    <div className="carousel-section">
      <div className="carousel-text">
        <h2>50+ Beautiful rooms inspiration</h2>
        <p>
          Our designer already made a lot of beautiful prototypes of rooms that
          inspire you
        </p>
        <button className="primary-button">Explore More</button>
      </div>
      <Slider
        ref={(c) => (sliderRef = c)}
        {...settings}
        className="carousel-slider"
      >
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`carousel-image-container ${
              activeSlide === index ? "active" : ""
            }`}
          >
            <img src={image.src} alt={image.alt} className="carousel-image" />
            {activeSlide === index && (
              <div className="carousel-caption">
                <span className="carousel-index">01 — Bed Room</span>
                <h3 className="carousel-title">Inner Peace</h3>
                <button className="custom-next-arrow" onClick={nextSlide}>
                  &#8594;
                </button>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSection;
