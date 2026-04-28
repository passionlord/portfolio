import React from "react";
import contents from "../contents";
import "./ReadMoreAll.css";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { HiArrowLeft } from "react-icons/hi";

const ReadMore7 = () => {
  const project = contents[6];

  return (
    <div className="readmore-page">
      <div className="readmore-hero">
        <div className="readmore-hero-inner">
          <Link to="/projects" className="readmore-back">
            <HiArrowLeft /> Back to Projects
          </Link>
          <div className="readmore-category">IoT & Electronics</div>
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
          <p className="readmore-section-title">Circuit Design</p>
          <p className="readmore-description">
            The circuit uses two MOSFET transistors in a push-pull configuration driven by a 555-timer PWM oscillator at 50 Hz. The high-frequency switching drives the primary coil of a step-up transformer, producing 230V AC on the secondary. A capacitor filter smooths the output waveform. The design was first simulated in Proteus before being prototyped on a breadboard and tested under load.
          </p>
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
            <BsGithub size={18} /> No GitHub (Hardware Project)
          </span>
          <Link to="/projects" className="readmore-btn readmore-btn--outline">
            ← All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadMore7;
