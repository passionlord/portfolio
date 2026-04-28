import React, { useState } from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import { HiCode, HiChip, HiLightningBolt } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import contents from "./contents";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = {
    all: "All Projects",
    web: "Web Development",
    iot: "IoT & Hardware",
    blockchain: "Blockchain",
  };

  const projectCategories = {
    0: "web",
    1: "blockchain", 
    2: "iot",
    3: "iot",
  };

  const filteredProjects = contents.filter((project, index) => {
    const matchesFilter = filter === "all" || projectCategories[index] === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.projectInfo.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
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
              Every project is an opportunity to learn, to figure out problems and challenges, to invent and reinvent.
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
            {Object.entries(categories).map(([key, value]) => (
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
                whileHover={{ y: -10 }}
              >
                <div className="project-card-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-card-overlay">
                    <div className="project-icons">
                      {projectCategories[contents.indexOf(project)] === "web" && <HiCode size={30} />}
                      {projectCategories[contents.indexOf(project)] === "blockchain" && <HiLightningBolt size={30} />}
                      {projectCategories[contents.indexOf(project)] === "iot" && <HiChip size={30} />}
                    </div>
                  </div>
                </div>
                <div className="project-card-content">
                  <div className="project-category-badge">
                    {categories[projectCategories[contents.indexOf(project)]]}
                  </div>
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-description">
                    {project.projectInfo.substring(0, 150)}...
                  </p>
                  <div className="project-card-footer">
                    <Link 
                      to={`/project/${contents.indexOf(project) + 1}`}
                      className="view-details-btn"
                    >
                      View Details
                    </Link>
                    <button className="github-btn">
                      <BsGithub size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              className="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p>No projects found matching your criteria.</p>
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
            <h2 className="stat-number">{contents.length}+</h2>
            <p className="stat-label">Projects Completed</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">10+</h2>
            <p className="stat-label">Technologies Used</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">100%</h2>
            <p className="stat-label">Client Satisfaction</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Projects;
