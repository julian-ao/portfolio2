import { FunctionalComponent } from "preact";
import { IconProps } from "./linkedin";

export const Envelope: FunctionalComponent<IconProps> = ({ className }) => {
  return (
    <svg className={className} width="40" height="41" viewBox="0 0 40 41" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_20_19476)">
        <path d="M3.74951 5.5C1.6792 5.5 -0.000488281 7.17969 -0.000488281 9.25C-0.000488281 10.4297 0.554199 11.5391 1.49951 12.25L18.4995 25C19.3901 25.6641 20.6089 25.6641 21.4995 25L38.4995 12.25C39.4448 11.5391 39.9995 10.4297 39.9995 9.25C39.9995 7.17969 38.3198 5.5 36.2495 5.5H3.74951ZM-0.000488281 14.25V30.5C-0.000488281 33.2578 2.2417 35.5 4.99951 35.5H34.9995C37.7573 35.5 39.9995 33.2578 39.9995 30.5V14.25L22.9995 27C21.2183 28.3359 18.7808 28.3359 16.9995 27L-0.000488281 14.25Z" />
      </g>
      <defs>
        <clipPath id="clip0_20_19476">
          <rect width="40" height="40" fill="white" transform="translate(-0.000488281 0.5)" />
        </clipPath>
      </defs>
    </svg>
  )
}