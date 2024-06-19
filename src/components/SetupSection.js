import React from "react";
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

const SetupSection = () => {
  return (
    <div className="setup-section">
      <h2>
        Share your setup with <span>#FuniroFurniture</span>
      </h2>
      <div className="grid">
        <div className="item item1">
          <img src={Image1} alt="Setup 1" />
        </div>
        <div className="item item2">
          <img src={Image2} alt="Setup 2" />
        </div>
        <div className="item item3">
          <img src={Image3} alt="Setup 3" />
        </div>
        <div className="item item4">
          <img src={Image4} alt="Setup 4" />
        </div>
        <div className="item item5">
          <img src={Image5} alt="Setup 5" />
        </div>
        <div className="item item6">
          <img src={Image6} alt="Setup 6" />
        </div>
        <div className="item item7">
          <img src={Image7} alt="Setup 7" />
        </div>
        <div className="item item8">
          <img src={Image8} alt="Setup 8" />
        </div>
        <div className="item item9">
          <img src={Image9} alt="Setup 9" />
        </div>
      </div>
    </div>
  );
};

export default SetupSection;
