import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";
import Testimonial from "./Testimonial";

const AboutUs = () => {
  return (
    <div className="extra__wrapper">
      <div className="about">
        <div className="about__wrapper">
          <div className="about__wrapper-image">
            <img src={images.vighnesh} alt="vighnesh" width="270"></img>
          </div>
          <div className="about__wrapper-info">
            <h1>Hi there !</h1>
            <p>
              In my life, I like to do lot of activities those 3ctivities help
              me exercise and made me feel alive, and my favorite activity is
              cooking because cooking is very simple. I started to cook when I
              was in about high school , when I was home alone all by myself and
              I was pretty hungry, I just got some ingredients, some egg and put
              it in a mix and made some delicious dishes. Since then I had been
              cooking my own food when I was home or I have a lot of free time.
            </p>
          </div>
        </div>

        <div className="about__career">
          <div className="about__career-info">
            <h1>My Career So Far</h1>
            <p>
              In my life, I like to do lot of activities those activities help
              me exercise and made me feel alive, and my favorite activity is
              cooking because cooking is very simple. I started to cook when I
              was in about high school , when I was home alone all by myself and
              I was pretty hungry, I just got some ingredients, some egg and put
              it in a mix and made some delicious dishes. Since then I had been
              cooking my own food when I was home or I have a lot of free time.
            </p>
          </div>
          <div className="about__career__wrapper-skills">
            <div className="about__career-skills">
              <div className="skills">UI DESIGN</div>
              <div className="skills">UX DESIGN</div>
              <div className="skills">PROTOTYPING</div>
              <div className="skills">BRANDING</div>
              <div className="skills">HTML/CSS</div>
              <div className="skills">WIREFRAMING</div>
              <div className="skills">USER RESEARCH</div>
              <div className="skills">FIGMA</div>
              <div className="skills">ADOBE XD</div>
              <div className="skills">INFORMATION ARCHITECTURE</div>
              <div className="skills">REACT.JS</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}

      <Testimonial />

      {/* download resume */}
      <div className="resume">
        <h3>Download my resume</h3>

        <button>Here</button>
      </div>

      {/* contact section */}
      <div className="contact">
        <div className="contact__wrapper">
          <h1>Want to get in touch ?</h1>
          <div className="contact__wrapper-form">
            <form>
              <div className="inputBox size">
                <input
                  name="text"
                  type="text"
                  id="form-name"
                  placeholder="Name"
                />
                <label for="form-name">Name</label>
              </div>

              <div className="inputBox size">
                <input name="email" type="email" placeholder="Email" />
                <label> Email </label>
              </div>
              <div className="inputBox inputBox-textarea textarea-label">
                <textarea
                  name="message"
                  type="message"
                  rows="6"
                  placeholder="Message"
                />
                <label> Message </label>
              </div>
              <div className="submit">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
