import { FunctionalComponent } from "preact";
import { Button } from "./button";

export interface ProjectProps {
	title: string;
	description: string;
	technologies: string[];
  images: string[];
  typeOfImages: string;
	github: string;
  reverse: boolean;
}

export const Project: FunctionalComponent<ProjectProps> = (props) => {
	const { title, description, technologies, images, typeOfImages, reverse } = props;

	return (
		<div className={`flex w-10/12 gap-8 ${reverse && "flex-row-reverse"}`}>

      {/* <div className="bg-white/[.5] w-[45%] flex items-center justify-center p-6 rounded-2xl backdrop-blur shadow-big gap-10">
        {
          typeOfImages === "desktop" ? <img src={images[0]} alt="" className="w-full rounded-2xl" />
          : typeOfImages === "mobile" ? (
            images.map(image => (
              <img src={image} alt="" className="h-[450px] rounded-2xl" />
            )
          )) : null
        }
      </div> */}
      {
        typeOfImages === "desktop" ? (
          <div className="bg-white/[.5] w-[45%] flex place-content-center p-6 rounded-2xl backdrop-blur shadow-big gap-10">
            <img src={images[0]} alt="" className="w-full rounded-2xl" />
          </div>
        ) : typeOfImages === "mobile" ? (
          <div className="w-[40%] flex place-content-center gap-10">
            {images.map((image, index) => (
              <div key={index} className="bg-white/[.5] p-4 rounded-[50px] backdrop-blur shadow-big">
                <img src={image} alt="" className="h-[450px] rounded-2xl" />
              </div>
            ))}
          </div>
        ) : null
      }

      <div className="flex flex-col justify-center flex-1">
        <div className="text-5xl font-outfit mb-5">{title}</div>
        <div className="flex mb-8 gap-2">
          {technologies.map((tech, index) => (
            <div key={index} className="flex gap-2 text-xl">
              {tech}
              {index !== technologies.length - 1 && <div>/</div>}
            </div>
          ))}
        </div>
        <div className="text-xl backdrop-blur">{description}</div>
        <div className="flex justify-center mt-10">
          <Button onPress={() => {}}>View on Github</Button>
        </div>
      </div>
    </div>
	);
}