import React, { useState } from "react";
import "./CreatePost.css";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "./firebase-config";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [hashtag, setHashtag] = useState("");

  const postCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  //
  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      postText,
      hashtag,

      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
        profile: auth.currentUser.photoURL,
      },
    });
    navigate("/blogs");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  //timestamp
  // const postTime = Date.now(); // This would be the timestamp you want to format
  // console.log(
  //   new Intl.DateTimeFormat("en-US", {
  //     year: "numeric",
  //     month: "long",
  //     day: "2-digit",
  //   }).format(timestamp)
  // );

  return (
    <div className="createPostPage">
      <div className="cpHero">
        <h1 className="cpHeading">Create awesome Posts</h1>
        <div className="gif">
          <iframe
            src="https://giphy.com/embed/Ll88bcCbnV5U5UGsW7"
            width="380"
            height="380"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="cpContainer">
        <div className="inputGp">
          <label>Title</label>
          <input
            className="cpInput"
            placeholder="enter content title"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label>post content</label>
          <textarea
            placeholder="enter content"
            rows="7"
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label>hashtag for your post</label>
          <input
            className="cpInput"
            placeholder="enter hashtag"
            onChange={(event) => {
              setHashtag(event.target.value);
            }}
          />
        </div>
        <button className="cpButton" onClick={createPost}>
          Submit post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
