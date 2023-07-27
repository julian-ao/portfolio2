import { projects } from "../constants";
import { Project } from "./project";

export const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center pt-20 mb-60 gap-52"
    >
      {projects.map((project, index) => {
        return <Project key={index} {...project} reverse={index % 2 === 1} />;
      })}
    </div>
  );
};
