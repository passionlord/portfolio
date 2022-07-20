import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import "./Home.css";
import { BsLinkedin, BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import { ImPinterest2 } from "react-icons/im";

const Home = () => {
  return (
    <>
      <div className="hero__wrapper container">
        <div className="hero__wrapper-title">
          <h1>
            VIGHNESH <br></br> RAIKAR
          </h1>
          <ul className="hero__wrapper-icons">
            <li>
              <Link to="">
                <BsInstagram fontSize={23} />
              </Link>
            </li>
            <li>
              <Link to="">
                <BsFacebook fontSize={23} />
              </Link>
            </li>
            <li>
              <Link to="">
                <BsTwitter fontSize={23} />
              </Link>
            </li>
            <li>
              <Link to="">
                <BsLinkedin fontSize={23} />
              </Link>
            </li>
          </ul>
        </div>
        <div className="hero__wrapper-image">
          <img
            src={images.vighnesh3}
            alt="man"
            width="290"
            height="300"
            style={{
              marginBottom: "30px",
              borderRadius: "40px",
            }}
          ></img>
        </div>
      </div>
      <div className="hero__wrapper-text">
        <p className="hero__wrapper-info">Frontend UI/UX Designer</p>
        <p className="hero__wrapper-bio">
          I am a passionate and kind Developer who has keen interests in web
          designs building UI patterns and I am a cookaholic person who also
          knows how to cook various dishes like a pro chef....
        </p>
      </div>

      {/* INTERESTS SECTION */}

      <div className="interestTitle">
        <h3>INTERESTS</h3>
        <ImPinterest2 fontSize={28} />
        {/* <img src={images.interest} alt="interest" width="130"></img> */}
      </div>
      <div className="interest">
        <div className="interest__cooking-wrapper">
          <img className="interestLogo" src={images.cook} alt="Cooking"></img>
          <h3>COOKING</h3>
          <div className="interest__cooking">
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
        </div>
        <div className="interest__design-wrapper">
          <img className="interestLogo" src={images.design} alt="design"></img>
          <h3>DESIGN</h3>
          <div className="interest__design">
            <p>
              Creativity is my first dexterity. It has been my interest creating
              UI designs to experiment them and to eventually build them , I
              loved it. I loved the thrill. I love to see my imagination come to
              life. I loved gadgets. I choose to be a web designer to bring my
              ideas to life and help others see what I think a better world
              looks like. Designing something is like a rainbow with various
              colors it brightens the mind .
            </p>
          </div>
        </div>
        <div className="interest__code-wrapper">
          <img
            className="interestLogo codeImage"
            src={images.code}
            alt="code"
          ></img>
          <h3>CODE</h3>

          <div className="interest__code">
            <p>
              I am a creative designer and a developer , who aims to work with
              best projects of myself and also to work with future companies I
              offer both design and FrontEnd Development services of web
              applications or websites.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
