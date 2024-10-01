import CrownIcon from "./public/icons/crown-icon.svg";
import PopcornIcon from "./public/icons/popcorn-icon.svg";
import BankIcon from "./public/icons/bank-icon.svg";
import JobIcon from "./public/icons/job-icon2.svg";
import WeatherIcon from "./public/icons/weather-icon.svg";
import ReactIcon from "./public/icons/react-icon.svg";
import ResetIcon from "./public/icons/reset-icon.svg";
import BeginningIcon from "./public/icons/beginning-icon.svg";
import PythonIcon from "./public/icons/python-icon.svg";
import ErrorIcon from "./public/icons/error-icon.svg";

export const timelineData = [
  {
    id: 10,
    title: "How it all started...",
    // location: ", Ascana",
    description:
      "It is 2019, I was working as a teacher. A friend who is a developer had just higntened my interest in learning how to code and so I started my coding journey learning Python's Django framework.",

    // buttonText: "View Frontend Project",
    date: "August, 2019",
    icon: <BeginningIcon />,
    background: "purple ",
  },
  {
    id: 9,
    title: "First Project",
    // location: "Dragontail, Ascana",
    description:
      "After following a Python Django tutorial by Mosh Amedani for a while, I built my first project. It was a very basic ecommerce  website for online grocery shopping. For me, this was a first taste of blood.",

    // buttonText: "View Frontend Project",
    date: "November, 2019",
    icon: <PythonIcon />,
    background: "#ffd43b",
  },
  {
    id: 8,
    title: "Reset Button",
    // location: "Dragontail, Ascana",
    description:
      "Everything I had learnt until this point felt not solid enough and so I decided to restart my frontend developer journey the proper way. I picked up on HTML and CSS from the very basics. A month into learning, I built my first HTML and CSS(SASS) project.",

    buttonText: "Live Demo",
    date: "January, 2020",
    icon: <ResetIcon />,
    url: "https://hairwayslandingpage.netlify.app/",
    background: "orange",
  },
  {
    id: 7,
    title: "Reacting to React",
    // location: "Dragontail, Ascana",
    description:
      "Immediately after building my first static HTML and CSS project, I realized I needed to upskill and so I signed up for Andrei Naegoie's Complete Web Developer - Zero to Mastery Udemy course. This was my first encounter with React Js. A month into following the course, I built my first React app.",

    buttonText: "Live Demo",
    date: "March, 2020",
    icon: <ReactIcon />,
    background: "rgb(97, 218, 251)",
    url: "https://gamarchive.netlify.app/",
  },
  {
    id: 6,
    title: "Tutorial Hell",
    // location: "Dragontail, Ascana",
    description:
      "At this point I had signed up for up to 4 different long hours Udemy courses to learn frontend development, yet I never was able to step into the independent process of building personal projects from scratch. I found some really helpful YouTube channels and they helped me take the first steps towards getting out of tutorial purgatory.",

    // buttonText: "View Frontend Project",
    date: "May, 2020",
    icon: <ErrorIcon />,
    background: "#da3434",
  },
  {
    id: 5,
    title: "SkyEye",
    // location: "Dragontail, Ascana",
    description:
      "At this point, I was advised to put together a portfolio and so I started working on my first portfolio project. It is a ReactJs app built using the open weather map api. The app allows querying of weather information about any city in the world. Original design for the app was done in Figma.",

    buttonText: "Live Demo",
    date: "June, 2020",
    icon: <WeatherIcon />,
    background: "skyblue",
    url: "https://skyeye.netlify.app/",
  },
  {
    id: 4,
    title: "Bankist",
    // location: "Dragontail, Ascana",
    description:
      "Immediately after completing my first portfolio project, I started on the next one. It is a marketing website for a ficticious banking business which was built using HTML, CSS(SASS), and finished with some nice functionalities using vanilla JavaScript.",

    buttonText: "Live Demo",
    date: "August, 2020",
    icon: <BankIcon />,
    background: "green",
    url: "https://bankkist.netlify.app/",
  },
  {
    id: 3,
    title: "Silverscreen",
    // location: "Drag",
    description:
      "I had decided to build at least four portfolio projects before working on the portfolio site itself. I then set out to build my next portfolio project which is a cinema app that exemplifies the SPA power of React using dynamic nested routes.",
    buttonText: "Live Demo",
    date: "December, 2020",
    icon: <PopcornIcon />,
    url: "https://thesilverscreen.netlify.app/",

    background: "red",
  },
  {
    id: 2,
    title: "Frontend Developer",
    location: "Abuja, Nigeria/Remote",
    description:
      "After taking the time to put together some projects for my portfolio, I set out to working on the portfolio website itself. With the portfolio now ready, I proceeded to sending out applications. I had a couple of interviews and landed some offers including the one I took for my current role as a Frontend developer at Hayok Medicare Limited.",

    // buttonText: "View Frontend Project",
    date: "July, 2021 - Feb, 2022",
    icon: <JobIcon />,
    background: "#1e1e56",
  },
  {
    id: 1,
    title: "Web Developer",
    location: "Manchester, UK/Remote",
    description:
      "At this point, I already have over 2 years professional experience from my previous and current role. I was excited by the prospect of transitioning into a fullstack developer and I have been able to do just that, building and learning cool stuffs in my current role as a web developer at Fezzant Ltd.",

    // buttonText: "View Frontend Project",
    date: "Feb, 2022 - present",
    icon: <JobIcon style={{ fill: "#1e1e56" }} />,
    background: "rgb(255, 222, 244)",
  },

  // {
  //   id: 2,
  //   title: "Crwn Clothing",
  //   // location: "Dragontail, Ascana",
  //   description:
  //     "Having worked with React for some time, I felt the need to get more insight into the inner workings of the framework and so I signed up for Andrei Naegoie's Complete React Developer Course on Udemy. After going through the course, I built my last portfolio project. It Is a full-stack e-commerce website that is able to handle and integrate secure payments, routes, noSQL database, and OAuth.",
  //   buttonText: "Live Demo",
  //   date: "February, 2021",
  //   icon: <CrownIcon />,
  //   url: "https://crwn-clothingline.herokuapp.com/",
  //   background: "gold",
  // },
];
