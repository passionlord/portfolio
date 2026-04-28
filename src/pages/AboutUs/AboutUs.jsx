import React, { useState } from "react";
import { images } from "../../constants";
import "./AboutUs.css";
import { motion } from "framer-motion";
import { 
  HiMail, HiLocationMarker, HiDownload, HiDatabase, HiChartBar 
} from "react-icons/hi";
import { 
  FaReact, FaJs, 
  FaNodeJs, FaPython, FaGitAlt 
} from "react-icons/fa";
import { SiPowerbi, SiPostgresql, SiMicrosoftsqlserver, SiOpenai, SiVisualstudio } from "react-icons/si";

const AboutUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const skills = [
    { name: "SQL Server", icon: <SiMicrosoftsqlserver />, level: 95 },
    { name: "PostgreSQL", icon: <SiPostgresql />, level: 90 },
    { name: "Power BI", icon: <SiPowerbi />, level: 95 },
    { name: "SSIS & ETL", icon: <HiDatabase />, level: 90 },
    { name: "Data Analytics", icon: <HiChartBar />, level: 95 },
    { name: "OpenAI GPT", icon: <SiOpenai />, level: 85 },
    { name: "React.js", icon: <FaReact />, level: 90 },
    { name: "Node.js", icon: <FaNodeJs />, level: 85 },
    { name: "Python", icon: <FaPython />, level: 80 },
    { name: "Git/GitHub", icon: <FaGitAlt />, level: 90 },
    { name: "Visual Studio", icon: <SiVisualstudio />, level: 90 },
    { name: "JavaScript", icon: <FaJs />, level: 85 },
  ];

  const timeline = [
    {
      year: "August 2022 – Present",
      title: "Business Intelligence & Data Analyst",
      company: "Orange Business (France Telecom)",
      location: "Mumbai, India",
      type: "work",
      responsibilities: [
        "Design and deploy Power BI dashboards and automated ETL pipelines using SQL, SSIS, and PostgreSQL",
        "Develop AI-powered solutions with OpenAI GPT and RAG to automate data processes",
        "Build secure web applications with React and Node.js for business automation"
      ]
    },
    {
      year: "June 2018 – May 2022",
      title: "Bachelor of Engineering — Electronics & Telecommunication",
      company: "KC College of Engineering & Management Studies",
      location: "Mumbai University",
      type: "education",
      responsibilities: [
        "Graduated with GPA 8.83/10 - First Class with Distinction",
        "Specialized in embedded systems and IoT-based projects"
      ]
    }
  ];

  return (
    <div className="modern-about">
      {/* Hero Section */}
      <motion.section 
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-hero-content">
          <motion.div
            className="about-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="about-image-wrapper">
              <img src={images.vighnesh} alt="Vighnesh" />
              <div className="image-border"></div>
            </div>
          </motion.div>

          <motion.div
            className="about-text-content"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span className="about-badge">About Me</span>
            <h1 className="about-title">
              Hi there! I'm <span className="gradient-text">Vighnesh Raikar</span>
            </h1>
            <p className="about-description">
              Data professional with 3+ years of experience designing and maintaining data pipelines, ETL workflows, 
              and analytics solutions using SQL, SSIS, PostgreSQL, and Power BI. Strong background in data cleansing, 
              transformation, and building production-ready data systems that support business-critical decision-making. 
              Additionally experienced in integrating AI technologies (OpenAI GPT, RAG) and web applications (Node.js, React) 
              to automate data access, enhance data quality, and deliver intelligent, scalable solutions.
            </p>
            <div className="about-info-cards">
              <div className="info-card">
                <HiLocationMarker size={24} />
                <div>
                  <h4>Location</h4>
                  <p>Mumbai, India</p>
                </div>
              </div>
              <div className="info-card">
                <HiMail size={24} />
                <div>
                  <h4>Email</h4>
                  <p>raikar7178@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="skills-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h4 className="skill-name">{skill.name}</h4>
              <div className="skill-bar">
                <motion.div
                  className="skill-progress"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                />
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section
        className="timeline-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-header">
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle">Career path and educational background</p>
        </div>

        <div className="timeline">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="timeline-node">
                <div className={`timeline-dot ${item.type}`}></div>
                <div className="timeline-connector"></div>
              </div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <span className="timeline-year">{item.year}</span>
                  <span className={`timeline-type-badge ${item.type}`}>
                    {item.type === "work" ? "Work" : "Education"}
                  </span>
                </div>
                <h3 className="timeline-title">{item.title}</h3>
                <div className="timeline-meta">
                  <span className="timeline-company">{item.company}</span>
                  {item.location && <span className="timeline-location">{item.location}</span>}
                </div>
                <ul className="timeline-responsibilities">
                  {item.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        className="skills-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-header">
          <h2 className="section-title">Certifications & Awards</h2>
          <p className="section-subtitle">Professional achievements and recognitions</p>
        </div>

        <div className="skills-grid">
          <motion.div
            className="skill-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="skill-icon" style={{ fontSize: '3rem' }}>🏆</div>
            <h4 className="skill-name">Change Maker Award 2025</h4>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.5rem' }}>
              AI-powered analytics solution reducing bill rejections by 80%
            </p>
          </motion.div>

          <motion.div
            className="skill-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="skill-icon" style={{ fontSize: '3rem' }}>🏆</div>
            <h4 className="skill-name">Change Maker Award 2024</h4>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.5rem' }}>
              Secure web application automating financial calculations
            </p>
          </motion.div>

          <motion.div
            className="skill-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="skill-icon" style={{ fontSize: '3rem' }}>⭐</div>
            <h4 className="skill-name">Flare Award 2025</h4>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.5rem' }}>
              Employee of Semester - Azure OpenAI Chatbot with RAG
            </p>
          </motion.div>

          <motion.div
            className="skill-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="skill-icon" style={{ fontSize: '3rem' }}>☁️</div>
            <h4 className="skill-name">Microsoft Azure AZ-900</h4>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.5rem' }}>
              Azure Fundamentals - 2026
            </p>
          </motion.div>

          <motion.div
            className="skill-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="skill-icon" style={{ fontSize: '3rem' }}>📱</div>
            <h4 className="skill-name">Google Digital Marketing</h4>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.5rem' }}>
              Fundamentals of Digital Marketing - 2020
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Resume Download */}
      <motion.section
        className="resume-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="resume-card">
          <HiDownload size={40} />
          <h3>Download My Resume</h3>
          <p>Get a detailed overview of my experience and qualifications</p>
          <motion.button
            className="download-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.button>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="contact-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's work together on your next project</p>
        </div>

        <motion.div
          className="contact-form-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <form className="modern-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows="6"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
