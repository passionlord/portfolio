import React, { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { HiClock, HiUser, HiHashtag } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import "./BlogsData.css";
import { supabase } from "./supabase-config";
import moment from "moment";
import { motion } from "framer-motion";

const BlogsData = ({ isAuth }) => {
  const [postLists, setPostList] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    
    getUser();
    getPosts();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  const getPosts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Error fetching posts:", error);
      } else {
        setPostList(data || []);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) {
      return;
    }

    try {
      const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', id);

      if (error) {
        console.error("Error deleting post:", error);
        alert("Error deleting post: " + error.message);
      } else {
        alert("Post deleted successfully!");
        getPosts();
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error deleting post");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  if (loading) {
    return (
      <div className="blogs-loading">
        <div className="loading-spinner"></div>
        <p>Loading posts...</p>
      </div>
    );
  }

  if (postLists.length === 0) {
    return (
      <div className="no-posts">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>No blog posts yet</h3>
          <p>Be the first to share your thoughts!</p>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div 
      className="blogs-grid"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {postLists.map((post, index) => (
        <motion.article
          key={post.id || index}
          className="blog-card-modern"
          variants={cardVariants}
          whileHover={{ y: -8 }}
        >
          {/* Card Image */}
          <div className="blog-card-image">
            <img 
              src={`https://picsum.photos/seed/${post.id}/600/400`} 
              alt={post.title}
              loading="lazy"
            />
            <div className="blog-card-overlay">
              {post.hashtag && (
                <span className="blog-hashtag">
                  <HiHashtag /> {post.hashtag}
                </span>
              )}
            </div>
          </div>

          {/* Card Content */}
          <div className="blog-card-body">
            {/* Author Info */}
            <div className="blog-author">
              <img 
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(post.author_name || 'User')}&background=6366f1&color=fff&bold=true`} 
                alt={post.author_name}
                className="author-avatar"
              />
              <div className="author-details">
                <div className="author-name">
                  <HiUser size={14} />
                  {post.author_name || 'Anonymous'}
                </div>
                <div className="post-date">
                  <HiClock size={14} />
                  {moment(post.created_at).format("MMM D, YYYY")}
                </div>
              </div>
            </div>

            {/* Title */}
            <h2 className="blog-card-title">{post.title}</h2>

            {/* Excerpt */}
            <p className="blog-card-excerpt">
              {post.post_text.substring(0, 120)}
              {post.post_text.length > 120 && "..."}
            </p>

            {/* Card Footer */}
            <div className="blog-card-footer">
              <button 
                className="read-more-btn"
                onClick={() => navigate(`/post/${post.id}`)}
              >
                Read More →
              </button>

              {user && post.author_id === user.id && (
                <div className="blog-actions">
                  <motion.button
                    className="action-btn edit-btn"
                    onClick={() => navigate(`/editpost/${post.id}`)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="Edit post"
                  >
                    <BiEdit size={18} />
                  </motion.button>
                  <motion.button
                    className="action-btn delete-btn"
                    onClick={() => deletePost(post.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="Delete post"
                  >
                    <BsTrash size={16} />
                  </motion.button>
                </div>
              )}
            </div>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
};

export default BlogsData;
