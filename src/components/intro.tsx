import { hiText, magicText } from "../constants";
import { Button } from "./button";
import { MagicText } from "./magicText";

export const Intro = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 w-full h-screen">
      <div className="flex flex-col items-center gap-5">
        <img src="./src/assets/images/profile.jpg" className="rounded-full w-52 shadow-big" />
        <div className="text-xl font-medium">{hiText}</div>
      </div>
      <MagicText
        textArray={magicText}
      />
      <Button onPress={() => {}}>Latest work</Button>
    </div>
  );
};
