import { h } from "preact";
import { useEffect } from "preact/hooks";

interface BackgroundProps {
  children: h.JSX.Element | h.JSX.Element[] | string | null;
}

export const Background: preact.FunctionComponent<BackgroundProps> = ({
  children,
}) => {
  useEffect(() => {
    const container = document.getElementById("dots-container");

    const handleResize = () => {
      let numRows = window.innerHeight / 40;
      let numCols = numRows * (window.innerWidth / window.innerHeight);
      // Remove the existing dots before adding new ones on resize
      while (container?.firstChild) {
        container.removeChild(container.firstChild);
      }

      for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
          const dot = document.createElement("div");
          dot.classList.add(
            "bg-gray-400",
            "w-[2px]",
            "aspect-square",
            "rounded-full",
            "absolute",
          );
          dot.style.top = `${(row * 100) / numRows}%`;
          dot.style.left = `${(col * 100) / numCols}%`;
          container?.appendChild(dot);
        }
      }
    };

    handleResize(); // Call the handleResize function initially and add an event listener
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen w-screen overflow-x-hidden bg-cover bg-opacity-25 bg-no-repeat font-manrope text-[#333333] flex place-content-center background ">
      <div
        id="dots-container"
        className="top-0 left-0 w-screen h-screen fixed"
      />
      <div className="relative w-full">{children}</div>
    </div>
  );
};

// bg-[url('/background-colors.jpg')]
