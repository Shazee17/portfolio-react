import { FaReact, FaNodeJs, FaDatabase, FaDiscord, FaGithub, FaJs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiPrisma } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiMongodb } from "react-icons/di";
import { PiFileCssLight } from "react-icons/pi";


import issueTracker1 from "../../assets/Issue Tracker/1.png";
import issueTracker2 from "../../assets/Issue Tracker/2.png";
import issueTracker3 from "../../assets/Issue Tracker/3.png";

import spotibot1 from "../../assets/Spotibot/1.png";
import spotibot2 from "../../assets/Spotibot/2.png";
import spotibot3 from "../../assets/Spotibot/3.png";
import spotibot4 from "../../assets/Spotibot/4.png";
import spotibot5 from "../../assets/Spotibot/5.png";
import spotibot6 from "../../assets/Spotibot/6.png";

import campusSwipe1 from "../../assets/Admin Portal/1.png";
import campusSwipe2 from "../../assets/Admin Portal/2.png";
import campusSwipe3 from "../../assets/Admin Portal/3.png";
import campusSwipe4 from "../../assets/Admin Portal/4.png";
import campusSwipe5 from "../../assets/Admin Portal/5.png";
import campusSwipe6 from "../../assets/Admin Portal/6.png";
import campusSwipe7 from "../../assets/Admin Portal/7.png";
import campusSwipe8 from "../../assets/Admin Portal/8.png";
import campusSwipe9 from "../../assets/Admin Portal/9.png";
import campusSwipe10 from "../../assets/Admin Portal/10.png";
import campusSwipe11 from "../../assets/Admin Portal/11.png";



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
    name: "Admin Portal - CampusSwipe FYP",
    images: [
      campusSwipe1,
      campusSwipe2,
      campusSwipe3,
      campusSwipe4,
      campusSwipe5,
      campusSwipe6,
      campusSwipe7,
      campusSwipe8,
      campusSwipe9,
      campusSwipe10,
      campusSwipe11
    ],
    details: [
      "Developed the admin dashboard for 'CampusSwipe: RFID-Powered Access & Travel Integration' as part of my Final Year Project.",
      "Streamlines management of users, devices, transactions, and subscriptions.",
      "Features include team and user management, device integration, and transaction monitoring with filters.",
      "Supports subscription handling, user and device registration, and generating statistical reports with visual insights."
    ],
    
    technologies: [
      { name: "React", icon: FaReact },
      { name: "JavaScript", icon: FaJs },
      { name: "Material UI", icon: PiFileCssLight },
      { name: "Node.js", icon: FaNodeJs},
      { name: "MongoDB", icon: DiMongodb },
    ],

    links: [
      { name: "GitHub", url: "https://github.com/Shazee17/Admin-dashboard-CampusSwipe-fyp.git", icon: FaGithub },
    ],
  },
];
