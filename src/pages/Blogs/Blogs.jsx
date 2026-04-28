import React from "react";
import { Link } from "react-router-dom";
import "./Blogs.css";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabase-config";
import BlogsData from "./BlogsData";
import { motion } from "framer-motion";
import { HiPencilAlt, HiLogout, HiLogin, HiPlus } from "react-icons/hi";

const Blogs = ({ isAuth, setIsAuth }) => {
  let navigate = useNavigate();

  const signUserOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Error signing out:", error);
      } else {
        localStorage.clear();
        setIsAuth(false);
        navigate("/login");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="modern-blogs">
      {/* Hero Section */}
      <motion.section 
        className="blogs-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="blogs-hero-content">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="hero-badge">
              <HiPencilAlt size={18} /> Blog
            </span>
            <h1 className="blogs-title">
              Latest <span className="gradient-text">Insights</span>
            </h1>
            <p className="blogs-subtitle">
              Sharing thoughts, ideas, and experiences about web development, design, and technology.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="blogs-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {!isAuth ? (
              <Link to="/login" className="blog-action-btn primary">
                <HiLogin size={20} />
                Login to Post
              </Link>
            ) : (
              <>
                <Link to="/createpost" className="blog-action-btn primary">
                  <HiPlus size={20} />
                  Create Post
                </Link>
                <button 
                  className="blog-action-btn secondary" 
                  onClick={signUserOut}
                >
                  <HiLogout size={20} />
                  Sign Out
                </button>
              </>
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* Blog Posts Grid */}
      <section className="blogs-content">
        <BlogsData isAuth={isAuth} />
      </section>
    </div>
  );
};

export default Blogs;
