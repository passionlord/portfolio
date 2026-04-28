import React from "react";
import contents from "../contents";
import "./ReadMoreAll.css";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { HiArrowLeft } from "react-icons/hi";

const ReadMore3 = () => {
  const project = contents[2];

  return (
    <div className="readmore-page">
      <div className="readmore-hero">
        <div className="readmore-hero-inner">
          <Link to="/projects" className="readmore-back">
            <HiArrowLeft /> Back to Projects
          </Link>
          <div className="readmore-category">Web Development</div>
          <h1 className="readmore-title">{project.title}</h1>
          {project.award && (
            <div className="readmore-award">🏆 {project.award}</div>
          )}
        </div>
      </div>

      <div className="readmore-body">
        <div className="readmore-image-wrap">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="readmore-section">
          <p className="readmore-section-title">About This Project</p>
          <p className="readmore-description">{project.projectInfo}</p>
        </div>

        <div className="readmore-divider" />

        <div className="readmore-section">
          <p className="readmore-section-title">Technologies Used</p>
          <div className="readmore-tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="readmore-tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="readmore-divider" />

        <div className="readmore-actions">
          <span className="readmore-btn readmore-btn--primary readmore-btn--disabled">
            <BsGithub size={18} /> Private / Internal Project
          </span>
          <Link to="/projects" className="readmore-btn readmore-btn--outline">
            ← All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadMore3;
