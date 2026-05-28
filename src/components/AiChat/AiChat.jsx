import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiPaperAirplane } from "react-icons/hi";
import { GoogleGenAI } from "@google/genai";
import { supabase } from "../../pages/Blogs/supabase-config";
import vighneshImg from "../../assets/vighnesh.png";
import "./AiChat.css";

const GEMINI_KEY = process.env.REACT_APP_GEMINI_API_KEY || "AIzaSyDRXnZaZj6U3ax1ul5kLIpq5Ubcf2eBr88";
const ai = new GoogleGenAI({ apiKey: GEMINI_KEY });

const SYSTEM_PROMPT = `You are an AI assistant on Vighnesh Raikar's portfolio website. Answer questions about Vighnesh in a friendly, concise, and professional manner. Speak as if you represent his portfolio.

About Vighnesh Raikar:
- Full name: Vighnesh Raikar
- Location: Mumbai, India
- Email: raikar7178@gmail.com
- Roles: Business Intelligence Analyst, Data Engineer, AI Solutions Developer, Power BI Specialist, ETL Pipeline Architect
- Experience: 3+ years building data pipelines, ETL workflows, and analytics solutions
- Currently works at Orange Business
- Open to new opportunities

Skills:
- Languages: JavaScript, SQL
- Frontend: React.js, Node.js
- Data & BI: Power BI, SSIS, SQL Server, PostgreSQL
- AI / Cloud: Azure OpenAI, OpenAI GPT, RAG, Gemini API
- Other: Postman, Git

Projects & Awards:
1. AI-Powered Bill Analytics & Automation (Change Maker Award 2025) — automated bill generation and rejection tracking using OpenAI GPT, Power BI dashboards, SSIS/SQL Server ETL pipelines; reduced bill rejections by 80% and manual work by 90%
2. Azure OpenAI Chatbot with RAG (Flare Award 2025 – Employee of the Semester) — conversational chatbot for 240+ Power BI dashboards using Retrieval Augmented Generation and Azure OpenAI
3. Secure Financial Web Application (Change Maker Award 2024) — React.js + Node.js + PostgreSQL internal financial data management platform with role-based access and audit logging
4. Blockchain Voting System (Final Year Engineering Project) — tamper-proof digital voting using Hyperledger Fabric blockchain with React.js frontend

Response rules:
- Be friendly, warm, and concise — keep replies under 120 words unless more detail is explicitly asked for
- Only answer questions about Vighnesh, his portfolio, skills, projects, or experience
- For anything unrelated, politely say you only have info about this portfolio and suggest contacting via email
- Encourage visitors to explore the Projects or About page, or reach out via the contact form`;

const QUICK_CHIPS = [
  "What are your skills?",
  "Tell me about your projects",
  "Are you available for hire?",
  "How can I contact you?",
  "🎯 Match with your JD",
];

const WELCOME = "Hi! I'm Vighnesh's AI assistant 👋 Ask me anything about his skills, projects, or experience.";

export default function AiChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "model", text: WELCOME }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [jdMode, setJdMode] = useState(false);
  const [jdText, setJdText] = useState("");
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const sessionId = useRef(Math.random().toString(36).slice(2));
  const metaRef = useRef(null);

  const getMetadata = async () => {
    if (metaRef.current) return metaRef.current;
    const ua = navigator.userAgent;
    const device = /Mobile|Android|iPhone|iPad/.test(ua) ? "Mobile" : "Desktop";
    const browser = /Edg/.test(ua) ? "Edge" : /Chrome/.test(ua) ? "Chrome" : /Firefox/.test(ua) ? "Firefox" : /Safari/.test(ua) ? "Safari" : "Other";
    const os = /Windows/.test(ua) ? "Windows" : /Mac OS X/.test(ua) ? "macOS" : /Android/.test(ua) ? "Android" : /iPhone|iPad/.test(ua) ? "iOS" : /Linux/.test(ua) ? "Linux" : "Other";
    let geo = {};
    try {
      const r = await fetch("https://ipapi.co/json/");
      geo = await r.json();
    } catch (_) {}
    metaRef.current = {
      ip_address: geo.ip || null,
      country: geo.country_name || null,
      city: geo.city || null,
      region: geo.region || null,
      timezone: geo.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
      device_type: device,
      browser,
      os,
      screen_width: window.screen.width,
      screen_height: window.screen.height,
      language: navigator.language,
      referrer: document.referrer || null,
      user_agent: ua,
    };
    return metaRef.current;
  };

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [messages, open]);

  const send = async (text, displayText = null, maxTokens = 400, useStream = true) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setMessages((prev) => [...prev, { role: "user", text: displayText || trimmed }]);
    setInput("");
    setLoading(true);

    const history = messages
      .slice(1)
      .map((m) => ({
        role: m.role === "model" ? "model" : "user",
        parts: [{ text: m.text }],
      }));
    history.push({ role: "user", parts: [{ text: trimmed }] });

    try {
      const config = {
        systemInstruction: SYSTEM_PROMPT,
        maxOutputTokens: maxTokens,
        temperature: 0.7,
      };

      if (useStream) {
        const stream = await ai.models.generateContentStream({
          model: "gemini-3.5-flash",
          contents: history,
          config,
        });

        let fullText = "";
        let isFirst = true;
        for await (const chunk of stream) {
          fullText += chunk.text || "";
          const snapshot = fullText;
          if (isFirst) {
            setMessages((prev) => [...prev, { role: "model", text: snapshot }]);
            isFirst = false;
          } else {
            setMessages((prev) => {
              const updated = [...prev];
              updated[updated.length - 1] = { role: "model", text: snapshot };
              return updated;
            });
          }
        }

        try {
          const meta = await getMetadata();
          await supabase.from("chat_logs").insert({ session_id: sessionId.current, user_message: trimmed, ai_response: fullText, ...meta });
        } catch (_) {}
      } else {
        // Non-streaming: wait for full response (JD analysis)
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: history,
          config,
        });
        const reply = response.text || "Sorry, I couldn't get a response. Please try again.";
        setMessages((prev) => [...prev, { role: "model", text: reply }]);

        try {
          const meta = await getMetadata();
          await supabase.from("chat_logs").insert({ session_id: sessionId.current, user_message: trimmed, ai_response: reply, ...meta });
        } catch (_) {}
      }
    } catch (err) {
      const msg = err?.message || "";
      const errText = msg.includes("429") || msg.toLowerCase().includes("quota")
        ? "I'm getting too many requests right now. Please wait a moment and try again 🙏"
        : "Hmm, something went wrong. Please try again in a moment.";
      setMessages((prev) => [...prev, { role: "model", text: errText }]);
    } finally {
      setLoading(false);
    }
  };

  const analyzeJD = async () => {
    const jd = jdText.trim();
    if (!jd || jd.length < 80 || loading) return;
    setJdMode(false);
    setJdText("");
    const prompt = `You are analyzing a job description to assess fit for Vighnesh Raikar. Write a SHORT Role Fit Report — maximum 120 words total. Use exactly this format:

🎯 ROLE FIT: [X]%

✅ Top Matches:
• [match 1]
• [match 2]
• [match 3 — max 3 bullets]

📋 Verdict:
[1-2 sentences only]

Be specific, punchy, and professional. No extra text outside this format.

Job Description:
${jd}`;
    await send(prompt, `🎯 Analyzing role fit for: "${jd.slice(0, 55)}${jd.length > 55 ? "…" : ""}"`, 300, false);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  return (
    <>
      {/* Floating action button */}
      <motion.button
        className="ai-fab"
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.93 }}
        aria-label={open ? "Close AI chat" : "Open AI chat"}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -80, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 80, opacity: 0 }}
              transition={{ duration: 0.17 }}
            >
              <HiX size={22} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 80, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -80, opacity: 0 }}
              transition={{ duration: 0.17 }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l1.8 5.5H20l-4.7 3.4 1.8 5.5L12 13l-5.1 3.4 1.8-5.5L4 7.5h6.2z" />
                <circle cx="19" cy="5" r="2" opacity="0.7" />
                <circle cx="5" cy="18" r="1.3" opacity="0.5" />
              </svg>
            </motion.span>
          )}
        </AnimatePresence>
        {!open && <span className="ai-fab-ping" aria-hidden="true" />}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="ai-panel"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            role="dialog"
            aria-label="AI portfolio assistant"
          >
            {/* Header */}
            <div className="ai-panel-header">
              <div className="ai-panel-header-left">
                <div className="ai-avatar">
                  <img src={vighneshImg} alt="Vighnesh" />
                </div>
                <div>
                  <p className="ai-panel-title">Ask Vighnesh</p>
                  <p className="ai-panel-subtitle">
                    <span className="ai-online-dot" aria-hidden="true" />
                    Ask me anything
                  </p>
                </div>
              </div>
              <button className="ai-panel-close" onClick={() => setOpen(false)} aria-label="Close chat">
                <HiX size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="ai-messages">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  className={`ai-msg ai-msg--${m.role}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <p>{m.text}</p>
                </motion.div>
              ))}

              {/* Typing dots — only while waiting for first streaming chunk */}
              {loading && messages[messages.length - 1]?.role === "user" && (
                <div className="ai-msg ai-msg--model">
                  <span className="ai-typing">
                    <span /><span /><span />
                  </span>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick chips — show only early in conversation */}
            {messages.length <= 2 && !loading && !jdMode && (
              <div className="ai-chips">
                {QUICK_CHIPS.map((chip) => (
                  <button
                    key={chip}
                    className={`ai-chip${chip.startsWith("🎯") ? " ai-chip--jd" : ""}`}
                    onClick={() => chip.startsWith("🎯") ? setJdMode(true) : send(chip)}
                    disabled={loading}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            )}

            {/* JD Mode input */}
            <AnimatePresence>
              {jdMode && (
                <motion.div
                  className="ai-jd-mode"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="ai-jd-header">
                    <span>🎯 Paste a job description</span>
                    <button className="ai-jd-cancel" onClick={() => { setJdMode(false); setJdText(""); }}>✕ Cancel</button>
                  </div>
                  <textarea
                    className="ai-jd-textarea"
                    value={jdText}
                    onChange={(e) => setJdText(e.target.value)}
                    placeholder="Paste the full job description here… (min 80 characters)"
                    rows={4}
                    autoFocus
                  />
                  <motion.button
                    className="ai-jd-analyze-btn"
                    onClick={analyzeJD}
                    disabled={loading || jdText.trim().length < 80}
                    whileTap={{ scale: 0.97 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    ✨ Analyze Role Fit
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Normal input row */}
            {!jdMode && (
            <form
              className="ai-input-row"
              onSubmit={(e) => { e.preventDefault(); send(input); }}
            >
              <input
                ref={inputRef}
                className="ai-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask me anything…"
                disabled={loading}
                autoComplete="off"
                maxLength={500}
              />
              <motion.button
                type="submit"
                className="ai-send"
                disabled={loading || !input.trim()}
                whileTap={{ scale: 0.9 }}
                aria-label="Send message"
              >
                <HiPaperAirplane size={16} />
              </motion.button>
            </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
