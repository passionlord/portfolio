import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Layout from "./components/Layout/Layout";
import Blogs from "./pages/Blogs/Blogs";
import CreatePost from "./pages/Blogs/CreatePost";
import Login from "./pages/Blogs/Login";
import Projects from "./pages/Projects/Projects";
import ReadMore1 from "./pages/Projects/ReadMore/ReadMore1";
import ReadMore2 from "./pages/Projects/ReadMore/ReadMore2";
import ReadMore3 from "./pages/Projects/ReadMore/ReadMore3";
import ReadMore4 from "./pages/Projects/ReadMore/ReadMore4";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

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
        <Route path="/Login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/readMore1" element={<ReadMore1 />} />
        <Route path="/readMore2" element={<ReadMore2 />} />
        <Route path="/readMore3" element={<ReadMore3 />} />
        <Route path="/readMore4" element={<ReadMore4 />} />
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
