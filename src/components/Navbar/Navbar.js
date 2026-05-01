import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX, HiSun, HiMoon } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useDarkMode } from "../../hooks/useDarkMode";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useDarkMode();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setToggleMenu(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/AboutUs" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/Blogs" },
  ];

  return (
    <>
      <motion.nav 
        className={`modern-navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="logo-text">Vighnesh</span>
              <span className="logo-dot">.</span>
            </motion.div>
          </Link>

          <ul className="navbar-menu">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={link.path} 
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          <div className="navbar-right">
            <motion.button
              className="dark-mode-toggle"
              onClick={() => setDark(!dark)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle dark mode"
            >
              {dark ? <HiSun /> : <HiMoon />}
            </motion.button>

            <Link to="/login" className="navbar-cta">
              <motion.button
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>
          </div>

          <div className="mobile-toggle" onClick={() => setToggleMenu(!toggleMenu)}>
            {toggleMenu ? <HiX size={28} /> : <HiMenu size={28} />}
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {toggleMenu && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="mobile-menu-content">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={link.path} 
                    className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                    onClick={() => setToggleMenu(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link to="/login" onClick={() => setToggleMenu(false)}>
                  <button className="mobile-cta-button">Get Started</button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
