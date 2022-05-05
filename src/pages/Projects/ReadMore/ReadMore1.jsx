import React from "react";
import contents from "../contents";
import "./ReadMoreAll.css";
import { BsGithub } from "react-icons/bs";

const ReadMore1 = (props) => {
  return (
    <div className="personalWrapper">
      <div className="personalWrapper__title">
        <h1 className="personalWrapper__title-h1">{contents[0].title}</h1>
        <span>PROJECTS</span>
      </div>

      <div className="personalWrapper__image">
        <img src={contents[0].image} alt="" />
      </div>

      <button className="githubLink">
        Visit Github <BsGithub className="githubIcon" fontSize="20" />
      </button>

      <p className="personalWrapper__para">{contents[0].projectInfo}</p>

      <h1>Technologies Used</h1>
      <div className="personalWrapper__tags">
        <span className="tags">REACT.JS</span>
        <span className="tags">HTML</span>
        <span className="tags">CSS</span>
        <span className="tags">FIREBASE</span>
        <span className="tags">GITHUB</span>
      </div>
    </div>
  );
};

export default ReadMore1;
