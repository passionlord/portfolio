import React from "react";
import "./Footer.css";
import { images } from "../../constants";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__wrapper-icons">
          <img src={images.github} alt="github"></img>
          <img src={images.linkedin} alt="linkedin"></img>
        </div>
        <div className="footer__wrapper-info">
          <span>Vighnesh</span>
          <p>Copyright @{year} VIGHNESH RAIKAR</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
