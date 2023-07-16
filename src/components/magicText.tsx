import { useState, useEffect } from "preact/hooks";

interface MagicTextProps {
  textArray: string[];
}

export const MagicText: preact.FunctionComponent<MagicTextProps> = ({
  textArray,
}) => {
  const [displayText, setDisplayText] = useState<string>("");
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [writing, setWriting] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const currentText = textArray[currentTextIndex];

    if (writing) {
      if (currentIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText((prevText) => prevText + currentText[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 100); // Adjust the timeout for desired writing speed

        return () => clearTimeout(timeout);
      } else {
        // Wait for a second before starting backspacing
        setTimeout(() => {
          setWriting(false);
        }, 2000); // Adjust the pause duration after writing each string
      }
    } else {
      if (displayText.length === 0) {
        setTimeout(() => {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
          setWriting(true);
        }, 0); // Adjust the pause duration after writing each string
      } else {
        const timeout = setTimeout(() => {
          setDisplayText((prevText) => prevText.slice(0, -1)); // Remove one character with each backspace
          setCurrentIndex((prevIndex) => prevIndex - 1);
        }, 50); // Adjust the timeout for desired backspacing speed

        return () => clearTimeout(timeout);
      }
    }
  }, [currentTextIndex, textArray, writing, currentIndex, displayText]);

  return (
    <span className="h-[60px] animate-background-pan bg-gradient-to-r from-purple-600 via-violet-600 to-pink-600 bg-clip-text text-transparent whitespace-nowrap font-bold text-6xl">
      {displayText}
    </span>
  );
};
