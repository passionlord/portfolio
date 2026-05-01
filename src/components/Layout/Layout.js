import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ScrollProgress from "../ScrollProgress/ScrollProgress";
import BackToTop from "../BackToTop/BackToTop";

const Layout = (props) => {
  return (
    <div>
      <ScrollProgress />
      <Navbar />
      {props.children}
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;

