import react from "../assets/react.png";
import redux from "../assets/redux.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import tailwind from "../assets/tailwindcss.svg";
import jwt from "../assets/jwt.svg";
import socketio from "../assets/socketio.svg";
import chat from "../assets/chat.svg";
import blogging from "../assets/blogging.svg";
import javascript from "../assets/javascript.png";
import git from "../assets/git.png";
import youtube from "../assets/youtube.svg";
import rapid from "../assets/rapidapi.svg";
import java from "../assets/java.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import bangmetric from "../assets/bangmetric-logo.jpeg";
import postman from "../assets/postman.svg";
import github from "../assets/github.png";
import zustand from "../assets/zustand.png";
import postgres from "../assets/postgres.png";
import vscode from "../assets/vscode.svg";
import aem from "../assets/aem.jpeg";

import Invictus from "../assets/invictus.png";

export const nfcInfo = [
  {
    key: 3,
    text: "Collaborated closely with team members to ensure project delivery within expected timelines",
  },
  {
    key: 4,
    text: "Contributed to the development of new features and functionalities",
  },
  {
    key: 5,
    text: "Implemented responsive design principles, ensuring optimal user experiences across various devices and screen sizes.",
  },
  {
    key: 6,

    text: "Engaged in code reviews, providing constructive feedback and adhering to best practices to maintain code quality and consistency.",
  },
  {
    key: 7,

    text: "Participated in user testing and feedback sessions, refining features based on user input and contributing to a user-centric development approach.",
  },
  {
    key: 8,
    text: "Gained valuable hands-on experience with relevant technologies and received positive feedback for my work and learning ability.",
  },
];
export const elitcelerInfo = [
  {
    key: 0,
    text: "Designed and implemented user-friendly UI enhancements for ServiceNow applications, improving user experience and adoption rates among end users.",
  },
  {
    key: 1,
    text: "Diagnosed and resolved technical issues within ServiceNow instances, including debugging scripts and investigating performance bottlenecks to ensure system stability and reliability.",
  },
  {
    key: 2,
    text: "Collaborated with the integration team to develop and implement ServiceNow integrations with third-party systems, ensuring seamless data flow and process synchronization.",
  },
  {
    key: 3,
    text: " Prepared and delivered presentations and demos to team members, showcasing new ServiceNow features, functionalities, and enhancements developed during the internship.",
  },
  {
    key: 4,
    text: "Configured ServiceNow instances according to client requirements, including creating custom tables, fields, and business rules to optimize workflow efficiency.",
  },
  {
    key: 5,
    text: "Utilized JavaScript and GlideScript to automate routine tasks within ServiceNow, resulting in a increase in team productivity.",
  },
];

export const experiences = [
  {
    id: "1",
    company: "Invictus Data",
    logo: Invictus,
    location: "Bangalore, Karnataka, India",
    role: "Software Engineer",
    duration: "JUNE 2024 - Current",
    description: nfcInfo,
  },
  {
    id: "2",
    company: "BangMetric Limited",
    logo: bangmetric,
    location: "Noida, Utttar-Pradesh, India",
    role: "Technical Intern",
    duration: "February 2024 - May 2024",
    description: elitcelerInfo,
  },
];

export const projects = [
  {
    id: "1",
    name: "Samsung Smartthings",
    coverImage: blogging,
    description: [
      "Samsung Smartthings is an experience website which shows the advance AI features and experiences user will have with Smartthings.",
      "Collaborated with design team to develop Samsung SmartThings experience page, delivering an engaging, user-centered interface.",
      "Implemented UI components with an emphasis on user interaction and visual design, ensuring a smooth and immersive experience.",
    ],
    workedOn: ["Website"],
    technologies: [
      {
        logo: react,
        name: "React.js",
      },
      {
        logo: javascript,
        name: "Javascript",
      },

      {
        logo: aem,
        name: "Adobe Experience Manager",
      },
      {
        logo: tailwind,
        name: "Tailwind",
      },
    ],
    link: "https://www.samsung.com/us/smartthings/experience-smartthings/#/",
  },
  {
    id: "2",
    name: "Real Time Chat App",
    coverImage: chat,
    workedOn: ["Website"],
    description: [
      "Real-time chat: users can send and receive messages in real-time",
      "User authentication: users can sign up, log in, and log out using JWT and socket.io",
      "Authentication && Authorization with JWT",
      "Online user status (Socket.io and React Context)",
      " Global state management with Zustand.",
      " Search functionality.",
      "Error handling both on the server and on the client",
    ],
    technologies: [
      {
        logo: javascript,
        name: "Javascript",
      },
      {
        logo: react,
        name: "React.js",
      },
      {
        logo: tailwind,
        name: "Tailwind CSS",
      },

      {
        logo: node,
        name: "Node.js",
      },
      {
        logo: express,
        name: "Express.js",
      },
      {
        logo: mongodb,
        name: "MongoDB",
      },
      {
        logo: socketio,
        name: "Socket.io",
      },
      {
        logo: jwt,
        name: "JWT",
      },
      {
        logo: git,
        name: "Git",
      },
    ],
    link: "https://realtime-chat-f9le.onrender.com/",
  },

  {
    id: "3",
    name: "Page Summarizer-Chrome Extension",
    description: [
      " Integrated OpenAI API for advanced NLP, enabling automated summarization and context-based Q&A.",
      "Empowered users to create concise content summaries with up to 90% reliability.",
      "Designed an intuitive popup with user-friendly buttons for summarization and Q&A.",
    ],
    coverImage: youtube,
    workedOn: ["Chrome Extension"],
    technologies: [
      {
        logo: javascript,
        name: "Javascript",
      },
      {
        logo: tailwind,
        name: "CSS",
      },
      {
        logo: html,
        name: "html",
      },
      {
        logo: rapid,
        name: "Rapid API",
      },
    ],
    link: "https://github.com/abhay1748/Page-Summarizer-Chrome-Extension",
  },
];

export const frontend = [
  {
    logo: html,
    name: "HTML",
  },
  {
    logo: css,
    name: "CSS",
  },
  {
    logo: javascript,
    name: "Javascript",
  },
  {
    logo: react,
    name: "React.js",
  },
  {
    logo: react,
    name: "React Native",
  },
  {
    logo: redux,
    name: "Redux",
  },
  {
    logo: zustand,
    name: "Zustand",
  },
  {
    logo: tailwind,
    name: "Tailwind CSS",
  },
];
export const backend = [
  {
    logo: node,
    name: "Node.js",
  },
  {
    logo: express,
    name: "Express.js",
  },
  {
    logo: mongodb,
    name: "MongoDB",
  },
  {
    logo: postgres,
    name: "PostgreSQL",
  },
];
export const other = [
  {
    logo: java,
    name: "Java",
  },
  {
    logo: git,
    name: "Git",
  },
  {
    logo: github,
    name: "Github",
  },
  {
    logo: postman,
    name: "Postman",
  },
  {
    logo: vscode,
    name: "VS Code",
  },
];
