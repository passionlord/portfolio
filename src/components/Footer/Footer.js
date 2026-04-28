import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaGithub, FaLinkedin, FaTwitter, FaInstagram, 
  FaHeart, FaEnvelope 
} from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/AboutUs" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/Blogs" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaTwitter />, url: "https://twitter.com", label: "Twitter" },
    { icon: <FaInstagram />, url: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <footer className="modern-footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">
              Vighnesh<span className="logo-dot">.</span>
            </h2>
            <p className="footer-tagline">
              Building digital experiences with passion and precision.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-list">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Contact</h3>
              <ul className="footer-list">
                <li>
                  <a href="mailto:contact@vighnesh.dev" className="footer-link">
                    <FaEnvelope /> contact@vighnesh.dev
                  </a>
                </li>
                <li className="footer-link">India</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Vighnesh. Made with{" "}
            <FaHeart className="heart-icon" /> using React.js
          </p>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          className="scroll-top-btn"
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <HiArrowUp />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
