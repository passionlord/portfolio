import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowLeft, HiCode, HiExternalLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import contents from "./contents";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectIndex = parseInt(id) - 1;
  const project = contents[projectIndex];

  if (!project) {
    return (
      <div className="project-detail-error">
        <h2>Project not found</h2>
        <Link to="/projects" className="back-link">← Back to Projects</Link>
      </div>
    );
  }

  // Project-specific data
  const projectDetails = {
    0: {
      technologies: ["React.js", "HTML", "CSS", "Firebase", "GitHub"],
      features: [
        "Responsive portfolio design",
        "Blog section with Firebase integration",
        "Project showcase",
        "About me section",
        "Modern UI/UX"
      ],
      github: "https://github.com/yourusername/portfolio",
      live: "#"
    },
    1: {
      technologies: ["React.js", "Hyperledger Fabric", "MongoDB", "Node.js", "Lunacy"],
      features: [
        "Blockchain-based voting system",
        "Secure and tamper-proof",
        "User authentication",
        "Real-time vote counting",
        "Modern UI design"
      ],
      github: "https://github.com/yourusername/blockchain-voting",
      live: "#"
    },
    2: {
      technologies: ["Arduino", "Ultrasonic Sensors", "IR Sensors", "Motor Driver", "C++"],
      features: [
        "Autonomous parallel parking",
        "4 ultrasonic sensors for distance measurement",
        "IR sensor for speed calculation",
        "Automatic space detection",
        "Motor control system"
      ],
      github: "https://github.com/yourusername/auto-parking",
      live: "#"
    },
    3: {
      technologies: ["Electronics", "Power Systems", "Circuit Design", "Battery Management"],
      features: [
        "AC to DC conversion",
        "Battery backup system",
        "Automatic switching",
        "Overload protection",
        "LED indicators"
      ],
      github: "https://github.com/yourusername/home-inverter",
      live: "#"
    }
  };

  const details = projectDetails[projectIndex] || projectDetails[0];

  return (
    <div className="modern-project-detail">
      {/* Hero Section */}
      <motion.section
        className="project-detail-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="project-detail-hero-content">
          <Link to="/projects" className="back-button">
            <HiArrowLeft size={20} />
            Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="project-badge">
              <HiCode /> Project #{id}
            </span>
            <h1 className="project-detail-title">{project.title}</h1>
            <p className="project-detail-subtitle">
              {project.projectInfo.substring(0, 150)}...
            </p>

            <div className="project-links">
              <a 
                href={details.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link-btn github"
              >
                <BsGithub size={20} />
                View on GitHub
              </a>
              {details.live !== "#" && (
                <a 
                  href={details.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link-btn live"
                >
                  <HiExternalLink size={20} />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Image */}
      <motion.section
        className="project-image-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="project-featured-image"
        />
      </motion.section>

      {/* Content Section */}
      <motion.section
        className="project-content-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="project-content-grid">
          {/* Main Content */}
          <div className="project-main-content">
            <h2>About This Project</h2>
            <p className="project-description">{project.projectInfo}</p>

            <h2>Key Features</h2>
            <ul className="features-list">
              {details.features.map((feature, index) => (
                <li key={index}>
                  <span className="feature-icon">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <div className="project-sidebar">
            <div className="sidebar-card">
              <h3>Technologies Used</h3>
              <div className="tech-tags">
                {details.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="sidebar-card">
              <h3>Project Info</h3>
              <div className="project-info-item">
                <strong>Category:</strong>
                <span>
                  {projectIndex === 0 ? "Web Development" : 
                   projectIndex === 1 ? "Blockchain" : "IoT & Hardware"}
                </span>
              </div>
              <div className="project-info-item">
                <strong>Status:</strong>
                <span className="status-badge">Completed</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Navigation */}
      <motion.section
        className="project-navigation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="nav-buttons">
          {projectIndex > 0 && (
            <button 
              onClick={() => navigate(`/project/${projectIndex}`)}
              className="nav-btn prev"
            >
              ← Previous Project
            </button>
          )}
          {projectIndex < contents.length - 1 && (
            <button 
              onClick={() => navigate(`/project/${projectIndex + 2}`)}
              className="nav-btn next"
            >
              Next Project →
            </button>
          )}
        </div>
      </motion.section>
    </div>
  );
};

export default ProjectDetail;
