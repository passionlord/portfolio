import React, { useState, useEffect } from "react";
import "./CreatePost.css";
import { supabase } from "./supabase-config";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { HiPencilAlt, HiTag, HiDocumentText } from "react-icons/hi";

const EditPost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [hashtag, setHashtag] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const initPage = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      
      if (!user) {
        navigate("/login");
        return;
      }

      const { data: post, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error("Error fetching post:", error);
        alert("Error loading post");
        navigate("/blogs");
        return;
      }

      if (post.author_id !== user.id) {
        alert("You can only edit your own posts");
        navigate("/blogs");
        return;
      }

      setTitle(post.title);
      setPostText(post.post_text);
      setHashtag(post.hashtag || "");
      setLoading(false);
    };
    
    initPage();
  }, [id, navigate]);

  const updatePost = async () => {
    if (!user) {
      alert("You must be logged in to edit a post");
      navigate("/login");
      return;
    }

    if (!title || !postText) {
      alert("Please fill in title and post content");
      return;
    }

    setUpdating(true);

    try {
      const { error } = await supabase
        .from('posts')
        .update({
          title: title,
          post_text: postText,
          hashtag: hashtag
        })
        .eq('id', id)
        .eq('author_id', user.id);

      if (error) {
        console.error("Error updating post:", error);
        alert("Error updating post: " + error.message);
      } else {
        alert("Post updated successfully!");
        navigate("/blogs");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error updating post");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="modern-create-post">
        <div className="blogs-loading">
          <div className="loading-spinner"></div>
          <p>Loading post...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="modern-create-post">
      {/* Hero Section */}
      <motion.section 
        className="create-post-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="hero-badge">
            <HiPencilAlt size={18} /> Edit Post
          </span>
          <h1 className="create-post-title">
            Update Your <span className="gradient-text">Story</span>
          </h1>
          <p className="create-post-subtitle">
            Make changes to your post and publish the updates
          </p>
        </motion.div>
      </motion.section>

      {/* Form Section */}
      <motion.section
        className="create-post-form-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="form-container">
          <div className="form-card">
            <div className="form-group">
              <label htmlFor="title">
                <HiDocumentText size={20} /> Post Title
              </label>
              <input
                id="title"
                type="text"
                className="form-input"
                placeholder="Enter an engaging title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={100}
              />
              <span className="char-count">{title.length}/100</span>
            </div>

            <div className="form-group">
              <label htmlFor="content">
                <HiPencilAlt size={20} /> Post Content
              </label>
              <textarea
                id="content"
                className="form-textarea"
                placeholder="Write your story here..."
                rows="12"
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
              />
              <span className="char-count">{postText.length} characters</span>
            </div>

            <div className="form-group">
              <label htmlFor="hashtag">
                <HiTag size={20} /> Hashtag (Optional)
              </label>
              <input
                id="hashtag"
                type="text"
                className="form-input"
                placeholder="#technology #coding #webdev"
                value={hashtag}
                onChange={(e) => setHashtag(e.target.value)}
                maxLength={50}
              />
              <span className="char-count">{hashtag.length}/50</span>
            </div>

            <div className="form-actions">
              <motion.button
                className="cancel-btn"
                onClick={() => navigate("/blogs")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={updating}
              >
                Cancel
              </motion.button>
              <motion.button
                className="submit-btn"
                onClick={updatePost}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={updating || !title || !postText}
              >
                {updating ? (
                  <>
                    <div className="spinner"></div>
                    Updating...
                  </>
                ) : (
                  <>
                    <HiPencilAlt size={20} />
                    Update Post
                  </>
                )}
              </motion.button>
            </div>
          </div>

          {/* Preview Card */}
          <div className="preview-card">
            <h3>Preview</h3>
            <div className="preview-content">
              <h4>{title || "Your title will appear here"}</h4>
              <p>{postText || "Your content will be displayed here..."}</p>
              {hashtag && (
                <div className="preview-hashtag">
                  <HiTag /> {hashtag}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default EditPost;
