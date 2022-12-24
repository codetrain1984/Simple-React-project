/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Navbar.css";
import { BsTelephoneFill } from "react-icons/bs";
import { FaPenNib } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="navbar">
      <div className="nav-container">
        <h2>
          <span>
            <FaPenNib className="penLogo" />
          </span>
          Course
        </h2>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">Elements</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="navNumber">
          <BsTelephoneFill className="icon" />
          <p>+989123768818</p>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <ImCross className="hamLogo" />
          ) : (
            <GiHamburgerMenu className="hamLogo" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
