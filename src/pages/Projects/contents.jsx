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
      "This was my College Final Year Project , This website is a Blockchain Website which Functionality is to provide safe Voting Among people without getting afraid of attacking or data leak , typically this website is not Hackable , Because it uses Hyper Leger Fabric technology. The website was my Final Year Project with my Team in which my Role was to Design and Code the User Interface of it, I have used React.js as a FrontEnd language , and Designed it on the Lunacy Software which is a UI designing Software. For the Database part my team has used the MongoDB database and Node.js. My fellow team members Contributed By doing the main Functionality of the Website which is the Backend Section. ....Viewers can Just Check the UI code of the website in the Github link above.",
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
      "This Project was My 2nd year Academic Engineering project , So this is a project which is basically called as Autonomous Parellel car Parking , Which Technically means the car itself will determine the avaliable parking space and park itself between two cars without crashing into anything the space is calculated with the help of 4 ultrasonic sensors which are positioned Accordingly in the front and the Rear side . There is also an infrared Sensor which is placed beside the wheel to measure the speed of the motor and gets recorded in the system , Arduino is used in this system and also a motor driver is used . ",
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
