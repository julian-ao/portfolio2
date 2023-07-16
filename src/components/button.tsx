import { h } from "preact";

interface ButtonProps {
    children: h.JSX.Element | h.JSX.Element[] | string | null;
}

export const Button: preact.FunctionComponent<ButtonProps> = ({
  children,
}) => {
  return (
    <a className='bg-white/[.75] w-52 h-12 flex justify-center items-center text-lg rounded backdrop-blur drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] font-medium cursor-pointer'>
      {children}
    </a>
  );
}
  