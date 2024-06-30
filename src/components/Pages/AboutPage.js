import React from "react";
import PageInfoImage from "./images/Pageinfo.png";
import Breadcrumb from "./Breadcrumb";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="page-info">
        <img src={PageInfoImage} alt="Page Info" />
        <h2>About</h2>
        <Breadcrumb />
      </div>
    </div>
  );
};

export default AboutPage;
