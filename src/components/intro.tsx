import { hiText, magicText } from "../constants";
import { Button } from "./button";
import { MagicText } from "./magicText";

export const Intro = () => {

  const handleButtonClick = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 w-full h-screen">
      <div className="flex flex-col items-center gap-5">
        <img src="./profile.jpg" className="rounded-full w-52 shadow-big" />
        <div className="text-xl font-medium">{hiText}</div>
      </div>
      <MagicText
        textArray={magicText}
      />
      <Button onPress={() => handleButtonClick('projects')}>Latest work</Button>
    </div>
  );
};
