import React, { useEffect } from "react";
import "./SetupSection.css";
import Image1 from "./image/Setup/setupImage1.png";
import Image2 from "./image/Setup/setupImage2.png";
import Image3 from "./image/Setup/setupImage3.png";
import Image4 from "./image/Setup/setupImage4.png";
import Image5 from "./image/Setup/setupImage5.png";
import Image6 from "./image/Setup/setupImage6.png";
import Image7 from "./image/Setup/setupImage7.png";
import Image8 from "./image/Setup/setupImage8.png";
import Image9 from "./image/Setup/setupImage9.png";
import AOS from "aos";
import "aos/dist/aos.css";

const SetupSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 200,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="setup-section">
      <p>
        Share your setup with <br />{" "}
      </p>
      <span>
        <h2>#FuniroFurniture</h2>
      </span>

      <div className="parent">
        <img
          src={Image1}
          alt="Setup 1"
          className="div1"
          data-aos="zoom-out-right"
        />
        <img
          src={Image2}
          alt="Setup 2"
          className="div2"
          data-aos="zoom-out-right"
        />
        <img
          src={Image3}
          alt="Setup 3"
          className="div3"
          data-aos="zoom-in-up"
        />
        <img
          src={Image4}
          alt="Setup 4"
          className="div4"
          data-aos="zoom-out-left"
        />
        <img
          src={Image5}
          alt="Setup 5"
          className="div5"
          data-aos="zoom-out-left"
        />
        <img
          src={Image6}
          alt="Setup 6"
          className="div6"
          data-aos="zoom-out-right"
        />
        <img
          src={Image7}
          alt="Setup 7"
          className="div7"
          data-aos="zoom-out-right"
        />
        <img
          src={Image8}
          alt="Setup 8"
          className="div8"
          data-aos="zoom-out-left"
        />
        <img
          src={Image9}
          alt="Setup 9"
          className="div9"
          data-aos="zoom-out-left"
        />
      </div>
      <hr />
    </div>
  );
};

export default SetupSection;
