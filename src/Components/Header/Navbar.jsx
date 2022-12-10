/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css";
import { BsTelephoneFill } from "react-icons/bs";
import { FaPenNib } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* <img className="logo" src="/images/pen-logo.png" alt="/" /> */}
      <div className="logoItems">
        <FaPenNib className="penLogo" />
        <h1>Course</h1>
      </div>
      <ul className="navList">
        <li className="navItems">
          <a className="navAnchor" href="#">
            Home
          </a>
        </li>
        <li className="navItems">
          <a className="navAnchor" href="#">
            About Us
          </a>
        </li>
        <li className="navItems">
          <a className="navAnchor" href="#">
            Courses
          </a>
        </li>
        <li className="navItems">
          <a className="navAnchor" href="#">
            Elements
          </a>
        </li>
        <li className="navItems">
          <a className="navAnchor" href="#">
            News
          </a>
        </li>
        <li className="navItems">
          <a className="navAnchor" href="#">
            Contact
          </a>
        </li>
      </ul>
      <div className="navNumber">
        <BsTelephoneFill className="icon" />
        +989123768818
      </div>
    </div>
  );
};

export default Navbar;
