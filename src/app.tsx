import { Background } from "./components/background";
import { Intro } from "./components/intro";
import { Navbar } from "./components/navbar";
import { Projects } from "./components/projects";
import { Analytics } from "@vercel/analytics/react"

export const App = () => {
  return (
    <Background>
      <Analytics />
      <Navbar />
      <Intro />
      <Projects />
      <Navbar />
    </Background>
  );
};
