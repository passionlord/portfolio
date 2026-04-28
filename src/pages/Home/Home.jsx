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
              Frontend UI/UX Designer & Developer
            </motion.p>
            
            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              I craft beautiful, functional, and user-centered digital experiences. 
              Passionate about creating intuitive interfaces that solve real problems.
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
              <a href="mailto:your@email.com" className="social-link">
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
              <span>✨ UI/UX</span>
            </div>
            <div className="floating-badge badge-2">
              <span>💻 Frontend</span>
            </div>
            <div className="floating-badge badge-3">
              <span>🎨 Design</span>
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
            <h2>What I Love</h2>
            <p>Passions that drive my creativity</p>
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
                <img src={images.cook} alt="Cooking" />
              </div>
              <h3>COOKING</h3>
              <p>
                In my life, I like to do lot of activities that help me exercise and make me feel alive. 
                My favorite activity is cooking because it's both creative and relaxing. I started cooking 
                in high school when I was home alone and hungry - I grabbed some ingredients, experimented, 
                and created something delicious. Since then, cooking has been my go-to activity for unwinding 
                and expressing creativity.
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
                <img src={images.design} alt="Design" />
              </div>
              <h3>DESIGN</h3>
              <p>
                Creativity is my first dexterity. I'm passionate about creating UI designs, experimenting 
                with them, and bringing them to life. I love the thrill of seeing my imagination materialize. 
                I chose to be a web designer to transform my ideas into reality and help others see what 
                I envision as a better digital world. Designing is like painting with a rainbow of colors - 
                it brightens the mind and inspires innovation.
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
                <img src={images.code} alt="Coding" />
              </div>
              <h3>CODING</h3>
              <p>
                I am a creative designer and developer who aims to work on amazing projects and with 
                innovative companies. Code is poetry in motion - I find immense satisfaction in solving 
                complex problems through elegant solutions. I offer both design and frontend development 
                services for web applications and websites that make a difference.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
