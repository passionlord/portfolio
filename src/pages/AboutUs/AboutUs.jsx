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

  const skillGroups = [
    {
      category: "Data & Analytics",
      color: "#6366f1",
      bg: "rgba(99,102,241,0.08)",
      border: "rgba(99,102,241,0.2)",
      items: [
        { name: "SQL Server", icon: <SiMicrosoftsqlserver /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Power BI", icon: <SiPowerbi /> },
        { name: "SSIS & ETL", icon: <HiDatabase /> },
        { name: "Data Analytics", icon: <HiChartBar /> },
      ]
    },
    {
      category: "AI & Automation",
      color: "#a855f7",
      bg: "rgba(168,85,247,0.08)",
      border: "rgba(168,85,247,0.2)",
      items: [
        { name: "OpenAI GPT", icon: <SiOpenai /> },
        { name: "Azure OpenAI", icon: <SiOpenai /> },
        { name: "RAG Systems", icon: <HiChartBar /> },
      ]
    },
    {
      category: "Web Development",
      color: "#ec4899",
      bg: "rgba(236,72,153,0.08)",
      border: "rgba(236,72,153,0.2)",
      items: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Git/GitHub", icon: <FaGitAlt /> },
        { name: "Visual Studio", icon: <SiVisualstudio /> },
      ]
    }
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

        <div className="skill-groups">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={gi}
              className="skill-group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.15, duration: 0.5 }}
              style={{ "--group-color": group.color, "--group-bg": group.bg, "--group-border": group.border }}
            >
              <div className="skill-group-header">
                <span className="skill-group-dot" style={{ background: group.color }}></span>
                <h4 className="skill-group-title">{group.category}</h4>
              </div>
              <div className="skill-chips">
                {group.items.map((skill, si) => (
                  <motion.div
                    key={si}
                    className="skill-chip"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.15 + si * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.07, y: -2 }}
                  >
                    <span className="skill-chip-icon" style={{ color: group.color }}>{skill.icon}</span>
                    <span className="skill-chip-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
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
        className="certs-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-header">
          <h2 className="section-title">Certifications & Awards</h2>
          <p className="section-subtitle">Professional achievements and recognitions</p>
        </div>

        <div className="certs-grid">
          {[
            { emoji: "🏆", title: "Change Maker Award 2025", org: "Orange Business", desc: "AI-powered analytics solution reducing bill rejections by 80%", type: "award" },
            { emoji: "🏆", title: "Change Maker Award 2024", org: "Orange Business", desc: "Secure web application automating financial calculations", type: "award" },
            { emoji: "⭐", title: "Flare Award 2025", org: "Orange Business", desc: "Employee of Semester — Azure OpenAI Chatbot with RAG", type: "award" },
            { emoji: "☁️", title: "Microsoft Azure AZ-900", org: "Microsoft", desc: "Azure Fundamentals Certification — 2026", type: "cert" },
            { emoji: "📱", title: "Google Digital Marketing", org: "Google", desc: "Fundamentals of Digital Marketing — 2020", type: "cert" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`cert-card cert-card--${item.type}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <span className="cert-emoji">{item.emoji}</span>
              <div className="cert-body">
                <h4 className="cert-title">{item.title}</h4>
                <span className="cert-org">{item.org}</span>
                <p className="cert-desc">{item.desc}</p>
              </div>
              <span className={`cert-badge cert-badge--${item.type}`}>
                {item.type === "award" ? "Award" : "Certification"}
              </span>
            </motion.div>
          ))}
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
