import { FaGlobe, FaReact, FaDatabase, FaCode, FaServer} from "react-icons/fa";
import { SiAntdesign, SiNodedotjs, SiExpress, SiMongodb, SiTestinglibrary  } from "react-icons/si";

// Features Data
export const featuresData = [
  {
    id: 1,
    icon: <FaCode/>,
    title: "Frontend",
    des: "Crafting captivating user interfaces with React.js, blending frontend expertise and design finesse for engaging digital experiences.",
  },
  {
    id: 2,
    icon: <FaServer />,
    title: "Backend",
    des: "Building scalable backend solutions with Node.js and Express.js, seamlessly integrating complex data processing for optimal performance and reliability.",
  },
  {
    id: 3,
    icon: <FaGlobe />,
    title: "Deployment",
    des: "Efficiently deploying applications for seamless performance and reliability.",
  },
  {
    id: 4,
    icon: <FaDatabase />,
    title: "Database",
    des: "Building robust databases with MongoDB and MySQL, ensuring seamless scalability and reliability.",
  },
  {
    id: 5,
    icon: <SiAntdesign />,
    title: "UX Design",
    des: "Crafting captivating UI/UX designs that engage and delight users with creativity and user-centric principles.",
  },
  {
    id: 6,
    icon: <SiTestinglibrary />,
    title: "Unit Testing",
    des: "Conducting vital unit testing to ensure robust code quality and reliability.",
  },
];

//Skills Data
export const skillsData = [
  {
    id: 1,
    icon: <FaReact  size={70}/>,
    title: "React JS",
    des: "",
  },
  {
    id: 2,
    icon: <SiNodedotjs  size={70}/>,
    title: "Node JS",
    des: "",
  },
  {
    id: 3,
    icon: <SiExpress  size={70}/>,
    title: "Express JS",
    des: "",
  },
  {
    id: 4,
    icon: <SiMongodb  size={70}/>,
    title: "Mongo DB",
    des: "",
  },
]
