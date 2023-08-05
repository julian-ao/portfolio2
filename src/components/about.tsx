import { aboutText } from "../constants";
import { Rocket } from "../assets/icons/rocket";
import { Code } from "../assets/icons/code";
import { User } from "../assets/icons/user";

const iconClassName = "w-7 h-7 aspect-square fill-[#333]";

export const About = () => {
  /*return (
    <div className="w-full flex place-content-center">
      <div className="w-[75%] flex justify-between">
      {aboutText.map((element, index) => {
          return (
            <div key={index} className="w-[25%]">
              <div className="font-semibold text-2xl font-outfit mb-2">{element.title}</div>
              <div className="text-lg font-thin text-[rgba(0,16,36,.9)]">{element.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );*/

  return (
    <div className="w-full flex place-content-center gap-20
    mb-36 xl:mb-60 flex-col xl:flex-row items-center xl:items-start">
      {aboutText.map((element, index) => {
        return (
          <div
            key={index}
            className="bg-white/[.75] py-6 px-8 rounded-2xl backdrop-blur shadow-small
             w-[85%] md:w-[50%] xl:w-[25%] "
          >
            <div className="flex gap-4 items-center mb-3">
              {element.icon === "rocket" ? (
                <Rocket className={iconClassName} />
              ) : element.icon === "code" ? (
                <Code className={iconClassName} />
              ) : element.icon === "user" ? (
                <User className={iconClassName} />
              ) : null}
              <div className="font-medium capitalize font-outfit
              text-xl sm:text-2xl">
                {element.title}
              </div>
            </div>
            <div className="text-[rgba(0,16,36,.9)]
            text-base sm:text-lg">
              {element.text}
            </div>
          </div>
        );
      })}
    </div>
  );
};
