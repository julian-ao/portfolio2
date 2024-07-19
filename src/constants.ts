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

export const projects = [,
  {
    title: "Reflection Tool",
    description:
      "For my bachelors project, me and six other students developed the Reflection Tool for NTNU. Reflection Tool is a platform where students can reflect on their learning experiences, and professors get summary feedback reports on each of their lectures.",
    technologies: ["Svelte", "TypeScript", "Python FastAPI", "Docker", "PostgreSQL"],
    images: [
      "./projects/reflection-tool/coursePage_optimized.png",
    ],
    typeOfImages: "desktop",
    link: "https://github.com/julian-ao/reflection-tool",
    githubLink: "https://github.com/julian-ao/reflection-tool",
    buttonText: "View on Github",
  } as ProjectProps,
  {
    title: '"DumBass" | Music app',
    description:
      'A website with songs lyrics and artist information, offering features like rating, favoriting, and search and filter options. Users can log in to personalize their experience.',
    technologies: ['MongoDB', 'Express', 'GraphQL', 'React', 'TypeScript'],
    images: ['./projects/dumbass/dumbass-home_optimized.png', './projects/dumbass/dumbass-song.png'],
    typeOfImages: 'desktop',
    link: 'https://github.com/julian-ao/dumbass',
    githubLink: 'https://github.com/julian-ao/dumbass',
    buttonText: 'View on Github',
  } as ProjectProps,
  {
    title: 'Enua Electrician App',
    description:
      'During my summer internship at Enua, a collegue and I developed the frontend for a mobile app for electricians installing the Enua wallmount. Utilizing Scrum and multiple user tests, we tailored the app to closely align with user needs, resulting in a product I am proud of.',
    technologies: [
      'React Native',
      'TypeScript',
      'User Testing',
      'Scrum',
      'Figma',
    ],
    images: [
      './projects/electricianapp/home_optimized.jpg',
      './projects/electricianapp/edit-facilities_optimized.jpg',
      './projects/electricianapp/nfc_optimized.jpg',
    ],
    typeOfImages: 'desktop',
    link: 'https://apps.apple.com/fi/app/enua-installer/id1600129092?platform=iphone',
    githubLink: '',
    buttonText: 'View on App Store',
  } as ProjectProps,
  /* {
    title: '"Sludd" | Weather app',
    description: '',
    //'In a team of four, I created a user-friendly weather application that integrates two REST APIs to provide comprehensive weather information for locations across Norway.',
    technologies: ['React', 'TypeScript', 'Vite', 'TanStack', 'Figma'],
    images: [
      './projects/sludd/sludd-search-desktop.jpg',
      './projects/sludd/sludd-phone.jpg',
    ],
    typeOfImages: 'desktop',
    link: 'https://github.com/julian-ao/sludd',
    githubLink: 'https://github.com/julian-ao/sludd',
    buttonText: 'View on Github',
  } as ProjectProps, */
  /* {
    title: 'Running week website',
    description:
      "Developed a website for a week-long charity run supporting the Children's Cancer Association, featuring registration, donations, and participant tracking via Strava API.",
    technologies: ['React', 'Figma'],
    images: [
      './projects/marathon/marathon-top-phone.jpg',
      './projects/marathon/marathon-mid-desktop.jpg',
    ],
    typeOfImages: 'desktop',
    link: 'https://github.com/appKom/online-maraton',
    githubLink: 'https://github.com/appKom/online-maraton',
    buttonText: 'View on Github',
  } as ProjectProps, */
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
  /* {
    title: 'Password manager',
    description:
      'Collaborating with a group of students, I contributed to the development of a password manager application. Our goal was to create a secure and efficient solution for managing and storing passwords. By using our combined skills, we developed a user-friendly app that allowed users to securely store, generate, and organize their passwords.',
    technologies: ['Java', 'JavaFX', 'Maven', 'Figma'],
    images: ['./projects/passwordManager.jpg'],
    typeOfImages: 'desktop',
    link: 'https://github.com/julian-ao/password-manager',
    githubLink: 'https://github.com/julian-ao/password-manager',
    buttonText: 'View on Github',
  } as ProjectProps, */
  /* {
    title: 'Social training application',
    description:
      'Collaborated in a team of 6 using Scrum to develop a social training app. Built with Next.js for a dynamic frontend and Google Firebase for seamless backend integration. The app enables users to set fitness goals, track progress, and connect with a community. Emphasis on iterative development ensured user-centric features.',
    technologies: ['Next.js', 'Google Firebase', 'Scrum'],
    images: ['./strev.jpg'],
    typeOfImages: 'desktop',
    link: 'https://github.com/julian-ao/strev',
    githubLink: 'https://github.com/julian-ao/strev',
    buttonText: 'View on Github',
  } as ProjectProps, */
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
    images: ["./portfolio1/portfolio1Skills.jpg", "./portfolio1/portfolio1_phone.jpg"],
    typeOfImages: "desktop",
    link: "https://www.old.julianao.dev",
    githubLink: "https://github.com/julian-ao/portfolio",
    buttonText: "View",
  } as ProjectProps, */
];
