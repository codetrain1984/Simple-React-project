import React from "react";
import "./footer.css";
import FooterItems from "./FooterItems";
import { FaPinterest, FaInstagram } from "react-icons/fa";
import { BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <div className="line"></div>
        <h2>Subscribe to newsletter</h2>
        <div className="inpue-btn">
          <input type="text" placeholder="Email Address" />
          <button>Subscrib</button>
        </div>
        <hr />
      </div>
      <FooterItems />
      <hr />
      <div className="copy-right">
        <p>
          Copyright ©2022 All rights reserved | This template is made with
          &hearts; by <span>Colorlib</span>
        </p>
        <div className="social-medias">
          <span>
            <FaPinterest />
          </span>
          <span>
            <BsLinkedin />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <BsFacebook />
          </span>
          <span>
            <BsTwitter />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
