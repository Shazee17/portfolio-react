import { FaReact, FaNodeJs, FaDatabase, FaDiscord, FaGithub } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiPrisma } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

import issueTracker1 from "../../assets/Issue Tracker/1.png";
import issueTracker2 from "../../assets/Issue Tracker/2.png";
import issueTracker3 from "../../assets/Issue Tracker/3.png";

import spotibot1 from "../../assets/Spotibot/1.png";
import spotibot2 from "../../assets/Spotibot/2.png";
import spotibot3 from "../../assets/Spotibot/3.png";
import spotibot4 from "../../assets/Spotibot/4.png";
import spotibot5 from "../../assets/Spotibot/5.png";
import spotibot6 from "../../assets/Spotibot/6.png";


export const projectData = [
  {
    name: "Issue Tracker",
    images: [issueTracker1, issueTracker2, issueTracker3],
    details: [
      "This application helps you efficiently manage and track project issues.",
      "The dashboard provides an overview of issue statuses, including open, in-progress, and closed issues. It also features a bar chart for visual representation and a list of the latest issues.",
      "The issues page allows users to browse, filter, and sort issues, view detailed information, and assign tasks to team members.",
      "For authentication, the application supports secure Google login."
    ],
    technologies: [
      { name: "Next.js", icon: RiNextjsFill },
      { name: "Typescript", icon: SiTypescript },
      { name: "Tailwind", icon: RiTailwindCssFill },
      { name: "mySQL", icon: GrMysql },
      { name: "Prisma", icon: SiPrisma },
    ],

    links: [
      { name: "GitHub", url: "https://github.com/Shazee17/issue-tracker-nextjs", icon: FaGithub },
    ],
  },


  {
    name: "Spotibot - A discord music recommendation bot",
    images: [spotibot1, spotibot2, spotibot3, spotibot4, spotibot5, spotibot6],
    details: [
      "SpotiBot is a simple and interactive Discord bot that provides music recommendations, random songs, and detailed song information using the Spotify Web API.",
      " Users can interact with the bot through various commands to discover music, get song details, or simply listen to random tracks.",
      
    ],
    technologies: [
      { name: "Node.js", icon: FaNodeJs},
      { name: "Discord.js", icon: FaDiscord },
    ],
    links: [
      { name: "Bot Invitation Link", url: "https://top.gg/bot/1303608503797284934", icon: FaDiscord },
      { name: "GitHub", url: "https://github.com/Shazee17/SpotiBot.git", icon: FaGithub },
    ],
  },


  {
    name: "Issue Tracker",
    images: [issueTracker1, issueTracker2, issueTracker3],
    details: [
      "This application helps you efficiently manage and track project issues.",
      "The dashboard provides an overview of issue statuses, including open, in-progress, and closed issues. It also features a bar chart for visual representation and a list of the latest issues.",
      "The issues page allows users to browse, filter, and sort issues, view detailed information, and assign tasks to team members.",
      "For authentication, the application supports secure Google login."
    ],
    technologies: [
      { name: "Next.js", icon: RiNextjsFill },
      { name: "Typescript", icon: SiTypescript },
      { name: "Tailwind", icon: RiTailwindCssFill },
      { name: "mySQL", icon: GrMysql },
      { name: "Prisma", icon: SiPrisma },
    ],

    links: [
      { name: "GitHub", url: "https://github.com/Shazee17/issue-tracker-nextjs", icon: FaGithub },
    ],
  },
];
