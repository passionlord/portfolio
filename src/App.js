import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Layout from "./components/Layout/Layout";
import Blogs from "./pages/Blogs/Blogs";
import CreatePost from "./pages/Blogs/CreatePost";
import EditPost from "./pages/Blogs/EditPost";
import BlogPost from "./pages/Blogs/BlogPost";
import Login from "./pages/Blogs/Login";
import ForgotPassword from "./pages/Blogs/ForgotPassword";
import Projects from "./pages/Projects/Projects";
import ProjectDetail from "./pages/Projects/ProjectDetail";
import ReadMore1 from "./pages/Projects/ReadMore/ReadMore1";
import ReadMore2 from "./pages/Projects/ReadMore/ReadMore2";
import ReadMore3 from "./pages/Projects/ReadMore/ReadMore3";
import ReadMore4 from "./pages/Projects/ReadMore/ReadMore4";
import ReadMore5 from "./pages/Projects/ReadMore/ReadMore5";
import ReadMore6 from "./pages/Projects/ReadMore/ReadMore6";
import ReadMore7 from "./pages/Projects/ReadMore/ReadMore7";
import { supabase } from "./pages/Blogs/supabase-config";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuth(!!session);
    };

    checkUser();

    // Listen for auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuth(!!session);
    });

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route
          path="/blogs"
          element={<Blogs isAuth={isAuth} setIsAuth={setIsAuth} />}
        />
        <Route path="/CreatePost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/EditPost/:id" element={<EditPost isAuth={isAuth} />} />
        <Route path="/post/:id" element={<BlogPost />} />
        <Route path="/Login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/readMore1" element={<ReadMore1 />} />
        <Route path="/readMore2" element={<ReadMore2 />} />
        <Route path="/readMore3" element={<ReadMore3 />} />
        <Route path="/readMore4" element={<ReadMore4 />} />
        <Route path="/readMore5" element={<ReadMore5 />} />
        <Route path="/readMore6" element={<ReadMore6 />} />
        <Route path="/readMore7" element={<ReadMore7 />} />
      </Routes>
    </Layout>
  );
}

export default App;

// fonts
// font-family: 'Berkshire Swash', cursive;
// font-family: 'Montserrat', sans-serif;
// font-family: 'Raleway', sans-serif;
// font-family: 'McLaren', cursive;
// font-family: 'Nunito', sans-serif; (300, 400)
