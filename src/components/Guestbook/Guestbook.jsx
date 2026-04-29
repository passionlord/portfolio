import React, { useEffect, useState } from "react";
import { supabase } from "../../pages/Blogs/supabase-config";
import { motion, AnimatePresence } from "framer-motion";
import { HiPencilAlt, HiCheckCircle, HiUsers } from "react-icons/hi";
import "./Guestbook.css";

const MAX_NAME = 50;
const MAX_MSG  = 300;

function getInitials(name) {
  return name
    .trim()
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

function timeAgo(dateStr) {
  const diff = Math.floor((Date.now() - new Date(dateStr)) / 1000);
  if (diff < 60)       return "just now";
  if (diff < 3600)     return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400)    return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 2592000)  return `${Math.floor(diff / 86400)}d ago`;
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

const AVATAR_COLORS = [
  "#6366f1", "#8b5cf6", "#ec4899", "#f59e0b",
  "#10b981", "#3b82f6", "#ef4444", "#14b8a6",
];

function avatarColor(name) {
  let hash = 0;
  for (const c of name) hash = (hash * 31 + c.charCodeAt(0)) & 0xffffffff;
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

const Guestbook = () => {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const fetchEntries = async () => {
    const { data } = await supabase
      .from("guestbook")
      .select("id, name, message, created_at")
      .order("created_at", { ascending: false })
      .limit(5);
    if (data) setEntries(data);
  };

  useEffect(() => { fetchEntries(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedMsg  = message.trim();

    if (!trimmedName || !trimmedMsg) { setErrorMsg("Please fill in both fields."); return; }
    if (trimmedName.length > MAX_NAME) { setErrorMsg(`Name must be ${MAX_NAME} characters or less.`); return; }
    if (trimmedMsg.length > MAX_MSG)   { setErrorMsg(`Message must be ${MAX_MSG} characters or less.`); return; }

    setStatus("submitting");
    setErrorMsg("");

    const { error } = await supabase
      .from("guestbook")
      .insert({ name: trimmedName, message: trimmedMsg });

    if (error) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    } else {
      setStatus("success");
      setName("");
      setMessage("");
      fetchEntries();
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section className="gb-section">
      <div className="gb-wrapper">

        {/* ── Header ── */}
        <motion.div
          className="gb-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="gb-pill">Guestbook</span>
          <h2 className="gb-title">Leave a <span>Message</span></h2>
          <p className="gb-subtitle">
            A quick note from you means a lot. Drop a message and say hi.
          </p>
        </motion.div>

        <div className="gb-layout">
          <motion.div
            className="gb-left"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="gb-card gb-hero-card">
              <div className="gb-hero-title-wrap">
                <div className="gb-card-icon"><HiUsers /></div>
                <h3 className="gb-hero-title">Community Wall</h3>
              </div>
              <p className="gb-hero-sub">Latest thoughts from visitors, friends, and collaborators.</p>
              <div className="gb-stat-row">
                <div className="gb-stat-pill">
                  <span className="gb-stat-pill-value">{entries.length}</span>
                  <span className="gb-stat-pill-label">Recent notes</span>
                </div>
                <div className="gb-stat-pill gb-stat-pill--live">
                  <span className="gb-live-dot" />
                  <span className="gb-stat-pill-label">Live updates</span>
                </div>
              </div>
            </div>

            <div className="gb-card">
              <div className="gb-card-head">
                <div className="gb-card-icon"><HiPencilAlt /></div>
                <span className="gb-card-title">Sign the Guestbook</span>
              </div>

              <form className="gb-form-body" onSubmit={handleSubmit}>
                <div>
                  <label className="gb-label">Your Name</label>
                  <div className="gb-field">
                    <input
                      type="text"
                      className="gb-input"
                      placeholder="e.g. Jane Smith"
                      value={name}
                      onChange={(e) => setName(e.target.value.slice(0, MAX_NAME))}
                      maxLength={MAX_NAME}
                      disabled={status === "submitting"}
                    />
                    <span className="gb-char">{name.length}/{MAX_NAME}</span>
                  </div>
                </div>

                <div>
                  <label className="gb-label">Message</label>
                  <div className="gb-field">
                    <textarea
                      className="gb-input gb-textarea"
                      placeholder="Say something nice..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value.slice(0, MAX_MSG))}
                      maxLength={MAX_MSG}
                      rows={4}
                      disabled={status === "submitting"}
                    />
                    <span className="gb-char gb-char--bottom">{message.length}/{MAX_MSG}</span>
                  </div>
                </div>

                {errorMsg && <p className="gb-error">{errorMsg}</p>}

                <button
                  type="submit"
                  className="gb-submit"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? <span className="gb-spinner" /> : "Sign Guestbook ✍️"}
                </button>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      className="gb-success"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <HiCheckCircle className="gb-success-icon" />
                      Thanks for signing!
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>

          <motion.div
            className="gb-right"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="gb-card gb-feed-card">
              <div className="gb-card-head">
                <div className="gb-card-icon"><HiUsers /></div>
                <span className="gb-card-title">Recent Messages</span>
                {entries.length > 0 && (
                  <span className="gb-count-badge">{entries.length}</span>
                )}
              </div>

              {entries.length === 0 ? (
                <div className="gb-empty">
                  <span className="gb-empty-emoji">✍️</span>
                  <p>Be the first to sign!</p>
                </div>
              ) : (
                <div className="gb-entries">
                  <AnimatePresence>
                    {entries.map((entry, i) => (
                      <motion.div
                        key={entry.id}
                        className="gb-entry"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: i * 0.05 }}
                      >
                        <div
                          className="gb-avatar"
                          style={{ background: avatarColor(entry.name) }}
                        >
                          {getInitials(entry.name)}
                        </div>
                        <div className="gb-entry-body">
                          <div className="gb-entry-meta">
                            <span className="gb-entry-name">{entry.name}</span>
                            <span className="gb-entry-time">{timeAgo(entry.created_at)}</span>
                          </div>
                          <p className="gb-entry-msg">{entry.message}</p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;
