import React from "react";
import { BsTrash } from "react-icons/bs";

import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import "./BlogsData.css";
import { db, auth } from "./firebase-config";
import moment from "moment";

const BlogsData = ({ isAuth }) => {
  // blogs home render
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);

      setPostList(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getPosts();
  });

  // delete blog functionality
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    alert("You chose to Delete the Post :)");
  };

  //read more
  function openMore() {
    console.log("pressed");
    window.location.pathname = "/posts/post.title";
  }

  return (
    <div className="blogsHome">
      {postLists.map((post, index) => {
        return (
          <div key={index} className="blogsWrapper">
            <div className="blogBox">
              <div className="blogBox__image">
                <img src="https://picsum.photos/280/160" alt="" />
              </div>
              <div className="blogBox__margin">
                <div className="blogBox__blog">
                  <h2 className="title">{post.title}</h2>
                  <div className="bio">
                    <img src={post.author.profile} alt="user profile" />
                    <div className="bio__text-div">
                      <p className="bio__name"> @{post.author.name}</p>
                      <p className="bio__date">
                        {moment(post.author.date).format("MMM D, YYYY")}
                      </p>
                    </div>
                  </div>
                  <p className="blog__content">
                    {post.postText.substring(0, 150)} .....
                  </p>
                </div>
                <div className="hashtag">
                  <div>{post.hashtag}</div>
                </div>
                <div className="bottom__card-buttons">
                  {isAuth && post.author.id === auth.currentUser.uid && (
                    <button
                      className="deleteIcon"
                      onClick={() => {
                        deletePost(post.id);
                      }}
                    >
                      <BsTrash />
                    </button>
                  )}
                  <button onClick={openMore} className="readMoreBtn">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogsData;
