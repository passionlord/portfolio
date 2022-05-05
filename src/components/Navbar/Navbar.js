import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu, GiCrossedBones } from "react-icons/gi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const closeWhenClick = () => {
    setToggleMenu(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <h1>Vighnesh</h1>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AboutUs">AboutUs</Link>
        </li>
        <li>
          <Link to="/Blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>

      <div className="navbar__smallscreen">
        <GiHamburgerMenu
          color="#000"
          fontSize={27}
          className="overlay__open "
          onClick={() => {
            setToggleMenu(true);
          }}
        />

        {toggleMenu && (
          <div className="navbar__smallscreen_overlay w3-animate-top">
            <GiCrossedBones
              fontSize={27}
              className="overlay__close"
              onClick={closeWhenClick}
            />

            <ul className="navbar__smallscreen_links">
              <li>
                <Link to="/" onClick={closeWhenClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/AboutUs" onClick={closeWhenClick}>
                  AboutUs
                </Link>
              </li>
              <li>
                <Link to="/Blogs" onClick={closeWhenClick}>
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/projects" onClick={closeWhenClick}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/" onClick={closeWhenClick}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
