import React, { useState } from "react";
import { images } from "../../constants";
import "./AboutUs.css";
import { motion } from "framer-motion";
import { 
  HiMail, HiLocationMarker, HiDownload 
} from "react-icons/hi";
import { 
  FaReact, FaHtml5, FaJs, FaFigma, 
  FaNodeJs, FaPython, FaGitAlt 
} from "react-icons/fa";
import { SiFirebase, SiMongodb, SiArduino } from "react-icons/si";

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
    { name: "React.js", icon: <FaReact />, level: 90 },
    { name: "JavaScript", icon: <FaJs />, level: 85 },
    { name: "HTML/CSS", icon: <FaHtml5 />, level: 95 },
    { name: "Node.js", icon: <FaNodeJs />, level: 75 },
    { name: "Python", icon: <FaPython />, level: 70 },
    { name: "Firebase", icon: <SiFirebase />, level: 80 },
    { name: "MongoDB", icon: <SiMongodb />, level: 75 },
    { name: "Figma", icon: <FaFigma />, level: 85 },
    { name: "Git", icon: <FaGitAlt />, level: 80 },
    { name: "Arduino", icon: <SiArduino />, level: 70 },
  ];

  const timeline = [
    {
      year: "2023",
      title: "Web Developer",
      company: "Freelance",
      description: "Building modern web applications with React and Node.js"
    },
    {
      year: "2022",
      title: "Graduate Project",
      company: "College",
      description: "Blockchain Voting System using Hyperledger Fabric"
    },
    {
      year: "2021",
      title: "IoT Projects",
      company: "Academic",
      description: "Autonomous Car Parking System and Smart Home Solutions"
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
              Hi there! I'm <span className="gradient-text">Vighnesh</span>
            </h1>
            <p className="about-description">
              A passionate Full Stack Developer and UI/UX enthusiast who loves creating 
              beautiful and functional web experiences. With expertise in modern web technologies 
              and a keen eye for design, I bring ideas to life through code.
            </p>
            <div className="about-info-cards">
              <div className="info-card">
                <HiLocationMarker size={24} />
                <div>
                  <h4>Location</h4>
                  <p>India</p>
                </div>
              </div>
              <div className="info-card">
                <HiMail size={24} />
                <div>
                  <h4>Email</h4>
                  <p>contact@vighnesh.dev</p>
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
          <h2 className="section-title">My Journey</h2>
          <p className="section-subtitle">Career timeline and milestones</p>
        </div>

        <div className="timeline">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-company">{item.company}</h4>
                <p className="timeline-description">{item.description}</p>
              </div>
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
