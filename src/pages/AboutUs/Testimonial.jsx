import React from "react";
import "./Testimonial.css";
import { images } from "../../constants";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <h3>On Working With Me</h3>
      <motion.div className="testimonialCarousel">
        <motion.div className="testimonialCarouselInner">
          <img src={images.venu} alt=""></img>
          <p>
            Vighnesh is a very sincere and efficient worker. He is good at
            keeping things neat and Organized. Always a team player and loyal to
            his duties and work. He is an excellent listener and gives sensible
            responses. I have always enjoyed his company. He never fails to come
            up with good designs and ways to develop something in the most
            efficient way.
          </p>
        </motion.div>
        <motion.div className="testimonialCarouselBottom">
          <span className="name">By Venugopal Poojary</span>
          <span className="degree">Engineering Student</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testimonial;
