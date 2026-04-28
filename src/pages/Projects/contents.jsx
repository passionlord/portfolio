import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./ProjectCard/ProjectCard.css";

const contents = [
  {
    title: "AI-Powered Bill Analytics & Automation",
    category: "data",
    tags: ["SQL Server", "Python", "OpenAI GPT", "Power BI", "SSIS"],
    award: "Change Maker Award 2025",
    projectInfo:
      "Developed an intelligent analytics system that automated the entire bill-generation and rejection-tracking process at Orange Business. The system uses OpenAI GPT API to auto-categorize thousands of billing records, replacing manual Excel processes. Integrated with Power BI for real-time dashboards, reducing bill-rejection cases by 80% and manual processing time by 90%. Built ETL pipelines in SSIS and SQL Server to ingest, transform, and load data from multiple source systems into a unified reporting layer.",
    github: null,
    image: require("../../assets/code.png"),
    btn: (
      <Link className="projectDiv__details-link" to="/readMore1">
        ReadMore
        <HiOutlineArrowNarrowRight className="arrowIcon" fontSize="40" />
      </Link>
    ),
  },
  {
    title: "Azure OpenAI Chatbot with RAG",
    category: "ai",
    tags: ["Azure OpenAI", "RAG", "Python", "React.js", "Node.js"],
    award: "Flare Award 2025 – Employee of the Semester",
    projectInfo:
      "Built an Azure OpenAI-powered conversational chatbot integrated with a dashboard hub containing 240+ Power BI dashboards. Implemented Retrieval Augmented Generation (RAG) to let users query dashboard metadata using natural language, reducing manual search time significantly. The chatbot indexes all dashboard descriptions and KPIs, then retrieves contextually relevant results before passing them to GPT for a natural response. Deployed on Azure and integrated with an internal React web portal for seamless user experience.",
    github: null,
    image: require("../../assets/code.png"),
    btn: (
      <Link className="projectDiv__details-link" to="/readMore2">
        ReadMore
        <HiOutlineArrowNarrowRight className="arrowIcon" fontSize="40" />
      </Link>
    ),
  },
  {
    title: "Secure Financial Web Application",
    category: "web",
    tags: ["React.js", "Node.js", "PostgreSQL", "REST API", "JavaScript"],
    award: "Change Maker Award 2024",
    projectInfo:
      "Designed and built a secure internal web application for financial data management at Orange Business. The application replaced manual spreadsheet-based calculations with an automated, role-based web platform. Features include user authentication, encrypted data storage, automated financial calculations, audit logging, and report generation. Built with React.js on the frontend and Node.js + PostgreSQL on the backend, following secure coding practices to protect sensitive financial data. Received the Change Maker Award for measurable business impact.",
    github: null,
    image: require("../../assets/projecthero.png"),
    btn: (
      <Link className="projectDiv__details-link" to="/readMore3">
        ReadMore
        <HiOutlineArrowNarrowRight className="arrowIcon" fontSize="40" />
      </Link>
    ),
  },
  {
    title: "Blockchain Voting System",
    category: "blockchain",
    tags: ["React.js", "Hyperledger Fabric", "Node.js", "MongoDB"],
    award: "Final Year Engineering Project",
    projectInfo:
      "Final year engineering project built with a team — a tamper-proof digital voting platform using Hyperledger Fabric blockchain. The system ensures each vote is immutable, transparent, and verifiable without revealing voter identity. My role was to design and develop the complete frontend UI using React.js, designed in Lunacy. The backend and smart contracts were handled by teammates. The platform prevents double voting, maintains a full audit trail on the blockchain, and is resistant to traditional attack vectors due to its decentralized nature.",
    github: "https://github.com/vighnesh-raikar",
    image: require("../../assets/voting.PNG"),
    btn: (
      <Link className="projectDiv__details-link" to="/readMore4">
        ReadMore
        <HiOutlineArrowNarrowRight className="arrowIcon" fontSize="40" />
      </Link>
    ),
  },
  // ── Old / Personal Projects ────────────────────────────────────────────
  {
    title: "Personal Portfolio Website",
    category: "web",
    tags: ["React.js", "HTML", "CSS", "JavaScript", "Netlify"],
    award: null,
    projectInfo:
      "Built my personal portfolio website from scratch using React.js to showcase my skills, work experience, and projects. The website went through multiple redesigns as my skills evolved — starting from a basic HTML/CSS page to a fully animated React SPA with modern UI patterns. Features smooth page transitions, responsive layouts, a blog section powered by Supabase, and deployment via Netlify with CI/CD from GitHub.",
    github: "https://github.com/vighnesh-raikar",
    image: require("../../assets/website.PNG"),
    btn: (
      <Link className="projectDiv__details-link" to="/readMore5">
        ReadMore
        <HiOutlineArrowNarrowRight className="arrowIcon" fontSize="40" />
      </Link>
    ),
  },
  {
    title: "Automatic Car Parking System",
    category: "iot",
    tags: ["Arduino", "Ultrasonic Sensors", "Servo Motors", "C++", "Hardware"],
    award: null,
    projectInfo:
      "Built an automatic car parking prototype using Arduino microcontrollers, ultrasonic sensors, and servo motors. The wheeled robot autonomously detects obstacles, measures available parking space, executes a reverse-park maneuver, and confirms successful parking — all without manual input. The entire hardware was assembled on a custom chassis and programmed in C++. The project demonstrates real-world embedded systems and sensor fusion concepts.",
    github: null,
    image: require("../../assets/car.jpg"),
    btn: (
      <Link className="projectDiv__details-link" to="/readMore6">
        ReadMore
        <HiOutlineArrowNarrowRight className="arrowIcon" fontSize="40" />
      </Link>
    ),
  },
  {
    title: "DC-to-AC Inverter Circuit",
    category: "iot",
    tags: ["Electronics", "Circuit Design", "MOSFET", "Transformer", "PWM"],
    award: null,
    projectInfo:
      "Designed and built a DC-to-AC power inverter circuit as a college electronics project. The circuit converts 12V DC battery input to 230V AC output using MOSFET transistors, a step-up transformer, and a PWM oscillator stage. The project involved full schematic design, component selection, breadboard prototyping, and practical testing. Successfully powered a 25W incandescent bulb from a 12V battery with stable AC output, demonstrating core power electronics principles.",
    github: null,
    image: require("../../assets/inverter.jpg"),
    btn: (
      <Link className="projectDiv__details-link" to="/readMore7">
        ReadMore
        <HiOutlineArrowNarrowRight className="arrowIcon" fontSize="40" />
      </Link>
    ),
  },
];
export default contents;
