import { ProjectProps } from './components/project';

export const hiText = "Hi, I'm Julian 👋";

const titleArray = [
  'Frontend developer',
  'Informatics student',
  'Software developer',
  'Web developer',
  'Mobile App Developer',
  'Problem solver',
  'Programming Enthusiast',
];

export const magicText = titleArray.sort(() => Math.random() - 0.5);

export const aboutText = [
  {
    title: 'Introduction',
    icon: 'rocket',
    text: "My name is Julian Ammouche Ottosen, I'm a passionate software developer who loves programming. Over the years, I've embraced coding, constantly seeking new challenges to grow my skills.",
  }, // With a keen eye for detail and a strong commitment to high-quality software, I'm thrilled to share my journey and projects with you.
  // Often products becomes more complex than needed due to the fast pace of startups. Simplifying and redesigning the user experience can make the product more effective.
  {
    title: 'Tech background',
    icon: 'code',
    text: "I'm currently pursuing a Bachelor's in informatics, which have given me a strong software engineering foundation. Proficient in TypeScript, Python, and Java, I've completed diverse projects in web development and mobile apps.",
  }, // My expertise in [Specific Area] is evident in [Project Name], where I achieved [Briefly Describe Accomplishment].
  {
    icon: 'user',
    title: 'Personal traits',
    text: 'As a software developer, I bring valuable traits to the table. I excel in collaboration, effective communication, and constructive contributions within diverse teams. With thirst for knowledge, I continuously seek opportunities for learning.',
  }, // As a software developer, I bring valuable traits to the table. I excel in collaboration, effective communication, and constructive contributions within diverse teams.With an insatiable thirst for knowledge, I continuously seek opportunities for learning and self-improvement, staying at the forefront of cutting-edge developments in the software industry.
];

export const projects = [
  {
    title: '"DumBass" | Music app',
    description: '',
    technologies: ['MongoDB', 'Express', 'GraphQL', 'React', 'TypeScript'],
    images: ['./dumbass-home.png', './dumbass-song.png'],
    link: 'https://github.com/julian-ao/dumbass',
    githubLink: 'https://github.com/julian-ao/dumbass',
    buttonText: 'View on Github',
  },
  {
    title: '"Sludd" | Weather app',
    description:
      'In a team of four, I created a user-friendly weather application that integrates two REST APIs to provide comprehensive weather information for locations across Norway.',
    technologies: ['React', 'TypeScript', 'Vite', 'TanStack', 'Figma'],
    images: ['./sludd-search-desktop.jpg', './sludd-phone.jpg'],
    link: 'https://github.com/julian-ao/sludd',
    githubLink: 'https://github.com/julian-ao/sludd',
    buttonText: 'View on Github',
  } as ProjectProps,
  {
    title: 'Running week website',
    description:
      "Led frontend development for a week-long charity run supporting the Children's Cancer Association. Created a user-friendly website with features for event registration, donations, and participant tracking through Strava API integration.",
    technologies: ['React', 'Figma'],
    images: ['./marathon-top-phone.jpg', './marathon-mid-desktop.jpg'],
    link: 'https://github.com/appKom/online-maraton',
    githubLink: 'https://github.com/appKom/online-maraton',
    buttonText: 'View on Github',
  } as ProjectProps,
  /*{
    title: "Enua installer app",
    description:
      "During my summer internship at Enua, I was part of a project to create a React Native mobile app for both Android and iOS. The app was designed to assist electricians in installing Enua's wall mount for electric car chargers. Following the Scrum methodology, we iteratively developed the app, incorporating user feedback. The outcome was a user-friendly utility that optimized the installation procedure, emphasizing the significance of effective teamwork and the integration of technology in real-world solutions.",
    technologies: ["React Native", "TypeScript", "Scrum", "Figma"],
    images: [
      "./iphone-screen.png",
      "./iphone-screen.png",
      "./iphone-screen.png",
    ],
    typeOfImages: "mobile",
    link: "",
    githubLink: "",
    buttonText: "Learn more",
  } as ProjectProps,*/
  {
    title: 'Password manager',
    description:
      'Collaborating with a group of fellow students, I contributed to the development of a robust password manager project. Our goal was to create a secure and efficient solution for managing and storing passwords. By leveraging our combined skills, we engineered a user-friendly interface that allowed users to securely store, generate, and organize their passwords.',
    technologies: ['Java', 'JavaFX', 'Maven', 'Figma'],
    images: ['./passwordManager.jpg'],
    typeOfImages: 'desktop',
    link: 'https://github.com/julian-ao/password-manager',
    githubLink: 'https://github.com/julian-ao/password-manager',
    buttonText: 'View on Github',
  } as ProjectProps,
  {
    title: 'Social training application',
    description:
      'Collaborated in a team of 6 using Scrum to develop a social training app. Built with Next.js for a dynamic frontend and Google Firebase for seamless backend integration. The app enables users to set fitness goals, track progress, and connect with a community. Emphasis on iterative development ensured user-centric features.',
    technologies: ['Next.js', 'Google Firebase', 'Scrum'],
    images: ['./strev.jpg'],
    typeOfImages: 'desktop',
    link: 'https://github.com/julian-ao/strev',
    githubLink: 'https://github.com/julian-ao/strev',
    buttonText: 'View on Github',
  } as ProjectProps,
  /* {
    title: "This portfolio",
    description:
      "Embodying \"less is more,\" my portfolio's clean design emphasizes both elegant interfaces and responsive navigation. It shines on every device, promising an immersive experience for all visitors",
    technologies: ["React", "TypeScript", "TailwindCSS", "Figma"],
    images: ["./portfolio2.jpg", "./portfolio2_phone.jpg",],
    typeOfImages: "desktop",
    link: "https://github.com/julian-ao/portfolio2",
    githubLink: "https://github.com/julian-ao/portfolio2",
    buttonText: "View on Github",
  } as ProjectProps, */
  /* {
    title: "Previous portfolio",
    description:
      "In my early days of learning React, I built a clean and responsive portfolio to showcase my skills and projects. It was a platform where I could exhibit my growing skills while emphasizing user-friendly design.",
    technologies: ["React", "TailwindCSS", "TailwindCSS"],
    images: ["./portfolio1Skills.jpg", "./portfolio1_phone.jpg"],
    typeOfImages: "desktop",
    link: "https://www.old.julianao.dev",
    githubLink: "https://github.com/julian-ao/portfolio",
    buttonText: "View",
  } as ProjectProps, */
];
