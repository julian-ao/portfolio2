import { projects } from "../constants";
import { Button } from "./button";
import { Project } from "./project";

export const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center pt-20 mb-32 md:mb-60
      gap-32 sm:gap-40 xl:gap-64"
    >
      {projects.map((project, index) => {
        return <Project key={index} {...project} reverse={index % 2 === 1} />;
      })}
      <Button onPress={() => window.open("https://github.com/julian-ao", "_blank")}>
        View more
      </Button>
    </div>
  );
};
