import { ProjectProps } from "./components/project";

export const hiText = "Hi, I'm Julian 👋";

const titleArray = [
  "Frontend developer",
  "Informatics student",
  "Software developer",
  "Web developer",
  "Mobile App Developer",
  "Problem solver",
  "Programming Enthusiast",
];

export const magicText = titleArray.sort(() => Math.random() - 0.5);


export const aboutText = [
  {
    title: "Introduction",
    icon: "rocket",
    text: "My name is Julian Ammouche Ottosen, I'm a passionate software developer who loves programming. Over the years, I've embraced coding, constantly seeking new challenges to grow my skills.",
  }, // With a keen eye for detail and a strong commitment to high-quality software, I'm thrilled to share my journey and projects with you.
  // Often products becomes more complex than needed due to the fast pace of startups. Simplifying and redesigning the user experience can make the product more effective.
  {
    title: "Tech background",
    icon: "code",
    text: "I'm currently pursuing a Bachelor's in informatics, which have given me a strong software engineering foundation. Proficient in TypeScript, Python, and Java, I've completed diverse projects in web development and mobile apps.",
  }, // My expertise in [Specific Area] is evident in [Project Name], where I achieved [Briefly Describe Accomplishment].
  {
    icon: "user",
    title: "Personal traits",
    text: "As a software developer, I bring valuable traits to the table. I excel in collaboration, effective communication, and constructive contributions within diverse teams. With thirst for knowledge, I continuously seek opportunities for learning.",
  }, // As a software developer, I bring valuable traits to the table. I excel in collaboration, effective communication, and constructive contributions within diverse teams.With an insatiable thirst for knowledge, I continuously seek opportunities for learning and self-improvement, staying at the forefront of cutting-edge developments in the software industry.
];

export const projects = [
  {
    title: "Enua installer app",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    technologies: ["React Native", "TypeScript", "Scrum", "Figma"],
    images: [
      "./iphone-screen.png",
      "./iphone-screen.png",
    ],
    typeOfImages: "mobile",
    link: "",
    githubLink: "",
    buttonText: "Learn more",
  } as ProjectProps,
  {
    title: "This portfolio",
    description:
      "Embodying \"less is more,\" my portfolio's clean design emphasizes both elegant interfaces and responsive navigation. It shines on every device, promising an immersive experience for all visitors",
    technologies: ["React", "TypeScript", "TailwindCSS", "Figma"],
    images: ["./portfolio2.jpg", "./portfolio2_phone.jpg",],
    typeOfImages: "desktop",
    link: "",
    githubLink: "https://github.com/julian-ao",
    buttonText: "Learn more",
  } as ProjectProps,
  {
    title: "Previous portfolio",
    description:
      "In my early days of learning React, I built a clean and responsive portfolio to showcase my skills and projects. It was a platform where I could exhibit my growing skills while emphasizing user-friendly design.",
    technologies: ["React", "TailwindCSS", "TailwindCSS"],
    images: ["./portfolio1Skills.jpg", "./portfolio1_phone.jpg"],
    typeOfImages: "desktop",
    link: "https://www.old.julianao.dev",
    githubLink: "https://github.com/julian-ao",
    buttonText: "View",
  } as ProjectProps,
  {
    title: "Password manager",
    description:
      "Collaborating with a group of fellow students, I contributed to the development of a robust password manager project. Our goal was to create a secure and efficient solution for managing and storing passwords. By leveraging our combined skills, we engineered a user-friendly interface that allowed users to securely store, generate, and organize their passwords.",
    technologies: ["Java", "JavaFX", "Maven", "Figma"],
    images: ["./passwordManager.jpg"],
    typeOfImages: "desktop",
    link: "https://github.com/julian-ao",
    githubLink: "https://github.com/julian-ao",
    buttonText: "View on Github",
  } as ProjectProps,
  {
    title: "Enua installer app",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    technologies: ["React Native", "TypeScript", "Scrum", "Figma"],
    images: [
      "./iphone-screen.png",
      "./iphone-screen.png",
      "./iphone-screen.png",
    ],
    typeOfImages: "mobile",
    link: "https://github.com/julian-ao",
    githubLink: "https://github.com/julian-ao",
    buttonText: "View on Github",
  } as ProjectProps,
];
