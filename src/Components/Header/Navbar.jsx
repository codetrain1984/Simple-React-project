/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Navbar.css";
import { BsTelephoneFill } from "react-icons/bs";
import { FaPenNib } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-title">
          <h2>
            <span>
              <FaPenNib className="pen-logo" />
            </span>
            Course
          </h2>
        </div>
        <ul className="nav-menu">
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
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <div className={click ? "nav-hamburger " : "active"}>
          <ul>
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
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="nav-number">
          <BsTelephoneFill className="icon" />
          <p>+989123768818</p>
        </div>

        <div onClick={() => setClick(!click)} className="hamburger">
          {/* <GiHamburgerMenu onClick={() => setClick(true
          )} className="ham-logo" /> */}
          {click ? (
            <ImCross className="ham-logo" />
          ) : (
            <GiHamburgerMenu className="ham-logo" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
