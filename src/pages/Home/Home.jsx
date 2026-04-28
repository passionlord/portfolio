import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import "./Home.css";
import { BsLinkedin, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import { ImPinterest2 } from "react-icons/im";
import { HiArrowRight, HiMail } from "react-icons/hi";
import { motion } from "framer-motion";

const Home = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.top = e.clientY + 'px';
        cursorRef.current.style.left = e.clientX + 'px';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      
      <motion.div 
        className="modern-hero"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="hero-container">
          <motion.div className="hero-content" variants={itemVariants}>
            <motion.span 
              className="hero-greeting"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              👋 Hello, I'm
            </motion.span>
            
            <motion.h1 
              className="hero-title"
              variants={itemVariants}
            >
              VIGHNESH
              <span className="highlight"> RAIKAR</span>
            </motion.h1>
            
            <motion.p 
              className="hero-role"
              variants={itemVariants}
            >
              Business Intelligence & Data Analyst
            </motion.p>
            
            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              Data professional with 3+ years of experience designing and maintaining data pipelines, ETL workflows, 
              and analytics solutions. Passionate about building AI-enabled data systems that transform business 
              decision-making with Power BI, SQL, SSIS, and cutting-edge AI technologies.
            </motion.p>
            
            <motion.div 
              className="hero-cta"
              variants={itemVariants}
            >
              <Link to="/projects" className="btn-primary">
                View My Work
                <HiArrowRight className="btn-icon" />
              </Link>
              <Link to="/aboutUs" className="btn-secondary">
                About Me
              </Link>
            </motion.div>
            
            <motion.div 
              className="hero-social"
              variants={itemVariants}
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <BsGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <BsLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <BsInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <BsTwitter />
              </a>
              <a href="mailto:raikar7178@gmail.com" className="social-link">
                <HiMail />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="visual-card">
              <img
                src={images.vighnesh3}
                alt="Vighnesh Raikar"
                className="hero-image"
              />
              <div className="visual-gradient"></div>
            </div>
            <div className="floating-badge badge-1">
              <span>📊 Data Analytics</span>
            </div>
            <div className="floating-badge badge-2">
              <span>🤖 AI Solutions</span>
            </div>
            <div className="floating-badge badge-3">
              <span>⚡ ETL Pipelines</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.section 
        className="interests-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-container">
          <motion.div 
            className="section-header"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <ImPinterest2 className="section-icon" />
            <h2>What I Do Best</h2>
            <p>Core expertise and professional passions</p>
          </motion.div>

          <div className="interests-grid">
            <motion.div 
              className="interest-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="interest-icon">
                <img src={images.cook} alt="Data Analytics" />
              </div>
              <h3>DATA ANALYTICS</h3>
              <p>
                Transforming raw data into actionable insights is my passion. I love designing interactive 
                dashboards and creating automated ETL pipelines that empower businesses to make data-driven 
                decisions. With Power BI, SQL, and SSIS, I build solutions that reduce processing time by 90% 
                while improving accuracy and stakeholder visibility. Data tells a story, and I'm here to help 
                businesses read it clearly.
              </p>
            </motion.div>

            <motion.div 
              className="interest-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="interest-icon">
                <img src={images.design} alt="AI Solutions" />
              </div>
              <h3>AI SOLUTIONS</h3>
              <p>
                Building AI-powered tools is where innovation meets impact. I develop intelligent systems using 
                OpenAI GPT and RAG (Retrieval Augmented Generation) that automate complex processes and enhance 
                user experiences. From chatbots that serve 240+ dashboards to smart categorization systems that 
                process thousands of records automatically, I create solutions that reduce manual effort by 80% 
                while improving accuracy and efficiency.
              </p>
            </motion.div>

            <motion.div 
              className="interest-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="interest-icon">
                <img src={images.code} alt="Web Development" />
              </div>
              <h3>WEB DEVELOPMENT</h3>
              <p>
                I combine data expertise with web development to create secure, scalable applications using 
                React and Node.js. Whether it's building financial calculation systems, automated billing 
                solutions, or interactive data visualization tools, I craft web applications that replace 
                manual processes and deliver measurable business value. Clean code meets powerful functionality 
                in every project I build.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
