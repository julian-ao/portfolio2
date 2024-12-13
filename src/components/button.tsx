import { h } from "preact";

interface ButtonProps {
  children: h.JSX.Element | h.JSX.Element[] | string | null;
  onPress?: () => void;
  tag?: "button" | "a";
  href?: string;
}

export const Button: preact.FunctionComponent<ButtonProps> = ({
  children,
  onPress,
  tag = "button",
  href,
}) => {
  const Tag = tag as keyof h.JSX.IntrinsicElements;

  return (
    <Tag
      className="bg-white/[.75] flex justify-center items-center rounded drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] font-medium cursor-pointer duration-200 hover:bg-gray-100 select-none backdrop-blur tracking-wider
      text-base sm:text-lg w-44 sm:w-52 h-10 sm:h-12 min-h-[2.5rem]"
      onClick={tag === "button" ? onPress : undefined}
      href={tag === "a" ? href : undefined}
      target={tag === "a" ? "_blank" : undefined}
    >
      {children}
    </Tag>
  );
};
