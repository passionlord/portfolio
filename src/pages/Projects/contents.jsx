import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./ProjectCard/ProjectCard.css";

const contents = [
  {
    title: "Personal Website",
    projectInfo:
      "This is a website which is basically my own personal portfolio made using several Technologies such as React.js , FireBase and Styled using CSS. The overall UI Considering the matter of fact of styling is done with the help of a FrontEnd javascript Framework called React.js , this website contains several sections such as project section , Blog Section , AboutMe and a Home page",
    image: require("../../assets/website.PNG"),
    btn: (
      <Link className="projectDiv__details-link" to="/readMore1">
        ReadMore
        <HiOutlineArrowNarrowRight className="arrowIcon" fontSize="40" />
      </Link>
    ),
  },
  {
    title: "Blockchain Voting System UI",
    projectInfo:
      "This website is a Blockchain Website which Functionality is to provide safe Voting Among people without getting afraid of attacking or data leak , typically this website is not Hackable , Because it uses Hyper Leger Fabric technology. The website was my Final Year Project with my Team in which my Role was to Design and Code the User Interface of it, I have used React.js as a FrontEnd language , and Designed it on the Lunacy Software which is a UI designing Software. For the Database part my team has used the MongoDB database and Node.js. My fellow team members Contributed By doing the main Functionality of the Website which is the Backend Section. ....Viewers can Just Check the UI code of the website in the Github link above.",
    image: require("../../assets/voting.PNG"),
    btn: (
      <Link className="projectDiv__details-link" to="/readMore2">
        ReadMore
        <HiOutlineArrowNarrowRight className="arrowIcon" fontSize="40" />
      </Link>
    ),
  },
  {
    title: "Automatic car Parking",
    projectInfo:
      "This is a website which is basically my own personal portfolio made using several Technologies such as React.js , FireBase and Styled using CSS. The overall UI Considering the matter of fact of styling is done with the help of a FrontEnd javascript Framework called React.js , this website contains several sections such as project section , Blog Section , AboutMe and a Home page",
    image: require("../../assets/car.jpg"),
    btn: (
      <Link className="projectDiv__details-link" to="/readMore3">
        ReadMore
        <HiOutlineArrowNarrowRight className="arrowIcon" fontSize="40" />
      </Link>
    ),
  },
  {
    title: "Home Inverter",
    projectInfo:
      "This is a website which is basically my own personal portfolio made using several Technologies such as React.js , FireBase and Styled using CSS. The overall UI Considering the matter of fact of styling is done with the help of a FrontEnd javascript Framework called React.js , this website contains several sections such as project section , Blog Section , AboutMe and a Home page",
    image: require("../../assets/inverter.jpg"),
    btn: (
      <Link className="projectDiv__details-link" to="/readMore4">
        ReadMore
        <HiOutlineArrowNarrowRight className="arrowIcon" fontSize="40" />
      </Link>
    ),
  },
];

export default contents;
