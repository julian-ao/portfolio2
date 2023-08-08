import { Background } from "./components/background";
import { Intro } from "./components/intro";
import { Navbar } from "./components/navbar";
import { Projects } from "./components/projects";

export const App = () => {
  return (
    <Background>
      <Navbar />
      <Intro />
      <Projects />
      <Navbar />
    </Background>
  );
};
