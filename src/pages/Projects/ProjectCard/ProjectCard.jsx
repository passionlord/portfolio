import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";
import contents from "../contents";

const ProjectCard = () => {
  //read more
  // const readMore = (id) => {
  //   return contents.filter((content, index) => {
  //     return index !== id;
  //   });
  // };

  // const handleMore = (id) => {
  //   readMore(id);
  //   window.location.pathname = "/readmore";
  // };

  return (
    <div>
      {contents.map((content, index) => {
        return (
          <div key={index} id={index} className="projectsWrapper">
            <div className="projectDiv">
              <div className="projectDiv__details">
                <span> {content.title} </span>
                <p>{content.projectInfo.substring(0, 228)}....</p>

                {/* read more button */}
                {content.btn}
              </div>
              <div className="projectDiv__img">
                <img
                  src={content.image}
                  alt="personal website"
                  width="450"
                ></img>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
