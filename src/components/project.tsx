import { FunctionalComponent } from "preact";
import { Button } from "./button";
import clsx from "clsx";

export interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  typeOfImages: string;
  link: string;
  githubLink: string;
  buttonText: string;
  reverse: boolean;
  imageBorder: boolean;
}

export const Project: FunctionalComponent<ProjectProps> = (props) => {
  const {
    title,
    description,
    technologies,
    images,
    reverse,
    link,
    buttonText,
    imageBorder = true,
  } = props;

  let technologiesString = "";
  technologies.forEach((tech, index) => {
    technologiesString += tech;
    if (index !== technologies.length - 1) {
      technologiesString += " ";
      technologiesString += " / ";
      technologiesString += " ";
    }
  });

  return (
    <div
      className={`flex w-10/12 gap-5 sm:gap-8 ${
        reverse && "xl:flex-row-reverse"
      } xl:flex-row flex-col`}
    >
      {" "}
      {/* max-h-[400px] */}
      <div
        className="xl:w-1/2 flex place-content-center
      xl:px-10 sm:py-5 xl:py-10"
      >
        <div className="xl:w-full max-h-[500px] flex place-content-center gap-4 sm:gap-10">
          {images.map(
            (
              image,
              index, // p-[3%]
            ) => (
              <div className={clsx(imageBorder && "bg-white/[.5] backdrop-blur overflow-hidden shadow-big rounded-3xl relative group p-2 h-full")}>
                <img
                  key={index}
                  src={image}
                  alt=""
                  className="h-full object-cover max-h-[500px] rounded-2xl select-none"
                />
                {/* {
                link !== "" && (
                  <a href={link} target="_blank" className="opacity-0 group-hover:opacity-100 backdrop-blur backdrop-opacity-75 cursor-pointer transition-opacity absolute top-0 left-0 h-full w-full flex items-center justify-center bg-gray-100 bg-opacity-40">
                    {buttonText}
                  </a>
                )
              } */}
              </div>
            ),
          )}
        </div>

        {/* {typeOfImages === "desktop" ? (
          <img src={images[0]} alt="" className="
            max-h-[500px] h-full w-auto bg-white/[.5] object-cover p-6 backdrop-blur shadow-big relative overflow-hidden" />

        ) : typeOfImages === "mobile" ? (
            <div className="xl:w-full max-h-[500px] flex place-content-center gap-10">
              {images.map((image, index) => (
                <img key={index} src={image} alt="" className="bg-white/[.5] p-4 backdrop-blur shadow-big h-full w-auto object-cover relative overflow-hidden" />
              ))}
            </div>

        ) : null} */}
      </div>
      <div className="flex flex-col justify-center flex-1">
        <div className="font-outfit text-4xl sm:text-5xl">{title}</div>
        <div
          className="flex my-3 sm:my-5 max-w-[100%] w-max flex-wrap italic
        text-lg sm:text-xl"
        >
          {/*technologiesString*/}
          {technologies.map((tech, index) => (
            <div key={index} className="flex gap-2 text-xl mr-2">
              {tech}
              {index !== technologies.length - 1 && <div>/</div>}
            </div>
          ))}
        </div>
        <div
          className="
        text-lg sm:text-xl"
        >
          {description}
        </div>
        {link !== "" && (
          <div className="flex justify-center mt-10">
            <Button
              tag="a"
              href={link}
            >
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
{
  /* <div
              key={index}
              className="bg-white/[.5] p-4 backdrop-blur shadow-big relative overflow-hidden" //rounded-[50px]
            >
              <img src={image} alt="" className="h-full w-full object-cover" />
            </div> */
}
