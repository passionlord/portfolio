import React from "react";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";
import { auth, provider } from "./firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/blogs");
    });
  };

  return (
    <div className="login">
      <p>Sign in with Google to Start Bloggung </p>
      <button onClick={signInWithGoogle}>
        Sign In
        <FcGoogle className="googleIcon" />
      </button>
    </div>
  );
};

export default Login;
