import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { supabase } from "./supabase-config";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + '/reset-password',
      });

      if (error) {
        console.error("Error sending reset email:", error);
        alert("Error: " + error.message);
      } else {
        setSent(true);
        alert("Password reset email sent! Please check your inbox (and spam folder).");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending reset email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>Reset Password</h1>
        <p className="login-subtitle">
          Enter your email to receive a password reset link
        </p>

        {!sent ? (
          <form onSubmit={handleResetPassword} className="login-form">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.1rem', color: '#4CAF50' }}>
              ✅ Reset link sent to {email}
            </p>
          </div>
        )}

        <p className="toggle-auth">
          Remember your password?{" "}
          <span 
            onClick={() => navigate("/login")}
            className="toggle-link"
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
