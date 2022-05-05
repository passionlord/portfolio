import React, { useState } from "react";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./Projects.css";
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = () => {
  const [isMousedOver, setMouseOver] = useState(false);

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseOut = () => {
    setMouseOver(false);
  };

  return (
    <div>
      <div className="projectWrap">
        <div className="projectHero">
          <div className="projectHeroName">
            <div className="heading">
              <span> PROJECTS </span>
              <h1 className="bigTitle"> Projects </h1>
            </div>
            <p className="p">
              Every project is an opportunity to learn, to figure out problems
              and challenges, to invent and reinvent.
            </p>
            <div className="link">
              <Link className="viewWork" to="">
                View Work
              </Link>

              <HiOutlineArrowNarrowRight
                className="arrow"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                style={{
                  transform: isMousedOver ? "scaleX(1.6)" : "scaleX(1)",
                  color: isMousedOver ? "#070B78" : "#000",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
          <div className="projectImage">
            <img src={images.projecthero} alt="projects"></img>
          </div>
        </div>

        {/* project body section */}
        <div className="projectBody">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
