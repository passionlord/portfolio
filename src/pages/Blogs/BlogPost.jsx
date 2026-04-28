import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { supabase } from "./supabase-config";
import moment from "moment";
import { motion } from "framer-motion";
import { HiArrowLeft, HiClock, HiUser, HiHashtag } from "react-icons/hi";
import "./BlogPost.css";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .eq('id', id)
          .single();

        if (error) {
          console.error("Error fetching post:", error);
          navigate("/blogs");
        } else {
          setPost(data);
        }
      } catch (error) {
        console.error("Error:", error);
        navigate("/blogs");
      } finally {
        setLoading(false);
      }
    };

    getPost();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="blog-post-loading">
        <div className="loading-spinner"></div>
        <p>Loading post...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="blog-post-error">
        <h2>Post not found</h2>
        <Link to="/blogs" className="back-link">← Back to Blogs</Link>
      </div>
    );
  }

  return (
    <div className="modern-blog-post">
      {/* Hero Section */}
      <motion.section
        className="blog-post-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="blog-post-hero-content">
          <Link to="/blogs" className="back-button">
            <HiArrowLeft size={20} />
            Back to Blogs
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {post.hashtag && (
              <span className="post-hashtag">
                <HiHashtag /> {post.hashtag}
              </span>
            )}
            <h1 className="post-title">{post.title}</h1>

            <div className="post-meta">
              <div className="author-info">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(post.author_name || 'User')}&background=6366f1&color=fff&bold=true`}
                  alt={post.author_name}
                  className="author-avatar"
                />
                <div className="author-details">
                  <div className="author-name">
                    <HiUser size={16} />
                    {post.author_name || 'Anonymous'}
                  </div>
                  <div className="post-date">
                    <HiClock size={16} />
                    {moment(post.created_at).format("MMMM D, YYYY")}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Image */}
      <motion.section
        className="post-image-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <img
          src={`https://picsum.photos/seed/${post.id}/1200/600`}
          alt={post.title}
          className="post-featured-image"
        />
      </motion.section>

      {/* Content Section */}
      <motion.section
        className="post-content-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <article className="post-content">
          <div className="content-body">
            {post.post_text.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </motion.section>

      {/* Navigation */}
      <motion.section
        className="post-navigation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Link to="/blogs" className="nav-button">
          ← All Posts
        </Link>
      </motion.section>
    </div>
  );
};

export default BlogPost;
