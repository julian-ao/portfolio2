const aboutText = [
  {
    title: "Introduction",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Technical background",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Persoal traits",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const About = () => {
  return (
    <div className="w-full flex place-content-center">
      <div className="w-7/12 flex justify-between">
        {aboutText.map((element) => {
          return (
            <div className="w-1/4">
              <div className="font-bold text-xl">{element.title}</div>
              <div>{element.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
