import { h } from "preact";
import { useEffect } from "preact/hooks";

interface BackgroundProps {
  children: h.JSX.Element | h.JSX.Element[] | string | null;
}

export const Background: preact.FunctionComponent<BackgroundProps> = ({
  children,
}) => {

  // TODO: better dots
  useEffect(() => {
    const numRows = 20;
    const numCols = numRows * 2;
    const container = document.getElementById("dots-container");

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const dot = document.createElement("div");
        dot.classList.add(
          "bg-gray-400",
          "w-[2px]",
          "aspect-square",
          "rounded-full",
          "absolute"
        );
        dot.style.top = `${(row * 100) / numRows}%`;
        dot.style.left = `${(col * 100) / numCols}%`;
        container?.appendChild(dot);
      }
    }
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-x-hidden bg-cover bg-opacity-25 bg-no-repeat bg-[url('./src/assets/background-colors.jpg')] flex flex-col items-center font-manrope -z-20 text-[#333333]">
      <div
        id="dots-container"
        className="fixed top-0 left-0 w-screen h-screen pointer-events-none -z-10"
      />
      {children}
    </div>
  );
};
