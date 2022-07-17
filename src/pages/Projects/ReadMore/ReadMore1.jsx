import React, { useState } from "react";
import contents from "../contents";
import "./ReadMoreAll.css";
import { BsGithub } from "react-icons/bs";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ReadMore1 = (props) => {
  // hover functionality
  // const [isShown, setIsShown] = useState(false);
  // console.log(isShown);

  return (
    <div className="personalWrapper">
      <div className="personalWrapper__title">
        <h1 className="personalWrapper__title-h1">{contents[0].title}</h1>
        <span>PROJECTS</span>
      </div>

      <div className="personalWrapper__image">
        <img src={contents[0].image} alt="" />
      </div>

      <button className="githubLink">
        Visit Github <BsGithub className="githubIcon" fontSize="20" />
      </button>

      <p className="personalWrapper__para">{contents[0].projectInfo}</p>

      <h1>Technologies Used</h1>
      <div className="personalWrapper__tags">
        <span className="tags">REACT.JS</span>
        <span className="tags">HTML</span>
        <span className="tags">CSS</span>
        <span className="tags">FIREBASE</span>
        <span className="tags">GITHUB</span>
      </div>

      {/* design styles section */}
      <h1 className="style-h1">Design System & Style Guide</h1>
      <div className="personalWrapper__style">
        <table>
          <tr>
            <th>Logo</th>
            <th>Logo Font</th>
          </tr>
          <tr>
            <td className="style__detail">Vighnesh</td>
            <td className="style__detail">Berkshire Swash</td>
          </tr>
        </table>

        <h4>Color System</h4>
        <div className="colorDiv">
          <p>Accent</p>
          <div className="clickToCopy">
            {/* {isShown && <span>click to copy</span>} */}
            <CopyToClipboard
              className="copy"
              text="#000"
              onCopy={() => alert("Copied")}
              // onMouseEnter={() => setIsShown(true)}
              // onMouseLeave={() => setIsShown(false)}
            >
              <span>#000</span>
            </CopyToClipboard>
            <CopyToClipboard
              className="copy"
              text="#259E8C"
              onCopy={() => alert("Copied")}
            >
              <span>#259E8C</span>
            </CopyToClipboard>
            <CopyToClipboard
              className="copy"
              text="#846DF6"
              onCopy={() => alert("Copied")}
            >
              <span>#846DF6</span>
            </CopyToClipboard>
            <CopyToClipboard
              className="copy"
              text="#F84040"
              onCopy={() => alert("Copied")}
            >
              <span>#F84040</span>
            </CopyToClipboard>
            <CopyToClipboard
              className="copy"
              text="#149418"
              onCopy={() => alert("Copied")}
            >
              <span>#149418</span>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadMore1;
