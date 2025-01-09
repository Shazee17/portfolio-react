import { FaReact, FaNodeJs, FaDatabase, FaDiscord } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiPrisma } from "react-icons/si";
import { GrMysql } from "react-icons/gr";



import issueTracker1 from "../../assets/Issue Tracker/1.png"
import issueTracker2 from "../../assets/Issue Tracker/2.png";
import issueTracker3 from "../../assets/Issue Tracker/3.png";

export const projectData = [
  {
    name: "Issue Tracker",
    images: [issueTracker1, issueTracker2, issueTracker3],
    details: [
      "An admin dashboard for managing project issues.",
      "Features include browsing, filtering, and assigning issues.",
      "Supports Google login for users."
    ],
    technologies: [
      { name: "Next.js", icon: RiNextjsFill },
      { name: "Typescript", icon: SiTypescript },
      { name: "Tailwind", icon: RiTailwindCssFill },
      { name: "mySQL", icon: GrMysql },
      { name: "Prisma", icon: SiPrisma },
    ],
  },

  {
    name: "Issue Tracker",
    images: [issueTracker1, issueTracker2, issueTracker3],
    details: [
      "An admin dashboard for managing project issues.",
      "Features include browsing, filtering, and assigning issues.",
      "Supports Google login for users."
    ],
    technologies: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Discord.js", icon: FaDiscord },
    ],
  },

  {
    name: "Issue Tracker",
    images: [issueTracker1, issueTracker2, issueTracker3],
    details: [
      "An admin dashboard for managing project issues.",
      "Features include browsing, filtering, and assigning issues.",
      "Supports Google login for users."
    ],
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "MongoDB", icon: FaDatabase },
    ],
  }
  // Add more projects like this
];
