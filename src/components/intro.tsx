import { Button } from "./button";
import { MagicText } from "./magicText";

export const Intro = () => {
  return (
    <div className="my-52 flex flex-col items-center gap-10 w-full">
      <div className="flex flex-col items-center gap-5">
        <img src="./src/assets/profile.jpg" className="rounded-full w-52" />
        <div className="text-xl font-medium">Hi, I'm Julian 👋</div>
      </div>
      <MagicText
        textArray={[
          "Frontend developer",
          "Informatics student",
          "Software developer",
        ]}
      />
      <Button>Latest work</Button>
    </div>
  );
};
