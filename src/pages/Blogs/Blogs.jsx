import { Link } from "react-router-dom";
import "./Blogs.css";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase-config";
import BlogsData from "./BlogsData";

const Blogs = ({ isAuth, setIsAuth }) => {
  let navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  return (
    <div className="blog__section">
      <div className="blog__section-title">
        <h1 className="title-h1">Blogs</h1>
        <p className="bio-p">
          A Blog website Designed & coded with react by vighnesh
        </p>

        <div className="blog__section-buttons">
          <button className="viewworkButton">View Work</button>

          <div
            className="btn-group"
            role="group"
            aria-label="Button group with nested dropdown"
          >
            <div className="btn-group" role="group">
              <button
                id="btnGroupDrop1"
                type="button"
                className="btn dropdownButton dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Post Your Blog
              </button>
              <ul className="dropdown-menu " aria-labelledby="btnGroupDrop1">
                <li>
                  {!isAuth ? (
                    <Link className="dropdown-item" to="/login">
                      Login
                    </Link>
                  ) : (
                    <>
                      <Link className="dropdown-item" to="/createpost">
                        Create Post
                      </Link>
                      <button className="logoutButton" onClick={signUserOut}>
                        Sign Out
                      </button>
                    </>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <BlogsData isAuth={isAuth} />
    </div>
  );
};

export default Blogs;
