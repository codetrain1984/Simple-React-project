import React from "react";
import "./footerItems.css";
import { FaPenNib } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { FiSmartphone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const FooterItems = () => {
  return (
    <div className="footer-items">
      <div className="col1">
        <div className="logo-items">
          <FaPenNib className="penLogo" />
          <h2>Course</h2>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
          dolore ratione? Ad cumque corrupti quae.
        </p>
      </div>
      <div className="col2">
        <h3>Menu</h3>
        <p>Home</p>
        <p>About Us</p>
        <p>Courses</p>
        <p>Elemnts</p>
        <p>News</p>
        <p>Contacts</p>
      </div>
      <div className="col2">
        <h3>Usefull Links</h3>
        <p>Testimonials</p>
        <p>FAQ</p>
        <p>Community</p>
        <p>Campus Pictures</p>
        <p>Tuitions</p>
      </div>
      <div className="col3">
        <h3>Contact</h3>
        <div className="colContent">
          <ImLocation className="contactLogo" />
          <p>Blvd Libertad, 34 m05200 Arévalo </p>
        </div>
        <div className="colContent">
          <FiSmartphone className="contactLogo" />
          <p>+989123768818</p>
        </div>
        <div className="colContent">
          <HiOutlineMail className="contactLogo" />
          <p>hello@company.com</p>
        </div>
      </div>
    </div>
  );
};

export default FooterItems;
