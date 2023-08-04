import { ProjectProps } from "./components/project";

export const hiText = "Hi, I'm Julian 👋";

export const magicText = [
  "Frontend developer",
  "Informatics student",
  "Software developer",
];
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
    text: "I'm currently pursuing a Bachelor's in informatics, which have given me a strong software engineering foundation. Proficient in TypeScript, Python, and Java, I've completed diverse projects in web development, mobile apps, and automation.",
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
      "./src/assets/images/iphone-screen.png",
      "./src/assets/images/iphone-screen.png",
    ],
    typeOfImages: "mobile",
    github: "",
  } as ProjectProps,
  {
    title: "Previous portfolio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    technologies: ["React", "TailwindCSS", "TailwindCSS"],
    images: ["./src/assets/images/portfolio1Skills.jpg"],
    typeOfImages: "desktop",
    github: "",
  } as ProjectProps,
  {
    title: "Password manager",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    technologies: ["React", "TailwindCSS", "TailwindCSS"],
    images: ["./src/assets/images/portfolio1Skills.jpg"],
    typeOfImages: "desktop",
    github: "",
  } as ProjectProps,
  {
    title: "Enua installer app",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    technologies: ["React Native", "TypeScript", "Scrum", "Figma"],
    images: [
      "./src/assets/images/iphone-screen.png",
      "./src/assets/images/iphone-screen.png",
      "./src/assets/images/iphone-screen.png",
    ],
    typeOfImages: "mobile",
    github: "",
  } as ProjectProps,
];
