import { h } from "preact";

interface ButtonProps {
  children: h.JSX.Element | h.JSX.Element[] | string | null;
  onPress: () => void;
}

export const Button: preact.FunctionComponent<ButtonProps> = ({ children, onPress }) => {

  return (
    <div
      className="bg-white/[.75] w-52 h-12 flex justify-center items-center text-lg rounded drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] font-medium cursor-pointer duration-200 hover:bg-gray-100 select-none backdrop-blur tracking-wider"
      onClick={onPress}
    >
      {children}
    </div>
  );
};
