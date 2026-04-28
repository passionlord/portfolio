import React, { useState } from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import { HiCode, HiDatabase, HiLightningBolt, HiChip } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import contents from "./contents";

const categoryIcons = {
  data: <HiDatabase size={22} />,
  ai: <HiLightningBolt size={22} />,
  web: <HiCode size={22} />,
  blockchain: <HiLightningBolt size={22} />,
  iot: <HiChip size={22} />,
};

const categoryLabels = {
  all: "All Projects",
  data: "Data & ETL",
  ai: "AI Solutions",
  web: "Web Development",
  blockchain: "Blockchain",
  iot: "IoT & Electronics",
};

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = contents.filter((project) => {
    const matchesFilter = filter === "all" || project.category === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.projectInfo.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="modern-projects">
      {/* Hero Section */}
      <motion.section
        className="projects-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="projects-hero-content">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="hero-badge">Portfolio</span>
            <h1 className="projects-title">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="projects-subtitle">
              Real-world solutions built at Orange Business — from AI-powered analytics to automated ETL pipelines and secure web applications.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            className="search-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <input
              type="text"
              placeholder="Search projects..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="filter-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {Object.entries(categoryLabels).map(([key, value]) => (
              <button
                key={key}
                className={`filter-btn ${filter === key ? "active" : ""}`}
                onClick={() => setFilter(key)}
              >
                {value}
              </button>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section
        className="projects-grid-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card-modern"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="project-card-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-card-overlay">
                    <div className="project-icons">
                      {categoryIcons[project.category]}
                    </div>
                  </div>
                  {project.award && (
                    <div className="project-award-badge">🏆 {project.award}</div>
                  )}
                </div>
                <div className="project-card-content">
                  <div className="project-category-badge">
                    {categoryLabels[project.category]}
                  </div>
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-description">
                    {project.projectInfo.substring(0, 140)}...
                  </p>
                  <div className="project-tags">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="project-tag">{tag}</span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="project-tag">+{project.tags.length - 3}</span>
                    )}
                  </div>
                  <div className="project-card-footer">
                    <Link
                      to={`/readMore${contents.indexOf(project) + 1}`}
                      className="view-details-btn"
                    >
                      View Details
                    </Link>
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="github-btn"
                      >
                        <BsGithub size={20} />
                      </a>
                    ) : (
                      <button className="github-btn github-btn--disabled" disabled title="Private / Internal Project">
                        <BsGithub size={20} />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div className="no-results" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <p>No projects found matching your search.</p>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="projects-stats"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="stats-grid">
          <div className="stat-item">
            <h2 className="stat-number">3+</h2>
            <p className="stat-label">Awards Won</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">80%</h2>
            <p className="stat-label">Error Reduction</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">90%</h2>
            <p className="stat-label">Time Saved</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">240+</h2>
            <p className="stat-label">Dashboards Served</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Projects;
