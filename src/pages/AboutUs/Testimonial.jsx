import React from "react";
import "./Testimonial.css";
import { images } from "../../constants";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <h1>On Working With Me</h1>
      <div className="testimonialCarousel">
        <div className="testimonialCarouselInner">
          <img src={images.venu} alt=""></img>
          <p>
            Vighnesh is a very sincere and efficient worker. He is good at
            keeping things neat and Organized. Always a team player and loyal to
            his duties and work. He is an excellent listener and gives sensible
            responses. I have always enjoyed his company. He never fails to come
            up with good designs and ways to develop something in the most
            efficient way.
          </p>
        </div>
        <div className="testimonialCarouselBottom">
          <span className="name">By Venugopal Poojary</span>
          <span className="degree">Engineering Student</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
