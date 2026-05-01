import React, { useState } from "react";
import "./Login.css";
import { supabase } from "./supabase-config";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  // Email/Password Sign Up
  const handleSignUp = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            full_name: fullName || email.split('@')[0],
          }
        }
      });

      if (error) {
        console.error("Error signing up:", error);
        alert("Error creating account: " + error.message);
      } else {
        alert("Account created successfully! Please check your email to verify your account (check spam folder too).");
        setIsSignUp(false);
        setEmail("");
        setPassword("");
        setFullName("");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error creating account");
    } finally {
      setLoading(false);
    }
  };

  // Email/Password Sign In
  const handleSignIn = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        console.error("Error signing in:", error);
        alert("Error signing in: " + error.message);
      } else {
        setIsAuth(true);
        navigate("/blogs");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error signing in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>{isSignUp ? "Create Account" : "Sign In"}</h1>
        <p className="login-subtitle">
          {isSignUp ? "Join us to start blogging" : "Sign in to start blogging"}
        </p>

        {/* Email/Password Form */}
        <form onSubmit={isSignUp ? handleSignUp : handleSignIn} className="login-form">
          {isSignUp && (
            <div className="input-group">
              <label htmlFor="fullName">Full Name (Optional)</label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter your name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={loading}
              />
            </div>
          )}

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

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password (min 6 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              disabled={loading}
            />
          </div>

          <button 
            type="submit" 
            className="submit-btn"
            disabled={loading}
          >
            {loading ? "Please wait..." : (isSignUp ? "Create Account" : "Sign In")}
          </button>

          {!isSignUp && (
            <p className="forgot-password">
              <span 
                onClick={() => navigate("/forgot-password")}
                className="toggle-link"
              >
                Forgot Password?
              </span>
            </p>
          )}
        </form>

        {/* Toggle Sign Up/Sign In */}
        <p className="auth-toggle">
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <button 
            type="button"
            onClick={() => {
              setIsSignUp(!isSignUp);
              setEmail("");
              setPassword("");
              setFullName("");
            }}
          >
            {isSignUp ? "Sign In" : "Create Account"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
