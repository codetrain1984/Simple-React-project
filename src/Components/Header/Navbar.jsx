/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from 'react'
import './Navbar.css'
import { BsFillSunFill, BsTelephoneFill } from 'react-icons/bs'
import { FaPenNib } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BiMoon } from 'react-icons/bi'
import { ThemeContext } from '../Context/ThemeContext'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [theme, themeToggler] = useContext(ThemeContext)

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-title">
          <h2>
            <span onClick={themeToggler} className="themeSwitcher">
              {theme === 'light' ? <BiMoon /> : <BsFillSunFill />}
            </span>
            <span>
              <FaPenNib className="pen-logo" />
            </span>
            Course
          </h2>
        </div>
        <ul className="nav-menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <Link
              to="courses"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              style={{ cursor: 'pointer' }}
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="register"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              style={{ cursor: 'pointer' }}
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              style={{ cursor: 'pointer' }}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="events"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              style={{ cursor: 'pointer' }}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              style={{ cursor: 'pointer' }}
            >
              Contact us
            </Link>
          </li>
        </ul>
        <div className={click ? ' active' : 'nav-hamburger'}>
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
          {click ? (
            <ImCross className="ham-logo" />
          ) : (
            <GiHamburgerMenu className="ham-logo" />
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
