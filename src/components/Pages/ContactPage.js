import React from "react";
import "./ContactPage.css";
import PageInfoImage from "./images/Pageinfo.png";
import Breadcrumb from "./Breadcrumb";

const ContactPage = () => {
  return (
    <div className="contatc-page">
      <div className="page-info">
        <img src={PageInfoImage} alt="Page Info" />
        <h2>Contact</h2>
        <Breadcrumb />
      </div>
    </div>
  );
};

export default ContactPage;
